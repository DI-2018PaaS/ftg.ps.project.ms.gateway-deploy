(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-directives-module"],{

/***/ "./src/app/main/documentation/directives/directives.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/documentation/directives/directives.module.ts ***!
  \********************************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_directives_fuseIfOnDom_fuse_if_on_dom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component */ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.ts");
/* harmony import */ var app_main_documentation_directives_fuseInnerScroll_fuse_inner_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component */ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.ts");
/* harmony import */ var app_main_documentation_directives_fuseMatSidenav_fuse_mat_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component */ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.ts");
/* harmony import */ var app_main_documentation_directives_fusePerfectScrollbar_fuse_perfect_scrollbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component */ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'fuse-if-on-dom',
        component: app_main_documentation_directives_fuseIfOnDom_fuse_if_on_dom_component__WEBPACK_IMPORTED_MODULE_5__["DocsDirectivesFuseIfOnDomComponent"]
    },
    {
        path: 'fuse-inner-scroll',
        component: app_main_documentation_directives_fuseInnerScroll_fuse_inner_scroll_component__WEBPACK_IMPORTED_MODULE_6__["DocsDirectivesFuseInnerScrollComponent"]
    },
    {
        path: 'fuse-mat-sidenav',
        component: app_main_documentation_directives_fuseMatSidenav_fuse_mat_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["DocsDirectivesFuseMatSidenavComponent"]
    },
    {
        path: 'fuse-perfect-scrollbar',
        component: app_main_documentation_directives_fusePerfectScrollbar_fuse_perfect_scrollbar_component__WEBPACK_IMPORTED_MODULE_8__["DocsDirectivesFusePerfectScrollbarComponent"]
    }
];
var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_directives_fuseIfOnDom_fuse_if_on_dom_component__WEBPACK_IMPORTED_MODULE_5__["DocsDirectivesFuseIfOnDomComponent"],
                app_main_documentation_directives_fuseInnerScroll_fuse_inner_scroll_component__WEBPACK_IMPORTED_MODULE_6__["DocsDirectivesFuseInnerScrollComponent"],
                app_main_documentation_directives_fuseMatSidenav_fuse_mat_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["DocsDirectivesFuseMatSidenavComponent"],
                app_main_documentation_directives_fusePerfectScrollbar_fuse_perfect_scrollbar_component__WEBPACK_IMPORTED_MODULE_8__["DocsDirectivesFusePerfectScrollbarComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Directives</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">fuseIfOnDom</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>*fuseIfOnDom</code> is a helper directive that detaches and re-attaches the given element if it's\r\n            currently in the DOM. This will help in various cases such as charts that don't resize properly or\r\n            animations that don't wait to route to be loaded completely.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <div *fuseIfOnDom></div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DocsDirectivesFuseIfOnDomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsDirectivesFuseIfOnDomComponent", function() { return DocsDirectivesFuseIfOnDomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsDirectivesFuseIfOnDomComponent = /** @class */ (function () {
    function DocsDirectivesFuseIfOnDomComponent() {
    }
    DocsDirectivesFuseIfOnDomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-directives-fuse-if-on-dom',
            template: __webpack_require__(/*! ./fuse-if-on-dom.component.html */ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.html"),
            styles: [__webpack_require__(/*! ./fuse-if-on-dom.component.scss */ "./src/app/main/documentation/directives/fuseIfOnDom/fuse-if-on-dom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsDirectivesFuseIfOnDomComponent);
    return DocsDirectivesFuseIfOnDomComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Directives</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">fuseInnerScroll</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuseInnerScroll</code> is a class directive that can be used in page layouts. It will lock the\r\n            container's scroll allowing for individual scroll such as sidebar and the content itself.\r\n        </p>\r\n\r\n        <p class=\"message-box warning\">\r\n            This directive will only work with Fuse's pre-built page layouts and it's a class directive.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <div class=\"page-layout carded left-sidebar inner-scroll\">\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DocsDirectivesFuseInnerScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsDirectivesFuseInnerScrollComponent", function() { return DocsDirectivesFuseInnerScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsDirectivesFuseInnerScrollComponent = /** @class */ (function () {
    function DocsDirectivesFuseInnerScrollComponent() {
    }
    DocsDirectivesFuseInnerScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-directives-fuse-inner-scroll',
            template: __webpack_require__(/*! ./fuse-inner-scroll.component.html */ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.html"),
            styles: [__webpack_require__(/*! ./fuse-inner-scroll.component.scss */ "./src/app/main/documentation/directives/fuseInnerScroll/fuse-inner-scroll.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsDirectivesFuseInnerScrollComponent);
    return DocsDirectivesFuseInnerScrollComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Directives</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">fuseMatSidenav</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuseMatSidenav</code> is a helper directive that enhances the Angular Material's sidenav. It modifies\r\n            the sidenav so it will function like the Angular Material 1.x sidenav. It also has a service which you can\r\n            register a sidenav in order to access and control its status from anywhere.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <mat-sidenav position=\"start\" opened=\"true\" mode=\"side\"\r\n                                 fuseMatSidenavHelper=\"chat-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Inputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">fuseMatSidenavHelper</code>\r\n            <span>\r\n                A unique name for the sidenav.\r\n            </span>\r\n        </p>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">mat-is-locked-open</code>\r\n            <span>\r\n                Adds a locked open functionality just like Angular Material 1.x sidenav. Works with the media step\r\n                aliases of the FlexLayout library.\r\n            </span>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Accessing to the sidebav methods from anywhere</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"ts\">\r\n                <textarea #source>\r\n                    constructor(\r\n                        private _fuseMatSidenavHelperService: FuseMatSidenavHelperService,\r\n                    ) {}\r\n\r\n                    toggleSidenav()\r\n                    {\r\n                        this._fuseMatSidenavHelperService.getSidenav('chat-left-sidenav').toggle();\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host code {\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DocsDirectivesFuseMatSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsDirectivesFuseMatSidenavComponent", function() { return DocsDirectivesFuseMatSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsDirectivesFuseMatSidenavComponent = /** @class */ (function () {
    function DocsDirectivesFuseMatSidenavComponent() {
    }
    DocsDirectivesFuseMatSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-directives-fuse-mat-sidenav',
            template: __webpack_require__(/*! ./fuse-mat-sidenav.component.html */ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./fuse-mat-sidenav.component.scss */ "./src/app/main/documentation/directives/fuseMatSidenav/fuse-mat-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsDirectivesFuseMatSidenavComponent);
    return DocsDirectivesFuseMatSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Directives</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">fusePerfectScrollbar</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fusePerfectScrollbar</code> is an Angular directive for the <a\r\n            href=\"https://github.com/utatti/perfect-scrollbar\" target=\"_blank\">Perfect Scrollbar</a> library.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <div fusePerfectScrollbar>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <div [fusePerfectScrollbar]=\"false\" [fusePerfectScrollbarOptions]=\"{'updateOnRouteChange': true}\">\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Inputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">fusePerfectScrollbar</code>\r\n            <span>\r\n                Accepts an optional boolean which you can control the Perfect Scrollbar. If provided false, Perfect\r\n                Scrollbar will be destroyed or won't be initialized.\r\n            </span>\r\n        </p>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">fusePerfectScrollbarOptions</code>\r\n            <span>\r\n                Accepts the <a href=\"https://github.com/utatti/perfect-scrollbar#options\" target=\"_blank\">Perfect\r\n                Scrollbar options</a>. In addition to those options, there is also a custom <b>updateOnRouteChange</b>\r\n                option which updates the scrollbar on route changes. That's useful if your scrollbar wraps a\r\n                <b>router-outlet</b>.\r\n            </span>\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DocsDirectivesFusePerfectScrollbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsDirectivesFusePerfectScrollbarComponent", function() { return DocsDirectivesFusePerfectScrollbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsDirectivesFusePerfectScrollbarComponent = /** @class */ (function () {
    function DocsDirectivesFusePerfectScrollbarComponent() {
    }
    DocsDirectivesFusePerfectScrollbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-directives-fuse-perfect-scrollbar',
            template: __webpack_require__(/*! ./fuse-perfect-scrollbar.component.html */ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.html"),
            styles: [__webpack_require__(/*! ./fuse-perfect-scrollbar.component.scss */ "./src/app/main/documentation/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsDirectivesFusePerfectScrollbarComponent);
    return DocsDirectivesFusePerfectScrollbarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=directives-directives-module.js.map