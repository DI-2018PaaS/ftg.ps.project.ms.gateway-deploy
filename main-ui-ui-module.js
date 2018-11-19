(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ui-ui-module"],{

/***/ "./src/app/main/ui/colors/colors.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Colors</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\"\r\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\r\n\r\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color.key}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\r\n\r\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\r\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n                   target=\"_blank\">Material Design Color Palette</a> for your convenient. You can use them with pretty\r\n                much every element.\r\n            </div>\r\n\r\n            <div class=\"color-header colored-bg p-8\"\r\n                 [ngClass]=\"selectedColor\"\r\n                 fxLayout=\"column\">\r\n\r\n                <div fxLayout=\"row\">\r\n                    <h3 class=\"text-capitalize p-8\" fxFlex=\"30\">{{selectedColor}}</h3>\r\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background and Color</h4>\r\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background only</h4>\r\n                    <h4 class=\"p-8\" fxFlex=\"128px\">Color only</h4>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\">\r\n\r\n                <div class=\"colored-bg p-8\" fxLayout=\"row\" [ngClass]=\"selectedColor\">\r\n\r\n                    <div class=\"colored-bg p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        Default\r\n                    </div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{selectedColor}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        .{{selectedColor + '-bg'}}\r\n                    </div>\r\n\r\n                    <div class=\"p-8\"\r\n                         [ngClass]=\"selectedColor + '-' + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\r\n                        .{{selectedColor + '-' + '-fg'}}\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\"\r\n                 *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\r\n\r\n                <div class=\"colored-bg p-8\"\r\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\r\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\r\n                     [ngClass]=\"selectedColor + '-' + hue\">\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor + '-' + hue\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{selectedColor + '-' + hue}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        .{{selectedColor + '-' + hue + '-bg'}}\r\n                    </div>\r\n\r\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\r\n                         [ngClass]=\"selectedColor + '-' + hue + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\r\n                        .{{selectedColor + '-' + hue + '-fg'}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/colors/colors.component.scss":
/*!******************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content .color-tabs-content .color-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n\n:host .content .color-tabs-content .color .fg-box {\n  background-color: white; }\n\n:host .content .color-tabs-content .colored-bg {\n  transition: background-color 400ms ease; }\n"

/***/ }),

/***/ "./src/app/main/ui/colors/colors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.ts ***!
  \****************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ColorsComponent() {
        // Set the defaults
        this.colors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__["MatColors"].all;
        this._updateSelectedColor('primary');
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Select color
     *
     * @param selected
     */
    ColorsComponent.prototype.selectColor = function (selected) {
        this._updateSelectedColor(selected.tab.textLabel);
    };
    /**
     * Update selected color
     *
     * @param colorName
     * @private
     */
    ColorsComponent.prototype._updateSelectedColor = function (colorName) {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__["MatColors"].getColor(this.selectedColor)[500];
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/main/ui/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/main/ui/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/colors/colors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/main/ui/colors/colors.module.ts ***!
  \*************************************************/
/*! exports provided: UIColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIColorsModule", function() { return UIColorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/colors/colors.component */ "./src/app/main/ui/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'colors',
        component: app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]
    }
];
var UIColorsModule = /** @class */ (function () {
    function UIColorsModule() {
    }
    UIColorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__["FuseDemoModule"]
            ]
        })
    ], UIColorsModule);
    return UIColorsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Forms</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div class=\"h1\">\r\n            Reactive Forms\r\n        </div>\r\n\r\n        <p class=\"pt-16 pb-32\">\r\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\r\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\r\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\r\n            reactive patterns, testing, and validation.\r\n        </p>\r\n\r\n        <div class=\"mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-md=\"row\">\r\n\r\n            <!-- REACTIVE FORM EXAMPLE -->\r\n\r\n            <form class=\"mat-card mat-elevation-z4 p-24 mr-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\r\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\r\n\r\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <input matInput placeholder=\"Company (disabled)\" formControlName=\"company\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"50\">\r\n                        <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                        <mat-error>First Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"50\">\r\n                        <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                        <mat-error>Last Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                            1600 Amphitheatre Pkwy\r\n                        </textarea>\r\n                        <mat-error>Address is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\r\n                        <mat-error>Address 2 is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"33\">\r\n                        <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                        <mat-error>City is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"34\">\r\n                        <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                        <mat-error>State is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex=\"33\">\r\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\r\n                               formControlName=\"postalCode\" maxlength=\"5\" required>\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                        <mat-error>Postal Code is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field fxFlex=\"100\">\r\n                        <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                            <mat-option [value]=\"'United States of America'\">\r\n                                United States of America\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'United Kingdom'\">\r\n                                United Kingdom\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Russia'\">\r\n                                Russia\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'China'\">\r\n                                China\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Japan'\">\r\n                                Japan\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Turkey'\">\r\n                                Turkey\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error>Country is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <!-- / REACTIVE FORM EXAMPLE -->\r\n\r\n            <div class=\"mat-card form-errors-model p-24 mat-elevation-z4\">\r\n                <div class=\"h2 mb-24\">Reactive Form Model</div>\r\n                <pre><code>{{form.getRawValue() | json}}</code></pre>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-32\">\r\n            Horizontal Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\r\n        </p>\r\n\r\n        <div class=\"horizontal-stepper-wrapper\">\r\n\r\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\r\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                                <mat-error>First Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                                <mat-error>Last Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error>Address is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                                <mat-error>City is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                                <mat-error>State is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\r\n                                       maxlength=\"5\" required>\r\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                <mat-error>Postal Code is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-horizontal-stepper>\r\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-48\">\r\n            Vertical Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\r\n        </p>\r\n\r\n        <div class=\"vertical-stepper-wrapper\">\r\n\r\n            <!-- VERTICAL STEPPER EXAMPLE -->\r\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep1\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                                <mat-error>First Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                                <mat-error>Last Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep2\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error>Address is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep3\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                                <mat-error>City is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\r\n                                <mat-error>State is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field fxFlex=\"100\">\r\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\r\n                                       maxlength=\"5\" required>\r\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                <mat-error>Postal Code is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-vertical-stepper>\r\n            <!-- / VERTICAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content form {\n  width: 100%;\n  max-width: 800px !important; }\n\n:host .content .form-errors-model {\n  flex: 1; }\n\n:host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n"

/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.ts ***!
  \**************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function FormsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FormsComponent.prototype.ngOnInit = function () {
        // Reactive Form
        this.form = this._formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.horizontalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.horizontalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]]
        });
        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.verticalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.verticalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]]
        });
    };
    /**
     * On destroy
     */
    FormsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Finish the horizontal stepper
     */
    FormsComponent.prototype.finishHorizontalStepper = function () {
        alert('You have finished the horizontal stepper!');
    };
    /**
     * Finish the vertical stepper
     */
    FormsComponent.prototype.finishVerticalStepper = function () {
        alert('You have finished the vertical stepper!');
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/main/ui/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/main/ui/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/forms/forms.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/ui/forms/forms.module.ts ***!
  \***********************************************/
/*! exports provided: UIFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIFormsModule", function() { return UIFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/forms/forms.component */ "./src/app/main/ui/forms/forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'forms',
        component: app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
    }
];
var UIFormsModule = /** @class */ (function () {
    function UIFormsModule() {
    }
    UIFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
            ]
        })
    ], UIFormsModule);
    return UIFormsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Helper Classes</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Padding & Margin Helpers\">\r\n\r\n                <helper-classes-padding-margin></helper-classes-padding-margin>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Width & Height Helpers\">\r\n\r\n                <helper-classes-width-height></helper-classes-width-height>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.ts ***!
  \********************************************************************/
/*! exports provided: HelperClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function() { return HelperClassesComponent; });
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

var HelperClassesComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesComponent() {
    }
    HelperClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes',
            template: __webpack_require__(/*! ./helper-classes.component.html */ "./src/app/main/ui/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__(/*! ./helper-classes.component.scss */ "./src/app/main/ui/helper-classes/helper-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesComponent);
    return HelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.module.ts ***!
  \*****************************************************************/
/*! exports provided: UIHelperClassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHelperClassesModule", function() { return UIHelperClassesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/helper-classes/helper-classes.component */ "./src/app/main/ui/helper-classes/helper-classes.component.ts");
/* harmony import */ var app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
/* harmony import */ var app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/helper-classes/tabs/width-height/width-height.component */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'helper-classes',
        component: app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__["HelperClassesComponent"]
    }
];
var UIHelperClassesModule = /** @class */ (function () {
    function UIHelperClassesModule() {
    }
    UIHelperClassesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__["HelperClassesComponent"],
                app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_6__["HelperClassesPaddingMarginComponent"],
                app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_7__["HelperClassesWidthHeightComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"],
            ],
        })
    ], UIHelperClassesModule);
    return UIHelperClassesModule;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Padding Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>p-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-0\">No padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-4\">4px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-12\">12px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Direction Specific Padding Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-0</span>\r\n                <span>pr-0</span>\r\n                <span>pb-0</span>\r\n                <span>pl-0</span>\r\n                <span>px-0</span>\r\n                <span>py-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-0\">0 padding from top</span>\r\n                    <span class=\"pr-0\">0 padding from right</span>\r\n                    <span class=\"pb-0\">0 padding from bottom</span>\r\n                    <span class=\"pl-0\">0 padding from left</span>\r\n                    <span class=\"px-0\">0 padding from left and right</span>\r\n                    <span class=\"py-0\">0 padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-4</span>\r\n                <span>pr-4</span>\r\n                <span>pb-4</span>\r\n                <span>pl-4</span>\r\n                <span>px-4</span>\r\n                <span>py-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-4\">4px padding from top</span>\r\n                    <span class=\"pr-4\">4px padding from right</span>\r\n                    <span class=\"pb-4\">4px padding from bottom</span>\r\n                    <span class=\"pl-4\">4px padding from left</span>\r\n                    <span class=\"px-4\">4px padding from left and right</span>\r\n                    <span class=\"py-4\">4px padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Margin Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>m-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-0\">No margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-4\">4px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-12\">12px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Direction Specific Margin Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-0</span>\r\n                <span>mr-0</span>\r\n                <span>mb-0</span>\r\n                <span>ml-0</span>\r\n                <span>mx-0</span>\r\n                <span>my-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-0\">0 margin from top</span>\r\n                    <span class=\"mr-0\">0 margin from right</span>\r\n                    <span class=\"mb-0\">0 margin from bottom</span>\r\n                    <span class=\"ml-0\">0 margin from left</span>\r\n                    <span class=\"mx-0\">0 margin from left and right</span>\r\n                    <span class=\"my-0\">0 margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-4</span>\r\n                <span>mr-4</span>\r\n                <span>mb-4</span>\r\n                <span>ml-4</span>\r\n                <span>mx-4</span>\r\n                <span>my-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-4\">4px margin from top</span>\r\n                    <span class=\"mr-4\">4px margin from right</span>\r\n                    <span class=\"mb-4\">4px margin from bottom</span>\r\n                    <span class=\"ml-4\">4px margin from left</span>\r\n                    <span class=\"mx-4\">4px margin from left and right</span>\r\n                    <span class=\"my-4\">4px margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .source-code code {\n    background: none !important; }\n  :host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-padding-margin .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HelperClassesPaddingMarginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesPaddingMarginComponent", function() { return HelperClassesPaddingMarginComponent; });
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

var HelperClassesPaddingMarginComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesPaddingMarginComponent() {
    }
    HelperClassesPaddingMarginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes-padding-margin',
            template: __webpack_require__(/*! ./padding-margin.component.html */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html"),
            styles: [__webpack_require__(/*! ./padding-margin.component.scss */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesPaddingMarginComponent);
    return HelperClassesPaddingMarginComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-width-height\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Width Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>w-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-0\">0px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>w-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100\">100px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-25-p\">25% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100-p\">100% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Height Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>h-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-0\">0px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>h-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100\">100px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-25-p\">25% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100-p\">100% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .source-code code {\n    background: none !important; }\n  :host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-width-height .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts ***!
  \************************************************************************************/
/*! exports provided: HelperClassesWidthHeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesWidthHeightComponent", function() { return HelperClassesWidthHeightComponent; });
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

var HelperClassesWidthHeightComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesWidthHeightComponent() {
    }
    HelperClassesWidthHeightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes-width-height',
            template: __webpack_require__(/*! ./width-height.component.html */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html"),
            styles: [__webpack_require__(/*! ./width-height.component.scss */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesWidthHeightComponent);
    return HelperClassesWidthHeightComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Icons</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\" href=\"https://material.angular.io\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\r\n        </div>\r\n\r\n        <div *ngIf=\"!loading\">\r\n\r\n            <div fxLayout=\"column\">\r\n\r\n                <div class=\"m-32\">\r\n                    <mat-form-field class=\"w-100-p\">\r\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\">\r\n\r\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                         *ngFor=\"let icon of filteredIcons\">\r\n                        <mat-icon class=\"secondary-text s-48\">{{icon}}</mat-icon>\r\n                        <div class=\"icon-name secondary-text mt-8\">{{icon}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1200px; }\n  :host .content .icon-holder {\n    width: 112px;\n    height: 120px; }\n  :host .content .icon-holder .icon-name {\n      font-size: 12px;\n      word-wrap: break-word;\n      width: 100px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.ts ***!
  \**************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IconsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function IconsComponent(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.loading = true;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    IconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpClient.get('api/icons')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
        });
    };
    /**
     * On destroy
     */
    IconsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Filter icons
     *
     * @param event
     */
    IconsComponent.prototype.filterIcons = function (event) {
        var value = event.target.value;
        this.filteredIcons = this.icons.filter(function (icon) {
            return icon.includes(value);
        });
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/main/ui/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/main/ui/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/icons/icons.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/ui/icons/icons.module.ts ***!
  \***********************************************/
/*! exports provided: UIIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIIconsModule", function() { return UIIconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/icons/icons.component */ "./src/app/main/ui/icons/icons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'icons',
        component: app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
    }
];
var UIIconsModule = /** @class */ (function () {
    function UIIconsModule() {
    }
    UIIconsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], UIIconsModule);
    return UIIconsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\r\n\r\n    <h2>Blank Page</h2>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.ts ***!
  \***************************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
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

var BlankComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/main/ui/page-layouts/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/main/ui/page-layouts/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardedFullWidth1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidth1Component", function() { return CardedFullWidth1Component; });
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

var CardedFullWidth1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidth1Component() {
    }
    CardedFullWidth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-1',
            template: __webpack_require__(/*! ./full-width-1.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-1.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidth1Component);
    return CardedFullWidth1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardedFullWidth2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidth2Component", function() { return CardedFullWidth2Component; });
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

var CardedFullWidth2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidth2Component() {
    }
    CardedFullWidth2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-2',
            template: __webpack_require__(/*! ./full-width-2.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html"),
            styles: [__webpack_require__(/*! ./full-width-2.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidth2Component);
    return CardedFullWidth2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with tabs and content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CardedFullWidthTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed1Component", function() { return CardedFullWidthTabbed1Component; });
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

var CardedFullWidthTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidthTabbed1Component() {
    }
    CardedFullWidthTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-tabbed-1',
            template: __webpack_require__(/*! ./full-width-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidthTabbed1Component);
    return CardedFullWidthTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with tabs and inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CardedFullWidthTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed2Component", function() { return CardedFullWidthTabbed2Component; });
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

var CardedFullWidthTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidthTabbed2Component() {
    }
    CardedFullWidthTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-tabbed-2',
            template: __webpack_require__(/*! ./full-width-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidthTabbed2Component);
    return CardedFullWidthTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CardedLeftSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar1Component", function() { return CardedLeftSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-1',
            template: __webpack_require__(/*! ./left-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebar1Component);
    return CardedLeftSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CardedLeftSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar2Component", function() { return CardedLeftSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-2',
            template: __webpack_require__(/*! ./left-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebar2Component);
    return CardedLeftSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Left sidebar with tabs and content scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CardedLeftSidebarTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed1Component", function() { return CardedLeftSidebarTabbed1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebarTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebarTabbed1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebarTabbed1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebarTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-tabbed-1',
            template: __webpack_require__(/*! ./left-sidebar-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebarTabbed1Component);
    return CardedLeftSidebarTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Left sidebar with tabs and inner scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CardedLeftSidebarTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed2Component", function() { return CardedLeftSidebarTabbed2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebarTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebarTabbed2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebarTabbed2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebarTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-tabbed-2',
            template: __webpack_require__(/*! ./left-sidebar-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebarTabbed2Component);
    return CardedLeftSidebarTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardedRightSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebar1Component", function() { return CardedRightSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-1',
            template: __webpack_require__(/*! ./right-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebar1Component);
    return CardedRightSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-2\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardedRightSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebar2Component", function() { return CardedRightSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-2',
            template: __webpack_require__(/*! ./right-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebar2Component);
    return CardedRightSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Right sidebar with tabs and content scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardedRightSidebarTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed1Component", function() { return CardedRightSidebarTabbed1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebarTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebarTabbed1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebarTabbed1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebarTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-tabbed-1',
            template: __webpack_require__(/*! ./right-sidebar-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebarTabbed1Component);
    return CardedRightSidebarTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-2\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Right sidebar with tabs and inner scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardedRightSidebarTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed2Component", function() { return CardedRightSidebarTabbed2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebarTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebarTabbed2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebarTabbed2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebarTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-tabbed-2',
            template: __webpack_require__(/*! ./right-sidebar-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebarTabbed2Component);
    return CardedRightSidebarTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/page-layouts.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/page-layouts.module.ts ***!
  \*************************************************************/
/*! exports provided: UIPageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIPageLayoutsModule", function() { return UIPageLayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-1/full-width-1.component */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-2/full-width-2.component */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/full-width-1/full-width-1.component */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts");
/* harmony import */ var app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/main/ui/page-layouts/blank/blank.component */ "./src/app/main/ui/page-layouts/blank/blank.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    // Carded
    {
        path: 'page-layouts/carded/full-width-1',
        component: app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__["CardedFullWidth1Component"]
    },
    {
        path: 'page-layouts/carded/full-width-2',
        component: app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__["CardedFullWidth2Component"]
    },
    {
        path: 'page-layouts/carded/full-width-tabbed-1',
        component: app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__["CardedFullWidthTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/full-width-tabbed-2',
        component: app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidthTabbed2Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-1',
        component: app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__["CardedLeftSidebar1Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-tabbed-1',
        component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__["CardedLeftSidebarTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-2',
        component: app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__["CardedLeftSidebar2Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-tabbed-2',
        component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebarTabbed2Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-1',
        component: app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__["CardedRightSidebar1Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-tabbed-1',
        component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__["CardedRightSidebarTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-2',
        component: app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__["CardedRightSidebar2Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-tabbed-2',
        component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebarTabbed2Component"]
    },
    // Simple
    {
        path: 'page-layouts/simple/full-width-1',
        component: app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__["SimpleFullWidth1Component"]
    },
    {
        path: 'page-layouts/simple/full-width-tabbed-1',
        component: app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["SimpleFullWidthTabbed1Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-1',
        component: app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__["SimpleLeftSidebar1Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-2',
        component: app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__["SimpleLeftSidebar2Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-3',
        component: app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__["SimpleLeftSidebar3Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-4',
        component: app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar4Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-1',
        component: app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__["SimpleRightSidebar1Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-2',
        component: app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__["SimpleRightSidebar2Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-3',
        component: app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__["SimpleRightSidebar3Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-4',
        component: app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar4Component"]
    },
    // Blank
    {
        path: 'page-layouts/blank',
        component: app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__["BlankComponent"]
    }
];
var UIPageLayoutsModule = /** @class */ (function () {
    function UIPageLayoutsModule() {
    }
    UIPageLayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__["CardedFullWidth1Component"],
                app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__["CardedFullWidth2Component"],
                app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__["CardedFullWidthTabbed1Component"],
                app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidthTabbed2Component"],
                app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__["CardedLeftSidebar1Component"],
                app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__["CardedLeftSidebar2Component"],
                app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__["CardedLeftSidebarTabbed1Component"],
                app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebarTabbed2Component"],
                app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__["CardedRightSidebar1Component"],
                app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__["CardedRightSidebar2Component"],
                app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__["CardedRightSidebarTabbed1Component"],
                app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebarTabbed2Component"],
                app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__["SimpleFullWidth1Component"],
                app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["SimpleFullWidthTabbed1Component"],
                app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__["SimpleLeftSidebar1Component"],
                app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__["SimpleLeftSidebar2Component"],
                app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__["SimpleLeftSidebar3Component"],
                app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar4Component"],
                app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__["SimpleRightSidebar1Component"],
                app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__["SimpleRightSidebar2Component"],
                app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__["SimpleRightSidebar3Component"],
                app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar4Component"],
                app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__["BlankComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_28__["FuseSidebarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__["FuseDemoModule"]
            ]
        })
    ], UIPageLayoutsModule);
    return UIPageLayoutsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <h2>Full width</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n        <fuse-demo-content></fuse-demo-content>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts ***!
  \************************************************************************************/
/*! exports provided: SimpleFullWidth1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFullWidth1Component", function() { return SimpleFullWidth1Component; });
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

var SimpleFullWidth1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function SimpleFullWidth1Component() {
    }
    SimpleFullWidth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-fullwidth-1',
            template: __webpack_require__(/*! ./full-width-1.component.html */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-1.component.scss */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFullWidth1Component);
    return SimpleFullWidth1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple tabbed\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\">\r\n        <h2>Tabbed</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Tab 1\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 2\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 3\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SimpleFullWidthTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFullWidthTabbed1Component", function() { return SimpleFullWidthTabbed1Component; });
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

var SimpleFullWidthTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function SimpleFullWidthTabbed1Component() {
    }
    SimpleFullWidthTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-full-width-tabbed-1',
            template: __webpack_require__(/*! ./full-width-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFullWidthTabbed1Component);
    return SimpleFullWidthTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-left-sidebar-1')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar1Component", function() { return SimpleLeftSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-1',
            template: __webpack_require__(/*! ./left-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar1Component);
    return SimpleLeftSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-scroll\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-left-sidebar-2')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar2Component", function() { return SimpleLeftSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-2',
            template: __webpack_require__(/*! ./left-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar2Component);
    return SimpleLeftSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-sidebar\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-left-sidebar-3')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Left inner sidebar with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-elevation-z4 p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar3Component", function() { return SimpleLeftSidebar3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar3Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar3Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar3Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-4',
            template: __webpack_require__(/*! ./left-sidebar-3.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-3.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar3Component);
    return SimpleLeftSidebar3Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-sidebar inner-scroll\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-left-sidebar-4')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Left inner sidebar with inner scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-elevation-z4 p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar4Component", function() { return SimpleLeftSidebar4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar4Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar4Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar4Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-4',
            template: __webpack_require__(/*! ./left-sidebar-4.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-4.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar4Component);
    return SimpleLeftSidebar4Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-right-sidebar-1')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar1Component", function() { return SimpleRightSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-1',
            template: __webpack_require__(/*! ./right-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar1Component);
    return SimpleRightSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-scroll\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-right-sidebar-2')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar2Component", function() { return SimpleRightSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-2',
            template: __webpack_require__(/*! ./right-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar2Component);
    return SimpleRightSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-sidebar\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-right-sidebar-3')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Right inner sidebar with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-elevation-z4 p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar3Component", function() { return SimpleRightSidebar3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar3Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar3Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar3Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-4',
            template: __webpack_require__(/*! ./right-sidebar-3.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-3.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar3Component);
    return SimpleRightSidebar3Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-sidebar inner-scroll\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-right-sidebar-4')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Right inner sidebar with inner scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-elevation-z4 p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar4Component", function() { return SimpleRightSidebar4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar4Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar4Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar4Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-4',
            template: __webpack_require__(/*! ./right-sidebar-4.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-4.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar4Component);
    return SimpleRightSidebar4Component;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Blockquotes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote class=\"reverse\">\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote class=\"reverse\">\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Lists</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ol>\r\n                    <li>Ordered list item</li>\r\n                    <li>\r\n                        Ordered list item\r\n                        <ol>\r\n                            <li>Ordered list item</li>\r\n                            <li>Ordered list item</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>Ordered list item</li>\r\n                    <li>Ordered list item</li>\r\n                </ol>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ol>\r\n                        <li>Ordered list item</li>\r\n                        <li>\r\n                            Ordered list item\r\n                            <ol>\r\n                                <li>Ordered list item</li>\r\n                                <li>Ordered list item</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>Ordered list item</li>\r\n                        <li>Ordered list item</li>\r\n                    </ol>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ul>\r\n                    <li>Unordered list item</li>\r\n                    <li>\r\n                        Unordered list item\r\n                        <ul>\r\n                            <li>Unordered list item</li>\r\n                            <li>Unordered list item</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>Unordered list item</li>\r\n                    <li>Unordered list item</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ul>\r\n                        <li>Unordered list item</li>\r\n                        <li>\r\n                            Unordered list item\r\n                            <ul>\r\n                                <li>Unordered list item</li>\r\n                                <li>Unordered list item</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>Unordered list item</li>\r\n                        <li>Unordered list item</li>\r\n                    </ul>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Definition Lists</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <dl>\r\n                    <dt>Definition term</dt>\r\n                    <dd>This is the definition description</dd>\r\n\r\n                    <dt>Another definition term</dt>\r\n                    <dd>This is also another definition description</dd>\r\n                </dl>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <dl>\r\n                        <dt>Definition term</dt>\r\n                        <dd>This is the definition description</dd>\r\n\r\n                        <dt>Another definition term</dt>\r\n                        <dd>This is also another definition description</dd>\r\n                    </dl>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Change log</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n\r\n                <div class=\"changelog\">\r\n\r\n                    <div class=\"entry\">\r\n\r\n                        <div class=\"title\">\r\n                            <span class=\"version\">v1.0.0</span>\r\n                            <span class=\"date\">(2018-05-08)</span>\r\n                        </div>\r\n\r\n                        <div class=\"groups\">\r\n\r\n                            <div class=\"breaking-changes\">\r\n                                <span class=\"title\">Breaking changes</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"new\">\r\n                                <span class=\"title\">New</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"improved\">\r\n                                <span class=\"title\">Improved</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"fixed\">\r\n                                <span class=\"title\">Fixed</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"changelog\">\r\n\r\n                        <div class=\"entry\">\r\n\r\n                            <div class=\"title\">\r\n                                <span class=\"version\">v1.0.0</span>\r\n                                <span class=\"date\">(2018-05-08)</span>\r\n                            </div>\r\n\r\n                            <div class=\"groups\">\r\n\r\n                                <div class=\"breaking-changes\">\r\n                                    <span class=\"title\">Breaking changes</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"new\">\r\n                                    <span class=\"title\">New</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"improved\">\r\n                                    <span class=\"title\">Improved</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"fixed\">\r\n                                    <span class=\"title\">Fixed</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px; }\n  :host #typography-blockquotes-lists .source-code code {\n    background: none !important; }\n  :host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-blockquotes-lists .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypographyBlockquotesListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyBlockquotesListsComponent", function() { return TypographyBlockquotesListsComponent; });
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

var TypographyBlockquotesListsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyBlockquotesListsComponent() {
    }
    TypographyBlockquotesListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-blockquotes-lists',
            template: __webpack_require__(/*! ./blockquotes-lists.component.html */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html"),
            styles: [__webpack_require__(/*! ./blockquotes-lists.component.scss */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyBlockquotesListsComponent);
    return TypographyBlockquotesListsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-headings\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Material design typography classes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">112px</div>\r\n                <span class=\"mat-display-4\">Display 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-4\">Display 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">56px</div>\r\n                <span class=\"mat-display-3\">Display 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-3\">Display 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">45px</div>\r\n                <span class=\"mat-display-2\">Display 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-2\">Display 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">34px</div>\r\n                <span class=\"mat-display-1\">Display 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-1\">Display 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"mat-headline\">Headline</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-headline\">Headline</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"mat-title\">Title</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-title\">Title</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"mat-subheading-2\">Subheading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"mat-subheading-1\">Subheading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-1\">Body 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-1\">Body 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-2\">Body 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-2\">Body 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"mat-caption\">Caption</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-caption\">Caption</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Standard Headings</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"h1\">Heading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h1>Heading 1</h1>\r\n                    <span class=\"h1\">Heading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"h2\">Heading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h2>Heading 2</h2>\r\n                    <span class=\"h2\">Heading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"h3\">Heading 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h3>Heading 3</h3>\r\n                    <span class=\"h3\">Heading 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"h4\">Heading 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h4>Heading 4</h4>\r\n                    <span class=\"h4\">Heading 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">13px</div>\r\n                <span class=\"h5\">Heading 5</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h5>Heading 5</h5>\r\n                    <span class=\"h5\">Heading 5</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"h6\">Heading 6</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h6>Heading 6</h6>\r\n                    <span class=\"h6\">Heading 6</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .source-code code {\n    background: none !important; }\n  :host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-headings .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.ts ***!
  \************************************************************************/
/*! exports provided: TypographyHeadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyHeadingsComponent", function() { return TypographyHeadingsComponent; });
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

var TypographyHeadingsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyHeadingsComponent() {
    }
    TypographyHeadingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-headings',
            template: __webpack_require__(/*! ./headings.component.html */ "./src/app/main/ui/typography/tabs/headings/headings.component.html"),
            styles: [__webpack_require__(/*! ./headings.component.scss */ "./src/app/main/ui/typography/tabs/headings/headings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyHeadingsComponent);
    return TypographyHeadingsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-helpers\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Font Weight</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\r\n                <span class=\"font-weight-100\">font-weight: 100</span>\r\n                <span>...</span>\r\n                <span class=\"font-weight-900\">font-weight: 900</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-weight-100\">100 font weight</span>\r\n                    ...\r\n                    <span class=\"font-weight-900\">900 font weight</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Font Size</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span class=\"font-size-20\">font-size: 20</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-size-20\">font-size: 20</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Line Height</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span>line-height: 2</span>\r\n                <span>...</span>\r\n                <span>line-height: 120</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"line-height-2\">2px line height</span>\r\n                    ...\r\n                    <span class=\"line-height-120\">120px line height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Other helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-left\">Left aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-left\">Left aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-center\">Center aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-center\">Center aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-right\">Right aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-right\">Right aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-boxed\">Boxed text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-boxed\">Boxed text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-strike\">Strike-through text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-strike\">Strike-through text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-italic\">Italic text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-italic\">Italic text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-semibold\">Semi-bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-semibold\">Semi-bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-bold\">Bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-bold\">Bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\r\n                    convallis dui porta massa.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"text-truncate\">\r\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta\r\n                        massa.\r\n                    </span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .source-code code {\n    background: none !important; }\n  :host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-helpers .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.ts ***!
  \**********************************************************************/
/*! exports provided: TypographyHelpersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyHelpersComponent", function() { return TypographyHelpersComponent; });
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

var TypographyHelpersComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyHelpersComponent() {
    }
    TypographyHelpersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-helpers',
            template: __webpack_require__(/*! ./helpers.component.html */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.html"),
            styles: [__webpack_require__(/*! ./helpers.component.scss */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyHelpersComponent);
    return TypographyHelpersComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a <mark>marked</mark> text.</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a <mark>marked</mark> text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <del>This is a deleted text.</del>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <del>This is a deleted text.</del>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><s>This is a strike-through text.</s></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <s>This is a strike-through text.</s>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><u>This is an underlined text.</u></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <u>This is an underlined text.</u>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <small>This is a small text.</small>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <small>This is a small text.</small>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><strong>This is a strong text.</strong></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <strong>This is a strong text.</strong>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><em>This is an italic text.</em></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <em>This is an italic text.</em>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-capitalize\">capitalized</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-capitalized\">capitalized</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .source-code code {\n    background: none !important; }\n  :host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-inline-text-elements .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TypographyInlineTextElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyInlineTextElementsComponent", function() { return TypographyInlineTextElementsComponent; });
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

var TypographyInlineTextElementsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyInlineTextElementsComponent() {
    }
    TypographyInlineTextElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-inline-text-elements',
            template: __webpack_require__(/*! ./inline-text-elements.component.html */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html"),
            styles: [__webpack_require__(/*! ./inline-text-elements.component.scss */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyInlineTextElementsComponent);
    return TypographyInlineTextElementsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-message-boxes\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Message Boxes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box\">\r\n                    This is a standard message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box\">\r\n                        This is a standard message box\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box error\">\r\n                    This is an alert message box!\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box error\">\r\n                        This is an alert message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box warning\">\r\n                    This is a warning message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box warning\">\r\n                        This is a warning message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box success\">\r\n                    This is a success message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box success\">\r\n                        This is a success message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box info\">\r\n                    This is a info message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box info\">\r\n                        This is a info message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-message-boxes .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px; }\n  :host #typography-message-boxes .source-code code {\n    background: none !important; }\n  :host #typography-message-boxes .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-message-boxes .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-message-boxes .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TypographyMessageBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyMessageBoxesComponent", function() { return TypographyMessageBoxesComponent; });
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

var TypographyMessageBoxesComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyMessageBoxesComponent() {
    }
    TypographyMessageBoxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-message-boxes',
            template: __webpack_require__(/*! ./message-boxes.component.html */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html"),
            styles: [__webpack_require__(/*! ./message-boxes.component.scss */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyMessageBoxesComponent);
    return TypographyMessageBoxesComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Typography</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Headings\">\r\n\r\n                <typography-headings></typography-headings>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Inline Text Elements\">\r\n\r\n                <typography-inline-text-elements></typography-inline-text-elements>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Blockquotes & Lists\">\r\n\r\n                <typography-blockquotes-lists></typography-blockquotes-lists>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Message Boxes\">\r\n\r\n                <typography-message-boxes></typography-message-boxes>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Helpers\">\r\n\r\n                <typography-helpers></typography-helpers>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.ts ***!
  \************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/main/ui/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/main/ui/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/typography.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/ui/typography/typography.module.ts ***!
  \*********************************************************/
/*! exports provided: UITypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UITypographyModule", function() { return UITypographyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/typography/typography.component */ "./src/app/main/ui/typography/typography.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/typography/tabs/headings/headings.component */ "./src/app/main/ui/typography/tabs/headings/headings.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/ui/typography/tabs/message-boxes/message-boxes.component */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/ui/typography/tabs/helpers/helpers.component */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'typography',
        component: app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__["TypographyComponent"]
    }
];
var UITypographyModule = /** @class */ (function () {
    function UITypographyModule() {
    }
    UITypographyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__["TypographyComponent"],
                app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_6__["TypographyHeadingsComponent"],
                app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_7__["TypographyInlineTextElementsComponent"],
                app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_8__["TypographyBlockquotesListsComponent"],
                app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_9__["TypographyMessageBoxesComponent"],
                app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_10__["TypographyHelpersComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], UITypographyModule);
    return UITypographyModule;
}());



/***/ }),

/***/ "./src/app/main/ui/ui.module.ts":
/*!**************************************!*\
  !*** ./src/app/main/ui/ui.module.ts ***!
  \**************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/ui/forms/forms.module */ "./src/app/main/ui/forms/forms.module.ts");
/* harmony import */ var app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/ui/icons/icons.module */ "./src/app/main/ui/icons/icons.module.ts");
/* harmony import */ var app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/ui/typography/typography.module */ "./src/app/main/ui/typography/typography.module.ts");
/* harmony import */ var app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/helper-classes/helper-classes.module */ "./src/app/main/ui/helper-classes/helper-classes.module.ts");
/* harmony import */ var app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/page-layouts/page-layouts.module */ "./src/app/main/ui/page-layouts/page-layouts.module.ts");
/* harmony import */ var app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/colors/colors.module */ "./src/app/main/ui/colors/colors.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_1__["UIFormsModule"],
                app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__["UIIconsModule"],
                app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_3__["UITypographyModule"],
                app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_4__["UIHelperClassesModule"],
                app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_5__["UIPageLayoutsModule"],
                app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_6__["UIColorsModule"]
            ]
        })
    ], UIModule);
    return UIModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-ui-ui-module.js.map