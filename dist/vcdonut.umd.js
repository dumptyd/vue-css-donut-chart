(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcdonut"] = factory();
	else
		root["vcdonut"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7e79":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8e2ba70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Donut.vue?vue&type=template&id=501710f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdc-container",style:(_vm.placementStyles.container)},[_c('div',{staticClass:"cdc-sizer",style:(_vm.sizerStyles)},[_c('div',{ref:"donut",staticClass:"cdc",style:(_vm.donutStyles)},[_c('donut-sections',_vm._g({attrs:{"sections":_vm.donutSections,"start-angle":_vm.half ? -90 : _vm.startAngle}},_vm.sectionListeners)),_c('div',{staticClass:"cdc-overlay",style:(_vm.overlayStyles)},[_c('div',{staticClass:"cdc-overlay-sizer",style:(_vm.overlaySizerStyles)},[_c('div',{staticClass:"cdc-text",style:(_vm.donutTextStyles)},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)])])],1)]),_vm._t("legend",[(_vm.hasLegend)?_c('div',{staticClass:"cdc-legend",style:(_vm.placementStyles.legend)},_vm._l((_vm.legend),function(item,idx){return _c('span',{key:idx,staticClass:"cdc-legend-item",attrs:{"title":item.percent}},[_c('span',{staticClass:"cdc-legend-item-color",style:(item.styles)}),_c('span',[_vm._v(_vm._s(item.label))])])}),0):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Donut.vue?vue&type=template&id=501710f4&

// CONCATENATED MODULE: ./src/utils/events.js
var nativeSectionEvents = ['click', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'mousemove'].map(function (nativeEventName) {
  return {
    nativeEventName: nativeEventName,
    sectionEventName: "section-".concat(nativeEventName)
  };
});
// CONCATENATED MODULE: ./src/utils/colors.js
var colors = ['#FF6384', '#36A2EB', '#FFCE56', '#F58231', '#46F0F0', '#D2F53C', '#911EB4', '#F032E6', '#3CB44B', '#FFE119', '#E6194B', '#FABEBE', '#008080', '#E6BEFF', '#0082C8', '#AA6E28', '#FFFAC8', '#800000', '#AAFFC3', '#808000', '#FFD8B1', '#000080', '#808080', '#000000'];
/* harmony default export */ var utils_colors = (colors);
// CONCATENATED MODULE: ./src/utils/misc.js
var _placementStyles;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var legendGap = '1em';
var defaultColor = 'dodgerblue';
var placement = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};
var misc_placementStyles = (_placementStyles = {}, _defineProperty(_placementStyles, placement.TOP, {
  container: {
    flexDirection: 'column'
  },
  legend: {
    order: -1,
    margin: 0,
    marginBottom: legendGap
  }
}), _defineProperty(_placementStyles, placement.RIGHT, {
  container: {},
  legend: {
    flexDirection: 'column',
    margin: 0,
    marginLeft: legendGap
  }
}), _defineProperty(_placementStyles, placement.BOTTOM, {
  container: {
    flexDirection: 'column'
  },
  legend: {}
}), _defineProperty(_placementStyles, placement.LEFT, {
  container: {},
  legend: {
    flexDirection: 'column',
    order: -1,
    margin: 0,
    marginRight: legendGap
  }
}), _placementStyles);

var isObject = function isObject(obj) {
  return !!obj && obj.constructor === Object;
};

var sectionKeys = [{
  type: 'number',
  key: 'value',
  required: true
}, {
  key: 'label'
}, {
  key: 'color'
}];
function sectionValidator(section) {
  if (!isObject(section)) return false;
  return sectionKeys.reduce(function (acc, curr) {
    if (!acc) return false;
    var valid = true;
    if (curr.required) valid = valid && Object.hasOwnProperty.call(section, curr.key);
    if (curr.type) valid = valid && _typeof(section[curr.key]) === curr.type;
    return acc && valid;
  }, true);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8e2ba70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DonutSections.vue?vue&type=template&id=cafc83a2&
var DonutSectionsvue_type_template_id_cafc83a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cdc-sections",style:(_vm.containerStyles)},_vm._l((_vm.donutSections),function(section,idx){return _c('div',_vm._g({key:idx,staticClass:"cdc-section",class:section.className,style:(section.sectionStyles)},section.listeners),[_c('div',{staticClass:"cdc-filler",style:(section.fillerStyles),attrs:{"title":section.label}})])}),0)}
var DonutSectionsvue_type_template_id_cafc83a2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DonutSections.vue?vue&type=template&id=cafc83a2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DonutSections.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { DonutSectionsvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DonutSectionsvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//


var sectionClass = {
  LEFT: 'cdc-section-left',
  RIGHT: 'cdc-section-right'
};
/* harmony default export */ var DonutSectionsvue_type_script_lang_js_ = ({
  props: {
    startAngle: {
      type: Number,
      default: 0
    },
    sections: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    containerStyles: function containerStyles() {
      return {
        transform: "rotate(".concat(this.startAngle, "deg)")
      };
    },
    donutSections: function donutSections() {
      var _this = this;

      var maxDegreesPerSection = 180;
      var degreesConsumed = 0;
      var offsetBy = 0;
      var sections = this.sections.map(function (section) {
        var _ref = [sectionClass.RIGHT, -180],
            className = _ref[0],
            offset = _ref[1];

        if (degreesConsumed >= maxDegreesPerSection) {
          var _ref2 = [sectionClass.LEFT, 180];
          className = _ref2[0];
          offset = _ref2[1];
        }

        var degree = offset + section.degree;
        var fillerStyles = {
          backgroundColor: section.color || defaultColor,
          transform: "rotate(".concat(degree, "deg)")
        };
        var sectionStyles = {
          transform: "rotate(".concat(offsetBy, "deg)")
        };
        degreesConsumed += section.degree;
        if (degreesConsumed === 180) offsetBy = 0;else offsetBy += section.degree;
        var listeners = nativeSectionEvents.reduce(function (acc, _ref3) {
          var nativeEventName = _ref3.nativeEventName,
              sectionEventName = _ref3.sectionEventName;
          return _objectSpread(_objectSpread({}, acc), {}, DonutSectionsvue_type_script_lang_js_defineProperty({}, nativeEventName, function (event) {
            return _this.emitEvent(sectionEventName, section, event);
          }));
        }, {});
        return {
          label: section.label,
          className: className,
          fillerStyles: fillerStyles,
          sectionStyles: sectionStyles,
          listeners: listeners
        };
      });
      return sections;
    }
  },
  methods: {
    emitEvent: function emitEvent(sectionEventName, section, event) {
      if (section.value === 0) return;
      this.$emit(sectionEventName, section.$section, event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/DonutSections.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DonutSectionsvue_type_script_lang_js_ = (DonutSectionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DonutSections.vue





/* normalize component */

var component = normalizeComponent(
  components_DonutSectionsvue_type_script_lang_js_,
  DonutSectionsvue_type_template_id_cafc83a2_render,
  DonutSectionsvue_type_template_id_cafc83a2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DonutSections = (component.exports);
// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__("7e79");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Donut.vue?vue&type=script&lang=js&
function Donutvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Donutvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Donutvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Donutvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Donutvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Donutvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Donutvue_type_script_lang_js_ = ({
  name: 'vc-donut',
  props: {
    // diameter of the donut
    size: {
      type: Number,
      default: 250,
      validator: function validator(v) {
        return v > 0;
      }
    },
    // unit to use for `size`
    unit: {
      type: String,
      default: 'px'
    },
    // percentage of donut ring's thickness
    thickness: {
      type: Number,
      default: 20,
      validator: function validator(v) {
        return v >= 0 && v <= 100;
      }
    },
    // text in the middle of the donut, this can also be passed using the default slot
    text: {
      type: String,
      default: null
    },
    autoAdjustTextSize: {
      type: Boolean,
      default: true
    },
    // color to use for the middle of the donut
    // set this to `transparent` or `thickness` to 100 to make a pie chart instead
    background: {
      type: String,
      default: '#ffffff'
    },
    // color to use for the empty ring areas
    foreground: {
      type: String,
      default: '#eeeeee'
    },
    // sections of the donut, must have a `value` property
    // other valid properties are `label` and `color` (default is `dodgerblue`)
    sections: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(sections) {
        for (var i = 0; i < sections.length; ++i) {
          /* istanbul ignore if - already covered by unit tests for sectionValidator */
          if (!sectionValidator(sections[i])) return false;
        }

        return true;
      }
    },
    total: {
      type: Number,
      default: 100,
      validator: function validator(v) {
        return v > 0;
      }
    },
    hasLegend: {
      type: Boolean,
      default: false
    },
    legendPlacement: {
      type: String,
      default: placement.BOTTOM,
      validator: function validator(val) {
        return !!placement[val.toUpperCase()];
      }
    },
    // degree angle at which the first section begins
    startAngle: {
      type: Number,
      default: 0
    },
    half: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    autoAdjustTextSize: function autoAdjustTextSize(val) {
      if (val) window.addEventListener('resize', this.resizeListener);else window.removeEventListener('resize', this.resizeListener);
      this.recalcFontSize();
    },
    size: function size() {
      this.recalcFontSize();
    },
    unit: function unit() {
      this.recalcFontSize();
    }
  },
  data: function data() {
    return {
      donutEl: null,
      fontSize: '1em',
      resizeListener: null
    };
  },
  computed: {
    donutSections: function donutSections() {
      var _this = this;

      var valueTotal = this.sections.reduce(function (a, c) {
        return a + c.value;
      }, 0);
      if (typeof valueTotal !== 'number') return [];
      valueTotal = Number(valueTotal.toFixed(2));

      if (valueTotal > this.total) {
        var err = "Sum of all the sections' values (".concat(valueTotal, ") should not exceed `total` (").concat(this.total, ")");
        throw new Error(err);
      }

      var degreesInACircle = this.half ? 180 : 360;
      var degreesInASection = 180;
      var consumedDegrees = 0;
      var currentDefaultColorIdx = 0;
      var sections = [];
      this.sections.forEach(function (section) {
        var valToDeg = degreesInACircle * (section.value / _this.total);
        var degreeArr = [valToDeg];

        if (valToDeg > degreesInASection) {
          degreeArr = [degreesInASection, valToDeg - degreesInASection];
        }

        var color = section.color || utils_colors[currentDefaultColorIdx++];
        degreeArr.forEach(function (degree) {
          // limit to 2 decimal digits to avoid floating point arithmetic issues
          var consumedWithCurrent = Number((consumedDegrees + degree).toFixed(2));

          if (consumedWithCurrent > degreesInASection) {
            var remainingDegreesInCurrentSection = degreesInASection - consumedDegrees;
            sections.push(Donutvue_type_script_lang_js_objectSpread(Donutvue_type_script_lang_js_objectSpread({}, section), {}, {
              degree: remainingDegreesInCurrentSection,
              color: color,
              $section: section
            }), Donutvue_type_script_lang_js_objectSpread(Donutvue_type_script_lang_js_objectSpread({}, section), {}, {
              degree: degree - remainingDegreesInCurrentSection,
              color: color,
              $section: section
            }));
          } else {
            sections.push(Donutvue_type_script_lang_js_objectSpread(Donutvue_type_script_lang_js_objectSpread({}, section), {}, {
              degree: degree,
              color: color,
              $section: section
            }));
          }

          consumedDegrees += degree;

          if (consumedDegrees >= degreesInASection) {
            consumedDegrees -= degreesInASection;
          }
        });
      });
      return sections;
    },
    legend: function legend() {
      var _this2 = this;

      /* istanbul ignore if - legend isn't rendered at all because of v-if="hasLegend" */
      if (!this.hasLegend) return null;
      var currentDefaultColorIdx = 0;
      return this.sections.map(function (section, idx) {
        return {
          label: section.label || "Section ".concat(idx + 1),
          percent: "".concat(section.value, " (").concat(section.value / _this2.total * 100, "%)"),
          styles: {
            backgroundColor: section.color || utils_colors[currentDefaultColorIdx++]
          }
        };
      });
    },
    placementStyles: function placementStyles() {
      if (!this.hasLegend) return {};
      return misc_placementStyles[this.legendPlacement];
    },
    donutStyles: function donutStyles() {
      var size = "".concat(this.size).concat(this.unit);
      var styles = {
        width: size,
        paddingBottom: size,
        backgroundColor: this.foreground
      };

      if (this.half) {
        styles.borderBottomLeftRadius = 0;
        styles.borderBottomRightRadius = 0;
      }

      return styles;
    },
    sizerStyles: function sizerStyles() {
      return this.half ? {
        height: "".concat(this.size / 2).concat(this.unit),
        overflow: 'hidden'
      } : {};
    },
    overlayStyles: function overlayStyles() {
      var availablePercent = 100;
      var size = availablePercent - this.thickness;
      var sizePercent = "".concat(size, "%");
      var pos = "calc(50% - ".concat(size / 2, "%)");
      var styles = {
        height: sizePercent,
        width: sizePercent,
        top: pos,
        left: pos,
        backgroundColor: this.background
      };

      if (this.half) {
        styles.alignItems = 'flex-start';
      }

      return styles;
    },
    overlaySizerStyles: function overlaySizerStyles() {
      return this.half ? {
        height: '50%',
        display: 'flex',
        alignItems: 'center'
      } : {};
    },
    donutTextStyles: function donutTextStyles() {
      var fontSize = this.fontSize;
      return {
        fontSize: fontSize
      };
    },
    sectionListeners: function sectionListeners() {
      var _this3 = this;

      return nativeSectionEvents.reduce(function (acc, _ref) {
        var sectionEventName = _ref.sectionEventName;
        return Donutvue_type_script_lang_js_objectSpread(Donutvue_type_script_lang_js_objectSpread({}, acc), {}, Donutvue_type_script_lang_js_defineProperty({}, sectionEventName, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _this3.emitSectionEvent.apply(_this3, [sectionEventName].concat(args));
        }));
      }, {});
    }
  },
  methods: {
    recalcFontSize: function recalcFontSize() {
      var _this4 = this;

      if (!this.autoAdjustTextSize) {
        this.fontSize = '1em';
        return;
      }

      var scaleDownBy = 0.08;
      var widthInPx = this.size;
      this.$nextTick(function () {
        if (_this4.unit !== 'px') {
          /* istanbul ignore else */
          if (_this4.donutEl) widthInPx = _this4.donutEl.clientWidth;else widthInPx = null;
        }

        _this4.fontSize = widthInPx ? "".concat((widthInPx * scaleDownBy).toFixed(2), "px") : '1em';
      });
    },
    emitSectionEvent: function emitSectionEvent(sectionEventName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.$emit.apply(this, [sectionEventName].concat(args));
    }
  },
  created: function created() {
    this.resizeListener = this.recalcFontSize.bind(this);
  },
  mounted: function mounted() {
    this.donutEl = this.$refs.donut;

    if (this.autoAdjustTextSize) {
      this.recalcFontSize();
      window.addEventListener('resize', this.resizeListener);
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  },
  components: {
    DonutSections: DonutSections
  }
});
// CONCATENATED MODULE: ./src/components/Donut.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Donutvue_type_script_lang_js_ = (Donutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Donut.vue





/* normalize component */

var Donut_component = normalizeComponent(
  components_Donutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Donut = (Donut_component.exports);
// CONCATENATED MODULE: ./src/index.js

var DonutPlugin = {
  install: function install(Vue) {
    Vue.component(Donut.name, Donut);
  }
};
/* harmony default export */ var src = (DonutPlugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});