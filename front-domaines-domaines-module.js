(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-domaines-domaines-module"],{

/***/ "./src/app/front/domaines/domaine-activite/domaine-activite.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-activite/domaine-activite.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n  <div class=\"page-layout carded left-sidebar\">\n\n    <!-- TOP BACKGROUND -->\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n      <!-- SIDEBAR CONTENT -->    \n          <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt.md=\"m-0\">\n            <h2>Commentaires</h2>\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n              <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n                <div class=\"content\">\n                  <p>user 1</p>\n                  <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n                </div>\n              </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n              <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n                <div class=\"content\">\n                  <p>user 1</p>\n                  <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n                </div>\n              </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n              <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n                <div class=\"content\">\n                  <p>user 1</p>\n                  <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n                </div>\n              </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n              <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\n                <div class=\"content\">\n                  <p>user 1</p>\n                  <span class=\"text-muted m-0\">30 Days money return guarantee</span>\n                </div>\n              </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\n              <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Laisser un commentaire\"></textarea>\n                  </mat-form-field>\n                </form>\n              </mat-card>\n            </div>\n          </div>\n      <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n      <!-- CONTENT CARD -->\n      <div class=\"content-card\">\n\n        <!-- CONTENT TOOLBAR -->\n        <div class=\"toolbar px-24 py-8\">\n\n          <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n            <mat-icon>menu</mat-icon>\n          </button>\n\n          <span>\n            <h1 style=\"font-weight: bold\">Domaine</h1>\n          </span>\n\n        </div>\n        <!-- / CONTENT TOOLBAR -->\n        <div content class=\"content p-24\">\n          <!-- CONTENT -->\n            <div fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-a\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Agriculture</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/agriculture.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                    </textarea>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-b\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Elevage</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/elevage.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                                  </textarea>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-c\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Peche</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/peche.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                                  </textarea>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-d\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Artisanat</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/artisanat.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                                  </textarea>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-e\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Technologie</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/tech.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                                  </textarea>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"start\">\n                <div fxLayoutAlign=\"start\">\n                  <mat-card class=\"panel-domaine-e\">\n                    <mat-card-header>\n                    </mat-card-header>\n                    <mat-card-title>\n                      <div fxLayoutAlign=\"center center\">Commerce</div>\n                    </mat-card-title>\n                    <div fxLayoutAlign=\"center center\">\n                      <img src=\"assets/images/domaine/commerce.png\" alt=\"\" width=\"100px\" height=\"50px\">\n                    </div>\n                  </mat-card>\n                </div>\n                <div fxLayoutAlign=\"start\">\n                  <textarea class=\"panel\" disabled rows=\"12.5\" cols=\"53\" style=\"border: none;font-style: italic;padding: 2%;\">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.At w3schools.com you will learn how to make a website.\n                  </textarea>\n                </div>\n              </div>\n            </div>\n          <br>\n        </div>\n        <!-- / CONTENT -->\n      </div>\n    </div>\n    <!-- / CONTENT CARD -->\n    <!-- / CENTER -->\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n\n      <!-- SIDEBAR CONTENT -->\n      <div class=\"content p-24\">\n        <chbot-sidebar></chbot-sidebar>\n      </div>\n      <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/front/domaines/domaine-activite/domaine-activite.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-activite/domaine-activite.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.panel-domaine-b {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.panel-domaine-c {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.panel-domaine-d {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.panel-domaine-e {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.panel-domaine-f {\n  width: 15em !important;\n  background-color: #2e3807 !important;\n  color: white; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url(\"data:image/svg+xml,%3Csvg fill%3D%22%23000000%22 height%3D%2236%22 viewBox%3D%220 0 24 24%22 width%3D%2236%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E    %3Cpath d%3D%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E    %3Cpath d%3D%22M0 0h24v24H0V0z%22 fill%3D%22none%22%2F%3E    %3Cpath d%3D%22M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z%22%2F%3E%3C%2Fsvg%3E\") 10 10, zoom-in; } }\n\n.filter-sidenav {\n  box-shadow: 0px 7px 5px #555; }\n\n.ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n\n.panel {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/front/domaines/domaine-activite/domaine-activite.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-activite/domaine-activite.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DomaineActiviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomaineActiviteComponent", function() { return DomaineActiviteComponent; });
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


var DomaineActiviteComponent = /** @class */ (function () {
    /**
      * Constructor
      *
      *
      * @param {FuseSidebarService} _fuseSidebarService
      *
      */
    function DomaineActiviteComponent(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
        this.sidenavOpen = true;
        this.brands = [];
        this.viewCol = 25;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
    }
    DomaineActiviteComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    DomaineActiviteComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    DomaineActiviteComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], DomaineActiviteComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DomaineActiviteComponent.prototype, "onWindowResize", null);
    DomaineActiviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domaine-activite',
            template: __webpack_require__(/*! ./domaine-activite.component.html */ "./src/app/front/domaines/domaine-activite/domaine-activite.component.html"),
            styles: [__webpack_require__(/*! ./domaine-activite.component.scss */ "./src/app/front/domaines/domaine-activite/domaine-activite.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], DomaineActiviteComponent);
    return DomaineActiviteComponent;
}());



/***/ }),

/***/ "./src/app/front/domaines/domaine-produit/domaine-produit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-produit/domaine-produit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n  <div class=\"page-layout carded left-sidebar\">\n\n    <!-- TOP BACKGROUND -->\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n      <!-- SIDEBAR CONTENT -->\n      <div class=\"content p-24\">\n        <fuse-demo-sidebar></fuse-demo-sidebar>\n      </div>\n      <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n      <!-- CONTENT CARD -->\n      <div class=\"content-card\">\n\n        <!-- CONTENT TOOLBAR -->\n        <div class=\"toolbar px-24 py-8\">\n\n          <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n            <mat-icon>menu</mat-icon>\n          </button>\n\n          <span>\n            <h1 style=\"font-weight: bold\">Produits et services</h1>\n          </span>\n\n        </div>\n        <!-- / CONTENT TOOLBAR -->\n        <div content class=\"content p-24\">\n          <!-- CONTENT -->\n          <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\n            <div fxLayout=\"column\" fxFlex=\"100\">\n              <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\n                <div fxLayout=\"column\">\n            \n                  <div class=\"products-tabs\">\n                    <mat-tab-group mat-stretch-tabs *ngFor=\"let p of produitList\">\n                      <mat-tab label=\"Meilleur vente\">\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                          <div>\n                            <mat-card class=\"product-item text-center\">\n                              <mat-chip-list>\n                                <!-- <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip> -->\n                              </mat-chip-list>\n                              <a [routerLink]=\"['#']\" class=\"image-link\">\n                                <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\n                              </a>\n                              <h4 class=\"category text-muted\">Agriculture</h4>\n                              <a [routerLink]=\"['#']\" class=\"title text-truncate\">\n                                Cirot\n                              </a>\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                                  <p class=\" text-muted\">\n                                    <span>12500 CFA</span>\n                                  </p>\n                                </div>\n                                <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                                  <div class=\"ratings\">\n                                    <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                    <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                    <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                    <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                  </div>\n                                  <p class=\"ratings-count text-muted\">4 ratings</p>\n                                </div>\n                              </div>\n                              <div class=\"divider mt-2\"></div>\n                              <div class=\"icons\">\n                                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                                  <div>\n                                    <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                      <mat-icon>shopping_cart</mat-icon>\n                                    </button>\n                                    <button mat-icon-button matTooltip=\"Detail produit\">\n                                      <mat-icon>remove_red_eye</mat-icon>\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                            </mat-card>\n                          </div>\n                          <div>\n                            \n                          </div>\n            \n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </div>\n                </div>\n                <br>\n                <mat-divider></mat-divider>\n              </div>\n            </div>\n\n\n\n\n\n          </div>\n          <br>\n        </div>\n\n        <!-- / CONTENT -->\n      </div>\n\n\n    </div>\n    <!-- / CONTENT CARD -->\n    <!-- / CENTER -->\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n\n      <!-- SIDEBAR CONTENT -->\n      <div class=\"content p-24\">\n        <chbot-sidebar></chbot-sidebar>\n      </div>\n      <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/front/domaines/domaine-produit/domaine-produit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-produit/domaine-produit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.products-tabs {\n  margin-top: 30px; }\n\n.ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/front/domaines/domaine-produit/domaine-produit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/front/domaines/domaine-produit/domaine-produit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DomaineProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomaineProduitComponent", function() { return DomaineProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DomaineProduitComponent = /** @class */ (function () {
    /**
       * Constructor
       *
       *
       * @param {FuseSidebarService} _fuseSidebarService
       *
       */
    function DomaineProduitComponent(_fuseSidebarService, db) {
        var _this = this;
        this._fuseSidebarService = _fuseSidebarService;
        this.db = db;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
        this.dbPath = 'produits-db';
        this.produitRef = null;
        this.produitList = [];
        this.produit = {};
        this.db.list(this.dbPath, function (ref) { return ref
            .orderByChild('isValid')
            .equalTo(true); })
            .valueChanges()
            .subscribe(function (res) {
            _this.produitList = res;
            console.log("produits: ", _this.produitList);
        });
    }
    DomaineProduitComponent.prototype.ngOnInit = function () {
    };
    DomaineProduitComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    DomaineProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domaine-produit',
            template: __webpack_require__(/*! ./domaine-produit.component.html */ "./src/app/front/domaines/domaine-produit/domaine-produit.component.html"),
            styles: [__webpack_require__(/*! ./domaine-produit.component.scss */ "./src/app/front/domaines/domaine-produit/domaine-produit.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], DomaineProduitComponent);
    return DomaineProduitComponent;
}());



/***/ }),

/***/ "./src/app/front/domaines/domaine/domaine.component.html":
/*!***************************************************************!*\
  !*** ./src/app/front/domaines/domaine/domaine.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar\">\n\n  <!-- TOP BACKGROUND -->\n  <!-- <div class=\"top-bg\" style=\"padding-bottom: 4px\"><h4>Acceuil</h4></div> -->\n  <!-- / TOP BACKGROUND -->\n\n  <!-- SIDEBAR -->\n  <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n    <!-- SIDEBAR CONTENT -->\n    <div class=\"content p-24\">\n      <fuse-demo-sidebar></fuse-demo-sidebar>\n    </div>\n    <!-- / SIDEBAR CONTENT -->\n\n  </fuse-sidebar>\n  <!-- / SIDEBAR -->\n\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card\">\n\n      <!-- CONTENT TOOLBAR -->\n      <div class=\"toolbar px-24 py-8\">\n\n        <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <span>\n          <h1 style=\"font-weight: bold; color:white !important;\">Domaine</h1>\n        </span>\n\n      </div>\n      <!-- / CONTENT TOOLBAR -->\n\n      <!-- CONTENT -->\n        <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\n          <div fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"py-2\">\n            <mat-accordion>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    <h4>Produits & services</h4>\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutGap=\"3px\">\n                  <div fxLayout=\"row\">\n                    <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\" class=\"prodServBackground\">\n                      <mat-card class=\"product-item text-center\">\n                        <mat-chip-list>\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\n                        </mat-chip-list>\n                        <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\n                        </a>\n                        <h4 class=\"category text-muted\">Agriculture</h4>\n                        <span>Quantité</span>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\n                          <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center start\">\n                            <p class=\" text-muted\">\n                              <span>12500 CFA</span>\n                            </p>\n                          </div>\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                            <div class=\"ratings\">\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                            </div>\n                            <p class=\"ratings-count text-muted\">5 ratings</p>\n                          </div>\n                        </div>\n                        <div class=\"divider mt-2\"></div>\n                        <div class=\"icons\">\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                            <div>\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                <mat-icon>shopping_cart</mat-icon>\n                              </button>\n                              <button mat-icon-button matTooltip=\"Detail produit\">\n                                <mat-icon>remove_red_eye</mat-icon>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </mat-card>\n                    </div>\n                    <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\">\n                      <mat-card class=\"product-item text-center\">\n                        <mat-chip-list>\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\n                        </mat-chip-list>\n                        <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\n                        </a>\n                        <h4 class=\"category text-muted\">Agriculture</h4>\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\n                          Cirot\n                        </a>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                            <p class=\" text-muted\">\n                              <span>12500 CFA</span>\n                            </p>\n                          </div>\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                            <div class=\"ratings\">\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                            </div>\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\n                          </div>\n                        </div>\n                        <div class=\"divider mt-2\"></div>\n                        <div class=\"icons\">\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                            <div>\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                <mat-icon>shopping_cart</mat-icon>\n                              </button>\n                              <button mat-icon-button matTooltip=\"Detail produit\">\n                                <mat-icon>remove_red_eye</mat-icon>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </mat-card>\n                    </div>\n                  </div>\n                  <div fxLayoutAlign=\"end\"><a [routerLink]=\"['/domaines', 'agriculture','produits']\" style=\"text-decoration:none\">Plus</a></div>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    <h4>Appels d'offres</h4>\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card fxFlex=\"100\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                    <div>\n                      <img mat-card-image src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Seller_Bg.png\" style=\"width:48px\">\n                    </div>\n                    <div>\n                      <span style=\"font-size:16px; color:red\"> (Appels d'offres N)</span>\n                      <br>\n        \n                    </div>\n                  </div>\n        \n                  <mat-card-title>\n                    <div fxLayout=\"row\" fxLayoutGap=\"300px\">\n                      <div>\n                        <div>\n                          <mat-divider></mat-divider>\n                        </div>\n                        <div class=\"py-8\">Objet</div>\n                      </div>\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"20px\">\n                        <div fxLayout=\"column\">\n                          <div>&nbsp;&nbsp;</div>\n                          <div style=\"font-size: 28px; font-weight:bold\">28\n                            <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">Lots</SUP>\n                          </div>\n                        </div>\n                        <div fxLayout=\"column\">\n                          <div style=\"font-size:13px\">Date limite</div>\n                          <div style=\"color:red\">09.09.2018</div>\n                        </div>\n                        <div fxLayout=\"column\">\n                          <div style=\"font-size:13px\">Budget</div>\n                          <div>75 000\n                            <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                          </div>\n                        </div>\n                        <div fxLayout=\"column\">\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\n                        </div>\n                      </div>\n                    </div>\n        \n                  </mat-card-title>\n                  <mat-card-content>\n                    <div fxLayout=\"row\" fxLayoutGap=\"25px\">\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-footer>\n                    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"2px\">\n                      <div fxFlex=\"50\">\n                        <a style=\"float:left; width:100%\" color=\"warn\" mat-raised-button routerLink=\".\">Details de l'offre</a>\n                      </div>\n                      <div fxFlex=\"50\">\n                        <a style=\"float:right; width:100%\" color=\"primary\" mat-raised-button routerLink=\".\">repondre à l'offre</a>\n                      </div>\n                    </div>\n                  </mat-card-footer>\n                </mat-card>\n                <br>\n              </mat-expansion-panel>\n              <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    <h4>Enchère en cours</h4>\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card>\n                  <mat-card-title>\n                    <div fxLayout=\"row\" fxLayoutGap=\"100px\">\n                      <div fxLayout=\"row\" fxFlex=\"1 6 50%\" class=\"prod\">\n                        <div class=\"prodOrServ-content\" fxLayout=\"row\">\n                          <div fxFlex=\"50\">\n                            <img style=\"height:90%\" src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" width=\"140%\" class=\"img-seller\">\n                          </div>\n                          <div fxLayout=\"column\">\n                            <div>\n                              &nbsp;\n                              <mat-divider style=\"position: relative; left: 5px; width: 74%;\"></mat-divider>\n                              &nbsp;\n                              <span class=\"title-enchere\">(Enchère n)</span>\n                              &nbsp;\n                              <mat-divider style=\"position: relative; left: 5px; width: 95%;\"></mat-divider>\n                              <br>\n                              <span class=\"px-4\">Nom Produit</span>\n                              <br>\n                              <span class=\"px-4 quantite\"> Quantité</span>\n                            </div>\n                            <div fxLayout=\"row\">\n                              <div>\n                                <span class=\"px-4\" style=\"font-size:12px\">Descriptif du produit</span>\n                                <p class=\"descriptif-prod px-4\">\n                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi quaerat laboriosam.\n                                </p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\n                          <div fxLayout=\"column\">\n                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère courante</div>\n                            <div style=\"color:red ; font-size:14px; font-weight:bold\">1 800 000\n                              <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                            </div>\n                          </div>\n                          <div fxLayout=\"column\">\n                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Estimation valeur</div>\n                            <div style=\"font-size:14px; font-weight:bold\">1 545 877\n                              <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                            </div>\n                          </div>\n                          <div fxLayout=\"column\">\n                            <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\n                          </div>\n                        </div>\n        \n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\n                          <div fxLayout=\"column\">\n                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère</div>\n                            <div style=\"font-size:16px; font-weight:bold\">\n                              98\n                            </div>\n                          </div>\n                          <div fxLayout=\"column\">\n                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Vues</div>\n                            <div style=\"font-size:16px; font-weight:bold\">\n                              127\n                            </div>\n                          </div>\n                          <div fxLayout=\"column\" class=\"chrono-enchere\" fxFlex fxLayoutAlign=\"space-between bottom\">\n                            <div class=\"chrono-content\">02:10:00.0</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n        \n                  </mat-card-title>\n                  <mat-card-content>\n                    <div fxLayout=\"row\" fxLayoutGap=\"25px\" fxFlex>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                      <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                        <div>\n                          <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\n                        </div>\n                        <div>\n                          <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\n                        </div>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-footer>\n                    <div fxLayout=\"row\" fxLayoutGap=\"5px\" fxFlex=\"100\">\n                      <div fxFlex=\"50\">\n                        <button style=\"float:left; background-color:black; width: 100%\" class=\"enchere-btn\" mat-raised-button routerLink=\".\">\n                          <span class=\"bottom-text-enchere\">Details de l'offre</span>\n                        </button>\n                      </div>\n                      <div fxFlex=\"50\">\n                        <button style=\"float:right ; background-color:green; width: 100%\" class=\"enchere-btn-success\" fxLayoutAlign=\"right\" mat-raised-button\n                          routerLink=\".\">\n                          <span class=\"bottom-text-enchere\">repondre à l'offre </span>\n                          <mat-icon style=\"color:white\">done</mat-icon>\n                        </button>\n                      </div>\n                    </div>\n                  </mat-card-footer>\n                </mat-card>\n                <br>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </div>\n        </div>\n      <!-- / CONTENT -->\n\n    </div>\n    <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n  <!-- SIDEBAR -->\n  <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n\n    <!-- SIDEBAR CONTENT -->\n    <div class=\"content p-24\">\n      <chbot-sidebar></chbot-sidebar>\n    </div>\n    <!-- / SIDEBAR CONTENT -->\n\n  </fuse-sidebar>\n  <!-- / SIDEBAR -->\n</div>\n \n  \n\n\n\n"

/***/ }),

/***/ "./src/app/front/domaines/domaine/domaine.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/front/domaines/domaine/domaine.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.products-tabs {\n  margin-top: 30px; }\n\n.ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n\n.descriptif-prod {\n  font-size: 10px;\n  text-justify: auto;\n  margin-top: 0;\n  text-align: justify; }\n\n.bottom-text-enchere {\n  color: white; }\n\n.chrono-content {\n  border: 2px solid red;\n  padding: 9px;\n  border-radius: 25px; }\n\n.title-enchere {\n  color: red; }\n\n.quantite {\n  font-size: 16px;\n  color: green; }\n\n.prod {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/front/domaines/domaine/domaine.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/front/domaines/domaine/domaine.component.ts ***!
  \*************************************************************/
/*! exports provided: DomaineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomaineComponent", function() { return DomaineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomaineComponent = /** @class */ (function () {
    function DomaineComponent(db) {
        var _this = this;
        this.db = db;
        this.sidenavOpen = true;
        this.viewCol = 25;
        this.panelOpenState = true;
        this.dbPath = 'produits-db';
        this.produitRef = null;
        this.produitList = [];
        this.produit = {};
        this.db.list(this.dbPath, function (ref) { return ref
            .orderByChild('isValid')
            .equalTo(true); })
            .valueChanges()
            .subscribe(function (res) {
            _this.produitList = res;
            console.log("produits: ", _this.produitList);
        });
    }
    DomaineComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    DomaineComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    DomaineComponent.prototype.toggleSidebar = function (name) {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], DomaineComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DomaineComponent.prototype, "onWindowResize", null);
    DomaineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domaine',
            template: __webpack_require__(/*! ./domaine.component.html */ "./src/app/front/domaines/domaine/domaine.component.html"),
            styles: [__webpack_require__(/*! ./domaine.component.scss */ "./src/app/front/domaines/domaine/domaine.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DomaineComponent);
    return DomaineComponent;
}());



/***/ }),

/***/ "./src/app/front/domaines/domaines-list/domaines-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/front/domaines/domaines-list/domaines-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- CONTENT -->\n    <div class=\"content p-24\">\n      <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\" style=\"background:#ccc !important\">\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\" >\n          <div>\n            <a [routerLink]=\"['/domaines', 'agriculture']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-a\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/agriculture.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -35%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Agriculture\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n          <div>\n            <a [routerLink]=\"['/domaines', 'elevage']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-b\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/elevage.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -35%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Elevage\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n      \n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n          <div>\n            <a [routerLink]=\"['/domaines', 'peche']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-c\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/peche.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -56%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Peche\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n       \n       \n          <div>\n            <a [routerLink]=\"['/domaines', 'artisanat']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-a1\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/artisanat.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -35%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Artisanat\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n          <div>\n            <a [routerLink]=\"['/domaines', 'tech']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-b1\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/tech.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -35%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Technologie\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n        \n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n          <div>\n            <a [routerLink]=\"['/domaines', 'commerce']\" style=\"text-decoration:none\">\n              <mat-card class=\"panel-domaine-c1\">\n                <mat-card-header>\n                  <img src=\"assets/images/domaine/commerce.png\" alt=\"\" width=\"100px\" style=\"height:100%; margin-left: -35%;\">\n                </mat-card-header>\n                <mat-card-title>\n                  Commerce\n                </mat-card-title>\n                <mat-card-content>\n                  &nbsp; &nbsp;\n                </mat-card-content>\n                <mat-card-footer>\n                  &nbsp;\n                </mat-card-footer>\n              </mat-card>\n            </a>\n          </div>\n         </div>\n        <br>\n      \n     \n        <mat-divider></mat-divider>\n      </div>\n    </div>\n    <!-- / CONTENT -->"

/***/ }),

/***/ "./src/app/front/domaines/domaines-list/domaines-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/front/domaines/domaines-list/domaines-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.panel-domaine-b {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.panel-domaine-b1 {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.panel-domaine-c {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.panel-domaine-c1 {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.panel-domaine-a1 {\n  width: 15em !important;\n  height: 15em !important;\n  font-size: 6px; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.mat-card-title {\n  font-size: 10px;\n  font-weight: 400;\n  margin-top: 2%;\n  color: white;\n  text-align: center; }\n\n.mat-card {\n  background-color: #2e3807 !important;\n  box-shadow: 4px 4px 0px #aaa; }\n"

/***/ }),

/***/ "./src/app/front/domaines/domaines-list/domaines-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/front/domaines/domaines-list/domaines-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: DomainesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainesListComponent", function() { return DomainesListComponent; });
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

var DomainesListComponent = /** @class */ (function () {
    function DomainesListComponent() {
    }
    DomainesListComponent.prototype.ngOnInit = function () {
    };
    DomainesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domaines-list',
            template: __webpack_require__(/*! ./domaines-list.component.html */ "./src/app/front/domaines/domaines-list/domaines-list.component.html"),
            styles: [__webpack_require__(/*! ./domaines-list.component.scss */ "./src/app/front/domaines/domaines-list/domaines-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DomainesListComponent);
    return DomainesListComponent;
}());



/***/ }),

/***/ "./src/app/front/domaines/domaines.component.html":
/*!********************************************************!*\
  !*** ./src/app/front/domaines/domaines.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n    <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n    <app-breadcrumb></app-breadcrumb>\n    <div class=\"page-layout carded left-sidebar\">\n\n        <!-- TOP BACKGROUND -->\n        <!-- <div class=\"top-bg\" style=\"padding-bottom: 4px\"><h4>Acceuil</h4></div> -->\n        <!-- / TOP BACKGROUND -->\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span><h1 style=\"font-weight: bold\">Domaine</h1> </span>\n\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"domaine-l\" style=\"margin-top:-1%\">\n                     <app-domaines-list></app-domaines-list>\n                </div>\n                <!-- / CONTENT -->\n               \n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n    \n        <!-- / CENTER -->\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n        \n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <chbot-sidebar></chbot-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/front/domaines/domaines.component.scss":
/*!********************************************************!*\
  !*** ./src/app/front/domaines/domaines.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.content-card {\n  background-image: url('fond2.jpg') !important;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/front/domaines/domaines.component.ts":
/*!******************************************************!*\
  !*** ./src/app/front/domaines/domaines.component.ts ***!
  \******************************************************/
/*! exports provided: DomainesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainesComponent", function() { return DomainesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DomainesComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    /**
         * Constructor
         *
         * @param {FuseSidebarService} _fuseSidebarService
         */
    function DomainesComponent(_fuseSidebarService, _fuseConfigService) {
        this._fuseSidebarService = _fuseSidebarService;
        this._fuseConfigService = _fuseConfigService;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DomainesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.fuseConfig = config;
        });
    };
    /**
      * On destroy
      */
    DomainesComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    /**
       * Toggle sidebar
       *
       * @param name
       */
    DomainesComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    DomainesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domaines',
            template: __webpack_require__(/*! ./domaines.component.html */ "./src/app/front/domaines/domaines.component.html"),
            styles: [__webpack_require__(/*! ./domaines.component.scss */ "./src/app/front/domaines/domaines.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"], _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"]])
    ], DomainesComponent);
    return DomainesComponent;
}());



/***/ }),

/***/ "./src/app/front/domaines/domaines.module.ts":
/*!***************************************************!*\
  !*** ./src/app/front/domaines/domaines.module.ts ***!
  \***************************************************/
/*! exports provided: routes, DomaineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomaineModule", function() { return DomaineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _domaines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domaines.component */ "./src/app/front/domaines/domaines.component.ts");
/* harmony import */ var _domaine_domaine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domaine/domaine.component */ "./src/app/front/domaines/domaine/domaine.component.ts");
/* harmony import */ var _domaine_activite_domaine_activite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domaine-activite/domaine-activite.component */ "./src/app/front/domaines/domaine-activite/domaine-activite.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _domaines_list_domaines_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domaines-list/domaines-list.component */ "./src/app/front/domaines/domaines-list/domaines-list.component.ts");
/* harmony import */ var _domaine_produit_domaine_produit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./domaine-produit/domaine-produit.component */ "./src/app/front/domaines/domaine-produit/domaine-produit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _domaines_component__WEBPACK_IMPORTED_MODULE_4__["DomainesComponent"], pathMatch: 'full' },
    { path: ':name', component: _domaine_domaine_component__WEBPACK_IMPORTED_MODULE_5__["DomaineComponent"] },
    { path: 'activites/listes', component: _domaine_activite_domaine_activite_component__WEBPACK_IMPORTED_MODULE_6__["DomaineActiviteComponent"] },
    { path: ':name/produits', component: _domaine_produit_domaine_produit_component__WEBPACK_IMPORTED_MODULE_11__["DomaineProduitComponent"] }
];
var DomaineModule = /** @class */ (function () {
    function DomaineModule() {
    }
    DomaineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_7__["FuseSidebarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_8__["FuseDemoModule"]
            ],
            declarations: [
                _domaines_component__WEBPACK_IMPORTED_MODULE_4__["DomainesComponent"],
                _domaine_domaine_component__WEBPACK_IMPORTED_MODULE_5__["DomaineComponent"],
                _domaine_activite_domaine_activite_component__WEBPACK_IMPORTED_MODULE_6__["DomaineActiviteComponent"],
                _domaines_list_domaines_list_component__WEBPACK_IMPORTED_MODULE_10__["DomainesListComponent"],
                _domaine_produit_domaine_produit_component__WEBPACK_IMPORTED_MODULE_11__["DomaineProduitComponent"]
            ]
        })
    ], DomaineModule);
    return DomaineModule;
}());



/***/ })

}]);
//# sourceMappingURL=front-domaines-domaines-module.js.map