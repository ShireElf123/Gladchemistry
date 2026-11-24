var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _config, _defaults, _suppressOverwrites, _reverting, _context, _bigNum, _tinyNum, _2PI, _HALF_PI, _gsID, _sqrt, _cos, _sin, _isString, _isFunction, _isNumber, _isUndefined, _isObject, _isNotFalse, _windowExists, _isFuncOrString, _isTypedArray, _isArray, _randomExp, _commaDelimExp, _strictNumExp, _numExp, _numWithUnitExp, _complexStringNumExp, _relExp, _delimitedValueExp, _unitExp, _globalTimeline, _win, _coreInitted, _doc, _globals, _installScope, _coreReady, _install, _missingPlugin, _warn, _addGlobal, _emptyFunc, _startAtRevertConfig, _revertConfigNoKill, _revertConfig, _reservedProps, _lazyTweens, _lazyLookup, _lastRenderedFrame, _plugins, _effects, _nextGCFrame, _harnessPlugins, _callbackNames, _harness, _getCache, _getProperty, _forEachName, _round, _roundPrecise, _parseRelative, _arrayContainsAny, _lazyRender, _isRevertWorthy, _lazySafeRender, _numericIfPossible, _passThrough, _setDefaults, _setKeyframeDefaults, _merge, _mergeDeep, _copyExcluding, _inheritDefaults, _arraysMatch, _addLinkedListItem, _removeLinkedListItem, _removeFromParent, _uncache, _recacheAncestors, _rewindStartAt, _hasNoPausedAncestors, _elapsedCycleDuration, _animationCycle, _parentToChildTotalTime, _setEnd, _alignPlayhead, _postAddChecks, _addToTimeline, _scrollTrigger, _attemptInitTween, _parentPlayheadIsBeforeStart, _isFromOrFromStart, _renderZeroDurationTween, _findNextPauseTween, _setDuration, _onUpdateTotalDuration, _zeroPosition, _parsePosition, _createTweenType, _conditionalReturn, _clamp, getUnit, clamp, _slice, _isArrayLike, _flatten, toArray, selector, shuffle, distribute, _roundModifier, snap, random, pipe, unitize, normalize, _wrapArray, wrap, wrapYoyo, _replaceRandom, mapRange, interpolate, _getLabelInDirection, _callback, _interrupt, _quickTween, _registerPluginQueue, _createPlugin, _255, _colorLookup, _hue, splitColor, _colorOrderData, _formatColors, _colorExp, _hslExp, _colorStringFilter, _tickerActive, _ticker, _wake, _easeMap, _customEaseExp, _quotesExp, _parseObjectInString, _valueInParentheses, _configEaseFromString, _invertEase, _parseEase, _insertEase, _easeInOutFromOut, _configElastic, _configBack, GSCache, Animation2, Timeline, _addComplexStringPropTween, _addPropTween, _processVars, _checkPlugin, _overwritingTween, _forceAllPropTweens, _initTween, _updatePropTweens, _addAliasesToVars, _parseKeyframe, _parseFuncOrString, _staggerTweenProps, _staggerPropsToSkip, Tween, _setterPlain, _setterFunc, _setterFuncWithParam, _setterAttribute, _getSetter, _renderPlain, _renderBoolean, _renderComplexString, _renderPropTweens, _addPluginModifier, _killPropTweensOf, _setterWithModifier, _sortPropTweensByPriority, PropTween, _media, _listeners, _emptyArray, _lastMediaTime, _contextID, _dispatch, _onMediaChange, Context, MatchMedia, _gsap, _getPluginPropTween, _addModifiers, _buildModifierPlugin, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ;
var init_gsap_core = __esm({
  "node_modules/gsap/gsap-core.js"() {
    _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    };
    _defaults = {
      duration: 0.5,
      overwrite: false,
      delay: 0
    };
    _bigNum = 1e8;
    _tinyNum = 1 / _bigNum;
    _2PI = Math.PI * 2;
    _HALF_PI = _2PI / 4;
    _gsID = 0;
    _sqrt = Math.sqrt;
    _cos = Math.cos;
    _sin = Math.sin;
    _isString = function _isString2(value) {
      return typeof value === "string";
    };
    _isFunction = function _isFunction2(value) {
      return typeof value === "function";
    };
    _isNumber = function _isNumber2(value) {
      return typeof value === "number";
    };
    _isUndefined = function _isUndefined2(value) {
      return typeof value === "undefined";
    };
    _isObject = function _isObject2(value) {
      return typeof value === "object";
    };
    _isNotFalse = function _isNotFalse2(value) {
      return value !== false;
    };
    _windowExists = function _windowExists2() {
      return typeof window !== "undefined";
    };
    _isFuncOrString = function _isFuncOrString2(value) {
      return _isFunction(value) || _isString(value);
    };
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
    };
    _isArray = Array.isArray;
    _randomExp = /random\([^)]+\)/g;
    _commaDelimExp = /,\s*/g;
    _strictNumExp = /(?:-?\.?\d|\.)+/gi;
    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
    _relExp = /[+-]=-?[.\d]+/;
    _delimitedValueExp = /[^,'"\[\]\s]+/gi;
    _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
    _globals = {};
    _installScope = {};
    _install = function _install2(scope) {
      return (_installScope = _merge(scope, _globals)) && gsap;
    };
    _missingPlugin = function _missingPlugin2(property, value) {
      return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
    };
    _warn = function _warn2(message, suppress) {
      return !suppress && console.warn(message);
    };
    _addGlobal = function _addGlobal2(name, obj) {
      return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
    };
    _emptyFunc = function _emptyFunc2() {
      return 0;
    };
    _startAtRevertConfig = {
      suppressEvents: true,
      isStart: true,
      kill: false
    };
    _revertConfigNoKill = {
      suppressEvents: true,
      kill: false
    };
    _revertConfig = {
      suppressEvents: true
    };
    _reservedProps = {};
    _lazyTweens = [];
    _lazyLookup = {};
    _plugins = {};
    _effects = {};
    _nextGCFrame = 30;
    _harnessPlugins = [];
    _callbackNames = "";
    _harness = function _harness2(targets) {
      var target = targets[0], harnessPlugin, i;
      _isObject(target) || _isFunction(target) || (targets = [targets]);
      if (!(harnessPlugin = (target._gsap || {}).harness)) {
        i = _harnessPlugins.length;
        while (i-- && !_harnessPlugins[i].targetTest(target)) {
        }
        harnessPlugin = _harnessPlugins[i];
      }
      i = targets.length;
      while (i--) {
        targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
      }
      return targets;
    };
    _getCache = function _getCache2(target) {
      return target._gsap || _harness(toArray(target))[0]._gsap;
    };
    _getProperty = function _getProperty2(target, property, v) {
      return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
    };
    _forEachName = function _forEachName2(names, func) {
      return (names = names.split(",")).forEach(func) || names;
    };
    _round = function _round2(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _roundPrecise = function _roundPrecise2(value) {
      return Math.round(value * 1e7) / 1e7 || 0;
    };
    _parseRelative = function _parseRelative2(start, value) {
      var operator = value.charAt(0), end = parseFloat(value.substr(2));
      start = parseFloat(start);
      return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
    };
    _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
      var l = toFind.length, i = 0;
      for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
      }
      return i < l;
    };
    _lazyRender = function _lazyRender2() {
      var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
      _lazyLookup = {};
      _lazyTweens.length = 0;
      for (i = 0; i < l; i++) {
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
      }
    };
    _isRevertWorthy = function _isRevertWorthy2(animation) {
      return !!(animation._initted || animation._startAt || animation.add);
    };
    _lazySafeRender = function _lazySafeRender2(animation, time2, suppressEvents, force) {
      _lazyTweens.length && !_reverting && _lazyRender();
      animation.render(time2, suppressEvents, force || !!(_reverting && time2 < 0 && _isRevertWorthy(animation)));
      _lazyTweens.length && !_reverting && _lazyRender();
    };
    _numericIfPossible = function _numericIfPossible2(value) {
      var n = parseFloat(value);
      return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
    };
    _passThrough = function _passThrough2(p2) {
      return p2;
    };
    _setDefaults = function _setDefaults2(obj, defaults2) {
      for (var p2 in defaults2) {
        p2 in obj || (obj[p2] = defaults2[p2]);
      }
      return obj;
    };
    _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
      return function(obj, defaults2) {
        for (var p2 in defaults2) {
          p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults2[p2]);
        }
      };
    };
    _merge = function _merge2(base, toMerge) {
      for (var p2 in toMerge) {
        base[p2] = toMerge[p2];
      }
      return base;
    };
    _mergeDeep = function _mergeDeep2(base, toMerge) {
      for (var p2 in toMerge) {
        p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
      }
      return base;
    };
    _copyExcluding = function _copyExcluding2(obj, excluding) {
      var copy = {}, p2;
      for (p2 in obj) {
        p2 in excluding || (copy[p2] = obj[p2]);
      }
      return copy;
    };
    _inheritDefaults = function _inheritDefaults2(vars) {
      var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
      if (_isNotFalse(vars.inherit)) {
        while (parent) {
          func(vars, parent.vars.defaults);
          parent = parent.parent || parent._dp;
        }
      }
      return vars;
    };
    _arraysMatch = function _arraysMatch2(a1, a2) {
      var i = a1.length, match = i === a2.length;
      while (match && i-- && a1[i] === a2[i]) {
      }
      return i < 0;
    };
    _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }
      if (lastProp === void 0) {
        lastProp = "_last";
      }
      var prev = parent[lastProp], t;
      if (sortBy) {
        t = child[sortBy];
        while (prev && prev[sortBy] > t) {
          prev = prev._prev;
        }
      }
      if (prev) {
        child._next = prev._next;
        prev._next = child;
      } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
      }
      if (child._next) {
        child._next._prev = child;
      } else {
        parent[lastProp] = child;
      }
      child._prev = prev;
      child.parent = child._dp = parent;
      return child;
    };
    _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }
      if (lastProp === void 0) {
        lastProp = "_last";
      }
      var prev = child._prev, next = child._next;
      if (prev) {
        prev._next = next;
      } else if (parent[firstProp] === child) {
        parent[firstProp] = next;
      }
      if (next) {
        next._prev = prev;
      } else if (parent[lastProp] === child) {
        parent[lastProp] = prev;
      }
      child._next = child._prev = child.parent = null;
    };
    _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
      child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
      child._act = 0;
    };
    _uncache = function _uncache2(animation, child) {
      if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        var a = animation;
        while (a) {
          a._dirty = 1;
          a = a.parent;
        }
      }
      return animation;
    };
    _recacheAncestors = function _recacheAncestors2(animation) {
      var parent = animation.parent;
      while (parent && parent.parent) {
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
      }
      return animation;
    };
    _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
      return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
    };
    _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
      return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
    };
    _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
      return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
    };
    _animationCycle = function _animationCycle2(tTime, cycleDuration) {
      var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
      return tTime && whole === tTime ? whole - 1 : whole;
    };
    _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
      return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
    };
    _setEnd = function _setEnd2(animation) {
      return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
    };
    _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
      var parent = animation._dp;
      if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation);
      }
      return animation;
    };
    _postAddChecks = function _postAddChecks2(timeline2, child) {
      var t;
      if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
        t = _parentToChildTotalTime(timeline2.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
          child.render(t, true);
        }
      }
      if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
        if (timeline2._dur < timeline2.duration()) {
          t = timeline2;
          while (t._dp) {
            t.rawTime() >= 0 && t.totalTime(t._tTime);
            t = t._dp;
          }
        }
        timeline2._zTime = -_tinyNum;
      }
    };
    _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
      child.parent && _removeFromParent(child);
      child._start = _roundPrecise((_isNumber(position) ? position : !position && _isFromOrFromStart(child) && (!timeline2._last || timeline2._last._start >= timeline2._time) ? timeline2._last ? timeline2._last._start : timeline2._time : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
      child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
      _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
      _isFromOrFromStart(child) || (timeline2._recent = child);
      skipChecks || _postAddChecks(timeline2, child);
      timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
      return timeline2;
    };
    _scrollTrigger = function _scrollTrigger2(animation, trigger) {
      return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
    };
    _attemptInitTween = function _attemptInitTween2(tween, time2, force, suppressEvents, tTime) {
      _initTween(tween, time2, tTime);
      if (!tween._initted) {
        return 1;
      }
      if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [tTime, suppressEvents];
        return 1;
      }
    };
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
      var parent = _ref.parent;
      return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
    };
    _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
      var data = _ref2.data;
      return data === "isFromStart" || data === "isStart";
    };
    _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
      var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
      if (repeatDelay && tween._repeat) {
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
          prevRatio = 1 - ratio;
          tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
      }
      if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
          return;
        }
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
        suppressEvents || (suppressEvents = totalTime && !prevIteration);
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
          ratio && _removeFromParent(tween, 1);
          if (!suppressEvents && !_reverting) {
            _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
            tween._prom && tween._prom();
          }
        }
      } else if (!tween._zTime) {
        tween._zTime = totalTime;
      }
    };
    _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time2) {
      var child;
      if (time2 > prevTime) {
        child = animation._first;
        while (child && child._start <= time2) {
          if (child.data === "isPause" && child._start > prevTime) {
            return child;
          }
          child = child._next;
        }
      } else {
        child = animation._last;
        while (child && child._start >= time2) {
          if (child.data === "isPause" && child._start < prevTime) {
            return child;
          }
          child = child._prev;
        }
      }
    };
    _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
      var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
      totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
      animation._dur = dur;
      animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
      totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
      animation.parent && _setEnd(animation);
      skipUncache || _uncache(animation.parent, animation);
      return animation;
    };
    _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
      return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
    };
    _zeroPosition = {
      _start: 0,
      endTime: _emptyFunc,
      totalDuration: _emptyFunc
    };
    _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
      var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
      if (_isString(position) && (isNaN(position) || position in labels)) {
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
          i >= 0 && (position = position.replace(/=/, ""));
          return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
          position in labels || (labels[position] = clippedDuration);
          return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) {
          offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        }
        return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
      }
      return position == null ? clippedDuration : +position;
    };
    _createTweenType = function _createTweenType2(type, params, timeline2) {
      var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
      isLegacy && (vars.duration = params[1]);
      vars.parent = timeline2;
      if (type) {
        irVars = vars;
        parent = timeline2;
        while (parent && !("immediateRender" in irVars)) {
          irVars = parent.vars.defaults || {};
          parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
      }
      return new Tween(params[0], vars, params[varsIndex + 1]);
    };
    _conditionalReturn = function _conditionalReturn2(value, func) {
      return value || value === 0 ? func(value) : func;
    };
    _clamp = function _clamp2(min, max, value) {
      return value < min ? min : value > max ? max : value;
    };
    getUnit = function getUnit2(value, v) {
      return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
    };
    clamp = function clamp2(min, max, value) {
      return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
      });
    };
    _slice = [].slice;
    _isArrayLike = function _isArrayLike2(value, nonEmpty) {
      return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
    };
    _flatten = function _flatten2(ar, leaveStrings, accumulator) {
      if (accumulator === void 0) {
        accumulator = [];
      }
      return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
      }) || accumulator;
    };
    toArray = function toArray2(value, scope, leaveStrings) {
      return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
    };
    selector = function selector2(value) {
      value = toArray(value)[0] || _warn("Invalid scope") || {};
      return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
      };
    };
    shuffle = function shuffle2(a) {
      return a.sort(function() {
        return 0.5 - Math.random();
      });
    };
    distribute = function distribute2(v) {
      if (_isFunction(v)) {
        return v;
      }
      var vars = _isObject(v) ? v : {
        each: v
      }, ease2 = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
      if (_isString(from)) {
        ratioX = ratioY = {
          center: 0.5,
          edges: 0.5,
          end: 1
        }[from] || 0;
      } else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
      }
      return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
          wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
          if (!wrapAt) {
            max = -_bigNum;
            while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
            }
            wrapAt < l && wrapAt--;
          }
          distances = cache[l] = [];
          originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
          originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
          max = 0;
          min = _bigNum;
          for (j = 0; j < l; j++) {
            x = j % wrapAt - originX;
            y = originY - (j / wrapAt | 0);
            distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
            d > max && (max = d);
            d < min && (min = d);
          }
          from === "random" && shuffle(distances);
          distances.max = max - min;
          distances.min = min;
          distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
          distances.b = l < 0 ? base - l : base;
          distances.u = getUnit(vars.amount || vars.each) || 0;
          ease2 = ease2 && l < 0 ? _invertEase(ease2) : ease2;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease2 ? ease2(l) : l) * distances.v) + distances.u;
      };
    };
    _roundModifier = function _roundModifier2(v) {
      var p2 = Math.pow(10, ((v + "").split(".")[1] || "").length);
      return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p2);
        return (n - n % 1) / p2 + (_isNumber(raw) ? 0 : getUnit(raw));
      };
    };
    snap = function snap2(snapTo, value) {
      var isArray = _isArray(snapTo), radius, is2D;
      if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
          snapTo = toArray(snapTo.values);
          if (is2D = !_isNumber(snapTo[0])) {
            radius *= radius;
          }
        } else {
          snapTo = _roundModifier(snapTo.increment);
        }
      }
      return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
      } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while (i--) {
          if (is2D) {
            dx = snapTo[i].x - x;
            dy = snapTo[i].y - y;
            dx = dx * dx + dy * dy;
          } else {
            dx = Math.abs(snapTo[i] - x);
          }
          if (dx < min) {
            min = dx;
            closest = i;
          }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
      });
    };
    random = function random2(min, max, roundingIncrement, returnFunction) {
      return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
      });
    };
    pipe = function pipe2() {
      for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
      }
      return function(value) {
        return functions.reduce(function(v, f) {
          return f(v);
        }, value);
      };
    };
    unitize = function unitize2(func, unit) {
      return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
      };
    };
    normalize = function normalize2(min, max, value) {
      return mapRange(min, max, 0, 1, value);
    };
    _wrapArray = function _wrapArray2(a, wrapper, value) {
      return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
      });
    };
    wrap = function wrap2(min, max, value) {
      var range = max - min;
      return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
        return (range + (value2 - min) % range) % range + min;
      });
    };
    wrapYoyo = function wrapYoyo2(min, max, value) {
      var range = max - min, total = range * 2;
      return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
        value2 = (total + (value2 - min) % total) % total || 0;
        return min + (value2 > range ? total - value2 : value2);
      });
    };
    _replaceRandom = function _replaceRandom2(s) {
      return s.replace(_randomExp, function(match) {
        var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
        return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
      });
    };
    mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
      var inRange = inMax - inMin, outRange = outMax - outMin;
      return _conditionalReturn(value, function(value2) {
        return outMin + ((value2 - inMin) / inRange * outRange || 0);
      });
    };
    interpolate = function interpolate2(start, end, progress2, mutate) {
      var func = isNaN(start + end) ? 0 : function(p3) {
        return (1 - p3) * start + p3 * end;
      };
      if (!func) {
        var isString = _isString(start), master = {}, p2, i, interpolators, l, il;
        progress2 === true && (mutate = 1) && (progress2 = null);
        if (isString) {
          start = {
            p: start
          };
          end = {
            p: end
          };
        } else if (_isArray(start) && !_isArray(end)) {
          interpolators = [];
          l = start.length;
          il = l - 2;
          for (i = 1; i < l; i++) {
            interpolators.push(interpolate2(start[i - 1], start[i]));
          }
          l--;
          func = function func2(p3) {
            p3 *= l;
            var i2 = Math.min(il, ~~p3);
            return interpolators[i2](p3 - i2);
          };
          progress2 = end;
        } else if (!mutate) {
          start = _merge(_isArray(start) ? [] : {}, start);
        }
        if (!interpolators) {
          for (p2 in end) {
            _addPropTween.call(master, start, p2, "get", end[p2]);
          }
          func = function func2(p3) {
            return _renderPropTweens(p3, master) || (isString ? start.p : start);
          };
        }
      }
      return _conditionalReturn(progress2, func);
    };
    _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
      var labels = timeline2.labels, min = _bigNum, p2, distance2, label;
      for (p2 in labels) {
        distance2 = labels[p2] - fromTime;
        if (distance2 < 0 === !!backward && distance2 && min > (distance2 = Math.abs(distance2))) {
          label = p2;
          min = distance2;
        }
      }
      return label;
    };
    _callback = function _callback2(animation, type, executeLazyFirst) {
      var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
      if (!callback) {
        return;
      }
      params = v[type + "Params"];
      scope = v.callbackScope || animation;
      executeLazyFirst && _lazyTweens.length && _lazyRender();
      context3 && (_context = context3);
      result = params ? callback.apply(scope, params) : callback.call(scope);
      _context = prevContext;
      return result;
    };
    _interrupt = function _interrupt2(animation) {
      _removeFromParent(animation);
      animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
      animation.progress() < 1 && _callback(animation, "onInterrupt");
      return animation;
    };
    _registerPluginQueue = [];
    _createPlugin = function _createPlugin2(config3) {
      if (!config3) return;
      config3 = !config3.name && config3["default"] || config3;
      if (_windowExists() || config3.headless) {
        var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
          this._props = [];
        } : config3, instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        }, statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
        _wake();
        if (config3 !== Plugin) {
          if (_plugins[name]) {
            return;
          }
          _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
          _plugins[Plugin.prop = name] = Plugin;
          if (config3.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
          }
          name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin);
        config3.register && config3.register(gsap, Plugin, PropTween);
      } else {
        _registerPluginQueue.push(config3);
      }
    };
    _255 = 255;
    _colorLookup = {
      aqua: [0, _255, _255],
      lime: [0, _255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _255],
      navy: [0, 0, 128],
      white: [_255, _255, _255],
      olive: [128, 128, 0],
      yellow: [_255, _255, 0],
      orange: [_255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_255, 0, 0],
      pink: [_255, 192, 203],
      cyan: [0, _255, _255],
      transparent: [_255, _255, _255, 0]
    };
    _hue = function _hue2(h, m1, m2) {
      h += h < 0 ? 1 : h > 1 ? -1 : 0;
      return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
    };
    splitColor = function splitColor2(v, toHSL, forceAlpha) {
      var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
      if (!a) {
        if (v.substr(-1) === ",") {
          v = v.substr(0, v.length - 1);
        }
        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length < 6) {
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
          }
          if (v.length === 9) {
            a = parseInt(v.substr(1, 6), 16);
            return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
          }
          v = parseInt(v.substr(1), 16);
          a = [v >> 16, v >> 8 & _255, v & _255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_strictNumExp);
          if (!toHSL) {
            h = +a[0] % 360 / 360;
            s = +a[1] / 100;
            l = +a[2] / 100;
            g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;
            a.length > 3 && (a[3] *= 1);
            a[0] = _hue(h + 1 / 3, r, g);
            a[1] = _hue(h, r, g);
            a[2] = _hue(h - 1 / 3, r, g);
          } else if (~v.indexOf("=")) {
            a = v.match(_numExp);
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
          }
        } else {
          a = v.match(_strictNumExp) || _colorLookup.transparent;
        }
        a = a.map(Number);
      }
      if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h *= 60;
        }
        a[0] = ~~(h + 0.5);
        a[1] = ~~(s * 100 + 0.5);
        a[2] = ~~(l * 100 + 0.5);
      }
      forceAlpha && a.length < 4 && (a[3] = 1);
      return a;
    };
    _colorOrderData = function _colorOrderData2(v) {
      var values = [], c = [], i = -1;
      v.split(_colorExp).forEach(function(v2) {
        var a = v2.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
      });
      values.c = c;
      return values;
    };
    _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
      var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
      if (!colors) {
        return s;
      }
      colors = colors.map(function(color2) {
        return (color2 = splitColor(color2, toHSL, 1)) && type + (toHSL ? color2[0] + "," + color2[1] + "%," + color2[2] + "%," + color2[3] : color2.join(",")) + ")";
      });
      if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
          shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
          }
        }
      }
      if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + colors[i];
        }
      }
      return result + shell[l];
    };
    _colorExp = (function() {
      var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
      for (p2 in _colorLookup) {
        s += "|" + p2 + "\\b";
      }
      return new RegExp(s + ")", "gi");
    })();
    _hslExp = /hsl[a]?\(/;
    _colorStringFilter = function _colorStringFilter2(a) {
      var combined = a.join(" "), toHSL;
      _colorExp.lastIndex = 0;
      if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
        return true;
      }
    };
    _ticker = (function() {
      var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
        var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time2, frame2;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time2 = _lastUpdate - _startTime;
        overlap = time2 - _nextTime;
        if (overlap > 0 || manual) {
          frame2 = ++_self.frame;
          _delta = time2 - _self.time * 1e3;
          _self.time = time2 = time2 / 1e3;
          _nextTime += overlap + (overlap >= _gap ? 0 : _gap - overlap);
          dispatch = 1;
        }
        manual || (_id = _req(_tick2));
        if (dispatch) {
          for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
            _listeners3[_i2](time2, _delta, frame2, v);
          }
        }
      };
      _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
          _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
          return _delta / (1e3 / (fps || 60));
        },
        wake: function wake() {
          if (_coreReady) {
            if (!_coreInitted && _windowExists()) {
              _win = _coreInitted = window;
              _doc = _win.document || {};
              _globals.gsap = gsap;
              (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
              _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
              _registerPluginQueue.forEach(_createPlugin);
            }
            _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
            _id && _self.sleep();
            _req = _raf || function(f) {
              return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
            };
            _tickerActive = 1;
            _tick(2);
          }
        },
        sleep: function sleep() {
          (_raf ? cancelAnimationFrame : clearTimeout)(_id);
          _tickerActive = 0;
          _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
          _lagThreshold = threshold || Infinity;
          _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
          _gap = 1e3 / (_fps || 240);
          _nextTime = _self.time * 1e3 + _gap;
        },
        add: function add(callback, once, prioritize) {
          var func = once ? function(t, d, f, v) {
            callback(t, d, f, v);
            _self.remove(func);
          } : callback;
          _self.remove(callback);
          _listeners3[prioritize ? "unshift" : "push"](func);
          _wake();
          return func;
        },
        remove: function remove(callback, i) {
          ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
        },
        _listeners: _listeners3
      };
      return _self;
    })();
    _wake = function _wake2() {
      return !_tickerActive && _ticker.wake();
    };
    _easeMap = {};
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
    _quotesExp = /["']/g;
    _parseObjectInString = function _parseObjectInString2(value) {
      var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
      for (; i < l; i++) {
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
      }
      return obj;
    };
    _valueInParentheses = function _valueInParentheses2(value) {
      var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
      return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
    };
    _configEaseFromString = function _configEaseFromString2(name) {
      var split = (name + "").split("("), ease2 = _easeMap[split[0]];
      return ease2 && split.length > 1 && ease2.config ? ease2.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease2;
    };
    _invertEase = function _invertEase2(ease2) {
      return function(p2) {
        return 1 - ease2(1 - p2);
      };
    };
    _parseEase = function _parseEase2(ease2, defaultEase) {
      return !ease2 ? defaultEase : (_isFunction(ease2) ? ease2 : _easeMap[ease2] || _configEaseFromString(ease2)) || defaultEase;
    };
    _insertEase = function _insertEase2(names, easeIn2, easeOut2, easeInOut2) {
      if (easeOut2 === void 0) {
        easeOut2 = function easeOut3(p2) {
          return 1 - easeIn2(1 - p2);
        };
      }
      if (easeInOut2 === void 0) {
        easeInOut2 = function easeInOut3(p2) {
          return p2 < 0.5 ? easeIn2(p2 * 2) / 2 : 1 - easeIn2((1 - p2) * 2) / 2;
        };
      }
      var ease2 = {
        easeIn: easeIn2,
        easeOut: easeOut2,
        easeInOut: easeInOut2
      }, lowercaseName;
      _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease2;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut2;
        for (var p2 in ease2) {
          _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p2] = ease2[p2];
        }
      });
      return ease2;
    };
    _easeInOutFromOut = function _easeInOutFromOut2(easeOut2) {
      return function(p2) {
        return p2 < 0.5 ? (1 - easeOut2(1 - p2 * 2)) / 2 : 0.5 + easeOut2((p2 - 0.5) * 2) / 2;
      };
    };
    _configElastic = function _configElastic2(type, amplitude, period) {
      var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut2 = function easeOut3(p4) {
        return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
      }, ease2 = type === "out" ? easeOut2 : type === "in" ? function(p4) {
        return 1 - easeOut2(1 - p4);
      } : _easeInOutFromOut(easeOut2);
      p2 = _2PI / p2;
      ease2.config = function(amplitude2, period2) {
        return _configElastic2(type, amplitude2, period2);
      };
      return ease2;
    };
    _configBack = function _configBack2(type, overshoot) {
      if (overshoot === void 0) {
        overshoot = 1.70158;
      }
      var easeOut2 = function easeOut3(p2) {
        return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
      }, ease2 = type === "out" ? easeOut2 : type === "in" ? function(p2) {
        return 1 - easeOut2(1 - p2);
      } : _easeInOutFromOut(easeOut2);
      ease2.config = function(overshoot2) {
        return _configBack2(type, overshoot2);
      };
      return ease2;
    };
    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
      var power = i < 5 ? i + 1 : i;
      _insertEase(name + ",Power" + (power - 1), i ? function(p2) {
        return Math.pow(p2, power);
      } : function(p2) {
        return p2;
      }, function(p2) {
        return 1 - Math.pow(1 - p2, power);
      }, function(p2) {
        return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
      });
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
    (function(n, c) {
      var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut2 = function easeOut3(p2) {
        return p2 < n1 ? n * p2 * p2 : p2 < n2 ? n * Math.pow(p2 - 1.5 / c, 2) + 0.75 : p2 < n3 ? n * (p2 -= 2.25 / c) * p2 + 0.9375 : n * Math.pow(p2 - 2.625 / c, 2) + 0.984375;
      };
      _insertEase("Bounce", function(p2) {
        return 1 - easeOut2(1 - p2);
      }, easeOut2);
    })(7.5625, 2.75);
    _insertEase("Expo", function(p2) {
      return Math.pow(2, 10 * (p2 - 1)) * p2 + p2 * p2 * p2 * p2 * p2 * p2 * (1 - p2);
    });
    _insertEase("Circ", function(p2) {
      return -(_sqrt(1 - p2 * p2) - 1);
    });
    _insertEase("Sine", function(p2) {
      return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
    });
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
      config: function config(steps, immediateStart) {
        if (steps === void 0) {
          steps = 1;
        }
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p4) {
          return ((p2 * _clamp(0, max, p4) | 0) + p3) * p1;
        };
      }
    };
    _defaults.ease = _easeMap["quad.out"];
    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
      return _callbackNames += name + "," + name + "Params,";
    });
    GSCache = function GSCache2(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    Animation2 = /* @__PURE__ */ (function() {
      function Animation3(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
          this._ctx = _context;
          _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
      }
      var _proto = Animation3.prototype;
      _proto.delay = function delay2(value) {
        if (value || value === 0) {
          this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }
        return this._delay;
      };
      _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
      };
      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
          return this._tDur;
        }
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
      };
      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) {
          return this._tTime;
        }
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);
          !parent._dp || parent.parent || _postAddChecks(parent, this);
          while (parent && parent.parent) {
            if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
              parent.totalTime(parent._tTime, true);
            }
            parent = parent.parent;
          }
          if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
            _addToTimeline(this._dp, this, this._start - this._delay);
          }
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
          this._ts || (this._pTime = _totalTime);
          _lazySafeRender(this, _totalTime, suppressEvents);
        }
        return this;
      };
      _proto.time = function time2(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
      };
      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
      };
      _proto.progress = function progress2(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
      };
      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
      };
      _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) {
          return this._rts === -_tinyNum ? 0 : this._rts;
        }
        if (this._rts === value) {
          return this;
        }
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime, wasReversed = this._rts < 0;
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
        var tDur = this.totalDuration();
        if (wasReversed !== this._rts < 0 || tTime > 0 && tTime < tDur) this.totalTime(_clamp(-Math.abs(this._delay), tDur, tTime), suppressEvents !== false);
        _setEnd(this);
        return _recacheAncestors(this);
      };
      _proto.paused = function paused(value) {
        if (!arguments.length) {
          return this._ps;
        }
        if (this._ps !== value) {
          this._ps = value;
          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
            this._ts = this._act = 0;
          } else {
            _wake();
            this._ts = this._rts;
            var tTime = this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, suppress = this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum, child;
            if (suppress) {
              this._tTime -= _tinyNum;
              child = this._first;
              while (child) {
                if (!child._dur && child._zTime < 0 && child._ts && child._start <= tTime + _tinyNum) {
                  suppress = false;
                  break;
                }
                child = child._next;
              }
            }
            this.totalTime(tTime, suppress);
          }
        }
        return this;
      };
      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = _roundPrecise(value);
          var parent = this.parent || this._dp;
          parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
          return this;
        }
        return this._start;
      };
      _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      };
      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp;
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
      };
      _proto.revert = function revert(config3) {
        if (config3 === void 0) {
          config3 = _revertConfig;
        }
        var prevIsReverting = _reverting;
        _reverting = config3;
        if (_isRevertWorthy(this)) {
          this.timeline && this.timeline.revert(config3);
          this.totalTime(-0.01, config3.suppressEvents);
        }
        this.data !== "nested" && config3.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
      };
      _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time2 = arguments.length ? rawTime : animation.rawTime();
        while (animation) {
          time2 = animation._start + time2 / (Math.abs(animation._ts) || 1);
          animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time2;
      };
      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === Infinity ? -2 : value;
          return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
      };
      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          var time2 = this._time;
          this._rDelay = value;
          _onUpdateTotalDuration(this);
          return time2 ? this.time(time2) : this;
        }
        return this._rDelay;
      };
      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }
        return this._yoyo;
      };
      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
      };
      _proto.restart = function restart(includeDelay, suppressEvents) {
        this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        this._dur || (this._zTime = -_tinyNum);
        return this;
      };
      _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
      };
      _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };
      _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };
      _proto.resume = function resume() {
        return this.paused(false);
      };
      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
          return this;
        }
        return this._rts < 0;
      };
      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };
      _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
      };
      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
          if (!callback) {
            delete vars[type];
          } else {
            vars[type] = callback;
            params && (vars[type + "Params"] = params);
            type === "onUpdate" && (this._onUpdate = callback);
          }
          return this;
        }
        return vars[type];
      };
      _proto.then = function then(onFulfilled) {
        var self = this, prevProm = self._prom;
        return new Promise(function(resolve) {
          var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
            var _then = self.then;
            self.then = null;
            prevProm && prevProm();
            _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
            resolve(f);
            self.then = _then;
          };
          if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
            _resolve();
          } else {
            self._prom = _resolve;
          }
        });
      };
      _proto.kill = function kill() {
        _interrupt(this);
      };
      return Animation3;
    })();
    _setDefaults(Animation2.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1
    });
    Timeline = /* @__PURE__ */ (function(_Animation) {
      _inheritsLoose(Timeline2, _Animation);
      function Timeline2(vars, position) {
        var _this;
        if (vars === void 0) {
          vars = {};
        }
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }
      var _proto2 = Timeline2.prototype;
      _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
      };
      _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
      };
      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
      };
      _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
      };
      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
      };
      _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
      };
      _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
      };
      _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
      };
      _proto2.render = function render3(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time2, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }
          time2 = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;
          if (crossingStart) {
            dur || (prevTime = this._zTime);
            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }
          if (this._repeat) {
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }
            time2 = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time2 = dur;
            } else {
              prevIteration = _roundPrecise(tTime / cycleDuration);
              iteration = ~~prevIteration;
              if (iteration && iteration === prevIteration) {
                time2 = dur;
                iteration--;
              }
              time2 > dur && (time2 = dur);
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
            if (yoyo && iteration & 1) {
              time2 = dur - time2;
              isYoyo = 1;
            }
            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
              this._lock = 1;
              this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
              this._tTime = tTime;
              !suppressEvents && this.parent && _callback(this, "onRepeat");
              if (this.vars.repeatRefresh && !isYoyo) {
                this.invalidate()._lock = 1;
                prevIteration = iteration;
              }
              if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                return this;
              }
              dur = this._dur;
              tDur = this._tDur;
              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -1e-4;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }
              this._lock = 0;
              if (!this._ts && !prevPaused) {
                return this;
              }
            }
          }
          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time2));
            if (pauseTween) {
              tTime -= time2 - (time2 = pauseTween._start);
            }
          }
          this._tTime = tTime;
          this._time = time2;
          this._act = !!timeScale;
          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0;
          }
          if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
            _callback(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          if (time2 >= prevTime && totalTime >= 0) {
            child = this._first;
            while (child) {
              next = child._next;
              if ((child._act || time2 >= child._start) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(child._ts > 0 ? (time2 - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time2 - child._start) * child._ts, suppressEvents, force);
                if (time2 !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum);
                  break;
                }
              }
              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time2;
            while (child) {
              next = child._prev;
              if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
                if (time2 !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                  break;
                }
              }
              child = next;
            }
          }
          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time2 >= prevTime ? 0 : -_tinyNum)._zTime = time2 >= prevTime ? 1 : -1;
            if (this._ts) {
              this._start = prevStart;
              _setEnd(this);
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
          if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
            if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
              if (!this._lock) {
                (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                  _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
          }
        }
        return this;
      };
      _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation2)) {
          if (_isArray(child)) {
            child.forEach(function(obj) {
              return _this2.add(obj, position);
            });
            return this;
          }
          if (_isString(child)) {
            return this.addLabel(child, position);
          }
          if (_isFunction(child)) {
            child = Tween.delayedCall(0, child);
          } else {
            return this;
          }
        }
        return this !== child ? _addToTimeline(this, child, position) : this;
      };
      _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
          nested = true;
        }
        if (tweens === void 0) {
          tweens = true;
        }
        if (timelines === void 0) {
          timelines = true;
        }
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = -_bigNum;
        }
        var a = [], child = this._first;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            if (child instanceof Tween) {
              tweens && a.push(child);
            } else {
              timelines && a.push(child);
              nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
            }
          }
          child = child._next;
        }
        return a;
      };
      _proto2.getById = function getById2(id3) {
        var animations2 = this.getChildren(1, 1, 1), i = animations2.length;
        while (i--) {
          if (animations2[i].vars.id === id3) {
            return animations2[i];
          }
        }
      };
      _proto2.remove = function remove(child) {
        if (_isString(child)) {
          return this.removeLabel(child);
        }
        if (_isFunction(child)) {
          return this.killTweensOf(child);
        }
        child.parent === this && _removeLinkedListItem(this, child);
        if (child === this._recent) {
          this._recent = this._last;
        }
        return _uncache(this);
      };
      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
          return this._tTime;
        }
        this._forcing = 1;
        if (!this._dp && this._ts) {
          this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
      };
      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
      };
      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };
      _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
      };
      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while (child) {
          if (child._start === position && child.data === "isPause") {
            _removeFromParent(child);
          }
          child = child._next;
        }
      };
      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while (i--) {
          _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }
        return this;
      };
      _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
        while (child) {
          if (child instanceof Tween) {
            if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
              a.push(child);
            }
          } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
            a.push.apply(a, children);
          }
          child = child._next;
        }
        return a;
      };
      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
          ease: vars.ease || "none",
          lazy: false,
          immediateRender: false,
          time: endTime,
          overwrite: "auto",
          duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
          onStart: function onStart() {
            tl.pause();
            if (!initted) {
              var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
              tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
              initted = 1;
            }
            _onStart && _onStart.apply(tween, onStartParams || []);
          }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
      };
      _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
          startAt: {
            time: _parsePosition(this, fromPosition)
          }
        }, vars));
      };
      _proto2.recent = function recent() {
        return this._recent;
      };
      _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
          afterTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
      };
      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
          beforeTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
      };
      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
      };
      _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = 0;
        }
        var child = this._first, labels = this.labels, p2;
        amount = _roundPrecise(amount);
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }
          child = child._next;
        }
        if (adjustLabels) {
          for (p2 in labels) {
            if (labels[p2] >= ignoreBeforeTime) {
              labels[p2] += amount;
            }
          }
        }
        return _uncache(this);
      };
      _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while (child) {
          child.invalidate(soft);
          child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
      };
      _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
          includeLabels = true;
        }
        var child = this._first, next;
        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };
      _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) {
          return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }
        if (self._dirty) {
          parent = self.parent;
          while (child) {
            prev = child._prev;
            child._dirty && child.totalDuration();
            start = child._start;
            if (start > prevStart && self._sort && child._ts && !self._lock) {
              self._lock = 1;
              _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
            } else {
              prevStart = start;
            }
            if (start < 0 && child._ts) {
              max -= start;
              if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                self._start += _roundPrecise(start / self._ts);
                self._time -= start;
                self._tTime -= start;
              }
              self.shiftChildren(-start, false, -Infinity);
              prevStart = 0;
            }
            child._end > max && child._ts && (max = child._end);
            child = prev;
          }
          _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
          self._dirty = 0;
        }
        return self._tDur;
      };
      Timeline2.updateRoot = function updateRoot(time2) {
        if (_globalTimeline._ts) {
          _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time2, _globalTimeline));
          _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts) {
            if (_config.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) {
                child = child._next;
              }
              child || _ticker.sleep();
            }
          }
        }
      };
      return Timeline2;
    })(Animation2);
    _setDefaults(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });
    _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
      var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color2, endNum, chunk, startNum, hasRandom, a;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop);
        start = a[0];
        end = a[1];
      }
      startNums = start.match(_complexStringNumExp) || [];
      while (result = _complexStringNumExp.exec(end)) {
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color2) {
          color2 = (color2 + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color2 = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0;
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
            m: color2 && color2 < 4 ? Math.round : 0
          };
          index = _complexStringNumExp.lastIndex;
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
      pt.fp = funcParam;
      if (_relExp.test(end) || hasRandom) {
        pt.e = 0;
      }
      this._pt = pt;
      return pt;
    };
    _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
      _isFunction(end) && (end = end(index || 0, target, targets));
      var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
      if (_isString(end)) {
        if (~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (end.charAt(1) === "=") {
          pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
          if (pt || pt === 0) {
            end = pt;
          }
        }
      }
      if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
          pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
          funcParam && (pt.fp = funcParam);
          modifier && pt.modifier(modifier, this, target);
          return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
      }
    };
    _processVars = function _processVars2(vars, index, target, targets, tween) {
      _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
      if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
        return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
      }
      var copy = {}, p2;
      for (p2 in vars) {
        copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
      }
      return copy;
    };
    _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
      var plugin, pt, ptLookup, i;
      if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
          ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
          i = plugin._props.length;
          while (i--) {
            ptLookup[plugin._props[i]] = pt;
          }
        }
      }
      return plugin;
    };
    _initTween = function _initTween2(tween, time2, tTime) {
      var vars = tween.vars, ease2 = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes2 = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p2, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
      tl && (!keyframes2 || !ease2) && (ease2 = "none");
      tween._ease = _parseEase(ease2, _defaults.ease);
      tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
      tween._from = !tl && !!vars.runBackwards;
      if (tween._from) tween.ratio = 1;
      if (!tl || keyframes2 && !vars.stagger) {
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop];
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
          prevStartAt._zTime < 0 && prevStartAt.progress(1);
          time2 < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
          prevStartAt._lazy = 0;
        }
        if (startAt) {
          _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
            data: "isStart",
            overwrite: false,
            parent,
            immediateRender: true,
            lazy: !prevStartAt && _isNotFalse(lazy),
            startAt: null,
            delay: 0,
            onUpdate: onUpdate && function() {
              return _callback(tween, "onUpdate");
            },
            stagger: 0
          }, startAt)));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time2 < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
          if (immediateRender) {
            if (dur && time2 <= 0 && tTime <= 0) {
              time2 && (tween._zTime = time2);
              return;
            }
          }
        } else if (runBackwards && dur) {
          if (!prevStartAt) {
            time2 && (immediateRender = false);
            p2 = _setDefaults({
              overwrite: false,
              data: "isFromStart",
              //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
              lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
              immediateRender,
              //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
              stagger: 0,
              parent
              //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
            }, cleanVars);
            harnessVars && (p2[harness.prop] = harnessVars);
            _removeFromParent(tween._startAt = Tween.set(targets, p2));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time2 < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
            tween._zTime = time2;
            if (!immediateRender) {
              _initTween2(tween._startAt, _tinyNum, _tinyNum);
            } else if (!time2) {
              return;
            }
          }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for (i = 0; i < targets.length; i++) {
          target = targets[i];
          gsData = target._gsap || _harness(targets)[i]._gsap;
          tween._ptLookup[i] = ptLookup = {};
          _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
          index = fullTargets === targets ? i : fullTargets.indexOf(target);
          if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
            plugin._props.forEach(function(name) {
              ptLookup[name] = pt;
            });
            plugin.priority && (hasPriority = 1);
          }
          if (!harness || harnessVars) {
            for (p2 in cleanVars) {
              if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
                plugin.priority && (hasPriority = 1);
              } else {
                ptLookup[p2] = pt = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
              }
            }
          }
          tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
          if (autoOverwrite && tween._pt) {
            _overwritingTween = tween;
            _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time2));
            overwritten = !tween.parent;
            _overwritingTween = 0;
          }
          tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween);
      }
      tween._onUpdate = onUpdate;
      tween._initted = (!tween._op || tween._pt) && !overwritten;
      keyframes2 && time2 <= 0 && tl.render(_bigNum, true, true);
    };
    _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time2, skipRecursion) {
      var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
      if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while (i--) {
          pt = lookup[i][property];
          if (pt && pt.d && pt.d._pt) {
            pt = pt.d._pt;
            while (pt && pt.p !== property && pt.fp !== property) {
              pt = pt._next;
            }
          }
          if (!pt) {
            _forceAllPropTweens = 1;
            tween.vars[property] = "+=0";
            _initTween(tween, time2);
            _forceAllPropTweens = 0;
            return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
          }
          ptCache.push(pt);
        }
      }
      i = ptCache.length;
      while (i--) {
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT;
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
      }
    };
    _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
      var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i, aliases;
      if (!propertyAliases) {
        return vars;
      }
      copy = _merge({}, vars);
      for (p2 in propertyAliases) {
        if (p2 in copy) {
          aliases = propertyAliases[p2].split(",");
          i = aliases.length;
          while (i--) {
            copy[aliases[i]] = copy[p2];
          }
        }
      }
      return copy;
    };
    _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
      var ease2 = obj.ease || easeEach || "power1.inOut", p2, a;
      if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []);
        obj.forEach(function(value, i) {
          return a.push({
            t: i / (obj.length - 1) * 100,
            v: value,
            e: ease2
          });
        });
      } else {
        for (p2 in obj) {
          a = allProps[p2] || (allProps[p2] = []);
          p2 === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p2],
            e: ease2
          });
        }
      }
    };
    _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
      return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
    };
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
    _staggerPropsToSkip = {};
    _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
      return _staggerPropsToSkip[name] = 1;
    });
    _staggerTweenProps = _staggerTweenProps.split(",");
    Tween = /* @__PURE__ */ (function(_Animation2) {
      _inheritsLoose(Tween2, _Animation2);
      function Tween2(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
          position.duration = vars;
          vars = position;
          position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay2 = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes2 = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p2, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = [];
        _this3._overwrite = overwrite;
        if (keyframes2 || stagger || _isFuncOrString(duration) || _isFuncOrString(delay2)) {
          vars = _this3.vars;
          var easeReverse = vars.easeReverse || vars.yoyoEase;
          tl = _this3.timeline = new Timeline({
            data: "nested",
            defaults: defaults2 || {},
            targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;
          if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay2)) {
            l = parsedTargets.length;
            staggerFunc = stagger && distribute(stagger);
            if (_isObject(stagger)) {
              for (p2 in stagger) {
                if (~_staggerTweenProps.indexOf(p2)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p2] = stagger[p2];
                }
              }
            }
            for (i = 0; i < l; i++) {
              copy = _copyExcluding(vars, _staggerPropsToSkip);
              copy.stagger = 0;
              easeReverse && (copy.easeReverse = easeReverse);
              staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
              curTarget = parsedTargets[i];
              copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
              copy.delay = (+_parseFuncOrString(delay2, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
              if (!stagger && l === 1 && copy.delay) {
                _this3._delay = delay2 = copy.delay;
                _this3._start += delay2;
                copy.delay = 0;
              }
              tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
              tl._ease = _easeMap.none;
            }
            tl.duration() ? duration = delay2 = 0 : _this3.timeline = 0;
          } else if (keyframes2) {
            _inheritDefaults(_setDefaults(tl.vars.defaults, {
              ease: "none"
            }));
            tl._ease = _parseEase(keyframes2.ease || vars.ease || "none");
            var time2 = 0, a, kf, v;
            if (_isArray(keyframes2)) {
              keyframes2.forEach(function(frame2) {
                return tl.to(parsedTargets, frame2, ">");
              });
              tl.duration();
            } else {
              copy = {};
              for (p2 in keyframes2) {
                p2 === "ease" || p2 === "easeEach" || _parseKeyframe(p2, keyframes2[p2], copy, keyframes2.easeEach);
              }
              for (p2 in copy) {
                a = copy[p2].sort(function(a2, b) {
                  return a2.t - b.t;
                });
                time2 = 0;
                for (i = 0; i < a.length; i++) {
                  kf = a[i];
                  v = {
                    ease: kf.e,
                    duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                  };
                  v[p2] = kf.v;
                  tl.to(parsedTargets, v, time2);
                  time2 += v.duration;
                }
              }
              tl.duration() < duration && tl.to({}, {
                duration: duration - tl.duration()
              });
            }
          }
          duration || _this3.duration(duration = tl.duration());
        } else {
          _this3.timeline = 0;
        }
        if (overwrite === true && !_suppressOverwrites) {
          _overwritingTween = _assertThisInitialized(_this3);
          _globalTimeline.killTweensOf(parsedTargets);
          _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes2 && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
          _this3._tTime = -_tinyNum;
          _this3.render(Math.max(0, -delay2) || 0);
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }
      var _proto3 = Tween2.prototype;
      _proto3.render = function render3(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time2, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2;
        if (!dur) {
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
          time2 = tTime;
          timeline2 = this.timeline;
          if (this._repeat) {
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && isNegative) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }
            time2 = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time2 = dur;
            } else {
              prevIteration = _roundPrecise(tTime / cycleDuration);
              iteration = ~~prevIteration;
              if (iteration && iteration === prevIteration) {
                time2 = dur;
                iteration--;
              } else if (time2 > dur) {
                time2 = dur;
              }
            }
            isYoyo = this._yoyo && iteration & 1;
            if (isYoyo) time2 = dur - time2;
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            if (time2 === prevTime && !force && this._initted && iteration === prevIteration) {
              this._tTime = tTime;
              return this;
            }
            if (iteration !== prevIteration) {
              if (this.vars.repeatRefresh && !isYoyo && !this._lock && time2 !== cycleDuration && this._initted) {
                this._lock = force = 1;
                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
              }
            }
          }
          if (!this._initted) {
            if (_attemptInitTween(this, isNegative ? totalTime : time2, force, suppressEvents, tTime)) {
              this._tTime = 0;
              return this;
            }
            if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
              return this;
            }
            if (dur !== this._dur) {
              return this.render(totalTime, suppressEvents, force);
            }
          }
          if (this._rEase) {
            var inv = time2 < prevTime;
            if (inv !== this._inv) {
              var segDur = inv ? prevTime : dur - prevTime;
              this._inv = inv;
              if (this._from) this.ratio = 1 - this.ratio;
              this._invRatio = this.ratio;
              this._invTime = prevTime;
              this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
              this._invScale = inv ? -this.ratio : 1 - this.ratio;
              this._invEase = inv ? this._rEase : this._ease;
            }
            this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time2 - this._invTime) * this._invRecip);
          } else {
            this.ratio = ratio = this._ease(time2 / dur);
          }
          if (this._from) this.ratio = ratio = 1 - ratio;
          this._tTime = tTime;
          this._time = time2;
          if (!this._act && this._ts) {
            this._act = 1;
            this._lazy = 0;
          }
          if (!prevTime && tTime && !suppressEvents && !prevIteration) {
            _callback(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          pt = this._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time2 / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
          if (this._onUpdate && !suppressEvents) {
            isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
            _callback(this, "onUpdate");
          }
          this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
            (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
              _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
        return this;
      };
      _proto3.targets = function targets() {
        return this._targets;
      };
      _proto3.invalidate = function invalidate(soft) {
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
      };
      _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time2);
        ratio = this._ease(time2 / this._dur);
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time2, skipRecursion)) {
          return this.resetTo(property, value, start, startIsRelative, 1);
        }
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
      };
      _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
          vars = "all";
        }
        if (!targets && (!vars || vars === "all")) {
          this._lazy = this._pt = 0;
          this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
          return this;
        }
        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
          this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
          return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
          vars === "all" && (this._pt = 0);
          return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
          if (_isString(vars)) {
            p2 = {};
            _forEachName(vars, function(name) {
              return p2[name] = 1;
            });
            vars = p2;
          }
          vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while (i--) {
          if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
              overwrittenProps[i] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
              props = vars;
            }
            for (p2 in props) {
              pt = curLookup && curLookup[p2];
              if (pt) {
                if (!("kill" in pt.d) || pt.d.kill(p2) === true) {
                  _removeLinkedListItem(this, pt, "_pt");
                }
                delete curLookup[p2];
              }
              if (curOverwriteProps !== "all") {
                curOverwriteProps[p2] = 1;
              }
            }
          }
        }
        this._initted && !this._pt && firstPT && _interrupt(this);
        return this;
      };
      Tween2.to = function to(targets, vars) {
        return new Tween2(targets, vars, arguments[2]);
      };
      Tween2.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
      };
      Tween2.delayedCall = function delayedCall(delay2, callback, params, scope) {
        return new Tween2(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay: delay2,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope
        });
      };
      Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
      };
      Tween2.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween2(targets, vars);
      };
      Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };
      return Tween2;
    })(Animation2);
    _setDefaults(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    });
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
      Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });
    _setterPlain = function _setterPlain2(target, property, value) {
      return target[property] = value;
    };
    _setterFunc = function _setterFunc2(target, property, value) {
      return target[property](value);
    };
    _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
      return target[property](data.fp, value);
    };
    _setterAttribute = function _setterAttribute2(target, property, value) {
      return target.setAttribute(property, value);
    };
    _getSetter = function _getSetter2(target, property) {
      return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    };
    _renderPlain = function _renderPlain2(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
    };
    _renderBoolean = function _renderBoolean2(ratio, data) {
      return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    };
    _renderComplexString = function _renderComplexString2(ratio, data) {
      var pt = data._pt, s = "";
      if (!ratio && data.b) {
        s = data.b;
      } else if (ratio === 1 && data.e) {
        s = data.e;
      } else {
        while (pt) {
          s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
          pt = pt._next;
        }
        s += data.c;
      }
      data.set(data.t, data.p, s, data);
    };
    _renderPropTweens = function _renderPropTweens2(ratio, data) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    };
    _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
      var pt = this._pt, next;
      while (pt) {
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
      }
    };
    _killPropTweensOf = function _killPropTweensOf2(property) {
      var pt = this._pt, hasNonDependentRemaining, next;
      while (pt) {
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) {
          _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
          hasNonDependentRemaining = 1;
        }
        pt = next;
      }
      return !hasNonDependentRemaining;
    };
    _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
      data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    };
    _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
      var pt = parent._pt, next, pt2, first, last;
      while (pt) {
        next = pt._next;
        pt2 = first;
        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }
        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }
        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }
        pt = next;
      }
      parent._pt = first;
    };
    PropTween = /* @__PURE__ */ (function() {
      function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) {
          next._prev = this;
        }
      }
      var _proto4 = PropTween2.prototype;
      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set;
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target;
        this.tween = tween;
      };
      return PropTween2;
    })();
    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
      return _reservedProps[name] = 1;
    });
    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults,
      autoRemoveChildren: true,
      id: "root",
      smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;
    _media = [];
    _listeners = {};
    _emptyArray = [];
    _lastMediaTime = 0;
    _contextID = 0;
    _dispatch = function _dispatch2(type) {
      return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
      });
    };
    _onMediaChange = function _onMediaChange2() {
      var time2 = Date.now(), matches = [];
      if (time2 - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
          var queries = c.queries, conditions = c.conditions, match, p2, anyMatch, toggled;
          for (p2 in queries) {
            match = _win.matchMedia(queries[p2]).matches;
            match && (anyMatch = 1);
            if (match !== conditions[p2]) {
              conditions[p2] = match;
              toggled = 1;
            }
          }
          if (toggled) {
            c.revert();
            anyMatch && matches.push(c);
          }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
          return c.onMatch(c, function(func) {
            return c.add(null, func);
          });
        });
        _lastMediaTime = time2;
        _dispatch("matchMedia");
      }
    };
    Context = /* @__PURE__ */ (function() {
      function Context2(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = [];
        this.isReverted = false;
        this.id = _contextID++;
        func && this.add(func);
      }
      var _proto5 = Context2.prototype;
      _proto5.add = function add(name, func, scope) {
        if (_isFunction(name)) {
          scope = func;
          func = name;
          name = _isFunction;
        }
        var self = this, f = function f2() {
          var prev = _context, prevSelector = self.selector, result;
          prev && prev !== self && prev.data.push(self);
          scope && (self.selector = selector(scope));
          _context = self;
          result = func.apply(self, arguments);
          _isFunction(result) && self._r.push(result);
          _context = prev;
          self.selector = prevSelector;
          self.isReverted = false;
          return result;
        };
        self.last = f;
        return name === _isFunction ? f(self, function(func2) {
          return self.add(null, func2);
        }) : name ? self[name] = f : f;
      };
      _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
      };
      _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
          return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
      };
      _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
      };
      _proto5.kill = function kill(revert, matchMedia2) {
        var _this4 = this;
        if (revert) {
          (function() {
            var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
            while (i2--) {
              t = _this4.data[i2];
              if (t.data === "isFlip") {
                t.revert();
                t.getChildren(true, true, false).forEach(function(tween) {
                  return tweens.splice(tweens.indexOf(tween), 1);
                });
              }
            }
            tweens.map(function(t2) {
              return {
                g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
                t: t2
              };
            }).sort(function(a, b) {
              return b.g - a.g || -Infinity;
            }).forEach(function(o) {
              return o.t.revert(revert);
            });
            i2 = _this4.data.length;
            while (i2--) {
              t = _this4.data[i2];
              if (t instanceof Timeline) {
                if (t.data !== "nested") {
                  t.scrollTrigger && t.scrollTrigger.revert();
                  t.kill();
                }
              } else {
                !(t instanceof Tween) && t.revert && t.revert(revert);
              }
            }
            _this4._r.forEach(function(f) {
              return f(revert, _this4);
            });
            _this4.isReverted = true;
          })();
        } else {
          this.data.forEach(function(e) {
            return e.kill && e.kill();
          });
        }
        this.clear();
        if (matchMedia2) {
          var i = _media.length;
          while (i--) {
            _media[i].id === this.id && _media.splice(i, 1);
          }
          this._mqs && this._mqs.forEach(function(mq) {
            return mq.removeListener ? mq.removeListener(_onMediaChange) : mq.removeEventListener("change", _onMediaChange);
          });
          this._mqs = null;
        }
      };
      _proto5.revert = function revert(config3) {
        this.kill(config3 || {});
      };
      return Context2;
    })();
    MatchMedia = /* @__PURE__ */ (function() {
      function MatchMedia2(scope) {
        this.contexts = [];
        this.scope = scope;
        _context && _context.data.push(this);
      }
      var _proto6 = MatchMedia2.prototype;
      _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
          matches: conditions
        });
        var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p2, active;
        _context && !context3.selector && (context3.selector = _context.selector);
        this.contexts.push(context3);
        func = context3.add("onMatch", func);
        context3.queries = conditions;
        for (p2 in conditions) {
          if (p2 === "all") {
            active = 1;
          } else {
            mq = _win.matchMedia(conditions[p2]);
            if (mq) {
              _media.indexOf(context3) < 0 && _media.push(context3);
              (cond[p2] = mq.matches) && (active = 1);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              (context3._mqs || (context3._mqs = [])).push(mq);
            }
          }
        }
        active && func(context3, function(f) {
          return context3.add(null, f);
        });
        return this;
      };
      _proto6.revert = function revert(config3) {
        this.kill(config3 || {});
      };
      _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
          return c.kill(revert, true);
        });
      };
      return MatchMedia2;
    })();
    _gsap = {
      registerPlugin: function registerPlugin() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        args.forEach(function(config3) {
          return _createPlugin(config3);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]);
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property2, unit2, uncache2) {
          return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      },
      quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
          var setters = target.map(function(t) {
            return gsap.quickSetter(t, property, unit);
          }), l = setters.length;
          return function(value) {
            var i = l;
            while (i--) {
              setters[i](value);
            }
          };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
          var p3 = new Plugin();
          _quickTween._pt = 0;
          p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
          p3.render(1, p3);
          _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p2);
        return Plugin ? setter : function(value) {
          return setter(target, p2, unit ? value + unit : value, cache, 1);
        };
      },
      quickTo: function quickTo(target, property, vars) {
        var _setDefaults22;
        var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
          return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
      },
      config: function config2(value) {
        return _mergeDeep(_config, value || {});
      },
      registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
          return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
          return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
        };
        if (extendTimeline) {
          Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
          };
        }
      },
      registerEase: function registerEase(name, ease2) {
        _easeMap[name] = _parseEase(ease2);
      },
      parseEase: function parseEase(ease2, defaultEase) {
        return arguments.length ? _parseEase(ease2, defaultEase) : _easeMap;
      },
      getById: function getById(id3) {
        return _globalTimeline.getById(id3);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
          vars = {};
        }
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0;
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while (child) {
          next = child._next;
          if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
            _addToTimeline(tl, child, child._start - child._delay);
          }
          child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
      },
      context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
      },
      matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
          var cond = c.conditions, found, p2;
          for (p2 in cond) {
            if (cond[p2]) {
              cond[p2] = false;
              found = 1;
            }
          }
          found && c.revert();
        }) || _onMediaChange();
      },
      addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      },
      removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      },
      utils: {
        wrap,
        wrapYoyo,
        distribute,
        random,
        snap,
        normalize,
        getUnit,
        clamp,
        splitColor,
        toArray,
        selector,
        mapRange,
        pipe,
        unitize,
        interpolate,
        shuffle
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween,
        globals: _addGlobal,
        Tween,
        Timeline,
        Animation: Animation2,
        getCache: _getCache,
        _removeLinkedListItem,
        reverting: function reverting() {
          return _reverting;
        },
        context: function context2(toAdd) {
          if (toAdd && _context) {
            _context.data.push(toAdd);
            toAdd._ctx = _context;
          }
          return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
          return _suppressOverwrites = value;
        }
      }
    };
    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
      return _gsap[name] = Tween[name];
    });
    _ticker.add(Timeline.updateRoot);
    _quickTween = _gsap.to({}, {
      duration: 0
    });
    _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
      var pt = plugin._pt;
      while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
      }
      return pt;
    };
    _addModifiers = function _addModifiers2(tween, modifiers) {
      var targets = tween._targets, p2, i, pt;
      for (p2 in modifiers) {
        i = targets.length;
        while (i--) {
          pt = tween._ptLookup[i][p2];
          if (pt && (pt = pt.d)) {
            if (pt._pt) {
              pt = _getPluginPropTween(pt, p2);
            }
            pt && pt.modifier && pt.modifier(modifiers[p2], tween, targets[i], p2);
          }
        }
      }
    };
    _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
      return {
        name,
        headless: 1,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init4(target, vars, tween) {
          tween._onInit = function(tween2) {
            var temp, p2;
            if (_isString(vars)) {
              temp = {};
              _forEachName(vars, function(name2) {
                return temp[name2] = 1;
              });
              vars = temp;
            }
            if (modifier) {
              temp = {};
              for (p2 in vars) {
                temp[p2] = modifier(vars[p2]);
              }
              vars = temp;
            }
            _addModifiers(tween2, vars);
          };
        }
      };
    };
    gsap = _gsap.registerPlugin({
      name: "attr",
      init: function init(target, vars, tween, index, targets) {
        var p2, pt, v;
        this.tween = tween;
        for (p2 in vars) {
          v = target.getAttribute(p2) || "";
          pt = this.add(target, "setAttribute", (v || 0) + "", vars[p2], index, targets, 0, 0, p2);
          pt.op = p2;
          pt.b = v;
          this._props.push(p2);
        }
      },
      render: function render(ratio, data) {
        var pt = data._pt;
        while (pt) {
          _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
          pt = pt._next;
        }
      }
    }, {
      name: "endArray",
      headless: 1,
      init: function init2(target, value) {
        var i = value.length;
        while (i--) {
          this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
        }
      }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
    Tween.version = Timeline.version = gsap.version = "3.15.1";
    _coreReady = 1;
    _windowExists() && _wake();
    Power0 = _easeMap.Power0;
    Power1 = _easeMap.Power1;
    Power2 = _easeMap.Power2;
    Power3 = _easeMap.Power3;
    Power4 = _easeMap.Power4;
    Linear = _easeMap.Linear;
    Quad = _easeMap.Quad;
    Cubic = _easeMap.Cubic;
    Quart = _easeMap.Quart;
    Quint = _easeMap.Quint;
    Strong = _easeMap.Strong;
    Elastic = _easeMap.Elastic;
    Back = _easeMap.Back;
    SteppedEase = _easeMap.SteppedEase;
    Bounce = _easeMap.Bounce;
    Sine = _easeMap.Sine;
    Expo = _easeMap.Expo;
    Circ = _easeMap.Circ;
  }
});

// node_modules/gsap/CSSPlugin.js
var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3, _transformProps, _RAD2DEG, _DEG2RAD, _atan2, _bigNum2, _capsExp, _horizontalExp, _complexExp, _propertyAliases, _renderCSSProp, _renderPropWithEnd, _renderCSSPropWithBeginning, _renderCSSPropWithBeginningAndEnd, _renderRoundedCSSProp, _renderNonTweeningValue, _renderNonTweeningValueOnlyAtEnd, _setterCSSStyle, _setterCSSProp, _setterTransform, _setterScale, _setterScaleWithRender, _setterTransformWithRender, _transformProp, _transformOriginProp, _saveStyle, _removeIndependentTransforms, _revertStyle, _getStyleSaver, _supports3D, _createElement, _getComputedProperty, _prefixes, _checkPropPrefix, _initCore, _getReparentedCloneBBox, _getAttributeFallbacks, _getBBox, _isSVG, _removeProperty, _addNonTweeningPT, _nonConvertibleUnits, _nonStandardLayouts, _convertToUnit, _get, _tweenComplexCSSString, _keywordToPercent, _convertKeywordsToPercentages, _renderClearProps, _specialProps, _identity2DMatrix, _rotationalProperties, _isNullTransform, _getComputedTransformMatrixAsArray, _getMatrix, _applySVGOrigin, _parseTransform, _firstTwoOnly, _addPxTranslate, _renderNon3DTransforms, _zeroDeg, _zeroPx, _endParenthesis, _renderCSSTransforms, _renderSVGTransforms, _addRotationalPropTween, _assign, _addRawTransformPTs, CSSPlugin;
var init_CSSPlugin = __esm({
  "node_modules/gsap/CSSPlugin.js"() {
    init_gsap_core();
    _windowExists3 = function _windowExists4() {
      return typeof window !== "undefined";
    };
    _transformProps = {};
    _RAD2DEG = 180 / Math.PI;
    _DEG2RAD = Math.PI / 180;
    _atan2 = Math.atan2;
    _bigNum2 = 1e8;
    _capsExp = /([A-Z])/g;
    _horizontalExp = /(left|right|width|margin|padding|x)/i;
    _complexExp = /[\s,\(]\S/;
    _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    };
    _renderCSSProp = function _renderCSSProp2(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
    };
    _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
      return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
    };
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
      return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
    };
    _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd2(ratio, data) {
      return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
    };
    _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
      var value = data.s + data.c * ratio;
      data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
    };
    _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
      return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    };
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
      return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
    };
    _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
      return target.style[property] = value;
    };
    _setterCSSProp = function _setterCSSProp2(target, property, value) {
      return target.style.setProperty(property, value);
    };
    _setterTransform = function _setterTransform2(target, property, value) {
      return target._gsap[property] = value;
    };
    _setterScale = function _setterScale2(target, property, value) {
      return target._gsap.scaleX = target._gsap.scaleY = value;
    };
    _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache.scaleX = cache.scaleY = value;
      cache.renderTransform(ratio, cache);
    };
    _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache[property] = value;
      cache.renderTransform(ratio, cache);
    };
    _transformProp = "transform";
    _transformOriginProp = _transformProp + "Origin";
    _saveStyle = function _saveStyle2(property, isNotCSS) {
      var _this = this;
      var target = this.target, style = target.style, cache = target._gsap;
      if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
          property = _propertyAliases[property] || property;
          ~property.indexOf(",") ? property.split(",").forEach(function(a) {
            return _this.tfm[a] = _get(target, a);
          }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
          property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
        } else {
          return _propertyAliases.transform.split(",").forEach(function(p2) {
            return _saveStyle2.call(_this, p2, isNotCSS);
          });
        }
        if (this.props.indexOf(_transformProp) >= 0) {
          return;
        }
        if (cache.svg) {
          this.svgo = target.getAttribute("data-svg-origin");
          this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
      }
      (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
    };
    _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
      if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
      }
    };
    _revertStyle = function _revertStyle2() {
      var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p2;
      for (i = 0; i < props.length; i += 3) {
        if (!props[i + 1]) {
          props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
        } else if (props[i + 1] === 2) {
          target[props[i]](props[i + 2]);
        } else {
          target[props[i]] = props[i + 2];
        }
      }
      if (this.tfm) {
        for (p2 in this.tfm) {
          cache[p2] = this.tfm[p2];
        }
        if (cache.svg) {
          cache.renderTransform();
          target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting2();
        if ((!i || !i.isStart) && !style[_transformProp]) {
          _removeIndependentTransforms(style);
          if (cache.zOrigin && style[_transformOriginProp]) {
            style[_transformOriginProp] += " " + cache.zOrigin + "px";
            cache.zOrigin = 0;
            cache.renderTransform();
          }
          cache.uncache = 1;
        }
      }
    };
    _getStyleSaver = function _getStyleSaver2(target, properties) {
      var saver = {
        target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
      };
      target._gsap || gsap.core.getCache(target);
      properties && target.style && target.nodeType && properties.split(",").forEach(function(p2) {
        return saver.save(p2);
      });
      return saver;
    };
    _createElement = function _createElement2(type, ns) {
      var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
      return e && e.style ? e : _doc2.createElement(type);
    };
    _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
      var cs = getComputedStyle(target);
      return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
    };
    _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
    _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
      var e = element || _tempDiv, s = e.style, i = 5;
      if (property in s && !preferPrefix) {
        return property;
      }
      property = property.charAt(0).toUpperCase() + property.substr(1);
      while (i-- && !(_prefixes[i] + property in s)) {
      }
      return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    };
    _initCore = function _initCore2() {
      if (_windowExists3() && window.document) {
        _win2 = window;
        _doc2 = _win2.document;
        _docElement = _doc2.documentElement;
        _tempDiv = _createElement("div") || {
          style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting2 = gsap.core.reverting;
        _pluginInitted = 1;
      }
    };
    _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
      var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
      clone.style.display = "block";
      svg.appendChild(clone);
      _docElement.appendChild(svg);
      try {
        bbox = clone.getBBox();
      } catch (e) {
      }
      svg.removeChild(clone);
      _docElement.removeChild(svg);
      return bbox;
    };
    _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
      var i = attributesArray.length;
      while (i--) {
        if (target.hasAttribute(attributesArray[i])) {
          return target.getAttribute(attributesArray[i]);
        }
      }
    };
    _getBBox = function _getBBox2(target) {
      var bounds, cloned;
      try {
        bounds = target.getBBox();
      } catch (error) {
        bounds = _getReparentedCloneBBox(target);
        cloned = 1;
      }
      bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
      return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
        y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      } : bounds;
    };
    _isSVG = function _isSVG2(e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    };
    _removeProperty = function _removeProperty2(target, property) {
      if (property) {
        var style = target.style, first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) {
          property = _transformProp;
        }
        if (style.removeProperty) {
          first2Chars = property.substr(0, 2);
          if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
            property = "-" + property;
          }
          style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
        } else {
          style.removeAttribute(property);
        }
      }
    };
    _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
      var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
      plugin._pt = pt;
      pt.b = beginning;
      pt.e = end;
      plugin._props.push(property);
      return pt;
    };
    _nonConvertibleUnits = {
      deg: 1,
      rad: 1,
      turn: 1
    };
    _nonStandardLayouts = {
      grid: 1,
      flex: 1
    };
    _convertToUnit = function _convertToUnit2(target, property, value, unit) {
      var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px2, parent, cache, isSVG;
      if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
        return curValue;
      }
      curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
      isSVG = target.getCTM && _isSVG(target);
      if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px2 = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return _round(toPercent ? curValue / px2 * amount : curValue / 100 * px2);
      }
      style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
      parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
      if (isSVG) {
        parent = (target.ownerSVGElement || {}).parentNode;
      }
      if (!parent || parent === _doc2 || !parent.appendChild) {
        parent = _doc2.body;
      }
      cache = parent._gsap;
      if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
        return _round(curValue / cache.width * amount);
      } else {
        if (toPercent && (property === "height" || property === "width")) {
          var v = target.style[property];
          target.style[property] = amount + unit;
          px2 = target[measureProperty];
          v ? target.style[property] = v : _removeProperty(target, property);
        } else {
          (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static");
          parent.appendChild(_tempDiv);
          px2 = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";
        }
        if (horizontal && toPercent) {
          cache = _getCache(parent);
          cache.time = _ticker.time;
          cache.width = parent[measureProperty];
        }
      }
      return _round(toPixels ? px2 * curValue / amount : px2 && curValue ? amount / px2 * curValue : 0);
    };
    _get = function _get2(target, property, unit, uncache) {
      var value;
      _pluginInitted || _initCore();
      if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) {
          property = property.split(",")[0];
        }
      }
      if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
      } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
          value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
        }
      }
      return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
    };
    _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
      if (!start || start === "none") {
        var p2 = _checkPropPrefix(prop, target, 1), s = p2 && _getComputedProperty(target, p2, 1);
        if (s && s !== start) {
          prop = p2;
          start = s;
        } else if (prop === "borderColor") {
          start = _getComputedProperty(target, "borderTopColor");
        }
      }
      var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color2, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if (end.substring(0, 6) === "var(--") {
        end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
      }
      if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
      }
      a = [start, end];
      _colorStringFilter(a);
      start = a[0];
      end = a[1];
      startValues = start.match(_numWithUnitExp) || [];
      endValues = end.match(_numWithUnitExp) || [];
      if (endValues.length) {
        while (result = _numWithUnitExp.exec(end)) {
          endValue = result[0];
          chunk = end.substring(index, result.index);
          if (color2) {
            color2 = (color2 + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
            color2 = 1;
          }
          if (endValue !== (startValue = startValues[matchIndex++] || "")) {
            startNum = parseFloat(startValue) || 0;
            startUnit = startValue.substr((startNum + "").length);
            endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
            endNum = parseFloat(endValue);
            endUnit = endValue.substr((endNum + "").length);
            index = _numWithUnitExp.lastIndex - endUnit.length;
            if (!endUnit) {
              endUnit = endUnit || _config.units[prop] || startUnit;
              if (index === end.length) {
                end += endUnit;
                pt.e += endUnit;
              }
            }
            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
            }
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum - startNum,
              m: color2 && color2 < 4 || prop === "zIndex" ? Math.round : 0
            };
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
      } else {
        pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
      }
      _relExp.test(end) && (pt.e = 0);
      this._pt = pt;
      return pt;
    };
    _keywordToPercent = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    };
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
      var split = value.split(" "), x = split[0], y = split[1] || "50%";
      if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        value = x;
        x = y;
        y = value;
      }
      split[0] = _keywordToPercent[x] || x;
      split[1] = _keywordToPercent[y] || y;
      return split.join(" ");
    };
    _renderClearProps = function _renderClearProps2(ratio, data) {
      if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
          style.cssText = "";
          clearTransforms = 1;
        } else {
          props = props.split(",");
          i = props.length;
          while (--i > -1) {
            prop = props[i];
            if (_transformProps[prop]) {
              clearTransforms = 1;
              prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
            }
            _removeProperty(target, prop);
          }
        }
        if (clearTransforms) {
          _removeProperty(target, _transformProp);
          if (cache) {
            cache.svg && target.removeAttribute("transform");
            style.scale = style.rotate = style.translate = "none";
            _parseTransform(target, 1);
            cache.uncache = 1;
            _removeIndependentTransforms(style);
          }
        }
      }
    };
    _specialProps = {
      clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
          var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
          pt.u = endValue;
          pt.pr = -10;
          pt.tween = tween;
          plugin._props.push(property);
          return 1;
        }
      }
      /* className feature (about 0.4kb gzipped).
      , className(plugin, target, property, endValue, tween) {
      	let _renderClassName = (ratio, data) => {
      			data.css.render(ratio, data.css);
      			if (!ratio || ratio === 1) {
      				let inline = data.rmv,
      					target = data.t,
      					p;
      				target.setAttribute("class", ratio ? data.e : data.b);
      				for (p in inline) {
      					_removeProperty(target, p);
      				}
      			}
      		},
      		_getAllStyles = (target) => {
      			let styles = {},
      				computed = getComputedStyle(target),
      				p;
      			for (p in computed) {
      				if (isNaN(p) && p !== "cssText" && p !== "length") {
      					styles[p] = computed[p];
      				}
      			}
      			_setDefaults(styles, _parseTransform(target, 1));
      			return styles;
      		},
      		startClassList = target.getAttribute("class"),
      		style = target.style,
      		cssText = style.cssText,
      		cache = target._gsap,
      		classPT = cache.classPT,
      		inlineToRemoveAtEnd = {},
      		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
      		changingVars = {},
      		startVars = _getAllStyles(target),
      		transformRelated = /(transform|perspective)/i,
      		endVars, p;
      	if (classPT) {
      		classPT.r(1, classPT.d);
      		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
      	}
      	target.setAttribute("class", data.e);
      	endVars = _getAllStyles(target, true);
      	target.setAttribute("class", startClassList);
      	for (p in endVars) {
      		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
      			changingVars[p] = endVars[p];
      			if (!style[p] && style[p] !== "0") {
      				inlineToRemoveAtEnd[p] = 1;
      			}
      		}
      	}
      	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
      	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
      		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
      	}
      	_parseTransform(target, true); //to clear the caching of transforms
      	data.css = new gsap.plugins.css();
      	data.css.init(target, changingVars, tween);
      	plugin._props.push(...data.css._props);
      	return 1;
      }
      */
    };
    _identity2DMatrix = [1, 0, 0, 1, 0, 0];
    _rotationalProperties = {};
    _isNullTransform = function _isNullTransform2(value) {
      return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    };
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
      var matrixString = _getComputedProperty(target, _transformProp);
      return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
    };
    _getMatrix = function _getMatrix2(target, force2D) {
      var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
      if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix;
        matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
      } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
          addedToDOM = 1;
          nextSibling = target.nextElementSibling;
          _docElement.appendChild(target);
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) {
          nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
      }
      return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
    };
    _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
      var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
      if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
      } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
      }
      if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
      } else {
        cache.xOffset = cache.yOffset = 0;
      }
      cache.xOrigin = xOrigin;
      cache.yOrigin = yOrigin;
      cache.smooth = !!smooth;
      cache.origin = origin;
      cache.originIsAbsolute = !!originIsAbsolute;
      target.style[_transformOriginProp] = "0px 0px";
      if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
      }
      target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    };
    _parseTransform = function _parseTransform2(target, uncache) {
      var cache = target._gsap || new GSCache(target);
      if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
      }
      var style = target.style, invertedScaleX = cache.scaleX < 0, px2 = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX2, scaleY2, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
      x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
      scaleX2 = scaleY2 = 1;
      cache.svg = !!(target.getCTM && _isSVG(target));
      if (cs.translate) {
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
          style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        }
        style.scale = style.rotate = style.translate = "none";
      }
      matrix = _getMatrix(target, cache.svg);
      if (cache.svg) {
        if (cache.uncache) {
          t2 = target.getBBox();
          origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
          t1 = "";
        } else {
          t1 = !uncache && target.getAttribute("data-svg-origin");
        }
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
      }
      xOrigin = cache.xOrigin || 0;
      yOrigin = cache.yOrigin || 0;
      if (matrix !== _identity2DMatrix) {
        a = matrix[0];
        b = matrix[1];
        c = matrix[2];
        d = matrix[3];
        x = a12 = matrix[4];
        y = a22 = matrix[5];
        if (matrix.length === 6) {
          scaleX2 = Math.sqrt(a * a + b * b);
          scaleY2 = Math.sqrt(d * d + c * c);
          rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
          skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
          skewX && (scaleY2 *= Math.abs(Math.cos(skewX * _DEG2RAD)));
          if (cache.svg) {
            x -= xOrigin - (xOrigin * a + yOrigin * c);
            y -= yOrigin - (xOrigin * b + yOrigin * d);
          }
        } else {
          a32 = matrix[6];
          a42 = matrix[7];
          a13 = matrix[8];
          a23 = matrix[9];
          a33 = matrix[10];
          a43 = matrix[11];
          x = matrix[12];
          y = matrix[13];
          z = matrix[14];
          angle = _atan2(a32, a33);
          rotationX = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t1;
            a22 = t2;
            a32 = t3;
          }
          angle = _atan2(-c, a33);
          rotationY = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a * cos - a13 * sin;
            t2 = b * cos - a23 * sin;
            t3 = c * cos - a33 * sin;
            a43 = d * sin + a43 * cos;
            a = t1;
            b = t2;
            c = t3;
          }
          angle = _atan2(b, a);
          rotation = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t1 = a * cos + b * sin;
            t2 = a12 * cos + a22 * sin;
            b = b * cos - a * sin;
            a22 = a22 * cos - a12 * sin;
            a = t1;
            a12 = t2;
          }
          if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
            rotationX = rotation = 0;
            rotationY = 180 - rotationY;
          }
          scaleX2 = _round(Math.sqrt(a * a + b * b + c * c));
          scaleY2 = _round(Math.sqrt(a22 * a22 + a32 * a32));
          angle = _atan2(a12, a22);
          skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
          perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
          t1 = target.getAttribute("transform");
          cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
          t1 && target.setAttribute("transform", t1);
        }
      }
      if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
          scaleX2 *= -1;
          skewX += rotation <= 0 ? 180 : -180;
          rotation += rotation <= 0 ? 180 : -180;
        } else {
          scaleY2 *= -1;
          skewX += skewX <= 0 ? 180 : -180;
        }
      }
      uncache = uncache || cache.uncache;
      cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px2;
      cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px2;
      cache.z = z + px2;
      cache.scaleX = _round(scaleX2);
      cache.scaleY = _round(scaleY2);
      cache.rotation = _round(rotation) + deg;
      cache.rotationX = _round(rotationX) + deg;
      cache.rotationY = _round(rotationY) + deg;
      cache.skewX = skewX + deg;
      cache.skewY = skewY + deg;
      cache.transformPerspective = perspective + px2;
      if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
      }
      cache.xOffset = cache.yOffset = 0;
      cache.force3D = _config.force3D;
      cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
      cache.uncache = 0;
      return cache;
    };
    _firstTwoOnly = function _firstTwoOnly2(value) {
      return (value = value.split(" "))[0] + " " + value[1];
    };
    _addPxTranslate = function _addPxTranslate2(target, start, value) {
      var unit = getUnit(start);
      return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
    };
    _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
      cache.z = "0px";
      cache.rotationY = cache.rotationX = "0deg";
      cache.force3D = 0;
      _renderCSSTransforms(ratio, cache);
    };
    _zeroDeg = "0deg";
    _zeroPx = "0px";
    _endParenthesis = ") ";
    _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
      var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
      if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
      }
      if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
      }
      if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
      }
      if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
      }
      if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
      }
      if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
      }
      if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
      }
      if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
      }
      if (scaleX2 !== 1 || scaleY2 !== 1) {
        transforms += "scale(" + scaleX2 + ", " + scaleY2 + _endParenthesis;
      }
      target.style[_transformProp] = transforms || "translate(0, 0)";
    };
    _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
      var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX2 = _ref2.scaleX, scaleY2 = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
      rotation = parseFloat(rotation);
      skewX = parseFloat(skewX);
      skewY = parseFloat(skewY);
      if (skewY) {
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
      }
      if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX2;
        a21 = Math.sin(rotation) * scaleX2;
        a12 = Math.sin(rotation - skewX) * -scaleY2;
        a22 = Math.cos(rotation - skewX) * scaleY2;
        if (skewX) {
          skewY *= _DEG2RAD;
          temp = Math.tan(skewX - skewY);
          temp = Math.sqrt(1 + temp * temp);
          a12 *= temp;
          a22 *= temp;
          if (skewY) {
            temp = Math.tan(skewY);
            temp = Math.sqrt(1 + temp * temp);
            a11 *= temp;
            a21 *= temp;
          }
        }
        a11 = _round(a11);
        a21 = _round(a21);
        a12 = _round(a12);
        a22 = _round(a22);
      } else {
        a11 = scaleX2;
        a22 = scaleY2;
        a21 = a12 = 0;
      }
      if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
      }
      if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
      }
      if (xPercent || yPercent) {
        temp = target.getBBox();
        tx = _round(tx + xPercent / 100 * temp.width);
        ty = _round(ty + yPercent / 100 * temp.height);
      }
      temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
      target.setAttribute("transform", temp);
      forceCSS && (target.style[_transformProp] = temp);
    };
    _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
      var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
      if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
          change %= cap;
          if (change !== change % (cap / 2)) {
            change += change < 0 ? cap : -cap;
          }
        }
        if (direction === "cw" && change < 0) {
          change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
        } else if (direction === "ccw" && change > 0) {
          change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
        }
      }
      plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
      pt.e = finalValue;
      pt.u = "deg";
      plugin._props.push(property);
      return pt;
    };
    _assign = function _assign2(target, source) {
      for (var p2 in source) {
        target[p2] = source[p2];
      }
      return target;
    };
    _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
      var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
      if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
      } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
      }
      for (p2 in _transformProps) {
        startValue = startCache[p2];
        endValue = endCache[p2];
        if (startValue !== endValue && exclude.indexOf(p2) < 0) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
          endNum = parseFloat(endValue);
          plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
          plugin._pt.u = endUnit || 0;
          plugin._props.push(p2);
        }
      }
      _assign(endCache, startCache);
    };
    _forEachName("padding,margin,Width,Radius", function(name, index) {
      var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
      });
      _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
          a = props.map(function(prop) {
            return _get(plugin, prop, property);
          });
          vars = a.join(" ");
          return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
          return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
      };
    });
    CSSPlugin = {
      name: "css",
      register: _initCore,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init3(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
        _pluginInitted || _initCore();
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for (p2 in vars) {
          if (p2 === "autoRound") {
            continue;
          }
          endValue = vars[p2];
          if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
            continue;
          }
          type = typeof endValue;
          specialProp = _specialProps[p2];
          if (type === "function") {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }
          if (type === "string" && ~endValue.indexOf("random(")) {
            endValue = _replaceRandom(endValue);
          }
          if (specialProp) {
            specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
          } else if (p2.substr(0, 2) === "--") {
            startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
            endValue += "";
            _colorExp.lastIndex = 0;
            if (!_colorExp.test(startValue)) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
            }
            this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
            props.push(p2);
            inlineProps.push(p2, 0, style[p2]);
          } else if (type !== "undefined") {
            if (startAt && p2 in startAt) {
              startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
              _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
              getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p2] || getUnit(_get(target, p2)) || "");
              (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
            } else {
              startValue = _get(target, p2);
            }
            startNum = parseFloat(startValue);
            relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);
            if (p2 in _propertyAliases) {
              if (p2 === "autoAlpha") {
                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                  startNum = 0;
                }
                inlineProps.push("visibility", 0, style.visibility);
                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
              }
              if (p2 !== "scale" && p2 !== "transform") {
                p2 = _propertyAliases[p2];
                ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
              }
            }
            isTransformRelated = p2 in _transformProps;
            if (isTransformRelated) {
              this.styles.save(p2);
              finalTransformValue = endValue;
              if (type === "string" && endValue.substring(0, 6) === "var(--") {
                endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
                if (endValue.substring(0, 5) === "calc(") {
                  var origPerspective = target.style.perspective;
                  target.style.perspective = endValue;
                  endValue = _getComputedProperty(target, "perspective");
                  origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
                }
                endNum = parseFloat(endValue);
              }
              if (!transformPropTween) {
                cache = target._gsap;
                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                smooth = vars.smoothOrigin !== false && cache.smooth;
                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                transformPropTween.dep = 1;
              }
              if (p2 === "scale") {
                this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                this._pt.u = 0;
                props.push("scaleY", p2);
                p2 += "X";
              } else if (p2 === "transformOrigin") {
                inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                endValue = _convertKeywordsToPercentages(endValue);
                if (cache.svg) {
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                } else {
                  endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                  endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                  _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                }
                continue;
              } else if (p2 === "svgOrigin") {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                continue;
              } else if (p2 in _rotationalProperties) {
                _addRotationalPropTween(this, cache, p2, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                continue;
              } else if (p2 === "smoothOrigin") {
                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                continue;
              } else if (p2 === "force3D") {
                cache[p2] = endValue;
                continue;
              } else if (p2 === "transform") {
                _addRawTransformPTs(this, endValue, target);
                continue;
              }
            } else if (!(p2 in style)) {
              p2 = _checkPropPrefix(p2) || p2;
            }
            if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
              startUnit = (startValue + "").substr((startNum + "").length);
              endNum || (endNum = 0);
              endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
              startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
              this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p2, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
              this._pt.u = endUnit || 0;
              if (isTransformRelated && finalTransformValue !== endValue) {
                this._pt.b = startValue;
                this._pt.e = finalTransformValue;
                this._pt.r = _renderCSSPropWithBeginningAndEnd;
              } else if (startUnit !== endUnit && endUnit !== "%") {
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p2 in style)) {
              if (p2 in target) {
                this.add(target, p2, startValue || target[p2], relative ? relative + endValue : endValue, index, targets);
              } else if (p2 !== "parseTransform") {
                _missingPlugin(p2, endValue);
                continue;
              }
            } else {
              _tweenComplexCSSString.call(this, target, p2, startValue, relative ? relative + endValue : endValue);
            }
            isTransformRelated || (p2 in style ? inlineProps.push(p2, 0, style[p2]) : typeof target[p2] === "function" ? inlineProps.push(p2, 2, target[p2]()) : inlineProps.push(p2, 1, startValue || target[p2]));
            props.push(p2);
          }
        }
        hasPriority && _sortPropTweensByPriority(this);
      },
      render: function render2(ratio, data) {
        if (data.tween._time || !_reverting2()) {
          var pt = data._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        } else {
          data.styles.revert();
        }
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        var p2 = _propertyAliases[property];
        p2 && p2.indexOf(",") < 0 && (property = p2);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
      },
      core: {
        _removeProperty,
        _getMatrix
      }
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    gsap.core.getStyleSaver = _getStyleSaver;
    (function(positionAndScale, rotation, others, aliases) {
      var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
      });
      _forEachName(rotation, function(name) {
        _config.units[name] = "deg";
        _rotationalProperties[name] = 1;
      });
      _propertyAliases[all[13]] = positionAndScale + "," + rotation;
      _forEachName(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
      });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
      _config.units[name] = "px";
    });
    gsap.registerPlugin(CSSPlugin);
  }
});

// node_modules/gsap/index.js
var gsap_exports = {};
__export(gsap_exports, {
  Back: () => Back,
  Bounce: () => Bounce,
  CSSPlugin: () => CSSPlugin,
  Circ: () => Circ,
  Cubic: () => Cubic,
  Elastic: () => Elastic,
  Expo: () => Expo,
  Linear: () => Linear,
  Power0: () => Power0,
  Power1: () => Power1,
  Power2: () => Power2,
  Power3: () => Power3,
  Power4: () => Power4,
  Quad: () => Quad,
  Quart: () => Quart,
  Quint: () => Quint,
  Sine: () => Sine,
  SteppedEase: () => SteppedEase,
  Strong: () => Strong,
  TimelineLite: () => Timeline,
  TimelineMax: () => Timeline,
  TweenLite: () => Tween,
  TweenMax: () => TweenMaxWithCSS,
  default: () => gsapWithCSS,
  gsap: () => gsapWithCSS
});
var gsapWithCSS, TweenMaxWithCSS;
var init_gsap = __esm({
  "node_modules/gsap/index.js"() {
    init_gsap_core();
    init_CSSPlugin();
    gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
    TweenMaxWithCSS = gsapWithCSS.core.Tween;
  }
});

// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var gsap2, _coreInitted2, _clamp3, _win3, _doc3, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context2, _getGSAP, _startup, _observers, _scrollers, _proxies, _getTime, _bridge, _integrate, _getProxyProp, _isViewport, _addListener, _removeListener, _scrollLeft, _scrollTop, _onScroll, _scrollCacheFunc, _horizontal, _vertical, _getTarget, _isWithin, _getScrollFunc, _getVelocityProp, _getEvent, _getAbsoluteMax, _setScrollTrigger, _initCore3, Observer;
var init_Observer = __esm({
  "node_modules/gsap/Observer.js"() {
    _getGSAP = function _getGSAP2() {
      return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
    };
    _startup = 1;
    _observers = [];
    _scrollers = [];
    _proxies = [];
    _getTime = Date.now;
    _bridge = function _bridge2(name, value) {
      return value;
    };
    _integrate = function _integrate2() {
      var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
      scrollers.push.apply(scrollers, _scrollers);
      proxies.push.apply(proxies, _proxies);
      _scrollers = scrollers;
      _proxies = proxies;
      _bridge = function _bridge3(name, value) {
        return data[name](value);
      };
    };
    _getProxyProp = function _getProxyProp2(element, property) {
      return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
    };
    _isViewport = function _isViewport2(el) {
      return !!~_root.indexOf(el);
    };
    _addListener = function _addListener2(element, type, func, passive, capture) {
      return element.addEventListener(type, func, {
        passive: passive !== false,
        capture: !!capture
      });
    };
    _removeListener = function _removeListener2(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _scrollLeft = "scrollLeft";
    _scrollTop = "scrollTop";
    _onScroll = function _onScroll2() {
      return _normalizer && _normalizer.isPressed || _scrollers.cache++;
    };
    _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
      var cachingFunc = function cachingFunc2(value) {
        if (value || value === 0) {
          _startup && _win3.history.scrollRestoration !== "manual" && (_win3.history.scrollRestoration = "manual");
          var isNormalizing = _normalizer && _normalizer.isPressed;
          value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
          f(value);
          cachingFunc2.cacheID = _scrollers.cache;
          isNormalizing && _bridge("ss", value);
        } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
          cachingFunc2.cacheID = _scrollers.cache;
          cachingFunc2.v = f();
        }
        return cachingFunc2.v + cachingFunc2.offset;
      };
      cachingFunc.offset = 0;
      return f && cachingFunc;
    };
    _horizontal = {
      s: _scrollLeft,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
      })
    };
    _vertical = {
      s: _scrollTop,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: _horizontal,
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
      })
    };
    _getTarget = function _getTarget2(t, self) {
      return (self && self._ctx && self._ctx.selector || gsap2.utils.toArray)(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
    };
    _isWithin = function _isWithin2(element, list) {
      var i = list.length;
      while (i--) {
        if (list[i] === element || list[i].contains(element)) {
          return true;
        }
      }
      return false;
    };
    _getScrollFunc = function _getScrollFunc2(element, _ref) {
      var s = _ref.s, sc = _ref.sc;
      _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
      var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
      !~i && (i = _scrollers.push(element) - 1);
      _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
      var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
      })));
      func.target = element;
      prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
      return func;
    };
    _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
      var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
          v2 = v1;
          v1 = value2;
          t2 = t1;
          t1 = t;
        } else if (useDelta) {
          v1 += value2;
        } else {
          v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
        }
      }, reset = function reset2() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
      }, getVelocity2 = function getVelocity3(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
      };
      return {
        update,
        reset,
        getVelocity: getVelocity2
      };
    };
    _getEvent = function _getEvent2(e, preventDefault2) {
      preventDefault2 && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
      return e.changedTouches ? e.changedTouches[0] : e;
    };
    _getAbsoluteMax = function _getAbsoluteMax2(a) {
      var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
      return Math.abs(max) >= Math.abs(min) ? max : min;
    };
    _setScrollTrigger = function _setScrollTrigger2() {
      ScrollTrigger = gsap2.core.globals().ScrollTrigger;
      ScrollTrigger && ScrollTrigger.core && _integrate();
    };
    _initCore3 = function _initCore4(core) {
      gsap2 = core || _getGSAP();
      if (!_coreInitted2 && gsap2 && typeof document !== "undefined" && document.body) {
        _win3 = window;
        _doc3 = document;
        _docEl = _doc3.documentElement;
        _body = _doc3.body;
        _root = [_win3, _doc3, _docEl, _body];
        _clamp3 = gsap2.utils.clamp;
        _context2 = gsap2.core.context || function() {
        };
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
        _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
          return _startup = 0;
        }, 500);
        _coreInitted2 = 1;
      }
      ScrollTrigger || _setScrollTrigger();
      return _coreInitted2;
    };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    Observer = /* @__PURE__ */ (function() {
      function Observer2(vars) {
        this.init(vars);
      }
      var _proto = Observer2.prototype;
      _proto.init = function init4(vars) {
        _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault2 = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap2.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
        var id3, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault2 && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
          return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
          return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc2() {
          self._vx.reset();
          self._vy.reset();
          onStopDelayedCall.pause();
          onStop && onStop(self);
        }, update = function update2() {
          var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
          onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
          if (changedX) {
            onRight && self.deltaX > 0 && onRight(self);
            onLeft && self.deltaX < 0 && onLeft(self);
            onChangeX && onChangeX(self);
            onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
            prevDeltaX = self.deltaX;
            deltaX[0] = deltaX[1] = deltaX[2] = 0;
          }
          if (changedY) {
            onDown && self.deltaY > 0 && onDown(self);
            onUp && self.deltaY < 0 && onUp(self);
            onChangeY && onChangeY(self);
            onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
            prevDeltaY = self.deltaY;
            deltaY[0] = deltaY[1] = deltaY[2] = 0;
          }
          if (moved || dragged) {
            onMove && onMove(self);
            if (dragged) {
              onDragStart && dragged === 1 && onDragStart(self);
              onDrag && onDrag(self);
              dragged = 0;
            }
            moved = false;
          }
          locked && !(locked = false) && onLockAxis && onLockAxis(self);
          if (wheeled) {
            onWheel(self);
            wheeled = false;
          }
          id3 = 0;
        }, onDelta = function onDelta2(x, y, index) {
          deltaX[index] += x;
          deltaY[index] += y;
          self._vx.update(x);
          self._vy.update(y);
          debounce ? id3 || (id3 = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
          if (lockAxis && !axis) {
            self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
            locked = true;
          }
          if (axis !== "y") {
            deltaX[2] += x;
            self._vx.update(x, true);
          }
          if (axis !== "x") {
            deltaY[2] += y;
            self._vy.update(y, true);
          }
          debounce ? id3 || (id3 = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          e = _getEvent(e, preventDefault2);
          var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging2 = self.isDragging;
          self.x = x;
          self.y = y;
          if (isDragging2 || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
            dragged || (dragged = isDragging2 ? 2 : 1);
            isDragging2 || (self.isDragging = true);
            onTouchOrPointerDelta(dx, dy);
          }
        }, _onPress = self.onPress = function(e) {
          if (_ignoreCheck(e, 1) || e && e.button) {
            return;
          }
          self.axis = axis = null;
          onStopDelayedCall.pause();
          self.isPressed = true;
          e = _getEvent(e);
          prevDeltaX = prevDeltaY = 0;
          self.startX = self.x = e.clientX;
          self.startY = self.y = e.clientY;
          self._vx.reset();
          self._vy.reset();
          _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
          self.deltaX = self.deltaY = 0;
          onPress && onPress(self);
        }, _onRelease = self.onRelease = function(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
          if (!isDragNotClick && isTrackingDrag) {
            self._vx.reset();
            self._vy.reset();
            if (preventDefault2 && allowClicks) {
              gsap2.delayedCall(0.08, function() {
                if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                  if (e.target.click) {
                    e.target.click();
                  } else if (ownerDoc.createEvent) {
                    var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                    syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                    e.target.dispatchEvent(syntheticEvent);
                  }
                }
              });
            }
          }
          self.isDragging = self.isGesturing = self.isPressed = false;
          onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
          dragged && update();
          onDragEnd && wasDragging && onDragEnd(self);
          onRelease && onRelease(self, isDragNotClick);
        }, _onGestureStart = function _onGestureStart2(e) {
          return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd2() {
          return (self.isGesturing = false) || onGestureEnd(self);
        }, onScroll = function onScroll2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = scrollFuncX(), y = scrollFuncY();
          onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
          scrollX = x;
          scrollY = y;
          onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          e = _getEvent(e, preventDefault2);
          onWheel && (wheeled = true);
          var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
          onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
          onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
          self.x = x;
          self.y = y;
          moved = true;
          onStop && onStopDelayedCall.restart(true);
          (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover2(e) {
          self.event = e;
          onHover(self);
        }, _onHoverEnd = function _onHoverEnd2(e) {
          self.event = e;
          onHoverEnd(self);
        }, _onClick = function _onClick2(e) {
          return _ignoreCheck(e) || _getEvent(e, preventDefault2) && onClick(self);
        };
        onStopDelayedCall = self._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        _context2(this);
        self.enable = function(e) {
          if (!self.isEnabled) {
            _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
            type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
            type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
            if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
              _addListener(target, _eventTypes[0], _onPress, passive, capture);
              _addListener(ownerDoc, _eventTypes[2], _onRelease);
              _addListener(ownerDoc, _eventTypes[3], _onRelease);
              allowClicks && _addListener(target, "click", clickCapture, true, true);
              onClick && _addListener(target, "click", _onClick);
              onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
              onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
              onHover && _addListener(target, _pointerType + "enter", _onHover);
              onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
              onMove && _addListener(target, _pointerType + "move", _onMove);
            }
            self.isEnabled = true;
            self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
            self._vx.reset();
            self._vy.reset();
            scrollX = scrollFuncX();
            scrollY = scrollFuncY();
            e && e.type && _onPress(e);
            onEnable && onEnable(self);
          }
          return self;
        };
        self.disable = function() {
          if (self.isEnabled) {
            _observers.filter(function(o) {
              return o !== self && _isViewport(o.target);
            }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
            if (self.isPressed) {
              self._vx.reset();
              self._vy.reset();
              _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            }
            _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
            _removeListener(target, "wheel", _onWheel, capture);
            _removeListener(target, _eventTypes[0], _onPress, capture);
            _removeListener(ownerDoc, _eventTypes[2], _onRelease);
            _removeListener(ownerDoc, _eventTypes[3], _onRelease);
            _removeListener(target, "click", clickCapture, true);
            _removeListener(target, "click", _onClick);
            _removeListener(ownerDoc, "gesturestart", _onGestureStart);
            _removeListener(ownerDoc, "gestureend", _onGestureEnd);
            _removeListener(target, _pointerType + "enter", _onHover);
            _removeListener(target, _pointerType + "leave", _onHoverEnd);
            _removeListener(target, _pointerType + "move", _onMove);
            self.isEnabled = self.isPressed = self.isDragging = false;
            onDisable && onDisable(self);
          }
        };
        self.kill = self.revert = function() {
          self.disable();
          var i = _observers.indexOf(self);
          i >= 0 && _observers.splice(i, 1);
          _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target) && (_normalizer = self);
        self.enable(event);
      };
      _createClass(Observer2, [{
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        }
      }, {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        }
      }]);
      return Observer2;
    })();
    Observer.version = "3.15.1";
    Observer.create = function(vars) {
      return new Observer(vars);
    };
    Observer.register = _initCore3;
    Observer.getAll = function() {
      return _observers.slice();
    };
    Observer.getById = function(id3) {
      return _observers.filter(function(o) {
        return o.vars.id === id3;
      })[0];
    };
    _getGSAP() && gsap2.registerPlugin(Observer);
  }
});

// node_modules/gsap/ScrollTrigger.js
var ScrollTrigger_exports = {};
__export(ScrollTrigger_exports, {
  ScrollTrigger: () => ScrollTrigger2,
  default: () => ScrollTrigger2
});
var gsap3, _coreInitted3, _win4, _doc4, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp4, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp2, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites2, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context3, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup2, _getTime2, _time1, _lastScrollTime, _enabled, _parseClamp, _keepClamp, _rafBugFix, _pointerDownHandler, _pointerUpHandler, _passThrough3, _round3, _windowExists5, _getGSAP3, _isViewport3, _getViewportDimension, _getBoundsFunc, _getSizeFunc, _getOffsetsFunc, _maxScroll, _iterateAutoRefresh, _isString3, _isFunction3, _isNumber3, _isObject3, _endAnimation, _callback3, _abs, _left, _top, _right, _bottom, _width, _height, _Right, _Left, _Top, _Bottom, _padding, _margin, _Width, _Height, _px, _getComputedStyle, _makePositionable, _setDefaults3, _getBounds, _getSize, _getLabelRatioArray, _getClosestLabel, _snapDirectional, _getLabelAtDirection, _multiListener, _addListener3, _removeListener3, _wheelListener, _markerDefaults, _defaults2, _keywords, _offsetToPx, _createMarker, _positionMarker, _triggers, _ids, _rafID, _sync, _onScroll3, _setBaseDimensions, _onResize, _listeners2, _emptyArray2, _softRefresh, _dispatch3, _savedStyles, _revertRecorded, _recordScrollPositions, _revertAll, _clearScrollMemory, _refreshingAll, _refreshID, _queueRefreshID, _queueRefreshAll, _refresh100vh, _hideAllMarkers, _refreshAll, _lastScroll, _direction, _primary, _updateAll, _propNamesToCopy, _stateProps, _swapPinOut, _swapPinIn, _capsExp2, _setState, _getState, _copyState, _winOffsets, _parsePosition3, _prefixExp, _reparent, _interruptionTracker, _shiftMarker, _getTweenCreator, ScrollTrigger2, _clampScrollAndGetDurationMultiplier, _allowNativePanning, _overflow, _nestedScroll, _inputObserver, _inputExp, _inputIsFocused, _captureInputs, _getScrollNormalizer;
var init_ScrollTrigger = __esm({
  "node_modules/gsap/ScrollTrigger.js"() {
    init_Observer();
    _startup2 = 1;
    _getTime2 = Date.now;
    _time1 = _getTime2();
    _lastScrollTime = 0;
    _enabled = 0;
    _parseClamp = function _parseClamp2(value, type, self) {
      var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
      self["_" + type + "Clamp"] = clamp4;
      return clamp4 ? value.substr(6, value.length - 7) : value;
    };
    _keepClamp = function _keepClamp2(value, clamp4) {
      return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
    };
    _rafBugFix = function _rafBugFix2() {
      return _enabled && requestAnimationFrame(_rafBugFix2);
    };
    _pointerDownHandler = function _pointerDownHandler2() {
      return _pointerIsDown = 1;
    };
    _pointerUpHandler = function _pointerUpHandler2() {
      return _pointerIsDown = 0;
    };
    _passThrough3 = function _passThrough4(v) {
      return v;
    };
    _round3 = function _round4(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _windowExists5 = function _windowExists6() {
      return typeof window !== "undefined";
    };
    _getGSAP3 = function _getGSAP4() {
      return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
    };
    _isViewport3 = function _isViewport4(e) {
      return !!~_root2.indexOf(e);
    };
    _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
      return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
    };
    _getBoundsFunc = function _getBoundsFunc2(element) {
      return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
        _winOffsets.width = _win4.innerWidth;
        _winOffsets.height = _100vh;
        return _winOffsets;
      } : function() {
        return _getBounds(element);
      });
    };
    _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
      var d = _ref.d, d2 = _ref.d2, a = _ref.a;
      return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
      } : function() {
        return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
      };
    };
    _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
      return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
      };
    };
    _maxScroll = function _maxScroll2(element, _ref2) {
      var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
      return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
    };
    _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
      for (var i = 0; i < _autoRefresh.length; i += 3) {
        (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
      }
    };
    _isString3 = function _isString4(value) {
      return typeof value === "string";
    };
    _isFunction3 = function _isFunction4(value) {
      return typeof value === "function";
    };
    _isNumber3 = function _isNumber4(value) {
      return typeof value === "number";
    };
    _isObject3 = function _isObject4(value) {
      return typeof value === "object";
    };
    _endAnimation = function _endAnimation2(animation, reversed, pause) {
      return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
    };
    _callback3 = function _callback4(self, func, extraParam) {
      if (self.enabled) {
        var result = self._ctx ? self._ctx.add(function() {
          return func(self, extraParam);
        }) : func(self, extraParam);
        result && result.totalTime && (self.callbackAnimation = result);
      }
    };
    _abs = Math.abs;
    _left = "left";
    _top = "top";
    _right = "right";
    _bottom = "bottom";
    _width = "width";
    _height = "height";
    _Right = "Right";
    _Left = "Left";
    _Top = "Top";
    _Bottom = "Bottom";
    _padding = "padding";
    _margin = "margin";
    _Width = "Width";
    _Height = "Height";
    _px = "px";
    _getComputedStyle = function _getComputedStyle2(element) {
      return _win4.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
    };
    _makePositionable = function _makePositionable2(element) {
      var position = _getComputedStyle(element).position;
      element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
    };
    _setDefaults3 = function _setDefaults4(obj, defaults2) {
      for (var p2 in defaults2) {
        p2 in obj || (obj[p2] = defaults2[p2]);
      }
      return obj;
    };
    _getBounds = function _getBounds2(element, withoutTransforms) {
      var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
      tween && tween.progress(0).kill();
      return bounds;
    };
    _getSize = function _getSize2(element, _ref3) {
      var d2 = _ref3.d2;
      return element["offset" + d2] || element["client" + d2] || 0;
    };
    _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
      var a = [], labels = timeline2.labels, duration = timeline2.duration(), p2;
      for (p2 in labels) {
        a.push(labels[p2] / duration);
      }
      return a;
    };
    _getClosestLabel = function _getClosestLabel2(animation) {
      return function(value) {
        return gsap3.utils.snap(_getLabelRatioArray(animation), value);
      };
    };
    _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
      var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
        return a2 - b;
      });
      return a ? function(value, direction, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var i;
        if (!direction) {
          return snap3(value);
        }
        if (direction > 0) {
          value -= threshold;
          for (i = 0; i < a.length; i++) {
            if (a[i] >= value) {
              return a[i];
            }
          }
          return a[i - 1];
        } else {
          i = a.length;
          value += threshold;
          while (i--) {
            if (a[i] <= value) {
              return a[i];
            }
          }
        }
        return a[0];
      } : function(value, direction, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var snapped = snap3(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
      };
    };
    _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
      return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
      };
    };
    _multiListener = function _multiListener2(func, element, types, callback) {
      return types.split(",").forEach(function(type) {
        return func(element, type, callback);
      });
    };
    _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
      return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
      });
    };
    _removeListener3 = function _removeListener4(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _wheelListener = function _wheelListener2(func, el, scrollFunc) {
      scrollFunc = scrollFunc && scrollFunc.wheelHandler;
      if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
      }
    };
    _markerDefaults = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    };
    _defaults2 = {
      toggleActions: "play",
      anticipatePin: 0
    };
    _keywords = {
      top: 0,
      left: 0,
      center: 0.5,
      bottom: 1,
      right: 1
    };
    _offsetToPx = function _offsetToPx2(value, size) {
      if (_isString3(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
          value.indexOf("%") > eqIndex && (relative *= size / 100);
          value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
      }
      return value;
    };
    _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
      var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
      var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color2 = isStart ? startColor : endColor, css = "border-color:" + color2 + ";font-size:" + fontSize + ";color:" + color2 + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
      (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
      matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
      e._isStart = isStart;
      e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
      e.style.cssText = css;
      e.innerText = name || name === 0 ? type + "-" + name : type;
      parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
      e._offset = e["offset" + direction.op.d2];
      _positionMarker(e, 0, direction, isStart);
      return e;
    };
    _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
      var vars = {
        display: "block"
      }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
      marker._isFlipped = flipped;
      vars[direction.a + "Percent"] = flipped ? -100 : 0;
      vars[direction.a] = flipped ? "1px" : 0;
      vars["border" + side + _Width] = 1;
      vars["border" + oppositeSide + _Width] = 0;
      vars[direction.p] = start + "px";
      gsap3.set(marker, vars);
    };
    _triggers = [];
    _ids = {};
    _sync = function _sync2() {
      return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
    };
    _onScroll3 = function _onScroll4() {
      if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
        _scrollers.cache++;
        if (_normalizer2) {
          _rafID || (_rafID = requestAnimationFrame(_updateAll));
        } else {
          _updateAll();
        }
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      }
    };
    _setBaseDimensions = function _setBaseDimensions2() {
      _baseScreenWidth = _win4.innerWidth;
      _baseScreenHeight = _win4.innerHeight;
    };
    _onResize = function _onResize2(force) {
      _scrollers.cache++;
      (force === true || !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25)) && _resizeDelay.restart(true);
    };
    _listeners2 = {};
    _emptyArray2 = [];
    _softRefresh = function _softRefresh2() {
      return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
    };
    _dispatch3 = function _dispatch4(type) {
      return _listeners2[type] && _listeners2[type].map(function(f) {
        return f();
      }) || _emptyArray2;
    };
    _savedStyles = [];
    _revertRecorded = function _revertRecorded2(media) {
      for (var i = 0; i < _savedStyles.length; i += 5) {
        if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
          _savedStyles[i].style.cssText = _savedStyles[i + 1];
          _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
          _savedStyles[i + 3].uncache = 1;
        }
      }
    };
    _recordScrollPositions = function _recordScrollPositions2() {
      _scrollers.cache++;
      _scrollers.forEach(function(obj) {
        return _isFunction3(obj) && (obj.rec = obj());
      });
    };
    _revertAll = function _revertAll2(kill, media) {
      var trigger;
      for (_i = 0; _i < _triggers.length; _i++) {
        trigger = _triggers[_i];
        if (trigger && (!media || trigger._ctx === media)) {
          if (kill) {
            trigger.kill(1);
          } else {
            trigger.revert(true, true);
          }
        }
      }
      _isReverted = true;
      media && _revertRecorded(media);
      media || _dispatch3("revert");
    };
    _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
      _scrollers.cache++;
      (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
        return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
      });
      if (_isString3(scrollRestoration)) {
        _scrollRestoration = scrollRestoration;
        _win4.history.scrollRestoration !== scrollRestoration && (_win4.history.scrollRestoration = scrollRestoration);
      }
    };
    _refreshID = 0;
    _queueRefreshAll = function _queueRefreshAll2() {
      if (_queueRefreshID !== _refreshID) {
        var id3 = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
          return id3 === _refreshID && _refreshAll(true);
        });
      }
    };
    _refresh100vh = function _refresh100vh2() {
      _body2.appendChild(_div100vh);
      _100vh = !_normalizer2 && _div100vh.offsetHeight || _win4.innerHeight;
      _body2.removeChild(_div100vh);
    };
    _hideAllMarkers = function _hideAllMarkers2(hide) {
      return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
        return el.style.display = hide ? "none" : "block";
      });
    };
    _refreshAll = function _refreshAll2(force, skipRevert) {
      _docEl2 = _doc4.documentElement;
      _body2 = _doc4.body;
      _root2 = [_win4, _doc4, _docEl2, _body2];
      if (_lastScrollTime && !force && !_isReverted) {
        _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      _refresh100vh();
      _refreshingAll = ScrollTrigger2.isRefreshing = true;
      _isReverted || _recordScrollPositions();
      var refreshInits = _dispatch3("refreshInit");
      _sort && ScrollTrigger2.sort();
      skipRevert || _revertAll();
      _scrollers.forEach(function(obj) {
        if (_isFunction3(obj)) {
          obj.smooth && (obj.target.style.scrollBehavior = "auto");
          obj(0);
        }
      });
      _triggers.slice(0).forEach(function(t) {
        return t.refresh();
      });
      _isReverted = false;
      _triggers.forEach(function(t) {
        if (t._subPinOffset && t.pin) {
          var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
          t.revert(true, 1);
          t.adjustPinSpacing(t.pin[prop] - original);
          t.refresh();
        }
      });
      _clampingMax = 1;
      _hideAllMarkers(true);
      _triggers.forEach(function(t) {
        var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
        (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
      });
      _hideAllMarkers(false);
      _clampingMax = 0;
      refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
      });
      _scrollers.forEach(function(obj) {
        if (_isFunction3(obj)) {
          obj.smooth && requestAnimationFrame(function() {
            return obj.target.style.scrollBehavior = "smooth";
          });
          obj.rec && obj(obj.rec);
        }
      });
      _clearScrollMemory(_scrollRestoration, 1);
      _resizeDelay.pause();
      _refreshID++;
      _refreshingAll = 2;
      _updateAll(2);
      _triggers.forEach(function(t) {
        return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
      });
      _refreshingAll = ScrollTrigger2.isRefreshing = false;
      _dispatch3("refresh");
    };
    _lastScroll = 0;
    _direction = 1;
    _updateAll = function _updateAll2(force) {
      if (force === 2 || !_refreshingAll && !_isReverted) {
        ScrollTrigger2.isUpdating = true;
        _primary && _primary.update(0);
        var l = _triggers.length, time2 = _getTime2(), recordVelocity = time2 - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _refreshingAll || (_lastScroll = scroll);
        if (recordVelocity) {
          if (_lastScrollTime && !_pointerIsDown && time2 - _lastScrollTime > 200) {
            _lastScrollTime = 0;
            _dispatch3("scrollEnd");
          }
          _time2 = _time1;
          _time1 = time2;
        }
        if (_direction < 0) {
          _i = l;
          while (_i-- > 0) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
          _direction = 1;
        } else {
          for (_i = 0; _i < l; _i++) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
        }
        ScrollTrigger2.isUpdating = false;
      }
      _rafID = 0;
    };
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
    _swapPinOut = function _swapPinOut2(pin, spacer, state) {
      _setState(state);
      var cache = pin._gsap;
      if (cache.spacerIsNative) {
        _setState(cache.spacerState);
      } else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
          parent.insertBefore(pin, spacer);
          parent.removeChild(spacer);
        }
      }
      pin._gsap.swappedIn = false;
    };
    _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
      if (!pin._gsap.swappedIn) {
        var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
        while (i--) {
          p2 = _propNamesToCopy[i];
          spacerStyle[p2] = cs[p2];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
        spacerStyle[_height] = _getSize(pin, _vertical) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
          pin.parentNode.insertBefore(spacer, pin);
          spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
      }
    };
    _capsExp2 = /([A-Z])/g;
    _setState = function _setState2(state) {
      if (state) {
        var style = state.t.style, l = state.length, i = 0, p2, value;
        (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
        for (; i < l; i += 2) {
          value = state[i + 1];
          p2 = state[i];
          if (value) {
            style[p2] = value;
          } else if (style[p2]) {
            style.removeProperty(p2.replace(_capsExp2, "-$1").toLowerCase());
          }
        }
      }
    };
    _getState = function _getState2(element) {
      var l = _stateProps.length, style = element.style, state = [], i = 0;
      for (; i < l; i++) {
        state.push(_stateProps[i], style[_stateProps[i]]);
      }
      state.t = element;
      return state;
    };
    _copyState = function _copyState2(state, override, omitOffsets) {
      var result = [], l = state.length, i = omitOffsets ? 8 : 0, p2;
      for (; i < l; i += 2) {
        p2 = state[i];
        result.push(p2, p2 in override ? override[p2] : state[i + 1]);
      }
      result.t = state.t;
      return result;
    };
    _winOffsets = {
      left: 0,
      top: 0
    };
    _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
      _isFunction3(value) && (value = value(self));
      if (_isString3(value) && value.substr(0, 3) === "max") {
        value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
      }
      var time2 = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
      containerAnimation && containerAnimation.seek(0);
      isNaN(value) || (value = +value);
      if (!_isNumber3(value)) {
        _isFunction3(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = _getTarget(trigger, self) || _body2;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
          display = element.style.display;
          element.style.display = "block";
          bounds = _getBounds(element);
          display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset;
      } else {
        containerAnimation && (value = gsap3.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
      }
      if (clampZeroProp) {
        self[clampZeroProp] = value || -1e-3;
        value < 0 && (value = 0);
      }
      if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
          scrollerBounds = _getBounds(markerScroller);
          useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
        }
      }
      if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
      }
      containerAnimation && containerAnimation.seek(time2);
      return containerAnimation ? value : Math.round(value);
    };
    _prefixExp = /(webkit|moz|length|cssText|inset)/i;
    _reparent = function _reparent2(element, parent, top, left) {
      if (element.parentNode !== parent) {
        var style = element.style, p2, cs;
        if (parent === _body2) {
          element._stOrig = style.cssText;
          cs = _getComputedStyle(element);
          for (p2 in cs) {
            if (!+p2 && !_prefixExp.test(p2) && cs[p2] && typeof style[p2] === "string" && p2 !== "0") {
              style[p2] = cs[p2];
            }
          }
          style.top = top;
          style.left = left;
        } else {
          style.cssText = element._stOrig;
        }
        gsap3.core.getCache(element).uncache = 1;
        parent.appendChild(element);
      }
    };
    _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
      var last1 = initialValue, last2 = last1;
      return function(value) {
        var current = Math.round(getValueFunc());
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
          value = current;
          onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = Math.round(value);
        return last1;
      };
    };
    _shiftMarker = function _shiftMarker2(marker, direction, value) {
      var vars = {};
      vars[direction.p] = "+=" + value;
      gsap3.set(marker, vars);
    };
    _getTweenCreator = function _getTweenCreator2(scroller, direction) {
      var getScroll2 = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll2();
        var checkForInterruption = _interruptionTracker(getScroll2, initialValue, function() {
          tween.kill();
          getTween2.tween = 0;
        });
        change2 = change1 && change2 || 0;
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.inherit = false;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
          return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
          _scrollers.cache++;
          getTween2.tween && _updateAll();
        };
        vars.onComplete = function() {
          getTween2.tween = 0;
          onComplete && onComplete.call(tween);
        };
        tween = getTween2.tween = gsap3.to(scroller, vars);
        return tween;
      };
      scroller[prop] = getScroll2;
      getScroll2.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
      };
      _addListener3(scroller, "wheel", getScroll2.wheelHandler);
      ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll2.wheelHandler);
      return getTween;
    };
    ScrollTrigger2 = /* @__PURE__ */ (function() {
      function ScrollTrigger3(vars, animation) {
        _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context3(this);
        this.init(vars, animation);
      }
      var _proto = ScrollTrigger3.prototype;
      _proto.init = function init4(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = _passThrough3;
          return;
        }
        vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
          trigger: vars
        } : vars, _defaults2);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id3 = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
          return vars.onRefreshInit(self);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
        self._startClamp = self._endClamp = false;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        _isReverted && scrollFunc.rec == null && (scrollFunc.rec = scroll1);
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
          _sort = 1;
          vars.refreshPriority === -9999 && (_primary = self);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal)
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
          scrubSmooth = _isNumber3(value) && value;
          if (!scrubSmooth) {
            scrubTween && scrubTween.progress(1).kill();
            scrubTween = 0;
          } else {
            scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: false,
              duration: scrubSmooth,
              paused: true,
              onComplete: function onComplete() {
                return onScrubComplete && onScrubComplete(self);
              }
            });
          }
        };
        if (animation) {
          animation.vars.lazy = false;
          animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
          self.animation = animation.pause();
          animation.scrollTrigger = self;
          self.scrubDuration(scrub);
          snap1 = 0;
          id3 || (id3 = animation.vars.id);
        }
        if (snap3) {
          if (!_isObject3(snap3) || snap3.push) {
            snap3 = {
              snapTo: snap3
            };
          }
          "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
            scrollBehavior: "auto"
          });
          _scrollers.forEach(function(o) {
            return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
          });
          snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
            return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
          } : gsap3.utils.snap(snap3.snapTo);
          snapDurClamp = snap3.duration || {
            min: 0.1,
            max: 2
          };
          snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
          snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
            var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
            if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
              var progress2 = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress2, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress2, 1 - progress2, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress2 + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
              endValue = snapFunc(naturalEnd, self);
              _isNumber3(endValue) || (endValue = naturalEnd);
              endScroll = Math.max(0, Math.round(start + endValue * change));
              if (scroll <= end && scroll >= start && endScroll !== scroll) {
                if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                  return;
                }
                if (snap3.inertia === false) {
                  change1 = endValue - progress2;
                }
                tweenTo(endScroll, {
                  duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                  ease: snap3.ease || "power3",
                  data: _abs(endScroll - scroll),
                  // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                  onInterrupt: function onInterrupt() {
                    return snapDelayedCall.restart(true) && _onInterrupt && _callback3(self, _onInterrupt);
                  },
                  onComplete: function onComplete() {
                    self.update();
                    lastSnap = scrollFunc();
                    if (animation && !isToggle) {
                      scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                    }
                    snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                    onSnapComplete && onSnapComplete(self);
                    _onComplete && _callback3(self, _onComplete);
                  }
                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                onStart && _callback3(self, onStart, tweenTo.tween);
              }
            } else if (self.isActive && lastSnap !== scroll) {
              snapDelayedCall.restart(true);
            }
          }).pause();
        }
        id3 && (_ids[id3] = self);
        trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : _getTarget(pin);
        _isString3(toggleClass) && (toggleClass = {
          targets: trigger,
          className: toggleClass
        });
        if (pin) {
          pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
          self.pin = pin;
          pinCache = gsap3.core.getCache(pin);
          if (!pinCache.spacer) {
            if (pinSpacer) {
              pinSpacer = _getTarget(pinSpacer);
              pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
              pinCache.spacerIsNative = !!pinSpacer;
              pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
            }
            pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
            spacer.classList.add("pin-spacer");
            id3 && spacer.classList.add("pin-spacer-" + id3);
            pinCache.pinState = pinOriginalState = _getState(pin);
          } else {
            pinOriginalState = pinCache.pinState;
          }
          vars.force3D !== false && gsap3.set(pin, {
            force3D: true
          });
          self.spacer = spacer = pinCache.spacer;
          cs = _getComputedStyle(pin);
          spacingStart = cs[pinSpacing + direction.os2];
          pinGetter = gsap3.getProperty(pin);
          pinSetter = gsap3.quickSetter(pin, direction.a, _px);
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
        }
        if (markers) {
          markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
          markerStartTrigger = _createMarker("scroller-start", id3, scroller, direction, markerVars, 0);
          markerEndTrigger = _createMarker("scroller-end", id3, scroller, direction, markerVars, 0, markerStartTrigger);
          offset = markerStartTrigger["offset" + direction.op.d2];
          var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
          markerStart = this.markerStart = _createMarker("start", id3, content, direction, markerVars, offset, 0, containerAnimation);
          markerEnd = this.markerEnd = _createMarker("end", id3, content, direction, markerVars, offset, 0, containerAnimation);
          containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px));
          if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
            _makePositionable(isViewport ? _body2 : scroller);
            gsap3.set([markerStartTrigger, markerEndTrigger], {
              force3D: true
            });
            markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px);
            markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px);
          }
        }
        if (containerAnimation) {
          var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
          containerAnimation.eventCallback("onUpdate", function() {
            self.update(0, 0, 1);
            oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
          });
        }
        self.previous = function() {
          return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function() {
          return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
          if (!temp) {
            return self.kill(true);
          }
          var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
          if (r !== self.isReverted) {
            if (r) {
              prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
              prevProgress = self.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.style.display = r ? "none" : "block";
            });
            if (r) {
              _refreshing = self;
              self.update(r);
            }
            if (pin && (!pinReparent || !self.isActive)) {
              if (r) {
                _swapPinOut(pin, spacer, pinOriginalState);
              } else {
                _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
              }
            }
            r || self.update(r);
            _refreshing = prevRefreshing;
            self.isReverted = r;
          }
        };
        self.refresh = function(soft, force, position, pinOffset) {
          if ((_refreshing || !self.enabled) && !force) {
            return;
          }
          if (pin && soft && _lastScrollTime) {
            _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self);
          _refreshing = self;
          if (tweenTo.tween && !position) {
            tweenTo.tween.kill();
            tweenTo.tween = 0;
          }
          scrubTween && scrubTween.pause();
          if (invalidateOnRefresh && animation) {
            animation.revert({
              kill: false
            }).invalidate();
            animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
              return t.vars.immediateRender && t.render(0, true, true);
            }) : animation.vars.immediateRender && animation.render(0, true, true);
          }
          self.isReverted || self.revert(true, true);
          self._subPinOffset = false;
          var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
          if (markers && _isObject3(position)) {
            markerStartOffset = gsap3.getProperty(markerStartTrigger, direction.p);
            markerEndOffset = gsap3.getProperty(markerEndTrigger, direction.p);
          }
          while (i-- > 0) {
            curTrigger = _triggers[i];
            curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
            curPin = curTrigger.pin;
            if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
              revertedPins || (revertedPins = []);
              revertedPins.unshift(curTrigger);
              curTrigger.revert(true, true);
            }
            if (curTrigger !== _triggers[i]) {
              triggerIndex--;
              i--;
            }
          }
          _isFunction3(parsedStart) && (parsedStart = parsedStart(self));
          parsedStart = _parseClamp(parsedStart, "start", self);
          start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
          _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self));
          if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
            if (~parsedEnd.indexOf(" ")) {
              parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
            } else {
              offset2 = _offsetToPx(parsedEnd.substr(2), size);
              parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap3.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
              parsedEndTrigger = trigger;
            }
          }
          parsedEnd = _parseClamp(parsedEnd, "end", self);
          end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
          offset2 = 0;
          i = triggerIndex;
          while (i--) {
            curTrigger = _triggers[i] || {};
            curPin = curTrigger.pin;
            if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
              cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
              if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
                offset2 += cs2 * (1 - curTrigger.progress);
              }
              curPin === pin && (otherPinOffset += cs2);
            }
          }
          start += offset2;
          end += offset2;
          self._startClamp && (self._startClamp += offset2);
          if (self._endClamp && !_refreshingAll) {
            self._endClamp = end || -1e-3;
            end = Math.min(end, _maxScroll(scroller, direction));
          }
          change = end - start || (start -= 0.01) && 1e-3;
          if (isFirstRefresh) {
            prevProgress = gsap3.utils.clamp(0, 1, gsap3.utils.normalize(start, end, prevScroll));
          }
          self._pinPush = otherPinOffset;
          if (markerStart && offset2) {
            cs2 = {};
            cs2[direction.a] = "+=" + offset2;
            pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
            gsap3.set([markerStart, markerEnd], cs2);
          }
          if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
            cs2 = _getComputedStyle(pin);
            isVertical = direction === _vertical;
            scroll = scrollFunc();
            pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
            if (!max && end > 1) {
              forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style;
              forcedOverflow = {
                style: forcedOverflow,
                value: forcedOverflow["overflow" + direction.a.toUpperCase()]
              };
              if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
                forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
              }
            }
            _swapPinIn(pin, spacer, cs2);
            pinState = _getState(pin);
            bounds = _getBounds(pin, true);
            oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
            if (pinSpacing) {
              spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
              spacerState.t = spacer;
              i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
              if (i) {
                spacerState.push(direction.d, i + _px);
                spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
              }
              _setState(spacerState);
              if (pinnedContainer) {
                _triggers.forEach(function(t) {
                  if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                    t._subPinOffset = true;
                  }
                });
              }
              useFixedPosition && scrollFunc(prevScroll);
            } else {
              i = _getSize(pin, direction);
              i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
            }
            if (useFixedPosition) {
              override = {
                top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                boxSizing: "border-box",
                position: "fixed"
              };
              override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
              override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
              override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
              override[_padding] = cs2[_padding];
              override[_padding + _Top] = cs2[_padding + _Top];
              override[_padding + _Right] = cs2[_padding + _Right];
              override[_padding + _Bottom] = cs2[_padding + _Bottom];
              override[_padding + _Left] = cs2[_padding + _Left];
              pinActiveState = _copyState(pinOriginalState, override, pinReparent);
              _refreshingAll && scrollFunc(0);
            }
            if (animation) {
              initted = animation._initted;
              _suppressOverwrites2(1);
              animation.render(animation.duration(), true, true);
              pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
              pinMoves = Math.abs(change - pinChange) > 1;
              useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
              animation.render(0, true, true);
              initted || animation.invalidate(true);
              animation.parent || animation.totalTime(animation.totalTime());
              _suppressOverwrites2(0);
            } else {
              pinChange = change;
            }
            forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
          } else if (trigger && scrollFunc() && !containerAnimation) {
            bounds = trigger.parentNode;
            while (bounds && bounds !== _body2) {
              if (bounds._pinOffset) {
                start -= bounds._pinOffset;
                end -= bounds._pinOffset;
              }
              bounds = bounds.parentNode;
            }
          }
          revertedPins && revertedPins.forEach(function(t) {
            return t.revert(false, true);
          });
          self.start = start;
          self.end = end;
          scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
          if (!containerAnimation && !_refreshingAll && !_isReverted) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self.scroll.rec = 0;
          }
          self.revert(false, true);
          lastRefresh = _getTime2();
          if (snapDelayedCall) {
            lastSnap = -1;
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
          if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
            animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap3.utils.normalize(start, end, 0) : prevProgress, true);
            self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
          }
          pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
          scrubTween && scrubTween.invalidate();
          if (!isNaN(markerStartOffset)) {
            markerStartOffset -= gsap3.getProperty(markerStartTrigger, direction.p);
            markerEndOffset -= gsap3.getProperty(markerEndTrigger, direction.p);
            _shiftMarker(markerStartTrigger, direction, markerStartOffset);
            _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
            _shiftMarker(markerEndTrigger, direction, markerEndOffset);
            _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
          }
          isFirstRefresh && !_refreshingAll && self.update();
          if (onRefresh && !_refreshingAll && !executingOnRefresh) {
            executingOnRefresh = true;
            onRefresh(self);
            executingOnRefresh = false;
          }
        };
        self.getVelocity = function() {
          return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
        };
        self.endAnimation = function() {
          _endAnimation(self.callbackAnimation);
          if (animation) {
            scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
          }
        };
        self.labelToScroll = function(label) {
          return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
          var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
          return (_isString3(name) ? a.filter(function(t) {
            return t.vars.preventOverlaps === name;
          }) : a).filter(function(t) {
            return self.direction > 0 ? t.end <= start : t.start >= end;
          });
        };
        self.update = function(reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) {
            return;
          }
          var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p2 = reset ? 0 : (scroll - start) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap3) {
              snap22 = snap1;
              snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
            if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
              clipped = 1e-4;
            } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
              clipped = 0.9999;
            }
          }
          if (clipped !== prevProgress2 && self.enabled) {
            isActive = self.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress2 && prevProgress2 < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress2;
            self.direction = clipped > prevProgress2 ? 1 : -1;
            self.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
              if (isToggle) {
                action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
              }
            }
            preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
              return t.endAnimation();
            }));
            if (!isToggle) {
              if (scrubTween && !_refreshing && !_startup2) {
                scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                if (scrubTween.resetTo) {
                  scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                } else {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                }
              } else if (animation) {
                animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
              }
            }
            if (pin) {
              reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
              if (!useFixedPosition) {
                pinSetter(_round3(pinStart + pinChange * clipped));
              } else if (stateChanged) {
                isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                if (pinReparent) {
                  if (!reset && (isActive || isAtMax)) {
                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                    _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                  } else {
                    _reparent(pin, spacer);
                  }
                }
                _setState(isActive || isAtMax ? pinActiveState : pinState);
                pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
              }
            }
            snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
            toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
              return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
            });
            onUpdate && !isToggle && !reset && onUpdate(self);
            if (stateChanged && !_refreshing) {
              if (isToggle) {
                if (isTakingAction) {
                  if (action === "complete") {
                    animation.pause().totalProgress(1);
                  } else if (action === "reset") {
                    animation.restart(true).pause();
                  } else if (action === "restart") {
                    animation.restart(true);
                  } else {
                    animation[action]();
                  }
                }
                onUpdate && onUpdate(self);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && _callback3(self, onToggle);
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
                if (!toggled) {
                  toggleState = clipped === 1 ? 1 : 3;
                  callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                }
              }
              if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
                _endAnimation(self.callbackAnimation);
                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
              }
            } else if (isToggle && onUpdate && !_refreshing) {
              onUpdate(self);
            }
          }
          if (markerEndSetter) {
            var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
            markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n);
          }
          caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
          if (!self.enabled) {
            self.enabled = true;
            _addListener3(scroller, "resize", _onResize);
            isViewport || _addListener3(scroller, "scroll", _onScroll3);
            onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
            if (reset !== false) {
              self.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            refresh !== false && self.refresh();
          }
        };
        self.getTween = function(snap4) {
          return snap4 && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
          if (containerAnimation) {
            var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
            newStart = st.start + _change * newStart / duration;
            newEnd = st.start + _change * newEnd / duration;
          }
          self.refresh(false, false, {
            start: _keepClamp(newStart, keepClamp && !!self._startClamp),
            end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
          }, pinOffset);
          self.update();
        };
        self.adjustPinSpacing = function(amount) {
          if (spacerState && amount) {
            var i = spacerState.indexOf(direction.d) + 1;
            spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
            spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
            _setState(spacerState);
          }
        };
        self.disable = function(reset, allowAnimation) {
          reset !== false && self.revert(true, true);
          if (self.enabled) {
            self.enabled = self.isActive = false;
            allowAnimation || scrubTween && scrubTween.pause();
            prevScroll = 0;
            pinCache && (pinCache.uncache = 1);
            onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
            if (snapDelayedCall) {
              snapDelayedCall.pause();
              tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
            }
            if (!isViewport) {
              var i = _triggers.length;
              while (i--) {
                if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                  return;
                }
              }
              _removeListener3(scroller, "resize", _onResize);
              isViewport || _removeListener3(scroller, "scroll", _onScroll3);
            }
          }
        };
        self.kill = function(revert, allowAnimation) {
          self.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id3 && delete _ids[id3];
          var i = _triggers.indexOf(self);
          i >= 0 && _triggers.splice(i, 1);
          i === _i && _direction > 0 && _i--;
          i = 0;
          _triggers.forEach(function(t) {
            return t.scroller === self.scroller && (i = 1);
          });
          i || _refreshingAll || _isReverted || (self.scroll.rec = 0);
          if (animation) {
            animation.scrollTrigger = null;
            revert && animation.revert({
              kill: false
            });
            allowAnimation || animation.kill();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.parentNode && m.parentNode.removeChild(m);
          });
          _primary === self && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i = 0;
            _triggers.forEach(function(t) {
              return t.pin === pin && i++;
            });
            i || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self);
        };
        _triggers.push(self);
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        if (animation && animation.add && !change) {
          var updateFunc = self.update;
          self.update = function() {
            self.update = updateFunc;
            _scrollers.cache++;
            start || end || self.refresh();
          };
          gsap3.delayedCall(0.01, self.update);
          change = 0.01;
          start = end = 0;
        } else {
          self.refresh();
        }
        pin && _queueRefreshAll();
      };
      ScrollTrigger3.register = function register(core) {
        if (!_coreInitted3) {
          gsap3 = core || _getGSAP3();
          _windowExists5() && window.document && ScrollTrigger3.enable();
          _coreInitted3 = _enabled;
        }
        return _coreInitted3;
      };
      ScrollTrigger3.defaults = function defaults2(config3) {
        if (config3) {
          for (var p2 in config3) {
            _defaults2[p2] = config3[p2];
          }
        }
        return _defaults2;
      };
      ScrollTrigger3.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
          return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener3(_win4, "wheel", _onScroll3);
        _removeListener3(_doc4, "scroll", _onScroll3);
        clearInterval(_syncInterval);
        _removeListener3(_doc4, "touchcancel", _passThrough3);
        _removeListener3(_body2, "touchstart", _passThrough3);
        _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener3);
        for (var i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
        }
      };
      ScrollTrigger3.enable = function enable() {
        _win4 = window;
        _doc4 = document;
        _docEl2 = _doc4.documentElement;
        _body2 = _doc4.body;
        if (gsap3) {
          _toArray = gsap3.utils.toArray;
          _clamp4 = gsap3.utils.clamp;
          _context3 = gsap3.core.context || _passThrough3;
          _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
          _scrollRestoration = _win4.history.scrollRestoration || "auto";
          _lastScroll = _win4.pageYOffset || 0;
          gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
          if (_body2) {
            _enabled = 1;
            _div100vh = document.createElement("div");
            _div100vh.style.height = "100vh";
            _div100vh.style.position = "absolute";
            _refresh100vh();
            _rafBugFix();
            Observer.register(gsap3);
            ScrollTrigger3.isTouch = Observer.isTouch;
            _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
            _ignoreMobileResize = Observer.isTouch === 1;
            _addListener3(_win4, "wheel", _onScroll3);
            _root2 = [_win4, _doc4, _docEl2, _body2];
            if (gsap3.matchMedia) {
              ScrollTrigger3.matchMedia = function(vars) {
                var mm = gsap3.matchMedia(), p2;
                for (p2 in vars) {
                  mm.add(p2, vars[p2]);
                }
                return mm;
              };
              gsap3.addEventListener("matchMediaInit", function() {
                _recordScrollPositions();
                _revertAll();
              });
              gsap3.addEventListener("matchMediaRevert", function() {
                return _revertRecorded();
              });
              gsap3.addEventListener("matchMedia", function() {
                _refreshAll(0, 1);
                _dispatch3("matchMedia");
              });
              gsap3.matchMedia().add("(orientation: portrait)", function() {
                _setBaseDimensions();
                return _setBaseDimensions;
              });
            } else {
              console.warn("Requires GSAP 3.11.0 or later");
            }
            _setBaseDimensions();
            _addListener3(_doc4, "scroll", _onScroll3);
            var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
            AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
              value: function value() {
                return this.time(-0.01, true);
              }
            });
            bodyStyle.borderTopStyle = "solid";
            bounds = _getBounds(_body2);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
            if (!bodyHasStyle) {
              _body2.setAttribute("style", "");
              _body2.removeAttribute("style");
            }
            _syncInterval = setInterval(_sync, 250);
            gsap3.delayedCall(0.5, function() {
              return _startup2 = 0;
            });
            _addListener3(_doc4, "touchcancel", _passThrough3);
            _addListener3(_body2, "touchstart", _passThrough3);
            _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
            _transformProp2 = gsap3.utils.checkPrefix("transform");
            _stateProps.push(_transformProp2);
            _coreInitted3 = _getTime2();
            _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc4, "visibilitychange", function() {
              var w = _win4.innerWidth, h = _win4.innerHeight;
              if (_doc4.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
            _iterateAutoRefresh(_addListener3);
            _triggers.forEach(function(trigger) {
              return trigger.enable(0, 1);
            });
            for (i = 0; i < _scrollers.length; i += 3) {
              _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
              _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
            }
          } else if (_doc4) {
            var onLoad = function onLoad2() {
              ScrollTrigger3.enable();
              _doc4.removeEventListener("DOMContentLoaded", onLoad2);
            };
            _doc4.addEventListener("DOMContentLoaded", onLoad);
          }
        }
      };
      ScrollTrigger3.config = function config3(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
          _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
          _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
      };
      ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
        var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
        if (~i) {
          _scrollers.splice(i, isViewport ? 6 : 2);
        }
        if (vars) {
          isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
        }
      };
      ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
          return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
      };
      ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
      };
      ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString3(element) && (element = _getTarget(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
      };
      ScrollTrigger3.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function(t) {
          return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
          var listeners = _listeners2.killAll || [];
          _listeners2 = {};
          listeners.forEach(function(f) {
            return f();
          });
        }
      };
      return ScrollTrigger3;
    })();
    ScrollTrigger2.version = "3.15.1";
    ScrollTrigger2.saveStyles = function(targets) {
      return targets ? _toArray(targets).forEach(function(target) {
        if (target && target.style) {
          var i = _savedStyles.indexOf(target);
          i >= 0 && _savedStyles.splice(i, 5);
          _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
        }
      }) : _savedStyles;
    };
    ScrollTrigger2.revert = function(soft, media) {
      return _revertAll(!soft, media);
    };
    ScrollTrigger2.create = function(vars, animation) {
      return new ScrollTrigger2(vars, animation);
    };
    ScrollTrigger2.refresh = function(safe) {
      return safe ? _onResize(true) : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
    };
    ScrollTrigger2.update = function(force) {
      return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
    };
    ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger2.maxScroll = function(element, horizontal) {
      return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getScrollFunc = function(element, horizontal) {
      return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getById = function(id3) {
      return _ids[id3];
    };
    ScrollTrigger2.getAll = function() {
      return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
      });
    };
    ScrollTrigger2.isScrolling = function() {
      return !!_lastScrollTime;
    };
    ScrollTrigger2.snapDirectional = _snapDirectional;
    ScrollTrigger2.addEventListener = function(type, callback) {
      var a = _listeners2[type] || (_listeners2[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    };
    ScrollTrigger2.removeEventListener = function(type, callback) {
      var a = _listeners2[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    };
    ScrollTrigger2.batch = function(targets, vars) {
      var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
        var elements = [], triggers = [], delay2 = gsap3.delayedCall(interval, function() {
          callback(elements, triggers);
          elements = [];
          triggers = [];
        }).pause();
        return function(self) {
          elements.length || delay2.restart(true);
          elements.push(self.trigger);
          triggers.push(self);
          batchMax <= elements.length && delay2.progress(1);
        };
      }, p2;
      for (p2 in vars) {
        varsCopy[p2] = p2.substr(0, 2) === "on" && _isFunction3(vars[p2]) && p2 !== "onRefreshInit" ? proxyCallback(p2, vars[p2]) : vars[p2];
      }
      if (_isFunction3(batchMax)) {
        batchMax = batchMax();
        _addListener3(ScrollTrigger2, "refresh", function() {
          return batchMax = vars.batchMax();
        });
      }
      _toArray(targets).forEach(function(target) {
        var config3 = {};
        for (p2 in varsCopy) {
          config3[p2] = varsCopy[p2];
        }
        config3.trigger = target;
        result.push(ScrollTrigger2.create(config3));
      });
      return result;
    };
    _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
      current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
      return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
    };
    _allowNativePanning = function _allowNativePanning2(target, direction) {
      if (direction === true) {
        target.style.removeProperty("touch-action");
      } else {
        target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
      }
      target === _docEl2 && _allowNativePanning2(_body2, direction);
    };
    _overflow = {
      auto: 1,
      scroll: 1
    };
    _nestedScroll = function _nestedScroll2(_ref5) {
      var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
      var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time2 = _getTime2(), cs;
      if (!cache._isScrollT || time2 - cache._isScrollT > 2e3) {
        while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
          node = node.parentNode;
        }
        cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time2;
      }
      if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
      }
    };
    _inputObserver = function _inputObserver2(target, type, inputs, nested) {
      return Observer.create({
        target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
          return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
          return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
        }
      });
    };
    _inputExp = /(input|label|select|textarea)/i;
    _captureInputs = function _captureInputs2(e) {
      var isInput = _inputExp.test(e.target.tagName);
      if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
      }
    };
    _getScrollNormalizer = function _getScrollNormalizer2(vars) {
      _isObject3(vars) || (vars = {});
      vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
      vars.type || (vars.type = "wheel,touch");
      vars.debounce = !!vars.debounce;
      vars.id = vars.id || "normalizer";
      var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale2 = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
        return momentum(self);
      } : function() {
        return momentum || 2.8;
      }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
        return skipTouchMove = false;
      }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
        maxY = _maxScroll(target, _vertical);
        scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
        lastRefreshID = _refreshID;
      }, removeContentOffset = function removeContentOffset2() {
        content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
      }, ignoreDrag = function ignoreDrag2() {
        if (skipTouchMove) {
          requestAnimationFrame(resumeTouchMove);
          var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
          if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
            scrollFuncY.offset = scroll - scrollFuncY.v;
            var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
            scrollFuncY.cacheID = _scrollers.cache;
            _updateAll();
          }
          return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
      }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
          scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
      };
      content && gsap3.set(content, {
        y: "+=0"
      });
      vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale2 > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
      };
      vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale2;
        scale2 = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale2 && _allowNativePanning(target, scale2 > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
      };
      vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) {
          onStopDelayedCall.restart(true);
        } else {
          _scrollers.cache++;
          var dur = resolveMomentumDuration(), currentScroll, endScroll;
          if (normalizeScrollX) {
            currentScroll = scrollFuncX();
            endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
            tween.vars.scrollX = scrollClampX(endScroll);
          }
          currentScroll = scrollFuncY();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
          tween.vars.scrollY = scrollClampY(endScroll);
          tween.invalidate().duration(dur).play(0.01);
          if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
            gsap3.to({}, {
              onUpdate: onResize,
              duration: dur
            });
          }
        }
        onRelease && onRelease(self2);
      };
      vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime2() - wheelRefresh > 1e3) {
          lastRefreshID = 0;
          wheelRefresh = _getTime2();
        }
      };
      vars.onChange = function(self2, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
        if (dy) {
          scrollFuncY.offset && removeContentOffset();
          var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
          isTouch && y !== yClamped && (startScrollY += yClamped - y);
          scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
      };
      vars.onEnable = function() {
        _allowNativePanning(target, normalizeScrollX ? false : "x");
        ScrollTrigger2.addEventListener("refresh", onResize);
        _addListener3(_win4, "resize", onResize);
        if (scrollFuncY.smooth) {
          scrollFuncY.target.style.scrollBehavior = "auto";
          scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
      };
      vars.onDisable = function() {
        _allowNativePanning(target, true);
        _removeListener3(_win4, "resize", onResize);
        ScrollTrigger2.removeEventListener("refresh", onResize);
        inputObserver.kill();
      };
      vars.lockAxis = vars.lockAxis !== false;
      self = new Observer(vars);
      self.iOS = _fixIOSBug;
      _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
      _fixIOSBug && gsap3.ticker.add(_passThrough3);
      onStopDelayedCall = self._dc;
      tween = gsap3.to(self, {
        ease: "power4",
        paused: true,
        inherit: false,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
            return tween.pause();
          })
        },
        onUpdate: _updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
      });
      return self;
    };
    ScrollTrigger2.sort = function(func) {
      if (_isFunction3(func)) {
        return _triggers.sort(func);
      }
      var scroll = _win4.pageYOffset || 0;
      ScrollTrigger2.getAll().forEach(function(t) {
        return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win4.innerHeight;
      });
      return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
      });
    };
    ScrollTrigger2.observe = function(vars) {
      return new Observer(vars);
    };
    ScrollTrigger2.normalizeScroll = function(vars) {
      if (typeof vars === "undefined") {
        return _normalizer2;
      }
      if (vars === true && _normalizer2) {
        return _normalizer2.enable();
      }
      if (vars === false) {
        _normalizer2 && _normalizer2.kill();
        _normalizer2 = vars;
        return;
      }
      var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
      _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
      _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
      return normalizer;
    };
    ScrollTrigger2.core = {
      // smaller file size way to leverage in ScrollSmoother and Observer
      _getVelocityProp,
      _inputObserver,
      _scrollers,
      _proxies,
      bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
          _lastScrollTime || _dispatch3("scrollStart");
          _lastScrollTime = _getTime2();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
          return _refreshing;
        }
      }
    };
    _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);
  }
});

// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// src/components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
import { forwardRef as forwardRef2, createElement as createElement3 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.mjs
import { forwardRef, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => {
  const tokens = /* @__PURE__ */ new Set();
  for (const cls of classes) {
    if (typeof cls !== "string") continue;
    for (const token of cls.split(/\s+/)) {
      if (token) tokens.add(token);
    }
  }
  return [...tokens].join(" ");
};

// node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  if (props == null || typeof props !== "object") {
    return false;
  }
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && (prop.startsWith("aria-") || prop === "role" || prop === "title") && props[prop] != null) {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/context.mjs
import { createContext, useContext, useMemo, createElement } from "react";
var LucideContext = createContext({});
var useLucideContext = () => useContext(LucideContext);

// node_modules/lucide-react/dist/esm/Icon.mjs
var Icon = forwardRef(
  ({
    color: color2,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest
  }, ref2) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
      color: color2 ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: mergeClasses(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest
    });
    return createElement2(
      name,
      {
        ref: ref2,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => createElement2(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component2 = forwardRef2(
    ({ className, ...props }, ref2) => createElement3(Icon, {
      ref: ref2,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component2.displayName = toPascalCase(iconData.name);
  }
  return Component2;
}

// node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var __iconData = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
__iconData.node;
var ArrowRight = createLucideIcon(__iconData);

// node_modules/lucide-react/dist/esm/icons/award.mjs
var __iconData2 = {
  name: "award",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
  ]
};
__iconData2.node;
var Award = createLucideIcon(__iconData2);

// node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var __iconData3 = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
__iconData3.node;
var ChevronDown = createLucideIcon(__iconData3);

// node_modules/lucide-react/dist/esm/icons/circle-check.mjs
var __iconData4 = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
__iconData4.node;
var CircleCheck = createLucideIcon(__iconData4);

// node_modules/lucide-react/dist/esm/icons/clock.mjs
var __iconData5 = {
  name: "clock",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
  ]
};
__iconData5.node;
var Clock = createLucideIcon(__iconData5);

// node_modules/lucide-react/dist/esm/icons/flask-conical.mjs
var __iconData6 = {
  name: "flask-conical",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
        key: "18mbvz"
      }
    ],
    ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
    ["path", { d: "M8.5 2h7", key: "csnxdl" }]
  ]
};
__iconData6.node;
var FlaskConical = createLucideIcon(__iconData6);

// node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs
var __iconData7 = {
  name: "heart-handshake",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
        key: "17lmqv"
      }
    ]
  ]
};
__iconData7.node;
var HeartHandshake = createLucideIcon(__iconData7);

// node_modules/lucide-react/dist/esm/icons/house.mjs
var __iconData8 = {
  name: "house",
  size: 24,
  node: [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1"
      }
    ]
  ],
  aliases: ["home"]
};
__iconData8.node;
var House = createLucideIcon(__iconData8);

// node_modules/lucide-react/dist/esm/icons/leaf.mjs
var __iconData9 = {
  name: "leaf",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",
        key: "1wjnjv"
      }
    ],
    ["path", { d: "M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13", key: "c1ejpn" }]
  ]
};
__iconData9.node;
var Leaf = createLucideIcon(__iconData9);

// node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var __iconData10 = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
__iconData10.node;
var LoaderCircle = createLucideIcon(__iconData10);

// node_modules/lucide-react/dist/esm/icons/mail.mjs
var __iconData11 = {
  name: "mail",
  size: 24,
  node: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
  ]
};
__iconData11.node;
var Mail = createLucideIcon(__iconData11);

// node_modules/lucide-react/dist/esm/icons/map-pin.mjs
var __iconData12 = {
  name: "map-pin",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ]
};
__iconData12.node;
var MapPin = createLucideIcon(__iconData12);

// node_modules/lucide-react/dist/esm/icons/menu.mjs
var __iconData13 = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
__iconData13.node;
var Menu = createLucideIcon(__iconData13);

// node_modules/lucide-react/dist/esm/icons/message-circle.mjs
var __iconData14 = {
  name: "message-circle",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s"
      }
    ]
  ]
};
__iconData14.node;
var MessageCircle = createLucideIcon(__iconData14);

// node_modules/lucide-react/dist/esm/icons/phone.mjs
var __iconData15 = {
  name: "phone",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v"
      }
    ]
  ]
};
__iconData15.node;
var Phone = createLucideIcon(__iconData15);

// node_modules/lucide-react/dist/esm/icons/search.mjs
var __iconData16 = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
__iconData16.node;
var Search = createLucideIcon(__iconData16);

// node_modules/lucide-react/dist/esm/icons/send.mjs
var __iconData17 = {
  name: "send",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
  ]
};
__iconData17.node;
var Send = createLucideIcon(__iconData17);

// node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs
var __iconData18 = {
  name: "shopping-bag",
  size: 24,
  node: [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm"
      }
    ]
  ]
};
__iconData18.node;
var ShoppingBag = createLucideIcon(__iconData18);

// node_modules/lucide-react/dist/esm/icons/sparkles.mjs
var __iconData19 = {
  name: "sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ],
  aliases: ["stars"]
};
__iconData19.node;
var Sparkles = createLucideIcon(__iconData19);

// node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs
var __iconData20 = {
  name: "triangle-exclamation-point",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle", "triangle-alert"]
};
__iconData20.node;
var TriangleExclamationPoint = createLucideIcon(__iconData20);

// node_modules/lucide-react/dist/esm/icons/x.mjs
var __iconData21 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
__iconData21.node;
var X = createLucideIcon(__iconData21);

// src/data/shop.ts
var SHOP = {
  name: "Gladchemistry Products",
  phoneDisplay: "073 719 0821",
  /** E.164, as WhatsApp deep links require. */
  whatsapp: "27737190821",
  email: "info@gladchemistry.com",
  address: "Palm Springs Shopping Mall, Shop 19, Springs, 1559",
  hours: "Mon\u2013Sat \xB7 08:00\u201317:00"
};
var waLink = (message) => {
  const base = `https://wa.me/${SHOP.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
var productEnquiry = (name, size, price) => `Hello Gladchemistry \u2014 I'd like to order ${name} (${size}) listed at R${price.toFixed(0)}. Is it in stock?`;
var telLink = `tel:+${SHOP.whatsapp}`;

// src/components/Navbar.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Catalogue" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
var Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "text-center px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em]",
        style: { background: "var(--lime)", color: "var(--ink)" },
        children: "Shop 19, Palm Springs Mall \xB7 Springs \xB7 Wholesale welcome"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40", style: { background: "var(--ink)" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1240px] px-5 h-[72px] flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 shrink-0 group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/gladchemistry-logo.jpg",
              alt: "Gladchemistry",
              className: "h-9 w-9 rounded-full object-cover ring-2 ring-white/20 transition-transform group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-display font-extrabold text-[19px] tracking-tight text-white",
              style: { letterSpacing: "-0.03em" },
              children: "Gladchemistry"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-7 mx-auto", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
          NavLink,
          {
            to: link.to,
            end: link.to === "/",
            className: ({ isActive }) => `text-[14px] font-extrabold transition-colors ${isActive ? "text-[var(--lime)]" : "text-white/85 hover:text-white"}`,
            children: link.label
          },
          link.to
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-auto md:ml-0", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waLink("Hello Gladchemistry \u2014 I'd like to ask about a product."),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-black transition-transform active:scale-95",
              style: { background: "var(--lime)", color: "var(--ink)" },
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "WhatsApp" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileOpen(!mobileOpen),
              className: "md:hidden grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white",
              "aria-label": "Toggle menu",
              "aria-expanded": mobileOpen,
              children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] })
      ] }),
      mobileOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-white/10 px-5 py-3", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
        NavLink,
        {
          to: link.to,
          end: link.to === "/",
          onClick: () => setMobileOpen(false),
          className: ({ isActive }) => `block px-2 py-3 text-[15px] font-extrabold border-b border-white/5 last:border-0 ${isActive ? "text-[var(--lime)]" : "text-white/85"}`,
          children: link.label
        },
        link.to
      )) })
    ] })
  ] });
};

// src/components/Footer.tsx
import { Link as Link2 } from "react-router-dom";

// src/data/brands.ts
var BRANDS = {
  gladchemistry: {
    id: "gladchemistry",
    name: "Gladchemistry",
    tagline: "Organic Personal Care",
    category: "Personal Care & Bath",
    description: "Pure, botanical-rich personal care formulated with organic extracts, mineral-rich bath fizzies, gentle foam baths, and skin-loving hygiene essentials.",
    primaryColor: "#16A34A",
    secondaryColor: "#0E7C4A",
    stageTone: "#DDF3E4",
    inkColor: "#0E7C4A",
    buttonClass: "btn btn-fern",
    tag: "Organic botanicals",
    rangePhoto: "/images/range-1.jpg",
    highlights: [
      "100% Organic Botanical Extracts",
      "Mineral Bath Fizzies & Foam Bath",
      "Gentle on Sensitive Skin"
    ]
  },
  "felis-be-glad": {
    id: "felis-be-glad",
    name: "Felis be Glad",
    tagline: "Fine Fragrances & Diffusers",
    category: "Fragrance, Home & Auto",
    description: "Inspired-by fine fragrances crafted for lasting sillage, paired with artisanal reed diffusers and luxury car perfumes that transform every space.",
    primaryColor: "#C2760B",
    secondaryColor: "#3F2A12",
    stageTone: "#FBEEDB",
    inkColor: "#9A5B08",
    buttonClass: "btn btn-ink",
    tag: "Fine fragrance",
    rangePhoto: "/images/felis-fragrances.jpg",
    highlights: [
      "Inspired-By Designer Scents",
      "Long-Lasting Reed Diffusers",
      "Signature Car Perfumes"
    ]
  },
  "bubbles-detergents": {
    id: "bubbles-detergents",
    name: "Bubbles Detergents",
    tagline: "Home Care & Car Detergents",
    category: "Home & Auto Cleaning",
    description: "Industrial-strength yet home-safe cleaning power. From thick bleach and pine gel to high-gloss car wash & wax, engineered for spotless results.",
    primaryColor: "#0284C7",
    secondaryColor: "#0C5B7A",
    stageTone: "#DCEFFB",
    inkColor: "#0C5B7A",
    buttonClass: "btn btn-ink",
    tag: "Serious cleaning",
    rangePhoto: "/images/bubbles-range-2.jpg",
    highlights: [
      "Heavy-Duty Home & Kitchen Care",
      "High-Foam Car Wash & Wax",
      "Concentrated Pine & Citrus Gels"
    ]
  }
};
var BRAND_LIST = [
  BRANDS.gladchemistry,
  BRANDS["felis-be-glad"],
  BRANDS["bubbles-detergents"]
];

// src/components/Footer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var LINKS = [
  { to: "/shop", label: "Shop all" },
  { to: "/brands", label: "The 3 brands" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact & wholesale" }
];
var Footer = () => {
  return /* @__PURE__ */ jsx2("footer", { style: { background: "var(--ink)" }, className: "text-white", children: /* @__PURE__ */ jsxs2("div", { className: "mx-auto max-w-[1240px] px-5 py-14", children: [
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs2("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx2(
            "img",
            {
              src: "/images/gladchemistry-logo.jpg",
              alt: "Gladchemistry",
              className: "h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
            }
          ),
          /* @__PURE__ */ jsx2("span", { className: "font-display font-extrabold text-[22px] tracking-tight", children: "Gladchemistry" })
        ] }),
        /* @__PURE__ */ jsx2("p", { className: "mt-4 text-[14px] leading-relaxed text-white/60 max-w-[42ch]", children: "One South African house, three brands: organic personal care, fine fragrance, and detergents that do the job properly." }),
        /* @__PURE__ */ jsx2("div", { className: "mt-5 flex flex-wrap gap-2", children: BRAND_LIST.map((b) => /* @__PURE__ */ jsxs2(
          "span",
          {
            className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-black",
            style: { background: "rgba(255,255,255,0.08)" },
            children: [
              /* @__PURE__ */ jsx2(
                "span",
                {
                  className: "h-2 w-2 rounded-full",
                  style: { background: b.primaryColor }
                }
              ),
              b.name
            ]
          },
          b.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx2("h4", { className: "text-[11px] font-black uppercase tracking-[0.16em] text-white/40 mb-4", children: "Explore" }),
        /* @__PURE__ */ jsx2("ul", { className: "space-y-2.5", children: LINKS.map((l) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(
          Link2,
          {
            to: l.to,
            className: "text-[14px] font-bold text-white/75 hover:text-[var(--lime)] transition-colors",
            children: l.label
          }
        ) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx2("h4", { className: "text-[11px] font-black uppercase tracking-[0.16em] text-white/40 mb-4", children: "Get in touch" }),
        /* @__PURE__ */ jsxs2("ul", { className: "space-y-2.5 text-[14px] font-semibold text-white/75", children: [
          /* @__PURE__ */ jsx2("li", { children: "Johannesburg, Gauteng, South Africa" }),
          /* @__PURE__ */ jsx2("li", { children: "info@gladchemistry.com" }),
          /* @__PURE__ */ jsx2("li", { className: "text-white/50", children: "Mon \u2013 Fri \xB7 08:00 \u2013 17:00" }),
          /* @__PURE__ */ jsx2("li", { className: "text-white/50", children: "Sat \xB7 09:00 \u2013 13:00" })
        ] }),
        /* @__PURE__ */ jsx2(Link2, { to: "/contact", className: "btn btn-sm btn-lime mt-4", children: "Wholesale enquiry" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/35", children: [
      /* @__PURE__ */ jsxs2("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Gladchemistry Products"
      ] }),
      /* @__PURE__ */ jsx2("p", { children: "Made in South Africa" })
    ] })
  ] }) });
};

// src/pages/Home.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState4 } from "react";
import { Link as Link4 } from "react-router-dom";

// src/data/products.ts
var p = (o) => ({
  preMessage: o.preMessage ?? "Handmade in South Africa",
  notes: o.notes,
  ...o
});
var PRODUCTS = [
  /* ---------------------------------------------------- Gladchemistry care */
  p({
    id: "gc-skin-moist-125g",
    image: "/images/products/gladchemistry-skin-moist-125g.jpg",
    name: "Skin Moist 125g",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 96,
    size: "125g Tub",
    badge: "Bestseller",
    featured: true,
    preMessage: "The original formula \xB7 For dry, itchy and flaky skin",
    notes: ["Dry skin", "Eczema", "Dermatitis", "Insect bites", "Chemical burns"],
    description: "The cream Gladness formulated for her daughter's dry, itchy skin when standard creams failed \u2014 a rich body and hand emollient that calms dry, flaky and irritated skin."
  }),
  p({
    id: "gc-skin-moist-family",
    image: "/images/products/gladchemistry-skin-moist-family.jpg",
    name: "Skin Moist Family Tub",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 150,
    size: "Large Tub",
    featured: true,
    preMessage: "Family size \xB7 Same formula, bigger tub",
    description: "The whole-family tub of Skin Moist, for anyone who goes through the 125g faster than they would like. Same emollient formula, sized for daily use."
  }),
  p({
    id: "gc-raw-shea-butter",
    image: "/images/products/gladchemistry-raw-shea-butter.jpg",
    name: "Raw Shea Butter 100g",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 100,
    size: "100g",
    preMessage: "Unrefined \xB7 Imported from Ghana",
    notes: ["Moisturises skin & scalp", "Reduces eczema signs", "Improves hair growth", "Relieves dry skin"],
    description: "Raw, unrefined shea butter imported from Ghana. Nothing added, nothing refined out \u2014 just the butter, for skin, scalp and hair."
  }),
  p({
    id: "gc-sheacoco-hair-care",
    image: "/images/products/gladchemistry-sheacoco-hair-care.jpg",
    name: "SheaCoco Hair Care 125g",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 120,
    size: "125g Tub",
    preMessage: "Shea + coconut \xB7 For receding hairlines",
    description: "A shea and coconut hair cream aimed at receding hairlines and slow growth. Massage into the scalp and leave in."
  }),
  p({
    id: "gc-hair-food",
    image: "/images/products/gladchemistry-hair-food.jpg",
    name: "Hair Food",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 45,
    size: "125g Tub",
    preMessage: "Petroleum jelly base \xB7 Softens and seals",
    description: "A classic hair food with a petroleum jelly base and a light scent, for sealing in moisture and softening dry hair and scalp."
  }),
  p({
    id: "gc-hair-oil",
    image: "/images/products/gladchemistry-hair-oil.jpg",
    name: "Hair Oil",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 55,
    size: "100ml",
    preMessage: "Organic blend \xB7 For beard growth and scalp health",
    description: "An organic hair oil for beard growth, scalp moisturising and flake control. Light enough to use daily."
  }),
  p({
    id: "gc-castor-oil-50",
    image: "/images/products/gladchemistry-castor-oil-50ml.jpg",
    name: "Castor Oil 50ml",
    brand: "gladchemistry",
    category: "Hair & Skin Oils",
    price: 33,
    size: "50ml",
    preMessage: "Cold pressed \xB7 Hexane free",
    description: "Pure cold-pressed, hexane-free castor oil in a handy 50ml. Thick and rich \u2014 a little goes a long way on hair, brows and lashes."
  }),
  p({
    id: "gc-castor-oil-500",
    image: "/images/products/gladchemistry-castor-oil-500ml.jpg",
    name: "Castor Oil 500ml",
    brand: "gladchemistry",
    category: "Hair & Skin Oils",
    price: 90,
    size: "500ml",
    preMessage: "Cold pressed \xB7 Hexane free",
    description: "The bulk bottle of the same cold-pressed, hexane-free castor oil. Better value if you use it regularly."
  }),
  p({
    id: "gc-skin-moist-charcoal",
    name: "Skin Moist & Charcoal Bar",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 125,
    size: "Tub + 100g Bar",
    preMessage: "Combo \xB7 Acne and dark spots",
    description: "The Skin Moist tub paired with a charcoal soap bar, put together for acne-prone skin and dark spots."
  }),
  p({
    id: "gc-foam-bath-15l",
    name: "1.5L Foam Bath & 100g Bar",
    brand: "gladchemistry",
    category: "Bath & Body",
    price: 110,
    size: "1.5L + 100g",
    preMessage: "Combo \xB7 Any foam bath, any bar",
    description: "Any of the 1.5L foam baths paired with a 100g soap bar. Pick your fragrance when you order."
  }),
  p({
    id: "gc-bubble-bath-combo",
    name: "Bubble Bath & Skin Moist Combo",
    brand: "gladchemistry",
    category: "Bath & Body",
    price: 220,
    size: "5L + 125g",
    preMessage: "Combo \xB7 The full bath routine",
    description: "A 5L bubble bath with a 125g Skin Moist \u2014 the whole bath routine in one order."
  }),
  p({
    id: "gc-deobloks",
    name: "Deobloks 500g",
    brand: "gladchemistry",
    category: "Home Care",
    price: 55,
    size: "500g Tub",
    preMessage: "Refreshing deodoriser blocks",
    description: "Deodoriser blocks for toilets, drains and bins. Drop one in and it keeps the space fresh."
  }),
  p({
    id: "gc-bicarb",
    name: "Pure Bicarbonate of Soda",
    brand: "gladchemistry",
    category: "Personal Care",
    price: 55,
    size: "500g",
    preMessage: "Pharmaceutical grade \xB7 Multipurpose",
    description: "Pharmaceutical-grade bicarbonate of soda for exfoliation, bath soaks and general eco-friendly cleaning."
  }),
  p({
    id: "gc-personal-care-startup",
    name: "Personal Care Start Up",
    brand: "gladchemistry",
    category: "Starter Packs",
    price: 2600,
    size: "10 + 12 Pack",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 10 of each, 12 lines",
    description: "A reseller starter pack: 10 of each of 12 skin care lines, so you can open a shelf without ordering everything individually."
  }),
  /* ------------------------------------------------- Felis be Glad scent */
  p({
    id: "felis-reed-diffuser",
    image: "/images/products/felis-reed-diffuser-real.jpg",
    name: "Signature Amber Reed Diffuser",
    brand: "felis-be-glad",
    category: "Home Diffusers",
    price: 240,
    size: "100ml + Black Reeds",
    badge: "Luxury Home",
    featured: true,
    preMessage: "12+ weeks of scent",
    description: "Hand-poured amber home fragrance oil in a square glass flacon with matte black rattan reeds. Twelve weeks or more of continuous scent."
  }),
  p({
    id: "felis-scandal-ladies",
    image: "/images/products/felis-inspired-scandal-ladies.jpg",
    name: "Inspired by Scandal Ladies",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 195,
    size: "30ml Eau de Parfum",
    featured: true,
    badge: "Top Pick",
    preMessage: "Honey \xB7 Gardenia \xB7 Blood orange",
    description: "A captivating honey, gardenia and blood orange accord in a sculpted teal glass flacon."
  }),
  p({
    id: "felis-hugo-men",
    image: "/images/products/felis-inspired-hugo-men.jpg",
    name: "Inspired by Hugo Men",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 260,
    size: "100ml Eau de Parfum",
    featured: true,
    preMessage: "Green apple \xB7 Sage \xB7 Cedarwood",
    description: "Crisp green apple, aromatic sage and cedarwood, built for all-day confidence."
  }),
  p({
    id: "felis-diesel-men",
    image: "/images/products/felis-inspired-diesel-men.jpg",
    name: "Inspired by Diesel Men",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 195,
    size: "30ml Eau de Parfum",
    preMessage: "Grapefruit \xB7 Lavender \xB7 Amber",
    description: "A bold spicy-woody fragrance with grapefruit and lavender over warm amber."
  }),
  p({
    id: "felis-ted-lapidus-car",
    image: "/images/products/felis-inspired-ted-lapidus-car.jpg",
    name: "Inspired by Ted Lapidus Car & Roll-On",
    brand: "felis-be-glad",
    category: "Car Perfumes",
    price: 85,
    size: "15ml",
    preMessage: "Auto & travel",
    description: "A concentrated fragrance oil for the car or a roll-on for your bag. Long-lasting cabin freshness without the aerosol."
  }),
  p({
    id: "felis-fragrance-edp-20ml",
    image: "/images/products/felis-fragrances-lineup-real.jpg",
    name: "Fine Fragrance EDP 20ml",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 80,
    size: "20ml Eau de Parfum",
    preMessage: "Your choice of 20 generics",
    description: "Generics of your choice of fine fragrance, in a 20ml travel size. Pick the scent you want when you order."
  }),
  p({
    id: "felis-fragrances-startup",
    image: "/images/products/felis-fragrances-lineup-real.jpg",
    name: "Fine Fragrances Business Start Up",
    brand: "felis-be-glad",
    category: "Starter Packs",
    price: 1250,
    size: "20 Piece Collection",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 20-piece set",
    description: "A 20-piece collection of the fine fragrance line for resellers \u2014 enough to build a display without ordering case by case."
  }),
  /* ------------------------------------------------------- Bubbles clean */
  p({
    id: "bubbles-dishwashing-liquid",
    image: "/images/products/bubbles-dishwashing-liquid.png",
    name: "Hygiene Dishwashing Liquid",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 36,
    size: "750ml",
    featured: true,
    preMessage: "High foam \xB7 Long lasting",
    description: "Ultra-concentrated, grease-cutting dishwashing liquid that holds a thick foam and leaves a fresh lemon fragrance."
  }),
  p({
    id: "bubbles-dishwashing-2l",
    name: "Dishwashing Liquid 2L",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 82,
    size: "2L",
    preMessage: "High foam \xB7 Bulk size",
    description: "The same thick, strong dishwashing liquid in a 2L tub for kitchens that go through it fast."
  }),
  p({
    id: "bubbles-thick-bleach",
    image: "/images/products/bubbles-thick-bleach.png",
    name: "Bubbles Thick Bleach",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 42,
    size: "750ml",
    preMessage: "Clings to the surface",
    description: "A clinging thick bleach formula that kills germs and stains, whitens surfaces and handles tough toilet and drain jobs."
  }),
  p({
    id: "bubbles-pine-gel",
    image: "/images/products/bubbles-pine-gel.png",
    name: "Bubbles Pine Gel",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 65,
    size: "1kg Tub",
    preMessage: "Heavy duty \xB7 Pine fresh",
    description: "A heavy-duty pine disinfectant gel that cleans, deodorises and leaves floors shining."
  }),
  p({
    id: "bubbles-citrus-gel",
    image: "/images/products/bubbles-citrus-gel.jpg",
    name: "Bubbles Citrus Gel",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 65,
    size: "1kg Tub",
    preMessage: "Zesty citrus \xB7 500g from R52",
    description: "A zesty citrus cleaning gel for kitchens, bathrooms and high-traffic surfaces. Also available in 500g."
  }),
  p({
    id: "bubbles-citrus-pine-gel",
    image: "/images/products/bubbles-pine-gel-dishwashing.jpg",
    name: "Citrus and Pine Gel Combo",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 52,
    size: "500g + 1kg",
    preMessage: "Both gels, one price",
    description: "The citrus gel in 500g together with the pine gel, for anyone who wants both on the shelf."
  }),
  p({
    id: "bubbles-all-purpose-cleaner",
    image: "/images/products/bubbles-all-purpose-cleaner.png",
    name: "All-Purpose Cleaner",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 44,
    size: "750ml",
    preMessage: "Fresh lemon \xB7 Cuts grease",
    description: "A versatile lemon-fresh surface cleaner that cuts through grease and grime on most washable surfaces."
  }),
  p({
    id: "bubbles-multipurpose-750",
    image: "/images/products/bubbles-multipurpose-750ml.png",
    name: "Multipurpose Cleaner 750ml",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 97,
    size: "750ml",
    preMessage: "Heavy duty formulation",
    description: "A stronger multipurpose cleaning liquid for floors, tiles and general household use. Also available in 5L."
  }),
  p({
    id: "bubbles-black-dip",
    image: "/images/products/bubbles-black-dip-lineup-real.jpg",
    name: "Household Hygiene Black Dip",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 75,
    size: "1L",
    preMessage: "Drains \xB7 yards \xB7 pet areas",
    description: "An industrial-strength disinfectant fluid for drains, outdoor areas and deep sanitation. Not for use on skin."
  }),
  p({
    id: "bubbles-floor-polish-lg",
    name: "Liquid Polymer Floor Polish",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 136,
    size: "5L",
    preMessage: "Instant shine \xB7 Polymer",
    description: "A polymer floor shine polish for instant gloss on hard floors. The larger 5L size."
  }),
  p({
    id: "bubbles-floor-polish-1l",
    name: "Liquid Polymer Floor Polish 1L",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 66,
    size: "1L",
    preMessage: "Instant shine \xB7 Polymer",
    description: "The same polymer floor polish in a 1L for smaller spaces."
  }),
  p({
    id: "bubbles-powder-soap",
    name: "Powder Soap",
    brand: "bubbles-detergents",
    category: "Laundry",
    price: 140,
    size: "5kg \xB7 20kg R380",
    preMessage: "Bulk laundry soap \xB7 Two sizes",
    description: "Bulk washing powder soap, 5kg for R140 or 20kg for R380."
  }),
  p({
    id: "bubbles-tile-cleaner-5l",
    name: "Tile Cleaner 5L",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 155,
    size: "5L",
    preMessage: "For all tile types",
    description: "A tile cleaner for glazed and ceramic tiles, bulk sized for larger floors."
  }),
  p({
    id: "bubbles-car-wash-wax",
    image: "/images/products/bubbles-car-wash-wax-real.jpg",
    name: "Car Wash & Wax Shampoo",
    brand: "bubbles-detergents",
    category: "Car Care",
    price: 155,
    size: "5L Jerry Can",
    featured: true,
    preMessage: "High foam \xB7 Streak free",
    description: "A high-foam, pH-balanced car shampoo with carnauba wax for a streak-free, showroom shine."
  }),
  p({
    id: "bubbles-car-interior",
    image: "/images/products/bubbles-car-tyre-real.jpg",
    name: "Car Tyre, Leather & Dash Cleaner",
    brand: "bubbles-detergents",
    category: "Car Care",
    price: 50,
    size: "1L",
    preMessage: "Tyre \xB7 leather \xB7 plastic",
    description: "For leather polishing, plastic polishing and tyre dressing in one bottle."
  }),
  p({
    id: "bubbles-detergents-startup",
    image: "/images/products/bubbles-detergents-lineup-real.jpg",
    name: "Detergents Business Start Up",
    brand: "bubbles-detergents",
    category: "Starter Packs",
    price: 1850,
    size: "10 of Each \xB7 750ml",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 10 of each line",
    description: "A reseller starter pack: 10 of each of the 750ml detergents, enough stock to open a shelf."
  }),
  p({
    id: "bubbles-combo-95",
    image: "/images/products/bubbles-combo-r95.jpg",
    name: "Combo R95",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 95,
    size: "3 \xD7 750ml",
    preMessage: "Dish liquid \xB7 thick bleach \xB7 multipurpose",
    description: "750ml dish liquid, 750ml thick bleach and a multipurpose cleaner, bundled."
  }),
  p({
    id: "bubbles-combo-137",
    image: "/images/products/bubbles-combo-r137.jpg",
    name: "Combo R137",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 137,
    size: "4 Piece",
    preMessage: "Dish liquid \xB7 pine gel \xB7 bleach \xB7 all-purpose",
    description: "750ml dishwashing liquid, 750ml thick bleach, a 750ml pine gel and a 750ml all-purpose cleaner, bundled at R137."
  }),
  p({
    id: "bubbles-pine-gel-dishwashing",
    name: "Pine Gel & Dishwashing Liquid",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 83,
    size: "750ml + 750ml",
    preMessage: "Two everyday essentials",
    description: "A 750ml dishwashing liquid with a 750ml pine gel, the two things most kitchens run out of first."
  })
];
var FEATURED = PRODUCTS.filter((x) => x.featured);
var PRODUCT_COUNT = PRODUCTS.length;
var BRAND_COUNTS = PRODUCTS.reduce((acc, x) => {
  acc[x.brand] = (acc[x.brand] ?? 0) + 1;
  return acc;
}, {});

// src/components/CatalogueList.tsx
import { useState as useState2 } from "react";

// src/lib/format.ts
var rand = (n) => `R${Math.round(n).toLocaleString("en-ZA").replace(/[,\s]/g, " ").trim()}`;

// src/components/CatalogueList.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Line = ({ product, forceOpen }) => {
  return /* @__PURE__ */ jsx3("div", { className: "grid-anim", children: /* @__PURE__ */ jsxs3(
    "details",
    {
      className: "group border-b border-black/10 last:border-b-0",
      open: forceOpen || void 0,
      children: [
        /* @__PURE__ */ jsxs3("summary", { className: "flex cursor-pointer list-none items-center gap-4 py-3.5 pl-1 pr-2 hover:bg-black/[0.03]", children: [
          /* @__PURE__ */ jsx3(
            ChevronDown,
            {
              className: "h-4 w-4 shrink-0 transition-transform group-open:rotate-180",
              style: { color: "var(--ink-soft)" },
              "aria-hidden": true
            }
          ),
          product.image ? /* @__PURE__ */ jsx3(
            "img",
            {
              src: product.image,
              alt: product.fullName ?? product.name,
              width: 44,
              height: 44,
              loading: "lazy",
              decoding: "async",
              className: "h-11 w-11 shrink-0 rounded-xl border border-black/10 bg-white object-contain"
            }
          ) : (
            /* No photograph exists that shows this product's real label, so it
               gets a branded plate rather than a grey void. A dashed outline
               would read as a broken image; this reads as a decision. */
            /* @__PURE__ */ jsx3(
              "span",
              {
                "aria-hidden": true,
                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-[15px] font-extrabold",
                style: { background: "rgba(14,124,74,0.10)", color: "var(--fern)" },
                children: product.name.charAt(0)
              }
            )
          ),
          /* @__PURE__ */ jsxs3(
            "span",
            {
              className: "min-w-0 flex-1 font-display text-[17px] font-extrabold leading-tight",
              style: { color: "var(--ink)" },
              children: [
                product.name,
                product.badge && /* @__PURE__ */ jsx3(
                  "span",
                  {
                    className: "ml-2 align-middle text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full",
                    style: { background: "var(--ink)", color: "var(--paper)" },
                    children: product.badge
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx3(
            "span",
            {
              className: "hidden shrink-0 text-[13px] font-semibold sm:block",
              style: { color: "var(--ink-soft)", opacity: 0.75 },
              children: product.size
            }
          ),
          /* @__PURE__ */ jsx3(
            "span",
            {
              className: "shrink-0 font-display text-[17px] font-extrabold tabular-nums",
              style: { color: "var(--ink)" },
              children: rand(product.price)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "pb-5 pl-9 pr-2", children: [
          product.image && /* @__PURE__ */ jsx3(
            "img",
            {
              src: product.image,
              alt: product.fullName ?? product.name,
              loading: "lazy",
              decoding: "async",
              className: "mt-1 mb-3 h-56 w-auto max-w-full rounded-xl border border-black/10 bg-white object-contain p-2"
            }
          ),
          /* @__PURE__ */ jsxs3("p", { className: "text-[13px] font-bold uppercase tracking-[0.1em] sm:hidden", style: { color: "var(--ink-soft)" }, children: [
            product.category,
            " \xB7 ",
            product.size
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-1 max-w-[62ch] text-[14px] leading-relaxed", style: { color: "var(--ink-soft)" }, children: product.description }),
          product.notes && product.notes.length > 0 && /* @__PURE__ */ jsx3("ul", { className: "mt-2 flex flex-wrap gap-1.5", children: product.notes.map((n) => /* @__PURE__ */ jsx3(
            "li",
            {
              className: "rounded-full px-2.5 py-1 text-[11px] font-bold",
              style: { background: "rgba(0,0,0,0.05)", color: "var(--ink-soft)" },
              children: n
            },
            n
          )) }),
          /* @__PURE__ */ jsxs3(
            "a",
            {
              href: waLink(productEnquiry(product.name, product.size, product.price)),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "enquire mt-3",
              children: [
                /* @__PURE__ */ jsx3(MessageCircle, { className: "h-3.5 w-3.5" }),
                "Enquire"
              ]
            }
          )
        ] })
      ]
    }
  ) });
};
var CatalogueList = ({ products }) => {
  const groups = [];
  for (const product of products) {
    const last = groups[groups.length - 1];
    if (last && last.category === product.category) last.items.push(product);
    else {
      const found = groups.find((g) => g.category === product.category);
      if (found) found.items.push(product);
      else groups.push({ category: product.category, items: [product] });
    }
  }
  const [openAll, setOpenAll] = useState2(false);
  const withPhoto = products.filter((p2) => p2.image).length;
  return /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsxs3("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs3("p", { className: "text-[12px] font-bold", style: { color: "var(--ink-soft)", opacity: 0.7 }, children: [
        "Tap a name to open it \xB7 ",
        withPhoto,
        " of ",
        products.length,
        " with a photo"
      ] }),
      /* @__PURE__ */ jsx3(
        "button",
        {
          onClick: () => setOpenAll((v) => !v),
          className: "text-[12px] font-black uppercase tracking-[0.1em] underline underline-offset-4",
          style: { color: "var(--ink)" },
          children: openAll ? "Collapse all" : "Open all"
        }
      )
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "space-y-8", children: groups.map((group) => /* @__PURE__ */ jsxs3("section", { children: [
      /* @__PURE__ */ jsxs3(
        "h2",
        {
          className: "eyebrow mb-1 pb-2 border-b-2",
          style: { color: "var(--ink)", borderColor: "var(--lime)" },
          children: [
            group.category,
            /* @__PURE__ */ jsx3("span", { className: "ml-2 opacity-40", children: group.items.length })
          ]
        }
      ),
      /* @__PURE__ */ jsx3("div", { children: group.items.map((product) => /* @__PURE__ */ jsx3(Line, { product, forceOpen: openAll }, `${product.id}-${openAll}`)) }, `${group.category}-${openAll}`)
    ] }, group.category)) })
  ] });
};

// src/components/Hero.tsx
import { useEffect, useRef, useState as useState3 } from "react";
import { Link as Link3 } from "react-router-dom";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Hero = () => {
  const [brandId, setBrandId] = useState3("gladchemistry");
  const [paused, setPaused] = useState3(false);
  const heroRef = useRef(null);
  const artRef = useRef(null);
  const pointerRef = useRef(null);
  const brand = BRANDS[brandId];
  const count = PRODUCTS.filter((p2) => p2.brand === brandId).length;
  const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    let ctx;
    (async () => {
      const [{ default: gsap4 }, { ScrollTrigger: ScrollTrigger3 }] = await Promise.all([
        Promise.resolve().then(() => (init_gsap(), gsap_exports)),
        Promise.resolve().then(() => (init_ScrollTrigger(), ScrollTrigger_exports))
      ]);
      gsap4.registerPlugin(ScrollTrigger3);
      if (reduceMotion()) return;
      ctx = gsap4.context(() => {
        gsap4.from(".hero-word", {
          yPercent: 110,
          opacity: 0,
          stagger: 0.09,
          duration: 0.85,
          ease: "power4.out",
          delay: 0.1
        });
        gsap4.from(".hero-rise", {
          y: 26,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.45
        });
        gsap4.from(".hero-art", {
          opacity: 0,
          scale: 0.965,
          y: 24,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        });
        gsap4.to(".hero-art", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            scrub: true,
            start: "top top",
            end: "bottom top"
          }
        });
      }, heroRef);
    })();
    return () => ctx?.revert();
  }, []);
  useEffect(() => {
    if (reduceMotion()) return;
    let gsapRef;
    Promise.resolve().then(() => (init_gsap(), gsap_exports)).then(({ default: g }) => gsapRef = g);
    const onMove = (e) => {
      if (e.pointerType !== "mouse" || paused || !gsapRef || !pointerRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsapRef.to(pointerRef.current, {
        x: -x * 14,
        y: -y * 10,
        duration: 1.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [paused]);
  useEffect(() => {
    let tween;
    let killed = false;
    (async () => {
      const { default: gsap4 } = await Promise.resolve().then(() => (init_gsap(), gsap_exports));
      if (reduceMotion() || killed || !artRef.current) return;
      tween = gsap4.to(artRef.current, {
        y: "+=12",
        duration: 5.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      if (paused) tween.pause();
    })();
    return () => {
      killed = true;
      tween?.kill();
    };
  }, [paused, brandId]);
  return /* @__PURE__ */ jsxs4(
    "section",
    {
      ref: heroRef,
      id: "hero",
      className: "relative overflow-hidden",
      style: {
        background: "var(--cream)",
        paddingTop: "clamp(88px, 12vh, 132px)",
        paddingBottom: "clamp(56px, 8vh, 96px)"
      },
      children: [
        /* @__PURE__ */ jsx4(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none transition-colors duration-700",
            style: {
              background: `radial-gradient(120% 90% at 78% 8%, ${brand.stageTone} 0%, rgba(251,247,240,0) 62%)`
            }
          }
        ),
        /* @__PURE__ */ jsx4("div", { className: "relative z-10 mx-auto max-w-[1320px] px-[5vw]", children: /* @__PURE__ */ jsxs4("div", { className: "grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] items-center gap-y-12 lg:gap-x-14", children: [
          /* @__PURE__ */ jsxs4("div", { className: "max-w-[620px]", children: [
            /* @__PURE__ */ jsxs4("div", { className: "hero-rise flex items-center gap-3", children: [
              /* @__PURE__ */ jsx4(
                "span",
                {
                  className: "inline-block rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] transition-colors duration-500",
                  style: { background: brand.stageTone, color: brand.inkColor },
                  children: brand.name
                }
              ),
              /* @__PURE__ */ jsx4("span", { className: "text-[11px] font-black uppercase tracking-[0.14em] text-slate-400", children: "Est. 2016 \xB7 Springs" })
            ] }),
            /* @__PURE__ */ jsx4(
              "h1",
              {
                className: "font-display mt-5",
                style: {
                  color: "var(--ink)",
                  /* Sized so the longest line ("properly made.") still fits the
                     copy column on a 1440 desktop — never clipped by the mask. */
                  fontSize: "clamp(38px, 5.5vw, 76px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em"
                },
                children: [
                  [{ t: "Pure" }, { t: "care," }],
                  [{ t: "properly" }, { t: "made.", accent: true }]
                ].map((line, li) => /* @__PURE__ */ jsx4("span", { className: "block overflow-hidden pb-[0.06em]", children: line.map((w, wi) => /* @__PURE__ */ jsx4(
                  "span",
                  {
                    className: "hero-word inline-block",
                    style: {
                      color: w.accent ? brand.primaryColor : "var(--ink)",
                      marginRight: "0.22em"
                    },
                    children: w.t
                  },
                  wi
                )) }, li))
              }
            ),
            /* @__PURE__ */ jsxs4(
              "p",
              {
                className: "hero-rise mt-6 max-w-[46ch] text-[16px] leading-relaxed",
                style: { color: "var(--ink-soft)" },
                children: [
                  /* @__PURE__ */ jsx4("strong", { style: { color: "var(--ink)" }, children: brand.tagline }),
                  " \u2014 ",
                  brand.description
                ]
              }
            ),
            /* @__PURE__ */ jsx4("div", { className: "hero-rise mt-7 flex flex-wrap gap-2", role: "tablist", "aria-label": "Choose a house", children: BRAND_LIST.map((b) => {
              const on = b.id === brandId;
              return /* @__PURE__ */ jsx4(
                "button",
                {
                  role: "tab",
                  "aria-selected": on,
                  onClick: () => setBrandId(b.id),
                  className: "rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300",
                  style: {
                    background: on ? b.primaryColor : "#fff",
                    color: on ? "#fff" : "var(--ink-soft)",
                    border: `1.5px solid ${on ? b.primaryColor : "rgba(16,35,28,.14)"}`
                  },
                  children: b.name
                },
                b.id
              );
            }) }),
            /* @__PURE__ */ jsxs4("div", { className: "hero-rise mt-7 flex flex-wrap items-center gap-2.5", children: [
              /* @__PURE__ */ jsx4(Link3, { to: `/shop?brand=${brand.id}`, className: "btn btn-ink", children: "View the range" }),
              /* @__PURE__ */ jsx4(Link3, { to: "/brands", className: "btn btn-ghost", children: "Meet the houses" })
            ] }),
            /* @__PURE__ */ jsxs4("p", { className: "hero-rise mt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400", children: [
              count,
              " products \xB7 ",
              PRODUCTS.length,
              " across three houses"
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "relative", children: [
            /* @__PURE__ */ jsx4(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-x-6 bottom-[-18px] h-10 rounded-[50%]",
                style: { background: "rgba(16,35,28,.16)", filter: "blur(26px)" }
              }
            ),
            /* @__PURE__ */ jsx4("div", { ref: pointerRef, className: "relative", children: /* @__PURE__ */ jsxs4(
              "div",
              {
                ref: artRef,
                className: "hero-art relative overflow-hidden",
                style: {
                  borderRadius: 28,
                  aspectRatio: "16 / 9",
                  background: brand.stageTone,
                  boxShadow: "0 34px 70px -34px rgba(16,35,28,.42)",
                  border: "1px solid rgba(16,35,28,.07)"
                },
                children: [
                  /* @__PURE__ */ jsx4(
                    "div",
                    {
                      className: "w-full h-full grid place-items-center",
                      style: { background: brand.stageTone },
                      children: /* @__PURE__ */ jsxs4("div", { className: "text-center px-6", children: [
                        /* @__PURE__ */ jsx4(
                          "div",
                          {
                            className: "mx-auto mb-4 grid place-items-center rounded-full",
                            style: {
                              width: 78,
                              height: 78,
                              background: brand.primaryColor,
                              color: brand.inkColor
                            },
                            children: /* @__PURE__ */ jsx4("span", { className: "font-display text-[26px] font-extrabold", children: brand.name.charAt(0) })
                          }
                        ),
                        /* @__PURE__ */ jsx4(
                          "p",
                          {
                            className: "font-display text-[22px] font-extrabold leading-tight",
                            style: { color: brand.inkColor },
                            children: brand.name
                          }
                        ),
                        /* @__PURE__ */ jsx4(
                          "p",
                          {
                            className: "mt-1 text-[12px] font-bold uppercase tracking-[0.14em]",
                            style: { color: brand.inkColor, opacity: 0.65 },
                            children: brand.tagline
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs4(
                    "div",
                    {
                      className: "absolute left-0 right-0 bottom-0 flex items-center justify-between px-4 py-3",
                      style: {
                        background: "rgba(12,26,20,.55)",
                        backdropFilter: "blur(6px)"
                      },
                      children: [
                        /* @__PURE__ */ jsx4("span", { className: "text-[11px] font-black uppercase tracking-[0.14em] text-white/90", children: brand.highlights[0] }),
                        /* @__PURE__ */ jsx4("span", { className: "text-[11px] font-black uppercase tracking-[0.14em]", style: { color: "var(--lime)" }, children: "Made in SA" })
                      ]
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsx4(
              "button",
              {
                onClick: () => setPaused((p2) => !p2),
                "aria-pressed": paused,
                className: "absolute -bottom-3 right-3 z-20 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] transition-colors",
                style: { background: "#fff", color: "var(--ink)", border: "1px solid rgba(16,35,28,.12)" },
                children: paused ? "Resume motion" : "Pause motion"
              }
            )
          ] })
        ] }) })
      ]
    }
  );
};

// src/pages/Home.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var MARQUEE_TEXT = [
  "Organic botanicals",
  "Fine fragrance",
  "Serious cleaning",
  "Made in South Africa",
  "Three houses, one standard"
];
var Marquee = ({ text, tone = "var(--lime)" }) => /* @__PURE__ */ jsx5(
  "div",
  {
    "aria-hidden": true,
    className: "overflow-hidden whitespace-nowrap relative",
    style: {
      background: tone,
      color: "var(--ink)",
      transform: "rotate(-1.6deg)",
      margin: "-14px -10px 0",
      padding: "14px 0",
      zIndex: 5
    },
    children: /* @__PURE__ */ jsx5("div", { className: "marquee", style: { display: "inline-block", animation: "mq 24s linear infinite" }, children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxs5(
      "span",
      {
        className: "font-display font-extrabold text-[26px] sm:text-[30px] px-5",
        style: { display: "inline-block" },
        children: [
          text[i % text.length],
          " \u2605"
        ]
      },
      i
    )) })
  }
);
var useReveal = () => {
  const ref2 = useRef2(null);
  useEffect2(() => {
    let ctx;
    let killed = false;
    (async () => {
      const { default: gsap4 } = await Promise.resolve().then(() => (init_gsap(), gsap_exports));
      const { ScrollTrigger: ScrollTrigger3 } = await Promise.resolve().then(() => (init_ScrollTrigger(), ScrollTrigger_exports));
      gsap4.registerPlugin(ScrollTrigger3);
      if (killed || !ref2.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      ctx = gsap4.context(() => {
        const items = ref2.current.querySelectorAll(".reveal");
        items.forEach((el) => {
          gsap4.from(el, {
            y: 46,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true }
          });
        });
      }, ref2);
    })();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);
  return ref2;
};
var Home = () => {
  const [activeBrand, setActiveBrand] = useState4("all");
  const gridRef = useRef2(null);
  const HOME_LIMIT = 8;
  const byBrand = activeBrand === "all" ? PRODUCTS : PRODUCTS.filter((p2) => p2.brand === activeBrand);
  const visibleProducts = activeBrand === "all" ? byBrand.slice(0, HOME_LIMIT) : byBrand;
  const hiddenCount = byBrand.length - visibleProducts.length;
  useEffect2(() => {
    let killed = false;
    (async () => {
      const { default: gsap4 } = await Promise.resolve().then(() => (init_gsap(), gsap_exports));
      if (killed || !gridRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap4.from(gridRef.current.querySelectorAll(".grid-anim"), {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.06,
        ease: "back.out(1.8)"
      });
    })();
    return () => {
      killed = true;
    };
  }, [activeBrand]);
  const storyRef = useReveal();
  const howRef = useReveal();
  return /* @__PURE__ */ jsxs5("div", { children: [
    /* @__PURE__ */ jsx5(Hero, {}),
    /* @__PURE__ */ jsx5(Marquee, { text: MARQUEE_TEXT }),
    /* @__PURE__ */ jsx5("section", { className: "px-[5vw] pt-[110px] pb-[80px]", children: /* @__PURE__ */ jsxs5("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ jsx5(
        "span",
        {
          className: "inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]",
          style: { background: "rgba(16,35,28,.07)", color: "var(--ink)" },
          children: "The signature range"
        }
      ),
      /* @__PURE__ */ jsxs5("h2", { className: "mt-4 display-xl", style: { color: "var(--ink)" }, children: [
        "Pick your ",
        /* @__PURE__ */ jsx5("em", { className: "u-mark not-italic", style: { color: "var(--fern)" }, children: "range" })
      ] }),
      /* @__PURE__ */ jsxs5("p", { className: "mt-4 max-w-[520px] text-[16px] leading-relaxed text-slate-500", children: [
        PRODUCTS.length,
        " products across three houses, one very easy decision. Filter by house to narrow it down."
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "mt-8 mb-8 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx5(
          "button",
          {
            onClick: () => setActiveBrand("all"),
            className: "chip",
            "data-active": activeBrand === "all",
            children: "All"
          }
        ),
        BRAND_LIST.map((b) => /* @__PURE__ */ jsx5(
          "button",
          {
            onClick: () => setActiveBrand(b.id),
            className: "chip",
            "data-active": activeBrand === b.id,
            children: b.name
          },
          b.id
        ))
      ] }),
      /* @__PURE__ */ jsx5("div", { ref: gridRef, children: /* @__PURE__ */ jsx5(CatalogueList, { products: visibleProducts }) }),
      /* @__PURE__ */ jsxs5("div", { className: "mt-12 flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxs5(Link4, { to: "/shop", className: "btn btn-ink", children: [
          "Browse the full catalogue of ",
          PRODUCTS.length,
          " \u2192"
        ] }),
        hiddenCount > 0 && /* @__PURE__ */ jsxs5("span", { className: "text-[12px] font-bold text-slate-400", children: [
          "+",
          hiddenCount,
          " more in the catalogue"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs5(
      "section",
      {
        ref: storyRef,
        className: "relative overflow-hidden grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-center gap-10 px-[6vw] py-[90px]",
        style: { background: "#f4ece1", minHeight: "80svh" },
        children: [
          /* @__PURE__ */ jsxs5("div", { className: "relative z-10 max-w-[560px] reveal", children: [
            /* @__PURE__ */ jsx5(
              "span",
              {
                className: "inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]",
                style: { background: "#3F2A12", color: "var(--sun, #ffc933)" },
                children: "Felis be Glad"
              }
            ),
            /* @__PURE__ */ jsxs5("h2", { className: "display-lg mt-4", style: { color: "#3F2A12" }, children: [
              "A little ",
              /* @__PURE__ */ jsx5("em", { className: "u-mark not-italic", style: { color: "#9A5B08" }, children: "luxury" }),
              ", every day."
            ] }),
            /* @__PURE__ */ jsxs5("p", { className: "mt-4 text-[16px] leading-relaxed", style: { color: "#5a4227" }, children: [
              "Inspired-by fine fragrance, hand-poured reed diffusers and car perfumes built for lasting sillage \u2014 ",
              PRODUCTS.filter((p2) => p2.brand === "felis-be-glad").length,
              " products, 12+ weeks of scent."
            ] }),
            /* @__PURE__ */ jsx5("div", { className: "mt-5 flex flex-wrap gap-2", children: ["Inspired by designer scents", "Long-lasting diffusers", "Signature car perfumes"].map(
              (t) => /* @__PURE__ */ jsx5(
                "span",
                {
                  className: "rounded-full px-4 py-1.5 text-[13px] font-bold",
                  style: { border: "1.5px solid rgba(90,66,39,.32)", color: "#5a4227" },
                  children: t
                },
                t
              )
            ) }),
            /* @__PURE__ */ jsxs5("div", { className: "mt-7 flex flex-wrap gap-2.5", children: [
              /* @__PURE__ */ jsx5(Link4, { to: "/shop?brand=felis-be-glad", className: "btn btn-ink", children: "Shop Felis be Glad" }),
              /* @__PURE__ */ jsx5(Link4, { to: "/brands", className: "btn btn-ghost", children: "All three houses" })
            ] })
          ] }),
          /* @__PURE__ */ jsx5(
            "div",
            {
              className: "relative reveal grid place-items-center rounded-[24px]",
              style: { background: "#E8E2F5", aspectRatio: "4 / 5" },
              children: /* @__PURE__ */ jsxs5("div", { className: "text-center px-8", children: [
                /* @__PURE__ */ jsx5(
                  "p",
                  {
                    className: "font-display text-[15px] font-black uppercase tracking-[0.2em]",
                    style: { color: "#3d2f5c" },
                    children: "Felis be Glad"
                  }
                ),
                /* @__PURE__ */ jsx5(
                  "p",
                  {
                    className: "mt-3 font-display text-[26px] font-extrabold leading-tight",
                    style: { color: "#3d2f5c" },
                    children: "Fine fragrance, poured by hand"
                  }
                )
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx5("section", { className: "px-[5vw] py-[80px]", style: { background: "var(--cream)" }, children: /* @__PURE__ */ jsxs5("div", { className: "mx-auto max-w-[1240px]", children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7", children: [
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx5("span", { className: "eyebrow", children: "Three houses" }),
          /* @__PURE__ */ jsxs5("h2", { className: "display-lg mt-2", style: { color: "var(--ink)" }, children: [
            "One standard, three ",
            /* @__PURE__ */ jsx5("span", { className: "u-mark", children: "shelves" })
          ] })
        ] }),
        /* @__PURE__ */ jsx5(Link4, { to: "/brands", className: "text-[13px] font-black shrink-0", style: { color: "var(--ink)" }, children: "Compare the houses \u2192" })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        {
          tag: "Gladchemistry",
          line: "Skin, hair and bath, formulated by a chemist.",
          to: "/shop?brand=gladchemistry",
          tone: "#DDF3E4"
        },
        {
          tag: "Felis be Glad",
          line: "Fine fragrance, reed diffusers and car perfumes.",
          to: "/shop?brand=felis-be-glad",
          tone: "#E8E2F5"
        },
        {
          tag: "Bubbles Detergents",
          line: "Home and car cleaning that actually shifts grime.",
          to: "/shop?brand=bubbles-detergents",
          tone: "#D9EFE0"
        }
      ].map((h) => /* @__PURE__ */ jsxs5(
        Link4,
        {
          to: h.to,
          className: "group relative block overflow-hidden rounded-[24px] reveal",
          style: { background: h.tone, aspectRatio: "4 / 5" },
          children: [
            /* @__PURE__ */ jsx5(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(180deg, rgba(6,20,15,0) 30%, rgba(6,20,15,.82) 100%)"
                }
              }
            ),
            /* @__PURE__ */ jsxs5("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
              /* @__PURE__ */ jsx5("p", { className: "text-[10px] font-black uppercase tracking-[0.16em]", style: { color: "var(--lime)" }, children: h.tag }),
              /* @__PURE__ */ jsx5("p", { className: "mt-1.5 font-display font-extrabold text-[17px] leading-snug text-white", children: h.line }),
              /* @__PURE__ */ jsxs5("span", { className: "mt-3 inline-flex items-center gap-1 text-[12px] font-black text-white/85", children: [
                "Explore the house",
                /* @__PURE__ */ jsx5("span", { className: "transition-transform group-hover:translate-x-1", children: "\u2192" })
              ] })
            ] })
          ]
        },
        h.tag
      )) })
    ] }) }),
    /* @__PURE__ */ jsx5(
      "section",
      {
        ref: howRef,
        className: "relative overflow-hidden px-[5vw] pt-[80px] pb-[140px]",
        style: { background: "var(--cream)", color: "var(--ink)" },
        children: /* @__PURE__ */ jsxs5("div", { className: "mx-auto max-w-[1240px]", children: [
          /* @__PURE__ */ jsx5(
            "span",
            {
              className: "inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] reveal",
              style: { background: "rgba(16,35,28,.07)" },
              children: "Tested, not guessed"
            }
          ),
          /* @__PURE__ */ jsxs5("h2", { className: "mt-4 display-lg reveal", children: [
            "From bench to ",
            /* @__PURE__ */ jsx5("em", { className: "u-mark not-italic", style: { color: "var(--violet)" }, children: "bathroom" })
          ] }),
          /* @__PURE__ */ jsx5("p", { className: "mt-3 max-w-[520px] text-[16px] leading-relaxed text-slate-500 reveal", children: "Every batch in all three houses is checked for purity, longevity and surface safety before it reaches the shelf." }),
          /* @__PURE__ */ jsx5("div", { className: "mt-[44px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
            { n: "01", t: "Formulated", d: "Balanced for efficacy, safety and long shelf life.", c: "var(--fern)" },
            { n: "02", t: "Batch tested", d: "Purity, scent longevity and surface safety.", c: "var(--amber)" },
            { n: "03", t: "Filled & sealed", d: "Filled in South Africa, sealed for transport.", c: "var(--sky)" },
            { n: "04", t: "Ready to collect", d: "Waiting for you at Shop 19, Palm Springs Mall.", c: "var(--violet)" }
          ].map((s) => /* @__PURE__ */ jsxs5("div", { className: "panel p-6 reveal", children: [
            /* @__PURE__ */ jsx5(
              "span",
              {
                className: "font-display font-extrabold text-[34px] leading-none",
                style: { color: s.c },
                children: s.n
              }
            ),
            /* @__PURE__ */ jsx5("h3", { className: "font-display font-extrabold text-[19px] mt-3", children: s.t }),
            /* @__PURE__ */ jsx5("p", { className: "text-[13px] leading-relaxed text-slate-500 mt-1.5", children: s.d })
          ] }, s.n)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs5("section", { className: "px-[5vw] py-[100px] text-center", style: { background: "var(--cream)" }, children: [
      /* @__PURE__ */ jsx5(
        "span",
        {
          className: "inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]",
          style: { background: "rgba(16,35,28,.07)", color: "var(--ink)" },
          children: "Ready when you are"
        }
      ),
      /* @__PURE__ */ jsxs5("h2", { className: "display-lg mt-4", style: { color: "var(--ink)" }, children: [
        "Get your ",
        /* @__PURE__ */ jsx5("em", { className: "u-mark not-italic", style: { color: "var(--fern)" }, children: "care" }),
        " sorted."
      ] }),
      /* @__PURE__ */ jsxs5("p", { className: "mt-4 mx-auto max-w-[44ch] text-[16px] leading-relaxed text-slate-500", children: [
        PRODUCTS.length,
        " products across personal care, fragrance and cleaning. Enquire on any of them, or come and see the range in Springs."
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "mt-7 flex flex-wrap justify-center gap-2.5", children: [
        /* @__PURE__ */ jsx5(Link4, { to: "/shop", className: "btn btn-ink", children: "View the catalogue" }),
        /* @__PURE__ */ jsx5(Link4, { to: "/brands", className: "btn btn-ghost", children: "Compare brands" })
      ] })
    ] })
  ] });
};

// src/pages/Shop.tsx
import { useState as useState5, useMemo as useMemo2, useEffect as useEffect3 } from "react";
import { useSearchParams } from "react-router-dom";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.get("brand") || "all";
  const [selectedBrand, setSelectedBrand] = useState5(initialBrand);
  const [searchQuery, setSearchQuery] = useState5("");
  const [sortBy, setSortBy] = useState5("featured");
  useEffect3(() => {
    const paramBrand = searchParams.get("brand") || "all";
    setSelectedBrand(paramBrand);
  }, [searchParams]);
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    if (brand === "all") {
      searchParams.delete("brand");
    } else {
      searchParams.set("brand", brand);
    }
    setSearchParams(searchParams);
  };
  const filteredProducts = useMemo2(() => {
    let list = [...PRODUCTS];
    if (selectedBrand !== "all") {
      list = list.filter((p2) => p2.brand === selectedBrand);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p2) => p2.name.toLowerCase().includes(q) || p2.category.toLowerCase().includes(q) || p2.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedBrand, searchQuery, sortBy]);
  const counts = {
    all: PRODUCTS.length,
    ...Object.fromEntries(
      BRAND_LIST.map((b) => [b.id, PRODUCTS.filter((p2) => p2.brand === b.id).length])
    )
  };
  return /* @__PURE__ */ jsxs6("div", { children: [
    /* @__PURE__ */ jsx6("section", { style: { background: "var(--lime)" }, children: /* @__PURE__ */ jsxs6("div", { className: "mx-auto max-w-[1240px] px-5 py-12 sm:py-16", children: [
      /* @__PURE__ */ jsx6("span", { className: "eyebrow", style: { color: "var(--ink)" }, children: "The catalogue" }),
      /* @__PURE__ */ jsxs6("h1", { className: "display-xl mt-3", style: { color: "var(--ink)" }, children: [
        "Pick your ",
        /* @__PURE__ */ jsx6("span", { className: "u-mark", children: "range" })
      ] }),
      /* @__PURE__ */ jsxs6(
        "p",
        {
          className: "mt-4 text-[16px] leading-relaxed max-w-[52ch]",
          style: { color: "var(--ink-soft)" },
          children: [
            PRODUCTS.length,
            " products across personal care, fragrance and home cleaning. Prices are listed per item; order by WhatsApp or at the counter."
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx6("section", { className: "mx-auto max-w-[1240px] px-5 pt-8", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-1", children: [
        /* @__PURE__ */ jsxs6(
          "button",
          {
            onClick: () => handleBrandChange("all"),
            className: "chip",
            "data-active": selectedBrand === "all",
            children: [
              "All",
              /* @__PURE__ */ jsx6("span", { className: "opacity-50 font-bold", children: counts.all })
            ]
          }
        ),
        BRAND_LIST.map((b) => /* @__PURE__ */ jsxs6(
          "button",
          {
            onClick: () => handleBrandChange(b.id),
            className: "chip",
            "data-active": selectedBrand === b.id,
            children: [
              /* @__PURE__ */ jsx6(
                "span",
                {
                  className: "h-2.5 w-2.5 rounded-full shrink-0",
                  style: { background: b.primaryColor }
                }
              ),
              b.name,
              /* @__PURE__ */ jsx6("span", { className: "opacity-50 font-bold", children: counts[b.id] })
            ]
          },
          b.id
        ))
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col sm:flex-row gap-3 sm:items-center", children: [
        /* @__PURE__ */ jsxs6("div", { className: "relative flex-1 sm:max-w-sm", children: [
          /* @__PURE__ */ jsx6(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsx6(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: "Search the range\u2026",
              "aria-label": "Search products",
              className: "w-full pl-11 pr-4 py-3 rounded-full bg-white border border-black/15 text-sm font-semibold focus:outline-none focus:border-black/40",
              style: { color: "var(--ink)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs6("label", { className: "inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.12em] sm:ml-auto", style: { color: "var(--ink-soft)" }, children: [
          "Sort",
          /* @__PURE__ */ jsxs6(
            "select",
            {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: "rounded-full bg-white border border-black/15 px-4 py-2.5 text-[13px] font-bold focus:outline-none",
              style: { color: "var(--ink)" },
              children: [
                /* @__PURE__ */ jsx6("option", { value: "featured", children: "Featured" }),
                /* @__PURE__ */ jsx6("option", { value: "price-asc", children: "Price: low to high" }),
                /* @__PURE__ */ jsx6("option", { value: "price-desc", children: "Price: high to low" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("p", { className: "text-[12px] font-bold text-slate-400", children: [
        "Showing ",
        filteredProducts.length,
        " of ",
        PRODUCTS.length,
        /* @__PURE__ */ jsxs6("span", { className: "font-semibold text-slate-400", children: [
          " ",
          "\xB7 prices are per item, and every line can be enquired on"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx6("section", { className: "mx-auto max-w-[1240px] px-5 py-9 sm:py-12", children: filteredProducts.length === 0 ? /* @__PURE__ */ jsxs6("div", { className: "panel px-6 py-16 text-center", children: [
      /* @__PURE__ */ jsx6("h2", { className: "display-md", style: { color: "var(--ink)" }, children: "Nothing matched that" }),
      /* @__PURE__ */ jsx6("p", { className: "mt-2 text-sm text-slate-500", children: "Try a different word or clear the filters." }),
      /* @__PURE__ */ jsx6(
        "button",
        {
          onClick: () => {
            setSearchQuery("");
            handleBrandChange("all");
          },
          className: "btn btn-ink mt-6",
          children: "Clear filters"
        }
      )
    ] }) : /* @__PURE__ */ jsx6(CatalogueList, { products: filteredProducts }) })
  ] });
};

// src/pages/Brands.tsx
import { Link as Link5 } from "react-router-dom";

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
import { createContext as createContext2 } from "react";
var LayoutGroupContext = /* @__PURE__ */ createContext2({});

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
import { useRef as useRef3 } from "react";
function useConstant(init4) {
  const ref2 = useRef3(null);
  if (ref2.current === null) {
    ref2.current = init4();
  }
  return ref2.current;
}

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
import { useLayoutEffect, useEffect as useEffect4 } from "react";

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect4;

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
import { createContext as createContext3 } from "react";
var PresenceContext = /* @__PURE__ */ createContext3(null);

// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}

// node_modules/motion-utils/dist/es/clamp.mjs
var clamp3 = (min, max, v) => {
  if (v > max)
    return max;
  if (v < min)
    return min;
  return v;
};

// node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
  return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}

// node_modules/motion-utils/dist/es/errors.mjs
var warning = () => {
};
var invariant = () => {
};
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
  warning = (check, message, errorCode) => {
    if (!check && typeof console !== "undefined") {
      console.warn(formatErrorMessage(message, errorCode));
    }
  };
  invariant = (check, message, errorCode) => {
    if (!check) {
      throw new Error(formatErrorMessage(message, errorCode));
    }
  };
}

// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};

// node_modules/motion-utils/dist/es/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;

// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

// node_modules/motion-utils/dist/es/memo.mjs
// @__NO_SIDE_EFFECTS__
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}

// node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

// node_modules/motion-utils/dist/es/pipe.mjs
var pipe3 = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));

// node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const range = to - from;
  return range ? (value - from) / range : 1;
};

// node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => this.remove(handler);
  }
  remove(handler) {
    removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

// node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;

// node_modules/motion-utils/dist/es/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
  if (condition || warned.has(message))
    return;
  console.warn(formatErrorMessage(message, errorCode));
  warned.add(message);
}

// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => t * (3 * (1 - t) * ((1 - t) * a1 + t * a2) + t * t);
// @__NO_SIDE_EFFECTS__
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  return (x) => {
    let lowerBound = 0;
    let upperBound = 1;
    let t = x;
    for (let i = 0; ; i++) {
      if (!(t >= lowerBound && t <= upperBound)) {
        t = (lowerBound + upperBound) / 2;
      }
      const currentX = calcBezier(t, mX1, mX2) - x;
      if (currentX * currentX < 1e-28 || i === 40)
        break;
      currentX > 0 ? upperBound = t : lowerBound = t;
      t -= currentX * 1e-7 / (calcBezier(t + 1e-7, mX1, mX2) - x - currentX);
    }
    return calcBezier(t, mY1, mY2);
  };
}

// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;

// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p2) => 1 - easing(1 - p2);

// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p2) => p2 >= 1 ? 1 : (p2 *= 2) < 1 ? 0.5 * backIn(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));

// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p2) => 1 - Math.sin(Math.acos(p2));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);

// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var isValidEasing = (easing) => {
  return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (isValidEasing(definition)) {
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/motion-dom/dist/es/frameloop/frame-data.mjs
var frameData = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};

// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(value) {
  if (typeof value !== "string")
    return false;
  return value.split("/*")[0].includes("var(--");
}

// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp3(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor3 = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp3(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor3("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
var channel = (v, i, size) => {
  const c = v.substring(1 + i * size, 1 + (i + 1) * size);
  return size > 1 ? c : c + c;
};
function parseHex(v) {
  const size = v.length > 5 ? 2 : 1;
  const alpha2 = channel(v, 3, size);
  return {
    red: parseInt(channel(v, 0, size), 16),
    green: parseInt(channel(v, 1, size), 16),
    blue: parseInt(channel(v, 2, size), 16),
    alpha: alpha2 ? parseInt(alpha2, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = /* @__PURE__ */ (() => ({
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
}))();

// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor3("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  },
  getAnimatableNone: (v) => {
    const parsed = color.parse(v);
    parsed.alpha = 0;
    return color.transform(parsed);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
var hasFloat = /* @__PURE__ */ new RegExp(floatRegex.source);
var hasColor = /* @__PURE__ */ new RegExp(colorRegex.source, "i");
function test(v) {
  return isNaN(v) && typeof v === "string" && (hasFloat.test(v) || hasColor.test(v));
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function hasComplexValues(value) {
  const asString = value.toString();
  return hasFloat.test(asString) || hasColor.test(asString);
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
function createTransformer(source) {
  return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
var convertToZero = (value, splitBefore) => {
  if (typeof value === "number") {
    return splitBefore?.trim().endsWith("/") ? value : 0;
  }
  return convertNumbersToZero(value);
};
function getAnimatableNone(v) {
  const info = analyseComplexValue(v);
  const transformer = buildTransformer(info);
  return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p2, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q - p2) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q;
    red = hueToRgb(p2, q, hue + 1 / 3);
    green = hueToRgb(p2, q, hue);
    blue = hueToRgb(p2, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return (p2) => p2 > 0 ? b : a;
}

// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  if (!type) {
    process.env.NODE_ENV !== "production" && warning(false, `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    return false;
  }
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p2) => p2 <= 0 ? origin : target;
  } else {
    return (p2) => p2 >= 1 ? target : origin;
  }
}

// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
  return (p2) => mixNumber(a, b, p2);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return (p2) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p2);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = { ...a, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = origin.values[originIndex] ?? 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe3(mixArray(matchOrder(originStats, targetStats), targetStats.values), buildTransformer(targetStats));
  } else {
    process.env.NODE_ENV !== "production" && warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
    return mixImmediate(origin, target);
  }
};

// node_modules/motion-dom/dist/es/utils/mix/index.mjs
var unitValue = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function mixUnit(from, to) {
  const a = unitValue.exec(from);
  if (!a)
    return;
  const b = unitValue.exec(to);
  if (!b || a[2] !== b[2])
    return;
  const unit = a[2];
  const origin = parseFloat(a[1]);
  const target = parseFloat(b[1]);
  return (p2) => sanitize(mixNumber(origin, target, p2)) + unit;
}
function mix(from, to, p2) {
  if (typeof from === "number" && typeof to === "number" && typeof p2 === "number") {
    return mixNumber(from, to, p2);
  }
  if (typeof from === "string" && typeof to === "string") {
    const mixer2 = mixUnit(from, to);
    if (mixer2)
      return mixer2;
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];

// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  let running;
  const toKeepAlive = /* @__PURE__ */ new Set();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      nextFrame.add(callback);
      runNextFrame();
    }
    (running = callback)(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      addToCurrentFrame && callback !== running && queue.delete(callback);
      queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      const prevFrame = thisFrame;
      thisFrame = nextFrame;
      nextFrame = prevFrame;
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      running = void 0;
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive, state = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
}) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { setup, read: read2, resolveKeyframes, preUpdate, update, preRender, render: render3, postRender } = steps;
  const processBatch = () => {
    const useManualTiming = MotionGlobalConfig.useManualTiming;
    const timestamp = useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    if (!useManualTiming) {
      state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    }
    state.timestamp = timestamp;
    state.isProcessing = true;
    setup.process(state);
    read2.process(state);
    resolveKeyframes.process(state);
    preUpdate.process(state);
    update.process(state);
    preRender.process(state);
    render3.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state, steps };
}

// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true, frameData);

// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator, timeStep = 50, maxDuration2 = maxGeneratorDuration, keyframes2) {
  let duration = 0;
  let state = generator.next(duration);
  keyframes2?.push(state.value);
  while (!state.done && duration < maxDuration2) {
    duration += timeStep;
    state = generator.next(duration);
    keyframes2?.push(state.value);
  }
  return duration >= maxDuration2 ? Infinity : duration;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const { keyframes: k, velocity: v } = options;
  const delta = k && k[k.length - 1] - k[0];
  const generator = createGenerator({
    ...options,
    velocity: v && delta ? v * scale2 / delta : v,
    keyframes: [0, scale2]
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var defaultStiffness = 100;
var defaultDamping = 10;
var defaultMass = 1;
var defaultDuration = 800;
var defaultBounce = 0.3;
var defaultVisualDuration = 0.3;
var restSpeedGranular = 0.01;
var restSpeedDefault = 2;
var restDeltaGranular = 5e-3;
var restDeltaDefault = 0.5;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var bounceToDampingRatio = (bounce) => bounce < 0 ? 1 / Math.max(1 + bounce, minDamping) : Math.max(1 - bounce, minDamping);
function overdampedFreqScale(dampingRatio, criticalFreqTime) {
  if (!(dampingRatio > 1))
    return 1;
  const root = Math.sqrt(dampingRatio * dampingRatio - 1);
  const slow = dampingRatio - root;
  const fast = dampingRatio + root;
  const target = 2 * root * Math.exp(-criticalFreqTime) * (1 + criticalFreqTime);
  return approximateRoot((freqTime) => fast * Math.exp(-slow * freqTime) - slow * Math.exp(-fast * freqTime) - target, (freqTime) => Math.exp(-fast * freqTime) - Math.exp(-slow * freqTime), criticalFreqTime) / criticalFreqTime;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
var safeMin = 1e-3;
function findSpring({ duration = defaultDuration, bounce = defaultBounce }) {
  let envelope;
  let derivative;
  process.env.NODE_ENV !== "production" && warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  const dampingRatio = bounceToDampingRatio(bounce);
  duration = clamp3(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - exponentialDecay / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const e = dampingRatio * dampingRatio * undampedFreq2 * undampedFreq2 * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(undampedFreq2 * undampedFreq2, dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * -e * f / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = undampedFreq2 * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = -undampedFreq2 * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const criticalFreq = approximateRoot(envelope, derivative, initialGuess);
  const undampedFreq = criticalFreq * overdampedFreqScale(dampingRatio, criticalFreq * duration);
  const stiffness = undampedFreq * undampedFreq;
  return {
    stiffness,
    damping: dampingRatio * 2 * Math.sqrt(stiffness),
    duration: secondsToMilliseconds(duration)
  };
}
var isValidPhysics = (value, canBeZero) => (canBeZero ? value >= 0 : value > 0) && value < Infinity;
function resolvePhysics(value, canBeZero) {
  if (isValidPhysics(value, canBeZero))
    return value;
  if (process.env.NODE_ENV !== "production") {
    warning(value === void 0 || value === "auto", "Spring stiffness and mass must be positive, damping 0 or greater", "spring-invalid-physics");
  }
  return void 0;
}
function getSpringOptions(options) {
  const validStiffness = resolvePhysics(options.stiffness);
  const validDamping = resolvePhysics(options.damping, true);
  const validMass = resolvePhysics(options.mass);
  const springOptions = {
    ...options,
    stiffness: validStiffness ?? defaultStiffness,
    damping: validDamping ?? defaultDamping,
    mass: validMass ?? defaultMass,
    isResolvedFromDuration: false,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (validStiffness ?? validDamping ?? validMass) === void 0 && (options.duration !== void 0 || options.bounce !== void 0)
  };
  if (springOptions.isTimeDefined) {
    if (options.visualDuration) {
      const dampingRatio = bounceToDampingRatio(options.bounce || 0);
      const root = 2 * Math.PI / (options.visualDuration * 1.2) * overdampedFreqScale(dampingRatio, 2 * Math.PI / 1.2);
      springOptions.stiffness = root * root;
      springOptions.damping = 2 * dampingRatio * Math.sqrt(springOptions.stiffness);
    } else {
      Object.assign(springOptions, findSpring(springOptions));
      springOptions.isResolvedFromDuration = true;
    }
    if (!isValidPhysics(springOptions.stiffness) || !isValidPhysics(springOptions.damping, true)) {
      springOptions.stiffness = defaultStiffness;
      springOptions.damping = defaultDamping;
    }
  }
  return springOptions;
}
function springGenerator(optionsOrVisualDuration = defaultVisualDuration, bounce = defaultBounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, isResolvedFromDuration, isTimeDefined } = getSpringOptions({ ...options });
  const inheritVelocity = (velocity) => isResolvedFromDuration ? 0 : -millisecondsToSeconds(velocity);
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const decay = dampingRatio * undampedAngularFreq;
  const s = {
    target,
    delta: target - origin,
    velocity: inheritVelocity(options.velocity) || 0,
    restSpeed: 0,
    restDelta: 0
  };
  const setRestThresholds = () => {
    const isGranularScale = Math.abs(s.delta) < 5;
    s.restSpeed = options.restSpeed || (isGranularScale ? restSpeedGranular : restSpeedDefault);
    s.restDelta = options.restDelta || (isGranularScale ? restDeltaGranular : restDeltaDefault);
  };
  setRestThresholds();
  let resolveSpring;
  let resolveVelocity;
  let update;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    const c = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    update = () => {
      c.A = (s.velocity + decay * s.delta) / angularFreq;
      c.sinC = decay * c.A + s.delta * angularFreq;
      c.cosC = decay * s.delta - c.A * angularFreq;
    };
    const sample = (t) => {
      if (t !== c.t) {
        c.t = t;
        c.env = Math.exp(-decay * t);
        c.sin = Math.sin(angularFreq * t);
        c.cos = Math.cos(angularFreq * t);
      }
    };
    resolveSpring = (t) => {
      sample(t);
      return s.target - c.env * (c.A * c.sin + s.delta * c.cos);
    };
    resolveVelocity = (t) => {
      sample(t);
      return c.env * (c.sinC * c.sin + c.cosC * c.cos);
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => s.target - Math.exp(-undampedAngularFreq * t) * (s.delta + (s.velocity + undampedAngularFreq * s.delta) * t);
    const c = { C: 0 };
    update = () => {
      c.C = s.velocity + undampedAngularFreq * s.delta;
    };
    resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * c.C * t - s.velocity);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    const slow = decay - dampedAngularFreq;
    const fast = decay + dampedAngularFreq;
    const limit = dampedAngularFreq < 1 || isTimeDefined ? Infinity : 300 / dampedAngularFreq;
    const decayAt = (rate, t) => Math.exp(t > limit ? (decay - rate) * limit - decay * t : -rate * t);
    const c = { S: 0, F: 0 };
    update = () => {
      const P = (s.velocity + decay * s.delta) / dampedAngularFreq;
      c.S = (s.delta + P) / 2;
      c.F = (s.delta - P) / 2;
    };
    resolveSpring = (t) => s.target - c.S * decayAt(slow, t) - c.F * decayAt(fast, t);
    resolveVelocity = (t) => slow * c.S * decayAt(slow, t) + fast * c.F * decayAt(fast, t);
  }
  update();
  const calculatedDuration = isResolvedFromDuration ? duration || null : null;
  const generator = {
    calculatedDuration,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (keyframes2, newVelocity) => {
      s.target = keyframes2[keyframes2.length - 1];
      s.delta = s.target - keyframes2[0];
      s.velocity = inheritVelocity(newVelocity);
      if (!(options.restSpeed && options.restDelta))
        setRestThresholds();
      generator.calculatedDuration = calculatedDuration;
      state.done = false;
      update();
    },
    velocity: (t) => secondsToMilliseconds(resolveVelocity(t)),
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = secondsToMilliseconds(resolveVelocity(t));
        state.done = Math.abs(currentVelocity) <= s.restSpeed && Math.abs(s.target - current) <= s.restDelta;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? s.target : current;
      return state;
    },
    toString: () => {
      const easingDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(easingDuration * progress2).value, easingDuration, 30);
      return easingDuration + "ms " + easing;
    }
  };
  return generator;
}
var spring = /* @__PURE__ */ Object.assign(springGenerator, {
  applyToOptions: (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, springGenerator);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  }
});

// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => v < min || v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget ? modifyTarget(ideal) : ideal;
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : t ? target + delta : origin;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -calcDelta(t) / timeConstant * 1e3,
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = MotionGlobalConfig.mix || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = customMixer?.(output[i], output[i + 1]) || mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe3(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate3(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  process.env.NODE_ENV !== "production" && invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    if (isZeroDeltaRange && v < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp3(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut", mixer: transitionMixer }) {
  const customMixer = typeof keyframeValues[0] === "number" ? void 0 : transitionMixer;
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2) || easeInOut;
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  let span = -1;
  if (!customMixer) {
    for (let i = 1; i < keyframeValues.length; i++) {
      if (keyframeValues[i] !== keyframeValues[i - 1]) {
        if (span >= 0) {
          span = -2;
          break;
        }
        span = i - 1;
      }
    }
  }
  if (span >= 0) {
    const offsets = times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues);
    const from = offsets[span] * duration;
    const to = offsets[span + 1] * duration;
    const origin = keyframeValues[span];
    const target = keyframeValues[span + 1];
    const ease3 = Array.isArray(easingFunctions) ? easingFunctions[span] : easingFunctions;
    const mixer = (MotionGlobalConfig.mix || mix)(origin, target);
    const last = keyframeValues.length - 2;
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = span && t < from ? mixer(0) : span < last && (t >= to || !duration) ? typeof target === "number" ? target : mixer(1) : mixer(ease3(t >= to || !duration ? 1 : t <= from ? 0 : (t - from) / (to - from)));
        state.done = t >= duration;
        return state;
      }
    };
  }
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate3(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions),
    mixer: customMixer
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
function calcGeneratorVelocity(generator, t, initialVelocity = 0) {
  if (t <= 0)
    return initialVelocity;
  return generator.velocity ? generator.velocity(t) : getGeneratorVelocity((s) => generator.next(s).value, t, generator.next(t).value);
}

// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
  let first;
  let last;
  let numResolved = 0;
  for (let i = 0; i < keyframes2.length; i++) {
    const keyframe = keyframes2[i];
    if (keyframe !== null) {
      if (!numResolved++)
        first = keyframe;
      last = keyframe;
    }
  }
  const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
  const index = useFirstKeyframe ? 0 : numResolved - 1;
  return !index || finalKeyframe === void 0 ? index ? last : first : finalKeyframe;
}

// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function replaceTransitionType(transition) {
  if (typeof transition.type === "string") {
    transition.type = transitionTypeMap[transition.type];
  }
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var MAX_START_DELAY = 40;
var resolveStartTime = (startTime, now2) => now2 - startTime > MAX_START_DELAY && !MotionGlobalConfig.useManualTiming ? now2 : startTime;

// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function baseRecord(kind, animation) {
  return {
    kind,
    animation,
    timestamp: time.now(),
    frameTimestamp: frameData.timestamp,
    frameIsProcessing: frameData.isProcessing
  };
}
function notifyAnimationStart(animation, options, transition) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("animation-start", animation),
      options: transition ? { ...options, ...transition } : options
    });
  } catch {
  }
}
function notifyLayoutAnimationStart(animation, node) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("layout-animation-start", animation),
      node
    });
  } catch {
  }
}

// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    if (!this._finished) {
      this._finished = this.isResolved ? Promise.resolve() : new Promise((resolve) => {
        this._resolve = resolve;
      });
    }
    return this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0;
    this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true;
    this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
};

// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent2) => percent2 / 100;
var round = (value) => Math.round(value * 1e4) / 1e4;
var JSAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: void 0
    };
    this.stop = () => {
      const { motionValue: motionValue2 } = this.options;
      const now2 = time.now();
      if (motionValue2 && motionValue2.updatedAt !== now2) {
        this.tick(motionValue2.updatedAt = now2);
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
    notifyAnimationStart(this, this.options);
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (process.env.NODE_ENV !== "production" && generatorFactory !== keyframes) {
      invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
    }
    this.mixKeyframes = void 0;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe3(percentToProgress, options.mixer?.(keyframes$1[0], keyframes$1[1]) || mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory(keyframes$1 === options.keyframes ? options : { ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    this.currentTime = this.holdTime ?? Math.round(timestamp - this.startTime) * this.playbackSpeed;
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2 = 0, keyframes: keyframes2, type, onUpdate, finalKeyframe } = this.options;
    if (this.startTime === this.pendingStartTime) {
      this.startTime = resolveStartTime(this.startTime, timestamp);
    }
    this.pendingStartTime = void 0;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    const state = this.generate(this.currentTime, isInDelayPhase);
    let { done } = state;
    if (!isInDelayPhase) {
      done = this.playbackSpeed >= 0 ? calculatedDuration < Infinity ? this.currentTime >= totalDuration : done : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(timestamp) {
    return this.holdTime ?? round((timestamp - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(timestamp, resolved) {
    const { options, totalDuration } = this;
    const t = this.at(timestamp) - (options.delay || 0);
    return t >= totalDuration && options.type !== inertia ? getFinalKeyframe(options.keyframes, options, resolved ? void 0 : options.finalKeyframe) : this.generate(Math.max(t, 0), t < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(currentTime, isInDelayPhase) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration } = this;
    const { keyframes: keyframes2, repeat, repeatType, repeatDelay } = this.options;
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp3(0, 1, iterationProgress) * resolvedDuration;
    }
    let state;
    if (isInDelayPhase) {
      this.delayState.value = keyframes2[0];
      state = this.delayState;
    } else {
      state = frameGenerator.next(elapsed);
    }
    if (mixKeyframes && !isInDelayPhase) {
      state.value = mixKeyframes(state.value);
    }
    return state;
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get iterationDuration() {
    return this.duration + millisecondsToSeconds(this.options.delay ?? 0);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    if (this.state === "finished")
      this.updateFinished();
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = newTime;
      this.tick(newTime);
    }
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return calcGeneratorVelocity(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    if (hasChanged && this.driver) {
      this.updateTime(time.now());
    }
    this.playbackSpeed = newSpeed;
    if (hasChanged && this.driver) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now2 = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now2;
    } else if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime / (this.playbackSpeed || 1);
    } else if (!this.startTime) {
      this.startTime = startTime ?? (this.pendingStartTime = now2);
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.driver?.stop();
    this.driver = void 0;
    this.startTime = this.holdTime = null;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline2) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline2.observe(this);
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
  ...complex,
  getAnimatableNone: (v) => {
    const parsed = complex.parse(v);
    const transformer = complex.createTransformer(v);
    return transformer(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? { ...v2, alpha: 1 } : v2));
  }
};

// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  inset: px,
  insetBlock: px,
  insetBlockStart: px,
  insetBlockEnd: px,
  insetInline: px,
  insetInlineStart: px,
  insetInlineEnd: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  paddingBlock: px,
  paddingBlockStart: px,
  paddingBlockEnd: px,
  paddingInline: px,
  paddingInlineStart: px,
  paddingInlineEnd: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  marginBlock: px,
  marginBlockStart: px,
  marginBlockEnd: px,
  marginInline: px,
  marginInlineStart: px,
  marginInlineEnd: px,
  // Typography
  fontSize: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px,
  ...transformValueTypes,
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter,
  mask,
  WebkitMask: mask
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /* @__PURE__ */ new Set([filter, mask]);
var lastKey;
var lastValue;
var lastNone;
function getAnimatableNone2(key, value) {
  if (key === lastKey && value === lastValue)
    return lastNone;
  let defaultValueType = getDefaultValueType(key);
  if (!customTypes.has(defaultValueType))
    defaultValueType = complex;
  lastNone = defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  lastKey = key;
  lastValue = value;
  return lastNone;
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes2) {
  for (let i = 1; i < keyframes2.length; i++) {
    keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
  }
}

// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
  const angle = radToDeg(Math.atan2(v[1], v[0]));
  return rebaseAngle(angle);
};
var matrix2dParsers = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
  rotate,
  rotateZ: rotate,
  skewX: (v) => radToDeg(Math.atan(v[1])),
  skewY: (v) => radToDeg(Math.atan(v[2])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
  angle = angle % 360;
  if (angle < 0)
    angle += 360;
  return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.hypot(v[0], v[1]);
var scaleY = (v) => Math.hypot(v[4], v[5]);
var matrix3dParsers = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX,
  scaleY,
  scaleZ: (v) => Math.hypot(v[8], v[9], v[10]),
  scale: (v) => (scaleX(v) + scaleY(v)) / 2,
  rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
  rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
  rotateZ,
  rotate: rotateZ,
  skewX: (v) => radToDeg(Math.atan(v[4])),
  skewY: (v) => radToDeg(Math.atan(v[1])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
  return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
  if (!transform || transform === "none") {
    return defaultTransformValue(name);
  }
  const match = transform.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!match) {
    return defaultTransformValue(name);
  }
  const valueParser = (match[1] ? matrix3dParsers : matrix2dParsers)[name];
  const values = match[2].split(",").map((v) => parseFloat(v));
  return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
  const { transform = "none" } = getComputedStyle(instance);
  return parseValueFromTransform(transform, name);
};

// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = /* @__PURE__ */ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();

// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = /* @__PURE__ */ transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      const current = value.get();
      const reset = key.startsWith("scale") ? 1 : 0;
      if (current === reset)
        return;
      removedTransforms.push([key, current]);
      value.set(reset);
    }
  });
  return removedTransforms;
}
var boxDependentValues = /* @__PURE__ */ new Set(["bottom", "right"]);
function measureDimension(computed, measureBox, axis, paddingStart, paddingEnd, boxSizing) {
  const px2 = parseFloat(computed);
  if (!isNaN(px2))
    return px2;
  const { min, max } = measureBox()[axis];
  const size = max - min;
  return boxSizing === "border-box" ? size : size - parseFloat(paddingStart) - parseFloat(paddingEnd);
}
var transformX = ({ transform }) => parseValueFromTransform(transform, "x");
var transformY = ({ transform }) => parseValueFromTransform(transform, "y");
var positionalValues = {
  // Dimensions
  width: ({ width, paddingLeft = "0", paddingRight = "0", boxSizing }, measureBox) => measureDimension(width, measureBox, "x", paddingLeft, paddingRight, boxSizing),
  height: ({ height, paddingTop = "0", paddingBottom = "0", boxSizing }, measureBox) => measureDimension(height, measureBox, "y", paddingTop, paddingBottom, boxSizing),
  top: ({ top }) => parseFloat(top),
  left: ({ left }) => parseFloat(left),
  bottom: ({ top }, measureBox) => {
    const { y } = measureBox();
    return parseFloat(top) + (y.max - y.min);
  },
  right: ({ left }, measureBox) => {
    const { x } = measureBox();
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform, including translate longform names
  x: transformX,
  y: transformY,
  translateX: transformX,
  translateY: transformY
};

// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = [];
    const elementsToMeasure = /* @__PURE__ */ new Set();
    const elementsToUntransform = /* @__PURE__ */ new Set();
    toResolve.forEach((resolver) => {
      if (!resolver.needsMeasurement)
        return;
      resolversToMeasure.push(resolver);
      elementsToMeasure.add(resolver.element);
      if (boxDependentValues.has(resolver.name)) {
        elementsToUntransform.add(resolver.element);
      }
    });
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToUntransform.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          element.getValue(key)?.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete(isForced));
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  isForced = true;
  readAllKeyframes();
  measureAllKeyframes();
  isForced = false;
}
function readOrigin(value, name, target) {
  if (typeof value === "string") {
    if (isNumericalString(value) || isZeroValueString(value)) {
      return parseFloat(value);
    } else if (!complex.test(value) && complex.test(target)) {
      return getAnimatableNone2(name, target);
    }
  }
  return value ?? void 0;
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    if (unresolvedKeyframes[0] === null) {
      const currentValue = motionValue2?.get();
      const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (currentValue !== void 0) {
        unresolvedKeyframes[0] = currentValue;
      } else if (element && name) {
        const valueAsRead = readOrigin(element.readValue(name, finalKeyframe), name, finalKeyframe);
        if (valueAsRead !== void 0) {
          unresolvedKeyframes[0] = valueAsRead;
        }
      }
      if (unresolvedKeyframes[0] === void 0) {
        unresolvedKeyframes[0] = finalKeyframe;
      }
      if (motionValue2 && currentValue === void 0) {
        motionValue2.set(unresolvedKeyframes[0]);
      }
    }
    fillWildcards(unresolvedKeyframes);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(isForcedComplete = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
    toResolve.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      toResolve.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending")
      this.scheduleResolve();
  }
};

// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");

// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
  isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {};

// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => supportsFlags[supportsFlag] ?? memoized();
}

// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");

// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};

// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function") {
    return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  const options = {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  };
  if (pseudoElement)
    options.pseudoElement = pseudoElement;
  return element.animate(keyframeOptions, options);
}

// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function" && "applyToOptions" in type;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
  if (isGenerator(type) && supportsLinearEasing()) {
    return type.applyToOptions(options);
  } else {
    options.duration ?? (options.duration = 300);
    options.ease ?? (options.ease = "easeOut");
  }
  return options;
}

// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var NativeAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!options)
      return;
    const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
    this.isPseudoElement = Boolean(pseudoElement);
    this.allowFlatten = allowFlatten;
    this.options = options;
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const transition = applyGeneratorOptions(options);
    this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
    if (transition.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = this.onFinish = () => {
      this.animation.onfinish = null;
      this.finishedTime = this.time;
      if (!pseudoElement) {
        const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
        this.updateMotionValue?.(keyframe);
        setStyle(element, name, keyframe);
        this.animation.cancel();
      }
      onComplete?.();
      this.notifyFinished();
    };
    notifyAnimationStart(this, options, transition);
  }
  play() {
    if (this.isStopped)
      return;
    this.manualStartTime = null;
    this.animation.onfinish = this.onFinish;
    this.animation.play();
    if (this.state === "finished") {
      this.updateFinished();
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    if (!this.isStopped)
      this.animation.onfinish = this.onFinish;
    this.animation.finish?.();
  }
  cancel() {
    this.animation.onfinish = null;
    try {
      this.animation.cancel();
    } catch (e) {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = true;
    if (this.state === "idle" || this.finishedTime !== null)
      return;
    if (this.updateMotionValue) {
      this.updateMotionValue();
    } else {
      this.commitStyles();
    }
    if (!this.isPseudoElement)
      this.cancel();
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const element = this.options?.element;
    if (!this.isPseudoElement && element?.isConnected) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
    return millisecondsToSeconds(Number(duration));
  }
  get iterationDuration() {
    const { delay: delay2 = 0 } = this.options || {};
    return this.duration + millisecondsToSeconds(delay2);
  }
  get time() {
    return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(newTime) {
    const wasFinished = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = secondsToMilliseconds(newTime);
    if (wasFinished) {
      this.animation.pause();
      this.updateFinished();
    }
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(newSpeed) {
    if (newSpeed < 0)
      this.finishedTime = null;
    this.animation.playbackRate = newSpeed;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(newStartTime) {
    this.manualStartTime = this.animation.startTime = newStartTime;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: timeline2, onAttach, observe }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({ easing: "linear" });
    }
    this.animation.onfinish = this.onFinish = null;
    if (timeline2 && supportsScrollTimeline()) {
      this.animation.timeline = timeline2;
      onAttach?.(this.animation);
      return noop;
    } else {
      return observe(this);
    }
  }
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
  if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
    transition.ease = unsupportedEasingFunctions[transition.ease];
  }
}

// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
  constructor(options) {
    replaceStringEasing(options);
    replaceTransitionType(options);
    super(options);
    if (options.startTime !== void 0 && options.autoplay !== false) {
      this.startTime = options.startTime;
    }
    this.options = options;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (time.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(sampleTime) {
    if (!this.sampler) {
      const { motionValue: motionValue2, onUpdate, onComplete, onPlay, onStop, element, ...options } = this.options;
      this.sampler = new JSAnimation({ ...options, autoplay: false });
      this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, sampleTime)).value;
  }
  /**
   * The value now, as WAAPI doesn't set the motion value while it runs.
   */
  liveValue() {
    const { state } = this;
    if (state === "running" || state === "paused") {
      return this.sample(this.elapsed());
    }
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * sample a renderless JS animation twice to calculate its current
   * value, "previous" value, and therefore allow Motion to calculate
   * velocity for any subsequent animation.
   */
  updateMotionValue(value) {
    const { motionValue: motionValue2, element, name } = this.options;
    if (!motionValue2)
      return;
    if (value !== void 0) {
      motionValue2.set(value);
      return;
    }
    const { speed } = this;
    const sampleTime = this.elapsed();
    const delta = this.state === "running" && speed ? clamp3(0, sampleDelta, sampleTime) : 0;
    const current = this.sample(sampleTime);
    if (element && name)
      setStyle(element, name, current);
    motionValue2.setWithVelocity(this.sample(sampleTime - delta * Math.sign(speed)), current, delta / Math.abs(speed || 1));
  }
};

// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) {
    return false;
  }
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    isOriginAnimatable !== isTargetAnimatable && process.env.NODE_ENV !== "production" && warning(false, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
  options.duration = 0;
  options.type = "keyframes";
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]);

// node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes2) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) {
      return true;
    }
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var needsMixer = ({ mixer, keyframes: keyframes2 }) => mixer && typeof keyframes2[0] !== "number" && keyframes2.some((keyframe, i) => i && mixer(keyframes2[i - 1], keyframe));

// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]);
var supportsWaapi = () => !MotionGlobalConfig.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function supportsBrowserAnimation(options) {
  const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
  if (!name || !(acceleratedValues.has(name) || colorProperties.has(name))) {
    return false;
  }
  const subject = motionValue2?.owner?.current;
  if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) {
    return false;
  }
  const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
  return supportsWaapi() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia" && !needsMixer(options);
}

// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
var openers = {};
var transformFunction = (key, value, valueAsType = getValueAsType(value, transformValueTypes[key])) => (openers[key] || (openers[key] = (translateAlias[key] || key) + "(")) + valueAsType + ")";
var isDefaultTransform = (key, value) => (typeof value === "number" ? value : parseFloat(value)) === (key.startsWith("scale") ? 1 : 0);
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    const valueAsType = transformTemplate && (transform[key] = getValueAsType(value, numberValueTypes[key]));
    if (!isDefaultTransform(key, value)) {
      transformString += transformFunction(key, value, valueAsType || void 0) + " ";
    }
  }
  const pathRotation = latestValues.pathRotation;
  if (pathRotation) {
    transformString += transformFunction("rotate", pathRotation);
  }
  transformString = transformString.trim();
  return transformTemplate ? transformTemplate(transform, transformString) : transformString || "none";
}

// node_modules/motion-dom/dist/es/animation/waapi/transforms/groups.mjs
var transformGroups = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/animation/waapi/transforms/TransformAnimation.mjs
var maxSamples = 200;
var easingTolerance = 1e-3;
var sampleTolerance = 0.1;
var scaleTolerance = 1e-3;
var churnWindow = 100;
var buildAhead = 100;
var nativeEasings = /* @__PURE__ */ new Set(["linear", "easeIn", "easeOut", "easeInOut"]);
var isNativeEasing = (ease2) => nativeEasings.has(ease2);
var traced = /* @__PURE__ */ new WeakMap();
var trace = (ease2, samples) => {
  let last = traced.get(ease2);
  if (last?.[0] !== samples) {
    last = [
      samples,
      "linear(" + defaultOffset(Array(samples + 1)).map((p2) => round(ease2(p2)) + " " + round(p2 * 100) + "%") + ")"
    ];
    traced.set(ease2, last);
  }
  return last[1];
};
var countSamples = (from, to) => Math.min(maxSamples, Math.max(2, Math.ceil((to - from) / sampleDelta)));
var isNear = (a, b) => Math.abs(a - b) <= easingTolerance;
var byTime = (a, b) => a - b;
var spread = (from, to, n) => defaultOffset(Array(n + 1)).map((p2) => mixNumber(from, to, p2));
var getOwner = (options) => options.motionValue.owner;
var getGroup = (element) => transformGroups.get(element);
var hasEnded = ({ state }) => state === "idle" || state === "finished";
var read = (owner, key) => owner.latestValues ? owner.latestValues[key] : owner.getValue(key)?.get();
var canGroupTransform = ({ name, motionValue: motionValue2 }) => name && transformPropOrder.includes(name) && motionValue2?.owner?.current instanceof HTMLElement && supportsWaapi() && supportsLinearEasing();
function canAccelerateTransform(options) {
  const owner = getOwner(options);
  const { onUpdate, transformTemplate } = owner.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !options.isHandoff && !onUpdate && !options.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !transformTemplate && options.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (read(owner, "transform") || "none") === "none" && !read(owner, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !owner.projection?.isProjecting() && /**
     * A mixer that blends these values makes them every frame. It's
     * asked last, as it's user code.
     */
    !needsMixer(options)
  );
}
var TransformDriver = class {
  constructor(element, update, makeDriver, animation) {
    this.element = element;
    this.update = update;
    this.makeDriver = makeDriver;
    this.animation = animation;
  }
  get js() {
    return this.driver || (this.driver = this.makeDriver(this.update));
  }
  now() {
    return this.driver || this.makeDriver !== frameloopDriver ? this.js.now() : frameData.isProcessing ? frameData.timestamp : time.now();
  }
  /**
   * keepAlive is false when seeking. Seeking the WAAPI animation is
   * free, but if a seek needs a rebuild and keeps happening, the group
   * moves to the main thread.
   */
  start(keepAlive = true) {
    const group = getGroup(this.element);
    !group || group.isJS ? this.js.start(keepAlive) : group.schedule(false, !keepAlive);
  }
  stopJS() {
    this.driver?.stop();
  }
  stop() {
    this.stopJS();
    const group = getGroup(this.element);
    group && !group.isFinishing && group.release(this.animation);
  }
};
var setTime;
var TransformAnimation = class extends JSAnimation {
  constructor(options) {
    const element = getOwner(options).current;
    const { driver = frameloopDriver } = options;
    let animation;
    const canAccelerate = canAccelerateTransform(options);
    options.driver = (update) => new TransformDriver(element, update, driver, animation);
    super(options);
    animation = this;
    const firstDriver = this.driver;
    firstDriver && (firstDriver.animation = this);
    this.canAccelerate = canAccelerate;
    const { stop } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync();
      stop();
    };
  }
  /**
   * Each keyframe's offset, made once for the keyframes rather than on
   * every build.
   */
  offsets() {
    const { keyframes: keyframes2, times } = this.options;
    if (times)
      return times;
    if (this.offsetsOf !== keyframes2) {
      this.offsetsOf = keyframes2;
      this.cachedOffsets = defaultOffset(keyframes2);
    }
    return this.cachedOffsets;
  }
  get group() {
    return getGroup(getOwner(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  stopJS() {
    this.driver?.stopJS();
  }
  get name() {
    return this.options.name;
  }
  /**
   * When this stops moving, or, if it repeats forever, when it starts
   * repeating, and how long each repeat takes. Held (paused, or at
   * speed 0) animations never stop moving.
   */
  timing() {
    const { startTime, speed, totalDuration } = this;
    const { delay: delay2 = 0, repeatType } = this.options;
    return this.holdTime !== null ? [Infinity, 0] : totalDuration === Infinity ? [
      startTime + delay2 / speed,
      this.resolvedDuration * (repeatType === "loop" ? 1 : 2) / speed || 1
    ] : [startTime + (delay2 + totalDuration) / speed, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group, state } = this;
    return group?.tracks.has(this) && !group.isJS && this.canAccelerate && (state === "running" || state === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(time.now()) : void 0;
  }
  /**
   * If this moves between two keyframes only, holding still either side
   * of them, as each value of a sequence segment does, when it starts
   * and stops moving, and its easing: as a string if WAAPI runs it
   * exactly, otherwise its function, to trace.
   */
  tween() {
    const { keyframes: keyframes$1, type, repeat, delay: delay2 = 0 } = this.options;
    let span = -1;
    if (repeat || type !== keyframes || this.holdTime !== null) {
      return;
    }
    for (let i = 1; i < keyframes$1.length; i++) {
      if (keyframes$1[i] !== keyframes$1[i - 1]) {
        if (span >= 0)
          return;
        span = i - 1;
      }
    }
    let { ease: ease2 } = this.options;
    if (isEasingArray(ease2))
      ease2 = ease2[span];
    const offsets = this.offsets();
    const at = (i) => this.startTime + (delay2 + offsets[i] * this.totalDuration) / this.speed;
    if (span >= 0) {
      const easing = isBezierDefinition(ease2) ? cubicBezierAsString(ease2) : isNativeEasing(ease2) ? supportedWaapiEasing[ease2] : easingDefinitionToFunction(ease2);
      return [
        at(span),
        at(span + 1),
        typeof easing === "string" || isNear(easing(0), 0) && isNear(easing(1), 1) ? easing : void 0
      ];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(from, to) {
    const { startTime, speed, resolvedDuration, options } = this;
    const { delay: delay2 = 0, repeat = 0, repeatDelay = 0, repeatType, type } = options;
    const offsets = (type || keyframes) === keyframes ? this.offsets() : [0, 1];
    const start = startTime + delay2 / speed;
    const result = [];
    if (this.holdTime !== null || !(resolvedDuration > 0))
      return result;
    for (let i = Math.max(0, Math.floor((from - start) * speed / resolvedDuration)); i <= repeat; i++) {
      const iterationStart = start + i * resolvedDuration / speed;
      if (iterationStart > to)
        break;
      for (const offset of offsets) {
        const t = iterationStart + (i % 2 && repeatType && repeatType !== "loop" ? 1 - offset : offset) * (resolvedDuration - repeatDelay) / speed;
        t > from && t < to && result.push(t);
      }
    }
    return result;
  }
  /**
   * The value at a timestamp, as a number.
   */
  numberAt(timestamp) {
    return parseFloat(this.sampleAt(timestamp, true));
  }
  /**
   * Write the current value, and velocity, to the motion value.
   */
  sync() {
    const now2 = time.now();
    const value = this.sampleAt(now2, true);
    this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(now2 - sampleDelta, true) : value, value, sampleDelta);
  }
  play() {
    if (this.isStopped)
      return;
    (this.group || createGroup(getOwner(this.options))).tracks.add(this);
    super.play();
  }
  pause() {
    super.pause();
    this.isAccelerated() && this.group.schedule(false);
  }
  /**
   * JSAnimation finishes on its next tick, which only happens once the
   * group is on the main thread, so finish now. That includes an
   * animation that can't be accelerated but reached its end before the
   * group could move there.
   */
  complete() {
    super.complete();
    const { group } = this;
    group && !group.isJS && this.tick(time.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    if (this.isAccelerated()) {
      return millisecondsToSeconds(clamp3(0, this.totalDuration, this.at(time.now()) - (this.options.delay || 0)));
    }
    return super.time;
  }
  /**
   * Calls JSAnimation's setter directly, as `super.time =` is a slow
   * path in V8 and this runs for every animation of a seeked sequence.
   */
  set time(newTime) {
    (setTime ?? (setTime = Object.getOwnPropertyDescriptor(JSAnimation.prototype, "time").set)).call(this, newTime);
  }
  /**
   * Scroll timelines set time every frame, so run these on the main
   * thread.
   */
  attachTimeline(timeline2) {
    this.canAccelerate = false;
    this.group?.demote(true);
    return super.attachTimeline(timeline2);
  }
};
var builds;
var buildSoon = (build) => {
  builds || queueMicrotask(() => {
    const queue = builds;
    builds = void 0;
    queue.forEach((build2) => build2());
  });
  (builds || (builds = [])).push(build);
};
function createGroup(owner) {
  const element = owner.current;
  const tracks = /* @__PURE__ */ new Set();
  const byKey = /* @__PURE__ */ new Map();
  let statics = {};
  let keys = [];
  let built = /* @__PURE__ */ new Map();
  let segments = [];
  let needsBuild = false;
  let isScheduled2 = false;
  let isEnded = false;
  let hasChurned = false;
  let lastChurn = -Infinity;
  let wake;
  let wakeAt = Infinity;
  let buildAt;
  const has = (key) => {
    for (const track of tracks)
      if (track.name === key)
        return true;
  };
  const valuesAt = (timestamp, settled) => {
    const values = {};
    for (const key of timestamp === void 0 ? transformPropOrder : keys) {
      const track = byKey.get(key);
      const value = timestamp === void 0 ? read(owner, key) : track ? track.sampleAt(settled > timestamp && !track.timing()[1] ? settled : timestamp) : statics[key];
      if (value !== void 0)
        values[key] = value;
    }
    return values;
  };
  const toTransform = (values, isStyle) => {
    let transform = "";
    for (const key in values) {
      const value = values[key];
      if (!isStyle || !isDefaultTransform(key, value)) {
        transform += transformFunction(key, value) + " ";
      }
    }
    return (isStyle ? transform.trim() : transform) || "none";
  };
  const compose = (timestamp, settled) => toTransform(valuesAt(timestamp, settled));
  const commit = (values = valuesAt()) => {
    element.style.transform = toTransform(values, true);
  };
  const cancel = (animation) => {
    animation.onfinish = animation.oncancel = null;
    animation.cancel();
  };
  const stop = (shouldCommit = true) => {
    clearTimeout(wake);
    wakeAt = Infinity;
    buildAt = void 0;
    shouldCommit && commit();
    segments.forEach(({ animation }) => cancel(animation));
    segments = [];
  };
  const create = (keyframes2, options) => new Animation(new KeyframeEffect(element, keyframes2, options));
  const add = (animation, offset, end2 = Infinity) => {
    const segment = { animation, offset, end: end2 };
    animation.startTime = time.now() + offset;
    if (end2 < Infinity) {
      animation.onfinish = () => {
        segment.isDone = true;
        if (segments.some((s) => s.end === Infinity)) {
          cancel(animation);
          segments = segments.filter((s) => s !== segment);
        }
        group.schedule(false);
      };
    }
    animation.oncancel = () => segments.includes(segment) && group.demote();
    segments.push(segment);
  };
  const jumpAt = (value, a, b) => {
    const change = (x, y) => Math.abs(value(y) - value(x));
    const size = change(a, b);
    while (b - a > 0.01) {
      const mid = (a + b) / 2;
      change(a, mid) > change(mid, b) ? b = mid : a = mid;
    }
    return change(a, b) > size / 2 ? [a, b] : [];
  };
  const getEasing = (moving, from, to, bounds) => {
    const samples = countSamples(from, to);
    if (bounds.length * 4 > samples)
      return;
    let quick;
    for (const track of moving) {
      const first = track.numberAt(from);
      const p2 = (track.numberAt((from + to) / 2) - first) / (track.numberAt(to) - first);
      if (p2 !== p2)
        continue;
      if (quick === void 0)
        quick = p2;
      else if (!isNear(p2, quick))
        return;
    }
    const at = spread(from, to, samples).concat(bounds).sort(byTime);
    const position = (t) => progress(from, to, t);
    let shared;
    let progressAt;
    for (const track of moving) {
      const first = track.numberAt(from);
      const changes = at.map((t) => track.numberAt(t) - first);
      const end2 = changes[changes.length - 1];
      const range = changes.some((change) => Math.abs(change) * easingTolerance > Math.abs(end2)) ? 0 : end2;
      const progress2 = changes.map((change) => range ? change / range : change);
      if (range && !shared) {
        shared = progress2;
        progressAt = (t) => (track.numberAt(t) - first) / range;
      } else if (progress2.some((p2, i) => !isNear(p2, range && shared[i]))) {
        return;
      }
    }
    if (!shared || shared.every((p2, i) => isNear(p2, position(at[i])))) {
      return "linear";
    }
    const points = [];
    const point = (t, p2 = progressAt(t)) => points.push(round(p2) + " " + round(position(t) * 100) + "%");
    shared.forEach((p2, i) => {
      i && Math.abs(p2 - shared[i - 1]) > 0.2 && jumpAt(progressAt, at[i - 1], at[i]).forEach((t) => point(t));
      point(at[i], p2);
    });
    return "linear(" + points + ")";
  };
  const sample = (moving, from, to, bounds) => {
    const times = [from];
    const curved = [];
    let curveFrom = to;
    let curveTo = from;
    for (const track of moving) {
      const tween = track.tween();
      if (tween?.[2] !== "linear") {
        const [trackEnd, cycle] = track.timing();
        const [a, b] = tween || [from, cycle ? to : trackEnd];
        curveFrom = Math.min(curveFrom, a);
        curveTo = Math.max(curveTo, b);
        curved.push(track);
      }
    }
    curveFrom = Math.max(from, curveFrom);
    curveTo = Math.min(to, curveTo);
    const isStraight = (a, b) => curved.every((track) => !(Math.abs(track.numberAt((a + b) / 2) - (track.numberAt(a) + track.numberAt(b)) / 2) > (track.name.startsWith("scale") ? scaleTolerance : sampleTolerance)));
    const split = (a, b, depth) => {
      if (b - a < 1 || isStraight(a, b)) {
        times.push(b);
      } else if (depth < 4) {
        split(a, (a + b) / 2, depth + 1);
        split((a + b) / 2, b, depth + 1);
      } else {
        for (const track of moving) {
          times.push(...jumpAt((t) => track.numberAt(t), a, b));
        }
        times.push(b);
      }
    };
    const ends = curveTo > curveFrom ? spread(curveFrom, curveTo, Math.ceil((curveTo - curveFrom) / 100)) : [];
    ends.push(to);
    for (const t of bounds)
      ends.push(t, Math.min(t + 0.01, to));
    let start = from;
    for (const end2 of ends.sort(byTime)) {
      end2 > start && split(start, end2, 0);
      start = end2;
    }
    return times.sort(byTime);
  };
  const getTween = (moving) => {
    let shared;
    for (const track of moving) {
      const tween = track.tween();
      if (!tween || shared && (Math.abs(tween[0] - shared[0]) > 1 || Math.abs(tween[1] - shared[1]) > 1)) {
        return;
      }
      shared = [
        tween[0],
        tween[1],
        !shared || tween[2] === shared[2] ? tween[2] : void 0
      ];
    }
    return shared;
  };
  const run = (moving, from, to, nativeEasing, options = { fill: "both" }, settled) => {
    const bounds = nativeEasing ? [] : moving.flatMap((track) => track.boundaries(from, to));
    const easing = nativeEasing || getEasing(moving, from, to, bounds);
    const times = easing ? [from, to] : sample(moving, from, to, bounds);
    const transform = times.map((t) => compose(t, settled));
    let keyframes2 = { transform };
    if (!easing) {
      keyframes2.offset = times.map((t) => progress(from, to, t));
    }
    if (transform.every((t) => t === transform[0])) {
      commit(valuesAt(from, settled));
      keyframes2 = null;
    }
    return create(keyframes2, {
      ...options,
      duration: to - from,
      easing: easing || "linear"
    });
  };
  const wakeIn = (delay2) => {
    const at = time.now() + delay2;
    if (at < wakeAt) {
      clearTimeout(wake);
      wakeAt = at;
      wake = setTimeout(() => {
        wakeAt = Infinity;
        group.schedule(false);
      }, delay2);
    }
  };
  const animate = (now2) => {
    let end2 = now2;
    let cycle = 0;
    let cycleStart = 0;
    const moving = [];
    const looping = [];
    const ends = /* @__PURE__ */ new Set();
    byKey.clear();
    built = /* @__PURE__ */ new Map();
    for (const track of tracks) {
      byKey.set(track.name, track);
      const [trackEnd, trackCycle] = track.timing();
      const isHeld = trackEnd === Infinity;
      built.set(track, [track.at(now2), track.speed, isHeld]);
      if (isHeld)
        continue;
      if (track.speed < 0)
        return;
      if (trackCycle) {
        if (cycle) {
          const phase = (trackEnd - cycleStart) / trackCycle;
          if (Math.abs(trackCycle - cycle) > 1 || Math.abs(phase - Math.round(phase)) * cycle > 1) {
            return;
          }
        } else {
          cycle = trackCycle;
          cycleStart = trackEnd;
        }
        looping.push(track);
      } else {
        ends.add(trackEnd);
      }
      moving.push(track);
      end2 = Math.max(end2, trackEnd);
    }
    statics = {};
    keys = transformPropOrder.filter((key) => {
      if (byKey.has(key))
        return true;
      const value = statics[key] = read(owner, key);
      return value !== void 0 && !isDefaultTransform(key, value);
    });
    stop(false);
    const tween = !cycle && getTween(moving);
    try {
      if (end2 > now2) {
        let easing;
        if (tween && tween[1] > now2) {
          const [from, to, ease2] = tween;
          if (from - now2 > buildAhead) {
            moving.forEach((track) => track.sync());
            wakeIn(buildAt = from - now2 - buildAhead);
            return true;
          }
          easing = typeof ease2 === "string" ? ease2 : ease2 ? trace(ease2, countSamples(from, to)) : getEasing(moving, from, to, []);
          easing && add(run(moving, from, to, easing, {
            fill: "both",
            endDelay: end2 - to
          }), from - now2, end2 - from);
        }
        easing || add(run(moving, now2, end2), 0, end2 - now2);
        ends.forEach((trackEnd) => trackEnd < end2 - 1 && add(create(null, { duration: trackEnd - now2 }), 0, trackEnd - now2));
      }
      if (cycle) {
        const from = cycleStart + Math.floor((end2 - cycleStart) / cycle) * cycle;
        add(run(looping, from, from + cycle, void 0, {
          iterations: Infinity,
          iterationStart: (end2 - from) / cycle,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, end2), end2 - now2);
      }
    } catch {
      return;
    }
    segments.length || stop();
    return true;
  };
  const retime = (now2, isSeek) => {
    let elapsed;
    let rate = 0;
    for (const track of tracks) {
      const state = built.get(track);
      if (!state)
        return false;
      const [builtTime, builtSpeed, wasHeld] = state;
      const trackTime = track.at(now2);
      const isHeld = track.timing()[0] === Infinity;
      if (wasHeld) {
        if (isHeld && (trackTime === builtTime || !segments.length)) {
          continue;
        }
        return false;
      }
      const trackElapsed = (trackTime - builtTime) / builtSpeed;
      const trackRate = isHeld ? 0 : track.speed / builtSpeed;
      if (elapsed === void 0) {
        elapsed = trackElapsed;
        rate = trackRate;
      } else if (Math.abs(trackElapsed - elapsed) > 1 || trackRate !== rate) {
        return false;
      }
    }
    if (elapsed === void 0)
      return true;
    if (!segments.length) {
      if (buildAt === void 0 || isSeek && rate)
        return false;
      if (rate) {
        const delay2 = (buildAt - elapsed) / rate;
        if (delay2 < 1)
          return false;
        wakeIn(delay2);
      }
      return true;
    }
    for (const { offset, end: end2, isDone } of segments) {
      const local = elapsed - offset;
      if (end2 < Infinity && (isDone ? local < end2 - 1 : local < 0 && (isSeek || offset <= 0) || local >= end2)) {
        return false;
      }
    }
    for (const { animation, offset, isDone } of segments) {
      if (isDone)
        continue;
      const local = elapsed - offset;
      if (rate && animation.updatePlaybackRate && animation.playState === "running" && Math.abs(Number(animation.currentTime) - local) < 20) {
        animation.playbackRate !== rate && animation.updatePlaybackRate(rate);
      } else if (rate) {
        animation.playbackRate !== rate && (animation.playbackRate = rate);
        animation.startTime = now2 - local / rate;
      } else {
        animation.startTime = null;
        animation.currentTime = local;
      }
    }
    return true;
  };
  const end = () => {
    if (tracks.size)
      return false;
    isEnded = true;
    getGroup(element) === group && transformGroups.delete(element);
    group.isJS || stop();
    return true;
  };
  const build = () => {
    const now2 = time.now();
    if (!group.isJS) {
      group.isFinishing = true;
      tracks.forEach((track) => {
        const [trackEnd, trackCycle] = track.timing();
        if (track.state === "running" && track.speed > 0 && !trackCycle && trackEnd <= now2 + 1) {
          track.complete();
          statics[track.name] = read(owner, track.name);
          built.has(track) || (needsBuild = true);
        }
      });
      group.isFinishing = false;
    }
    isScheduled2 = false;
    if (isEnded)
      return;
    tracks.forEach((track) => hasEnded(track) && tracks.delete(track));
    if (end())
      return;
    for (const track of tracks) {
      if (!track.canAccelerate)
        return group.demote(true);
    }
    if (group.isJS) {
      group.isJS = false;
      needsBuild = true;
      tracks.forEach((track) => track.stopJS());
    }
    const shouldBuild = needsBuild;
    const churned = hasChurned;
    needsBuild = hasChurned = false;
    if (shouldBuild || !retime(now2, churned)) {
      if (churned) {
        if (now2 - lastChurn < churnWindow)
          return group.demote();
        lastChurn = now2;
      }
      if (!animate(now2))
        return group.demote();
    } else if (buildAt !== void 0 && !churned) {
      return;
    }
    tracks.forEach((track) => track.timing()[0] === Infinity && track.sync());
  };
  const group = {
    tracks,
    isJS: false,
    isFinishing: false,
    schedule(build_, isChurn) {
      if (isEnded)
        return;
      needsBuild || (needsBuild = build_);
      hasChurned || (hasChurned = !!isChurn);
      if (!isScheduled2) {
        isScheduled2 = true;
        frameData.isProcessing ? frame.render(build, false, true) : buildSoon(build);
      }
    },
    /**
     * End the group now, rather than when it next builds, so the
     * element's transform is the caller's again as soon as its last
     * animation is stopped.
     */
    release(track) {
      hasEnded(track) && tracks.delete(track);
      end() || group.schedule(true);
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (group.isJS)
        return;
      for (const key in statics) {
        if (read(owner, key) !== statics[key] && !has(key)) {
          return group.schedule(true, true);
        }
      }
    },
    demote(canReturn) {
      if (group.isJS || isEnded)
        return;
      tracks.forEach((track) => {
        track.isAccelerated() && track.sync();
        canReturn || (track.canAccelerate = false);
      });
      group.isJS = true;
      built = /* @__PURE__ */ new Map();
      stop();
      tracks.forEach((track) => track.state === "running" && track.js?.start());
      return true;
    }
  };
  transformGroups.set(element, group);
  return group;
}

// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var AsyncMotionValueAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = time.now();
    const { keyframes: keyframes2, name, motionValue: motionValue2, element } = options;
    const optionsWithDefaults = options;
    optionsWithDefaults.autoplay ?? (optionsWithDefaults.autoplay = true);
    optionsWithDefaults.delay ?? (optionsWithDefaults.delay = 0);
    optionsWithDefaults.type ?? (optionsWithDefaults.type = "keyframes");
    optionsWithDefaults.repeat ?? (optionsWithDefaults.repeat = 0);
    optionsWithDefaults.repeatDelay ?? (optionsWithDefaults.repeatDelay = 0);
    optionsWithDefaults.repeatType ?? (optionsWithDefaults.repeatType = "loop");
    const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
    this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
    this.keyframeResolver = void 0;
    const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
    this.resolvedAt = time.now();
    const canAnimateValue = canAnimate(keyframes2, name, type, velocity);
    if (!canAnimateValue) {
      if (MotionGlobalConfig.instantAnimations || !delay2) {
        onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
      }
      keyframes2[0] = keyframes2[keyframes2.length - 1];
      makeAnimationInstant(options);
      options.repeat = 0;
    }
    const { onComplete } = options;
    options.finalKeyframe = finalKeyframe;
    options.keyframes = keyframes2;
    options.onComplete = () => {
      onComplete?.();
      this.notifyFinished();
    };
    const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(options);
    const isGroupedTransform = !useWaapi && canGroupTransform(options);
    if (sync && (useWaapi || isGroupedTransform || this.resolvedAt !== this.createdAt)) {
      options.startTime ?? (options.startTime = resolveStartTime(this.createdAt, this.resolvedAt));
    }
    let animation;
    if (useWaapi) {
      options.element = options.motionValue?.owner?.current;
      try {
        animation = new NativeAnimationExtended(options);
      } catch {
        animation = new JSAnimation(options);
      }
    } else if (isGroupedTransform) {
      animation = new TransformAnimation(options);
    } else {
      animation = new JSAnimation(options);
    }
    if (this.pendingTimeline) {
      this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = void 0;
    }
    this._animation = animation;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
  /**
   * The value now, if the animation runs on the compositor.
   */
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      flushKeyframeResolvers();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(newTime) {
    this.animation.time = newTime;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(newSpeed) {
    this.animation.speed = newSpeed;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(timeline2) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(timeline2);
    } else {
      this.pendingTimeline = timeline2;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation?.cancel();
    this.keyframeResolver?.cancel();
  }
};

// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
  const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
  const numChildren = children.size;
  const maxStaggerDuration = (numChildren - 1) * staggerChildren;
  const delayIsFunction = typeof delayChildren === "function";
  return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

// node_modules/motion-dom/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(init4, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev) {
        this.dirty();
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init4);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    var _a;
    if (eventName === "change")
      return this.onChangeSubscribe(callback);
    return ((_a = this.events)[eventName] || (_a[eventName] = new SubscriptionManager())).add(callback);
  }
  onChangeSubscribe(callback) {
    const { events } = this;
    if (!events.change && !this.changeSubscriber) {
      this.changeSubscriber = callback;
    } else {
      if (!events.change) {
        events.change = new SubscriptionManager();
        events.change.add(this.changeSubscriber);
        this.changeSubscriber = void 0;
      }
      events.change.add(callback);
    }
    return () => {
      if (this.changeSubscriber === callback) {
        this.changeSubscriber = void 0;
      } else {
        events.change?.remove(callback);
      }
      this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    frame.read(() => {
      if (!this.changeSubscriber && !this.events.change?.getSize()) {
        this.stop();
      }
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v) {
    this.passiveEffect ? this.passiveEffect(v, this.updateAndNotify) : this.updateAndNotify(v);
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    if (endAnimation) {
      this.updatedAt = time.now();
      this.stop();
    }
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    this.stopPassiveEffect?.();
  }
  dirty() {
    const { current, changeSubscriber } = this;
    if (changeSubscriber) {
      changeSubscriber(current);
    } else {
      this.events.change?.notify(current);
    }
  }
  addDependent(dependent) {
    (this.dependents || (this.dependents = /* @__PURE__ */ new Set())).add(dependent);
  }
  removeDependent(dependent) {
    this.dependents?.delete(dependent);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    collectMotionValues.current?.push(this);
    const sampled = this.animation?.liveValue?.();
    return sampled === void 0 ? this.current : sampled;
  }
  /**
   * The value as last set. Unlike get(), this doesn't read an animation
   * running on the compositor, which renders the value itself.
   */
  getCurrent() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(startAnimation) {
    return new Promise((resolve) => this.run(startAnimation, resolve));
  }
  /**
   * As start(), without making a promise, for animations started
   * internally, which complete through their own controls.
   */
  run(startAnimation, onComplete) {
    this.stop();
    this.hasAnimated = true;
    let isComplete = false;
    let animation;
    animation = startAnimation(() => {
      isComplete = true;
      this.events.animationComplete?.notify();
      if (this.animation === animation)
        this.animation = void 0;
      onComplete?.();
    });
    if (!isComplete)
      this.animation = animation;
    this.events.animationStart?.notify();
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.events.animationCancel?.notify();
    }
    this.animation = void 0;
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    this.stopPassiveEffect?.();
  }
};
function motionValue(init4, options) {
  return new MotionValue(init4, options);
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function resolveTransition(transition, parentTransition) {
  if (transition?.inherit && parentTransition) {
    const { inherit: _, ...rest } = transition;
    return { ...parentTransition, ...rest };
  }
  return transition;
}

// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
  if (valueTransition !== transition) {
    return resolveTransition(valueTransition, transition);
  }
  return valueTransition;
}

// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
  "out",
  "mixer"
]);
function isTransitionDefined(transition) {
  for (const key in transition) {
    if (!orchestrationKeys.has(key))
      return true;
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  const options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element,
    hasOnUpdate: !!valueTransition.onUpdate
  };
  if (!isTransitionDefined(valueTransition)) {
    Object.assign(options, getDefaultTransition(name, options));
  }
  options.duration && (options.duration = secondsToMilliseconds(options.duration));
  options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    makeAnimationInstant(options);
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
    shouldSkip = true;
    makeAnimationInstant(options);
    options.delay = 0;
  }
  options.allowFlatten = !valueTransition.type && !valueTransition.ease;
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};

// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 ?? token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  process.env.NODE_ENV !== "production" && invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement?.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  const resolveFunction = (def) => typeof def === "function" ? def(custom !== void 0 ? custom : props.custom, ...getValueState(visualElement)) : def;
  definition = resolveFunction(definition);
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  return resolveFunction(definition);
}

// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  return resolveVariantFromProps(visualElement.getProps(), definition, custom, visualElement);
}
var getTypeCustom = (visualElement, type) => type === "exit" ? visualElement.presenceContext?.custom : void 0;

// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);

// node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/motion-dom/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function resolveFinalValueInKeyframes(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  } else if (!willChange && MotionGlobalConfig.WillChange) {
    const newWillChange = new MotionGlobalConfig.WillChange("auto");
    visualElement.addValue("willChange", newWillChange);
    newWillChange.add(key);
  }
}

// node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataAttribute = "data-framer-appear-id";

// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
var isBrowser2 = typeof window !== "undefined";
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = key in protectedKeys && !needsAnimating[key];
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition, transitionEnd, ...target } = targetAndTransition;
  const defaultTransition = visualElement.getDefaultTransition();
  transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
  const reduceMotion = transition?.reduceMotion;
  const skipAnimations = transition?.skipAnimations;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState?.getState()[type];
  const path = transition?.path;
  if (path) {
    path.animateValues ? path.animateValues((key) => visualElement.getValue(key, visualElement.latestValues[key] ?? 0), target, transition, delay2, animations2) : path.animateVisualElement?.(visualElement, target, transition, delay2, animations2);
  }
  for (const key in target) {
    const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(animationTypeState?.out[key] || transition || {}, key)
    };
    if (skipAnimations)
      valueTransition.skipAnimations = true;
    const currentValue = value.get();
    if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
      frame.update(() => value.set(valueTarget));
      continue;
    }
    let isHandoff = false;
    if (isBrowser2 && window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
    value.run(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    const applyTransitionEnd = () => frame.update(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
    if (animations2.length) {
      Promise.all(animations2).then(applyTransitionEnd);
    } else {
      applyTransitionEnd();
    }
  }
  return animations2;
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, getTypeCustom(visualElement, options.type));
  const transition = options.transitionOverride || (resolved?.transition ?? (visualElement.getDefaultTransition() || {}));
  const getAnimation = () => Promise.all(resolved ? animateTarget(visualElement, resolved, options) : []);
  const getChildAnimations = (delay2 = 0) => {
    const { variantChildren } = visualElement;
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    const animations2 = [];
    variantChildren?.forEach((child) => {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(variantChildren, child, delayChildren, staggerChildren, staggerDirection)
      }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations2);
  };
  const { when } = transition;
  return when ? when === "beforeChildren" ? getAnimation().then(() => getChildAnimations()) : getChildAnimations().then(getAnimation) : Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  const animation = Array.isArray(definition) ? Promise.all(definition.map((variant) => animateVariant(visualElement, variant, options))) : typeof definition === "string" ? animateVariant(visualElement, definition, options) : Promise.all(animateTarget(visualElement, resolveVariant(visualElement, definition, options.custom), options));
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/motion-dom/dist/es/value/types/auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/motion-dom/dist/es/value/types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && hasComplexValues(keyframe)) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      if (unresolvedKeyframes[noneIndex] === animatableTemplate)
        continue;
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  /**
   * Passes isAsync to the base constructor rather than setting it as a
   * class field, which would compile to a constructor that spreads
   * `arguments` into super(). That spread is slow in the interpreter,
   * and animate() constructs one resolver per value.
   */
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  /**
   * Keyframes that don't need reading from the DOM, or measuring,
   * resolve straight away rather than in the frame loop's batched read.
   */
  scheduleResolve() {
    if (this.canReadNow()) {
      this.readKeyframes();
      if (!this.needsMeasurement)
        return this.complete();
    }
    super.scheduleResolve();
  }
  canReadNow() {
    const { unresolvedKeyframes, element, motionValue: motionValue2 } = this;
    const origin = unresolvedKeyframes[0] ?? motionValue2?.get();
    if (!element?.current || origin === void 0)
      return false;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (containsCSSVariable(i ? unresolvedKeyframes[i] : origin)) {
        return false;
      }
    }
    return true;
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element?.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    if (typeof origin === "number" && typeof target === "number")
      return;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    const originHasVar = containsCSSVariable(origin);
    const targetHasVar = containsCSSVariable(target);
    if (originHasVar !== targetHasVar && positionalValues[name]) {
      this.needsMeasurement = true;
      return;
    }
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else if (positionalValues[name]) {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measure() {
    const { element, name } = this;
    return positionalValues[name](window.getComputedStyle(element.current), () => element.measureViewportBox());
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element?.current)
      return;
    if (name === "height")
      this.suspendedScrollY = window.pageYOffset;
    this.measuredOrigin = this.measure();
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      this.motionValue?.jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    const { element, unresolvedKeyframes } = this;
    if (!element?.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = this.measure();
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/motion-dom/dist/es/utils/border-radius.mjs
var cornerRadiusProps = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];

// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function isHTMLElement(element) {
  return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}

// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}

// node_modules/motion-dom/dist/es/scope/active.mjs
var activeScope = {};
function addToScope(cleanup) {
  activeScope.current?.add(cleanup);
  return cleanup;
}
var bindToScope = (callback) => activeScope.current ? activeScope.current.bind(callback) : callback;

// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  if (elementOrSelector == null) {
    return [];
  }
  if (elementOrSelector instanceof EventTarget) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    const root = scope ? scope.current : activeScope.current?.root || document;
    const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector).filter((element) => element != null);
}

// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
  return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = `${-offset}`;
  attrs[keys.array] = `${length} ${spacing}`;
}

// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var cssStyleProperties = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate, styleProp) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style } = state;
  for (const key of cssStyleProperties) {
    if (attrs[key] !== void 0) {
      style[key] = attrs[key];
      delete attrs[key];
    }
  }
  if (style.transform || attrs.transformOrigin) {
    style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
    delete attrs.transformOrigin;
  }
  if (style.transform) {
    style.transformBox = styleProp?.transformBox ?? "fill-box";
    delete attrs.transformBox;
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
}
var angleTransforms = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY"
];
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || hasDistortingTransform(values);
}
function hasDistortingTransform(values) {
  return values.z || values.rotate || values.rotateX || values.rotateY || values.rotateZ || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (node.options.visualElement?.props.style?.display === "contents") {
      continue;
    }
    if (isSharedTransition === true && node.options.layoutScroll && node.scroll && node !== node.root) {
      translateAxis(box.x, -node.scroll.offset.x);
      translateAxis(box.y, -node.scroll.offset.y);
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && (isSharedTransition.path?.[i] || isSharedTransition) !== node && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues, node.layout?.layoutBox);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min += distance2;
  axis.max += distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
  if (typeof value === "string") {
    return parseFloat(value) / 100 * (axis.max - axis.min);
  }
  return value;
}
function transformBox(box, transform, sourceBox) {
  const resolveBox = sourceBox ?? box;
  transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}

// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}
var measureDocumentScroll = () => ({
  x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
  y: document.documentElement.scrollTop || document.body?.scrollTop || 0
});

// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.run(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};

// node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
  value: null,
  addProjectionMetrics: null,
  countProjection: void 0
};

// node_modules/motion-dom/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  callback = bindToScope(callback);
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return addToScope(() => cancelFrame(checkElapsed));
}

// node_modules/motion-dom/dist/es/utils/is-ref-object.mjs
function isRefObject(ref2) {
  return ref2 && typeof ref2 === "object" && Object.prototype.hasOwnProperty.call(ref2, "current");
}

// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}

// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  return isMotionValue(value) ? value.get() : value;
}

// node_modules/motion-dom/dist/es/value/utils/as-number.mjs
var asNumber = (v) => typeof v === "number" ? v : parseFloat(v);

// node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var numBorders = cornerRadiusProps.length;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = cornerRadiusProps[i];
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  for (let i = 0; i < angleTransforms.length; i++) {
    const key = angleTransforms[i];
    if (follow[key] || lead[key]) {
      target[key] = mixNumber(follow[key] || 0, lead[key] || 0, progress2);
    }
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p2) => {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(progress(min, max, p2));
  };
}

// node_modules/motion-dom/dist/es/projection/animation/layout-velocity.mjs
var pointToProgressVelocity = (tx, ty, { x, y }) => {
  const lengthSquared = tx * tx + ty * ty;
  return lengthSquared < 1 ? 0 : -1e3 * (x * tx + y * ty) / lengthSquared;
};
var resolveAutoMass = (t, size = 300) => {
  const mass = clamp3(0.25, 2, size / 300);
  const { stiffness, damping } = getSpringOptions({
    ...t,
    duration: t.duration && secondsToMilliseconds(t.duration)
  });
  return { ...t, stiffness, damping: damping * Math.sqrt(mass), mass };
};

// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear2(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin?.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin?.originY);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = anchorPoint + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
  calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
  calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = layout2.min - anchorPoint;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent, anchor) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox?.x, sourceBox?.x);
  removeAxisTransforms(box.y, transforms, yKeys, originBox?.y, sourceBox?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/round.mjs
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member === node || member === this.lead || member === this.prevLead)
        continue;
      const inst = member.instance;
      if ((!inst || inst.isConnected === false) && !member.snapshot) {
        removeItem(this.members, member);
        member.unmount();
      }
    }
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead)
      this.prevLead = void 0;
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead)
        this.promote(prevLead);
    }
  }
  relegate(node) {
    for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false && member.instance?.isConnected !== false) {
        this.promote(member);
        return true;
      }
    }
    return false;
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.updateSnapshot();
      node.scheduleRender();
      const { layoutDependency: prevDep } = prevLead.options;
      const { layoutDependency: nextDep } = node.options;
      if (prevDep === void 0 || prevDep !== nextDep) {
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity)
          prevLead.preserveOpacity = true;
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root?.isUpdating)
          node.isLayoutDirty = true;
      }
      if (node.options.crossfade === false)
        prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((member) => {
      member.options.onExitComplete?.();
      member.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((member) => member.instance && member.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot)
      this.lead.snapshot = void 0;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/motion-dom/dist/es/projection/styles/default-scale-correctors.mjs
var defaultScaleCorrectors = {
  borderRadius: /* @__PURE__ */ Object.assign({}, correctBorderRadius, {
    applyTo: /* @__PURE__ */ cornerRadiusProps.slice()
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  let angles = "";
  if (latestTransform) {
    const { transformPerspective } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    for (let i = 0; i < angleTransforms.length; i++) {
      const key = angleTransforms[i];
      const value = latestTransform[key];
      if (value)
        angles += `${key}(${value}deg) `;
      if (!i && latestTransform.pathRotation)
        angles += `rotate(${latestTransform.pathRotation}deg) `;
    }
  }
  if (angles) {
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    transform += angles;
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
  } else if (delta.x.scale !== 1 || delta.y.scale !== 1) {
    transform += `scale(${delta.x.scale}, ${delta.y.scale})`;
  } else if (!transform && (treeScale.x !== 1 || treeScale.y !== 1)) {
    transform = "scale(1, 1)";
  }
  return transform || "none";
}

// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/motion-dom/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var distortingTransforms = ["z", "skew", "skewZ"];
var animationTarget = 1e3;
var id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
var demoteTransforms = (node) => node.instance && transformGroups.get(node.instance)?.demote() && node.resetSkewAndRotation();
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll: measureScroll2, checkIsScrollRoot, resetTransform }) {
  Object.assign(scaleCorrectors, {
    ...defaultScaleCorrectors,
    ...scaleCorrectors
  });
  return class ProjectionNode {
    /**
     * Create the projection node of a `motion` component's VisualElement,
     * from its props. This runs while the component renders, before its
     * children. It's here rather than in the component so React
     * bundles only include it with the features that supply a
     * ProjectionNode. Vanilla bundles that use the projection node
     * (drag(), animateLayout()) include it too, as a class static
     * can't be tree-shaken.
     */
    static create(visualElement, props, initialPromotionConfig) {
      const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
      const projection = visualElement.projection = new this(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
      projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor
      });
      const lead = projection.getStack()?.lead;
      if (lead && !projection.root.isUpdateBlocked()) {
        lead.willUpdate();
        lead.scheduleCheckAfterUnmount();
      }
    }
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        statsBuffer.countProjection?.();
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      this.eventHandlers.get(name)?.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent?.children.add(this);
      if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay?.();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      this.addLayoutListener();
    }
    /**
     * Only register the layout animation handler if this node requires
     * layout animation. This is called on mount, and again whenever options
     * change, as `layout` or `layoutId` may be enabled after mount.
     */
    addLayoutListener() {
      const { layoutId, layout: layout2, visualElement, animate } = this.options;
      if (!this.instance || this.hasLayoutListener || animate === false || !visualElement || !(layoutId || layout2))
        return;
      this.hasLayoutListener = true;
      this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0;
          this.relativeTarget = void 0;
          return;
        }
        const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
        const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
        const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
        const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
        if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
          if (this.resumeFrom) {
            this.resumingFrom = this.resumeFrom;
            this.resumingFrom.resumingFrom = void 0;
          }
          const animationOptions = {
            ...getValueTransition(layoutTransition, "layout"),
            onPlay: onLayoutAnimationStart,
            onComplete: onLayoutAnimationComplete
          };
          if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
            animationOptions.delay = 0;
            animationOptions.type = false;
          }
          this.startAnimation(animationOptions);
          this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
        } else {
          if (!hasLayoutChanged) {
            finishAnimation(this);
          }
          this.isLead() && this.options.onExitComplete?.();
        }
        this.targetLayout = newLayout;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      this.getStack()?.remove(this);
      this.parent?.children.delete(this);
      this.instance = void 0;
      this.eventHandlers.clear();
      this.hasLayoutListener = false;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes?.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete?.();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      demoteTransforms(this);
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        demoteTransforms(node);
        if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
          node.isLayoutDirty = true;
        }
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
        if (node.isAnimationBlocked) {
          node.dragSnapshot || (node.dragSnapshot = node.measure());
          this.dragAncestor = node;
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        const wasBlockedByResize = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (wasBlockedByResize) {
          this.nodes.forEach(forceLayoutMeasure);
        }
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(ensureDraggedNodesSnapshotted);
        this.nodes.forEach(syncRelativeLayout);
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp3(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach((stack, layoutId) => stack.members.length ? stack.removeLeadSnapshot() : this.sharedNodes.delete(layoutId));
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = void 0;
      }
      if (this.snapshot) {
        const { visualElement } = this.options;
        const isRunning = this.currentAnimation?.state === "running";
        const edges = isRunning && this.animationEdges;
        if (isRunning && this.relativeTarget) {
          this.snapshot.relativeVelocity = this.relativeVelocity?.slice() || [];
        }
        const progress2 = edges && this.motionValue?.getVelocity() || 0;
        const velocity = [0, 1, 2, 3, 4, 5].map((i) => (i < 4 ? edges && (this.edgeValues ? this.edgeVelocity(i) : -edges[i] * progress2 / 1e3) : visualElement?.getValue(i < 5 ? "x" : "y")?.getVelocity()) || 0);
        if (velocity.some(Boolean))
          this.snapshot.velocity = velocity;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      if (!this.layoutCorrected)
        this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement?.notify("LayoutMeasure", this.layout.layoutBox, prevLayout?.layoutBox);
    }
    updateScroll(phase = "measure") {
      const { scroll, instance } = this;
      const { animationId } = this.root;
      if (this.options.layoutScroll && instance && !(scroll && scroll.animationId === animationId && scroll.phase === phase)) {
        const isRoot = checkIsScrollRoot(instance);
        this.scroll = {
          animationId,
          phase,
          isRoot,
          offset: measureScroll2(instance),
          wasRoot: scroll ? scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      isResetRequested && demoteTransforms(this);
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false, output, skipOwnTransform, start = 0) {
      const withTransforms = output || createBox();
      copyBoxInto(withTransforms, box);
      for (let i = start; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          translateAxis(withTransforms.x, -node.scroll.offset.x);
          translateAxis(withTransforms.y, -node.scroll.offset.y);
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
      }
      if (!skipOwnTransform && hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!hasTransform(node.latestValues))
          continue;
        let sourceBox;
        if (node.instance) {
          hasScale(node.latestValues) && node.updateSnapshot();
          sourceBox = createBox();
          copyBoxInto(sourceBox, node.measurePageBox());
        }
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
      this.addLayoutListener();
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      const relativeParent = this.getClosestProjectingParent();
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
          this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.applyTransform(this.layout.layoutBox, false, this.target, true);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        if (this.options.layoutAnchor !== false && relativeParent && (!relativeParent.resumingFrom === !this.resumingFrom || /**
         * Shared layout animations within a layoutRoot
         * animate relative to it.
         */
        relativeParent.options.layoutRoot && !relativeParent.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      statsBuffer.countProjection?.(1);
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(relativeParent, layout2, parentLayout) {
      this.relativeParent = relativeParent;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = createBox();
      this.relativeTargetOrigin = createBox();
      calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared && (lead.relativeTarget && !lead.relativeParent.resumingFrom ? lead.relativeParent : true));
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      statsBuffer.countProjection?.(2);
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll2) {
        this.getStack()?.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = snapshot?.source !== this.layout?.source;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      const interpolate4 = pathFn?.interpolateProjection(delta);
      const box = this.layout?.layoutBox;
      let edges = box && [box.x.min, box.x.max, box.y.min, box.y.max].map((edge, i) => {
        const { translate, scale: scale2, originPoint } = delta[i < 2 ? "x" : "y"];
        return (edge - originPoint) * (scale2 - 1) + translate;
      });
      if (!edges?.every(isFinite))
        edges = void 0;
      this.animationEdges = edges;
      this.edgeValues = this.startVelocity = this.impulse = this.relativeVelocity = this.relativeStart = void 0;
      const velocity = snapshot?.velocity;
      const relative = snapshot?.relativeVelocity || velocity;
      if (relative?.slice(0, 4).some(Boolean) && this.getClosestProjectingParent()) {
        this.relativeStart = relative;
      }
      if (velocity && edges) {
        const v = velocity.slice(0, 4).map((edge, i) => edge + (isSharedLayoutAnimation ? velocity[4 + (i >> 1)] : 0));
        if (v.some(Boolean)) {
          this.startVelocity = interpolate4 ? pointToProgressVelocity(delta.x.translate, delta.y.translate, { x: (v[0] + v[1]) / 2, y: (v[2] + v[3]) / 2 }) : v;
        }
      }
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        const point = interpolate4?.(progress2);
        const values = this.edgeValues;
        for (let i = 0; i < 2; i++) {
          const axis = i ? "y" : "x";
          values ? edgesToDelta(targetDelta[axis], delta[axis], this.layout.layoutBox[axis], values[i * 2], values[i * 2 + 1]) : mixAxisDeltaLinear(targetDelta[axis], delta[axis], progress2);
        }
        if (point) {
          targetDelta.x.translate = point.x;
          targetDelta.y.translate = point.y;
        }
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
          const from = this.relativeTargetOrigin;
          const to = relativeLayout;
          mixBox(this.relativeTarget, from, to, progress2);
          if (this.isSpringLayout) {
            const box2 = this.relativeTarget;
            const impulse = this.impulse || 0;
            const start = this.relativeStart;
            const now2 = time.now();
            const dt = (now2 - this.relativeTime) / 1e3;
            this.relativeTime = now2;
            const speeds = this.relativeVelocity || (this.relativeVelocity = [0, 0, 0, 0]);
            for (let i = 0; i < 4; i++) {
              const axis = i < 2 ? "x" : "y";
              const edge = i & 1 ? "max" : "min";
              if (start)
                box2[axis][edge] += start[i] * impulse;
              if (prevRelativeTarget && dt > 0) {
                speeds[i] = (box2[axis][edge] - prevRelativeTarget[axis][edge]) / dt;
              }
            }
          }
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        if (point?.rotate !== void 0) {
          if (!this.animationValues)
            this.animationValues = mixedValues;
          this.animationValues.pathRotation = point.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      const isSpring = this.isSpringLayout = options.type === "spring";
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.resumingFrom)
        this.resumingFrom.edgeValues = void 0;
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.motionValue || (this.motionValue = motionValue(0));
        this.motionValue.jump(0, false);
        const velocity = this.startVelocity;
        this.startVelocity = void 0;
        let transition = options;
        let mainVelocity = 0;
        if (isSpring) {
          if (options.mass === "auto") {
            const box = this.layout?.layoutBox;
            transition = resolveAutoMass(options, box && Math.sqrt(calcLength(box.x) * calcLength(box.y)));
          }
          const relative = this.relativeStart;
          if ((velocity || relative) && !options.repeat) {
            if (typeof velocity === "number") {
              mainVelocity = velocity;
            } else {
              const edges = velocity && this.animationEdges;
              transition = {
                ...transition,
                type: (o) => {
                  const springs = [
                    o.velocity,
                    ...velocity || []
                  ].map((v, i) => spring({
                    ...o,
                    keyframes: i ? [edges[i - 1], 0] : o.keyframes,
                    velocity: v
                  }));
                  const count = springs.length;
                  relative && springs.push(spring({
                    ...o,
                    keyframes: [0, 0],
                    velocity: 1e3,
                    restDelta: 0.5,
                    restSpeed: 5
                  }));
                  let time2 = 0;
                  const values = [];
                  const generator = {
                    calculatedDuration: null,
                    next: (t) => {
                      time2 = t;
                      const state = springs[0].next(t);
                      let done = state.done;
                      for (let i = 1; i < springs.length; i++) {
                        const { value, done: rest } = springs[i].next(t);
                        if (i < count) {
                          values[i - 1] = value;
                        } else {
                          this.impulse = value / 1e3;
                        }
                        done = done && rest;
                      }
                      if (edges)
                        this.edgeValues = values;
                      state.done = done;
                      return state;
                    }
                  };
                  generator.calculatedDuration = calcGeneratorDuration(generator);
                  generator.next(0);
                  this.edgeVelocity = (i) => springs[i + 1].velocity(time2);
                  return generator;
                }
              };
            }
          }
        }
        const main = animateSingleValue(this.motionValue, [0, 1e3], {
          ...transition,
          velocity: mainVelocity,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        this.currentAnimation = main;
        notifyLayoutAnimationStart(this.currentAnimation, this);
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = this.edgeValues = this.edgeVelocity = this.impulse = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.edgeValues = this.impulse = void 0;
        this.mixTargetDelta?.(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      const { targetWithTransforms, layout: layout2, latestValues } = lead;
      let { target } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        const { layoutBox } = this.layout;
        const leadTarget = target;
        target = this.target || createBox();
        alignAxis(target.x, leadTarget.x, layoutBox.x);
        alignAxis(target.y, leadTarget.y, layoutBox.y);
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config3 = node.options.initialPromotionConfig;
      node.promote({
        transition: config3?.transition,
        preserveFollowOpacity: config3?.shouldPreserveFollowOpacity ? config3.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      this.getStack()?.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      return this.getStack()?.relegate(this) || false;
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      const { latestValues } = visualElement;
      if (!hasDistortingTransform(latestValues))
        return;
      const resetValues = {};
      for (let i = 0; i < distortingTransforms.length; i++) {
        resetDistortingTransform(distortingTransforms[i], visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < angleTransforms.length; i++) {
        resetDistortingTransform(angleTransforms[i], visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      const lead = this.getLead();
      if (!this.isVisible && lead !== this) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId || this.needsShow) {
          this.needsShow = false;
          targetStyle.visibility = "";
          targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform = transformTemplate(valuesToRender, transform);
      }
      targetStyle.transform = transform;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
  followDraggedAncestor(node);
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    const resizeSnapshot = (box, to) => {
      if (animationType === "size") {
        eachAxis((axis) => {
          const length = calcLength(box[axis]);
          box[axis].min = to[axis].min;
          box[axis].max = box[axis].min + length;
        });
      } else if (animationType === "x" || animationType === "y") {
        const snapAxis = animationType === "x" ? "y" : "x";
        copyAxisInto(box[snapAxis], to[snapAxis]);
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const length = calcLength(to[axis]);
          box[axis].max = box[axis].min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
    };
    const snapshotBox = isShared ? snapshot.measuredBox : snapshot.layoutBox;
    resizeSnapshot(snapshotBox, layout2);
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    calcBoxDelta(visualDelta, isShared ? node.applyTransform(measuredLayout, true) : layout2, snapshotBox);
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    const relativeParent = node.getClosestProjectingParent();
    if (!isShared || relativeParent?.options.layoutRoot && node.resumeFrom?.path.includes(relativeParent)) {
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const anchor = node.options.layoutAnchor || void 0;
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, isShared ? node.resumeFrom.applyTransform(snapshot.layoutBox, true, void 0, true, relativeParent.depth + 1) : snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
          isShared && resizeSnapshot(relativeSnapshot, relativeLayout);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    node.options.onExitComplete?.();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  statsBuffer.countProjection?.(0);
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function forceLayoutMeasure(node) {
  node.isLayoutDirty = true;
  node.updateLayout();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function followDraggedAncestor(node) {
  const { snapshot, dragAncestor } = node;
  const to = dragAncestor?.isAnimationBlocked && dragAncestor.layout;
  if (!snapshot || !to || node.resumeFrom || node.isAnimationBlocked)
    return;
  const from = dragAncestor.dragSnapshot;
  eachAxis((axis) => translateAxis(snapshot.layoutBox[axis], to.layoutBox[axis].min - from.layoutBox[axis].min));
}
function ensureDraggedNodesSnapshotted(node) {
  if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
    node.snapshot = node.dragSnapshot || node.layout;
    node.isLayoutDirty = true;
  }
}
function syncRelativeLayout(node) {
  if (node.relativeTarget && node.relativeParent?.isLayoutDirty) {
    if (node.currentAnimation) {
      node.isLayoutDirty = true;
    } else {
      node.targetDelta = void 0;
      node.removeRelativeTarget();
    }
  }
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement?.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function edgesToDelta(output, delta, layout2, min, max) {
  const length = layout2.max - layout2.min;
  const scale2 = length ? Math.max(0, (length + max - min) / length) : 1;
  const origin = output.originPoint = delta.originPoint;
  output.origin = delta.origin;
  output.scale = scale2;
  output.translate = layout2.min + min - (origin + (layout2.min - origin) * scale2);
}
function mixAxisDeltaLinear(output, delta, p2) {
  output.translate = mixNumber(delta.translate, 0, p2);
  output.scale = mixNumber(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mixNumber(from.min, to.min, p2);
  output.max = mixNumber(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues?.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function alignAxis(output, from, layout2) {
  output.max = calcLength(layout2) + (output.min = from.min);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear2(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}

// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler, options);
}

// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = /* @__PURE__ */ createProjectionNode({
  attachResizeListener: (ref2, notify) => addDomEvent(ref2, "resize", notify),
  measureScroll: measureDocumentScroll,
  checkIsScrollRoot: () => true
});

// node_modules/motion-dom/dist/es/projection/node/root.mjs
var rootProjectionNode = {
  current: void 0
};

// node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var HTMLProjectionNode = /* @__PURE__ */ createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => window.getComputedStyle(instance).position === "fixed"
});

// node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "whilePinch",
  "exit"
];
var variantProps = /* @__PURE__ */ ["initial"].concat(variantPriorityOrder);

// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  if (isAnimationControls(props.animate))
    return true;
  for (let i = 0; i < variantProps.length; i++) {
    if (isVariantLabel(props[variantProps[i]])) {
      return true;
    }
  }
  return false;
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser3 = typeof window !== "undefined";
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser3)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var featureDefinitions = {};
function setFeatureDefinitions(definitions) {
  featureDefinitions = definitions;
}
function getFeatureDefinitions() {
  return featureDefinitions;
}
var VisualElement = class {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.skipAnimationsConfig = skipAnimations;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  mount(instance) {
    const presence = this.presenceContext;
    if (this.hasBeenMounted && presence?.isPresent !== false && !presence?.keepValuesOnRemount) {
      for (const key in this.initialValues) {
        this.values.get(key)?.jump(this.initialValues[key]);
        this.latestValues[key] = this.initialValues[key];
      }
    }
    this.current = instance;
    visualElementStore.set(instance, this);
    this.projection?.instance || this.projection?.mount(instance);
    if (this.isVariantNode && !this.isControllingVariants) {
      let node = this;
      do
        node = node.props.inherit !== false && node.parent;
      while (node && !node.isVariantNode);
      if (node) {
        const { variantChildren } = node;
        variantChildren.add(this);
        this.removeFromVariantTree = () => variantChildren.delete(this);
      }
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = prefersReducedMotion.current;
    }
    if (process.env.NODE_ENV !== "production") {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    this.projection?.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree?.();
    this.parent?.removeChild(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(child) {
    this.children.add(child);
    (this.enteringChildren || (this.enteringChildren = /* @__PURE__ */ new Set())).add(child);
  }
  removeChild(child) {
    this.children.delete(child);
    this.enteringChildren?.delete(child);
  }
  bindToMotionValue(key, value) {
    this.valueSubscriptions.get(key)?.();
    if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
      const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
      const animation = new NativeAnimation({
        element: this.current,
        name: key,
        keyframes: keyframes2,
        times,
        ease: ease2,
        duration: secondsToMilliseconds(duration)
      });
      const cleanup = factory(animation);
      this.valueSubscriptions.set(key, () => {
        cleanup();
        animation.cancel();
      });
      return;
    }
    const valueIsTransform = transformProps.has(key);
    if (valueIsTransform && this.onBindTransform) {
      this.onBindTransform();
    }
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform) {
        if (this.projection) {
          this.projection.isTransformDirty = true;
        }
        transformGroups.get(this.current)?.check();
      }
      this.scheduleRender();
    });
    let removeSyncCheck;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeSyncCheck?.();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !other.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    const { transformTemplate, onUpdate } = this.props;
    if (props.transformTemplate || transformTemplate) {
      this.scheduleRender();
    }
    if (props.transformTemplate && !transformTemplate || props.onUpdate && !onUpdate) {
      transformGroups.get(this.current)?.demote();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      this.propEventSubscriptions[key]?.();
      delete this.propEventSubscriptions[key];
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
    this.handleChildMotionValue?.();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants?.[name];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      const latest = value.get();
      if (latest !== void 0)
        this.latestValues[key] = latest;
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    this.valueSubscriptions.get(key)?.();
    this.valueSubscriptions.delete(key);
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    let value = this.props.values?.[key];
    if (value)
      return value;
    value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue ?? this.getDefaultValue?.(key), {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (
        /**
         * If the value as read isn't animatable (e.g. "none") but
         * the target is, derive an animatable none from the target.
         * A value is animatable if it's a number or contains a
         * number or color, which is cheaper to check than trying
         * every value type in turn.
         */
        typeof value !== "number" && !complex.test(value) && complex.test(target)
      ) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  on(eventName, callback) {
    return (this.events[eventName] || (this.events[eventName] = new SubscriptionManager())).add(callback);
  }
  notify(eventName, ...args) {
    this.events[eventName]?.notify(...args);
  }
  scheduleRenderMicrotask() {
    microtask.render(this.render);
  }
};

// node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    const style = props.style;
    return style ? style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
};

// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  const elementStyle = element.style;
  let key;
  for (key in style) {
    elementStyle[key] = style[key];
  }
  projection?.applyProjectionStyles(elementStyle, styleProp);
  for (key in vars) {
    elementStyle.setProperty(key, vars[key]);
  }
}

// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const style = props.style;
  const prevStyle = prevProps?.style;
  const newValues = {};
  if (!style)
    return newValues;
  for (const key in style) {
    if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  mount(instance) {
    process.env.NODE_ENV !== "production" && invariant(Boolean(instance.style), "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref");
    super.mount(instance);
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/motion-dom/dist/es/events/event-info.mjs
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

// node_modules/motion-dom/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][borderBoxAxis + "Size"];
  } else if (isSVGElement(target) && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  } else {
    return target[htmlAxis];
  }
};
var getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
var getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
  resizeHandlers.get(target)?.forEach((handler) => {
    handler(target, {
      get width() {
        return getWidth(target, borderBoxSize);
      },
      get height() {
        return getHeight(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer?.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers?.delete(handler);
      if (!elementHandlers?.size) {
        observer?.unobserve(element);
      }
    });
  };
}

// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const info = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
      window.removeEventListener("resize", windowResizeHandler);
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
  return addToScope(typeof a === "function" ? resizeWindow(a) : resizeElement(a, b));
}

// node_modules/motion-dom/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/motion-dom/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element, immediate } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = false;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      this.history.push({ ...point2, timestamp: time.now() });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart?.(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove?.(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.handleScroll(window);
      this.lastMoveEvent = event2;
      this.lastRawMoveEventInfo = info2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      this.hasPendingMove = true;
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.hasPendingMove && this.updatePoint();
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation?.();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      this.startEvent && onEnd?.(event2, panInfo);
      onSessionEnd?.(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = immediate ? 0 : distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    this.history = [{ ...point, timestamp: time.now() }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    const eventOptions = { passive: true, capture: true };
    this.removeListeners = pipe3(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
    if (element) {
      this.startScrollTracking(element);
    }
    if (immediate) {
      this.handlePointerMove(event, info);
      this.updatePoint();
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, getScroll(current));
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, getScroll(window));
    this.removeScrollListeners = pipe3(
      // Capture listener catches element scroll events as they bubble
      addDomEvent(window, "scroll", this.onElementScroll, {
        capture: true
      }),
      // Direct window scroll listener (window scroll doesn't bubble)
      addDomEvent(window, "scroll", this.onWindowScroll, {})
    );
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = getScroll(target);
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners?.();
    this.removeScrollListeners?.();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
};
var getScroll = (target) => target === window ? { x: window.scrollX, y: window.scrollY } : {
  x: target.scrollLeft,
  y: target.scrollTop
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const seconds = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (seconds === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / seconds,
    y: (lastPoint.y - timestampedPoint.y) / seconds
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function isElementTextInput(element) {
  return textInputElements.has(element.tagName) || element.isContentEditable === true;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}

// node_modules/motion-dom/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp3(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/motion-dom/dist/es/gestures/drag/VisualElementDragControls.mjs
function measureScroll(projection) {
  let key = "";
  for (const node of projection.path) {
    node.scroll = void 0;
    node.updateScroll();
    const { scroll } = node;
    if (node !== projection.root && scroll) {
      key += scroll.offset.x + "," + scroll.offset.y + ",";
    }
  }
  return key;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement, readProps = () => visualElement.getProps()) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
    this.readProps = readProps;
  }
  start(originEvent, options = {}) {
    if (this.visualElement.presenceContext?.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (options.snapToCursor)
        this.snapToCursor(event);
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragConstraints, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        this.openDragLock?.();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      const { projection } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = true;
        projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (isCSSVariableToken(current)) {
          current = getVariableValue(current, this.visualElement.current) || 0;
        }
        if (px.test(current)) {
          current = parseFloat(current);
        } else if (percent.test(current)) {
          const measuredAxis = projection?.layout?.layoutBox[axis];
          if (measuredAxis) {
            current = calcLength(measuredAxis) * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      this.point = typeof dragConstraints === "function" && dragConstraints(this);
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      this.visualElement.animationState?.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection === null)
          return;
        onDirectionLock && onDirectionLock(this.currentDirection);
      }
      this.updateAxis("x", offset);
      this.updateAxis("y", offset);
      this.point && this.point.move();
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap3 } = this.getProps();
      if (snap3 || this.constraints || this.point) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      ...options,
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: this.visualElement.current?.ownerDocument.defaultView,
      element: this.visualElement.current
    });
  }
  /**
   * @param dragAxes - The axes to animate on release, if not the `drag`
   * prop's, e.g. when drag was disabled mid-gesture.
   */
  stop(event, panInfo, dragAxes) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity, dragAxes);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    if (!this.getProps().dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState?.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   */
  endPanSession() {
    this.panSession?.end();
    this.panSession = void 0;
  }
  updateAxis(axis, offset) {
    const { drag: drag2 } = this.readProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    const constraints = this.constraints && this.constraints[axis];
    if (constraints) {
      next = applyConstraints(next, constraints, this.elastic[axis]);
    }
    this.point ? this.point[axis] = next : axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { projection } = this.visualElement;
    const layout2 = projection && (projection.layout || projection.measure(false));
    const prevConstraints = this.constraints;
    if (isElementConstraints(dragConstraints)) {
      if (!this.constraints || this.scroll !== measureScroll(projection)) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2 && typeof dragConstraints === "object") {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isElementConstraints(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!isElementConstraints(constraints))
      return false;
    const constraintsElement = resolveConstraintsElement(constraints);
    process.env.NODE_ENV !== "production" && invariant(!!constraintsElement, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    this.scroll = measureScroll(projection);
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, projection.removeElementScroll(constraintsBox));
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity, dragAxes) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const options = {
      bounceStiffness: dragElastic ? 200 : 1e6,
      bounceDamping: dragElastic ? 40 : 1e7,
      timeConstant: 750,
      restDelta: 1,
      restSpeed: 10,
      ...dragTransition
    };
    const axisVelocity = (axis) => dragMomentum && !(this.point && dragSnapToOrigin) && shouldDrag(axis, dragAxes || drag2, this.currentDirection) ? velocity[axis] : 0;
    if (this.point && !dragSnapToOrigin) {
      return this.point.release({ x: axisVelocity("x"), y: axisVelocity("y") }, options).then(onDragTransitionEnd);
    }
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, dragAxes || drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints[axis] || {};
      if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
        transition = { min: 0, max: 0 };
      const inertia2 = {
        type: "inertia",
        velocity: axisVelocity(axis),
        ...options,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.readProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX, clientY }) {
    const { drag: drag2 } = this.getProps();
    const point = { x: clientX, y: clientY };
    const cursor = this.visualElement.getTransformPagePoint()?.(point) || point;
    const box = this.visualElement.measureViewportBox();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = box[axis];
      axisValue.set((axisValue.get() || 0) + cursor[axis] - mixNumber(min, max, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isElementConstraints(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const constraints = this.constraints;
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const latest = this.getAxisMotionValue(axis).get();
      boxProgress[axis] = calcOrigin({ min: latest, max: latest }, constraints[axis]);
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root?.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (!shouldDrag(axis, drag2, null) || !axisValue.get())
        return;
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      const constraintsElement = isElementConstraints(dragConstraints) && resolveConstraintsElement(dragConstraints);
      if (constraintsElement) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, constraintsElement, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (!projection.layout) {
      projection.root?.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          if (!shouldDrag(axis, this.getProps().drag, this.currentDirection))
            return;
          const motionValue2 = this.getAxisMotionValue(axis);
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener();
      stopResizeObservers?.();
    };
  }
  getProps() {
    const props = this.readProps();
    const { dragElastic = defaultElastic, dragMomentum = true } = props;
    return { ...props, dragElastic, dragMomentum };
  }
};
function isElementConstraints(constraints) {
  return !!constraints && typeof constraints === "object" && ("current" in constraints || "nodeType" in constraints);
}
var resolveConstraintsElement = (constraints) => "current" in constraints ? constraints.current : constraints;
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = addToScope(() => gestureAbortController.abort());
  return [elements, eventOptions, cancel];
}

// node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
  return !(event.pointerType === "touch" || isDragActive());
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  onHoverStart = bindToScope(onHoverStart);
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  elements.forEach((element) => {
    let isPressed = false;
    let deferredHoverEnd = false;
    let hoverEndCallback;
    const removePointerLeave = () => {
      element.removeEventListener("pointerleave", onPointerLeave);
    };
    const endHover = (event) => {
      if (hoverEndCallback) {
        hoverEndCallback(event);
        hoverEndCallback = void 0;
      }
      removePointerLeave();
    };
    const onPointerUp = (event) => {
      isPressed = false;
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (deferredHoverEnd) {
        deferredHoverEnd = false;
        endHover(event);
      }
    };
    const onPointerDown = () => {
      isPressed = true;
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerUp, eventOptions);
    };
    const onPointerLeave = (leaveEvent) => {
      if (leaveEvent.pointerType === "touch")
        return;
      if (isPressed) {
        deferredHoverEnd = true;
        return;
      }
      endHover(leaveEvent);
    };
    const onPointerEnter = (enterEvent) => {
      if (!isValidHover(enterEvent))
        return;
      deferredHoverEnd = false;
      const onHoverEnd = onHoverStart(element, enterEvent);
      if (typeof onHoverEnd !== "function")
        return;
      hoverEndCallback = onHoverEnd;
      element.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    element.addEventListener("pointerdown", onPointerDown, eventOptions);
  });
  return cancel;
}

// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();

// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
var enableKeyboardPress = (element, eventOptions) => {
  let isKeyPressing = false;
  const handleKeydown = filterEvents(() => {
    if (isKeyPressing || isPressing.has(element))
      return;
    isKeyPressing = true;
    firePointerEvent(element, "down");
  });
  const handleKeyup = filterEvents(() => {
    if (!isKeyPressing)
      return;
    isKeyPressing = false;
    firePointerEvent(element, "up");
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("keyup", handleKeyup, eventOptions);
  element.addEventListener("blur", () => {
    element.removeEventListener("keydown", handleKeydown);
    element.removeEventListener("keyup", handleKeyup);
    if (isKeyPressing)
      firePointerEvent(element, "cancel");
  }, { ...eventOptions, once: true });
};

// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
var sequenceSlop = 100;
var holdSlop = 8;
var exceeds = (a, b, max) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) > max;
var preventDefault = (event) => event.preventDefault();
function press(targetOrSelector, onPressStart, options = {}) {
  onPressStart = bindToScope(onPressStart);
  const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
  const sequences = /* @__PURE__ */ new WeakMap();
  const startPress = (startEvent) => {
    const target = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent))
      return;
    if (claimedPointerDownEvents.has(startEvent))
      return;
    if (options.stopPropagation) {
      claimedPointerDownEvents.add(startEvent);
    }
    const { count: presses = 1, countTimeout = 0.3, hold = 0, repeat } = options;
    const downTime = time.now();
    const holdTime = secondsToMilliseconds(hold);
    const timeout = secondsToMilliseconds(countTimeout);
    let previous = sequences.get(target);
    if (previous?.expire(exceeds(previous.event, startEvent, sequenceSlop))) {
      previous = void 0;
    } else if (previous) {
      cancelFrame(previous.expire);
      sequences.delete(target);
    }
    const count = previous ? previous.count + 1 : 1;
    const isFinal = count >= presses;
    const isHeld = isFinal && (hold || repeat);
    let isActive = !hold;
    let repeats = 0;
    let handlers;
    isPressing.add(target);
    if (previous) {
      handlers = previous.handlers;
    } else {
      const result = onPressStart(target, startEvent);
      handlers = typeof result === "function" ? { onComplete: result } : result || {};
    }
    isFinal && isActive && handlers.onActive?.();
    const repeatTime = secondsToMilliseconds(repeat);
    let length = holdTime || repeatTime;
    let cycleEnd = downTime + length;
    let isCycleStart = true;
    const tick = () => {
      if (eventOptions.signal.aborted)
        return cancelFrame(tick);
      let progress2 = Math.min(1 - (cycleEnd - time.now()) / length, 1);
      if (isCycleStart && progress2 < 1)
        progress2 = 0;
      isCycleStart = false;
      handlers.onHold?.(progress2);
      if (progress2 < 1)
        return;
      if (isActive) {
        handlers.onRepeat?.(++repeats);
      } else {
        isActive = true;
        handlers.onActive?.();
      }
      if (repeat) {
        isCycleStart = true;
        cycleEnd += length = repeatTime;
      } else {
        cancelFrame(tick);
      }
    };
    const endEventOptions = { ...eventOptions, capture: true };
    const onPointerEnd = (endEvent, success) => {
      if (!isPrimaryPointer(endEvent))
        return;
      window.removeEventListener("pointerup", onPointerUp, endEventOptions);
      window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
      window.removeEventListener("pointermove", onPointerMove, endEventOptions);
      target.removeEventListener("contextmenu", preventDefault);
      cancelFrame(tick);
      isPressing.delete(target);
      if (isDragActive())
        success = false;
      if (success && !isFinal) {
        const end = time.now();
        const expire = (force) => {
          const isAborted = eventOptions.signal.aborted;
          if (isAborted || force === true || time.now() - end > timeout) {
            cancelFrame(expire);
            sequences.delete(target);
            isAborted || handlers.onComplete?.(endEvent, { success: false });
            return true;
          }
        };
        sequences.set(target, {
          count,
          event: startEvent,
          handlers,
          expire
        });
        frame.update(expire, true);
      } else {
        handlers.onComplete?.(endEvent, {
          success: success && isActive
        });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    const onPointerMove = (moveEvent) => {
      if (isPrimaryPointer(moveEvent) && ((repeat || !isActive) && exceeds(startEvent, moveEvent, holdSlop) || presses > 1 && isDragActive())) {
        onPointerCancel(moveEvent);
      }
    };
    window.addEventListener("pointerup", onPointerUp, endEventOptions);
    window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
    if (isHeld || presses > 1) {
      window.addEventListener("pointermove", onPointerMove, endEventOptions);
    }
    if (isHeld) {
      frame.update(tick, true);
      target.addEventListener("contextmenu", preventDefault, {
        ...eventOptions,
        passive: false
      });
    }
  };
  targets.forEach((target) => {
    const pointerDownTarget = options.useGlobalTarget ? window : target;
    pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
    if (isHTMLElement(target)) {
      target.addEventListener("focus", () => enableKeyboardPress(target, eventOptions), eventOptions);
      if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
        target.tabIndex = 0;
      }
    }
  });
  return cancelEvents;
}

// node_modules/motion-dom/dist/es/render/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};

// node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (key !== "children" && (isMotionValue(props[key]) || isMotionValue(prevProps[key]))) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return transformProps.has(key) ? super.getBaseTargetFromProps(props, key) ?? defaultTransformValue(key) : props[key];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(key) {
    return transformProps.has(key) ? this.latestValues[key] ?? defaultTransformValue(key) : void 0;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    if (cssStyleProperties.includes(key)) {
      const computedStyle = getComputedStyle(instance);
      const value = computedStyle[key];
      if (typeof value === "string" && value)
        return value.trim();
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var getOutTransition = (transition) => transition?.out === true ? transition : transition?.out;
function createAnimationState(visualElement) {
  let animate = (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
  let state = createState();
  let isInitialRender = true;
  let wasReset = false;
  function animateChanges(changedActiveType) {
    const { props, parent, manuallyAnimateOnMount } = visualElement;
    const { initial } = props;
    const isMounting = isInitialRender || wasReset;
    const animations2 = [];
    const resolveInitial = (definition = initial) => typeof definition !== "boolean" && resolveVariant(visualElement, Array.isArray(definition) ? definition[0] : definition, visualElement.presenceContext?.custom) || void 0;
    const removedKeys = /* @__PURE__ */ new Map();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    let source = visualElement;
    do
      source = source.props.inherit !== false && source.parent;
    while (source && !source.isControllingVariants);
    const initialOut = isMounting && getOutTransition(resolveInitial(initial ?? (source && source.props.initial))?.transition);
    reversePriorityOrder.forEach((type, i) => {
      const typeState = state[type];
      const ownProp = props[type];
      const inheritedProp = source && source.props[type];
      const prop = ownProp !== void 0 ? ownProp : isVariantLabel(inheritedProp) || inheritedProp === false ? inheritedProp : void 0;
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      const isInherited = propIsVariant && ownProp === void 0 && !(isMounting && manuallyAnimateOnMount);
      typeState.protectedKeys = { ...encounteredKeys };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return;
      }
      if (activeDelta === false)
        removedVariantIndex = i;
      if (type === "exit" && typeState.isActive && activeDelta !== true) {
        encounteredKeys = {
          ...encounteredKeys,
          ...typeState.prevResolvedValues
        };
        return;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || propIsVariant && (activeDelta && !isInherited || i > removedVariantIndex);
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = {};
      let out;
      if (activeDelta !== false) {
        for (const definition of definitionList) {
          const { transition, transitionEnd, ...target } = resolveVariant(visualElement, definition, getTypeCustom(visualElement, type)) || {};
          resolvedValues = {
            ...resolvedValues,
            ...target,
            ...transitionEnd
          };
          out = getOutTransition(transition) || out;
        }
      }
      const { prevResolvedValues } = typeState;
      for (const key in { ...prevResolvedValues, ...resolvedValues }) {
        if (key in encounteredKeys)
          continue;
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        const valueHasChanged = Array.isArray(next) && Array.isArray(prev) ? !shallowCompare(next, prev) || variantDidChange : next !== prev;
        let outTransition;
        if (valueHasChanged && (next === void 0 || next === null)) {
          removedKeys.has(key) || removedKeys.set(key, typeState.prevOut);
        } else if (valueHasChanged || next !== void 0 && removedKeys.has(key)) {
          shouldAnimateType = true;
          outTransition = removedKeys.get(key) || initialOut;
          if (removedKeys.delete(key))
            handledRemovedValues = true;
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        } else {
          typeState.protectedKeys[key] = true;
        }
        typeState.out[key] = outTransition;
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      typeState.prevOut = out;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (shouldAnimateType && (!(isInherited && variantDidChange) || handledRemovedValues)) {
        for (const animation of definitionList) {
          const options = { type };
          if (typeof animation === "string" && isMounting && manuallyAnimateOnMount && parent?.enteringChildren) {
            const delayChildren = resolveVariant(parent, animation)?.transition?.delayChildren;
            options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
          }
          animations2.push({ animation, options });
        }
      }
    });
    if (removedKeys.size) {
      const fallbackAnimation = {};
      const resolvedInitial = resolveInitial();
      let fallbackTransition = resolvedInitial?.transition;
      removedKeys.forEach((outTransition, key) => {
        if (outTransition) {
          fallbackTransition = {
            ...fallbackTransition || visualElement.getDefaultTransition(),
            [key]: outTransition
          };
        }
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        const fromInitial = resolvedInitial && !Array.isArray(initial) ? resolvedInitial[key] : void 0;
        const fromProps = visualElement.getBaseTargetFromProps(props, key);
        fallbackAnimation[key] = (fromInitial !== void 0 ? fromInitial : fromProps !== void 0 && !isMotionValue(fromProps) ? fromProps : visualElement.initialValues[key] === void 0 ? visualElement.baseTarget[key] : void 0) ?? null;
        if (process.env.NODE_ENV !== "production" && fallbackAnimation[key] === null && visualElement.initialValues[key] !== void 0) {
          delete visualElement.initialValues[key];
          motionValue2?.stop();
          visualElement.baseTarget[key] = motionValue2?.get();
        }
      });
      if (fallbackTransition) {
        fallbackAnimation.transition = fallbackTransition;
      }
      animations2.push({ animation: fallbackAnimation });
    }
    const blockAnimation = isMounting && visualElement.blockInitialAnimation || isInitialRender && !manuallyAnimateOnMount && (props.initial === false || props.initial === props.animate);
    isInitialRender = wasReset = false;
    return !blockAnimation && animations2.length ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    if (state[type].isActive === isActive)
      return Promise.resolve();
    visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (makeAnimator) => {
      animate = makeAnimator(visualElement);
    },
    getState: () => state,
    reset: () => {
      state = createState();
      wasReset = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createState() {
  const state = {};
  for (const type of variantPriorityOrder) {
    state[type] = {
      isActive: type === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  }
  return state;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
import { createContext as createContext4 } from "react";
var MotionConfigContext = /* @__PURE__ */ createContext4({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
import { useContext as useContext2, useId, useEffect as useEffect5, useCallback } from "react";
function usePresence(subscribe = true) {
  const context3 = useContext2(PresenceContext);
  if (context3 === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context3;
  const id3 = useId();
  useEffect5(() => {
    if (subscribe) {
      return register(id3);
    }
  }, [subscribe]);
  const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
import { createContext as createContext5 } from "react";
var LazyContext = /* @__PURE__ */ createContext5({
  strict: false
});

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["variants", ...variantPriorityOrder],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions2[key] = {
      ...featureDefinitions2[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions2);
}

// node_modules/framer-motion/dist/es/motion/index.mjs
import { jsxs as jsxs7, jsx as jsx7 } from "react/jsx-runtime";
import { forwardRef as forwardRef3, useContext as useContext6 } from "react";

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
import { createContext as createContext6 } from "react";
var MotionContext = /* @__PURE__ */ createContext6({});

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
import { useContext as useContext3, useMemo as useMemo3 } from "react";

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context3) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context3 : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, useContext3(MotionContext));
  return useMemo3(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
import { Fragment as Fragment2, useMemo as useMemo6, createElement as createElement4 } from "react";

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
import { useMemo as useMemo4 } from "react";

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return useMemo4(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
import { useMemo as useMemo5 } from "react";

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo5(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const style = {};
    copyRawValuesOnly(style, props.style, props);
    return { ...visualProps, style: { ...style, ...visualProps.style } };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "tap",
  "propagate",
  "ignoreStrict",
  "viewport",
  "pinch"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function shouldForward(key, isValidProp) {
  return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (isMotionValue(props[key]))
      continue;
    if (key === "fx") {
      if (props.fx)
        filteredProps.fx = "";
      continue;
    }
    if (shouldForward(key, isValidProp) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component2)
  ) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component2, props, ref2, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
  const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
  const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps, isValidProp);
  const elementProps = Component2 !== Fragment2 ? { ...filteredProps, ...visualProps, ref: ref2 } : {};
  const { children } = props;
  const renderedChildren = useMemo6(() => isMotionValue(children) ? children.get() : children, [children]);
  return createElement4(Component2, {
    ...elementProps,
    children: renderedChildren
  });
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
import { useContext as useContext4 } from "react";
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState }, props, context3, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context3, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context3, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context3 && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context3.initial;
    if (animate === void 0)
      animate = context3.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
var makeUseVisualState = (config3) => (props, isStatic) => {
  const context3 = useContext4(MotionContext);
  const presenceContext = useContext4(PresenceContext);
  const make = () => makeState(config3, props, context3, presenceContext);
  return isStatic ? make() : useConstant(make);
};

// node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});

// node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  createRenderState: createSvgRenderState
});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
import { useRef as useRef4, useInsertionEffect, useCallback as useCallback2 } from "react";
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = useRef4(externalRef);
  useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = useRef4(null);
  return useCallback2((instance) => {
    if (instance) {
      visualState.onMount?.(instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref2 = externalRefContainer.current;
    if (typeof ref2 === "function") {
      if (instance) {
        const cleanup = ref2(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref2(instance);
      }
    } else if (ref2) {
      ref2.current = instance;
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
import { useContext as useContext5, useRef as useRef5, useInsertionEffect as useInsertionEffect2, useEffect as useEffect6 } from "react";

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
import { createContext as createContext7 } from "react";
var SwitchLayoutGroupContext = /* @__PURE__ */ createContext7({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
  const { visualElement: parent } = useContext5(MotionContext);
  const lazyContext = useContext5(LazyContext);
  const presenceContext = useContext5(PresenceContext);
  const motionConfig = useContext5(MotionConfigContext);
  const reducedMotionConfig = motionConfig.reducedMotion;
  const skipAnimations = motionConfig.skipAnimations;
  const visualElementRef = useRef5(null);
  const hasMountedOnce = useRef5(false);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig,
      skipAnimations,
      isSVG
    });
    if (hasMountedOnce.current && visualElementRef.current) {
      visualElementRef.current.manuallyAnimateOnMount = true;
    }
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = useContext5(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    ProjectionNodeConstructor.create(visualElement, props, initialLayoutGroupConfig);
  }
  useInsertionEffect2(() => {
    if (visualElement && visualElement.props !== props) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = useRef5(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
  useIsomorphicLayoutEffect(() => {
    if (!hasMountedOnce.current || !visualElement)
      return;
    visualElement.animationState?.animateChanges();
    visualElement.enteringChildren = void 0;
  }, []);
  useIsomorphicLayoutEffect(() => {
    hasMountedOnce.current = true;
    if (!visualElement)
      return;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useEffect6(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = void 0;
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component2);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout2;
    const layoutId = useLayoutId(props);
    if (useConstant(() => !!rootProjectionNode.current?.sharedNodes.get(layoutId)?.lead && props.initial)) {
      props = { ...props, initial: false };
    }
    const configAndProps = {
      ...useContext6(MotionConfigContext),
      ...props,
      layoutId
    };
    const { isStatic, isValidProp } = configAndProps;
    const context3 = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && typeof window !== "undefined") {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      context3.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      if (layoutProjection.isEnabled || context3.visualElement?.projection?.options.layoutId)
        MeasureLayout2 = layoutProjection.MeasureLayout;
    }
    return jsxs7(MotionContext.Provider, { value: context3, children: [MeasureLayout2 && context3.visualElement ? jsx7(MeasureLayout2, { visualElement: context3.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context3.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef3(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component2;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext6(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = useContext6(LazyContext).strict;
  if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead";
    configAndProps.ignoreStrict ? warnOnce(false, strictMessage + '. For Reorder, import it from "motion/react-m"', "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  const { drag: drag2, layout: layout2 } = featureDefinitions2;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: combined.MeasureLayout,
    isEnabled: drag2?.isEnabled(props) || layout2?.isEnabled(props),
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component2, options) => {
    return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component2, options) => {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component2, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
import { Fragment as Fragment3 } from "react";
var createDomVisualElement = (Component2, options) => {
  const isSVG = options.isSVG ?? isSVGComponent(Component2);
  return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== Fragment3
  });
};

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    if (this.node.getProps().animate !== this.node.prevProps?.animate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id2 = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id2++;
  }
  update() {
    const { presenceContext, animationState } = this.node;
    if (!presenceContext || !animationState)
      return;
    const { isPresent, onExitComplete } = presenceContext;
    if (isPresent === !this.exit)
      return;
    if (isPresent) {
      if (this.exit === true) {
        const { initial } = this.node.getProps();
        if (initial && !Array.isArray(initial)) {
          const { transition, transitionEnd, ...target } = resolveVariant(this.node, initial) || {};
          for (const key in target) {
            this.node.getValue(key)?.jump(target[key]);
          }
        }
        this.node.blockInitialAnimation = false;
        animationState.reset();
        animationState.animateChanges();
      } else {
        animationState.setActive("exit", false);
      }
      this.exit = void 0;
      return;
    }
    const exit = this.exit = animationState.setActive("exit", true);
    if (onExitComplete) {
      exit.then(() => {
        if (this.exit !== exit)
          return;
        this.exit = true;
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id, this.node);
    }
    this.update();
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls, drag: drag2 } = this.node.getProps();
    const { dragControls: prevDragControls, drag: prevDrag } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
    if (prevDrag && !drag2)
      this.controls.stop(void 0, void 0, prevDrag);
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      // Fixes https://github.com/motiondivision/motion/issues/2270
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session?.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
import { jsx as jsx8 } from "react/jsx-runtime";
import { useContext as useContext7, Component } from "react";
var hasTakenAnySnapshot = false;
var layoutOptions = ({ layout: layout2, layoutDependency, layoutAnchor }) => ({
  layout: layout2,
  layoutDependency,
  layoutAnchor,
  animationType: typeof layout2 === "string" ? layout2 : "both"
});
var switchLayoutId = (projection, layoutId) => {
  const { snapshot } = projection;
  const stack = projection.getStack();
  stack?.remove(projection);
  const lead = stack?.lead;
  if (stack?.prevLead === projection && lead.resumeFrom === projection)
    lead.resumeFrom = lead.currentAnimation = projection.resumingFrom = void 0;
  projection.options.layoutId = layoutId;
  if (!layoutId) {
    projection.needsShow = true;
    return;
  }
  projection.root.registerSharedNode(layoutId, projection);
  return () => {
    const { resumeFrom } = projection;
    if (resumeFrom?.isPresent !== false && projection.getStack().members.includes(resumeFrom)) {
      resumeFrom.hide();
      projection.resumeFrom = void 0;
      projection.snapshot = snapshot;
    }
  };
};
var MeasureLayoutWithContext = class extends Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      layoutGroup.group?.add(projection);
      layoutId && switchLayoutGroup?.register?.(projection);
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      if (projection.options.layoutId !== layoutId)
        switchLayoutId(projection, layoutId)?.();
      projection.addEventListener("animationComplete", () => this.safeToRemove());
      projection.setOptions({
        ...projection.options,
        ...layoutOptions(this.props),
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, layoutId, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    this.takeOver = prevProps.layoutId !== layoutId ? (projection.willUpdate(), switchLayoutId(projection, layoutId)) : void 0;
    projection.setOptions({
      ...projection.options,
      ...layoutOptions(this.props)
    });
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          projection.getStack()?.members.length || this.safeToRemove();
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      this.takeOver?.();
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      layoutGroup.group?.remove(projection);
      promoteContext?.deregister?.(projection);
    }
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext7(LayoutGroupContext);
  return jsx8(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext7(SwitchLayoutGroupContext), isPresent, safeToRemove });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleGestureEvent(node, event, gesture, lifecycle, isRepeat) {
  const { props } = node;
  const whileKey = "while" + gesture;
  if (!isRepeat && node.animationState && props[whileKey]) {
    node.animationState.setActive(whileKey, lifecycle === "Start");
  }
  const callback = props["on" + gesture + lifecycle];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var HoverGesture = class extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleGestureEvent(this.node, startEvent, "Hover", "Start");
      return (endEvent) => handleGestureEvent(this.node, endEvent, "Hover", "End");
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe3(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle, isRepeat) {
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  handleGestureEvent(node, event, "Tap", lifecycle, isRepeat);
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.options = {};
  }
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.update();
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return {
        onComplete: (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "" : "Cancel"),
        onRepeat: () => handlePressEvent(this.node, startEvent, "", true)
      };
    }, this.options);
  }
  update() {
    const { options, node } = this;
    const { globalTapTarget, propagate, tap } = node.props;
    for (const key in options)
      delete options[key];
    Object.assign(options, tap, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: propagate?.tap === false
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
    this.stopObserver?.();
    this.hasEnteredView = false;
    this.isInView = false;
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
var featureBundle = /* @__PURE__ */ Object.assign({}, animations, gestureAnimations, drag, layout);

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

// src/components/BrandLogo.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var BrandLogo = ({
  brand,
  size = "md",
  className = ""
}) => {
  const heightMap = {
    sm: "h-8",
    md: "h-11",
    lg: "h-16"
  };
  if (brand === "gladchemistry") {
    return /* @__PURE__ */ jsx9("div", { className: `inline-flex items-center gap-2.5 ${className}`, children: /* @__PURE__ */ jsx9(
      "img",
      {
        src: "/images/gladchemistry-logo.jpg",
        alt: "Gladchemistry Products Logo",
        className: `${heightMap[size]} w-auto rounded-lg object-contain bg-white p-0.5 shadow-sm border border-emerald-100`
      }
    ) });
  }
  if (brand === "felis-be-glad") {
    return /* @__PURE__ */ jsxs8("div", { className: `inline-flex items-center gap-2.5 ${className}`, children: [
      /* @__PURE__ */ jsxs8(
        "svg",
        {
          viewBox: "0 0 44 44",
          className: `${heightMap[size]} w-auto`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx9("rect", { width: "44", height: "44", rx: "12", fill: "#1C1917" }),
            /* @__PURE__ */ jsx9(
              "path",
              {
                d: "M22 8L26.5 17.5L36 22L26.5 26.5L22 36L17.5 26.5L8 22L17.5 17.5L22 8Z",
                stroke: "#F59E0B",
                strokeWidth: "2",
                fill: "#F59E0B",
                fillOpacity: "0.18"
              }
            ),
            /* @__PURE__ */ jsx9("circle", { cx: "22", cy: "22", r: "4", fill: "#FBBF24" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsxs8("span", { className: "font-display font-bold tracking-tight text-stone-900 text-base", children: [
          "Felis ",
          /* @__PURE__ */ jsx9("span", { className: "text-amber-600", children: "be Glad" })
        ] }),
        /* @__PURE__ */ jsx9("span", { className: "text-[10px] uppercase tracking-[0.18em] text-stone-500 font-medium", children: "Fine Fragrances" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs8("div", { className: `inline-flex items-center gap-2.5 ${className}`, children: [
    /* @__PURE__ */ jsxs8(
      "svg",
      {
        viewBox: "0 0 44 44",
        className: `${heightMap[size]} w-auto`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx9("rect", { width: "44", height: "44", rx: "12", fill: "#0284C7" }),
          /* @__PURE__ */ jsx9("circle", { cx: "17", cy: "24", r: "7", fill: "#38BDF8", stroke: "white", strokeWidth: "2" }),
          /* @__PURE__ */ jsx9("circle", { cx: "28", cy: "17", r: "5", fill: "#A3E635", stroke: "white", strokeWidth: "2" }),
          /* @__PURE__ */ jsx9("circle", { cx: "29", cy: "29", r: "3.5", fill: "white", fillOpacity: "0.9" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "flex flex-col leading-none", children: [
      /* @__PURE__ */ jsx9("span", { className: "font-display font-extrabold tracking-tight text-sky-950 text-base", children: "BUBBLES" }),
      /* @__PURE__ */ jsx9("span", { className: "text-[10px] uppercase tracking-[0.16em] text-sky-600 font-bold", children: "Detergents" })
    ] })
  ] });
};

// src/pages/Brands.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Brands = () => {
  return /* @__PURE__ */ jsx10("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxs9("div", { className: "mx-auto max-w-7xl space-y-12", children: [
    /* @__PURE__ */ jsxs9("div", { className: "text-center max-w-2xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsx10("span", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600", children: "Brand Architecture" }),
      /* @__PURE__ */ jsx10("h1", { className: "font-display font-extrabold text-4xl sm:text-5xl text-slate-900", children: "Three Distinct Brands, One Standard of Excellence" }),
      /* @__PURE__ */ jsx10("p", { className: "text-base text-slate-500", children: "Each brand under the Gladchemistry umbrella is crafted with its own identity, formulation philosophy, and signature visual language." })
    ] }),
    /* @__PURE__ */ jsx10("div", { className: "space-y-10", children: BRAND_LIST.map((brand, idx) => {
      const brandProducts = PRODUCTS.filter((p2) => p2.brand === brand.id);
      const isEven = idx % 2 === 0;
      return /* @__PURE__ */ jsxs9(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "rounded-[28px] p-6 sm:p-10 border border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
          style: { background: brand.stageTone },
          children: [
            /* @__PURE__ */ jsxs9("div", { className: `lg:col-span-6 space-y-5 ${!isEven ? "lg:order-2" : ""}`, children: [
              /* @__PURE__ */ jsx10(BrandLogo, { brand: brand.id, size: "lg" }),
              /* @__PURE__ */ jsxs9("div", { children: [
                /* @__PURE__ */ jsx10("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: brand.category }),
                /* @__PURE__ */ jsxs9("h2", { className: "font-display font-extrabold text-3xl text-slate-900 mt-1", children: [
                  brand.name,
                  " \u2014 ",
                  brand.tagline
                ] })
              ] }),
              /* @__PURE__ */ jsx10("p", { className: "text-base text-slate-600 leading-relaxed", children: brand.description }),
              /* @__PURE__ */ jsx10("ul", { className: "space-y-2.5 pt-1", children: brand.highlights.map((item) => /* @__PURE__ */ jsxs9("li", { className: "flex items-center gap-2.5 text-sm font-medium text-slate-700", children: [
                /* @__PURE__ */ jsx10(CircleCheck, { className: "h-4 w-4 shrink-0 text-emerald-600" }),
                item
              ] }, item)) }),
              /* @__PURE__ */ jsx10("div", { className: "pt-3 flex flex-wrap items-center gap-4", children: /* @__PURE__ */ jsxs9(
                Link5,
                {
                  to: `/shop?brand=${brand.id}`,
                  className: `inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 ${brand.buttonClass}`,
                  children: [
                    "Shop ",
                    brand.name,
                    " (",
                    brandProducts.length,
                    " Products)",
                    /* @__PURE__ */ jsx10(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: `lg:col-span-6 ${!isEven ? "lg:order-1" : ""}`, children: brand.rangePhoto ? /* @__PURE__ */ jsx10(
              "img",
              {
                src: brand.rangePhoto,
                alt: `${brand.name} range as stocked by the shop`,
                loading: "lazy",
                decoding: "async",
                className: "w-full rounded-3xl shadow-xl border-4 border-white object-cover",
                style: { aspectRatio: "4 / 3" }
              }
            ) : /* @__PURE__ */ jsx10(
              "div",
              {
                className: "rounded-3xl overflow-hidden shadow-xl border-4 border-white grid place-items-center",
                style: { background: brand.stageTone, aspectRatio: "4 / 3" },
                children: /* @__PURE__ */ jsxs9("div", { className: "text-center px-8", children: [
                  /* @__PURE__ */ jsx10(
                    "p",
                    {
                      className: "font-display text-[42px] font-extrabold leading-none",
                      style: { color: brand.inkColor },
                      children: brand.name
                    }
                  ),
                  /* @__PURE__ */ jsx10(
                    "p",
                    {
                      className: "mt-3 text-[12px] font-black uppercase tracking-[0.16em]",
                      style: { color: brand.inkColor, opacity: 0.65 },
                      children: brand.category
                    }
                  ),
                  /* @__PURE__ */ jsx10("p", { className: "mt-4 max-w-[34ch] text-[14px] font-semibold", style: { color: brand.inkColor, opacity: 0.8 }, children: brand.highlights.join(" \xB7 ") })
                ] })
              }
            ) })
          ]
        },
        brand.id
      );
    }) })
  ] }) });
};

// src/pages/About.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var About = () => {
  return /* @__PURE__ */ jsx11("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxs10("div", { className: "mx-auto max-w-7xl space-y-16", children: [
    /* @__PURE__ */ jsx11(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "ui-card rounded-[2.5rem] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
        children: /* @__PURE__ */ jsxs10("div", { className: "lg:col-span-7 space-y-5", children: [
          /* @__PURE__ */ jsx11(BrandLogo, { brand: "gladchemistry", size: "md" }),
          /* @__PURE__ */ jsx11("h1", { className: "font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight", children: "Formulated with Purpose, Crafted in South Africa" }),
          /* @__PURE__ */ jsx11("p", { className: "text-base sm:text-lg text-slate-600 leading-relaxed", children: "Gladchemistry Products was founded on a simple belief: everyday essentials\u2014from the organic personal care you put on your skin, to the fine fragrances in your home and car, to the detergents that keep your spaces spotless\u2014deserve uncompromising quality." })
        ] })
      }
    ),
    /* @__PURE__ */ jsx11("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      {
        icon: FlaskConical,
        title: "Precision Chemistry",
        desc: "Every batch is balanced for maximum efficacy, safety, and long-lasting performance.",
        color: "bg-emerald-100 text-emerald-700"
      },
      {
        icon: Leaf,
        title: "Organic Extracts",
        desc: "Our Gladchemistry personal care range prioritizes gentle, skin-loving botanicals.",
        color: "bg-lime-100 text-lime-700"
      },
      {
        icon: Award,
        title: "Fine Fragrance Oils",
        desc: "Felis be Glad uses high-concentration parfum oils for rich, enduring sillage.",
        color: "bg-amber-100 text-amber-700"
      },
      {
        icon: HeartHandshake,
        title: "Retail & Wholesale",
        desc: "Serving individual households, boutiques, and commercial bulk buyers nationwide.",
        color: "bg-sky-100 text-sky-700"
      }
    ].map((pillar) => /* @__PURE__ */ jsxs10("div", { className: "ui-card rounded-3xl p-6 space-y-4", children: [
      /* @__PURE__ */ jsx11("div", { className: `h-12 w-12 rounded-2xl flex items-center justify-center ${pillar.color}`, children: /* @__PURE__ */ jsx11(pillar.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx11("h3", { className: "font-display font-bold text-lg text-slate-900", children: pillar.title }),
      /* @__PURE__ */ jsx11("p", { className: "text-sm text-slate-500 leading-relaxed", children: pillar.desc })
    ] }, pillar.title)) })
  ] }) });
};

// src/pages/Contact.tsx
import { useEffect as useEffect7, useState as useState6 } from "react";

// src/lib/submit.ts
var SHOP_PHONE = "073 719 0821";
var SHOP_PHONE_TEL = "+27737190821";
var SHOP_EMAIL = "info@gladchemistry.com";
var SHOP_WHATSAPP = "https://wa.me/27737190821";
var isRecord = (value) => typeof value === "object" && value !== null;
async function postJson(path, payload) {
  let res;
  try {
    res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch {
    return {
      ok: false,
      message: "We could not reach the shop \u2014 your connection may have dropped. Nothing was sent, so nothing is lost.",
      retryable: true,
      notConfigured: false
    };
  }
  const raw = await res.text();
  let body = null;
  try {
    body = raw ? JSON.parse(raw) : null;
  } catch {
    body = null;
  }
  const json = isRecord(body) ? body : null;
  if (!json) {
    return {
      ok: false,
      message: "The ordering service is not responding on this deployment (it returned no confirmation). Nothing was sent.",
      retryable: res.ok,
      notConfigured: res.status === 404 || res.ok,
      detail: `HTTP ${res.status} from ${path}`
    };
  }
  if (res.ok && json.ok === true) {
    return {
      ok: true,
      reference: typeof json.reference === "string" ? json.reference : void 0
    };
  }
  const detail = typeof json.detail === "string" ? json.detail : void 0;
  const errorCode = typeof json.error === "string" ? json.error : "";
  if (errorCode === "not_configured") {
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Online submission is not switched on for this deployment yet.",
      retryable: false,
      notConfigured: true,
      detail
    };
  }
  if (errorCode === "validation_failed" && isRecord(json.fields)) {
    const fields = {};
    for (const [key, value] of Object.entries(json.fields)) {
      if (typeof value === "string") fields[key] = value;
    }
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Please check the highlighted fields.",
      fields,
      retryable: true,
      notConfigured: false
    };
  }
  if (errorCode === "catalogue_changed") {
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Some items are no longer available. Please refresh the shop.",
      retryable: false,
      notConfigured: false
    };
  }
  return {
    ok: false,
    message: typeof json.message === "string" ? json.message : `The shop did not accept that (HTTP ${res.status}). Nothing was charged.`,
    retryable: res.status >= 500 || res.status === 429,
    notConfigured: false,
    detail
  };
}
var submitContact = (input) => postJson("/api/contact", input);
async function checkContactAvailability() {
  return checkAvailability("/api/contact", "onlineMessaging");
}
async function checkAvailability(path, flag) {
  try {
    const res = await fetch(path, { method: "GET", headers: { Accept: "application/json" } });
    const raw = await res.text();
    let body = null;
    try {
      body = JSON.parse(raw);
    } catch {
      body = null;
    }
    if (!isRecord(body) || body.ok !== true) return "unavailable";
    return body[flag] === true ? "live" : "offline";
  } catch {
    return "unavailable";
  }
}
function contactMailto(input) {
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "(none)"}`,
    `Brand: ${input.brand}`,
    `Enquiry: ${input.type === "wholesale" ? "Wholesale & bulk" : "Retail / general"}`,
    "",
    input.message
  ].join("\n");
  return `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(
    `${input.type === "wholesale" ? "Wholesale" : "Enquiry"} \u2014 ${input.name}`
  )}&body=${encodeURIComponent(body)}`;
}

// src/pages/Contact.tsx
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var BRAND_OPTIONS = [
  "All 3 Brands",
  "Gladchemistry (Organic Personal Care)",
  "Felis be Glad (Fine Fragrances & Diffusers)",
  "Bubbles Detergents (Home & Car Care)"
];
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var PHONE_RE = /^(?:\+27\d{9}|0\d{9})$/;
var emptyForm = () => ({
  name: "",
  email: "",
  phone: "",
  brand: BRAND_OPTIONS[0],
  type: "retail",
  message: ""
});
var fieldClass = (invalid) => `w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 ${invalid ? "border-rose-300 focus:ring-rose-500/30" : "border-slate-200 focus:ring-emerald-500/30"}`;
var Contact = () => {
  const [form, setForm] = useState6(emptyForm);
  const [errors, setErrors] = useState6({});
  const [failure, setFailure] = useState6(null);
  const [sending, setSending] = useState6(false);
  const [sent, setSent] = useState6(false);
  const [availability, setAvailability] = useState6(null);
  useEffect7(() => {
    let alive = true;
    void checkContactAvailability().then((state) => {
      if (alive) setAvailability(state);
    });
    return () => {
      alive = false;
    };
  }, []);
  const setField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (failure) setFailure(null);
  };
  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "An email address is required.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email address looks incomplete.";
    if (form.phone.trim() && !PHONE_RE.test(form.phone.replace(/[\s()\-.]/g, "")))
      next.phone = "Use a 10-digit SA number, or leave it blank.";
    if (form.message.trim().length < 10)
      next.message = "Please tell us a little more (at least 10 characters).";
    return next;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;
    const localErrors = validate();
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setFailure(null);
      return;
    }
    setErrors({});
    setFailure(null);
    setSending(true);
    const result = await submitContact({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim()
    });
    setSending(false);
    if (result.ok) {
      setSent(true);
      return;
    }
    if (result.fields) setErrors(result.fields);
    setFailure(result);
  };
  const mailto = contactMailto(form);
  return /* @__PURE__ */ jsx12("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxs11("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
    /* @__PURE__ */ jsx12("div", { className: "lg:col-span-5 space-y-6", children: /* @__PURE__ */ jsxs11("div", { className: "ui-card rounded-3xl p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsx12("span", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600", children: "Get in Touch" }),
        /* @__PURE__ */ jsx12("h1", { className: "font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1", children: "Contact & Wholesale" }),
        /* @__PURE__ */ jsx12("p", { className: "text-sm text-slate-500 mt-2 leading-relaxed", children: "Have a question about Gladchemistry, Felis be Glad, or Bubbles Detergents? Reach out for orders, stockist opportunities, or bulk pricing." })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx12(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx12("p", { className: "font-display font-bold text-sm text-slate-900", children: "Location" }),
            /* @__PURE__ */ jsxs11("p", { className: "text-sm text-slate-500", children: [
              "Palm Springs Shopping Mall, Shop 19",
              /* @__PURE__ */ jsx12("br", {}),
              "Springs, 1559, Gauteng"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx12(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx12("p", { className: "font-display font-bold text-sm text-slate-900", children: "Email" }),
            /* @__PURE__ */ jsx12(
              "a",
              {
                href: `mailto:${SHOP_EMAIL}`,
                className: "text-sm text-slate-500 hover:text-emerald-700",
                children: SHOP_EMAIL
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx12(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx12("p", { className: "font-display font-bold text-sm text-slate-900", children: "Business Hours" }),
            /* @__PURE__ */ jsx12("p", { className: "text-sm text-slate-500", children: "Mon \u2013 Fri: 08:00 \u2013 17:00 | Sat: 09:00 \u2013 13:00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx12(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx12("p", { className: "font-display font-bold text-sm text-slate-900", children: "Phone & WhatsApp" }),
            /* @__PURE__ */ jsx12(
              "a",
              {
                href: `tel:${SHOP_PHONE_TEL}`,
                className: "text-sm text-slate-500 hover:text-emerald-700",
                children: SHOP_PHONE
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx12("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx12(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "ui-card rounded-3xl p-8",
        children: sent ? /* @__PURE__ */ jsxs11("div", { className: "py-16 text-center space-y-3", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx12(CircleCheck, { className: "h-9 w-9" }) }),
          /* @__PURE__ */ jsx12("h2", { className: "font-display font-bold text-2xl text-slate-900", children: "Message delivered" }),
          /* @__PURE__ */ jsx12("p", { className: "text-sm text-slate-500 max-w-md mx-auto", children: "Gladchemistry Products has received your message and will respond to the email address you gave." }),
          /* @__PURE__ */ jsx12(
            "button",
            {
              onClick: () => {
                setSent(false);
                setForm(emptyForm());
              },
              className: "mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer",
              children: "Send Another Message"
            }
          )
        ] }) : /* @__PURE__ */ jsxs11("form", { onSubmit: handleSubmit, className: "space-y-5", noValidate: true, children: [
          availability && availability !== "live" && !failure && /* @__PURE__ */ jsxs11("div", { className: "p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[12px] text-amber-900 space-y-2", children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex gap-2.5", children: [
              /* @__PURE__ */ jsx12(TriangleExclamationPoint, { className: "h-4 w-4 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs11("div", { children: [
                /* @__PURE__ */ jsx12("p", { className: "font-bold", children: availability === "offline" ? "Online messaging is not switched on yet" : "This deployment cannot send messages" }),
                /* @__PURE__ */ jsx12("p", { className: "mt-0.5", children: "You can still write to us here and send it straight from your own email \u2014 everything below is carried across." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs11("div", { className: "flex flex-wrap gap-2 pt-1", children: [
              /* @__PURE__ */ jsx12(
                "a",
                {
                  href: mailto,
                  className: "px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold",
                  children: "Write this in my email app"
                }
              ),
              /* @__PURE__ */ jsx12(
                "a",
                {
                  href: SHOP_WHATSAPP,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold",
                  children: "WhatsApp"
                }
              ),
              /* @__PURE__ */ jsx12(
                "a",
                {
                  href: `tel:${SHOP_PHONE_TEL}`,
                  className: "px-3 py-1.5 rounded-lg bg-white border border-amber-300 font-bold",
                  children: SHOP_PHONE
                }
              )
            ] })
          ] }),
          failure && /* @__PURE__ */ jsxs11(
            "div",
            {
              className: `p-3.5 rounded-xl border text-[12px] space-y-2 ${failure.notConfigured ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-rose-50 border-rose-200 text-rose-900"}`,
              children: [
                /* @__PURE__ */ jsxs11("div", { className: "flex gap-2.5", children: [
                  /* @__PURE__ */ jsx12(TriangleExclamationPoint, { className: "h-4 w-4 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxs11("div", { children: [
                    /* @__PURE__ */ jsx12("p", { className: "font-bold", children: failure.notConfigured ? "Online messaging is not live yet" : "Your message was not sent" }),
                    /* @__PURE__ */ jsx12("p", { className: "mt-0.5", children: failure.message })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "flex flex-wrap gap-2 pt-1", children: [
                  /* @__PURE__ */ jsx12(
                    "a",
                    {
                      href: mailto,
                      className: "px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold",
                      children: "Send by email instead"
                    }
                  ),
                  /* @__PURE__ */ jsxs11(
                    "a",
                    {
                      href: SHOP_WHATSAPP,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold inline-flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ jsx12(MessageCircle, { className: "h-3.5 w-3.5" }),
                        "WhatsApp"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx12(
                    "a",
                    {
                      href: `tel:${SHOP_PHONE_TEL}`,
                      className: "px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-bold",
                      children: SHOP_PHONE
                    }
                  )
                ] }),
                failure.detail && /* @__PURE__ */ jsxs11("details", { className: "text-[11px] opacity-70", children: [
                  /* @__PURE__ */ jsx12("summary", { className: "cursor-pointer", children: "Technical detail" }),
                  /* @__PURE__ */ jsx12("p", { className: "mt-1 break-words", children: failure.detail })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit", children: [
            /* @__PURE__ */ jsx12(
              "button",
              {
                type: "button",
                onClick: () => setField("type")("retail"),
                className: `px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${form.type === "retail" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`,
                "aria-pressed": form.type === "retail",
                children: "Retail / General"
              }
            ),
            /* @__PURE__ */ jsx12(
              "button",
              {
                type: "button",
                onClick: () => setField("type")("wholesale"),
                className: `px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${form.type === "wholesale" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`,
                "aria-pressed": form.type === "wholesale",
                children: "Wholesale & Bulk"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsx12("label", { htmlFor: "ct-name", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Full Name" }),
              /* @__PURE__ */ jsx12(
                "input",
                {
                  id: "ct-name",
                  type: "text",
                  autoComplete: "name",
                  value: form.name,
                  onChange: (e) => setField("name")(e.target.value),
                  placeholder: "Your name",
                  className: fieldClass(Boolean(errors.name)),
                  "aria-invalid": Boolean(errors.name)
                }
              ),
              errors.name && /* @__PURE__ */ jsx12("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.name })
            ] }),
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsx12("label", { htmlFor: "ct-email", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Email Address" }),
              /* @__PURE__ */ jsx12(
                "input",
                {
                  id: "ct-email",
                  type: "email",
                  autoComplete: "email",
                  value: form.email,
                  onChange: (e) => setField("email")(e.target.value),
                  placeholder: "you@example.com",
                  className: fieldClass(Boolean(errors.email)),
                  "aria-invalid": Boolean(errors.email)
                }
              ),
              errors.email && /* @__PURE__ */ jsx12("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("label", { htmlFor: "ct-phone", className: "block text-xs font-bold text-slate-700 mb-1.5", children: [
                "Phone ",
                /* @__PURE__ */ jsx12("span", { className: "font-normal text-slate-400", children: "(optional)" })
              ] }),
              /* @__PURE__ */ jsx12(
                "input",
                {
                  id: "ct-phone",
                  type: "tel",
                  inputMode: "tel",
                  autoComplete: "tel",
                  value: form.phone,
                  onChange: (e) => setField("phone")(e.target.value),
                  placeholder: "073 719 0821",
                  className: fieldClass(Boolean(errors.phone)),
                  "aria-invalid": Boolean(errors.phone)
                }
              ),
              errors.phone && /* @__PURE__ */ jsx12("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.phone })
            ] }),
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsx12("label", { htmlFor: "ct-brand", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Brand of Interest" }),
              /* @__PURE__ */ jsx12(
                "select",
                {
                  id: "ct-brand",
                  value: form.brand,
                  onChange: (e) => setField("brand")(e.target.value),
                  className: fieldClass(Boolean(errors.brand)),
                  children: BRAND_OPTIONS.map((b) => /* @__PURE__ */ jsx12("option", { value: b, children: b }, b))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx12("label", { htmlFor: "ct-message", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsx12(
              "textarea",
              {
                id: "ct-message",
                rows: 4,
                value: form.message,
                onChange: (e) => setField("message")(e.target.value),
                placeholder: "Tell us how we can help...",
                className: fieldClass(Boolean(errors.message)),
                "aria-invalid": Boolean(errors.message)
              }
            ),
            errors.message && /* @__PURE__ */ jsx12("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx12(
            "button",
            {
              type: "submit",
              disabled: sending,
              className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-wait",
              children: sending ? /* @__PURE__ */ jsxs11(Fragment4, { children: [
                /* @__PURE__ */ jsx12(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Sending\u2026"
              ] }) : /* @__PURE__ */ jsxs11(Fragment4, { children: [
                /* @__PURE__ */ jsx12(Send, { className: "h-4 w-4" }),
                "Send Message"
              ] })
            }
          )
        ] })
      }
    ) })
  ] }) });
};

// src/pages/NotFound.tsx
import { Link as Link6, useLocation } from "react-router-dom";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var NotFound = () => {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs12("div", { children: [
    /* @__PURE__ */ jsx13("section", { style: { background: "var(--lime)" }, children: /* @__PURE__ */ jsxs12("div", { className: "mx-auto max-w-[1240px] px-5 py-14 sm:py-20 text-center", children: [
      /* @__PURE__ */ jsx13("span", { className: "eyebrow", style: { color: "var(--ink)" }, children: "404 \xB7 Page not found" }),
      /* @__PURE__ */ jsxs12("h1", { className: "display-xl mt-3", style: { color: "var(--ink)" }, children: [
        "We couldn\u2019t find that ",
        /* @__PURE__ */ jsx13("span", { className: "u-mark", children: "page" })
      ] }),
      /* @__PURE__ */ jsx13(
        "p",
        {
          className: "mt-4 text-[16px] leading-relaxed max-w-[52ch] mx-auto",
          style: { color: "var(--ink-soft)" },
          children: "The link may be old or mistyped. Everything we make is one tap away."
        }
      ),
      /* @__PURE__ */ jsxs12(
        "p",
        {
          className: "mt-4 inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] max-w-full truncate",
          style: { background: "rgba(16,35,28,.09)", color: "var(--ink-soft)" },
          children: [
            "Requested: ",
            pathname
          ]
        }
      ),
      /* @__PURE__ */ jsxs12("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-2.5", children: [
        /* @__PURE__ */ jsxs12(Link6, { to: "/", className: "btn btn-ink", children: [
          /* @__PURE__ */ jsx13(House, { className: "h-4 w-4" }),
          "Back to home"
        ] }),
        /* @__PURE__ */ jsxs12(Link6, { to: "/shop", className: "btn btn-ghost", children: [
          /* @__PURE__ */ jsx13(ShoppingBag, { className: "h-4 w-4" }),
          "Shop the range"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs12("section", { className: "mx-auto max-w-[1240px] px-5 py-14", children: [
      /* @__PURE__ */ jsxs12("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7", children: [
        /* @__PURE__ */ jsxs12("div", { children: [
          /* @__PURE__ */ jsx13("span", { className: "eyebrow", children: "Jump straight in" }),
          /* @__PURE__ */ jsx13("h2", { className: "display-md mt-2", style: { color: "var(--ink)" }, children: "Try one of these" })
        ] }),
        /* @__PURE__ */ jsxs12("span", { className: "text-[12px] font-bold text-slate-400", children: [
          PRODUCTS.length,
          " products waiting"
        ] })
      ] }),
      /* @__PURE__ */ jsx13("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: BRAND_LIST.map((b) => /* @__PURE__ */ jsxs12(
        Link6,
        {
          to: `/shop?brand=${b.id}`,
          className: "brand-tile group block p-5",
          style: { ["--tile-tone"]: b.stageTone, background: b.stageTone },
          children: [
            /* @__PURE__ */ jsxs12(
              "div",
              {
                className: "relative rounded-[16px] overflow-hidden mb-4",
                style: { height: 160, background: b.stageTone },
                children: [
                  /* @__PURE__ */ jsx13("div", { className: "disc" }),
                  /* @__PURE__ */ jsx13("div", { className: "relative w-full h-full grid place-items-center", children: /* @__PURE__ */ jsx13(
                    "span",
                    {
                      className: "font-display text-[26px] font-extrabold",
                      style: { color: b.inkColor },
                      children: b.name.charAt(0)
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsx13("p", { className: "text-[10px] font-black uppercase tracking-[0.14em]", style: { color: b.inkColor }, children: b.category }),
            /* @__PURE__ */ jsx13("h3", { className: "font-display font-extrabold text-[19px] mt-1", style: { color: "var(--ink)" }, children: b.name }),
            /* @__PURE__ */ jsxs12(
              "span",
              {
                className: "mt-2 inline-flex items-center gap-1 text-[12px] font-black",
                style: { color: b.inkColor },
                children: [
                  "Shop ",
                  b.name.split(" ")[0],
                  /* @__PURE__ */ jsx13(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
                ]
              }
            )
          ]
        },
        b.id
      )) }),
      /* @__PURE__ */ jsxs12("div", { className: "mt-10 panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx13(
            "div",
            {
              className: "h-10 w-10 rounded-xl grid place-items-center shrink-0",
              style: { background: "var(--lime)", color: "var(--ink)" },
              children: /* @__PURE__ */ jsx13(Sparkles, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxs12("div", { children: [
            /* @__PURE__ */ jsx13("p", { className: "font-display font-extrabold text-[16px]", style: { color: "var(--ink)" }, children: "Looking for something specific?" }),
            /* @__PURE__ */ jsx13("p", { className: "text-[13px] text-slate-500 mt-0.5", children: "Tell us what you need and we\u2019ll point you at the right house." })
          ] })
        ] }),
        /* @__PURE__ */ jsx13(Link6, { to: "/contact", className: "btn btn-sm btn-fern shrink-0", children: "Contact us" })
      ] })
    ] })
  ] });
};

// src/App.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx14(BrowserRouter, { children: /* @__PURE__ */ jsxs13("div", { className: "min-h-screen flex flex-col", style: { background: "var(--cream)" }, children: [
    /* @__PURE__ */ jsx14(Navbar, {}),
    /* @__PURE__ */ jsx14("main", { className: "flex-1", children: /* @__PURE__ */ jsxs13(Routes, { children: [
      /* @__PURE__ */ jsx14(Route, { path: "/", element: /* @__PURE__ */ jsx14(Home, {}) }),
      /* @__PURE__ */ jsx14(Route, { path: "/shop", element: /* @__PURE__ */ jsx14(Shop, {}) }),
      /* @__PURE__ */ jsx14(Route, { path: "/dashboard", element: /* @__PURE__ */ jsx14(Navigate, { to: "/shop", replace: true }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/dashboard/*", element: /* @__PURE__ */ jsx14(Navigate, { to: "/shop", replace: true }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/cart", element: /* @__PURE__ */ jsx14(Navigate, { to: "/shop", replace: true }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/brands", element: /* @__PURE__ */ jsx14(Brands, {}) }),
      /* @__PURE__ */ jsx14(Route, { path: "/about", element: /* @__PURE__ */ jsx14(About, {}) }),
      /* @__PURE__ */ jsx14(Route, { path: "/contact", element: /* @__PURE__ */ jsx14(Contact, {}) }),
      /* @__PURE__ */ jsx14(Route, { path: "*", element: /* @__PURE__ */ jsx14(NotFound, {}) })
    ] }) }),
    /* @__PURE__ */ jsx14(Footer, {})
  ] }) });
}

// tests/smoke.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function Smoke() {
  return /* @__PURE__ */ jsx15(App, {});
}
var goTo = (path) => {
  window.history.pushState({}, "", path);
};
export {
  Smoke,
  goTo
};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/arrow-right.mjs:
lucide-react/dist/esm/icons/award.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/circle-check.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/flask-conical.mjs:
lucide-react/dist/esm/icons/heart-handshake.mjs:
lucide-react/dist/esm/icons/house.mjs:
lucide-react/dist/esm/icons/leaf.mjs:
lucide-react/dist/esm/icons/loader-circle.mjs:
lucide-react/dist/esm/icons/mail.mjs:
lucide-react/dist/esm/icons/map-pin.mjs:
lucide-react/dist/esm/icons/menu.mjs:
lucide-react/dist/esm/icons/message-circle.mjs:
lucide-react/dist/esm/icons/phone.mjs:
lucide-react/dist/esm/icons/search.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/shopping-bag.mjs:
lucide-react/dist/esm/icons/sparkles.mjs:
lucide-react/dist/esm/icons/triangle-exclamation-point.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.75.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
