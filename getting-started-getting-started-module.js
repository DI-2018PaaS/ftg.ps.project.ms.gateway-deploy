(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"],{

/***/ "./src/app/main/documentation/getting-started/getting-started.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/getting-started.module.ts ***!
  \******************************************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/getting-started/introduction/introduction.component */ "./src/app/main/documentation/getting-started/introduction/introduction.component.ts");
/* harmony import */ var app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/getting-started/installation/installation.component */ "./src/app/main/documentation/getting-started/installation/installation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'introduction',
        component: app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["DocsGettingStartedIntroductionComponent"]
    },
    {
        path: 'installation',
        component: app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["DocsGettingStartedInstallationComponent"]
    }
];
var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["DocsGettingStartedIntroductionComponent"],
                app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["DocsGettingStartedInstallationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"installation\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Getting Started</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Installation</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div class=\"main-title\">Prerequisites</div>\r\n\r\n        <p class=\"message-box info\">\r\n            This section will give you some information about what tools you will need. You can skip to the\r\n            <b>Installation</b> section to start installing the template. We already mentioned all the prerequisites and\r\n            how to install them in the <b>Installation</b> section.\r\n        </p>\r\n\r\n        <!-- ANGULAR CLI -->\r\n        <div class=\"section-title\">Angular CLI</div>\r\n        <p>\r\n            Fuse uses <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">Angular CLI</a> for quickly\r\n            bootstrapping the application. You can check out the link for\r\n            more detailed information.\r\n        </p>\r\n\r\n        <p>\r\n            Simply, <em><b>Angular CLI</b></em> is a tool to initialize, develop, scaffold and maintain Angular\r\n            applications\r\n        </p>\r\n        <!-- / ANGULAR CLI -->\r\n\r\n        <!-- NODE.JS -->\r\n        <div class=\"section-title\">Node.js</div>\r\n        <p>\r\n            To install and use Fuse, you will need <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a>\r\n            installed to your computer. We won't get into too much detail about Node.js as it's out of the scope\r\n            of this documentation. Also you won't need to actually use Node.js, it's only required for the\r\n            development process.\r\n        </p>\r\n        <!-- / NODE.JS -->\r\n\r\n        <!-- GIT -->\r\n        <div class=\"section-title\">Git</div>\r\n        <p>\r\n            To be able to install and use Fuse, you will also need\r\n            <a href=\"https://git-scm.com/\" target=\"_blank\">Git</a> installed to your computer. Git is required for\r\n            <b>npm</b> to work correctly.\r\n        </p>\r\n        <!-- / GIT -->\r\n\r\n        <!-- NPM -->\r\n        <div class=\"section-title\">Npm - Package Manager</div>\r\n        <p>\r\n            Fuse uses <a href=\"https://www.npmjs.com/\" target=\"_blank\">npm</a> package manager to install and manage 3rd\r\n            party components and libraries.\r\n        </p>\r\n        <!-- / NPM -->\r\n\r\n        <div class=\"main-title\">Installation</div>\r\n\r\n        <!-- INSTALLING PREREQUISITES -->\r\n        <div class=\"section-title\">A. Installing Prerequisites</div>\r\n        <ol class=\"step-by-step\">\r\n            <li>\r\n                Download and install the latest <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a> from\r\n                its web site.\r\n            </li>\r\n\r\n            <li>\r\n                Download and install the latest <a href=\"https://git-scm.com/\" target=\"_blank\">Git</a> from its web\r\n                site.\r\n            </li>\r\n\r\n            <li>\r\n                To install the Angular CLI:\r\n\r\n                Open your favorite console application (Terminal, Command Prompt etc.), run the following command\r\n                and wait for it to finish:\r\n\r\n                <div class=\"mt-24\">\r\n                    <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                        <textarea #source hidden=\"hidden\">\r\n                            npm install -g @angular/cli\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n                </div>\r\n            </li>\r\n        </ol>\r\n        <p class=\"mt-24\">\r\n            Now you are ready to install the Fuse.\r\n        </p>\r\n        <!-- / PREREQUISITES -->\r\n\r\n        <!-- / INSTALLING FUSE-->\r\n        <div class=\"section-title\">B. Installing Fuse</div>\r\n        <ol class=\"step-by-step\">\r\n            <li>\r\n                Unzip the zip file that you have downloaded from Themeforest. Inside the zip file, you will find the\r\n                Skeleton Project <b>(Fuse-x.x.x-skeleton.zip)</b> along with the Demo Project <b>(Fuse-x.x.x-demo.zip)</b>,\r\n                PSD designs and a readme file.\r\n            </li>\r\n            <li>\r\n                For this documentation, we will be using the Skeleton Project which is the exact same template minus\r\n                the demo content so you don't have to clean up the demo content.\r\n            </li>\r\n            <li>\r\n                Extract the contents of the zip file <b>(Fuse-x.x.x-skeleton.zip)</b> into a folder that you will\r\n                work within. For this documentation, we will refer that as \"<em>your work folder</em>\".\r\n            </li>\r\n            <li>\r\n                Open your favorite console application (Terminal, Command Prompt etc.), navigate into your work\r\n                folder, run the following command and wait for it to finish:\r\n\r\n                <div class=\"mt-24\">\r\n                    <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                        <textarea #source hidden=\"hidden\">\r\n                            npm install\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n                </div>\r\n\r\n                <p>\r\n                    This command will install all the required Node.js modules into the <b>node_modules</b>\r\n                    directory inside your work folder.\r\n                </p>\r\n            </li>\r\n\r\n            <p>\r\n                And now, you are ready to run the Fuse for the first time. Please continue to the\r\n                <a routerLink=\"/documentation/working-with-fuse/server\">Working with Fuse</a> section.\r\n            </p>\r\n        </ol>\r\n        <!-- / INSTALLING FUSE-->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DocsGettingStartedInstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsGettingStartedInstallationComponent", function() { return DocsGettingStartedInstallationComponent; });
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

var DocsGettingStartedInstallationComponent = /** @class */ (function () {
    function DocsGettingStartedInstallationComponent() {
    }
    DocsGettingStartedInstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-installation',
            template: __webpack_require__(/*! ./installation.component.html */ "./src/app/main/documentation/getting-started/installation/installation.component.html"),
            styles: [__webpack_require__(/*! ./installation.component.scss */ "./src/app/main/documentation/getting-started/installation/installation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsGettingStartedInstallationComponent);
    return DocsGettingStartedInstallationComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"introduction\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Getting Started</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Introduction</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            This version of Fuse is <em>NOT</em> a traditional admin template, it's an Angular app written entirely\r\n            with Typescript and has no jQuery dependency.\r\n        </p>\r\n        <p>\r\n            While Fuse is a great tool and source for learning Angular, it also requires at least an entry level of\r\n            Angular knowledge so you can find your way within the source code.\r\n        </p>\r\n        <p>\r\n            Here you can find a list of core libraries, design specifications and coding standards that we use in Fuse:\r\n        </p>\r\n\r\n        <!-- GOOGLE MATERIAL DESIGN -->\r\n        <div class=\"section-title\">Google's Material Design</div>\r\n        <p>\r\n            All libraries and custom made components are following <a\r\n            href=\"https://www.google.com/design/spec/material-design/introduction.html\"\r\n            target=\"_blank\">Google's Material Design Specifications</a>.\r\n        </p>\r\n        <!-- / GOOGLE MATERIAL DESIGN -->\r\n\r\n        <!-- ANGULAR -->\r\n        <div class=\"section-title\">Angular</div>\r\n        <p>\r\n            <a href=\"https://angular.io/\" target=\"_blank\">Angular</a> is the core of Fuse.\r\n        </p>\r\n        <!-- / ANGULAR -->\r\n\r\n        <!-- ANGULAR MATERIAL 2 -->\r\n        <div class=\"section-title\">Angular Material</div>\r\n        <p>\r\n            <a href=\"https://material.angular.io/\" target=\"_blank\">Angular Material</a> is the primary UI\r\n            library of the Fuse. It's a set of Angular components, directives and services that implements Material\r\n            Design Specifications and it's in active development by Google.\r\n        </p>\r\n        <!-- / ANGULAR MATERIAL 2 -->\r\n\r\n        <!-- ANGULAR CLI -->\r\n        <div class=\"section-title\">CLI tool for Angular</div>\r\n        <p>\r\n            The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications.\r\n            You can find more information about at:\r\n            <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">angular-cli</a>\r\n        </p>\r\n        <!-- / ANGULAR CLI  -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DocsGettingStartedIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsGettingStartedIntroductionComponent", function() { return DocsGettingStartedIntroductionComponent; });
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

var DocsGettingStartedIntroductionComponent = /** @class */ (function () {
    function DocsGettingStartedIntroductionComponent() {
    }
    DocsGettingStartedIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/main/documentation/getting-started/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/main/documentation/getting-started/introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsGettingStartedIntroductionComponent);
    return DocsGettingStartedIntroductionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=getting-started-getting-started-module.js.map