"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Breadcrumbs",
  props: ['breadcrumbs']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_advanced_cropper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-advanced-cropper */ "./node_modules/vue-advanced-cropper/dist/index.es.js");
/* harmony import */ var vue_advanced_cropper_dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-advanced-cropper/dist/style.css */ "./node_modules/vue-advanced-cropper/dist/style.css");
/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Breadcrumbs */ "./resources/js/components/Breadcrumbs.vue");
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
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
  components: {
    Cropper: vue_advanced_cropper__WEBPACK_IMPORTED_MODULE_0__.Cropper,
    Breadcrumbs: _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      lang: {
        timezone: this.$i18n.t("timezone"),
        name: this.$i18n.t("name"),
        email: this.$i18n.t("email")
      },
      breadcrumbs: [{
        text: "Dashboard",
        disabled: false,
        to: "/"
      }, {
        text: "Profile",
        disabled: true,
        to: "/profile"
      }],
      profileupdating: false,
      imageuploading: false,
      accountactivitiesloading: false,
      cropprocess: false,
      passwordupdating: false,
      changepassword: false,
      accountactivities: [],
      hover: true,
      img: "",
      image: "",
      loading: false,
      form: {
        currentpassword: null,
        newpassword: null,
        newpasswordconfirm: null
      },
      showAvatarPicker: false,
      hasalert: false,
      alert: {
        type: "",
        text: ""
      },
      file: ""
    };
  },
  computed: {
    user: {
      get: function get() {
        return this.$store.state.user;
      },
      set: function set(value) {
        this.$store.commit("SET_USER", value);
      }
    },
    market: {
      get: function get() {
        return this.$store.state.market;
      },
      set: function set(value) {
        this.$store.commit("SET_MARKET", value);
      }
    }
  },
  methods: {
    handleFileUpload: function handleFileUpload(event) {
      var _this = this;
      this.imageuploading = true;
      this.cropprocess = true;
      this.file = event.target.files[0];
      var formData = new FormData();
      formData.append("file", this.file);
      axios.post("/api/uploadsinglefile", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this.img = response.data;
        _this.imageuploading = false;
      });
    },
    updatePassword: function updatePassword() {
      var _this2 = this;
      this.passwordupdating = true;
      axios.post("/api/changeuserpassword", {
        currentpassword: this.form.currentpassword,
        newpassword: this.form.newpassword,
        newpasswordconfirm: this.form.newpasswordconfirm
      }).then(function (response) {
        _this2.passwordupdating = false;
        if (response.data.status == 3) {
          _this2.alert.type = "error";
          _this2.alert.text = _this2.$i18n.t("currentPasswordEnteredIncorrectly");
          _this2.hasalert = true;
        } else if (response.data.status == 2) {
          _this2.alert.type = "warning";
          _this2.alert.text = _this2.$i18n.t("newPasswordsDoNotMatch");
          _this2.hasalert = true;
        } else if (response.data.status == 1) {
          _this2.alert.type = "success";
          _this2.alert.text = _this2.$i18n.t("yourPasswordChangedSuccessfully");
          _this2.hasalert = true;
          _this2.changepassword = false;
          _this2.sendnotification("standard", "success", _this2.$i18n.t("successfull"), _this2.$i18n.t("yourPasswordChangedSuccessfully"), 10000);
        } else {}
      });
    },
    openAvatarUpload: function openAvatarUpload() {
      this.$refs.avatarfile.click();
    },
    // cropprocess
    change: function change(_ref) {
      var coordinates = _ref.coordinates,
        canvas = _ref.canvas;
    },
    crop: function crop() {
      var _this$$refs$cropper$g = this.$refs.cropper.getResult(),
        coordinates = _this$$refs$cropper$g.coordinates,
        canvas = _this$$refs$cropper$g.canvas;
      this.coordinates = coordinates;
      this.image = canvas.toDataURL();
      this.updateAvatar();
    },
    sendnotification: function sendnotification(group, type, title, text, duration) {
      this.$notify({
        group: group,
        type: type,
        title: title,
        text: text,
        duration: duration
      });
    },
    updateAvatar: function updateAvatar() {
      var _this3 = this;
      this.cropprocess = false;
      this.profileupdating = true;

      // let formData = new FormData();
      // formData.append('image', this.image);
      axios.post("/api/uploadavatar", {
        image: this.image
      }).then(function (response) {
        _this3.user.avatar = response.data;
        _this3.img = "";
        _this3.image = "";
        _this3.profileupdating = false;
        _this3.sendnotification("standard", "success", _this3.$i18n.t("successfull"), _this3.$i18n.t("yourProfilePhotoHasBeenSuccessfullyChanged"), 10000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-advanced-cropper/dist/style.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-advanced-cropper/dist/style.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-advanced-cropper {\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  max-height: 100%;\n  max-width: 100%;\n  direction: ltr;\n}\n\n.vue-advanced-cropper__stretcher {\n  pointer-events: none;\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.vue-advanced-cropper__image {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  position: absolute;\n  transform-origin: center;\n  max-width: none !important;\n}\n\n.vue-advanced-cropper__background, .vue-advanced-cropper__foreground {\n  opacity: 1;\n  background: #000;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.vue-advanced-cropper__foreground {\n  opacity: 0.5;\n}\n\n.vue-advanced-cropper__boundaries {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n\n.vue-advanced-cropper__cropper-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.vue-advanced-cropper__image-wrapper {\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.vue-advanced-cropper__stencil-wrapper {\n  position: absolute;\n}\n\n.vue-handler-wrapper {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n}\n\n.vue-handler-wrapper__draggable {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vue-handler-wrapper--west-north {\n  cursor: nw-resize;\n}\n\n.vue-handler-wrapper--north {\n  cursor: n-resize;\n}\n\n.vue-handler-wrapper--east-north {\n  cursor: ne-resize;\n}\n\n.vue-handler-wrapper--east {\n  cursor: e-resize;\n}\n\n.vue-handler-wrapper--east-south {\n  cursor: se-resize;\n}\n\n.vue-handler-wrapper--south {\n  cursor: s-resize;\n}\n\n.vue-handler-wrapper--west-south {\n  cursor: sw-resize;\n}\n\n.vue-handler-wrapper--west {\n  cursor: w-resize;\n}\n\n.vue-handler-wrapper--disabled {\n  cursor: auto;\n}\n\n.vue-bounding-box {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.vue-bounding-box__handler {\n  position: absolute;\n}\n\n.vue-bounding-box__handler--west-north {\n  left: 0;\n  top: 0;\n}\n\n.vue-bounding-box__handler--north {\n  left: 50%;\n  top: 0;\n}\n\n.vue-bounding-box__handler--east-north {\n  left: 100%;\n  top: 0;\n}\n\n.vue-bounding-box__handler--east {\n  left: 100%;\n  top: 50%;\n}\n\n.vue-bounding-box__handler--east-south {\n  left: 100%;\n  top: 100%;\n}\n\n.vue-bounding-box__handler--south {\n  left: 50%;\n  top: 100%;\n}\n\n.vue-bounding-box__handler--west-south {\n  left: 0;\n  top: 100%;\n}\n\n.vue-bounding-box__handler--west {\n  left: 0;\n  top: 50%;\n}\n\n.vue-line-wrapper {\n  background: 0 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vue-line-wrapper--north, .vue-line-wrapper--south {\n  height: 12px;\n  width: 100%;\n  left: 0;\n  transform: translateY(-50%);\n}\n\n.vue-line-wrapper--north {\n  top: 0;\n  cursor: n-resize;\n}\n\n.vue-line-wrapper--south {\n  top: 100%;\n  cursor: s-resize;\n}\n\n.vue-line-wrapper--east, .vue-line-wrapper--west {\n  width: 12px;\n  height: 100%;\n  transform: translateX(-50%);\n  top: 0;\n}\n\n.vue-line-wrapper--east {\n  left: 100%;\n  cursor: e-resize;\n}\n\n.vue-line-wrapper--west {\n  left: 0;\n  cursor: w-resize;\n}\n\n.vue-line-wrapper--disabled {\n  cursor: auto;\n}\n\n.vue-simple-line {\n  background: 0 0;\n  transition: border 0.5s;\n  border-color: rgba(255, 255, 255, 0.3);\n  border-width: 0;\n  border-style: solid;\n}\n\n.vue-simple-line--north, .vue-simple-line--south {\n  height: 0;\n  width: 100%;\n}\n\n.vue-simple-line--east, .vue-simple-line--west {\n  height: 100%;\n  width: 0;\n}\n\n.vue-simple-line--east {\n  border-right-width: 1px;\n}\n\n.vue-simple-line--west {\n  border-left-width: 1px;\n}\n\n.vue-simple-line--south {\n  border-bottom-width: 1px;\n}\n\n.vue-simple-line--north {\n  border-top-width: 1px;\n}\n\n.vue-simple-line--hover {\n  opacity: 1;\n  border-color: #fff;\n}\n\n.vue-draggable-area {\n  position: relative;\n}\n\n.vue-preview-result {\n  overflow: hidden;\n  box-sizing: border-box;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.vue-preview-result__wrapper {\n  position: absolute;\n}\n\n.vue-preview-result__image {\n  pointer-events: none;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform-origin: center;\n  max-width: none !important;\n}\n\n.vue-circle-stencil {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  box-sizing: content-box;\n  cursor: move;\n}\n\n.vue-circle-stencil__preview {\n  border-radius: 50%;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.vue-circle-stencil--movable {\n  cursor: move;\n}\n\n.vue-simple-handler {\n  display: block;\n  background: #fff;\n  height: 10px;\n  width: 10px;\n}\n\n.vue-rectangle-stencil {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.vue-rectangle-stencil__preview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.vue-rectangle-stencil--movable {\n  cursor: move;\n}\n\n.vue-preview {\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.vue-preview--fill {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.vue-preview__wrapper {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.vue-preview__image {\n  pointer-events: none;\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform-origin: center;\n  max-width: none !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.circle-cropper {\r\n  width: 100%;\r\n  background: #222;\r\n  height: 500px;\n}\n.circle-cropper .__preview {\r\n  border: solid 1px rgba(white, 0.15);\n}\n.avatarimg {\n}\n.avatararea {\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding: 35px;\r\n  margin: auto;\r\n  position: relative;\r\n  margin-bottom: 50px;\n}\n.changeavatarhover {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 70px;\r\n  bottom: 0;\r\n  background-color: rgba(219, 231, 219, 0.63);\n}\n.avataruploaddiv {\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\n}\n.market_line {\r\n  display: flex;\r\n  padding: 15px 0 15px 0;\r\n  border-bottom: 1px solid lightgray;\n}\n.market_line b {\r\n  padding-right: 10px;\n}\n.prflbtn {\r\n  margin: 18px auto 0;\r\n  display: flex;\r\n  justify-content: center;\n}\n.customcardtext {\r\n  min-height: 677px;\n}\n.oneline {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-advanced-cropper/dist/style.css":
/*!**********************************************************!*\
  !*** ./node_modules/vue-advanced-cropper/dist/style.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-advanced-cropper/dist/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-advanced-cropper/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-advanced-cropper/dist/index.es.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundWrapper": () => (/* binding */ Nt),
/* harmony export */   "BoundingBox": () => (/* binding */ Pt),
/* harmony export */   "CircleStencil": () => (/* binding */ Jt),
/* harmony export */   "Cropper": () => (/* binding */ ne),
/* harmony export */   "DragEvent": () => (/* binding */ W),
/* harmony export */   "DraggableArea": () => (/* binding */ Lt),
/* harmony export */   "DraggableElement": () => (/* binding */ O),
/* harmony export */   "HandlerWrapper": () => (/* binding */ H),
/* harmony export */   "LineWrapper": () => (/* binding */ P),
/* harmony export */   "MoveEvent": () => (/* binding */ E),
/* harmony export */   "Preview": () => (/* binding */ Zt),
/* harmony export */   "PreviewResult": () => (/* binding */ Yt),
/* harmony export */   "RectangleStencil": () => (/* binding */ Qt),
/* harmony export */   "ResizeEvent": () => (/* binding */ C),
/* harmony export */   "SimpleHandler": () => (/* binding */ Et),
/* harmony export */   "SimpleLine": () => (/* binding */ Ot),
/* harmony export */   "StencilPreview": () => (/* binding */ qt),
/* harmony export */   "TransformableImage": () => (/* binding */ Ut)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?e(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){if(null==t)return{};var i,n,s=function(t,e){if(null==t)return{};var i,n,s={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(s[i]=t[i]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var a,h,c,l=(a=function(t){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var e={}.hasOwnProperty;function i(){for(var t=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var o=typeof s;if("string"===o||"number"===o)t.push(s);else if(Array.isArray(s)){if(s.length){var r=i.apply(null,s);r&&t.push(r)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var a in s)e.call(s,a)&&s[a]&&t.push(a);else t.push(s.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):window.classNames=i}()},a(c={path:h,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&c.path)}},c.exports),c.exports),d=function(t){return function(e,i){if(!e)return t;var n;"string"==typeof e?n=e:i=e;var s=t;return n&&(s+="__"+n),s+(i?Object.keys(i).reduce((function(t,e){var n=i[e];return n&&(t+=" "+("boolean"==typeof n?s+"--"+e:s+"--"+e+"_"+n)),t}),""):"")}};function u(t,e,i){var n,s,o,r,a;function h(){var c=Date.now()-r;c<e&&c>=0?n=setTimeout(h,e-c):(n=null,i||(a=t.apply(o,s),o=s=null))}null==e&&(e=100);var c=function(){o=this,s=arguments,r=Date.now();var c=i&&!n;return n||(n=setTimeout(h,e)),c&&(a=t.apply(o,s),o=s=null),a};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(a=t.apply(o,s),o=s=null,clearTimeout(n),n=null)},c}u.debounce=u;var m=u,f=function(){return f=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},f.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(t,e){var i,n;return t&&e?(i=""+t+e[0].toUpperCase()+e.slice(1),n=t+"-"+e):(i=t||e,n=t||e),{name:i,classname:n}}function g(t){return/^blob:/.test(t)}function v(t){return g(t)||function(t){return/^data:/.test(t)}(t)}function b(t){return!!(t&&t.constructor&&t.call&&t.apply)}function w(t){return void 0===t}function y(t){return"object"==typeof t&&null!==t}function z(t,e,i){var n={};return y(t)?(Object.keys(e).forEach((function(s){w(t[s])?n[s]=e[s]:y(e[s])?y(t[s])?n[s]=z(t[s],e[s],i[s]):n[s]=t[s]?e[s]:i[s]:!0===e[s]||!1===e[s]?n[s]=Boolean(t[s]):n[s]=t[s]})),n):t?e:i}function R(t){var e=Number(t);return Number.isNaN(e)?t:e}function A(t){return typeof("number"==t||function(t){return"object"==typeof t&&null!==t}(t)&&"[object Number]"==toString.call(t))&&!S(t)}function S(t){return t!=t}function x(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}var M=function(t,e){void 0===t&&(t={}),void 0===e&&(e={}),this.type="manipulateImage",this.move=t,this.scale=e},C=function(t,e){void 0===e&&(e={}),this.type="resize",this.directions=t,this.params=e},E=function(t){this.type="move",this.directions=t},W=function(){function t(t,e,i,n,s){this.type="drag",this.nativeEvent=t,this.position=i,this.previousPosition=n,this.element=e,this.anchor=s}return t.prototype.shift=function(){var t=this,e=t.element,i=t.anchor,n=t.position,s=e.getBoundingClientRect(),o=s.left,r=s.top;return{left:n.left-o-i.left,top:n.top-r-i.top}},t}();function T(t,e,i,n,s,o,r,a,h,c){"boolean"!=typeof r&&(h=a,a=r,r=!1);const l="function"==typeof i?i.options:i;let d;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),n&&(l._scopeId=n),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,h(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):e&&(d=r?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(l.functional){const t=l.render;l.render=function(e,i){return d.call(i),t(e,i)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,d):[d]}return i}var O=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"draggable",class:t.classname,on:{touchstart:t.onTouchStart,mousedown:t.onMouseDown,mouseover:t.onMouseOver,mouseleave:t.onMouseLeave}},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"DraggableElement",mixins:[{beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){if(!this.$refs.draggable)throw new Error('You should add ref "draggable" to your root element to use draggable mixin');this.touches=[],this.hovered=!1},methods:{onMouseOver:function(){this.hovered||(this.hovered=!0,this.$emit("enter"))},onMouseLeave:function(){this.hovered&&!this.touches.length&&(this.hovered=!1,this.$emit("leave"))},onTouchStart:function(t){t.cancelable&&!this.disabled&&1===t.touches.length&&(this.touches=o(t.touches),this.hovered||(this.$emit("enter"),this.hovered=!0),t.touches.length&&this.initAnchor(this.touches.reduce((function(e,i){return{clientX:e.clientX+i.clientX/t.touches.length,clientY:e.clientY+i.clientY/t.touches.length}}),{clientX:0,clientY:0})),t.preventDefault&&t.preventDefault(),t.stopPropagation())},onTouchEnd:function(){this.processEnd()},onTouchMove:function(t){this.touches.length&&(this.processMove(t,t.touches),t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation())},onMouseDown:function(t){if(!this.disabled&&0===t.button){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],this.initAnchor(e),t.stopPropagation()}},onMouseMove:function(t){this.touches.length&&(this.processMove(t,[{fake:!0,clientX:t.clientX,clientY:t.clientY}]),t.preventDefault&&t.preventDefault())},onMouseUp:function(){this.processEnd()},initAnchor:function(t){var e=this.$refs.draggable.getBoundingClientRect(),i=e.left,n=e.right,s=e.bottom,o=e.top;this.anchor={left:t.clientX-i,top:t.clientY-o,bottom:s-t.clientY,right:n-t.clientX}},processMove:function(t,e){var i=o(e);if(this.touches.length){if(1===this.touches.length&&1===i.length){var n=this.$refs.draggable;this.$emit("drag",new W(t,n,{left:i[0].clientX,top:i[0].clientY},{left:this.touches[0].clientX,top:this.touches[0].clientY},this.anchor))}this.touches=i}},processEnd:function(){this.touches.length&&this.$emit("drag-end"),this.hovered&&(this.$emit("leave"),this.hovered=!1),this.touches=[]}}}],props:{classname:{type:String}}},undefined,false,undefined,!1,void 0,void 0,void 0),$=d("vue-handler-wrapper"),H=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes.root},[i("DraggableElement",{class:t.classes.draggable,on:{drag:function(e){return t.$emit("drag",e)},"drag-end":function(e){return t.$emit("drag-end")},leave:function(e){return t.$emit("leave")},enter:function(e){return t.$emit("enter")}}},[t._t("default")],2)],1)},staticRenderFns:[]},undefined,{name:"HandlerWrapper",components:{DraggableElement:O},props:{horizontalPosition:{type:String},verticalPosition:{type:String},disabled:{type:Boolean,default:!1}},computed:{classes:function(){var t;if(this.horizontalPosition||this.verticalPosition){var e,i=p(this.horizontalPosition,this.verticalPosition);t=$((n(e={},i.classname,!0),n(e,"disabled",this.disabled),e))}else t=$({disabled:this.disabled});return{root:t,draggable:$("draggable")}}}},undefined,false,undefined,!1,void 0,void 0,void 0),j=d("vue-line-wrapper"),P=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("DraggableElement",{class:t.classname,on:{drag:function(e){return t.$emit("drag",e)},"drag-end":function(e){return t.$emit("drag-end")},leave:function(e){return t.$emit("leave")},enter:function(e){return t.$emit("enter")}}},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"LineWrapper",components:{DraggableElement:O},props:{position:{type:String,required:!0},disabled:{type:Boolean,default:!1}},computed:{classname:function(){var t;return j((n(t={},this.position,!0),n(t,"disabled",this.disabled),t))}}},undefined,false,undefined,!1,void 0,void 0,void 0),D=["left","right","top","bottom"],L=["left","right"],I=["top","bottom"],B=["left","top"],_=["fill-area","fit-area","stencil","none"],F={left:0,top:0,width:0,height:0};function X(t,e,i){return!(i=i||["width","height","left","top"]).some((function(i){return t[i]!==e[i]}))}function Y(t){return{left:t.left,top:t.top,right:t.left+t.width,bottom:t.top+t.height}}function k(t,e){return{left:t.left-e.left,top:t.top-e.top}}function U(t){return{left:t.left+t.width/2,top:t.top+t.height/2}}function N(t,e){var i={left:0,top:0,right:0,bottom:0};return D.forEach((function(n){var s=e[n],o=Y(t)[n];i[n]=void 0!==s&&void 0!==o?"left"===n||"top"===n?Math.max(0,s-o):Math.max(0,o-s):0})),i}function V(t,e){return{left:t.left-e.left,top:t.top-e.top,width:t.width+e.left+e.right,height:t.height+e.top+e.bottom}}function Z(t){return{left:-t.left,top:-t.top}}function q(t,e){return f(f({},t),{left:t.left+e.left,top:t.top+e.top})}function G(t,e,i,n){if(1!==e){if(i){var s=U(t);return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2+(i.left-s.left)*(n||1-e),top:t.top+t.height*(1-e)/2+(i.top-s.top)*(n||1-e)}}return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2,top:t.top+t.height*(1-e)/2}}return t}function Q(t){return t.width/t.height}function K(t,e){return Math.min(void 0!==e.right&&void 0!==e.left?(e.right-e.left)/t.width:1/0,void 0!==e.bottom&&void 0!==e.top?(e.bottom-e.top)/t.height:1/0)}function J(t,e){var i={left:0,top:0},n=N(t,e);return n.left&&n.left>0?i.left=n.left:n.right&&n.right>0&&(i.left=-n.right),n.top&&n.top>0?i.top=n.top:n.bottom&&n.bottom>0&&(i.top=-n.bottom),i}function tt(t,e){var i;return e.minimum&&t<e.minimum?i=e.minimum:e.maximum&&t>e.maximum&&(i=e.maximum),i}function et(t,e){var i=Q(t),n=Q(e);return e.width<1/0&&e.height<1/0?i>n?{width:e.width,height:e.width/i}:{width:e.height*i,height:e.height}:e.width<1/0?{width:e.width,height:e.width/i}:e.height<1/0?{width:e.height*i,height:e.height}:t}function it(t,e){var i=e*Math.PI/180;return{width:Math.abs(t.width*Math.cos(i))+Math.abs(t.height*Math.sin(i)),height:Math.abs(t.width*Math.sin(i))+Math.abs(t.height*Math.cos(i))}}function nt(t,e){var i=e*Math.PI/180;return{left:t.left*Math.cos(i)-t.top*Math.sin(i),top:t.left*Math.sin(i)+t.top*Math.cos(i)}}function st(t,e){var i=N(ot(t,e),e);return i.left+i.right+i.top+i.bottom?i.left+i.right>i.top+i.bottom?Math.min((t.width+i.left+i.right)/t.width,K(t,e)):Math.min((t.height+i.top+i.bottom)/t.height,K(t,e)):1}function ot(t,e,i){void 0===i&&(i=!1);var n=J(t,e);return q(t,i?Z(n):n)}function rt(t){return{width:void 0!==t.right&&void 0!==t.left?t.right-t.left:1/0,height:void 0!==t.bottom&&void 0!==t.top?t.bottom-t.top:1/0}}function at(t,e){return f(f({},t),{minWidth:Math.min(e.width,t.minWidth),minHeight:Math.min(e.height,t.minHeight),maxWidth:Math.min(e.width,t.maxWidth),maxHeight:Math.min(e.height,t.maxHeight)})}function ht(t,e,i){void 0===i&&(i=!0);var n={};return D.forEach((function(s){var o=t[s],r=e[s];void 0!==o&&void 0!==r?n[s]="left"===s||"top"===s?i?Math.max(o,r):Math.min(o,r):i?Math.min(o,r):Math.max(o,r):void 0!==r?n[s]=r:void 0!==o&&(n[s]=o)})),n}function ct(t,e){return ht(t,e,!0)}function lt(t){var e=t.size,i=t.aspectRatio,n=t.ignoreMinimum,s=t.sizeRestrictions;return Boolean((e.correctRatio||Q(e)>=i.minimum&&Q(e)<=i.maximum)&&e.height<=s.maxHeight&&e.width<=s.maxWidth&&e.width&&e.height&&(n||e.height>=s.minHeight&&e.width>=s.minWidth))}function dt(t,e){return Math.pow(t.width-e.width,2)+Math.pow(t.height-e.height,2)}function ut(t){var e=t.width,i=t.height,n=t.sizeRestrictions,s={minimum:t.aspectRatio&&t.aspectRatio.minimum||0,maximum:t.aspectRatio&&t.aspectRatio.maximum||1/0},o={width:Math.max(n.minWidth,Math.min(n.maxWidth,e)),height:Math.max(n.minHeight,Math.min(n.maxHeight,i))};function r(t,o){return void 0===o&&(o=!1),t.reduce((function(t,r){return lt({size:r,aspectRatio:s,sizeRestrictions:n,ignoreMinimum:o})&&(!t||dt(r,{width:e,height:i})<dt(t,{width:e,height:i}))?r:t}),null)}var a=[];s&&[s.minimum,s.maximum].forEach((function(t){t&&a.push({width:o.width,height:o.width/t,correctRatio:!0},{width:o.height*t,height:o.height,correctRatio:!0})})),lt({size:o,aspectRatio:s,sizeRestrictions:n})&&a.push(o);var h=r(a)||r(a,!0);return h&&{width:h.width,height:h.height}}function mt(t){var e=t.event,i=t.coordinates,n=t.positionRestrictions,s=void 0===n?{}:n,o=q(i,e.directions);return q(o,J(o,s))}function ft(t){var e=t.coordinates,i=t.transform,n=t.imageSize,s=t.sizeRestrictions,o=t.positionRestrictions,r=t.aspectRatio,a=t.visibleArea,h=function(t,e){return mt({coordinates:t,positionRestrictions:o,event:new E({left:e.left-t.left,top:e.top-t.top})})},c=f({},e);return(Array.isArray(i)?i:[i]).forEach((function(t){var e={};w((e="function"==typeof t?t({coordinates:c,imageSize:n,visibleArea:a}):t).width)&&w(e.height)||(c=function(t,e){var i=f(f(f({},t),ut({width:e.width,height:e.height,sizeRestrictions:s,aspectRatio:r})),{left:0,top:0});return h(i,{left:t.left,top:t.top})}(c,f(f({},c),e))),w(e.left)&&w(e.top)||(c=h(c,f(f({},c),e)))})),c}function pt(t){t.event;var e=t.getAreaRestrictions,i=t.boundaries,n=t.coordinates,s=t.visibleArea;t.aspectRatio;var o=t.stencilSize,r=t.sizeRestrictions,a=t.positionRestrictions;t.stencilReference;var h,c,l,d=f({},n),u=f({},s),m=f({},o);h=Q(m),c=Q(d),void 0===l&&(l=.001),(0===h||0===c?Math.abs(c-h)<l:Math.abs(c/h)<1+l&&Math.abs(c/h)>1-l)||(d=f(f({},d),ut({sizeRestrictions:r,width:d.width,height:d.height,aspectRatio:{minimum:Q(m),maximum:Q(m)}})));var p=st(u=G(u,d.width*i.width/(u.width*m.width)),e({visibleArea:u,type:"resize"}));return 1!==p&&(u=G(u,p),d=G(d,p)),u=ot(u=q(u,k(U(d),U(u))),e({visibleArea:u,type:"move"})),{coordinates:d=ot(d,ct(Y(u),a)),visibleArea:u}}function gt(t){var e=t.event,i=t.getAreaRestrictions,n=t.boundaries,s=t.coordinates,o=t.visibleArea;t.aspectRatio,t.stencilSize,t.sizeRestrictions;var r=t.positionRestrictions;t.stencilReference;var a=f({},s),h=f({},o);if(s&&o&&"manipulateImage"!==e.type){var c={width:0,height:0};h.width,n.width,Q(n)>Q(a)?(c.height=.8*n.height,c.width=c.height*Q(a)):(c.width=.8*n.width,c.height=c.width*Q(a));var l=st(h=G(h,a.width*n.width/(h.width*c.width)),i({visibleArea:h,type:"resize"}));h=G(h,l),1!==l&&(c.height/=l,c.width/=l),h=ot(h=q(h,k(U(a),U(h))),i({visibleArea:h,type:"move"})),a=ot(a,ct(Y(h),r))}return{coordinates:a,visibleArea:h}}function vt(t){var e=t.event,i=t.coordinates,n=t.visibleArea,s=t.getAreaRestrictions,o=f({},n),r=f({},i);if("setCoordinates"===e.type){var a=Math.max(0,r.width-o.width),h=Math.max(0,r.height-o.height);a>h?o=G(o,Math.min(r.width/o.width,K(o,s({visibleArea:o,type:"resize"})))):h>a&&(o=G(o,Math.min(r.height/o.height,K(o,s({visibleArea:o,type:"resize"}))))),o=ot(o=q(o,Z(J(r,Y(o)))),s({visibleArea:o,type:"move"}))}return{visibleArea:o,coordinates:r}}function bt(t){var e=t.imageSize,i=t.visibleArea,n=t.aspectRatio,s=t.sizeRestrictions,o=i||e,r=Math.min(n.maximum||1/0,Math.max(n.minimum||0,Q(o))),a=o.width<o.height?{width:.8*o.width,height:.8*o.width/r}:{height:.8*o.height,width:.8*o.height*r};return ut(f(f({},a),{aspectRatio:n,sizeRestrictions:s}))}function wt(t){var e,i,n=t.imageSize,s=t.visibleArea,o=t.boundaries,r=t.aspectRatio,a=t.sizeRestrictions,h=t.stencilSize,c=s||n;return Q(c)>Q(o)?i=(e=h.height*c.height/o.height)*Q(h):e=(i=h.width*c.width/o.width)/Q(h),ut({width:i,height:e,aspectRatio:r,sizeRestrictions:a})}function yt(t,e){return ht(t,Y(e))}function zt(t){var e=t.event,i=t.coordinates,n=t.visibleArea,s=t.sizeRestrictions,o=t.getAreaRestrictions,r=t.positionRestrictions,a=t.adjustStencil,h=e.scale,c=e.move,l=f({},n),d=f({},i),u=1,m=1,p=h.factor&&Math.abs(h.factor-1)>.001;l=q(l,{left:c.left||0,top:c.top||0});var g={stencil:{minimum:Math.max(s.minWidth?s.minWidth/d.width:0,s.minHeight?s.minHeight/d.height:0),maximum:Math.min(s.maxWidth?s.maxWidth/d.width:1/0,s.maxHeight?s.maxHeight/d.height:1/0,K(d,r))},area:{maximum:K(l,o({visibleArea:l,type:"resize"}))}};h.factor&&p&&(h.factor<1?(m=Math.max(h.factor,g.stencil.minimum))>1&&(m=1):h.factor>1&&(m=Math.min(h.factor,Math.min(g.area.maximum,g.stencil.maximum)))<1&&(m=1)),m&&(l=G(l,m,h.center));var v=i.left-n.left,b=n.width+n.left-(i.width+i.left),w=i.top-n.top,y=n.height+n.top-(i.height+i.top);return l=ot(l=q(l,J(l,{left:void 0!==r.left?r.left-v*m:void 0,top:void 0!==r.top?r.top-w*m:void 0,bottom:void 0!==r.bottom?r.bottom+y*m:void 0,right:void 0!==r.right?r.right+b*m:void 0})),o({visibleArea:l,type:"move"})),d.width=d.width*m,d.height=d.height*m,d.left=l.left+v*m,d.top=l.top+w*m,d=ot(d,ct(Y(l),r)),h.factor&&p&&a&&(h.factor>1?u=Math.min(g.area.maximum,h.factor)/m:h.factor<1&&(u=Math.max(d.height/l.height,d.width/l.width,h.factor/m)),1!==u&&(l=q(l=ot(l=G(l,u,h.factor>1?h.center:U(d)),o({visibleArea:l,type:"move"})),Z(J(d,Y(l)))))),{coordinates:d,visibleArea:l}}function Rt(t){var e=t.aspectRatio,i=t.getAreaRestrictions,n=t.coordinates,s=t.visibleArea,o=t.sizeRestrictions,r=t.positionRestrictions,a=t.imageSize,h=t.previousImageSize,c=t.angle,l=f({},n),d=f({},s),u=nt(U(f({left:0,top:0},h)),c);return(l=f(f({},ut({sizeRestrictions:o,aspectRatio:e,width:l.width,height:l.height})),nt(U(l),c))).left-=u.left-a.width/2+l.width/2,l.top-=u.top-a.height/2+l.height/2,d=G(d,st(d,i({visibleArea:d,type:"resize"}))),{coordinates:l=ot(l,r),visibleArea:d=ot(d=q(d,k(U(l),U(n))),i({visibleArea:d,type:"move"}))}}function At(t){var e=t.flip,i=t.previousFlip,n=t.rotate;t.aspectRatio;var s=t.getAreaRestrictions,o=t.coordinates,r=t.visibleArea,a=t.imageSize,h=f({},o),c=f({},r),l=i.horizontal!==e.horizontal,d=i.vertical!==e.vertical;if(l||d){var u=nt({left:a.width/2,top:a.height/2},-n),m=nt(U(h),-n),p=nt({left:l?u.left-(m.left-u.left):m.left,top:d?u.top-(m.top-u.top):m.top},n);h=q(h,k(p,U(h))),m=nt(U(c),-n),c=ot(c=q(c,k(p=nt({left:l?u.left-(m.left-u.left):m.left,top:d?u.top-(m.top-u.top):m.top},n),U(c))),s({visibleArea:c,type:"move"}))}return{coordinates:h,visibleArea:c}}function St(t){var e=t.directions,i=t.coordinates,n=t.positionRestrictions,s=void 0===n?{}:n,o=t.sizeRestrictions,r=t.preserveRatio,a=t.compensate,h=f({},e),c=V(i,h).width,l=V(i,h).height;c<0&&(h.left<0&&h.right<0?(h.left=-(i.width-o.minWidth)/(h.left/h.right),h.right=-(i.width-o.minWidth)/(h.right/h.left)):h.left<0?h.left=-(i.width-o.minWidth):h.right<0&&(h.right=-(i.width-o.minWidth))),l<0&&(h.top<0&&h.bottom<0?(h.top=-(i.height-o.minHeight)/(h.top/h.bottom),h.bottom=-(i.height-o.minHeight)/(h.bottom/h.top)):h.top<0?h.top=-(i.height-o.minHeight):h.bottom<0&&(h.bottom=-(i.height-o.minHeight)));var d=N(V(i,h),s);a&&(d.left&&d.left>0&&0===d.right?(h.right+=d.left,h.left-=d.left):d.right&&d.right>0&&0===d.left&&(h.left+=d.right,h.right-=d.right),d.top&&d.top>0&&0===d.bottom?(h.bottom+=d.top,h.top-=d.top):d.bottom&&d.bottom>0&&0===d.top&&(h.top+=d.bottom,h.bottom-=d.bottom),d=N(V(i,h),s));var u={width:1/0,height:1/0,left:1/0,right:1/0,top:1/0,bottom:1/0};if(D.forEach((function(t){var e=d[t];e&&h[t]&&(u[t]=Math.max(0,1-e/h[t]))})),r){var m=Math.min.apply(null,D.map((function(t){return u[t]})));m!==1/0&&D.forEach((function(t){h[t]*=m}))}else D.forEach((function(t){u[t]!==1/0&&(h[t]*=u[t])}));if(c=V(i,h).width,l=V(i,h).height,h.right+h.left&&(c>o.maxWidth?u.width=(o.maxWidth-i.width)/(h.right+h.left):c<o.minWidth&&(u.width=(o.minWidth-i.width)/(h.right+h.left))),h.bottom+h.top&&(l>o.maxHeight?u.height=(o.maxHeight-i.height)/(h.bottom+h.top):l<o.minHeight&&(u.height=(o.minHeight-i.height)/(h.bottom+h.top))),r){var p=Math.min(u.width,u.height);p!==1/0&&D.forEach((function(t){h[t]*=p}))}else u.width!==1/0&&L.forEach((function(t){h[t]*=u.width})),u.height!==1/0&&I.forEach((function(t){h[t]*=u.height}));return h}function xt(t,e,i){return 0==e&&0==i?t/2:0==e?0:0==i?t:t*Math.abs(e/(e+i))}var Mt=d("vue-simple-handler"),Ct=d("vue-simple-handler-wrapper"),Et=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("HandlerWrapper",{class:t.classes.wrapper,attrs:{"vertical-position":t.verticalPosition,"horizontal-position":t.horizontalPosition,disabled:t.disabled},on:{drag:t.onDrag,"drag-end":t.onDragEnd,enter:t.onEnter,leave:t.onLeave}},[i("div",{class:t.classes.default})])},staticRenderFns:[]},undefined,{name:"SimpleHandler",components:{HandlerWrapper:H},props:{defaultClass:{type:String},hoverClass:{type:String},wrapperClass:{type:String},horizontalPosition:{type:String},verticalPosition:{type:String},disabled:{type:Boolean,default:!1}},data:function(){return{hover:!1}},computed:{classes:function(){var t,e=(n(t={},this.horizontalPosition,Boolean(this.horizontalPosition)),n(t,this.verticalPosition,Boolean(this.verticalPosition)),n(t,"".concat(this.horizontalPosition,"-").concat(this.verticalPosition),Boolean(this.verticalPosition&&this.horizontalPosition)),n(t,"hover",this.hover),t);return{default:l(Mt(e),this.defaultClass,this.hover&&this.hoverClass),wrapper:l(Ct(e),this.wrapperClass)}}},methods:{onDrag:function(t){this.$emit("drag",t)},onEnter:function(){this.hover=!0},onLeave:function(){this.hover=!1},onDragEnd:function(){this.$emit("drag-end")}}},undefined,false,undefined,!1,void 0,void 0,void 0),Wt=d("vue-simple-line"),Tt=d("vue-simple-line-wrapper"),Ot=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LineWrapper",{class:t.classes.wrapper,attrs:{position:t.position,disabled:t.disabled},on:{drag:t.onDrag,"drag-end":t.onDragEnd,enter:t.onEnter,leave:t.onLeave}},[i("div",{class:t.classes.root})])},staticRenderFns:[]},undefined,{name:"SimpleLine",components:{LineWrapper:P},props:{defaultClass:{type:String},hoverClass:{type:String},wrapperClass:{type:String},position:{type:String},disabled:{type:Boolean,default:!1}},data:function(){return{hover:!1}},computed:{classes:function(){return{root:l(Wt(n({},this.position,!0)),this.defaultClass,this.hover&&this.hoverClass),wrapper:l(Tt(n({},this.position,!0)),this.wrapperClass)}}},methods:{onDrag:function(t){this.$emit("drag",t)},onEnter:function(){this.hover=!0},onLeave:function(){this.hover=!1},onDragEnd:function(){this.$emit("drag-end")}}},undefined,false,undefined,!1,void 0,void 0,void 0),$t=d("vue-bounding-box"),Ht=["east","west",null],jt=["south","north",null],Pt=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"box",class:t.classes.root,style:t.style},[t._t("default"),t._v(" "),i("div",t._l(t.lineNodes,(function(e){return i(e.component,{key:e.name,tag:"component",attrs:{"default-class":e.class,"hover-class":e.hoverClass,"wrapper-class":e.wrapperClass,position:e.name,disabled:e.disabled},on:{drag:function(i){return t.onHandlerDrag(i,e.horizontalDirection,e.verticalDirection)},"drag-end":function(e){return t.onEnd()}}})})),1),t._v(" "),t._l(t.handlerNodes,(function(e){return i("div",{key:e.name,class:e.wrapperClass,style:e.wrapperStyle},[i(e.component,{tag:"component",attrs:{"default-class":e.class,"hover-class":e.hoverClass,"wrapper-class":e.wrapperClass,"horizontal-position":e.horizontalDirection,"vertical-position":e.verticalDirection,disabled:e.disabled},on:{drag:function(i){return t.onHandlerDrag(i,e.horizontalDirection,e.verticalDirection)},"drag-end":function(e){return t.onEnd()}}})],1)}))],2)},staticRenderFns:[]},undefined,{name:"BoundingBox",props:{width:{type:Number},height:{type:Number},transitions:{type:Object},handlers:{type:Object,default:function(){return{eastNorth:!0,north:!0,westNorth:!0,west:!0,westSouth:!0,south:!0,eastSouth:!0,east:!0}}},handlersComponent:{type:[Object,String],default:function(){return Et}},handlersClasses:{type:Object,default:function(){return{}}},handlersWrappersClasses:{type:Object,default:function(){return{}}},lines:{type:Object,default:function(){return{west:!0,north:!0,east:!0,south:!0}}},linesComponent:{type:[Object,String],default:function(){return Ot}},linesClasses:{type:Object,default:function(){return{}}},linesWrappersClasses:{type:Object,default:function(){return{}}},resizable:{type:Boolean,default:!0}},data:function(){var t=[];return Ht.forEach((function(e){jt.forEach((function(i){if(e!==i){var n=p(e,i),s=n.name,o=n.classname;t.push({name:s,classname:o,verticalDirection:i,horizontalDirection:e})}}))})),{points:t}},computed:{style:function(){var t={};return this.width&&this.height&&(t.width="".concat(this.width,"px"),t.height="".concat(this.height,"px"),this.transitions&&this.transitions.enabled&&(t.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction))),t},classes:function(){var t=this.handlersClasses,e=this.handlersWrappersClasses,i=this.linesClasses,n=this.linesWrappersClasses;return{root:$t(),handlers:t,handlersWrappers:e,lines:i,linesWrappers:n}},lineNodes:function(){var t=this,e=[];return this.points.forEach((function(i){i.horizontalDirection&&i.verticalDirection||!t.lines[i.name]||e.push({name:i.name,component:t.linesComponent,class:l(t.classes.lines.default,t.classes.lines[i.name],!t.resizable&&t.classes.lines.disabled),wrapperClass:l(t.classes.linesWrappers.default,t.classes.linesWrappers[i.name],!t.resizable&&t.classes.linesWrappers.disabled),hoverClass:t.classes.lines.hover,verticalDirection:i.verticalDirection,horizontalDirection:i.horizontalDirection,disabled:!t.resizable})})),e},handlerNodes:function(){var t=this,e=[],i=this.width,s=this.height;return this.points.forEach((function(o){if(t.handlers[o.name]){var r={name:o.name,component:t.handlersComponent,class:l(t.classes.handlers.default,t.classes.handlers[o.name]),wrapperClass:l(t.classes.handlersWrappers.default,t.classes.handlersWrappers[o.name]),hoverClass:t.classes.handlers.hover,verticalDirection:o.verticalDirection,horizontalDirection:o.horizontalDirection,disabled:!t.resizable};if(i&&s){var a=o.horizontalDirection,h=o.verticalDirection,c="east"===a?i:"west"===a?0:i/2,d="south"===h?s:"north"===h?0:s/2;r.wrapperClass=$t("handler"),r.wrapperStyle={transform:"translate(".concat(c,"px, ").concat(d,"px)")},t.transitions&&t.transitions.enabled&&(r.wrapperStyle.transition="".concat(t.transitions.time,"ms ").concat(t.transitions.timingFunction))}else r.wrapperClass=$t("handler",n({},o.classname,!0));e.push(r)}})),e}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){this.touches=[]},methods:{onEnd:function(){this.$emit("resize-end")},onHandlerDrag:function(t,e,i){var n,s=t.shift(),o=s.left,r=s.top,a={left:0,right:0,top:0,bottom:0};"west"===e?a.left-=o:"east"===e&&(a.right+=o),"north"===i?a.top-=r:"south"===i&&(a.bottom+=r),!i&&e?n="width":i&&!e&&(n="height"),this.resizable&&this.$emit("resize",new C(a,{allowedDirections:{left:"west"===e||!e,right:"east"===e||!e,bottom:"south"===i||!i,top:"north"===i||!i},preserveAspectRatio:t.nativeEvent&&t.nativeEvent.shiftKey,respectDirection:n}))}}},undefined,false,undefined,!1,void 0,void 0,void 0),Dt=d("vue-draggable-area"),Lt=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"container",on:{touchstart:t.onTouchStart,mousedown:t.onMouseDown}},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"DraggableArea",props:{movable:{type:Boolean,default:!0},activationDistance:{type:Number,default:20}},computed:{classnames:function(){return{default:Dt()}}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){this.touches=[],this.touchStarted=!1},methods:{onTouchStart:function(t){if(t.cancelable){var e=this.movable&&1===t.touches.length;e&&(this.touches=o(t.touches)),(this.touchStarted||e)&&(t.preventDefault(),t.stopPropagation())}},onTouchEnd:function(){this.touchStarted=!1,this.processEnd()},onTouchMove:function(t){this.touches.length>=1&&(this.touchStarted?(this.processMove(t,t.touches),t.preventDefault(),t.stopPropagation()):x({x:this.touches[0].clientX,y:this.touches[0].clientY},{x:t.touches[0].clientX,y:t.touches[0].clientY})>this.activationDistance&&(this.initAnchor({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}),this.touchStarted=!0))},onMouseDown:function(t){if(this.movable&&0===t.button){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],this.initAnchor(e),t.stopPropagation()}},onMouseMove:function(t){this.touches.length&&(this.processMove(t,[{fake:!0,clientX:t.clientX,clientY:t.clientY}]),t.preventDefault&&t.cancelable&&t.preventDefault(),t.stopPropagation())},onMouseUp:function(){this.processEnd()},initAnchor:function(t){var e=this.$refs.container.getBoundingClientRect(),i=e.left,n=e.top;this.anchor={x:t.clientX-i,y:t.clientY-n}},processMove:function(t,e){var i=o(e);if(this.touches.length){var n=this.$refs.container.getBoundingClientRect(),s=n.left,r=n.top;1===this.touches.length&&1===i.length&&this.$emit("move",new E({left:i[0].clientX-(s+this.anchor.x),top:i[0].clientY-(r+this.anchor.y)}))}},processEnd:function(){this.touches.length&&this.$emit("move-end"),this.touches=[]}}},undefined,false,undefined,!1,void 0,void 0,void 0);function It(t){var e,i;return{rotate:t.rotate||0,flip:{horizontal:(null===(e=null==t?void 0:t.flip)||void 0===e?void 0:e.horizontal)||!1,vertical:(null===(i=null==t?void 0:t.flip)||void 0===i?void 0:i.vertical)||!1}}}function Bt(t){return new Promise((function(e,i){try{if(t)if(/^data:/i.test(t))e(function(t){t=t.replace(/^data:([^;]+);base64,/gim,"");for(var e=atob(t),i=e.length,n=new ArrayBuffer(i),s=new Uint8Array(n),o=0;o<i;o++)s[o]=e.charCodeAt(o);return n}(t));else if(/^blob:/i.test(t)){var n=new FileReader;n.onload=function(t){e(t.target.result)},o=t,r=function(t){n.readAsArrayBuffer(t)},(a=new XMLHttpRequest).open("GET",o,!0),a.responseType="blob",a.onload=function(){200!=this.status&&0!==this.status||r(this.response)},a.send()}else{var s=new XMLHttpRequest;s.onreadystatechange=function(){4===s.readyState&&(200===s.status||0===s.status?e(s.response):i("Warning: could not load an image to parse its orientation"),s=null)},s.onprogress=function(){"image/jpeg"!==s.getResponseHeader("content-type")&&s.abort()},s.withCredentials=!1,s.open("GET",t,!0),s.responseType="arraybuffer",s.send(null)}else i("Error: the image is empty")}catch(t){i(t)}var o,r,a}))}function _t(t){var e=t.rotate,i=t.flip,n=t.scaleX,s=t.scaleY,o="";return o+=" rotate("+e+"deg) ",o+=" scaleX("+n*(i.horizontal?-1:1)+") ",o+=" scaleY("+s*(i.vertical?-1:1)+") "}function Ft(t){try{var e,i=new DataView(t),n=void 0,s=void 0,o=void 0,r=void 0;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var a=i.byteLength,h=2;h+1<a;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){o=h;break}h++}if(o&&(n=o+10,"Exif"===function(t,e,i){var n,s="";for(n=e,i+=e;n<i;n++)s+=String.fromCharCode(t.getUint8(n));return s}(i,o+4,4))){var c=i.getUint16(n);if(((s=18761===c)||19789===c)&&42===i.getUint16(n+2,s)){var l=i.getUint32(n+4,s);l>=8&&(r=n+l)}}if(r)for(var d=i.getUint16(r,s),u=0;u<d;u++){h=r+12*u+2;if(274===i.getUint16(h,s)){h+=8,e=i.getUint16(h,s),i.setUint16(h,1,s);break}}return e}catch(t){return null}}var Xt=d("vue-preview-result"),Yt=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes.root},[i("div",{ref:"wrapper",class:t.classes.wrapper,style:t.wrapperStyle},[i("img",{ref:"image",class:t.classes.image,style:t.imageStyle,attrs:{src:t.image.src}})])])},staticRenderFns:[]},undefined,{name:"PreviewResult",props:{image:{type:Object},transitions:{type:Object},stencilCoordinates:{type:Object,default:function(){return{width:0,height:0,left:0,top:0}}},imageClass:{type:String}},computed:{classes:function(){return{root:Xt(),wrapper:Xt("wrapper"),imageWrapper:Xt("image-wrapper"),image:l(Xt("image"),this.imageClass)}},wrapperStyle:function(){var t={width:"".concat(this.stencilCoordinates.width,"px"),height:"".concat(this.stencilCoordinates.height,"px"),left:"calc(50% - ".concat(this.stencilCoordinates.width/2,"px)"),top:"calc(50% - ".concat(this.stencilCoordinates.height/2,"px)")};return this.transitions&&this.transitions.enabled&&(t.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),t},imageStyle:function(){var t=this.image.transforms,e=it({width:this.image.width,height:this.image.height},t.rotate),i={width:"".concat(this.image.width,"px"),height:"".concat(this.image.height,"px"),left:"0px",top:"0px"},n={left:(this.image.width-e.width)*t.scaleX/2,top:(this.image.height-e.height)*t.scaleY/2},s={left:(1-t.scaleX)*this.image.width/2,top:(1-t.scaleY)*this.image.height/2};return i.transform="translate(\n\t\t\t\t".concat(-this.stencilCoordinates.left-t.translateX-n.left-s.left,"px,").concat(-this.stencilCoordinates.top-t.translateY-n.top-s.top,"px) ")+_t(t),this.transitions&&this.transitions.enabled&&(i.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),i}}},undefined,false,undefined,!1,void 0,void 0,void 0);function kt(t,e){var i=e.getBoundingClientRect(),n=i.left,s=i.top,o={left:0,top:0},r=0;return t.forEach((function(e){o.left+=(e.clientX-n)/t.length,o.top+=(e.clientY-s)/t.length})),t.forEach((function(t){r+=x({x:o.left,y:o.top},{x:t.clientX-n,y:t.clientY-s})})),{centerMass:o,spread:r,count:t.length}}var Ut=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"container",on:{touchstart:t.onTouchStart,mousedown:t.onMouseDown,wheel:t.onWheel}},[t._t("default")],2)},staticRenderFns:[]},undefined,{props:{touchMove:{type:Boolean,required:!0},mouseMove:{type:Boolean,required:!0},touchResize:{type:Boolean,required:!0},wheelResize:{type:[Boolean,Object],required:!0},eventsFilter:{type:Function,required:!1}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},created:function(){this.transforming=!1,this.debouncedProcessEnd=m(this.processEnd),this.touches=[]},methods:{processMove:function(t,e){if(this.touches.length){if(1===this.touches.length&&1===e.length)this.$emit("move",new M({left:this.touches[0].clientX-e[0].clientX,top:this.touches[0].clientY-e[0].clientY}));else if(this.touches.length>1&&this.touchResize){var i=kt(e,this.$refs.container),n=this.oldGeometricProperties;n.count===i.count&&n.count>1&&this.$emit("resize",new M({left:n.centerMass.left-i.centerMass.left,top:n.centerMass.top-i.centerMass.top},{factor:n.spread/i.spread,center:i.centerMass})),this.oldGeometricProperties=i}this.touches=e}},processEnd:function(){this.transforming&&(this.transforming=!1,this.$emit("transform-end"))},processStart:function(){this.transforming=!0,this.debouncedProcessEnd.clear()},processEvent:function(t){return this.eventsFilter?!1!==this.eventsFilter(t,this.transforming):(t.preventDefault(),t.stopPropagation(),!0)},onTouchStart:function(t){if(t.cancelable&&(this.touchMove||this.touchResize&&t.touches.length>1)&&this.processEvent(t)){var e=this.$refs.container,i=e.getBoundingClientRect(),n=i.left,s=i.top,r=i.bottom,a=i.right;this.touches=o(t.touches).filter((function(t){return t.clientX>n&&t.clientX<a&&t.clientY>s&&t.clientY<r})),this.oldGeometricProperties=kt(this.touches,e)}},onTouchEnd:function(t){0===t.touches.length&&(this.touches=[],this.processEnd())},onTouchMove:function(t){var e=this;if(this.touches.length){var i=o(t.touches).filter((function(t){return!t.identifier||e.touches.find((function(e){return e.identifier===t.identifier}))}));this.processEvent(t)&&(this.processMove(t,i),this.processStart())}},onMouseDown:function(t){if(this.mouseMove&&"buttons"in t&&1===t.buttons&&this.processEvent(t)){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],this.processStart()}},onMouseMove:function(t){this.touches.length&&this.processEvent(t)&&this.processMove(t,[{clientX:t.clientX,clientY:t.clientY}])},onMouseUp:function(){this.touches=[],this.processEnd()},onWheel:function(t){if(this.wheelResize&&this.processEvent(t)){var e=this.$refs.container.getBoundingClientRect(),i=e.left,n=e.top,s=1+this.wheelResize.ratio*(r=t.deltaY||t.detail||t.wheelDelta,0===(a=+r)||S(a)?a:a>0?1:-1),o={left:t.clientX-i,top:t.clientY-n};this.$emit("resize",new M({},{factor:s,center:o})),this.touches.length||this.debouncedProcessEnd()}var r,a}}},undefined,false,undefined,!1,void 0,void 0,void 0),Nt=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("transformable-image",{attrs:{"touch-move":t.touchMove,"touch-resize":t.touchResize,"mouse-move":t.mouseMove,"wheel-resize":t.wheelResize},on:{move:function(e){return t.$emit("move",e)},resize:function(e){return t.$emit("resize",e)}}},[t._t("default")],2)},staticRenderFns:[]},undefined,{components:{TransformableImage:Ut},props:{touchMove:{type:Boolean,required:!0},mouseMove:{type:Boolean,required:!0},touchResize:{type:Boolean,required:!0},wheelResize:{type:[Boolean,Object],required:!0}}},undefined,false,undefined,!1,void 0,void 0,void 0),Vt=d("vue-preview"),Zt=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"root",class:t.classes.root,style:t.style},[i("div",{ref:"wrapper",class:t.classes.wrapper,style:t.wrapperStyle},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.image&&t.image.src,expression:"image && image.src"}],ref:"image",class:t.classes.image,style:t.imageStyle,attrs:{src:t.image&&t.image.src}})])])},staticRenderFns:[]},undefined,{props:{coordinates:{type:Object},transitions:{type:Object},image:{type:Object,default:function(){return{}}},imageClass:{type:String},width:{type:Number},height:{type:Number},fill:{type:Boolean}},data:function(){return{calculatedImageSize:{width:0,height:0},calculatedSize:{width:0,height:0}}},computed:{classes:function(){return{root:Vt({fill:this.fill}),wrapper:Vt("wrapper"),imageWrapper:Vt("image-wrapper"),image:l(Vt("image"),this.imageClass)}},style:function(){if(this.fill)return{};var t={};return this.width&&(t.width="".concat(this.size.width,"px")),this.height&&(t.height="".concat(this.size.height,"px")),this.transitions&&this.transitions.enabled&&(t.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),t},wrapperStyle:function(){var t={width:"".concat(this.size.width,"px"),height:"".concat(this.size.height,"px"),left:"calc(50% - ".concat(this.size.width/2,"px)"),top:"calc(50% - ".concat(this.size.height/2,"px)")};return this.transitions&&this.transitions.enabled&&(t.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),t},imageStyle:function(){if(this.coordinates&&this.image){var t=this.coordinates.width/this.size.width,e=i(i({rotate:0,flip:{horizontal:!1,vertical:!1}},this.image.transforms),{},{scaleX:1/t,scaleY:1/t}),n=this.imageSize.width,s=this.imageSize.height,o=it({width:n,height:s},e.rotate),r={width:"".concat(n,"px"),height:"".concat(s,"px"),left:"0px",top:"0px"},a={rotate:{left:(n-o.width)*e.scaleX/2,top:(s-o.height)*e.scaleY/2},scale:{left:(1-e.scaleX)*n/2,top:(1-e.scaleY)*s/2}};return r.transform="translate(\n\t\t\t\t".concat(-this.coordinates.left/t-a.rotate.left-a.scale.left,"px,").concat(-this.coordinates.top/t-a.rotate.top-a.scale.top,"px) ")+_t(e),this.transitions&&this.transitions.enabled&&(r.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),r}return{}},size:function(){return{width:this.width||this.calculatedSize.width,height:this.height||this.calculatedSize.height}},imageSize:function(){return{width:this.image.width||this.calculatedImageSize.width,height:this.image.height||this.calculatedImageSize.height}}},watch:{image:function(t){(t.width||t.height)&&this.onChangeImage()}},mounted:function(){var t=this;this.onChangeImage(),this.$refs.image.addEventListener("load",(function(){t.refreshImage()})),window.addEventListener("resize",this.refresh),window.addEventListener("orientationchange",this.refresh)},destroyed:function(){window.removeEventListener("resize",this.refresh),window.removeEventListener("orientationchange",this.refresh)},methods:{refreshImage:function(){var t=this.$refs.image;this.calculatedImageSize.height=t.naturalHeight,this.calculatedImageSize.width=t.naturalWidth},refresh:function(){var t=this.$refs.root;this.width||(this.calculatedSize.width=t.clientWidth),this.height||(this.calculatedSize.height=t.clientHeight)},onChangeImage:function(){var t=this.$refs.image;t&&t.complete&&this.refreshImage(),this.refresh()}}},undefined,false,undefined,!1,void 0,void 0,void 0),qt=T({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("preview",t._b({attrs:{fill:!0}},"preview",t.$attrs,!1))},staticRenderFns:[]},undefined,{components:{Preview:Zt},inheritAttrs:!1},undefined,false,undefined,!1,void 0,void 0,void 0),Gt=d("vue-rectangle-stencil"),Qt=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes.stencil,style:t.style},[i("bounding-box",{class:t.classes.boundingBox,attrs:{width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,transitions:t.transitions,handlers:t.handlers,"handlers-component":t.handlersComponent,"handlers-classes":t.handlersClasses,"handlers-wrappers-classes":t.handlersWrappersClasses,lines:t.lines,"lines-component":t.linesComponent,"lines-classes":t.linesClasses,"lines-wrappers-classes":t.linesWrappersClasses,resizable:t.resizable},on:{resize:t.onResize,"resize-end":t.onResizeEnd}},[i("draggable-area",{attrs:{movable:t.movable},on:{move:t.onMove,"move-end":t.onMoveEnd}},[i("stencil-preview",{class:t.classes.preview,attrs:{image:t.image,coordinates:t.coordinates,width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,transitions:t.transitions}})],1)],1)],1)},staticRenderFns:[]},undefined,{name:"RectangleStencil",components:{StencilPreview:qt,BoundingBox:Pt,DraggableArea:Lt},props:{image:{type:Object},coordinates:{type:Object},stencilCoordinates:{type:Object},handlers:{type:Object},handlersComponent:{type:[Object,String],default:function(){return Et}},lines:{type:Object},linesComponent:{type:[Object,String],default:function(){return Ot}},aspectRatio:{type:[Number,String]},minAspectRatio:{type:[Number,String]},maxAspectRatio:{type:[Number,String]},movable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},transitions:{type:Object},movingClass:{type:String},resizingClass:{type:String},previewClass:{type:String},boundingBoxClass:{type:String},linesClasses:{type:Object,default:function(){return{}}},linesWrappersClasses:{type:Object,default:function(){return{}}},handlersClasses:{type:Object,default:function(){return{}}},handlersWrappersClasses:{type:Object,default:function(){return{}}}},data:function(){return{moving:!1,resizing:!1}},computed:{classes:function(){return{stencil:l(Gt({movable:this.movable,moving:this.moving,resizing:this.resizing}),this.moving&&this.movingClass,this.resizing&&this.resizingClass),preview:l(Gt("preview"),this.previewClass),boundingBox:l(Gt("bounding-box"),this.boundingBoxClass)}},style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,n=t.left,s=t.top,o={width:"".concat(i,"px"),height:"".concat(e,"px"),transform:"translate(".concat(n,"px, ").concat(s,"px)")};return this.transitions&&this.transitions.enabled&&(o.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),o}},methods:{onMove:function(t){this.$emit("move",t),this.moving=!0},onMoveEnd:function(){this.$emit("move-end"),this.moving=!1},onResize:function(t){this.$emit("resize",t),this.resizing=!0},onResizeEnd:function(){this.$emit("resize-end"),this.resizing=!1},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},undefined,false,undefined,!1,void 0,void 0,void 0),Kt=d("vue-circle-stencil"),Jt=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes.stencil,style:t.style},[i("bounding-box",{class:t.classes.boundingBox,attrs:{width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,transitions:t.transitions,handlers:t.handlers,"handlers-component":t.handlersComponent,"handlers-classes":t.handlersClasses,"handlers-wrappers-classes":t.handlersWrappersClasses,lines:t.lines,"lines-component":t.linesComponent,"lines-classes":t.linesClasses,"lines-wrappers-classes":t.linesWrappersClasses,resizable:t.resizable},on:{resize:t.onResize,"resize-end":t.onResizeEnd}},[i("draggable-area",{attrs:{movable:t.movable},on:{move:t.onMove,"move-end":t.onMoveEnd}},[i("stencil-preview",{class:t.classes.preview,attrs:{image:t.image,coordinates:t.coordinates,width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,transitions:t.transitions}})],1)],1)],1)},staticRenderFns:[]},undefined,{components:{StencilPreview:qt,BoundingBox:Pt,DraggableArea:Lt},props:{image:{type:Object},coordinates:{type:Object},stencilCoordinates:{type:Object},handlers:{type:Object,default:function(){return{eastNorth:!0,westNorth:!0,westSouth:!0,eastSouth:!0}}},handlersComponent:{type:[Object,String],default:function(){return Et}},handlersClasses:{type:Object,default:function(){return{}}},handlersWrappersClasses:{type:Object,default:function(){return{}}},lines:{type:Object},linesComponent:{type:[Object,String],default:function(){return Ot}},linesClasses:{type:Object,default:function(){return{}}},linesWrappersClasses:{type:Object,default:function(){return{}}},movable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},transitions:{type:Object},movingClass:{type:String},resizingClass:{type:String},previewClass:{type:String},boundingBoxClass:{type:String}},data:function(){return{moving:!1,resizing:!1}},computed:{classes:function(){return{stencil:l(Kt({movable:this.movable,moving:this.moving,resizing:this.resizing}),this.moving&&this.movingClass,this.resizing&&this.resizingClass),preview:l(Kt("preview"),this.previewClass),boundingBox:l(Kt("bounding-box"),this.boundingBoxClass)}},style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,n=t.left,s=t.top,o={width:"".concat(i,"px"),height:"".concat(e,"px"),transform:"translate(".concat(n,"px, ").concat(s,"px)")};return this.transitions&&this.transitions.enabled&&(o.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),o}},methods:{onMove:function(t){this.$emit("move",t),this.moving=!0},onMoveEnd:function(){this.$emit("move-end"),this.moving=!1},onResize:function(t){this.$emit("resize",t),this.resizing=!0},onResizeEnd:function(){this.$emit("resize-end"),this.resizing=!1},aspectRatios:function(){return{minimum:1,maximum:1}}}},undefined,false,undefined,!1,void 0,void 0,void 0);var te=["transitions"],ee=d("vue-advanced-cropper"),ie={name:"Cropper",components:{BackgroundWrapper:Nt},props:{src:{type:String,default:null},stencilComponent:{type:[Object,String],default:function(){return Qt}},backgroundWrapperComponent:{type:[Object,String],default:function(){return Nt}},stencilProps:{type:Object,default:function(){return{}}},autoZoom:{type:Boolean,default:!1},imageClass:{type:String},boundariesClass:{type:String},backgroundClass:{type:String},foregroundClass:{type:String},minWidth:{type:[Number,String]},minHeight:{type:[Number,String]},maxWidth:{type:[Number,String]},maxHeight:{type:[Number,String]},debounce:{type:[Boolean,Number],default:500},transitions:{type:Boolean,default:!0},checkOrientation:{type:Boolean,default:!0},canvas:{type:[Object,Boolean],default:!0},crossOrigin:{type:[Boolean,String],default:void 0},transitionTime:{type:Number,default:300},imageRestriction:{type:String,default:"fit-area",validator:function(t){return-1!==_.indexOf(t)}},roundResult:{type:Boolean,default:!0},defaultSize:{type:[Function,Object]},defaultPosition:{type:[Function,Object],default:function(t){var e=t.imageSize,i=t.visibleArea,n=t.coordinates,s=i||e;return{left:(i?i.left:0)+s.width/2-n.width/2,top:(i?i.top:0)+s.height/2-n.height/2}}},defaultVisibleArea:{type:[Function,Object],default:function(t){var e=t.getAreaRestrictions,i=t.coordinates,n=t.imageSize,s=Q(t.boundaries);if(i){var o={height:Math.max(i.height,n.height),width:Math.max(i.width,n.width)},r=et({width:Q(o)>s?o.width:o.height*s,height:Q(o)>s?o.width/s:o.height},rt(e())),a={left:i.left+i.width/2-r.width/2,top:i.top+i.height/2-r.height/2,width:r.width,height:r.height},h=N(i,Y(f({left:0,top:0},n))),c={};return!h.left&&!h.right&&a.width<=n.width&&(c.left=0,c.right=n.width),!h.top&&!h.bottom&&a.height<=n.height&&(c.top=0,c.bottom=n.height),ot(a,c)}var l=Q(n);return r={height:l>s?n.height:n.width/s,width:l>s?n.height*s:n.width},{left:n.width/2-r.width/2,top:n.height/2-r.height/2,width:r.width,height:r.height}}},defaultTransforms:{type:[Function,Object]},defaultBoundaries:{type:[Function,String],validator:function(t){return!("string"==typeof t&&"fill"!==t&&"fit"!==t)}},priority:{type:String,default:"coordinates"},stencilSize:{type:[Object,Function]},resizeImage:{type:[Boolean,Object],default:!0},moveImage:{type:[Boolean,Object],default:!0},autoZoomAlgorithm:{type:Function},resizeAlgorithm:{type:Function,default:function(t){var e=t.event,i=t.coordinates,n=t.aspectRatio,s=t.positionRestrictions,o=t.sizeRestrictions,r=f(f({},i),{right:i.left+i.width,bottom:i.top+i.height}),a=e.params||{},h=f({},e.directions),c=a.allowedDirections||{left:!0,right:!0,bottom:!0,top:!0};o.widthFrozen&&(h.left=0,h.right=0),o.heightFrozen&&(h.top=0,h.bottom=0),D.forEach((function(t){c[t]||(h[t]=0)}));var l=V(r,h=St({coordinates:r,directions:h,sizeRestrictions:o,positionRestrictions:s})).width,d=V(r,h).height,u=a.preserveRatio?Q(r):tt(l/d,n);if(u){var m=a.respectDirection;if(m||(m=r.width>=r.height||1===u?"width":"height"),"width"===m){var p=l/u-r.height;if(c.top&&c.bottom){var g=h.top,v=h.bottom;h.bottom=xt(p,v,g),h.top=xt(p,g,v)}else c.bottom?h.bottom=p:c.top?h.top=p:c.right?h.right=0:c.left&&(h.left=0)}else if("height"===m){var b=r.width-d*u;if(c.left&&c.right){var w=h.left,y=h.right;h.left=-xt(b,w,y),h.right=-xt(b,y,w)}else c.left?h.left=-b:c.right?h.right=-b:c.top?h.top=0:c.bottom&&(h.bottom=0)}h=St({directions:h,coordinates:r,sizeRestrictions:o,positionRestrictions:s,preserveRatio:!0,compensate:a.compensate})}return l=V(r,h).width,d=V(r,h).height,(u=a.preserveRatio?Q(r):tt(l/d,n))&&Math.abs(u-l/d)>.001&&D.forEach((function(t){c[t]||(h[t]=0)})),mt({event:new E({left:-h.left,top:-h.top}),coordinates:{width:i.width+h.right+h.left,height:i.height+h.top+h.bottom,left:i.left,top:i.top},positionRestrictions:s})}},moveAlgorithm:{type:Function,default:mt},initStretcher:{type:Function,default:function(t){var e=t.stretcher,i=t.imageSize,n=Q(i);e.style.width=i.width+"px",e.style.height=e.clientWidth/n+"px",e.style.width=e.clientWidth+"px"}},fitCoordinates:{type:Function,default:function(t){var e=t.visibleArea,i=t.coordinates,n=t.aspectRatio,s=t.sizeRestrictions,o=t.positionRestrictions,r=f(f({},i),ut({width:i.width,height:i.height,aspectRatio:n,sizeRestrictions:{maxWidth:e.width,maxHeight:e.height,minHeight:Math.min(e.height,s.minHeight),minWidth:Math.min(e.width,s.minWidth)}}));return r=ot(r=q(r,k(U(i),U(r))),ct(Y(e),o))}},fitVisibleArea:{type:Function,default:function(t){var e=t.visibleArea,i=t.boundaries,n=t.getAreaRestrictions,s=t.coordinates,o=f({},e);o.height=o.width/Q(i),o.top+=(e.height-o.height)/2,(s.height-o.height>0||s.width-o.width>0)&&(o=G(o,Math.max(s.height/o.height,s.width/o.width)));var r=Z(J(s,Y(o=G(o,st(o,n({visibleArea:o,type:"resize"}))))));return o.width<s.width&&(r.left=0),o.height<s.height&&(r.top=0),o=ot(o=q(o,r),n({visibleArea:o,type:"move"}))}},areaRestrictionsAlgorithm:{type:Function,default:function(t){var e=t.visibleArea,i=t.boundaries,n=t.imageSize,s=t.imageRestriction,o=t.type,r={};return"fill-area"===s?r={left:0,top:0,right:n.width,bottom:n.height}:"fit-area"===s&&(Q(i)>Q(n)?(r={top:0,bottom:n.height},e&&"move"===o&&(e.width>n.width?(r.left=-(e.width-n.width)/2,r.right=n.width-r.left):(r.left=0,r.right=n.width))):(r={left:0,right:n.width},e&&"move"===o&&(e.height>n.height?(r.top=-(e.height-n.height)/2,r.bottom=n.height-r.top):(r.top=0,r.bottom=n.height)))),r}},sizeRestrictionsAlgorithm:{type:Function,default:function(t){return{minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight}}},positionRestrictionsAlgorithm:{type:Function,default:function(t){var e=t.imageSize,i={};return"none"!==t.imageRestriction&&(i={left:0,top:0,right:e.width,bottom:e.height}),i}}},data:function(){return{transitionsActive:!1,imageLoaded:!1,imageAttributes:{width:null,height:null,crossOrigin:!1,src:null},defaultImageTransforms:{rotate:0,flip:{horizontal:!1,vertical:!1}},appliedImageTransforms:{rotate:0,flip:{horizontal:!1,vertical:!1}},boundaries:{width:0,height:0},visibleArea:null,coordinates:i({},F)}},computed:{image:function(){return{src:this.imageAttributes.src,width:this.imageAttributes.width,height:this.imageAttributes.height,transforms:this.imageTransforms}},imageTransforms:function(){return{rotate:this.appliedImageTransforms.rotate,flip:{horizontal:this.appliedImageTransforms.flip.horizontal,vertical:this.appliedImageTransforms.flip.vertical},translateX:this.visibleArea?this.visibleArea.left/this.coefficient:0,translateY:this.visibleArea?this.visibleArea.top/this.coefficient:0,scaleX:1/this.coefficient,scaleY:1/this.coefficient}},imageSize:function(){var t=function(t){return t*Math.PI/180}(this.imageTransforms.rotate);return{width:Math.abs(this.imageAttributes.width*Math.cos(t))+Math.abs(this.imageAttributes.height*Math.sin(t)),height:Math.abs(this.imageAttributes.width*Math.sin(t))+Math.abs(this.imageAttributes.height*Math.cos(t))}},initialized:function(){return Boolean(this.visibleArea&&this.imageLoaded)},settings:function(){var t=z(this.resizeImage,{touch:!0,wheel:{ratio:.1},adjustStencil:!0},{touch:!1,wheel:!1,adjustStencil:!1});return{moveImage:z(this.moveImage,{touch:!0,mouse:!0},{touch:!1,mouse:!1}),resizeImage:t}},coefficient:function(){return this.visibleArea?this.visibleArea.width/this.boundaries.width:0},areaRestrictions:function(){return this.imageLoaded?this.areaRestrictionsAlgorithm({imageSize:this.imageSize,imageRestriction:this.imageRestriction,boundaries:this.boundaries}):{}},transitionsOptions:function(){return{enabled:this.transitionsActive,timingFunction:"ease-in-out",time:350}},sizeRestrictions:function(){if(this.boundaries.width&&this.boundaries.height&&this.imageSize.width&&this.imageSize.height){var t=this.sizeRestrictionsAlgorithm({imageSize:this.imageSize,minWidth:w(this.minWidth)?0:R(this.minWidth),minHeight:w(this.minHeight)?0:R(this.minHeight),maxWidth:w(this.maxWidth)?1/0:R(this.maxWidth),maxHeight:w(this.maxHeight)?1/0:R(this.maxHeight)});if(t=function(t){var e=t.areaRestrictions,i=t.sizeRestrictions;t.imageSize;var n=t.boundaries,s=t.positionRestrictions;t.imageRestriction;var o=f(f({},i),{minWidth:void 0!==i.minWidth?i.minWidth:0,minHeight:void 0!==i.minHeight?i.minHeight:0,maxWidth:void 0!==i.maxWidth?i.maxWidth:1/0,maxHeight:void 0!==i.maxHeight?i.maxHeight:1/0});void 0!==s.left&&void 0!==s.right&&(o.maxWidth=Math.min(o.maxWidth,s.right-s.left)),void 0!==s.bottom&&void 0!==s.top&&(o.maxHeight=Math.min(o.maxHeight,s.bottom-s.top));var r=rt(e),a=et(n,r);return r.width<1/0&&(!o.maxWidth||o.maxWidth>a.width)&&(o.maxWidth=Math.min(o.maxWidth,a.width)),r.height<1/0&&(!o.maxHeight||o.maxHeight>a.height)&&(o.maxHeight=Math.min(o.maxHeight,a.height)),o.minWidth>o.maxWidth&&(o.minWidth=o.maxWidth,o.widthFrozen=!0),o.minHeight>o.maxHeight&&(o.minHeight=o.maxHeight,o.heightFrozen=!0),o}({sizeRestrictions:t,areaRestrictions:this.getAreaRestrictions({visibleArea:this.visibleArea,type:"resize"}),imageSize:this.imageSize,boundaries:this.boundaries,positionRestrictions:this.positionRestrictions,imageRestriction:this.imageRestriction,visibleArea:this.visibleArea,stencilSize:this.getStencilSize()}),this.visibleArea&&this.stencilSize){var e=this.getStencilSize(),i=rt(this.getAreaRestrictions({visibleArea:this.visibleArea,type:"resize"}));t.maxWidth=Math.min(t.maxWidth,i.width*e.width/this.boundaries.width),t.maxHeight=Math.min(t.maxHeight,i.height*e.height/this.boundaries.height),t.maxWidth<t.minWidth&&(t.minWidth=t.maxWidth),t.maxHeight<t.minHeight&&(t.minHeight=t.maxHeight)}return t}return{minWidth:0,minHeight:0,maxWidth:0,maxHeight:0}},positionRestrictions:function(){return this.positionRestrictionsAlgorithm({imageSize:this.imageSize,imageRestriction:this.imageRestriction})},classes:function(){return{cropper:ee(),image:l(ee("image"),this.imageClass),stencil:ee("stencil"),boundaries:l(ee("boundaries"),this.boundariesClass),stretcher:l(ee("stretcher")),background:l(ee("background"),this.backgroundClass),foreground:l(ee("foreground"),this.foregroundClass),imageWrapper:l(ee("image-wrapper")),cropperWrapper:l(ee("cropper-wrapper"))}},stencilCoordinates:function(){if(this.initialized){var t=this.coordinates,e=t.width,i=t.height,n=t.left,s=t.top;return{width:e/this.coefficient,height:i/this.coefficient,left:(n-this.visibleArea.left)/this.coefficient,top:(s-this.visibleArea.top)/this.coefficient}}return this.defaultCoordinates()},boundariesStyle:function(){var t={width:this.boundaries.width?"".concat(Math.round(this.boundaries.width),"px"):"auto",height:this.boundaries.height?"".concat(Math.round(this.boundaries.height),"px"):"auto",transition:"opacity ".concat(this.transitionTime,"ms"),pointerEvents:this.imageLoaded?"all":"none"};return this.imageLoaded||(t.opacity="0"),t},imageStyle:function(){var t=this.imageAttributes.width>this.imageAttributes.height?{width:Math.min(1024,this.imageAttributes.width),height:Math.min(1024,this.imageAttributes.width)/(this.imageAttributes.width/this.imageAttributes.height)}:{height:Math.min(1024,this.imageAttributes.height),width:Math.min(1024,this.imageAttributes.height)*(this.imageAttributes.width/this.imageAttributes.height)},e={left:(t.width-this.imageSize.width)/(2*this.coefficient),top:(t.height-this.imageSize.height)/(2*this.coefficient)},n={left:(1-1/this.coefficient)*t.width/2,top:(1-1/this.coefficient)*t.height/2},s=i(i({},this.imageTransforms),{},{scaleX:this.imageTransforms.scaleX*(this.imageAttributes.width/t.width),scaleY:this.imageTransforms.scaleY*(this.imageAttributes.height/t.height)}),o={width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),left:"0px",top:"0px",transform:"translate(".concat(-e.left-n.left-this.imageTransforms.translateX,"px, ").concat(-e.top-n.top-this.imageTransforms.translateY,"px)")+_t(s)};return this.transitionsOptions.enabled&&(o.transition="".concat(this.transitionsOptions.time,"ms ").concat(this.transitionsOptions.timingFunction)),o}},watch:{src:function(){this.onChangeImage()},stencilComponent:function(){var t=this;this.$nextTick((function(){t.resetCoordinates(),t.runAutoZoom("setCoordinates"),t.onChange()}))},minWidth:function(){this.onPropsChange()},maxWidth:function(){this.onPropsChange()},minHeight:function(){this.onPropsChange()},maxHeight:function(){this.onPropsChange()},imageRestriction:function(){this.reset()},stencilProps:function(t,e){["aspectRatio","minAspectRatio","maxAspectRatio"].find((function(i){return t[i]!==e[i]}))&&this.$nextTick(this.onPropsChange)}},created:function(){this.debouncedUpdate=m(this.update,this.debounce),this.debouncedDisableTransitions=m(this.disableTransitions,this.transitionsOptions.time),this.awaiting=!1},mounted:function(){this.$refs.image.addEventListener("load",this.onSuccessLoadImage),this.$refs.image.addEventListener("error",this.onFailLoadImage),this.onChangeImage(),window.addEventListener("resize",this.refresh),window.addEventListener("orientationchange",this.refresh)},destroyed:function(){window.removeEventListener("resize",this.refresh),window.removeEventListener("orientationchange",this.refresh),this.imageAttributes.revoke&&this.imageAttributes.src&&URL.revokeObjectURL(this.imageAttributes.src),this.debouncedUpdate.clear(),this.debouncedDisableTransitions.clear()},methods:{getResult:function(){var t=this.initialized?this.prepareResult(i({},this.coordinates)):this.defaultCoordinates(),e={rotate:this.imageTransforms.rotate%360,flip:i({},this.imageTransforms.flip)};if(this.src&&this.imageLoaded){var n=this;return{image:this.image,coordinates:t,visibleArea:this.visibleArea?i({},this.visibleArea):null,imageTransforms:e,get canvas(){return n.canvas?n.getCanvas():void 0}}}return{image:this.image,coordinates:t,visibleArea:this.visibleArea?i({},this.visibleArea):null,canvas:void 0,imageTransforms:e}},zoom:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.transitions,s=void 0===n||n;this.onManipulateImage(new M({},{factor:1/t,center:e}),{normalize:!1,transitions:s})},move:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.transitions,s=void 0===n||n;this.onManipulateImage(new M({left:t||0,top:e||0}),{normalize:!1,transitions:s})},setCoordinates:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.autoZoom,s=void 0===n||n,o=i.transitions,r=void 0===o||o;this.$nextTick((function(){e.imageLoaded?(e.transitionsActive||(r&&e.enableTransitions(),e.coordinates=e.applyTransform(t),s&&e.runAutoZoom("setCoordinates"),r&&e.debouncedDisableTransitions()),e.onChange()):e.delayedTransforms=t}))},refresh:function(){var t=this,e=this.$refs.image;if(this.src&&e)return this.initialized?this.updateVisibleArea().then((function(){t.onChange()})):this.resetVisibleArea().then((function(){t.onChange()}))},reset:function(){var t=this;return this.resetVisibleArea().then((function(){t.onChange(!1)}))},awaitRender:function(t){var e=this;this.awaiting||(this.awaiting=!0,this.$nextTick((function(){t(),e.awaiting=!1})))},prepareResult:function(t){return this.roundResult?function(t){var e=t.coordinates,i=t.sizeRestrictions,n=t.positionRestrictions,s={width:Math.round(e.width),height:Math.round(e.height),left:Math.round(e.left),top:Math.round(e.top)};return s.width>i.maxWidth?s.width=Math.floor(e.width):s.width<i.minWidth&&(s.width=Math.ceil(e.width)),s.height>i.maxHeight?s.height=Math.floor(e.height):s.height<i.minHeight&&(s.height=Math.ceil(e.height)),ot(s,n)}(i(i({},this.getPublicProperties()),{},{positionRestrictions:yt(this.positionRestrictions,this.visibleArea),coordinates:t})):t},processAutoZoom:function(t,e,n,s){var o=this.autoZoomAlgorithm;o||(o=this.stencilSize?pt:this.autoZoom?gt:vt);var r=o({event:{type:t,params:s},visibleArea:e,coordinates:n,boundaries:this.boundaries,aspectRatio:this.getAspectRatio(),positionRestrictions:this.positionRestrictions,getAreaRestrictions:this.getAreaRestrictions,sizeRestrictions:this.sizeRestrictions,stencilSize:this.getStencilSize()});return i(i({},r),{},{changed:!X(r.visibleArea,e)||!X(r.coordinates,n)})},runAutoZoom:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.transitions,n=void 0!==i&&i,o=s(e,te),r=this.processAutoZoom(t,this.visibleArea,this.coordinates,o),a=r.visibleArea,h=r.coordinates,c=r.changed;n&&c&&this.enableTransitions(),this.visibleArea=a,this.coordinates=h,n&&c&&this.debouncedDisableTransitions()},normalizeEvent:function(t){return function(t){var e=t.event,i=t.visibleArea,n=t.coefficient;if("manipulateImage"===e.type)return f(f({},e),{move:{left:e.move&&e.move.left?n*e.move.left:0,top:e.move&&e.move.top?n*e.move.top:0},scale:{factor:e.scale&&e.scale.factor?e.scale.factor:1,center:e.scale&&e.scale.center?{left:e.scale.center.left*n+i.left,top:e.scale.center.top*n+i.top}:null}});if("resize"===e.type){var s=f(f({},e),{directions:f({},e.directions)});return D.forEach((function(t){s.directions[t]*=n})),s}if("move"===e.type){var o=f(f({},e),{directions:f({},e.directions)});return B.forEach((function(t){o.directions[t]*=n})),o}return e}(i(i({},this.getPublicProperties()),{},{event:t}))},getCanvas:function(){if(this.$refs.canvas){var t=this.$refs.canvas,e=this.$refs.image,n=0!==this.imageTransforms.rotate||this.imageTransforms.flip.horizontal||this.imageTransforms.flip.vertical?function(t,e,i){var n=i.rotate,s=i.flip,o={width:e.naturalWidth,height:e.naturalHeight},r=it(o,n),a=t.getContext("2d");t.height=r.height,t.width=r.width,a.save();var h=nt(U(f({left:0,top:0},o)),n);return a.translate(-(h.left-r.width/2),-(h.top-r.height/2)),a.rotate(n*Math.PI/180),a.translate(s.horizontal?o.width:0,s.vertical?o.height:0),a.scale(s.horizontal?-1:1,s.vertical?-1:1),a.drawImage(e,0,0,o.width,o.height),a.restore(),t}(this.$refs.sourceCanvas,e,this.imageTransforms):e,s=i({minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,maxArea:this.maxCanvasSize,imageSmoothingEnabled:!0,imageSmoothingQuality:"high",fillColor:"transparent"},this.canvas),o=function(t){return t.find((function(t){return e=t,!Number.isNaN(parseFloat(e))&&isFinite(e);var e}))},r=ut({sizeRestrictions:{minWidth:o([s.width,s.minWidth])||0,minHeight:o([s.height,s.minHeight])||0,maxWidth:o([s.width,s.maxWidth])||1/0,maxHeight:o([s.height,s.maxHeight])||1/0},width:this.coordinates.width,height:this.coordinates.height,aspectRatio:{minimum:this.coordinates.width/this.coordinates.height,maximum:this.coordinates.width/this.coordinates.height}});if(s.maxArea&&r.width*r.height>s.maxArea){var a=Math.sqrt(s.maxArea/(r.width*r.height));r={width:Math.round(a*r.width),height:Math.round(a*r.height)}}return function(t,e,i,n,s){t.width=n?n.width:i.width,t.height=n?n.height:i.height;var o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),s&&(s.imageSmoothingEnabled&&(o.imageSmoothingEnabled=s.imageSmoothingEnabled),s.imageSmoothingQuality&&(o.imageSmoothingQuality=s.imageSmoothingQuality),s.fillColor&&(o.fillStyle=s.fillColor,o.fillRect(0,0,t.width,t.height),o.save()));var r=i.left<0?-i.left:0,a=i.top<0?-i.top:0;o.drawImage(e,i.left+r,i.top+a,i.width,i.height,r,a,t.width,t.height)}(t,n,this.coordinates,r,s),t}},update:function(){this.$emit("change",this.getResult())},applyTransform:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.visibleArea&&e?at(this.sizeRestrictions,this.visibleArea):this.sizeRestrictions,n=this.visibleArea&&e?yt(this.positionRestrictions,this.visibleArea):this.positionRestrictions;return ft({transform:t,coordinates:this.coordinates,imageSize:this.imageSize,sizeRestrictions:i,positionRestrictions:n,aspectRatio:this.getAspectRatio(),visibleArea:this.visibleArea})},resetCoordinates:function(){var t=this;if(this.$refs.image){this.$refs.cropper,this.$refs.image;var e=this.defaultSize;e||(e=this.stencilSize?wt:bt);var n=this.sizeRestrictions;n.minWidth,n.minHeight,n.maxWidth,n.maxHeight;var s=[b(e)?e({boundaries:this.boundaries,imageSize:this.imageSize,aspectRatio:this.getAspectRatio(),sizeRestrictions:this.sizeRestrictions,stencilSize:this.getStencilSize(),visibleArea:this.visibleArea}):e,function(e){var n=e.coordinates;return i({},b(t.defaultPosition)?t.defaultPosition({coordinates:n,imageSize:t.imageSize,visibleArea:t.visibleArea}):t.defaultPosition)}];this.delayedTransforms&&s.push.apply(s,o(Array.isArray(this.delayedTransforms)?this.delayedTransforms:[this.delayedTransforms])),this.coordinates=this.applyTransform(s,!0),this.delayedTransforms=null}},clearImage:function(){var t=this;this.imageLoaded=!1,setTimeout((function(){var e=t.$refs.stretcher;e&&(e.style.height="auto",e.style.width="auto"),t.coordinates=t.defaultCoordinates(),t.boundaries={width:0,height:0}}),this.transitionTime)},enableTransitions:function(){this.transitions&&(this.transitionsActive=!0)},disableTransitions:function(){this.transitionsActive=!1},updateBoundaries:function(){var t=this,e=this.$refs.stretcher,i=this.$refs.cropper;return this.initStretcher({cropper:i,stretcher:e,imageSize:this.imageSize}),this.$nextTick().then((function(){var e={cropper:i,imageSize:t.imageSize};if(b(t.defaultBoundaries)?t.boundaries=t.defaultBoundaries(e):"fit"===t.defaultBoundaries?t.boundaries=function(t){var e=t.cropper,i=t.imageSize,n=e.clientHeight,s=e.clientWidth,o=n,r=i.width*n/i.height;return r>s&&(r=s,o=i.height*s/i.width),{width:r,height:o}}(e):t.boundaries=function(t){var e=t.cropper;return{width:e.clientWidth,height:e.clientHeight}}(e),!t.boundaries.width||!t.boundaries.height)throw new Error("It's impossible to fit the cropper in the current container")}))},resetVisibleArea:function(){var t=this;return this.appliedImageTransforms=i(i({},this.defaultImageTransforms),{},{flip:i({},this.defaultImageTransforms.flip)}),this.updateBoundaries().then((function(){var e,i,n,s,o,r;"visible-area"!==t.priority&&(t.visibleArea=null,t.resetCoordinates()),t.visibleArea=b(t.defaultVisibleArea)?t.defaultVisibleArea({imageSize:t.imageSize,boundaries:t.boundaries,coordinates:"visible-area"!==t.priority?t.coordinates:null,getAreaRestrictions:t.getAreaRestrictions,stencilSize:t.getStencilSize()}):t.defaultVisibleArea,t.visibleArea=(e={visibleArea:t.visibleArea,boundaries:t.boundaries,getAreaRestrictions:t.getAreaRestrictions},i=e.visibleArea,n=e.boundaries,s=e.getAreaRestrictions,o=f({},i),r=Q(n),o.width/o.height!==r&&(o.height=o.width/r),ot(o,s({visibleArea:o,type:"move"}))),"visible-area"===t.priority?t.resetCoordinates():t.coordinates=t.fitCoordinates({visibleArea:t.visibleArea,coordinates:t.coordinates,aspectRatio:t.getAspectRatio(),positionRestrictions:t.positionRestrictions,sizeRestrictions:t.sizeRestrictions}),t.runAutoZoom("resetVisibleArea")})).catch((function(){t.visibleArea=null}))},updateVisibleArea:function(){var t=this;return this.updateBoundaries().then((function(){t.visibleArea=t.fitVisibleArea({imageSize:t.imageSize,boundaries:t.boundaries,visibleArea:t.visibleArea,coordinates:t.coordinates,getAreaRestrictions:t.getAreaRestrictions}),t.coordinates=t.fitCoordinates({visibleArea:t.visibleArea,coordinates:t.coordinates,aspectRatio:t.getAspectRatio(),positionRestrictions:t.positionRestrictions,sizeRestrictions:t.sizeRestrictions}),t.runAutoZoom("updateVisibleArea")})).catch((function(){t.visibleArea=null}))},onChange:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$listeners&&this.$listeners.change&&(t&&this.debounce?this.debouncedUpdate():this.update())},onChangeImage:function(){var t,e=this;if(this.imageLoaded=!1,this.delayedTransforms=null,this.src){if(function(t){if(v(t))return!1;var e=window.location,i=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(t)||[],n={protocol:i[1]||"",host:i[2]||"",port:i[3]||""},s=function(t){return t.port||("http"===(t.protocol||e.protocol)?80:433)};return!(!n.protocol&&!n.host&&!n.port||Boolean(n.protocol&&n.protocol==e.protocol&&n.host&&n.host==e.host&&n.host&&s(n)==s(e)))}(this.src)){var i=w(this.crossOrigin)?this.canvas:this.crossOrigin;!0===i&&(i="anonymous"),this.imageAttributes.crossOrigin=i}if(this.checkOrientation){var n=(t=this.src,new Promise((function(e){Bt(t).then((function(i){var n=Ft(i);e(i?{source:t,arrayBuffer:i,orientation:n}:{source:t,arrayBuffer:null,orientation:null})})).catch((function(i){console.warn(i),e({source:t,arrayBuffer:null,orientation:null})}))})));setTimeout((function(){n.then(e.onParseImage)}),this.transitionTime)}else setTimeout((function(){e.onParseImage({source:e.src})}),this.transitionTime)}else this.clearImage()},onFailLoadImage:function(){this.imageAttributes.src&&(this.clearImage(),this.$emit("error"))},onSuccessLoadImage:function(){var t=this,e=this.$refs.image;e&&!this.imageLoaded&&(this.imageAttributes.height=e.naturalHeight,this.imageAttributes.width=e.naturalWidth,this.imageLoaded=!0,this.resetVisibleArea().then((function(){t.$emit("ready"),t.onChange(!1)})))},onParseImage:function(t){var e=this,n=t.source,s=t.arrayBuffer,o=t.orientation;this.imageAttributes.revoke&&this.imageAttributes.src&&URL.revokeObjectURL(this.imageAttributes.src),this.imageAttributes.revoke=!1,s&&o&&o>1?g(n)||!v(n)?(this.imageAttributes.src=URL.createObjectURL(new Blob([s])),this.imageAttributes.revoke=!0):this.imageAttributes.src=function(t){for(var e=[],i=new Uint8Array(t);i.length>0;){var n=i.subarray(0,8192);e.push(String.fromCharCode.apply(null,Array.from?Array.from(n):n.slice())),i=i.subarray(8192)}return"data:image/jpeg;base64,"+btoa(e.join(""))}(s):this.imageAttributes.src=n,b(this.defaultTransforms)?this.appliedImageTransforms=It(this.defaultTransforms()):y(this.defaultTransforms)?this.appliedImageTransforms=It(this.defaultTransforms):this.appliedImageTransforms=function(t){var e=It({});if(t)switch(t){case 2:e.flip.horizontal=!0;break;case 3:e.rotate=-180;break;case 4:e.flip.vertical=!0;break;case 5:e.rotate=90,e.flip.vertical=!0;break;case 6:e.rotate=90;break;case 7:e.rotate=90,e.flip.horizontal=!0;break;case 8:e.rotate=-90}return e}(o),this.defaultImageTransforms=i(i({},this.appliedImageTransforms),{},{flip:i({},this.appliedImageTransforms.flip)}),this.$nextTick((function(){var t=e.$refs.image;t&&t.complete&&(!function(t){return Boolean(t.naturalWidth)}(t)?e.onFailLoadImage():e.onSuccessLoadImage())}))},onResizeEnd:function(){this.runAutoZoom("resize",{transitions:!0})},onMoveEnd:function(){this.runAutoZoom("move",{transitions:!0})},onMove:function(t){var e=this;this.transitionsOptions.enabled||this.awaitRender((function(){e.coordinates=e.moveAlgorithm(i(i({},e.getPublicProperties()),{},{positionRestrictions:yt(e.positionRestrictions,e.visibleArea),coordinates:e.coordinates,event:e.normalizeEvent(t)})),e.onChange()}))},onResize:function(t){var e=this;this.transitionsOptions.enabled||this.stencilSize&&!this.autoZoom||this.awaitRender((function(){var n=e.sizeRestrictions,s=Math.min(e.coordinates.width,e.coordinates.height,20*e.coefficient);e.coordinates=e.resizeAlgorithm(i(i({},e.getPublicProperties()),{},{positionRestrictions:yt(e.positionRestrictions,e.visibleArea),sizeRestrictions:{maxWidth:Math.min(n.maxWidth,e.visibleArea.width),maxHeight:Math.min(n.maxHeight,e.visibleArea.height),minWidth:Math.max(n.minWidth,s),minHeight:Math.max(n.minHeight,s)},event:e.normalizeEvent(t)})),e.onChange(),e.ticking=!1}))},onManipulateImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.transitionsOptions.enabled){var n=e.transitions,s=void 0!==n&&n,o=e.normalize,r=void 0===o||o;s&&this.enableTransitions();var a=zt(i(i({},this.getPublicProperties()),{},{event:r?this.normalizeEvent(t):t,getAreaRestrictions:this.getAreaRestrictions,imageRestriction:this.imageRestriction,adjustStencil:!this.stencilSize&&this.settings.resizeImage.adjustStencil})),h=a.visibleArea,c=a.coordinates;this.visibleArea=h,this.coordinates=c,this.runAutoZoom("manipulateImage"),this.onChange(),s&&this.debouncedDisableTransitions()}},onPropsChange:function(){this.coordinates=this.applyTransform(this.coordinates,!0),this.onChange(!1)},getAreaRestrictions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.visibleArea,i=t.type,n=void 0===i?"move":i;return this.areaRestrictionsAlgorithm({boundaries:this.boundaries,imageSize:this.imageSize,imageRestriction:this.imageRestriction,visibleArea:e,type:n})},getAspectRatio:function(t){var e,i,n=this.stencilProps,s=n.aspectRatio,o=n.minAspectRatio,r=n.maxAspectRatio;if(this.$refs.stencil&&this.$refs.stencil.aspectRatios){var a=this.$refs.stencil.aspectRatios();e=a.minimum,i=a.maximum}if(w(e)&&(e=w(s)?o:s),w(i)&&(i=w(s)?r:s),!t&&(w(e)||w(i))){var h=this.getStencilSize(),c=h?Q(h):null;w(e)&&(e=A(c)?c:void 0),w(i)&&(i=A(c)?c:void 0)}return{minimum:e,maximum:i}},getStencilSize:function(){if(this.stencilSize)return t={currentStencilSize:{width:this.stencilCoordinates.width,height:this.stencilCoordinates.height},stencilSize:this.stencilSize,boundaries:this.boundaries,coefficient:this.coefficient,coordinates:this.coordinates,aspectRatio:this.getAspectRatio(!0)},e=t.boundaries,i=t.stencilSize,n=t.aspectRatio,tt(Q(s=b(i)?i({boundaries:e,aspectRatio:n}):i),n)&&(s=ut({sizeRestrictions:{maxWidth:e.width,maxHeight:e.height,minWidth:0,minHeight:0},width:s.width,height:s.height,aspectRatio:{minimum:n.minimum,maximum:n.maximum}})),(s.width>e.width||s.height>e.height)&&(s=ut({sizeRestrictions:{maxWidth:e.width,maxHeight:e.height,minWidth:0,minHeight:0},width:s.width,height:s.height,aspectRatio:{minimum:Q(s),maximum:Q(s)}})),s;var t,e,i,n,s},getPublicProperties:function(){return{coefficient:this.coefficient,visibleArea:this.visibleArea,coordinates:this.coordinates,boundaries:this.boundaries,sizeRestrictions:this.sizeRestrictions,positionRestrictions:this.positionRestrictions,aspectRatio:this.getAspectRatio(),imageRestriction:this.imageRestriction}},defaultCoordinates:function(){return i({},F)},flip:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.transitions,o=void 0===s||s;if(!this.transitionsActive){o&&this.enableTransitions();var r=i({},this.imageTransforms.flip),a=At({flip:{horizontal:t?!r.horizontal:r.horizontal,vertical:e?!r.vertical:r.vertical},previousFlip:r,rotate:this.imageTransforms.rotate,visibleArea:this.visibleArea,coordinates:this.coordinates,imageSize:this.imageSize,positionRestrictions:this.positionRestrictions,sizeRestrictions:this.sizeRestrictions,getAreaRestrictions:this.getAreaRestrictions,aspectRatio:this.getAspectRatio()}),h=a.visibleArea,c=a.coordinates;t&&(this.appliedImageTransforms.flip.horizontal=!this.appliedImageTransforms.flip.horizontal),e&&(this.appliedImageTransforms.flip.vertical=!this.appliedImageTransforms.flip.vertical),this.visibleArea=h,this.coordinates=c,this.onChange(),o&&this.debouncedDisableTransitions()}},rotate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transitions,s=void 0===n||n;if(!this.transitionsActive){s&&this.enableTransitions();var o=i({},this.imageSize);this.appliedImageTransforms.rotate+=t;var r=Rt({visibleArea:this.visibleArea,coordinates:this.coordinates,previousImageSize:o,imageSize:this.imageSize,angle:t,positionRestrictions:this.positionRestrictions,sizeRestrictions:this.sizeRestrictions,getAreaRestrictions:this.getAreaRestrictions,aspectRatio:this.getAspectRatio()}),a=r.visibleArea,h=r.coordinates,c=this.processAutoZoom("rotateImage",a,h);a=c.visibleArea,h=c.coordinates,this.visibleArea=a,this.coordinates=h,this.onChange(),s&&this.debouncedDisableTransitions()}}}},ne=T({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"cropper",class:t.classes.cropper},[i("div",{ref:"stretcher",class:t.classes.stretcher}),t._v(" "),i("div",{class:t.classes.boundaries,style:t.boundariesStyle},[i(t.backgroundWrapperComponent,{tag:"component",class:t.classes.cropperWrapper,attrs:{"wheel-resize":t.settings.resizeImage.wheel,"touch-resize":t.settings.resizeImage.touch,"touch-move":t.settings.moveImage.touch,"mouse-move":t.settings.moveImage.mouse},on:{move:t.onManipulateImage,resize:t.onManipulateImage}},[i("div",{class:t.classes.background,style:t.boundariesStyle}),t._v(" "),i("div",{class:t.classes.imageWrapper},[i("img",{ref:"image",class:t.classes.image,style:t.imageStyle,attrs:{crossorigin:t.imageAttributes.crossOrigin,src:t.imageAttributes.src},on:{mousedown:function(t){t.preventDefault()}}})]),t._v(" "),i("div",{class:t.classes.foreground,style:t.boundariesStyle}),t._v(" "),i(t.stencilComponent,t._b({directives:[{name:"show",rawName:"v-show",value:t.imageLoaded,expression:"imageLoaded"}],ref:"stencil",tag:"component",attrs:{image:t.image,coordinates:t.coordinates,"stencil-coordinates":t.stencilCoordinates,transitions:t.transitionsOptions},on:{resize:t.onResize,"resize-end":t.onResizeEnd,move:t.onMove,"move-end":t.onMoveEnd}},"component",t.stencilProps,!1)),t._v(" "),t.canvas?i("canvas",{ref:"canvas",style:{display:"none"}}):t._e(),t._v(" "),t.canvas?i("canvas",{ref:"sourceCanvas",style:{display:"none"}}):t._e()],1)],1)])},staticRenderFns:[]},undefined,ie,undefined,false,undefined,!1,void 0,void 0,void 0);vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("cropper",ne),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("rectangle-stencil",Qt),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("circle-stencil",Jt),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("simple-handler",Et),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("simple-line",Ot);


/***/ }),

/***/ "./resources/js/components/Breadcrumbs.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Breadcrumbs.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true& */ "./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true&");
/* harmony import */ var _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=script&lang=js& */ "./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Breadcrumbs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=074da5b0& */ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumbs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_3f3ce3b5_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true&");


/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=074da5b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Breadcrumbs.vue?vue&type=template&id=3f3ce3b5&lang=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-breadcrumbs", {
            attrs: { divider: ">", large: "", items: _vm.breadcrumbs },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Breadcrumbs", { attrs: { breadcrumbs: _vm.breadcrumbs } }),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grey lighten-5" },
        [
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "pa-2", attrs: { tile: "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { column: "" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { loading: _vm.profileupdating } },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "customcardtext" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "avatararea" },
                                    [
                                      _c("v-hover", {
                                        scopedSlots: _vm._u([
                                          {
                                            key: "default",
                                            fn: function (ref) {
                                              var hover = ref.hover
                                              return [
                                                _c(
                                                  "div",
                                                  {
                                                    staticStyle: {
                                                      display: "flex",
                                                      "justify-content":
                                                        "center",
                                                    },
                                                  },
                                                  [
                                                    _vm.user.avatar == null
                                                      ? _c(
                                                          "v-avatar",
                                                          {
                                                            staticStyle: {
                                                              "background-color":
                                                                "darkgreen",
                                                              "margin-bottom":
                                                                "10px",
                                                              color: "white",
                                                              "margin-top":
                                                                "5px",
                                                              "margin-left":
                                                                "5px",
                                                            },
                                                            attrs: {
                                                              size: "96",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: "",
                                                                  "x-large": "",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " mdi-account-circle "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : _c(
                                                          "v-avatar",
                                                          {
                                                            staticStyle: {
                                                              "margin-bottom":
                                                                "10px",
                                                            },
                                                            attrs: {
                                                              size: "96",
                                                            },
                                                          },
                                                          [
                                                            _c("img", {
                                                              staticClass:
                                                                "avatarimg",
                                                              attrs: {
                                                                src: _vm.user
                                                                  .avatar,
                                                                alt: _vm.user
                                                                  .name,
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                    _vm._v(" "),
                                                    _c("v-expand-transition", [
                                                      hover
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "changeavatarhover",
                                                              on: {
                                                                click:
                                                                  _vm.openAvatarUpload,
                                                              },
                                                            },
                                                            [
                                                              _c("input", {
                                                                ref: "avatarfile",
                                                                staticStyle: {
                                                                  display:
                                                                    "none",
                                                                },
                                                                attrs: {
                                                                  type: "file",
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.handleFileUpload(
                                                                        $event
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "avataruploaddiv",
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        large:
                                                                          "",
                                                                        color:
                                                                          "gray darken-2",
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                mdi-arrow-up-bold-box-outline\n                              "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                          },
                                        ]),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.changepassword
                                    ? _c(
                                        "div",
                                        [
                                          _vm.hasalert
                                            ? _c(
                                                "v-alert",
                                                {
                                                  attrs: {
                                                    dense: "",
                                                    text: "",
                                                    type: _vm.alert.type,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(_vm.alert.text) +
                                                      "\n                    "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Current Password",
                                            },
                                            model: {
                                              value: _vm.form.currentpassword,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "currentpassword",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.currentpassword",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: { label: "New Password" },
                                            model: {
                                              value: _vm.form.newpassword,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "newpassword",
                                                  $$v
                                                )
                                              },
                                              expression: "form.newpassword",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Confirm New Password",
                                            },
                                            model: {
                                              value:
                                                _vm.form.newpasswordconfirm,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "newpasswordconfirm",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.newpasswordconfirm",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "prflbtn" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "teal lighten-2",
                                                    elevation: "2",
                                                    loading:
                                                      _vm.passwordupdating,
                                                    disabled:
                                                      _vm.form
                                                        .currentpassword ==
                                                        null ||
                                                      _vm.form.newpassword ==
                                                        null ||
                                                      _vm.form
                                                        .newpasswordconfirm ==
                                                        null,
                                                  },
                                                  on: {
                                                    click: _vm.updatePassword,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.$t("updatePassword")
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "prflbtn" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      "deep-orange accent-3",
                                                    elevation: "2",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.changepassword = false
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("cancel"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _c(
                                        "div",
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: "",
                                              label: _vm.lang.name,
                                            },
                                            model: {
                                              value: _vm.user.name,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.user, "name", $$v)
                                              },
                                              expression: "user.name",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: "",
                                              label: _vm.lang.email,
                                            },
                                            model: {
                                              value: _vm.user.email,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.user, "email", $$v)
                                              },
                                              expression: "user.email",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "market_line" },
                                            [
                                              _c("b", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("marketName")) +
                                                    " :"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _vm.market != null
                                                ? _c("p", [
                                                    _vm._v(
                                                      _vm._s(_vm.market.name) +
                                                        " "
                                                    ),
                                                  ])
                                                : _c("p", [_vm._v("-")]),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "prflbtn" },
                                    [
                                      !_vm.changepassword
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "teal lighten-2",
                                                elevation: "2",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  _vm.changepassword = true
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.$t("updatePassword")
                                                  )
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticStyle: { height: "20px" },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _vm.cropprocess == false
                    ? _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: {
                            outlined: "",
                            tile: "",
                            loading: _vm.accountactivitiesloading,
                          },
                        },
                        [
                          _c("v-card-title", [
                            _vm._v(_vm._s(_vm.$t("accountActivities")) + " "),
                          ]),
                          _vm._v(" "),
                          _c("v-simple-table", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function () {
                                    return [
                                      _c("thead", [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(_vm.$t("event")) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("systemTime")) +
                                                  " (UTC 0)"
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(
                                          _vm.accountactivities,
                                          function (item) {
                                            return _c("tr", { key: item.id }, [
                                              _c("td", [
                                                item.type == 0
                                                  ? _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "loggedOutOfDashboard"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.type == 1
                                                  ? _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "loginToDashboard"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.type == 2
                                                  ? _c("div", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("loginFailure")
                                                        )
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.type == 3
                                                  ? _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "passwordChangedOnDashboard"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.type == 4
                                                  ? _c("div", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "createdANewPasswordViaEmail"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(item.systime)),
                                              ]),
                                            ])
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              false,
                              2457144922
                            ),
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.cropprocess
                    ? _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: {
                            outlined: "",
                            tile: "",
                            loading: _vm.imageuploading,
                          },
                        },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticStyle: {
                                display: "flex",
                                "justify-content": "space-between",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("cropYourAvatar")) +
                                  "\n              "
                              ),
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { disabled: _vm.imageuploading },
                                      on: { click: _vm.crop },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.$t("cropAndUpdateAvatar")
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              [
                                _c("cropper", {
                                  ref: "cropper",
                                  staticClass: "circle-cropper",
                                  attrs: {
                                    src: _vm.img,
                                    "stencil-props": {
                                      previewClass: "circle-cropper__preview",
                                    },
                                    "stencil-component": "circle-stencil",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);