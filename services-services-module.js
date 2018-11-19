(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./src/app/main/documentation/services/fuse-config/fuse-config.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-config/fuse-config.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fuse-config\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Services</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Fuse Config</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>Config</code> is a custom built Fuse service allows to have a granular control over the Fuse. It can\r\n            be used for changing theme options (layout, color etc.) by component basis.\r\n        </p>\r\n\r\n            <div class=\"section-title\">Usage</div>\r\n            <p class=\"py-8\">\r\n\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n\r\n                    export class SomeComponent\r\n                    {\r\n                        config: any;\r\n\r\n                        constructor(\r\n                            private _fuseConfigService: FuseConfigService\r\n                        )\r\n                        {\r\n                            // Fully customizable surroundings for this particular component\r\n                            this._fuseConfigService.config = {\r\n                                colorTheme      : 'theme-default-dark',\r\n                                layout          : {\r\n                                    style    : 'vertical-layout-1',\r\n                                    width    : 'fullwidth',\r\n                                    navbar   : {\r\n                                        primaryBackground  : 'fuse-navy-700',\r\n                                        secondaryBackground: 'fuse-navy-900',\r\n                                        folded             : false,\r\n                                        hidden             : false,\r\n                                        position           : 'left',\r\n                                        variant            : 'vertical-style-1'\r\n                                    },\r\n                                    toolbar  : {\r\n                                        customBackgroundColor: false,\r\n                                        background           : 'fuse-white-500',\r\n                                        hidden               : false,\r\n                                        position             : 'below-static'\r\n                                    },\r\n                                    footer   : {\r\n                                        customBackgroundColor: true,\r\n                                        background           : 'fuse-navy-900',\r\n                                        hidden               : false,\r\n                                        position             : 'below-fixed'\r\n                                    },\r\n                                    sidepanel: {\r\n                                        hidden  : false,\r\n                                        position: 'right'\r\n                                    }\r\n                                },\r\n                                customScrollbars: true\r\n                            });\r\n                        }\r\n\r\n                        onInit()\r\n                        {\r\n                            // Subscribe to config change\r\n                            this._fuseConfigService.config\r\n                                .subscribe((config) => {\r\n                                    this.config = config;\r\n                                });\r\n                        }\r\n                    }\r\n\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/documentation/services/fuse-config/fuse-config.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-config/fuse-config.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/services/fuse-config/fuse-config.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-config/fuse-config.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FuseConfigServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseConfigServiceDocsComponent", function() { return FuseConfigServiceDocsComponent; });
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

var FuseConfigServiceDocsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfigServiceDocsComponent() {
    }
    FuseConfigServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-config-service-docs',
            template: __webpack_require__(/*! ./fuse-config.component.html */ "./src/app/main/documentation/services/fuse-config/fuse-config.component.html"),
            styles: [__webpack_require__(/*! ./fuse-config.component.scss */ "./src/app/main/documentation/services/fuse-config/fuse-config.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseConfigServiceDocsComponent);
    return FuseConfigServiceDocsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-screen\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Services</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Fuse Splash Screen</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>Splash screen</code> is a custom Fuse service that allows to have a control on the splash screen.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n\r\n                    export class SomeComponent implements OnInit\r\n                    {\r\n                        constructor(\r\n                            private _fuseSplashScreenService: FuseSplashScreenService\r\n                        ) {}\r\n\r\n                        ngOnInit()\r\n                        {\r\n                            this._fuseSplashScreenService.show();\r\n\r\n                            setTimeout(() => {\r\n                                this._fuseSplashScreenService.hide();\r\n                            }, 3000);\r\n                        }\r\n                    }\r\n\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FuseSplashScreenServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSplashScreenServiceDocsComponent", function() { return FuseSplashScreenServiceDocsComponent; });
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

var FuseSplashScreenServiceDocsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseSplashScreenServiceDocsComponent() {
    }
    FuseSplashScreenServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-splash-screen-service-docs',
            template: __webpack_require__(/*! ./fuse-splash-screen.component.html */ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./fuse-splash-screen.component.scss */ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSplashScreenServiceDocsComponent);
    return FuseSplashScreenServiceDocsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/services/services.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/documentation/services/services.module.ts ***!
  \****************************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/index */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/services/fuse-config/fuse-config.component */ "./src/app/main/documentation/services/fuse-config/fuse-config.component.ts");
/* harmony import */ var app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component */ "./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'fuse-config',
        component: app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfigServiceDocsComponent"]
    },
    {
        path: 'fuse-splash-screen',
        component: app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["FuseSplashScreenServiceDocsComponent"]
    }
];
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfigServiceDocsComponent"],
                app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["FuseSplashScreenServiceDocsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_index__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map