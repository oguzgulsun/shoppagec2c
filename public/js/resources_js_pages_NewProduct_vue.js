"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_NewProduct_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Breadcrumbs */ "./resources/js/components/Breadcrumbs.vue");
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
  name: "NewProduct",
  components: {
    Breadcrumbs: _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      errors1: [],
      item_types: [{
        img: "/assets/img/fiziksel.png",
        name: "Fiziksel Ürün",
        type: 1
      }, {
        img: "/assets/img/randevulu.png",
        name: "Randevulu Hizmet",
        type: 2
      }, {
        img: "/assets/img/dijital.png",
        name: "Dijital Ürün",
        type: 3
      }],
      canceldialog: false,
      product: {
        name: "",
        type: 1
      },
      e1: 1,
      e13: 1,
      breadcrumbs: [{
        text: "Dashboard",
        disabled: false,
        to: "/"
      }, {
        text: "Products",
        disabled: false,
        to: "/products"
      }, {
        text: "New Product",
        disabled: true,
        to: "/products/newproduct"
      }]
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;
      this.errors1 = [];
      axios.post("/api/addproduct", {
        name: this.product.name,
        type: this.product.type
      }).then(function (response) {
        _this.e1 = 2;
      })["catch"](function (e) {
        console.log(e);
        console.log(e.response.data.errors);
        if (e.response.data.errors.name) {
          _this.errors1 = e.response.data.errors.name;
        }
        // 
      });
    }
  },

  computed: {
    // products: {
    //   get() {
    //     return this.$store.state.products;
    //   },
    //   set(value) {
    //     this.$store.commit("SET_PRODUCTS", value);
    //   },
    // },
  }
});

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

/***/ "./resources/js/pages/NewProduct.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/NewProduct.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProduct.vue?vue&type=template&id=259d6c10&lang=true& */ "./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true&");
/* harmony import */ var _NewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProduct.vue?vue&type=script&lang=js& */ "./resources/js/pages/NewProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/NewProduct.vue"
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

/***/ "./resources/js/pages/NewProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/NewProduct.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_template_id_259d6c10_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProduct.vue?vue&type=template&id=259d6c10&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/NewProduct.vue?vue&type=template&id=259d6c10&lang=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        [
          _c("v-card-title", { staticClass: "justify-space-between pb-1" }, [
            _c(
              "div",
              { staticClass: "d-flex" },
              [
                _c("h4", { staticClass: "pr-3" }, [_vm._v("NEW PRODUCT")]),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function (ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-icon",
                              _vm._g(
                                _vm._b(
                                  { attrs: { color: "primary", dark: "" } },
                                  "v-icon",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [
                                _vm._v(
                                  "\n                       mdi-information-outline\n                       "
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c("div", [
                      _c("span", { staticClass: "d-block" }, [
                        _vm._v("Please full all of the areas"),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-block" }, [
                        _vm._v("Seo is important"),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pt-1" },
        [
          _c(
            "v-stepper",
            {
              model: {
                value: _vm.e1,
                callback: function ($$v) {
                  _vm.e1 = $$v
                },
                expression: "e1",
              },
            },
            [
              _c(
                "v-stepper-header",
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 1, step: "1" } },
                    [_vm._v("\n       Product Core Options\n     ")]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 2, step: "2" } },
                    [_vm._v("\n       Customize Your Product\n     ")]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-stepper-step", { attrs: { step: "3" } }, [
                    _vm._v("\n       Publish\n     "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "mb-12" },
                        [
                          _c(
                            "v-stepper",
                            {
                              attrs: { vertical: "" },
                              model: {
                                value: _vm.e13,
                                callback: function ($$v) {
                                  _vm.e13 = $$v
                                },
                                expression: "e13",
                              },
                            },
                            [
                              _c(
                                "v-stepper-step",
                                { attrs: { step: "1", complete: "" } },
                                [_vm._v("\n    Product Type\n   ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-stepper-content",
                                { attrs: { step: "1" } },
                                [
                                  _c(
                                    "v-card",
                                    { staticClass: "mb-12" },
                                    [
                                      _c(
                                        "v-item-group",
                                        { attrs: { mandatory: "" } },
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c(
                                                "v-row",
                                                _vm._l(
                                                  _vm.item_types,
                                                  function (itemtype) {
                                                    return _c(
                                                      "v-col",
                                                      {
                                                        key: itemtype.type,
                                                        attrs: {
                                                          cols: "12",
                                                          md: "4",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-item",
                                                          [
                                                            _c(
                                                              "v-card",
                                                              {
                                                                staticClass:
                                                                  "d-flex align-center",
                                                                attrs: {
                                                                  color:
                                                                    _vm.product
                                                                      .type ==
                                                                    itemtype.type
                                                                      ? "primary"
                                                                      : "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.product.type =
                                                                        itemtype.type
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "v-scroll-y-transition",
                                                                  [
                                                                    _vm.product
                                                                      .type ==
                                                                    itemtype.type
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "text-h2 flex-grow-1 text-center",
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: itemtype.img,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticStyle:
                                                                                  {
                                                                                    "font-size":
                                                                                      "20px",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    itemtype.name
                                                                                  ) +
                                                                                    " "
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "text-h2 flex-grow-1 text-center",
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: itemtype.img,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticStyle:
                                                                                  {
                                                                                    "font-size":
                                                                                      "20px",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    itemtype.name
                                                                                  ) +
                                                                                    " "
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
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
                                                    )
                                                  }
                                                ),
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
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function ($event) {
                                          _vm.e13 = 2
                                        },
                                      },
                                    },
                                    [_vm._v("\n       Continue\n     ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "" },
                                      on: {
                                        click: function ($event) {
                                          _vm.canceldialog = true
                                        },
                                      },
                                    },
                                    [_vm._v("\n       Cancel\n     ")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-stepper-step",
                                { attrs: { step: "2", complete: "" } },
                                [_vm._v("\n      Name Of Product\n   ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-stepper-content",
                                { attrs: { step: "2" } },
                                [
                                  _c(
                                    "v-card",
                                    { staticClass: "mb-12" },
                                    [
                                      _vm._l(
                                        _vm.errors1,
                                        function (alert, index) {
                                          return _c(
                                            "v-alert",
                                            {
                                              key: index,
                                              attrs: {
                                                outlined: "",
                                                type: "error",
                                                prominent: "",
                                                border: "left",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n           " +
                                                  _vm._s(alert) +
                                                  "\n         "
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Product Name",
                                          placeholder:
                                            "Write Unique Product Name in Your Store",
                                          outlined: "",
                                        },
                                        model: {
                                          value: _vm.product.name,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.product, "name", $$v)
                                          },
                                          expression: "product.name",
                                        },
                                      }),
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: { click: _vm.addProduct },
                                    },
                                    [_vm._v("\n       Continue\n     ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "" },
                                      on: {
                                        click: function ($event) {
                                          _vm.e13 = 1
                                        },
                                      },
                                    },
                                    [_vm._v("\n       Cancel\n     ")]
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
                    "v-stepper-content",
                    { attrs: { step: "2" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "mb-12" },
                        [
                          _c(
                            "v-col",
                            { attrs: { md: "8" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Product Name",
                                  placeholder:
                                    "Write Unique Product Name in Your Store",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.product.name,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.product, "name", $$v)
                                  },
                                  expression: "product.name",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.e1 = 3
                            },
                          },
                        },
                        [_vm._v("\n         Continue\n       ")]
                      ),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { text: "" } }, [
                        _vm._v("\n         Cancel\n       "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "3" } },
                    [
                      _c("v-card", {
                        staticClass: "mb-12",
                        attrs: { color: "grey lighten-1", height: "200px" },
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.e1 = 1
                            },
                          },
                        },
                        [_vm._v("\n         Continue\n       ")]
                      ),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { text: "" } }, [
                        _vm._v("\n         Cancel\n       "),
                      ]),
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
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "300px" },
          model: {
            value: _vm.canceldialog,
            callback: function ($$v) {
              _vm.canceldialog = $$v
            },
            expression: "canceldialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [
                  _vm._v("Do you want to cancel product installation?"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.$router.push("/products")
                        },
                      },
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function ($event) {
                          _vm.canceldialog = false
                        },
                      },
                    },
                    [_vm._v("Continue")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);