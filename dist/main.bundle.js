/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 123:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AddForm = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AddForm, _HTMLElement);
  var _super = _createSuper(AddForm);
  function AddForm() {
    _classCallCheck(this, AddForm);
    return _super.call(this);
  }
  _createClass(AddForm, [{
    key: "eventAddNote",
    set: function set(event) {
      this._eventAddNote = event;
      this.render();
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.querySelector('#title').value = '';
      this.querySelector('#body').value = '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.innerHTML = "\n            <style>\n                .footer-form .btn{\n                    width: 120px!important;\n                }\n            </style>\n            <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-dialog-centered\">\n                    <div class=\"modal-content\">\n                        <form class=\"d-flex flex-column p-4\">\n                            <div class=\"modal-header p-0 pb-2\">\n                                <h1 class=\"modal-title fw-semibold text-primary fs-5\" id=\"exampleModalLabel\">Form Tambah Note</h1>\n                                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                            </div>\n\n                            <div class=\"modal-body\">\n                                <div class=\"form-floating mb-3 mt-4 w-100 border border-dark-subtle rounded\">\n                                    <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Judul catatan Anda...\" required>\n                                    <label for=\"title\">Judul Note</label>\n                                </div>\n                    \n                                <div class=\"form-floating w-100 mb-3 border border-dark-subtle rounded\">\n                                    <textarea class=\"form-control\" id=\"body\" style=\"height: 200px;\" cols=\"30\" rows=\"10\"required></textarea>\n                                    <label for=\"body\">Isi Note</label>\n                                </div>\n                            </div>\n\n                            <div class=\"modal-footer d-flex footer-form justify-content-between p-0\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary mt-4\" data-bs-dismiss=\"modal\">Close</button>\n                                <button id=\"button-submit\" type=\"button\" class=\"btn btn-dark py-2 mt-4\" data-bs-dismiss=\"modal\">Tambah</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        ";
      this.querySelector('#button-submit').addEventListener('click', function () {
        var title = _this.querySelector('#title').value;
        var body = _this.querySelector('#body').value;
        _this._eventAddNote({
          title: title,
          body: body
        });
      });
    }
  }]);
  return AddForm;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('add-form', AddForm);

/***/ }),

/***/ 32:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ButtonAdd = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ButtonAdd, _HTMLElement);
  var _super = _createSuper(ButtonAdd);
  function ButtonAdd() {
    _classCallCheck(this, ButtonAdd);
    return _super.apply(this, arguments);
  }
  _createClass(ButtonAdd, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            <style>\n                .tambah-button {\n                    background-color: #2b3035;\n                    border-radius: 5px;\n                    bottom: 60px;\n                    box-shadow: 0 0 5px 0.5px #000;\n                    height: 55px;\n                    position: fixed;\n                    right: 30px;\n                    width: 55px;\n                    z-index: 2;\n                }\n                .icon-tambah {\n                    color: #fff;\n                    margin: 0 auto;\n                }\n            </style>\n            <button class=\"tambah-button d-flex align-items-center justify-content-center\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\n                <i style=\"font-size: 40px;\" class=\"bi bi-plus icon-tambah\"></i>\n            </button>\n        ";
    }
  }]);
  return ButtonAdd;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('button-add', ButtonAdd);

/***/ }),

/***/ 83:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Footer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);
  var _super = _createSuper(Footer);
  function Footer() {
    _classCallCheck(this, Footer);
    return _super.apply(this, arguments);
  }
  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            <style>\n                footer {\n                    height: 50px;\n                    color: white;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    flex-direction: column;\n                }\n            </style>\n            <footer class=\"bg-dark mt-5\">\n                <p class=\"m-0\">\xA9 2024 - <a class=\"text-warning\" style=\"text-decoration: underline;\" href=\"https://github.com/lubismaulana\"><strong>LubisMaulana</strong></a></p>\n            </footer>\n        ";
    }
  }]);
  return Footer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-content', Footer);

/***/ }),

/***/ 570:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IndikatorLoading = /*#__PURE__*/function (_HTMLElement) {
  _inherits(IndikatorLoading, _HTMLElement);
  var _super = _createSuper(IndikatorLoading);
  function IndikatorLoading() {
    _classCallCheck(this, IndikatorLoading);
    return _super.call(this);
  }
  _createClass(IndikatorLoading, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n\t\t\t<style>\n\t\t\t\t.backdrop {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n            \t\tbackground-color: rgba(184, 184, 184, 0.5);\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis,\n\t\t\t\t.lds-ellipsis div {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: calc(50% - 40px);\n\t\t\t\t\tleft: calc(50% - 40px);\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis div {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 33.33333px;\n\t\t\t\t\twidth: 13.33333px;\n\t\t\t\t\theight: 13.33333px;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tbackground: currentColor;\n\t\t\t\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis div:nth-child(1) {\n\t\t\t\t\tleft: 8px;\n\t\t\t\t\tanimation: lds-ellipsis1 0.6s infinite;\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis div:nth-child(2) {\n\t\t\t\t\tleft: 8px;\n\t\t\t\t\tanimation: lds-ellipsis2 0.6s infinite;\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis div:nth-child(3) {\n\t\t\t\t\tleft: 32px;\n\t\t\t\t\tanimation: lds-ellipsis2 0.6s infinite;\n\t\t\t\t}\n\t\t\t\t.lds-ellipsis div:nth-child(4) {\n\t\t\t\t\tleft: 56px;\n\t\t\t\t\tanimation: lds-ellipsis3 0.6s infinite;\n\t\t\t\t}\n\t\t\t\t@keyframes lds-ellipsis1 {\n\t\t\t\t\t0% {\n\t\t\t\t\t\ttransform: scale(0);\n\t\t\t\t\t}\n\t\t\t\t\t100% {\n\t\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@keyframes lds-ellipsis3 {\n\t\t\t\t\t0% {\n\t\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\t}\n\t\t\t\t\t100% {\n\t\t\t\t\t\ttransform: scale(0);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@keyframes lds-ellipsis2 {\n\t\t\t\t\t0% {\n\t\t\t\t\t\ttransform: translate(0, 0);\n\t\t\t\t\t}\n\t\t\t\t\t100% {\n\t\t\t\t\t\ttransform: translate(24px, 0);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div class=\"backdrop\"></div>\n\t\t\t<div class=\"lds-ellipsis\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n        ";
    }
  }]);
  return IndikatorLoading;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('indikator-loading', IndikatorLoading);

/***/ }),

/***/ 557:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NavBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(NavBar, _HTMLElement);
  var _super = _createSuper(NavBar);
  function NavBar() {
    _classCallCheck(this, NavBar);
    return _super.apply(this, arguments);
  }
  _createClass(NavBar, [{
    key: "eventSearch",
    set: function set(event) {
      this._eventSearch = event;
    }
  }, {
    key: "eventTabArsip",
    set: function set(event) {
      this._eventTabArsip = event;
      this.render();
    }
  }, {
    key: "eventTabNonArsip",
    set: function set(event) {
      this._eventTabNonArsip = event;
      this.render();
    }
  }, {
    key: "eventTabAllNotes",
    set: function set(event) {
      this._eventTabAllNotes = event;
      this.render();
    }
  }, {
    key: "keyword",
    get: function get() {
      return this.querySelector('#search-input').value;
    }
  }, {
    key: "setTabMenu",
    value: function setTabMenu() {
      var allNotes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'active';
      var arsip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var nonArsip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.querySelector('#tab-all-notes').classList.remove('active');
      this.querySelector('#tab-non-archived').classList.remove('active');
      this.querySelector('#tab-archived').classList.remove('active');
      if (allNotes) this.querySelector('#tab-all-notes').classList.add(allNotes);
      if (nonArsip) this.querySelector('#tab-non-archived').classList.add(nonArsip);
      if (arsip) this.querySelector('#tab-archived').classList.add(arsip);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.innerHTML = "\n            <style>\n                #tab-all-notes:hover, \n                #tab-archived:hover, \n                #tab-non-archived:hover{\n                    cursor: pointer;\n                }\n            </style>\n            <nav class=\"navbar navbar-expand-lg bg-dark mb-5\" data-bs-theme=\"dark\">\n                <div class=\"container-fluid\">\n                    <a class=\"navbar-brand\">Note-App</a>\n                    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link ".concat(this._arsip || this._nonArsip || this._allNotes ? this._allNotes : 'active', "\" id=\"tab-all-notes\">All Notes</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link ").concat(this._arsip ? this._arsip : '', "\" id=\"tab-archived\">Archieved</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link ").concat(this._nonArsip ? this._nonArsip : '', "\" id=\"tab-non-archived\">Non-Archieved</a>\n                            </li>\n                        </ul>\n                        <form class=\"d-flex\" role=\"search\">\n                            <input id=\"search-input\" class=\"form-control me-2\" placeholder=\"Search\">\n                            <button id=\"btn-event-search\" class=\"btn btn-outline-warning\" type=\"button\">Search</button>\n                        </form>\n                    </div>\n                </div>\n            </nav>\n        ");
      this.querySelector('#tab-all-notes').addEventListener('click', function () {
        _this._eventTabAllNotes();
      });
      this.querySelector('#tab-archived').addEventListener('click', function () {
        _this._eventTabArsip();
      });
      this.querySelector('#tab-non-archived').addEventListener('click', function () {
        _this._eventTabNonArsip();
      });
      this.querySelector('#btn-event-search').addEventListener('click', this._eventSearch);
    }
  }]);
  return NavBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('nav-bar', NavBar);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/component/Navbar.js
var Navbar = __webpack_require__(557);
// EXTERNAL MODULE: ./src/js/component/Footer.js
var Footer = __webpack_require__(83);
// EXTERNAL MODULE: ./src/js/component/ButtonAdd.js
var ButtonAdd = __webpack_require__(32);
// EXTERNAL MODULE: ./src/js/component/AddForm.js
var AddForm = __webpack_require__(123);
;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/defaults.es.js
var defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/time.es.js
var time = {
  ms: function ms(seconds) {
    return seconds * 1000;
  },
  s: function s(milliseconds) {
    return milliseconds / 1000;
  }
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/noop.es.js
var noop = function noop() {};
var noopReturn = function noopReturn(v) {
  return v;
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
function stopAnimation(animation) {
  var needsCommit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!animation || animation.playState === "finished") return;
  // Suppress error thrown by WAAPI
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e) {}
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/controls.es.js


var createAnimation = function createAnimation(factory) {
  return factory();
};
var withControls = function withControls(animationFactory, options) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaults.duration;
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration: duration,
    options: options
  }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
var getActiveAnimation = function getActiveAnimation(state) {
  return state.animations[0];
};
var controls = {
  get: function get(target, key) {
    var activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished))["catch"](noop);
        }
        return target.finished;
      case "stop":
        return function () {
          target.animations.forEach(function (animation) {
            return stopAnimation(animation);
          });
        };
      case "forEachNative":
        /**
         * This is for internal use only, fire a callback for each
         * underlying animation.
         */
        return function (callback) {
          target.animations.forEach(function (animation) {
            return callback(animation, target);
          });
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : function () {
          return target.animations.forEach(function (animation) {
            return animation[key]();
          });
        };
    }
  },
  set: function set(target, key, value) {
    switch (key) {
      case "currentTime":
        value = time.ms(value);
      // Fall-through
      case "playbackRate":
        for (var i = 0; i < target.animations.length; i++) {
          target.animations[i][key] = value;
        }
        return true;
    }
    return false;
  }
};
var selectFinished = function selectFinished(animation) {
  return animation.finished;
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-easing-generator.es.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isEasingGenerator = function isEasingGenerator(easing) {
  return _typeof(easing) === "object" && Boolean(easing.createAnimation);
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-number.es.js
var isNumber = function isNumber(value) {
  return typeof value === "number";
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-easing-list.es.js

var isEasingList = function isEasingList(easing) {
  return Array.isArray(easing) && !isNumber(easing[0]);
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/mix.es.js
var mix = function mix(min, max, progress) {
  return -progress * min + progress * max + min;
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/progress.es.js
var progress = function progress(min, max, value) {
  return max - min === 0 ? 1 : (value - min) / (max - min);
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/offset.es.js


function fillOffset(offset, remaining) {
  var min = offset[offset.length - 1];
  for (var i = 1; i <= remaining; i++) {
    var offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  var offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/wrap.es.js
var wrap = function wrap(min, max, v) {
  var rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/easing.es.js


function getEasingForSegment(easing, i) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/clamp.es.js
var clamp = function clamp(min, max, v) {
  return Math.min(Math.max(v, min), max);
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/interpolate.es.js






function interpolate(output) {
  var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset(output.length);
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noopReturn;
  var length = output.length;
  /**
   * If the input length is lower than the output we
   * fill the input to match. This currently assumes the input
   * is an animation progress value so is a good candidate for
   * moving outside the function.
   */
  var remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return function (t) {
    var i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1]) break;
    }
    var progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
    var segmentEasing = getEasingForSegment(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return mix(output[i], output[i + 1], progressInRange);
  };
}

;// CONCATENATED MODULE: ./node_modules/@motionone/easing/dist/cubic-bezier.es.js


/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
var calcBezier = function calcBezier(t, a1, a2) {
  return (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  var currentX;
  var currentT;
  var i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0.0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return noopReturn;
  var getTForX = function getTForX(aX) {
    return binarySubdivide(aX, 0, 1, mX1, mX2);
  };
  // If animation is at start/end, return t without easing
  return function (t) {
    return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  };
}

;// CONCATENATED MODULE: ./node_modules/@motionone/easing/dist/steps.es.js

var steps = function steps(_steps) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "end";
  return function (progress) {
    progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
    var expanded = progress * _steps;
    var rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / _steps);
  };
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-function.es.js
var isFunction = function isFunction(value) {
  return typeof value === "function";
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js

var isCubicBezier = function isCubicBezier(easing) {
  return Array.isArray(easing) && isNumber(easing[0]);
};

;// CONCATENATED MODULE: ./node_modules/@motionone/animation/dist/utils/easing.es.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var namedEasings = {
  ease: cubicBezier(0.25, 0.1, 0.25, 1.0),
  "ease-in": cubicBezier(0.42, 0.0, 1.0, 1.0),
  "ease-in-out": cubicBezier(0.42, 0.0, 0.58, 1.0),
  "ease-out": cubicBezier(0.0, 0.0, 0.58, 1.0)
};
var functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  // If already an easing function, return
  if (isFunction(definition)) return definition;
  // If an easing curve definition, return bezier function
  if (isCubicBezier(definition)) return cubicBezier.apply(void 0, _toConsumableArray(definition));
  // If we have a predefined easing function, return
  if (namedEasings[definition]) return namedEasings[definition];
  // If this is a steps function, attempt to create easing curve
  if (definition.startsWith("steps")) {
    var args = functionArgsRegex.exec(definition);
    if (args) {
      var argsArray = args[1].split(",");
      return steps(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return noopReturn;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/animation/dist/Animation.es.js
function Animation_es_typeof(o) { "@babel/helpers - typeof"; return Animation_es_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Animation_es_typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == Animation_es_typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != Animation_es_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Animation_es_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Animation = /*#__PURE__*/function () {
  function Animation(output) {
    var _this = this;
    var keyframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1];
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      easing = _ref.easing,
      _ref$duration = _ref.duration,
      initialDuration = _ref$duration === void 0 ? defaults.duration : _ref$duration,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? defaults.delay : _ref$delay,
      _ref$endDelay = _ref.endDelay,
      endDelay = _ref$endDelay === void 0 ? defaults.endDelay : _ref$endDelay,
      _ref$repeat = _ref.repeat,
      repeat = _ref$repeat === void 0 ? defaults.repeat : _ref$repeat,
      offset = _ref.offset,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "normal" : _ref$direction,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
    _classCallCheck(this, Animation);
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    easing = easing || defaults.easing;
    if (isEasingGenerator(easing)) {
      var custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
    this.updateDuration(initialDuration);
    var interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
    this.tick = function (timestamp) {
      var _a;
      // TODO: Temporary fix for OptionsResolver typing
      delay = delay;
      var t = 0;
      if (_this.pauseTime !== undefined) {
        t = _this.pauseTime;
      } else {
        t = (timestamp - _this.startTime) * _this.rate;
      }
      _this.t = t;
      // Convert to seconds
      t /= 1000;
      // Rebase on delay
      t = Math.max(t - delay, 0);
      /**
       * If this animation has finished, set the current time
       * to the total duration.
       */
      if (_this.playState === "finished" && _this.pauseTime === undefined) {
        t = _this.totalDuration;
      }
      /**
       * Get the current progress (0-1) of the animation. If t is >
       * than duration we'll get values like 2.5 (midway through the
       * third iteration)
       */
      var progress = t / _this.duration;
      // TODO progress += iterationStart
      /**
       * Get the current iteration (0 indexed). For instance the floor of
       * 2.5 is 2.
       */
      var currentIteration = Math.floor(progress);
      /**
       * Get the current progress of the iteration by taking the remainder
       * so 2.5 is 0.5 through iteration 2
       */
      var iterationProgress = progress % 1.0;
      if (!iterationProgress && progress >= 1) {
        iterationProgress = 1;
      }
      /**
       * If iteration progress is 1 we count that as the end
       * of the previous iteration.
       */
      iterationProgress === 1 && currentIteration--;
      /**
       * Reverse progress if we're not running in "normal" direction
       */
      var iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      var p = t >= _this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      var latest = interpolate$1(_this.easing(p));
      output(latest);
      var isAnimationFinished = _this.pauseTime === undefined && (_this.playState === "finished" || t >= _this.totalDuration + endDelay);
      if (isAnimationFinished) {
        _this.playState = "finished";
        (_a = _this.resolve) === null || _a === void 0 ? void 0 : _a.call(_this, latest);
      } else if (_this.playState !== "idle") {
        _this.frameRequestId = requestAnimationFrame(_this.tick);
      }
    };
    if (autoplay) this.play();
  }
  _createClass(Animation, [{
    key: "play",
    value: function play() {
      var now = performance.now();
      this.playState = "running";
      if (this.pauseTime !== undefined) {
        this.startTime = now - this.pauseTime;
      } else if (!this.startTime) {
        this.startTime = now;
      }
      this.cancelTimestamp = this.startTime;
      this.pauseTime = undefined;
      this.frameRequestId = requestAnimationFrame(this.tick);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playState = "paused";
      this.pauseTime = this.t;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.playState = "finished";
      this.tick(0);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _a;
      this.playState = "idle";
      if (this.frameRequestId !== undefined) {
        cancelAnimationFrame(this.frameRequestId);
      }
      (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.stop();
      this.tick(this.cancelTimestamp);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.rate *= -1;
    }
  }, {
    key: "commitStyles",
    value: function commitStyles() {}
  }, {
    key: "updateDuration",
    value: function updateDuration(duration) {
      this.duration = duration;
      this.totalDuration = duration * (this.repeat + 1);
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.t;
    },
    set: function set(t) {
      if (this.pauseTime !== undefined || this.rate === 0) {
        this.pauseTime = t;
      } else {
        this.startTime = performance.now() - t / this.rate;
      }
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.rate;
    },
    set: function set(rate) {
      this.rate = rate;
    }
  }]);
  return Animation;
}();

;// CONCATENATED MODULE: ./node_modules/hey-listen/dist/hey-listen.es.js
var warning = function warning() {};
var invariant = function invariant() {};
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@motionone/types/dist/MotionValue.es.js
function MotionValue_es_typeof(o) { "@babel/helpers - typeof"; return MotionValue_es_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MotionValue_es_typeof(o); }
function MotionValue_es_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function MotionValue_es_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, MotionValue_es_toPropertyKey(descriptor.key), descriptor); } }
function MotionValue_es_createClass(Constructor, protoProps, staticProps) { if (protoProps) MotionValue_es_defineProperties(Constructor.prototype, protoProps); if (staticProps) MotionValue_es_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function MotionValue_es_toPropertyKey(t) { var i = MotionValue_es_toPrimitive(t, "string"); return "symbol" == MotionValue_es_typeof(i) ? i : String(i); }
function MotionValue_es_toPrimitive(t, r) { if ("object" != MotionValue_es_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MotionValue_es_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
var MotionValue = /*#__PURE__*/function () {
  function MotionValue() {
    MotionValue_es_classCallCheck(this, MotionValue);
  }
  MotionValue_es_createClass(MotionValue, [{
    key: "setAnimation",
    value: function setAnimation(animation) {
      var _this = this;
      this.animation = animation;
      animation === null || animation === void 0 ? void 0 : animation.finished.then(function () {
        return _this.clearAnimation();
      })["catch"](function () {});
    }
  }, {
    key: "clearAnimation",
    value: function clearAnimation() {
      this.animation = this.generator = undefined;
    }
  }]);
  return MotionValue;
}();

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/data.es.js

var data = new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new MotionValue());
  }
  return motionValues.get(name);
}

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/array.es.js
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js



/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
var transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: function toDefaultUnit(v) {
    return v + "deg";
  }
};
var baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: function toDefaultUnit(v) {
      return v + "px";
    }
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
var transformDefinitions = new Map();
var asTransformCssVar = function asTransformCssVar(name) {
  return "--motion-".concat(name);
};
/**
 * Generate a list of every possible transform key
 */
var transforms = ["x", "y", "z"];
order.forEach(function (name) {
  axes.forEach(function (axis) {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
var compareTransformOrder = function compareTransformOrder(a, b) {
  return transforms.indexOf(a) - transforms.indexOf(b);
};
/**
 * Provide a quick way to check if a string is the name of a transform
 */
var transformLookup = new Set(transforms);
var isTransform = function isTransform(name) {
  return transformLookup.has(name);
};
var addTransformToElement = function addTransformToElement(element, name) {
  // Map x to translateX etc
  if (transformAlias[name]) name = transformAlias[name];
  var _getAnimationData = getAnimationData(element),
    transforms = _getAnimationData.transforms;
  addUniqueItem(transforms, name);
  /**
   * TODO: An optimisation here could be to cache the transform in element data
   * and only update if this has changed.
   */
  element.style.transform = buildTransformTemplate(transforms);
};
var buildTransformTemplate = function buildTransformTemplate(transforms) {
  return transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
};
var transformListToString = function transformListToString(template, name) {
  return "".concat(template, " ").concat(name, "(var(").concat(asTransformCssVar(name), "))");
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js

var isCssVar = function isCssVar(name) {
  return name.startsWith("--");
};
var registeredProperties = new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name)) return;
  registeredProperties.add(name);
  try {
    var _ref = transformDefinitions.has(name) ? transformDefinitions.get(name) : {},
      syntax = _ref.syntax,
      initialValue = _ref.initialValue;
    CSS.registerProperty({
      name: name,
      inherits: false,
      syntax: syntax,
      initialValue: initialValue
    });
  } catch (e) {}
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
var testAnimation = function testAnimation(keyframes, options) {
  return document.createElement("div").animate(keyframes, options);
};
var featureTests = {
  cssRegisterProperty: function cssRegisterProperty() {
    return typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty");
  },
  waapi: function waapi() {
    return Object.hasOwnProperty.call(Element.prototype, "animate");
  },
  partialKeyframes: function partialKeyframes() {
    try {
      testAnimation({
        opacity: [1]
      });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: function finished() {
    return Boolean(testAnimation({
      opacity: [0, 1]
    }, {
      duration: 0.001
    }).finished);
  },
  linearEasing: function linearEasing() {
    try {
      testAnimation({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (e) {
      return false;
    }
    return true;
  }
};
var results = {};
var supports = {};
var _loop = function _loop(key) {
  supports[key] = function () {
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
  };
};
for (var key in featureTests) {
  _loop(key);
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/easing.es.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || easing_es_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function easing_es_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return easing_es_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return easing_es_arrayLikeToArray(o, minLen); }
function easing_es_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// Create a linear easing point for every x second
var resolution = 0.015;
var generateLinearEasingPoints = function generateLinearEasingPoints(easing, duration) {
  var points = "";
  var numPoints = Math.round(duration / resolution);
  for (var i = 0; i < numPoints; i++) {
    points += easing(progress(0, numPoints - 1, i)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
var convertEasing = function convertEasing(easing, duration) {
  if (isFunction(easing)) {
    return supports.linearEasing() ? "linear(".concat(generateLinearEasingPoints(easing, duration), ")") : defaults.easing;
  } else {
    return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
  }
};
var cubicBezierAsString = function cubicBezierAsString(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
    a = _ref2[0],
    b = _ref2[1],
    c = _ref2[2],
    d = _ref2[3];
  return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")");
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
function hydrateKeyframes(keyframes, readInitialValue) {
  for (var i = 0; i < keyframes.length; i++) {
    if (keyframes[i] === null) {
      keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    }
  }
  return keyframes;
}
var keyframesList = function keyframesList(keyframes) {
  return Array.isArray(keyframes) ? keyframes : [keyframes];
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js

function getStyleName(key) {
  if (transformAlias[key]) key = transformAlias[key];
  return isTransform(key) ? asTransformCssVar(key) : key;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/style.es.js



var style = {
  get: function get(element, name) {
    name = getStyleName(name);
    var value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      var definition = transformDefinitions.get(name);
      if (definition) value = definition.initialValue;
    }
    return value;
  },
  set: function set(element, name, value) {
    name = getStyleName(name);
    if (isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-string.es.js
var isString = function isString(value) {
  return typeof value === "string";
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js

function getUnitConverter(keyframes, definition) {
  var _a;
  var toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
  var finalKeyframe = keyframes[keyframes.length - 1];
  if (isString(finalKeyframe)) {
    var unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
    if (unit) toUnit = function toUnit(value) {
      return value + unit;
    };
  }
  return toUnit;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/animate-style.es.js
function animate_style_es_typeof(o) { "@babel/helpers - typeof"; return animate_style_es_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, animate_style_es_typeof(o); }
function _defineProperty(obj, key, value) { key = animate_style_es_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function animate_style_es_toPropertyKey(t) { var i = animate_style_es_toPrimitive(t, "string"); return "symbol" == animate_style_es_typeof(i) ? i : String(i); }
function animate_style_es_toPrimitive(t, r) { if ("object" != animate_style_es_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != animate_style_es_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var AnimationPolyfill = arguments.length > 4 ? arguments[4] : undefined;
  var record = getDevToolsRecord();
  var isRecording = options.record !== false && record;
  var animation;
  var _options$duration = options.duration,
    duration = _options$duration === void 0 ? defaults.duration : _options$duration,
    _options$delay = options.delay,
    delay = _options$delay === void 0 ? defaults.delay : _options$delay,
    _options$endDelay = options.endDelay,
    endDelay = _options$endDelay === void 0 ? defaults.endDelay : _options$endDelay,
    _options$repeat = options.repeat,
    repeat = _options$repeat === void 0 ? defaults.repeat : _options$repeat,
    _options$easing = options.easing,
    easing = _options$easing === void 0 ? defaults.easing : _options$easing,
    _options$persist = options.persist,
    persist = _options$persist === void 0 ? false : _options$persist,
    direction = options.direction,
    offset = options.offset,
    _options$allowWebkitA = options.allowWebkitAcceleration,
    allowWebkitAcceleration = _options$allowWebkitA === void 0 ? false : _options$allowWebkitA,
    _options$autoplay = options.autoplay,
    autoplay = _options$autoplay === void 0 ? true : _options$autoplay;
  var data = getAnimationData(element);
  var valueIsTransform = isTransform(key);
  var canAnimateNatively = supports.waapi();
  /**
   * If this is an individual transform, we need to map its
   * key to a CSS variable and update the element's transform style
   */
  valueIsTransform && addTransformToElement(element, key);
  var name = getStyleName(key);
  var motionValue = getMotionValue(data.values, name);
  /**
   * Get definition of value, this will be used to convert numerical
   * keyframes into the default value type.
   */
  var definition = transformDefinitions.get(name);
  /**
   * Stop the current animation, if any. Because this will trigger
   * commitStyles (DOM writes) and we might later trigger DOM reads,
   * this is fired now and we return a factory function to create
   * the actual animation that can get called in batch,
   */
  stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
  /**
   * Batchable factory function containing all DOM reads.
   */
  return function () {
    var readInitialValue = function readInitialValue() {
      var _a, _b;
      return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    /**
     * Replace null values with the previous keyframe value, or read
     * it from the DOM if it's the first keyframe.
     */
    var keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
    /**
     * Detect unit type of keyframes.
     */
    var toUnit = getUnitConverter(keyframes, definition);
    if (isEasingGenerator(easing)) {
      var custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    /**
     * If this is a CSS variable we need to register it with the browser
     * before it can be animated natively. We also set it with setProperty
     * rather than directly onto the element.style object.
     */
    if (isCssVar(name)) {
      if (supports.cssRegisterProperty()) {
        registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    /**
     * If we've been passed a custom easing function, and this browser
     * does **not** support linear() easing, and the value is a transform
     * (and thus a pure number) we can still support the custom easing
     * by falling back to the animation polyfill.
     */
    if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
      canAnimateNatively = false;
    }
    /**
     * If we can animate this value with WAAPI, do so.
     */
    if (canAnimateNatively) {
      /**
       * Convert numbers to default value types. Currently this only supports
       * transforms but it could also support other value types.
       */
      if (definition) {
        keyframes = keyframes.map(function (value) {
          return isNumber(value) ? definition.toDefaultUnit(value) : value;
        });
      }
      /**
       * If this browser doesn't support partial/implicit keyframes we need to
       * explicitly provide one.
       */
      if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      var animationOptions = {
        delay: time.ms(delay),
        duration: time.ms(duration),
        endDelay: time.ms(endDelay),
        easing: !isEasingList(easing) ? convertEasing(easing, duration) : undefined,
        direction: direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate(_defineProperty(_defineProperty(_defineProperty({}, name, keyframes), "offset", offset), "easing", isEasingList(easing) ? easing.map(function (thisEasing) {
        return convertEasing(thisEasing, duration);
      }) : undefined), animationOptions);
      /**
       * Polyfill finished Promise in browsers that don't support it
       */
      if (!animation.finished) {
        animation.finished = new Promise(function (resolve, reject) {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      var target = keyframes[keyframes.length - 1];
      animation.finished.then(function () {
        if (persist) return;
        // Apply styles to target
        style.set(element, name, target);
        // Ensure fill modes don't persist
        animation.cancel();
      })["catch"](noop);
      /**
       * This forces Webkit to run animations on the main thread by exploiting
       * this condition:
       * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
       *
       * This fixes Webkit's timing bugs, like accelerated animations falling
       * out of sync with main thread animations and massive delays in starting
       * accelerated animations in WKWebView.
       */
      if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
      /**
       * If we can't animate the value natively then we can fallback to the numbers-only
       * polyfill for transforms.
       */
    } else if (AnimationPolyfill && valueIsTransform) {
      /**
       * If any keyframe is a string (because we measured it from the DOM), we need to convert
       * it into a number before passing to the Animation polyfill.
       */
      keyframes = keyframes.map(function (value) {
        return typeof value === "string" ? parseFloat(value) : value;
      });
      /**
       * If we only have a single keyframe, we need to create an initial keyframe by reading
       * the current value from the DOM.
       */
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill(function (latest) {
        style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration: duration,
        easing: easing
      }));
    } else {
      var _target = keyframes[keyframes.length - 1];
      style.set(element, name, definition && isNumber(_target) ? definition.toDefaultUnit(_target) : _target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration: duration,
        delay: delay,
        easing: easing,
        repeat: repeat,
        offset: offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    if (animation && !autoplay) animation.pause();
    return animation;
  };
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/options.es.js
var getOptions = function getOptions(options, key) {
  return (
    /**
     * TODO: Make test for this
     * Always return a new object otherwise delay is overwritten by results of stagger
     * and this results in no stagger
     */
    options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
  );
};

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  /**
   * Return an empty array
   */
  return Array.from(elements || []);
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/utils/stagger.es.js


function stagger() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$start = _ref.start,
    start = _ref$start === void 0 ? 0 : _ref$start,
    _ref$from = _ref.from,
    from = _ref$from === void 0 ? 0 : _ref$from,
    easing = _ref.easing;
  return function (i, total) {
    var fromIndex = isNumber(from) ? from : getFromIndex(from, total);
    var distance = Math.abs(fromIndex - i);
    var delay = duration * distance;
    if (easing) {
      var maxDelay = total * duration;
      var easingFunction = getEasingFunction(easing);
      delay = easingFunction(delay / maxDelay) * maxDelay;
    }
    return start + delay;
  };
}
function getFromIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    var lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function resolveOption(option, i, total) {
  return isFunction(option) ? option(i, total) : option;
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/create-animate.es.js






function createAnimate(AnimatePolyfill) {
  return function animate(elements, keyframes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    elements = resolveElements(elements);
    var numElements = elements.length;
    invariant(Boolean(numElements), "No valid element provided.");
    invariant(Boolean(keyframes), "No keyframes defined.");
    /**
     * Create and start new animations
     */
    var animationFactories = [];
    for (var i = 0; i < numElements; i++) {
      var element = elements[i];
      for (var key in keyframes) {
        var valueOptions = getOptions(options, key);
        valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
        var animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return withControls(animationFactories, options,
    /**
     * TODO:
     * If easing is set to spring or glide, duration will be dynamically
     * generated. Ideally we would dynamically generate this from
     * animation.effect.getComputedTiming().duration but this isn't
     * supported in iOS13 or our number polyfill. Perhaps it's possible
     * to Proxy animations returned from animateStyle that has duration
     * as a getter.
     */
    options.duration);
  };
}

;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/index.es.js


var animate = createAnimate(Animation);

;// CONCATENATED MODULE: ./node_modules/motion/dist/animate.es.js



function animateProgress(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return withControls([function () {
    var animation = new Animation(target, [0, 1], options);
    animation.finished["catch"](function () {});
    return animation;
  }], options, options.duration);
}
function animate_es_animate(target, keyframesOrOptions, options) {
  var factory = isFunction(target) ? animateProgress : animate;
  return factory(target, keyframesOrOptions, options);
}

;// CONCATENATED MODULE: ./src/js/component/NoteItem.js
function NoteItem_typeof(o) { "@babel/helpers - typeof"; return NoteItem_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, NoteItem_typeof(o); }
function NoteItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function NoteItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, NoteItem_toPropertyKey(descriptor.key), descriptor); } }
function NoteItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) NoteItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) NoteItem_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function NoteItem_toPropertyKey(t) { var i = NoteItem_toPrimitive(t, "string"); return "symbol" == NoteItem_typeof(i) ? i : String(i); }
function NoteItem_toPrimitive(t, r) { if ("object" != NoteItem_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != NoteItem_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (NoteItem_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NoteItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(NoteItem, _HTMLElement);
  var _super = _createSuper(NoteItem);
  function NoteItem() {
    NoteItem_classCallCheck(this, NoteItem);
    return _super.call(this);
  }
  NoteItem_createClass(NoteItem, [{
    key: "note",
    set: function set(note) {
      this._note = note;
      this.render();
    }
  }, {
    key: "eventDeleteNote",
    set: function set(event) {
      this._eventDeleteNote = event;
    }
  }, {
    key: "eventPrimary",
    set: function set(event) {
      this._eventPrimary = event;
    }
  }, {
    key: "animateCard",
    value: function animateCard() {
      animate_es_animate(this.querySelector('.card'), {
        x: [40, -40, 30, -30, 20, -20, 10, -10]
      }, {
        delay: stagger(0.1),
        duration: 1.5,
        offset: [0, 0.25, 0.75]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var dateString = this._note.createdAt;
      var date = new Date(dateString);
      var optionsDate = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      var optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      var formattedDate = date.toLocaleDateString('en-GB', optionsDate);
      var formattedTime = date.toLocaleTimeString('en-GB', optionsTime);
      var finalFormattedDateTime = "".concat(formattedTime, ", ").concat(formattedDate);
      this.innerHTML = "\n            <style>\n                *{\n                    font-family: 'Ubuntu', sans-serif;\n                }\n                .card{\n                    height: 230px;\n                    max-width: 550px;\n                    overflow: hidden;\n                }\n                .card-body{\n                    z-index: 1;\n                }\n                .elipse-1{\n                    position: absolute;\n                    width: 200px;\n                    height: 200px;\n        \n                    left: 65%;\n                    top: -25%;\n                    border-radius: 50%;\n                    background: #cacaca;\n                    box-shadow: 0 0 50px #cacaca;\n                    filter: blur(10px);\n                    opacity: .3;\n                }\n                .elipse-2{\n                    position: absolute;\n                    width: 150px;\n                    height: 150px;\n        \n                    left: -2%;\n                    top: 60%;\n                    border-radius: 50%;\n                    background: #0e0e0e;\n                    box-shadow: 0 0 50px #cacaca;\n                    filter: blur(10px);\n                    opacity: .15;\n                }\n                .elipse-3{\n                    position: absolute;\n                    width: 100px;\n                    height: 100px;\n        \n                    left: 5%;\n                    top: -40%;\n                    border-radius: 50%;\n                    background: #a3a3a3;\n                    box-shadow: 0 0 50px #cacaca;\n                    filter: blur(10px);\n                    opacity: .4;\n                }\n                .elipse-4{\n                    position: absolute;\n                    width: 50px;\n                    height: 50px;\n        \n                    left: 70%;\n                    top: 70%;\n                    border-radius: 50%;\n                    background: #6e6e6e;\n                    filter: blur(10px);\n                    opacity: .45;\n                }\n                p{\n                    display: -webkit-box;\n                    -webkit-box-orient: vertical;\n                    overflow: hidden;\n                }\n                .card-text{\n                    -webkit-line-clamp: 3;\n                }\n                .card-title{\n                    -webkit-line-clamp: 1;\n                }\n            </style>\n            <div class=\"card p-3\">\n                <div class=\"elipse-1\"></div>\n                <div class=\"elipse-2\"></div>\n                <div class=\"elipse-3\"></div>\n                <div class=\"elipse-4\"></div>\n                <div class=\"card-body d-flex flex-column justify-content-between p-0\">\n                    <div class=\"d-flex flex-column\">\n                        <h5 class=\"card-title\">".concat(this._note.title, "</h5>\n                        <h6 class=\"card-subtitle mb-2 text-body-secondary\">").concat(finalFormattedDateTime, "</h6>\n                        <p class=\"card-text\">").concat(this._note.body, "</p>\n                    </div>\n                    <div class=\"d-flex justify-content-between\">\n                        <button id=\"button-delete\" class=\"card-link btn btn-outline-secondary\">Hapus</button>\n                        <button id=\"button-primary\" class=\"card-link btn btn-dark\">").concat(this._note.archived ? 'Buka' : 'Arsip', "</button>\n                    </div>\n                </div>\n            </div>\n        ");
      this.querySelector('#button-delete').addEventListener('click', function () {
        _this._eventDeleteNote(_this._note.id);
      });
      this.querySelector('#button-primary').addEventListener('click', function () {
        _this._eventPrimary(_this._note.id);
      });
    }
  }]);
  return NoteItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('note-item', NoteItem);
;// CONCATENATED MODULE: ./src/js/component/NoteList.js
function NoteList_typeof(o) { "@babel/helpers - typeof"; return NoteList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, NoteList_typeof(o); }
function NoteList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function NoteList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, NoteList_toPropertyKey(descriptor.key), descriptor); } }
function NoteList_createClass(Constructor, protoProps, staticProps) { if (protoProps) NoteList_defineProperties(Constructor.prototype, protoProps); if (staticProps) NoteList_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function NoteList_toPropertyKey(t) { var i = NoteList_toPrimitive(t, "string"); return "symbol" == NoteList_typeof(i) ? i : String(i); }
function NoteList_toPrimitive(t, r) { if ("object" != NoteList_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != NoteList_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function NoteList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) NoteList_setPrototypeOf(subClass, superClass); }
function NoteList_createSuper(Derived) { var hasNativeReflectConstruct = NoteList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NoteList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NoteList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NoteList_possibleConstructorReturn(this, result); }; }
function NoteList_possibleConstructorReturn(self, call) { if (call && (NoteList_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return NoteList_assertThisInitialized(self); }
function NoteList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function NoteList_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; NoteList_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !NoteList_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return NoteList_construct(Class, arguments, NoteList_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return NoteList_setPrototypeOf(Wrapper, Class); }; return NoteList_wrapNativeSuper(Class); }
function NoteList_construct(Parent, args, Class) { if (NoteList_isNativeReflectConstruct()) { NoteList_construct = Reflect.construct.bind(); } else { NoteList_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) NoteList_setPrototypeOf(instance, Class.prototype); return instance; }; } return NoteList_construct.apply(null, arguments); }
function NoteList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function NoteList_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function NoteList_setPrototypeOf(o, p) { NoteList_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NoteList_setPrototypeOf(o, p); }
function NoteList_getPrototypeOf(o) { NoteList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NoteList_getPrototypeOf(o); }

var NoteList = /*#__PURE__*/function (_HTMLElement) {
  NoteList_inherits(NoteList, _HTMLElement);
  var _super = NoteList_createSuper(NoteList);
  function NoteList() {
    NoteList_classCallCheck(this, NoteList);
    return _super.call(this);
  }
  NoteList_createClass(NoteList, [{
    key: "notes",
    set: function set(notes) {
      this._notes = notes;
      this.render();
    }
  }, {
    key: "eventDeleteNote",
    set: function set(event) {
      this._eventDeleteNote = event;
    }
  }, {
    key: "eventArsipNote",
    set: function set(event) {
      this._eventArsipNote = event;
    }
  }, {
    key: "eventNonArsipNote",
    set: function set(event) {
      this._eventNonArsipNote = event;
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      this.innerHTML = "\n            <style>\n                *{\n                    font-family: 'Ubuntu', sans-serif;\n                }\n                .placeholder {\n                    font-weight: lighter;\n                    color: rgba(0,0,0,0.5);\n                    -webkit-user-select: none;\n                    -moz-user-select: none;\n                    -ms-user-select: none;\n                    user-select: none;\n                }\n            </style>\n        ";
      this.innerHTML += "<h2 class=\"placeholder\">".concat(message, "</h2>");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.innerHTML = "\n            <style>\n                .container-card{\n                    min-height: calc(100vh - 202.4px);\n                }\n                .note-list-card{\n                    width: 90%;\n                    display: grid;\n                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n                    gap: 30px;\n                    margin: 0 auto;\n                }\n            </style>\n            <div class=\"container-card\">\n                <div class=\"note-list-card\">\n                </div>\n            </div>\n        ";
      this._notes.forEach(function (note) {
        var noteElement = document.createElement('note-item');
        noteElement.note = note;
        noteElement.eventDeleteNote = _this._eventDeleteNote;
        noteElement.animateCard();
        if (note.archived) noteElement.eventPrimary = _this._eventNonArsipNote;else noteElement.eventPrimary = _this._eventArsipNote;
        _this.querySelector('.note-list-card').append(noteElement);
      });
    }
  }]);
  return NoteList;
}( /*#__PURE__*/NoteList_wrapNativeSuper(HTMLElement));
customElements.define('note-list', NoteList);
// EXTERNAL MODULE: ./src/js/component/IndikatorLoading.js
var IndikatorLoading = __webpack_require__(570);
;// CONCATENATED MODULE: ./src/js/view/main.js
function main_typeof(o) { "@babel/helpers - typeof"; return main_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, main_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == main_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(main_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var main = function main() {
  var url = 'https://notes-api.dicoding.dev/v2';
  var elementListNote = document.querySelector('note-list');
  var elementAddForm = document.querySelector('add-form');
  var elementNavbar = document.querySelector('nav-bar');
  var elementLoading = document.querySelector('indikator-loading');
  var tab = 'all';
  var searchNote = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var keyword, status, result, resultSearch, responseMassege, responseArchived, responseJSONArchived, responseNonArchived, responseJSONNonArchived, _responseArchived, _responseJSONArchived, _responseNonArchived, _responseJSONNonArchived;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            elementLoading.hidden = false;
            keyword = elementNavbar.keyword;
            status = false;
            result = [];
            resultSearch = [];
            responseMassege = '';
            if (!(tab == 'all')) {
              _context.next = 25;
              break;
            }
            _context.next = 10;
            return fetch("".concat(url, "/notes/archived"));
          case 10:
            responseArchived = _context.sent;
            _context.next = 13;
            return responseArchived.json();
          case 13:
            responseJSONArchived = _context.sent;
            _context.next = 16;
            return fetch("".concat(url, "/notes"));
          case 16:
            responseNonArchived = _context.sent;
            _context.next = 19;
            return responseNonArchived.json();
          case 19:
            responseJSONNonArchived = _context.sent;
            status = responseJSONNonArchived.status == 'fail' || responseJSONArchived.status == 'fail';
            result = !status ? responseJSONNonArchived.data.concat(responseJSONArchived.data) : [];
            responseMassege = responseJSONArchived.message + '\n' + responseJSONNonArchived.message;
            _context.next = 46;
            break;
          case 25:
            if (!(tab == 'arsip')) {
              _context.next = 37;
              break;
            }
            _context.next = 28;
            return fetch("".concat(url, "/notes/archived"));
          case 28:
            _responseArchived = _context.sent;
            _context.next = 31;
            return _responseArchived.json();
          case 31:
            _responseJSONArchived = _context.sent;
            status = _responseJSONArchived.status == 'fail';
            result = !status ? _responseJSONArchived.data : [];
            responseMassege = _responseJSONArchived.message;
            _context.next = 46;
            break;
          case 37:
            _context.next = 39;
            return fetch("".concat(url, "/notes"));
          case 39:
            _responseNonArchived = _context.sent;
            _context.next = 42;
            return _responseNonArchived.json();
          case 42:
            _responseJSONNonArchived = _context.sent;
            status = _responseJSONNonArchived.status == 'fail';
            result = !status ? _responseJSONNonArchived.data : [];
            responseMassege = _responseJSONNonArchived.message;
          case 46:
            if (status) {
              setTimeout(function () {
                showResponseMessage(responseMassege);
                elementLoading.hidden = true;
              }, 500);
            } else {
              resultSearch = result.filter(function (note) {
                return note.title.includes(keyword) || note.body.includes(keyword);
              });
              resultSearch.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              elementListNote.notes = resultSearch;
              elementLoading.hidden = true;
            }
            _context.next = 52;
            break;
          case 49:
            _context.prev = 49;
            _context.t0 = _context["catch"](0);
            showResponseMessage(_context.t0.stack);
          case 52:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 49]]);
    }));
    return function searchNote() {
      return _ref.apply(this, arguments);
    };
  }();
  var tabArsipNote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            elementLoading.hidden = false;
            _context2.next = 4;
            return fetch("".concat(url, "/notes/archived"));
          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();
          case 7:
            responseJSON = _context2.sent;
            if (responseJSON.status == 'fail') {
              setTimeout(function () {
                showResponseMessage(responseJSON.message);
                elementLoading.hidden = true;
              }, 500);
            } else {
              tab = 'arsip';
              elementNavbar.setTabMenu('', 'active', '');
              elementListNote.notes = responseJSON.data.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              elementLoading.hidden = true;
            }
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            showResponseMessage(_context2.t0.stack);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function tabArsipNote() {
      return _ref2.apply(this, arguments);
    };
  }();
  var tabNonArsipNote = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            elementLoading.hidden = false;
            _context3.next = 4;
            return fetch("".concat(url, "/notes"));
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            responseJSON = _context3.sent;
            if (responseJSON.status == 'fail') {
              setTimeout(function () {
                showResponseMessage(responseJSON.message);
                elementLoading.hidden = true;
              }, 500);
            } else {
              tab = 'nonArsip';
              elementNavbar.setTabMenu('', '', 'active');
              elementListNote.notes = responseJSON.data.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              elementLoading.hidden = true;
            }
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            showResponseMessage(_context3.t0.stack);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function tabNonArsipNote() {
      return _ref3.apply(this, arguments);
    };
  }();
  var deleteNote = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch("".concat(url, "/notes/").concat(id), {
              method: 'DELETE'
            });
          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return response.json();
          case 6:
            responseJSON = _context4.sent;
            setTimeout(function () {
              showResponseMessage(responseJSON.message);
            }, 500);
            if (tab == 'all') {
              getAllNotes();
            } else if (tab == 'arsip') {
              tabArsipNote();
            } else {
              tabNonArsipNote();
            }
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            showResponseMessage(_context4.t0.stack);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function deleteNote(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var arsipNote = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return fetch("".concat(url, "/notes/").concat(id, "/archive"), {
              method: 'POST'
            });
          case 3:
            response = _context5.sent;
            _context5.next = 6;
            return response.json();
          case 6:
            responseJSON = _context5.sent;
            setTimeout(function () {
              showResponseMessage(responseJSON.message);
            }, 500);
            if (tab == 'all') {
              getAllNotes();
            } else if (tab == 'arsip') {
              tabArsipNote();
            } else {
              tabNonArsipNote();
            }
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            showResponseMessage(_context5.t0.stack);
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function arsipNote(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var nonArsipNote = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("".concat(url, "/notes/").concat(id, "/unarchive"), {
              method: 'POST'
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            responseJSON = _context6.sent;
            setTimeout(function () {
              showResponseMessage(responseJSON.message);
            }, 500);
            if (tab == 'all') {
              getAllNotes();
            } else if (tab == 'arsip') {
              tabArsipNote();
            } else {
              tabNonArsipNote();
            }
            _context6.next = 14;
            break;
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            showResponseMessage(_context6.t0.stack);
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 11]]);
    }));
    return function nonArsipNote(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  var addNote = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(note) {
      var response, responseJSON;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("".concat(url, "/notes"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(note)
            });
          case 3:
            response = _context7.sent;
            elementAddForm.resetForm();
            _context7.next = 7;
            return response.json();
          case 7:
            responseJSON = _context7.sent;
            setTimeout(function () {
              showResponseMessage(responseJSON.message);
            }, 500);
            if (tab == 'all') {
              getAllNotes();
            } else if (tab == 'arsip') {
              tabArsipNote();
            } else {
              tabNonArsipNote();
            }
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            showResponseMessage(_context7.t0.stack);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function addNote(_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getAllNotes = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var responseNonArchived, responseArchived, responseJSONNonArchived, responseJSONArchived, allNotes;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            elementLoading.hidden = false;
            _context8.next = 4;
            return fetch("".concat(url, "/notes"));
          case 4:
            responseNonArchived = _context8.sent;
            _context8.next = 7;
            return fetch("".concat(url, "/notes/archived"));
          case 7:
            responseArchived = _context8.sent;
            _context8.next = 10;
            return responseNonArchived.json();
          case 10:
            responseJSONNonArchived = _context8.sent;
            _context8.next = 13;
            return responseArchived.json();
          case 13:
            responseJSONArchived = _context8.sent;
            if (responseJSONNonArchived.status == 'fail' || responseJSONArchived.status == 'fail') {
              setTimeout(function () {
                showResponseMessage(responseJSONNonArchived.message + '\n' + responseJSONArchived.message);
                elementLoading.hidden = true;
              }, 500);
            } else {
              tab = 'all';
              allNotes = responseJSONNonArchived.data.concat(responseJSONArchived.data);
              allNotes.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              elementNavbar.setTabMenu('active', '', '');
              elementListNote.notes = allNotes;
              elementLoading.hidden = true;
            }
            _context8.next = 20;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](0);
            showResponseMessage(_context8.t0.stack);
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 17]]);
    }));
    return function getAllNotes() {
      return _ref8.apply(this, arguments);
    };
  }();
  var showResponseMessage = function showResponseMessage() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Check your internet connection';
    alert(message);
  };
  elementAddForm.eventAddNote = addNote;
  elementNavbar.eventSearch = searchNote;
  elementNavbar.eventTabArsip = tabArsipNote;
  elementNavbar.eventTabNonArsip = tabNonArsipNote;
  elementNavbar.eventTabAllNotes = getAllNotes;
  elementListNote.eventDeleteNote = deleteNote;
  elementListNote.eventArsipNote = arsipNote;
  elementListNote.eventNonArsipNote = nonArsipNote;
  getAllNotes();
};
/* harmony default export */ const view_main = (main);
;// CONCATENATED MODULE: ./src/js/app.js

view_main();
})();

/******/ })()
;