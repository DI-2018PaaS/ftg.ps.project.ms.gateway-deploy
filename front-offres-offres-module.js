(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-offres-offres-module"],{

/***/ "./src/app/front/offres/details-offre/details-offre.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/front/offres/details-offre/details-offre.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n    <app-breadcrumb></app-breadcrumb>\n  <div class=\"page-layout carded left-sidebar\">\n\n    <!-- TOP BACKGROUND -->\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <span>\n                    <h1 style=\"font-weight: bold\">Domaine</h1>\n                </span>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n            <div content class=\"content p-24\">\n\n              <div fxLayout=\"row\">\n                <h2>Description Appel d'Offre</h2>\n              </div>\n              <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"40px\">\n                  \n                  <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n                    <mat-grid-tile fxLayoutAlign=\"start\"><h3><span style=\"float:left\">Nom</span> </h3></mat-grid-tile>\n                    <mat-grid-tile>Engrais (Référence 00011111)</mat-grid-tile>\n                    <mat-grid-tile><h3>Description</h3></mat-grid-tile>\n                    <mat-grid-tile>Engrais haute qualité</mat-grid-tile>\n                    <mat-grid-tile><h3>Origine</h3></mat-grid-tile>\n                    <mat-grid-tile>casamance</mat-grid-tile>\n                    <mat-grid-tile><h3>Emetteur Offre</h3></mat-grid-tile>\n                    <mat-grid-tile>Amadou Thiam</mat-grid-tile>\n                    <mat-grid-tile><h3>Contact</h3></mat-grid-tile>\n                    <mat-grid-tile>774858685</mat-grid-tile>\n                    <mat-grid-tile><h3>Date début</h3></mat-grid-tile>\n                    <mat-grid-tile>14/10/2000</mat-grid-tile>\n                    <mat-grid-tile><h3>Date fin</h3></mat-grid-tile>\n                    <mat-grid-tile>14/10/2010</mat-grid-tile>\n                  </mat-grid-list>\n              </div>\n            <br>\n        </div>\n  \n    </div>\n    </div>\n    <!-- / CONTENT CARD -->\n    <!-- / CENTER -->\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n    \n      <!-- SIDEBAR CONTENT -->\n      <div class=\"content p-24\">\n        <chbot-sidebar></chbot-sidebar>\n      </div>\n      <!-- / SIDEBAR CONTENT -->\n    \n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/front/offres/details-offre/details-offre.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/front/offres/details-offre/details-offre.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 90%;\n  margin: 2%; }\n\nmat-grid-tile {\n  background: lightblue; }\n"

/***/ }),

/***/ "./src/app/front/offres/details-offre/details-offre.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/front/offres/details-offre/details-offre.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailsOffreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsOffreComponent", function() { return DetailsOffreComponent; });
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

var ELEMENT_DATA = [
    {
        position: 1, nom: 'Hydrogen', Description: 'Engrais haute qualité',
        Origine: 'Casamance', Emetteur_offre: 'Amadou Thiam', Contact: '77445285',
        Date_debut_Appel_d_Offre: '13 / 10 / 2000', Date_fin_Appel_d_Offre: '12/01/2005'
    }
];
var DetailsOffreComponent = /** @class */ (function () {
    function DetailsOffreComponent() {
        this.displayedColumns = ['position', 'nom', 'Description', 'Origine', 'Emetteur_offre', 'Contact',
            'Date_debut_Appel_d_Offre', 'Date_fin_Appel_d_Offre'];
        this.dataSource = ELEMENT_DATA;
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
    DetailsOffreComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    DetailsOffreComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    DetailsOffreComponent.prototype.toggleSidebar = function (name) {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], DetailsOffreComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DetailsOffreComponent.prototype, "onWindowResize", null);
    DetailsOffreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-offre',
            template: __webpack_require__(/*! ./details-offre.component.html */ "./src/app/front/offres/details-offre/details-offre.component.html"),
            styles: [__webpack_require__(/*! ./details-offre.component.scss */ "./src/app/front/offres/details-offre/details-offre.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsOffreComponent);
    return DetailsOffreComponent;
}());



/***/ }),

/***/ "./src/app/front/offres/offres.component.html":
/*!****************************************************!*\
  !*** ./src/app/front/offres/offres.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n    <app-breadcrumb></app-breadcrumb>\n    <div class=\"page-layout carded left-sidebar\">\n\n        <!-- TOP BACKGROUND -->\n        <!-- / TOP BACKGROUND -->\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>\n                        <h1 style=\"font-weight: bold\">Domaine</h1>\n                    </span>\n\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n                <div content class=\"content p-24\">\n            \n            \n                    <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\n                        <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                            <h1>Domaine 1</h1>\n                        </div>\n                        <mat-divider></mat-divider>\n                            <div fxLayout=\"row\" fxLayoutGap.xs=\"10px\" fxLayout.xs=\"column\">\n                            \n                                <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                    <mat-card class=\"panel-domaine-ag\">\n                                        <mat-card-header>\n                                            <a [routerLink]=\"['/offres',1]\">\n                                                <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                            </a>\n                                        </mat-card-header>\n                                        <mat-card-title>\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                        </mat-card-title>\n                                        <mat-card-subtitle>\n                                \n                                \n                                        </mat-card-subtitle>\n                                        <mat-card-content>\n                                            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                                <div>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                </div>\n                                                <div>\n                                                    Origine(Casamance)\n                                                </div>\n                                                <div>\n                                                    Quantité : 100kg\n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                                </div>\n                                            </div>\n                                        </mat-card-content>\n                                        <mat-card-footer>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                                <div>\n                                                    <a mat-raised-button href=\"#\">tagger</a>\n                                                </div>\n                                                <div fxLayoutAlign=\"end\">\n                                                    <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                                </div>\n                                            </div>\n                                        </mat-card-footer>\n                                    </mat-card>\n                                </div>\n                                <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                    <mat-card class=\"panel-domaine-ag\">\n                                        <mat-card-header>\n                                            <a href=\"#\">\n                                                <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                            </a>                            </mat-card-header>\n                                        <mat-card-title>\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div> \n                                        </mat-card-title>\n                                        <mat-card-subtitle>\n                                            \n                                            \n                                        </mat-card-subtitle>\n                                        <mat-card-content>\n                                            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                                <div>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                </div>\n                                                <div>\n                                                Origine(Casamance) \n                                                </div>\n                                                <div>\n                                                Quantité : 100kg \n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>   \n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                                </div>\n                                            </div>\n                                        </mat-card-content>\n                                        <mat-card-footer>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                                <div>\n                                                    <a mat-raised-button href=\"#\">tagger</a>\n                                                </div>\n                                                <div fxLayoutAlign=\"end\">\n                                                    <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                                </div>\n                                            </div>\n                                        </mat-card-footer>\n                                    </mat-card>\n                                </div>\n                                <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                    <mat-card class=\"panel-domaine-ag\">\n                                        <mat-card-header>\n                                            <a href=\"#\">\n                                                <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                            </a>                            \n                                        </mat-card-header>\n                                        <mat-card-title>\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                        </mat-card-title>\n                                        <mat-card-content>\n                                            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                                <div>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                    <mat-icon>star_border</mat-icon>\n                                                </div>\n                                                <div>\n                                                    Origine(Casamance)\n                                                </div>\n                                                <div>\n                                                    Quantité : 100kg\n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                                </div>\n                                                <div>\n                                                    <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                                </div>\n                                            </div>\n                                        </mat-card-content>\n                                        <mat-card-footer>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                                <div>\n                                                    <a mat-raised-button href=\"#\">tagger</a>\n                                                </div>\n                                                <div fxLayoutAlign=\"end\">\n                                                    <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                                </div>\n                                            </div>\n                                        </mat-card-footer>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        <br>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                            <h1>Domaine 2</h1>\n                        </div>\n                        <mat-divider></mat-divider>\n                        <div fxLayout=\"row\" fxLayoutGap.xs=\"10px\" fxLayout.xs=\"column\">\n                        \n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n                        \n                        \n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div>\n                                                <a mat-raised-button href=\"#\">tagger</a>\n                                            </div>\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-subtitle>\n                        \n                        \n                                    </mat-card-subtitle>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div>\n                                                <a mat-raised-button href=\"#\">tagger</a>\n                                            </div>\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                            <div fxFlex=\"100px\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\n                                <mat-card class=\"panel-domaine-ag\">\n                                    <mat-card-header>\n                                        <img src=\"../../../assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" alt=\"\">\n                                    </mat-card-header>\n                                    <mat-card-title>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">Engrais</div>\n                                    </mat-card-title>\n                                    <mat-card-content>\n                                        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n                                            <div>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                                <mat-icon>star_border</mat-icon>\n                                            </div>\n                                            <div>\n                                                Origine(Casamance)\n                                            </div>\n                                            <div>\n                                                Quantité : 100kg\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                            <div>\n                                                <span style=\"font-size:12px\">Début Appel d'Offre 13/10/2018</span>\n                                            </div>\n                                        </div>\n                                    </mat-card-content>\n                                    <mat-card-footer>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"60px\">\n                                            <div>\n                                                <a mat-raised-button href=\"#\">tagger</a>\n                                            </div>\n                                            <div fxLayoutAlign=\"end\">\n                                                <a mat-raised-button color=\"primary\" href=\"#\">répondre</a>\n                                            </div>\n                                        </div>\n                                    </mat-card-footer>\n                                </mat-card>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            \n            </div>\n        </div>\n            <!-- / CONTENT CARD -->\n            <!-- / CENTER -->\n            <!-- SIDEBAR -->\n            <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n            \n                <!-- SIDEBAR CONTENT -->\n                <div class=\"content p-24\">\n                    <chbot-sidebar></chbot-sidebar>\n                </div>\n                <!-- / SIDEBAR CONTENT -->\n            \n            </fuse-sidebar>\n            <!-- / SIDEBAR -->\n    </div>\n</div>\n\n    "

/***/ }),

/***/ "./src/app/front/offres/offres.component.scss":
/*!****************************************************!*\
  !*** ./src/app/front/offres/offres.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.panel-domaine-ag {\n  background: #FCF8E3 !important; }\n"

/***/ }),

/***/ "./src/app/front/offres/offres.component.ts":
/*!**************************************************!*\
  !*** ./src/app/front/offres/offres.component.ts ***!
  \**************************************************/
/*! exports provided: OffresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresComponent", function() { return OffresComponent; });
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


var OffresComponent = /** @class */ (function () {
    /**
       * Constructor
       *
       *
       * @param {FuseSidebarService} _fuseSidebarService
       *
       */
    function OffresComponent(_fuseSidebarService) {
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
    OffresComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    OffresComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    OffresComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], OffresComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OffresComponent.prototype, "onWindowResize", null);
    OffresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offres',
            template: __webpack_require__(/*! ./offres.component.html */ "./src/app/front/offres/offres.component.html"),
            styles: [__webpack_require__(/*! ./offres.component.scss */ "./src/app/front/offres/offres.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], OffresComponent);
    return OffresComponent;
}());



/***/ }),

/***/ "./src/app/front/offres/offres.module.ts":
/*!***********************************************!*\
  !*** ./src/app/front/offres/offres.module.ts ***!
  \***********************************************/
/*! exports provided: routes, OffresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresModule", function() { return OffresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _offres_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offres.component */ "./src/app/front/offres/offres.component.ts");
/* harmony import */ var _details_offre_details_offre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-offre/details-offre.component */ "./src/app/front/offres/details-offre/details-offre.component.ts");
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
    { path: '', component: _offres_component__WEBPACK_IMPORTED_MODULE_4__["OffresComponent"], pathMatch: 'full' },
    { path: ':id', component: _details_offre_details_offre_component__WEBPACK_IMPORTED_MODULE_5__["DetailsOffreComponent"] }
];
var OffresModule = /** @class */ (function () {
    function OffresModule() {
    }
    OffresModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseSidebarModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["FuseDemoModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]
            ],
            declarations: [
                _offres_component__WEBPACK_IMPORTED_MODULE_4__["OffresComponent"],
                _details_offre_details_offre_component__WEBPACK_IMPORTED_MODULE_5__["DetailsOffreComponent"]
            ]
        })
    ], OffresModule);
    return OffresModule;
}());



/***/ })

}]);
//# sourceMappingURL=front-offres-offres-module.js.map