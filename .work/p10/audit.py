"""Senior image audit: does each catalogue picture show HER actual brand?"""
import sys, os, re, json, glob
sys.path.insert(0, '.work/tmp')
from segment import bbox
from PIL import Image
import numpy as np

src = open('scripts/build-frames.py').read()
ns = {}
exec(re.search(r"^SRC = \{.*?^\}", src, re.S|re.M).group(0), ns)
SRC = ns['SRC']

prods = open('src/data/products.ts').read()
blocks = prods.split('p({')[1:]
meta = {}
for b in blocks:
    pid = re.search(r"id:\s*'([^']+)'", b)
    nm  = re.search(r"name:\s*'([^']+)'", b)
    im  = re.search(r"image:\s*'([^']+)'", b)
    if pid and nm:
        meta[pid.group(1)] = dict(name=nm.group(1),
                                  frame=os.path.basename(im.group(1)) if im else None)

def measure(path):
    im = Image.open(path)
    has_a = im.mode in ('RGBA','LA') or (im.mode=='P' and 'transparency' in im.info)
    im2 = im.convert('RGBA'); W,H = im2.size
    if has_a:
        b = im2.getchannel('A').point(lambda v:255 if v>8 else 0).getbbox() or (0,0,W,H)
    else:
        b = bbox(im2.convert('RGB')) or (0,0,W,H)
    x0,y0,x1,y1 = b
    return dict(W=W,H=H,prod_w=int(x1-x0),prod_h=int(y1-y0),alpha=has_a,
                short=min(W,H),
                edge=any([x0<=2,y0<=2,x1>=W-2,y1>=H-2]))

rows=[]
for pid, s in SRC.items():
    p = 'public/images/products/'+s
    fr = meta.get(pid,{}).get('frame')
    fpath = 'public/images/frames/'+fr if fr else None
    m = measure(p) if os.path.exists(p) else None
    fs = Image.open(fpath).size if fpath and os.path.exists(fpath) else None
    rows.append(dict(pid=pid, name=meta.get(pid,{}).get('name',pid), src=s,
                     prod=m, frame=fs))
json.dump(rows, open('.work/p10/rows.json','w'), indent=1)
print(f"{'product':30} {'source':>11} {'pack px':>10} {'frm':>10} {'up':>5} {'edge':>5}")
for r in sorted(rows, key=lambda r: r['prod']['short'] if r['prod'] else 0):
    m=r['prod']
    if not m: print(r['pid'],'NO SOURCE'); continue
    fw = r['frame'][0] if r['frame'] else 0
    up = (740/fw) if fw else 0
    print(f"{r['pid']:30} {m['W']:>4}x{m['H']:<6} {m['prod_w']:>4}x{m['prod_h']:<5} "
          f"{(str(r['frame'][0])+'x'+str(r['frame'][1])) if r['frame'] else '-':>10} {up:5.2f} "
          f"{'YES' if m['edge'] else '-':>5}")
