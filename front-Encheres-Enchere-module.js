(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-Encheres-Enchere-module"],{

/***/ "./src/app/front/Encheres/Enchere.component.html":
/*!*******************************************************!*\
  !*** ./src/app/front/Encheres/Enchere.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n    <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n    <app-breadcrumb></app-breadcrumb>\n    <div class=\"page-layout carded left-sidebar\">\n\n        <!-- TOP BACKGROUND -->\n        <!-- / TOP BACKGROUND -->\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>\n                        <h1 style=\"font-weight: bold\">Domaine</h1>\n                    </span>\n\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n                <div content class=\"content p-24\">\n                    <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                            <h1>Domaine 1</h1>\n                        </div>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayoutGap.xs=\"10px\" fxLayout.xs=\"column\"  class=\" container\" >\n\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <a [routerLink]=\"['/Enchere','Engrais']\">\n                                            <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                        </a>\n                                    </mat-card-header>  \n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n\n\n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\" >\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <a href=\"#\">\n                                            <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                        </a>\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n\n\n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <a href=\"#\">\n                                            <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                        </a>\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">particper</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                        </div>\n                        <br>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                            <h1>Domaine 2</h1>\n                        </div>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayoutGap.xs=\"10px\" fxLayout.xs=\"column\" class=\" container\" >\n\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n\n\n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n\n\n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <!-- / CONTENT CARD -->\n        <!-- / CENTER -->\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <chbot-sidebar></chbot-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n    </div>\n</div>\n                \n"

/***/ }),

/***/ "./src/app/front/Encheres/Enchere.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/front/Encheres/Enchere.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.panel-domaine-ag {\n  background: #FCF8E3 !important; }\n"

/***/ }),

/***/ "./src/app/front/Encheres/Enchere.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/front/Encheres/Enchere.component.ts ***!
  \*****************************************************/
/*! exports provided: EnchereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnchereComponent", function() { return EnchereComponent; });
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


var EnchereComponent = /** @class */ (function () {
    /**
         * Constructor
         *
         *
         * @param {FuseSidebarService} _fuseSidebarService
         *
         */
    function EnchereComponent(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
        this.sidenavOpen = true;
        this.viewCol = 25;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
    }
    EnchereComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    EnchereComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    EnchereComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], EnchereComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EnchereComponent.prototype, "onWindowResize", null);
    EnchereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Enchere',
            template: __webpack_require__(/*! ./Enchere.component.html */ "./src/app/front/Encheres/Enchere.component.html"),
            styles: [__webpack_require__(/*! ./Enchere.component.scss */ "./src/app/front/Encheres/Enchere.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], EnchereComponent);
    return EnchereComponent;
}());



/***/ }),

/***/ "./src/app/front/Encheres/Enchere.module.ts":
/*!**************************************************!*\
  !*** ./src/app/front/Encheres/Enchere.module.ts ***!
  \**************************************************/
/*! exports provided: routes, EnchereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnchereModule", function() { return EnchereModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _Enchere_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Enchere.component */ "./src/app/front/Encheres/Enchere.component.ts");
/* harmony import */ var _detail_enchere_detail_enchere_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-enchere/detail-enchere.component */ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _Enchere_component__WEBPACK_IMPORTED_MODULE_4__["EnchereComponent"], pathMatch: 'full' },
    { path: ':name', component: _detail_enchere_detail_enchere_component__WEBPACK_IMPORTED_MODULE_5__["DetailEnchereComponent"], pathMatch: 'full' }
];
var EnchereModule = /** @class */ (function () {
    function EnchereModule() {
    }
    EnchereModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseSidebarModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["FuseDemoModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]
            ],
            declarations: [
                _Enchere_component__WEBPACK_IMPORTED_MODULE_4__["EnchereComponent"],
                _detail_enchere_detail_enchere_component__WEBPACK_IMPORTED_MODULE_5__["DetailEnchereComponent"]
            ]
        })
    ], EnchereModule);
    return EnchereModule;
}());



/***/ }),

/***/ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/front/Encheres/detail-enchere/detail-enchere.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n  <div class=\"page-layout carded left-sidebar\">\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n      <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt.md=\"m-0\">\n        <h2>Commentaires</h2>\n        <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n          <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n            <div class=\"content\">\n              <p>user 1</p>\n              <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n          <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n            <div class=\"content\">\n              <p>user 1</p>\n              <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n          <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n            <div class=\"content\">\n              <p>user 1</p>\n              <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n          <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n            <div class=\"content\">\n              <p>user 1</p>\n              <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n          <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Laisser un commentaire\"></textarea>\n              </mat-form-field>\n            </form>\n          </mat-card>\n        </div>\n      </div>\n    </fuse-sidebar>\n    \n\n    <!-- CENTER -->\n    <div class=\"center\">\n    \n      <!-- CONTENT CARD -->\n      <div class=\"content-card\">\n    \n        <!-- CONTENT TOOLBAR -->\n        <div class=\"toolbar px-24 py-8\">\n    \n          <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n            <mat-icon>menu</mat-icon>\n          </button>\n    \n          <span>\n            <h1 style=\"font-weight: bold\">Enchere</h1>\n          </span>\n    \n        </div>\n        <!-- / CONTENT TOOLBAR -->\n        <div content class=\"content p-24\">\n          <div fxLayout=\"row wrap\">\n              <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\n                <mat-card class=\"product-image\">\n                  <button mat-icon-button fxHide=\"false\" fxHide.gt-md>\n                    <mat-icon>fullscreen</mat-icon>\n                  </button>\n                  <img src=\"assets/images/Produit/engrais.jpg\"  />\n                </mat-card>\n              </div>\n            <div fxFlex=\"100\" fxFlex.gt-md=\"45\" class=\"px-4\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n\n              <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\n                <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\n              </div>\n\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Nom : &nbsp;</span><span> Acti Kote  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Origine : &nbsp;</span><span>....  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Vendeur : &nbsp;</span><span>....  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Description : &nbsp;</span><span>....  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Estimation valeur : &nbsp;</span><span>....  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Enchere courante : &nbsp;</span><span>....  </span>\n              </div>\n              <div fxLayout=\"row\">\n                <span style=\"font-weight:bold\">Nombre d'encheres : &nbsp;</span><span>....  </span>\n              </div>\n              <div class=\"py-1 lh\">\n                <a mat-raised-button href=\"#\" color=\"primary\">Contactez le vendeur</a>\n              </div>\n              \n              <div class=\"divider mt-1\"></div>\n\n              <div class=\"py-1\">\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <div>\n                      <mat-icon>visibility</mat-icon>\n                    </div>\n                    <div>\n                      352\n                    </div>\n                  </div>\n                  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <div>\n                      <mat-icon>thumb_up_alt</mat-icon>\n                    </div>\n                    <div>\n                      60\n                    </div>\n                  </div>\n                  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <div>\n                      <mat-icon>thumb_down_alt</mat-icon>\n                    </div>\n                    <div>\n                      60\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"py-1\">\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                  <div>     \n                    <a color=\"warn\" disabled mat-raised-button>Il reste <span style=\"color:red\">3h30</span>  pour cette vente</a>             \n                  </div>\n                  <div>\n                    <a href=\"#\" color=\"primary\" mat-raised-button>j'enchéris</a>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"divider\"></div>\n                <div fxLayout=\"row\" >\n                  <div fxLayout=\"colmun\" fxLayoutGap=\"20px\">\n                    <div class=\"ratings\">\n                      <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                      <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                      <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                      <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                    </div>\n                    <!-- <div>\n                      <h4>Rating breakdown</h4>\n                    </div> -->   \n                  </div>    \n                </div>\n            </div>\n          </div>\n          <div class=\"mt-2\">\n            <span style=\"margin-left:2%\"><h2>&nbsp; Encheres similaires</h2></span> \n            <div class=\"divider\"></div>\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\">\n              <div fxFlex=\"33.3\" fxFlex.gt-xs=\"45\" fxFlex.gt-md=\"35\" ngClass.xs=\"mt-2\">\n                <mat-card class=\"panel-domaine-ag\">\n                  <mat-card-title>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                  </mat-card-title>\n                  <mat-card-subtitle>\n\n\n                  </mat-card-subtitle>\n                  <mat-card-content>\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                      <div>\n                        <a href=\"#\">\n                          <img ngStyle.sm=\"font-size:80%\"  ngStyle.xs=\"font-size:40%\" src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                        </a>\n                      </div>\n                      <div>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                      </div>\n                      <div>\n                        Origine(Casamance)\n                      </div>\n                      <div>\n                        Quantité : 100kg\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-footer>\n                    <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                      <div fxLayoutAlign=\"end\">\n                        <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                      </div>\n                    </div>\n                  </mat-card-footer>\n                </mat-card>\n              </div>\n              <div fxFlex=\"33.3\" fxFlex.gt-xs=\"45\" fxFlex.gt-md=\"35\" ngClass.xs=\"mt-2\">\n                <mat-card class=\"panel-domaine-ag\">\n                  <mat-card-title>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                  </mat-card-title>\n                  <mat-card-subtitle>\n\n\n                  </mat-card-subtitle>\n                  <mat-card-content>\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                      <div>\n                        <a href=\"#\">\n                          <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                        </a>\n                      </div>\n                      <div>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                      </div>\n                      <div>\n                        Origine(Casamance)\n                      </div>\n                      <div>\n                        Quantité : 100kg\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-footer>\n                    <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                      <div fxLayoutAlign=\"end\">\n                        <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                      </div>\n                    </div>\n                  </mat-card-footer>\n                </mat-card>\n              </div>\n              <div fxFlex=\"33.3\" fxFlex.gt-xs=\"45\" fxFlex.gt-md=\"35\" ngClass.xs=\"mt-2\">\n                <mat-card class=\"panel-domaine-ag\">\n                  <mat-card-title>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                  </mat-card-title>\n                  <mat-card-subtitle>\n\n\n                  </mat-card-subtitle>\n                  <mat-card-content>\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                      <div>\n                        <a href=\"#\">\n                          <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                        </a>\n                      </div>\n                      <div>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                      </div>\n                      <div>\n                        Origine(Casamance)\n                      </div>\n                      <div>\n                        Quantité : 100kg\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                      <div>\n                        <span style=\"font-size:12px\">Début Enchere 13/10/2018</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-footer>\n                    <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                      <div fxLayoutAlign=\"end\">\n                        <a mat-raised-button color=\"primary\" href=\"#\">participer</a>\n                      </div>\n                    </div>\n                  </mat-card-footer>\n                </mat-card>\n              </div>\n            </div>\n              \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/front/Encheres/detail-enchere/detail-enchere.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n  .mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n  .mat-card.product-image img {\n    max-width: 100%; }\n  .small-carousel {\n  margin-top: 8px; }\n  .small-carousel .swiper-container {\n    padding: 2px; }\n  .small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n  .small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n  .small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n  .small-carousel .swiper-button-prev {\n    left: -10px; }\n  .small-carousel .swiper-button-next {\n    right: -10px; }\n  .mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n  .mt-16 {\n  margin-top: 16px; }\n  .details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n  .mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n  .mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n  .full-desc {\n  padding: 30px 40px; }\n  @media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url(\"data:image/svg+xml,%3Csvg fill%3D%22%23000000%22 height%3D%2236%22 viewBox%3D%220 0 24 24%22 width%3D%2236%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E    %3Cpath d%3D%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E    %3Cpath d%3D%22M0 0h24v24H0V0z%22 fill%3D%22none%22%2F%3E    %3Cpath d%3D%22M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z%22%2F%3E%3C%2Fsvg%3E\") 10 10, zoom-in; } }\n  .filter-sidenav {\n  box-shadow: 0px 7px 5px #555; }\n  .ratings {\n  color: #fbc02d; }\n  .ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/front/Encheres/detail-enchere/detail-enchere.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailEnchereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEnchereComponent", function() { return DetailEnchereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/front/app.service.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailEnchereComponent = /** @class */ (function () {
    /**
         * Constructor
         *
         *
         * @param {FuseSidebarService} _fuseSidebarService
         *
         */
    function DetailEnchereComponent(appService, activatedRoute, _fuseSidebarService) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this._fuseSidebarService = _fuseSidebarService;
        this.sidenavOpen = true;
        this.viewCol = 25;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
        this.config = {};
    }
    DetailEnchereComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    DetailEnchereComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.getProductById(params['id']);
        });
        this.getRelatedProducts();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    DetailEnchereComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    };
    DetailEnchereComponent.prototype.getProductById = function (id) {
        var _this = this;
        this.appService.getProductById(id).subscribe(function (data) {
            _this.product = data;
            _this.image = data.images[0].medium;
            _this.zoomImage = data.images[0].big;
            setTimeout(function () {
                _this.config.observer = true;
                // this.directiveRef.setIndex(0);
            });
        });
    };
    DetailEnchereComponent.prototype.getRelatedProducts = function () {
        var _this = this;
        this.appService.getProducts('related').subscribe(function (data) {
            _this.relatedProducts = data;
        });
    };
    DetailEnchereComponent.prototype.selectImage = function (image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    };
    DetailEnchereComponent.prototype.onMouseMove = function (e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    };
    DetailEnchereComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    };
    DetailEnchereComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailEnchereComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            //email sent
        }
    };
    DetailEnchereComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], DetailEnchereComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"])
    ], DetailEnchereComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], DetailEnchereComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DetailEnchereComponent.prototype, "onWindowResize", null);
    DetailEnchereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-enchere',
            template: __webpack_require__(/*! ./detail-enchere.component.html */ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.html"),
            styles: [__webpack_require__(/*! ./detail-enchere.component.scss */ "./src/app/front/Encheres/detail-enchere/detail-enchere.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["FuseSidebarService"]])
    ], DetailEnchereComponent);
    return DetailEnchereComponent;
}());



/***/ })

}]);
//# sourceMappingURL=front-Encheres-Enchere-module.js.map