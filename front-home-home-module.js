(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-home-home-module"],{

/***/ "./src/app/front/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/front/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\r\n    <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n    <div class=\"page-layout carded left-sidebar\">\r\n\r\n        <!-- TOP BACKGROUND -->\r\n        <!-- / TOP BACKGROUND -->\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\">\r\n\r\n            <!-- CONTENT CARD -->\r\n            <div class=\"content-card\">\r\n\r\n                <!-- CONTENT TOOLBAR -->\r\n                <div class=\"toolbar px-24 py-8\">\r\n\r\n                    <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n\r\n                    <span>\r\n                        <h1 style=\"font-weight: bold\">Domaine</h1>\r\n                    </span>\r\n\r\n                </div>\r\n                <!-- / CONTENT TOOLBAR -->\r\n                <div content class=\"content p-24\">\r\n                    <!-- CONTENT -->\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\r\n                        <div fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"py-2\">\r\n                            <mat-accordion>\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Produits & services</h4>\r\n                                        </mat-panel-title>\r\n                                    </mat-expansion-panel-header>\r\n                                    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"3px\">\r\n                                        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\" class=\"prodServBackground\">\r\n                                            <mat-card class=\"product-item text-center\">\r\n                                                <mat-chip-list>\r\n                                                    <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                                                </mat-chip-list>\r\n                                                <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\r\n                                                    <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                                                </a>\r\n                                                <h4 class=\"category text-muted\">Agriculture</h4>\r\n                                                <span>Quantité</span>\r\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                                    <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"center start\">\r\n                                                        <p class=\" text-muted\">\r\n                                                            <span>12500 CFA</span>\r\n                                                        </p>\r\n                                                    </div>\r\n                                                    <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                                                        <div class=\"ratings\">\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                        </div>\r\n                                                        <p class=\"ratings-count text-muted\">5 ratings</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"divider mt-2\"></div>\r\n                                                <div class=\"icons\">\r\n                                                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                                                        <div>\r\n                                                            <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                                                <mat-icon>shopping_cart</mat-icon>\r\n                                                            </button>\r\n                                                            <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                                                <mat-icon>remove_red_eye</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </mat-card>\r\n                                        </div>\r\n                                        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\">\r\n                                            <mat-card class=\"product-item text-center\">\r\n                                                <mat-chip-list>\r\n                                                    <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                                                </mat-chip-list>\r\n                                                <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\r\n                                                    <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                                                </a>\r\n                                                <h4 class=\"category text-muted\">Agriculture</h4>\r\n                                                <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                                                    Cirot\r\n                                                </a>\r\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                                        <p class=\" text-muted\">\r\n                                                            <span>12500 CFA</span>\r\n                                                        </p>\r\n                                                    </div>\r\n                                                    <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                                                        <div class=\"ratings\">\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                                        </div>\r\n                                                        <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"divider mt-2\"></div>\r\n                                                <div class=\"icons\">\r\n                                                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                                                        <div>\r\n                                                            <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                                                <mat-icon>shopping_cart</mat-icon>\r\n                                                            </button>\r\n                                                            <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                                                <mat-icon>remove_red_eye</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </mat-card>\r\n                                        </div>\r\n                                    </div>\r\n                                </mat-expansion-panel>\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Appels d'offres</h4>\r\n                                        </mat-panel-title>\r\n                                    </mat-expansion-panel-header>\r\n                                    <mat-card fxFlex=\"100\">\r\n                                        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n                                            <div>\r\n                                                <img mat-card-image src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Seller_Bg.png\" style=\"width:48px\">\r\n                                            </div>\r\n                                            <div>\r\n                                                <span  style=\"font-size:16px; color:red\"> (Appels d'offres N)</span>\r\n                                                <br>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                        \r\n                                        <mat-card-title>\r\n                                            <div fxLayout=\"row\" fxLayoutGap=\"300px\">\r\n                                                <div>\r\n                                                    <div><mat-divider></mat-divider></div>\r\n                                                    <div class=\"py-8\">Objet</div>\r\n                                                </div>\r\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"20px\">\r\n                                                    <div fxLayout=\"column\">\r\n                                                        <div>&nbsp;&nbsp;</div>\r\n                                                        <div style=\"font-size: 28px; font-weight:bold\">28<SUP style=\"text-transform:lowercase; font-size: 10px;\"class=\"expo\">Lots</SUP>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div fxLayout=\"column\">\r\n                                                        <div style=\"font-size:13px\">Date limite</div>\r\n                                                        <div style=\"color:red\">09.09.2018</div>\r\n                                                    </div>\r\n                                                    <div fxLayout=\"column\">\r\n                                                        <div style=\"font-size:13px\">Budget</div>\r\n                                                        <div>75 000\r\n                                                            <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div fxLayout=\"column\">\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                        \r\n                                        </mat-card-title>\r\n                                        <mat-card-content>\r\n                                            <div fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </mat-card-content>\r\n                                        <mat-card-footer>\r\n                                            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"2px\">\r\n                                                <div fxFlex=\"50\">\r\n                                                    <a style=\"float:left; width:100%\" color=\"warn\" mat-raised-button routerLink=\".\">Details de l'offre</a>\r\n                                                </div>\r\n                                                <div fxFlex=\"50\">\r\n                                                    <a style=\"float:right; width:100%\" color=\"primary\" mat-raised-button routerLink=\".\">repondre à l'offre</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </mat-card-footer>\r\n                                    </mat-card>\r\n                                    <br>\r\n                                </mat-expansion-panel>\r\n                                <mat-expansion-panel >\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Enchère en cours</h4>\r\n                                        </mat-panel-title>\r\n                                    </mat-expansion-panel-header>\r\n                                    <mat-card>\r\n                                        <mat-card-title>\r\n                                            <div fxLayout=\"row\" fxLayoutGap=\"100px\">\r\n                                                <div fxLayout=\"row\" fxFlex=\"1 6 50%\" class=\"prod\">\r\n                                                    <div class=\"prodOrServ-content\" fxLayout=\"row\">\r\n                                                        <div fxFlex=\"50\">\r\n                                                            <img style=\"height:90%\" src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" width=\"140%\" class=\"img-seller\">\r\n                                                        </div>\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <div>\r\n                                                                &nbsp;\r\n                                                                <mat-divider style=\"position: relative; left: 5px; width: 74%;\"></mat-divider>\r\n                                                                 &nbsp;\r\n                                                                <span class=\"title-enchere\">(Enchère n)</span>\r\n                                                                 &nbsp;\r\n                                                                <mat-divider style=\"position: relative; left: 5px; width: 95%;\"></mat-divider><br>\r\n                                                                <span class=\"px-4\">Nom Produit</span> <br>\r\n                                                                <span class=\"px-4 quantite\" > Quantité</span>\r\n                                                            </div>\r\n                                                            <div fxLayout=\"row\">\r\n                                                                <div>\r\n                                                                    <span class=\"px-4\" style=\"font-size:12px\">Descriptif du produit</span>\r\n                                                                    <p class=\"descriptif-prod px-4\">\r\n                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi quaerat laboriosam.\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère courante</div>\r\n                                                            <div style=\"color:red ; font-size:14px; font-weight:bold\">1 800 000\r\n                                                                <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Estimation valeur</div>\r\n                                                            <div style=\"font-size:14px; font-weight:bold\">1 545 877\r\n                                                                <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\r\n                                                        </div>\r\n                                                    </div>\r\n                        \r\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère</div>\r\n                                                            <div style=\"font-size:16px; font-weight:bold\">\r\n                                                                98\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div fxLayout=\"column\">\r\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Vues</div>\r\n                                                            <div style=\"font-size:16px; font-weight:bold\">\r\n                                                                127\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div fxLayout=\"column\" class=\"chrono-enchere\" fxFlex fxLayoutAlign=\"space-between bottom\">\r\n                                                            <div class=\"chrono-content\">02:10:00.0</div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                        \r\n                                        </mat-card-title>\r\n                                        <mat-card-content>\r\n                                            <div fxLayout=\"row\" fxLayoutGap=\"25px\" fxFlex>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                                                    <div>\r\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </mat-card-content>\r\n                                        <mat-card-footer>\r\n                                            <div fxLayout=\"row\" fxLayoutGap=\"5px\" fxFlex=\"100\">\r\n                                                <div fxFlex=\"50\" >\r\n                                                    <button style=\"float:left; background-color:black; width: 100%\" class=\"enchere-btn\" mat-raised-button routerLink=\".\">\r\n                                                        <span class=\"bottom-text-enchere\">Details de l'offre</span>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div fxFlex=\"50\">\r\n                                                    <button style=\"float:right ; background-color:green; width: 100%\" class=\"enchere-btn-success\" fxLayoutAlign=\"right\" mat-raised-button routerLink=\".\">\r\n                                                        <span class=\"bottom-text-enchere\">repondre à l'offre </span>\r\n                                                        <mat-icon style=\"color:white\">done</mat-icon>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </mat-card-footer>\r\n                                    </mat-card>\r\n                                    <br>\r\n                                </mat-expansion-panel>\r\n                            </mat-accordion>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    </div>\r\n                    <div fxLayout=\"row\">\r\n                        <h2>Top Recherches</h2>\r\n                    </div>\r\n                    <app-products-carousel [products]=\"topRatedProducts\"></app-products-carousel>\r\n                    <!-- / CONTENT -->\r\n                </div>\r\n                \r\n\r\n        </div>\r\n            <!-- / CONTENT CARD -->\r\n        <!-- / CENTER -->\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <chbot-sidebar></chbot-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/front/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/front/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-ag {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #ed7d31 !important;\n  padding-right: 5%; }\n\n.panel-domaine-el {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #70ad47 !important;\n  padding-right: 5%; }\n\n.panel-domaine-pc {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden; }\n\n.all-products.p-left {\n    padding-left: 16px; }\n\n.products-wrapper {\n  margin: 8px -8px; }\n\n.products-wrapper .col {\n    padding: 8px; }\n\n.categories-wrapper {\n  position: relative;\n  max-height: 300px; }\n\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n\n.filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n\n.filter-brands button img {\n    width: 66px;\n    height: 44px; }\n\n.example-card {\n  max-width: 220px; }\n\n.example-header-image {\n  background-image: url(\"https://DI-2018PaaS.github.io/ftg.ps.project.ms.gateway-deploy/assets/images/Home/twitter-icon.png\");\n  background-size: cover; }\n\n.ap-articles {\n  font-size: 10px;\n  text-transform: lowercase; }\n\n.imgProdOrSer {\n  background-image: url(\"https://DI-2018PaaS.github.io/ftg.ps.project.ms.gateway-deploy/assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\") !important;\n  background-repeat: no-repeat;\n  /* width: 20% !important; */\n  background-size: 110%; }\n\n.descriptif-prod {\n  font-size: 10px;\n  text-justify: auto;\n  margin-top: 0;\n  text-align: justify; }\n\n.bottom-text-enchere {\n  color: white; }\n\n.chrono-content {\n  border: 2px solid red;\n  padding: 9px;\n  border-radius: 25px; }\n\n.title-enchere {\n  color: red; }\n\n.quantite {\n  font-size: 16px;\n  color: green; }\n\n.prod {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/front/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/front/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _front_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../front/app.service */ "./src/app/front/app.service.ts");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_front_navigation_frontNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/front/navigation/frontNavigation */ "./src/app/front/navigation/frontNavigation.ts");
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





var HomeComponent = /** @class */ (function () {
    /**
       * Constructor
       *
       *
       * @param {FuseSidebarService} _fuseSidebarService
       *
       */
    function HomeComponent(appService, _fuseNavigationService, _fuseSidebarService) {
        this.appService = appService;
        this._fuseNavigationService = _fuseNavigationService;
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
        this.navigation = app_front_navigation_frontNavigation__WEBPACK_IMPORTED_MODULE_3__["frontNavigation"];
        // Register the navigation to the service
        this._fuseNavigationService.register('home', this.navigation);
        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('home');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBrands();
        this.getProducts();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    HomeComponent.prototype.getBrands = function () {
        this.brands = this.appService.getBrands();
    };
    HomeComponent.prototype.getProducts = function () {
        var _this = this;
        this.appService.getProducts('top-rated').subscribe(function (data) {
            _this.topRatedProducts = data;
        });
    };
    HomeComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    HomeComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowResize", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/front/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/front/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_front_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["FuseNavigationService"],
            _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["FuseSidebarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/front/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/front/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/front/home/home.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["FuseDemoModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/front/navigation/frontNavigation.ts":
/*!*****************************************************!*\
  !*** ./src/app/front/navigation/frontNavigation.ts ***!
  \*****************************************************/
/*! exports provided: frontNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontNavigation", function() { return frontNavigation; });
var frontNavigation = [
    {
        id: 'domaines',
        title: 'Domaine',
        type: 'collapsable',
        icon: 'domain',
        url: '/domaines',
        children: [
            {
                id: 'domaines-activite',
                title: 'domaines-activité',
                type: 'item',
                url: '/domaines/activites/listes'
            }
        ]
    },
    {
        id: 'produit',
        title: 'produit',
        type: 'item',
        icon: 'card_giftcard',
        url: 'produit'
    },
    {
        id: 'Enchere',
        title: 'Enchere',
        type: 'item',
        icon: 'gavel',
        url: 'Enchere'
    },
    {
        id: 'services',
        title: 'Services',
        icon: 'bookmark_border',
        type: 'item',
        url: 'services'
    },
    {
        id: 'ratings',
        title: 'Ratings',
        icon: 'star',
        type: 'item',
        url: 'ratings'
    },
    {
        id: 'offres',
        title: 'Offres',
        icon: 'local_offer',
        type: 'item',
        url: 'offres'
    }
];


/***/ })

}]);
//# sourceMappingURL=front-home-home-module.js.map