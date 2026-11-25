import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Award, HeartHandshake } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { Gallery } from '../components/Gallery';


const ABOUT_GALLERY = [
  { src: '/images/gallery/raw-shea-butter', caption: 'Raw Shea Butter, 100 g', kicker: 'Gladchemistry' },
  { src: '/images/gallery/skin-moist', caption: 'Skin Moist, for very dry skin', kicker: 'Gladchemistry' },
  { src: '/images/gallery/sheacoco-hair-care', caption: 'SheaCoco Hair Care', kicker: 'Gladchemistry' },
  { src: '/images/gallery/hair-food', caption: 'Hair Food', kicker: 'Gladchemistry' },
];

export const About: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ui-card rounded-[2.5rem] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7 space-y-5">
            <BrandLogo brand="gladchemistry" size="lg" />
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
              Formulated with Purpose, Crafted in South Africa
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Gladchemistry Products was founded on a simple belief: everyday essentials—from the
              organic personal care you put on your skin, to the fine fragrances in your home and
              car, to the detergents that keep your spaces spotless—deserve uncompromising quality.
            </p>
          </div>
          <div className="lg:col-span-5">
            {/* Her own photograph of the Gladchemistry jar, not a stock template
                graphic. The label in the frame is the label on the shelf. */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/gallery/skin-moist-close.webp"
                alt="Gladchemistry Skin Moist jar"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FlaskConical,
              title: 'Precision Chemistry',
              desc: 'Every batch is balanced for maximum efficacy, safety, and long-lasting performance.',
              color: 'bg-emerald-100 text-emerald-700',
            },
            {
              icon: Leaf,
              title: 'Organic Extracts',
              desc: 'Our Gladchemistry personal care range prioritizes gentle, skin-loving botanicals.',
              color: 'bg-lime-100 text-lime-700',
            },
            {
              icon: Award,
              title: 'Fine Fragrance Oils',
              desc: 'Feliz be Glad uses high-concentration parfum oils for rich, enduring sillage.',
              color: 'bg-amber-100 text-amber-700',
            },
            {
              icon: HeartHandshake,
              title: 'Retail & Wholesale',
              desc: 'Serving individual households, boutiques, and commercial bulk buyers nationwide.',
              color: 'bg-sky-100 text-sky-700',
            },
          ].map((pillar) => (
            <div key={pillar.title} className="ui-card rounded-3xl p-6 space-y-4">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${pillar.color}`}>
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Her own personal-care photography, set as a gallery rather than one
            decorative picture, so the page shows the actual range. */}
        <section>
          <Gallery
            eyebrow="The personal care range"
            title={
              <>
                Jars we fill,{' '}
                <em className="u-mark not-italic" style={{ color: 'var(--fern)' }}>
                  labels we print
                </em>
                .
              </>
            }
            intro="Gladchemistry skincare and hair care, photographed as packed."
            tiles={ABOUT_GALLERY}
          />
        </section>
      </div>
    </div>
  );
};
