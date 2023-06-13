/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _module_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/GameControl */ \"./src/module/GameControl.ts\");\n\n// import Food from './module/Food';\n// import ScorePanel from './module/ScorePanel'\n\nconst gc = new _module_GameControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n//  setInterval(() => {\n//   console.log(gc.direction);\n//  },1000);\n// const food = new Food()\n// food.change()\n// console.log(food.X,food.Y);\n\n//# sourceURL=webpack://snack/./src/index.ts?");

/***/ }),

/***/ "./src/module/Food.ts":
/*!****************************!*\
  !*** ./src/module/Food.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Food {\n  constructor() {\n    //获取页面中food元素\n    this.element = document.getElementById('food');\n  }\n  // 获取食物x轴坐标\n  get X() {\n    return this.element.offsetLeft;\n  }\n  // 获取食物y轴坐标\n  get Y() {\n    return this.element.offsetTop;\n  }\n  //修改食物位置\n  change() {\n    let top = Math.round(Math.random() * 29) * 10;\n    let left = Math.round(Math.random() * 29) * 10;\n    this.element.style.left = left + 'px';\n    this.element.style.top = top + 'px';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Food);\n\n//# sourceURL=webpack://snack/./src/module/Food.ts?");

/***/ }),

/***/ "./src/module/GameControl.ts":
/*!***********************************!*\
  !*** ./src/module/GameControl.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/module/Snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ \"./src/module/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ \"./src/module/ScorePanel.ts\");\n\n\n\n//游戏控制器\nclass GameControl {\n  constructor() {\n    //存储蛇的移动方向\n    this.direction = '';\n    //判断是否游戏结束\n    this.isLive = true;\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.init();\n  }\n  //游戏初始化方法\n  init() {\n    //绑定键盘按下事件,.bind方法让this指向gameControl实例对象\n    document.addEventListener('keydown', this.keyDownHandler.bind(this));\n    this.move();\n  }\n  keyDownHandler(event) {\n    this.direction = event.key;\n  }\n  move() {\n    //获取蛇的当前坐标\n    let X = this.snake.X;\n    let Y = this.snake.Y;\n    switch (this.direction) {\n      case \"ArrowUp\":\n        //向上移动top减少\n        Y -= 10;\n        break;\n      case 'ArrowDown':\n        //向上移动top减少\n        Y += 10;\n        break;\n      case 'ArrowRight':\n        //向右移动top减少\n        X += 10;\n        break;\n      case 'ArrowLeft':\n        //向上移动top减少\n        X -= 10;\n        break;\n    }\n    // 判断是否吃到食物\n    this.checkEat(X, Y);\n    try {\n      this.snake.X = X;\n      this.snake.Y = Y;\n    } catch (e) {\n      alert(e.message);\n      this.isLive = false;\n    }\n    //蛇还活着就继续活动\n    this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);\n  }\n  checkEat(X, Y) {\n    if (X === this.food.X && Y === this.food.Y) {\n      //食物位置改变\n      this.food.change();\n      //加分\n      this.scorePanel.addScore();\n      //蛇的身体增加\n      this.snake.addBody();\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameControl);\n\n//# sourceURL=webpack://snack/./src/module/GameControl.ts?");

/***/ }),

/***/ "./src/module/ScorePanel.ts":
/*!**********************************!*\
  !*** ./src/module/ScorePanel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// 计分板\nclass ScorePanel {\n  constructor(maxLevel = 10, upScore = 10) {\n    this.score = 0;\n    this.level = 1;\n    this.scoreEl = document.getElementById('score');\n    this.levelEl = document.getElementById('level');\n    this.maxLevel = maxLevel;\n    this.upScore = upScore;\n  }\n  // 加分方法\n  addScore() {\n    this.scoreEl.innerHTML = ++this.score + '';\n    if (this.score % 10 === 0) {\n      this.upLevel();\n    }\n  }\n  //升级方法\n  upLevel() {\n    if (this.level < this.maxLevel) {\n      this.levelEl.innerHTML = ++this.level + '';\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScorePanel);\n\n//# sourceURL=webpack://snack/./src/module/ScorePanel.ts?");

/***/ }),

/***/ "./src/module/Snake.ts":
/*!*****************************!*\
  !*** ./src/module/Snake.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Snake {\n  constructor() {\n    this.element = document.getElementById('snake');\n    this.head = document.querySelector('#snake > div');\n    this.bodies = this.element.getElementsByTagName('div');\n  }\n  get X() {\n    return this.head.offsetLeft;\n  }\n  get Y() {\n    return this.head.offsetTop;\n  }\n  set X(value) {\n    if (this.X === value) {\n      return;\n    }\n    if (value < 0 || value > 290) {\n      throw new Error('蛇死了');\n    }\n    //发生掉头的情况\n    if (this.bodies[1] && this.bodies[1].offsetLeft === value) {\n      if (value > this.X) {\n        //蛇向右走的情况下发生掉头，继续向右走\n        value = this.X - 10;\n      } else {\n        //向左的走情况\n        value = this.X + 10;\n      }\n    }\n    this.head.style.left = value + 'px';\n    this.moveBody();\n    this.checkHeadBody();\n  }\n  set Y(value) {\n    if (this.Y === value) {\n      return;\n    }\n    if (value < 0 || value > 290) {\n      throw new Error('蛇死了');\n    }\n    //发生掉头的情况\n    if (this.bodies[1] && this.bodies[1].offsetTop === value) {\n      if (value > this.Y) {\n        value = this.Y - 10;\n      } else {\n        value = this.Y + 10;\n      }\n    }\n    this.head.style.top = value + 'px';\n    this.moveBody();\n    this.checkHeadBody();\n  }\n  addBody() {\n    this.element.insertAdjacentHTML('beforeend', '<div></div>');\n  }\n  //身体的移动\n  moveBody() {\n    //从最后一节身体开始，当前身体的位置等于前一节身体的位置,第0节是蛇的头部\n    for (let i = this.bodies.length - 1; i > 0; i--) {\n      let X = this.bodies[i - 1].offsetLeft;\n      let Y = this.bodies[i - 1].offsetTop;\n      this.bodies[i].style.left = X + 'px';\n      this.bodies[i].style.top = Y + 'px';\n    }\n  }\n  //检测蛇头是否与身体相碰\n  checkHeadBody() {\n    //蛇头坐标是否与身体坐标相重叠\n    for (let i = 1; i < this.bodies.length; i++) {\n      let bd = this.bodies[i];\n      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {\n        throw new Error('撞到自己了！');\n      }\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack://snack/./src/module/Snake.ts?");

/***/ }),

/***/ "./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!./node_modules/.store/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.store/less-loader@11.1.3/node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!./node_modules/.store/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.store/less-loader@11.1.3/node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px \"Courier\";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#main #stage {\n  position: relative;\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n}\n#main #stage #snake > div {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: black;\n  border: 1px solid #b7d4a8;\n}\n#main #stage #food {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 10px;\n  height: 10px;\n  left: 40px;\n  top: 100px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-transform: rotate(15deg);\n          transform: rotate(15deg);\n}\n#main #stage #food > div {\n  background: black;\n  width: 4px;\n  height: 4px;\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border: 1px solid #b7d4a8;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snack/./src/style/index.less?./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!./node_modules/.store/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/.store/less-loader@11.1.3/node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://snack/./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snack/./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_cjs_js_node_modules_store_postcss_loader_7_3_3_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_store_less_loader_11_1_3_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!../../node_modules/.store/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/.store/less-loader@11.1.3/node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/.store/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!./node_modules/.store/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.store/less-loader@11.1.3/node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_store_style_loader_3_3_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_cjs_js_node_modules_store_postcss_loader_7_3_3_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_store_less_loader_11_1_3_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_cjs_js_node_modules_store_postcss_loader_7_3_3_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_store_less_loader_11_1_3_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_cjs_js_node_modules_store_postcss_loader_7_3_3_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_store_less_loader_11_1_3_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_store_css_loader_6_8_1_node_modules_css_loader_dist_cjs_js_node_modules_store_postcss_loader_7_3_3_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_store_less_loader_11_1_3_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snack/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \***********************************************************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*************************************************************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \******************************************************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \************************************************************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snack/./node_modules/.store/style-loader@3.3.3/node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;