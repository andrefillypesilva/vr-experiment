/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aframe-event-set-component/dist/aframe-event-set-component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/aframe-event-set-component/dist/aframe-event-set-component.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse { var i, a; }\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_538__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_538__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__nested_webpack_require_538__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__nested_webpack_require_538__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__nested_webpack_require_538__.d = function(exports, name, getter) {\n/******/ \t\tif(!__nested_webpack_require_538__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__nested_webpack_require_538__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__nested_webpack_require_538__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __nested_webpack_require_538__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__nested_webpack_require_538__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_538__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__nested_webpack_require_538__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__nested_webpack_require_538__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__nested_webpack_require_538__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__nested_webpack_require_538__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __nested_webpack_require_538__(__nested_webpack_require_538__.s = \"./index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./index.js\":\n/*!******************!*\\\n  !*** ./index.js ***!\n  \\******************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/* global AFRAME */\nvar styleParser = AFRAME.utils.styleParser;\n\nif (typeof AFRAME === 'undefined') {\n  throw new Error('Component attempted to register before AFRAME was available.');\n}\n\nAFRAME.registerComponent('event-set', {\n  schema: {\n    default: '',\n    parse: function parse(value) {\n      return styleParser.parse(value);\n    }\n  },\n\n  multiple: true,\n\n  init: function init() {\n    this.eventHandler = null;\n    this.eventName = null;\n  },\n\n  update: function update(oldData) {\n    this.removeEventListener();\n    this.updateEventListener();\n    this.addEventListener();\n  },\n\n  remove: function remove() {\n    this.removeEventListener();\n  },\n\n  pause: function pause() {\n    this.removeEventListener();\n  },\n\n  play: function play() {\n    this.addEventListener();\n  },\n\n  /**\n   * Update source-of-truth event listener registry.\n   * Does not actually attach event listeners yet.\n   */\n  updateEventListener: function updateEventListener() {\n    var _this = this;\n\n    var data = this.data;\n    var el = this.el;\n    var event;\n    var target;\n    var targetEl;\n\n    // Set event listener using `_event`.\n    event = data._event || this.id;\n    target = data._target;\n\n    // Decide the target to `setAttribute` on.\n    targetEl = target ? el.sceneEl.querySelector(target) : el;\n\n    this.eventName = event;\n\n    var handler = function handler() {\n      var propName;\n      // Set attributes.\n      for (propName in data) {\n        if (propName === '_event' || propName === '_target') {\n          continue;\n        }\n        AFRAME.utils.entity.setComponentProperty.call(_this, targetEl, propName, data[propName]);\n      }\n    };\n\n    if (!isNaN(data._delay)) {\n      // Delay.\n      this.eventHandler = function () {\n        setTimeout(handler, parseFloat(data._delay));\n      };\n    } else {\n      this.eventHandler = handler;\n    }\n  },\n\n  addEventListener: function addEventListener() {\n    this.el.addEventListener(this.eventName, this.eventHandler);\n  },\n\n  removeEventListener: function removeEventListener() {\n    this.el.removeEventListener(this.eventName, this.eventHandler);\n  }\n});\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack://vr-experiment/./node_modules/aframe-event-set-component/dist/aframe-event-set-component.js?");

/***/ }),

/***/ "./node_modules/aframe-look-at-component/index.js":
/*!********************************************************!*\
  !*** ./node_modules/aframe-look-at-component/index.js ***!
  \********************************************************/
/***/ (() => {

eval("var debug = AFRAME.utils.debug;\nvar coordinates = AFRAME.utils.coordinates;\n\nvar warn = debug('components:look-at:warn');\nvar isCoordinates = coordinates.isCoordinates || coordinates.isCoordinate;\n\ndelete AFRAME.components['look-at'];\n\n/**\n * Look-at component.\n *\n * Modifies rotation to either track another entity OR do a one-time turn towards a position\n * vector.\n *\n * If tracking an object via setting the component value via a selector, look-at will register\n * a behavior to the scene to update rotation on every tick.\n */\nAFRAME.registerComponent('look-at', {\n  schema: {\n    default: '0 0 0',\n\n    parse: function (value) {\n      // A static position to look at.\n      if (isCoordinates(value) || typeof value === 'object') {\n        return coordinates.parse(value);\n      }\n      // A selector to a target entity.\n      return value;\n    },\n\n    stringify: function (data) {\n      if (typeof data === 'object') {\n        return coordinates.stringify(data);\n      }\n      return data;\n    }\n  },\n\n  init: function () {\n    this.target3D = null;\n    this.vector = new THREE.Vector3();\n    this.cameraListener = AFRAME.utils.bind(this.cameraListener, this);\n    this.el.addEventListener('componentinitialized', this.cameraListener);\n    this.el.addEventListener('componentremoved', this.cameraListener);\n  },\n\n  /**\n   * If tracking an object, this will be called on every tick.\n   * If looking at a position vector, this will only be called once (until further updates).\n   */\n  update: function () {\n    var self = this;\n    var target = self.data;\n    var targetEl;\n\n    // No longer looking at anything (i.e., look-at=\"\").\n    if (!target || (typeof target === 'object' && !Object.keys(target).length)) {\n      return self.remove();\n    }\n\n    // Look at a position.\n    if (typeof target === 'object') {\n      return this.lookAt(new THREE.Vector3(target.x, target.y, target.z));\n    }\n\n    // Assume target is a string.\n    // Query for the element, grab its object3D, then register a behavior on the scene to\n    // track the target on every tick.\n    targetEl = self.el.sceneEl.querySelector(target);\n    if (!targetEl) {\n      warn('\"' + target + '\" does not point to a valid entity to look-at');\n      return;\n    }\n    if (!targetEl.hasLoaded) {\n      return targetEl.addEventListener('loaded', function () {\n        self.beginTracking(targetEl);\n      });\n    }\n    return self.beginTracking(targetEl);\n  },\n\n  tick: (function () {\n    var vec3 = new THREE.Vector3();\n\n    return function (t) {\n      // Track target object position. Depends on parent object keeping global transforms up\n      // to state with updateMatrixWorld(). In practice, this is handled by the renderer.\n      var target3D = this.target3D;\n      if (target3D) {\n        target3D.getWorldPosition(vec3);\n        this.lookAt(vec3);\n      }\n    }\n  })(),\n\n  remove: function () {\n    this.el.removeEventListener('componentinitialized', this.cameraListener);\n    this.el.removeEventListener('componentremoved', this.cameraListener);\n  },\n\n  beginTracking: function (targetEl) {\n    this.target3D = targetEl.object3D;\n  },\n\n  cameraListener: function (e) {\n    if (e.detail && e.detail.name === 'camera') {\n      this.update();\n    }\n  },\n\n  lookAt: function (position) {\n    var vector = this.vector;\n    var object3D = this.el.object3D;\n\n    if (this.el.getObject3D('camera')) {\n      // Flip the vector to -z, looking away from target for camera entities. When using\n      // lookat from THREE camera objects, this is applied for you, but since the camera is\n      // nested into a Object3D, we need to apply this manually.\n      vector.subVectors(object3D.position, position).add(object3D.position);\n    } else {\n      vector.copy(position);\n    }\n\n    object3D.lookAt(vector);\n  }\n});\n\n\n//# sourceURL=webpack://vr-experiment/./node_modules/aframe-look-at-component/index.js?");

/***/ }),

/***/ "./node_modules/aframe/dist/aframe-master.js":
/*!***************************************************!*\
  !*** ./node_modules/aframe/dist/aframe-master.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! aframe */ \"./node_modules/aframe/dist/aframe-master.js\");\n\n__webpack_require__(/*! aframe-event-set-component */ \"./node_modules/aframe-event-set-component/dist/aframe-event-set-component.js\");\n\n__webpack_require__(/*! aframe-look-at-component */ \"./node_modules/aframe-look-at-component/index.js\");\n\nAFRAME.registerComponent('start-configurations', {\n  init: function init() {\n    document.getElementById('btn_details').addEventListener('click', function () {\n      document.getElementById('label_details').setAttribute('visible', true);\n    });\n    document.getElementById('btn_cabin').addEventListener('click', function () {\n      document.getElementById('label_cabin').setAttribute('visible', true);\n    });\n    document.getElementById('btn_seat').addEventListener('click', function () {\n      document.getElementById('label_seat').setAttribute('visible', true);\n    });\n    document.getElementById('btn_details').addEventListener('mouseleave', function () {\n      setTimeout(function () {\n        document.getElementById('label_details').setAttribute('visible', false);\n      }, 3000);\n    });\n    document.getElementById('btn_cabin').addEventListener('mouseleave', function () {\n      setTimeout(function () {\n        document.getElementById('label_cabin').setAttribute('visible', false);\n      }, 3000);\n    });\n    document.getElementById('btn_seat').addEventListener('mouseleave', function () {\n      setTimeout(function () {\n        document.getElementById('label_seat').setAttribute('visible', false);\n      }, 3000);\n    });\n  }\n});\n\n//# sourceURL=webpack://vr-experiment/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;