"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comp/ModalButtons.js":
/*!******************************!*\
  !*** ./comp/ModalButtons.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_icons_cart_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/icons/cart.gif */ \"./public/assets/icons/cart.gif\");\n/* harmony import */ var _public_assets_icons_phone_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/icons/phone.gif */ \"./public/assets/icons/phone.gif\");\n/* harmony import */ var _public_assets_icons_guy_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/icons/guy.gif */ \"./public/assets/icons/guy.gif\");\n/* harmony import */ var _Modals_AboutModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/AboutModal */ \"./comp/Modals/AboutModal.js\");\n/* harmony import */ var _Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modals/ContactModal */ \"./comp/Modals/ContactModal.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ModalButtons = function() {\n    var modal = function modal() {\n        if (modalOpen) {\n            console.log(\"modal is open\");\n            if (currentModalId === \"about\") {\n                console.log(\"currentModalId is about\");\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_AboutModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    handleClose: function() {\n                        return close();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                    lineNumber: 48,\n                    columnNumber: 16\n                }, this));\n            } else if (currentModalId === \"contact\") {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    handleClose: function() {\n                        return close();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                    lineNumber: 50,\n                    columnNumber: 16\n                }, this));\n            } else {\n                console.log(\"no id defined\", currentModalId);\n                return null;\n            }\n        }\n        return null;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalOpen = ref[0], setModalOpen = ref[1];\n    var close = function() {\n        return setModalOpen(false);\n    };\n    var open = function() {\n        return setModalOpen(true);\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), currentModalId = ref1[0], setCurrentModalId = ref1[1];\n    var content = [\n        {\n            id: \"contact\",\n            modalContent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, _this)\n        }, \n    ];\n    {\n        var _this1 = _this;\n        content.map(function(contentItem) {\n            var id = contentItem.id, modalContent = contentItem.modalContent;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    setCurrentModalId(id);\n                    open();\n                }\n            }, id, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this1));\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                onClick: function() {\n                    setCurrentModalId(\"about\");\n                    open();\n                },\n                className: \"item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _public_assets_icons_guy_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: \"GuySign\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"ABOUT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/Shop\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _public_assets_icons_cart_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"GuySign\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"SHOP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item\",\n                onClick: function() {\n                    setCurrentModalId(\"contact\");\n                    open();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _public_assets_icons_phone_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"GuySign\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"CONTACT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {\n                initial: false,\n                exitBeforeEnter: true,\n                children: modal()\n            }, void 0, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(ModalButtons, \"Ixn/rjnjiGGrlNlqWcjofs19P5k=\");\n_c = ModalButtons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalButtons);\nvar _c;\n$RefreshReg$(_c, \"ModalButtons\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEdBQ2ZDLENBQUM7a0hBQ0NqQyxtREFBSztnQ0FBQzJCLEdBQUcsRUFBRTFCLHFFQUFJO2dDQUFFMkIsR0FBRyxFQUFDLENBQVM7Z0NBQUNDLEtBQUssRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztnR0FHMURDLENBQUU7a0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7O3dGQUdUUCxDQUFHO2dCQUNGRSxTQUFTLEVBQUMsQ0FBTTtnQkFDaEJELE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQztvQkFDZFAsaUJBQWlCLENBQUMsQ0FBUztvQkFDM0JELElBQUk7Z0JBQ04sQ0FBQzs7Z0dBRUFqQixtREFBSzt3QkFBQzJCLEdBQUcsRUFBRXpCLHNFQUFLO3dCQUFFMEIsR0FBRyxFQUFDLENBQVM7d0JBQUNDLEtBQUssRUFBRSxHQUFHO3dCQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7O2dHQUN2REMsQ0FBRTtrQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7d0ZBR1p4QiwwREFBZTtnQkFBQzJCLE9BQU8sRUFBRSxLQUFLO2dCQUFFQyxlQUFlLEVBQUUsSUFBSTswQkFDbkQxQixLQUFLOzs7Ozs7Ozs7Ozs7QUFJZCxDQUFDO0dBaEhLRCxZQUFZO0tBQVpBLFlBQVk7QUFrSGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9Nb2RhbEJ1dHRvbnMuanM/ZjkyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pY29ucy9jYXJ0LmdpZlwiO1xyXG5pbXBvcnQgUGhvbmUgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvaWNvbnMvcGhvbmUuZ2lmXCI7XHJcbmltcG9ydCBHdXkgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvaWNvbnMvZ3V5LmdpZlwiO1xyXG5cclxuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSBcIi4vTW9kYWxzL0Fib3V0TW9kYWxcIjtcclxuaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tIFwiLi9Nb2RhbHMvQ29udGFjdE1vZGFsXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IE1vZGFsQnV0dG9ucyA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjbG9zZSA9ICgpID0+IHNldE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgY29uc3Qgb3BlbiA9ICgpID0+IHNldE1vZGFsT3Blbih0cnVlKTtcclxuXHJcbiAgdmFyIFtjdXJyZW50TW9kYWxJZCwgc2V0Q3VycmVudE1vZGFsSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHZhciBjb250ZW50ID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogXCJjb250YWN0XCIsXHJcbiAgICAgIG1vZGFsQ29udGVudDogPENvbnRhY3RNb2RhbCAvPixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAge1xyXG4gICAgY29udGVudC5tYXAoKGNvbnRlbnRJdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIG1vZGFsQ29udGVudCB9ID0gY29udGVudEl0ZW07XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRNb2RhbElkKGlkKTtcclxuICAgICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vZGFsKCkge1xyXG4gICAgaWYgKG1vZGFsT3Blbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGFsIGlzIG9wZW5cIik7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kYWxJZCA9PT0gXCJhYm91dFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50TW9kYWxJZCBpcyBhYm91dFwiKTtcclxuICAgICAgICByZXR1cm4gPEFib3V0TW9kYWwgaGFuZGxlQ2xvc2U9eygpID0+IGNsb3NlKCl9IC8+O1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRNb2RhbElkID09PSBcImNvbnRhY3RcIikge1xyXG4gICAgICAgIHJldHVybiA8Q29udGFjdE1vZGFsIGhhbmRsZUNsb3NlPXsoKSA9PiBjbG9zZSgpfSAvPjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGlkIGRlZmluZWRcIiwgY3VycmVudE1vZGFsSWQpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldEN1cnJlbnRNb2RhbElkKFwiYWJvdXRcIik7XHJcbiAgICAgICAgICBvcGVuKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0d1eX0gYWx0PVwiR3V5U2lnblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgIDxoMz5BQk9VVDwvaDM+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL0FydGlzdGljRXhwcmVzc2lvblwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0hhbmRzfSBhbHQ9XCJHdXlTaWduXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XHJcbiAgICAgICAgICAgIDxoMz5FWFBSRVNTSU9OPC9oMz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvQWR2ZXJ0aXNpbmdDYW1wYWlnbnNcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCcmFpbn0gYWx0PVwiR3V5U2lnblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICA8aDM+QURWRVJUSVNJTkc8L2gzPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvRGl2ZXJzaXR5XCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17SGVhcnR9IGFsdD1cIkd1eVNpZ25cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gLz5cclxuICAgICAgICAgICAgPGgzPkRJVkVSU0lUWTwvaDM+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1Nob3BcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtDYXJ0fSBhbHQ9XCJHdXlTaWduXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoMz5TSE9QPC9oMz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0Q3VycmVudE1vZGFsSWQoXCJjb250YWN0XCIpO1xyXG4gICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtQaG9uZX0gYWx0PVwiR3V5U2lnblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgIDxoMz5DT05UQUNUPC9oMz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBleGl0QmVmb3JlRW50ZXI9e3RydWV9PlxyXG4gICAgICAgIHttb2RhbCgpfVxyXG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEJ1dHRvbnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIkNhcnQiLCJQaG9uZSIsIkd1eSIsIkFib3V0TW9kYWwiLCJDb250YWN0TW9kYWwiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJNb2RhbEJ1dHRvbnMiLCJtb2RhbCIsIm1vZGFsT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50TW9kYWxJZCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJzZXRNb2RhbE9wZW4iLCJvcGVuIiwic2V0Q3VycmVudE1vZGFsSWQiLCJjb250ZW50IiwiaWQiLCJtb2RhbENvbnRlbnQiLCJtYXAiLCJjb250ZW50SXRlbSIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwiaHJlZiIsImEiLCJpbml0aWFsIiwiZXhpdEJlZm9yZUVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comp/ModalButtons.js\n");

/***/ })

});