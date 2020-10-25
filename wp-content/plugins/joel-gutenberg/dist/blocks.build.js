/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/add-content/add-content.js":
/*!*******************************************!*\
  !*** ./blocks/add-content/add-content.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global wp */\nconst {\n  createHigherOrderComponent\n} = wp.compose;\nconst {\n  Fragment\n} = wp.element;\nconst {\n  InspectorControls\n} = wp.editor;\nconst {\n  PanelBody,\n  CheckboxControl\n} = wp.components;\n\nfunction saveExtraContent(element, blockType, attributes) {\n  if (blockType.name !== 'core/group' || !attributes.content) {\n    return element;\n  }\n\n  return wp.element.createElement(\"div\", {\n    className: \"wp-block-group-option-wrapper\"\n  }, element, wp.element.createElement(\"p\", {\n    className: \"wp-block-group-option\"\n  }, \"logo\"));\n}\n\nfunction addContentAttributes(settings, name) {\n  if (name !== 'core/group') {\n    return settings;\n  }\n\n  const spacingAttributes = {\n    content: {\n      type: 'boolean',\n      default: false\n    }\n  };\n  return { ...settings,\n    attributes: { ...settings.attributes,\n      ...spacingAttributes\n    }\n  };\n}\n\nconst addInspectorControls = createHigherOrderComponent(BlockEdit => {\n  return props => {\n    const {\n      attributes: {\n        content\n      },\n      name,\n      setAttributes\n    } = props;\n\n    if (name !== 'core/group') {\n      return wp.element.createElement(BlockEdit, props);\n    }\n\n    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: \"Options\",\n      initialOpen: false\n    }, wp.element.createElement(CheckboxControl, {\n      label: \"Add extra content\",\n      checked: content,\n      onChange: content => {\n        setAttributes({\n          content\n        });\n      }\n    }))), wp.element.createElement(BlockEdit, props));\n  };\n}, 'addInspectorControls');\nwp.hooks.addFilter('blocks.getSaveElement', 'jr/add-content', saveExtraContent);\nwp.hooks.addFilter('editor.BlockEdit', 'jr/add-content', addInspectorControls);\nwp.hooks.addFilter('blocks.registerBlockType', 'jr/add-content', addContentAttributes);\n\n//# sourceURL=webpack:///./blocks/add-content/add-content.js?");

/***/ }),

/***/ "./blocks/blocks.js":
/*!**************************!*\
  !*** ./blocks/blocks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spacing_spacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spacing/spacing */ \"./blocks/spacing/spacing.js\");\n/* harmony import */ var _add_content_add_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-content/add-content */ \"./blocks/add-content/add-content.js\");\n/* harmony import */ var _add_content_add_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_content_add_content__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./blocks/blocks.js?");

/***/ }),

/***/ "./blocks/spacing/spacing.js":
/*!***********************************!*\
  !*** ./blocks/spacing/spacing.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* global wp */\n\nconst {\n  createHigherOrderComponent\n} = wp.compose;\nconst {\n  Fragment\n} = wp.element;\nconst {\n  InspectorControls\n} = wp.editor;\nconst {\n  PanelBody,\n  CheckboxControl,\n  RadioControl\n} = wp.components;\nconst spacingBlocks = [// 'core/columns',\n// 'core/image',\n// 'core/buttons',\n// 'core/gallery',\n'core/group'];\n\nconst addSpacingAttributes = (settings, name) => {\n  if (!spacingBlocks.includes(name)) {\n    return settings;\n  }\n\n  const spacingAttributes = {\n    spacing: {\n      type: 'string',\n      default: 'none'\n    },\n    topMargin: {\n      type: 'boolean',\n      default: false\n    },\n    bottomMargin: {\n      type: 'boolean',\n      default: false\n    }\n  };\n  return { ...settings,\n    attributes: { ...settings.attributes,\n      ...spacingAttributes\n    }\n  };\n};\n\nconst addInspectorControls = createHigherOrderComponent(BlockEdit => {\n  return props => {\n    const {\n      attributes: {\n        topMargin,\n        spacing,\n        bottomMargin\n      },\n      name,\n      setAttributes\n    } = props;\n\n    if (!spacingBlocks.includes(name)) {\n      return wp.element.createElement(BlockEdit, props);\n    }\n\n    const className = classnames__WEBPACK_IMPORTED_MODULE_0___default()({\n      'space--noTopMargin': topMargin\n    }, {\n      'space--noBottomMargin': bottomMargin\n    }, {\n      'space--small': spacing === 'small'\n    }, {\n      'space--medium': spacing === 'medium'\n    }, {\n      'space--large': spacing === 'large'\n    });\n    const newProps = { ...props,\n      className\n    };\n    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: \"Spacing\",\n      initialOpen: false\n    }, wp.element.createElement(RadioControl, {\n      selected: spacing,\n      options: [{\n        label: 'None',\n        value: 'none'\n      }, {\n        label: 'Small',\n        value: 'small'\n      }, {\n        label: 'Medium',\n        value: 'medium'\n      }, {\n        label: 'Large',\n        value: 'large'\n      }],\n      onChange: spacing => {\n        setAttributes({\n          spacing\n        });\n      }\n    }), wp.element.createElement(CheckboxControl, {\n      label: \"Remove top margin\",\n      checked: topMargin,\n      onChange: topMargin => {\n        setAttributes({\n          topMargin\n        });\n      }\n    }), wp.element.createElement(CheckboxControl, {\n      label: \"Remove bottom margin\",\n      checked: bottomMargin,\n      onChange: bottomMargin => {\n        setAttributes({\n          bottomMargin\n        });\n      }\n    }))), wp.element.createElement(BlockEdit, newProps));\n  };\n}, 'addInspectorControls');\n\nfunction saveSpacingClasses(extraProps, blockType, attributes) {\n  if (!spacingBlocks.includes(blockType.name)) {\n    return extraProps;\n  }\n\n  const {\n    topMargin,\n    spacing,\n    bottomMargin\n  } = attributes;\n  const spaceClasses = [{\n    'space--noTopMargin': topMargin\n  }, {\n    'space--noBottomMargin': bottomMargin\n  }, {\n    'space--small': spacing === 'small'\n  }, {\n    'space--medium': spacing === 'medium'\n  }, {\n    'space--large': spacing === 'large'\n  }];\n  return { ...extraProps,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, spaceClasses)\n  };\n}\n\nwp.hooks.addFilter('blocks.getSaveContent.extraProps', 'jr-blocks/spacing', saveSpacingClasses);\nwp.hooks.addFilter('blocks.registerBlockType', 'jr-blocks/spacing', addSpacingAttributes);\nwp.hooks.addFilter('editor.BlockEdit', 'jr-blocks/spacing', addInspectorControls);\n\n//# sourceURL=webpack:///./blocks/spacing/spacing.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ })

/******/ });