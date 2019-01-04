(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-home-home-module"],{

/***/ "./src/app/front/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/front/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\n    <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n    <div class=\"page-layout carded left-sidebar\">\n\n        <!-- TOP BACKGROUND -->\n        <!-- / TOP BACKGROUND -->\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\" fxLayout=\"row\" fxLayoutAlign=\"right\"> \n                    <div>\n                        <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                            <mat-icon>menu</mat-icon>\n                        </button>\n                    </div> \n                    \n                    <div>\n                        <div fxFlex fxFlexOffset.gt-sm=\"20\" fxShow=\"false\" fxShow.gt-sm>\n                            <form method=\"get\"  class=\"search-form\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                <button mat-raised-button [matMenuTriggerFor]=\"categoriesMenu\" #categoriesMenuTrigger=\"matMenuTrigger\" type=\"button\" class=\"mat-elevation-z0 categories text-truncate text-muted\">filtre<mat-icon>arrow_drop_down</mat-icon></button>\n                                <input type=\"text\" placeholder=\"Que recherchez-vous ?\" fxFlex>\n                                <button mat-mini-fab type=\"button\" class=\"search-btn mat-elevation-z0 text-muted\">\n                                    <mat-icon>search</mat-icon>\n                                </button> \n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n                <div content class=\"content p-24\">\n                    <!-- CONTENT -->\n                    <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\n                        <div fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"py-2\">\n                           <!-- <mat-accordion>\n                                <mat-expansion-panel>\n                                    <mat-expansion-panel-header>-->\n                                        <mat-panel-title class=\"title1\">\n                                            <h4>Produits & services</h4>\n                                        </mat-panel-title>\n                                    <!--</mat-expansion-panel-header>-->\n                                    <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"3px\" class=\"contain\">\n                                        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\" class=\"prodServBackground\" style=\"max-width: 29%;\" *ngFor=\"let p of produitList\">\n                                            <mat-card class=\"product-item text-center\">\n                                                <!-- <mat-chip-list>\n                                                    <mat-chip color=\"warn\" selected=\"true\" style=\"margin-left: 25%\">0% OFF</mat-chip>\n                                                </mat-chip-list> -->\n                                                <a [routerLink]=\"['#']\" class=\"image-link\">\n                                                    <img src={{p.image}} alt=\"\">\n                                                </a>\n                                                \n                                                <a [routerLink]=\"['#']\" class=\"title text-truncate\">\n                                                    {{p.designation}} \n                                                </a>\n                                                <h4 class=\"category text-muted\">{{p.domaine}}</h4>\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\" style=\"margin-left: 3%\">\n                                                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                                                        <p class=\" text-muted\">\n                                                            <span>{{p.prixUnitaire}} CFA</span>\n                                                        </p>\n                                                    </div>\n                                                    <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                                                        <div class=\"ratings\">\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                        </div>\n                                                        <!-- <p class=\"ratings-count text-muted\">5 ratings</p> -->\n                                                    </div>\n                                                </div>\n                                                <div class=\"divider mt-2\"></div>\n                                                <div class=\"icons\">\n                                                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                                                        <div>\n                                                            <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                                                <mat-icon>shopping_cart</mat-icon>\n                                                            </button>\n                                                            <button mat-icon-button matTooltip=\"Detail produit\">\n                                                                <mat-icon>remove_red_eye</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </mat-card>\n                                        </div>\n                                        <!-- <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\" style=\"max-width: 29%;\">\n                                            <mat-card class=\"product-item text-center\">\n                                                <mat-chip-list>\n                                                    <mat-chip color=\"warn\" selected=\"true\" style=\"margin-left: 25%\">0% OFF</mat-chip>\n                                                </mat-chip-list>\n                                                <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\n                                                    <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\n                                                </a>\n                                                <h4 class=\"category text-muted\">Agriculture</h4>\n                                                <a [routerLink]=\"['#']\" class=\"title text-truncate\">\n                                                    Cirot\n                                                </a>\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\" style=\"margin-left: 3%\">\n                                                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                                                        <p class=\" text-muted\">\n                                                            <span>12500 CFA</span>\n                                                        </p>\n                                                    </div>\n                                                    <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                                                        <div class=\"ratings\">\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                        </div>\n                                                        <p class=\"ratings-count text-muted\">4 ratings</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"divider mt-2\"></div>\n                                                <div class=\"icons\">\n                                                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                                                        <div>\n                                                            <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                                                <mat-icon>shopping_cart</mat-icon>\n                                                            </button>\n                                                            <button mat-icon-button matTooltip=\"Detail produit\">\n                                                                <mat-icon>remove_red_eye</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </mat-card>\n                                        </div>\n                                        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"1px\" style=\"max-width: 29%;\">\n                                            <mat-card class=\"product-item text-center\">\n                                                <mat-chip-list>\n                                                    <mat-chip color=\"warn\" selected=\"true\" style=\"margin-left: 25%\">0% OFF</mat-chip>\n                                                </mat-chip-list>\n                                                <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\n                                                    <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\n                                                </a>\n                                                <h4 class=\"category text-muted\">Agriculture</h4>\n                                                <a [routerLink]=\"['#']\" class=\"title text-truncate\">\n                                                    Cirot\n                                                </a>\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\" style=\"margin-left: 3%\">\n                                                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                                                        <p class=\" text-muted\">\n                                                            <span>12500 CFA</span>\n                                                        </p>\n                                                    </div>\n                                                    <div fxLayout=\"row\" fxLayoutAlign='center end'>\n                                                        <div class=\"ratings\">\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                            <mat-icon class=\"mat-icon-xs\">star</mat-icon>\n                                                        </div>\n                                                        <p class=\"ratings-count text-muted\">4 ratings</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"divider mt-2\"></div>\n                                                <div class=\"icons\">\n                                                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\n                                                        <div>\n                                                            <button mat-icon-button matTooltip=\"Ajouter au panier\">\n                                                                <mat-icon>shopping_cart</mat-icon>\n                                                            </button>\n                                                            <button mat-icon-button matTooltip=\"Detail produit\">\n                                                                <mat-icon>remove_red_eye</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </mat-card>\n                                        </div> -->\n                                    </div>\n                              <!---  </mat-expansion-panel>\n                               <mat-expansion-panel>\n                                    <mat-expansion-panel-header>-->\n                                        <mat-panel-title class=\"title2\">\n                                            <h4>Appels d'offres</h4>\n                                        </mat-panel-title>\n                                   <!--- </mat-expansion-panel-header>-->\n                                    <mat-card fxFlex=\"100\" class=\"appeloffre\">\n                                        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                                            <div>\n                                                <img mat-card-image src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Seller_Bg.png\" style=\"width:48px\">\n                                            </div>\n                                            <div>\n                                                <span  style=\"font-size:16px; color:#6c4600\"> (Appels d'offres N)</span>\n                                                <br>\n                                                \n                                            </div>\n                                        </div>\n                        \n                                        <mat-card-title>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"300px\">\n                                                <div>\n                                                    <div><mat-divider></mat-divider></div>\n                                                    <div class=\"py-8\">Objet</div>\n                                                </div>\n                                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"20px\">\n                                                    <div fxLayout=\"column\">\n                                                        <div>&nbsp;&nbsp;</div>\n                                                        <div style=\"font-size: 28px; font-weight:bold\">28<SUP style=\"text-transform:lowercase; font-size: 10px;\"class=\"expo\">Lots</SUP>\n                                                        </div>\n                                                    </div>\n                                                    <div fxLayout=\"column\">\n                                                        <div style=\"font-size:13px\">Date limite</div>\n                                                        <div style=\"color:#6c4600\">09.09.2018</div>\n                                                    </div>\n                                                    <div fxLayout=\"column\">\n                                                        <div style=\"font-size:13px\">Budget</div>\n                                                        <div>75 000\n                                                            <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                                                        </div>\n                                                    </div>\n                                                    <div fxLayout=\"column\">\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                        \n                                        </mat-card-title>\n                                        <mat-card-content>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"25px\">\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </mat-card-content>\n                                        <mat-card-footer>\n                                            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"2px\">\n                                                <div fxFlex=\"50\">\n                                                    <a style=\"float:left; width:100%\" style=\"float:left; background-color:#87856C; width: 100%\" class=\"details\" mat-raised-button routerLink=\".\">Details de l'offre</a>\n                                                </div>\n                                                <div fxFlex=\"50\">\n                                                    <a style=\"float:right; width:100%\" style=\"float:left; background-color:#333; width: 100%\" class=\"repondre\" mat-raised-button routerLink=\".\">Repondre à l'offre</a>\n                                                </div>\n                                            </div>\n                                        </mat-card-footer>\n                                    </mat-card>\n                                    <br>\n                             <!---   </mat-expansion-panel>\n                                <mat-expansion-panel >\n                                    <mat-expansion-panel-header>-->\n                                        <mat-panel-title>\n                                            <h4>Enchère en cours</h4>\n                                        </mat-panel-title>\n                                  <!---  </mat-expansion-panel-header>-->\n                                    <mat-card>\n                                        <mat-card-title>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"100px\">\n                                                <div fxLayout=\"row\" fxFlex=\"1 6 50%\" class=\"prod\">\n                                                    <div class=\"prodOrServ-content\" fxLayout=\"row\">\n                                                        <div fxFlex=\"50\">\n                                                            <img style=\"height:90%\" src=\"assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\" width=\"140%\" class=\"img-seller\">\n                                                        </div>\n                                                        <div fxLayout=\"column\">\n                                                            <div>\n                                                                &nbsp;\n                                                                <mat-divider style=\"position: relative; left: 5px; width: 74%;\"></mat-divider>\n                                                                 &nbsp;\n                                                                <span class=\"title-enchere\">(Enchère n)</span>\n                                                                 &nbsp;\n                                                                <mat-divider style=\"position: relative; left: 5px; width: 95%;\"></mat-divider><br>\n                                                                <span class=\"px-4\">Nom Produit</span> <br>\n                                                                <span class=\"px-4 quantite\" > Quantité</span>\n                                                            </div>\n                                                            <div fxLayout=\"row\">\n                                                                <div>\n                                                                    <span class=\"px-4\" style=\"font-size:12px\">Descriptif du produit</span>\n                                                                    <p class=\"descriptif-prod px-4\">\n                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi quaerat laboriosam.\n                                                                    </p>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\n                                                        <div fxLayout=\"column\">\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère courante</div>\n                                                            <div style=\"color:#6c4600 ; font-size:14px; font-weight:bold\">1 800 000\n                                                                <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                                                            </div>\n                                                        </div>\n                                                        <div fxLayout=\"column\">\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Estimation valeur</div>\n                                                            <div style=\"font-size:14px; font-weight:bold\">1 545 877\n                                                                <SUP style=\"text-transform:lowercase; font-size: 10px;\" class=\"expo\">XOF</SUP>\n                                                            </div>\n                                                        </div>\n                                                        <div fxLayout=\"column\">\n                                                            <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Rating_Gauge.png\" width=\"34px\" alt=\"\">\n                                                        </div>\n                                                    </div>\n                        \n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" fxLayoutGap=\"30px\">\n                                                        <div fxLayout=\"column\">\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Enchère</div>\n                                                            <div style=\"font-size:16px; font-weight:bold\">\n                                                                98\n                                                            </div>\n                                                        </div>\n                                                        <div fxLayout=\"column\">\n                                                            <div style=\"font-size:10px; font-weight:bold; color:rgb(182, 177, 177)\">Vues</div>\n                                                            <div style=\"font-size:16px; font-weight:bold\">\n                                                                127\n                                                            </div>\n                                                        </div>\n                                                        <div fxLayout=\"column\" class=\"chrono-enchere\" fxFlex fxLayoutAlign=\"space-between bottom\">\n                                                            <div class=\"chrono-content\">02:10:00.0</div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                        \n                                        </mat-card-title>\n                                        <mat-card-content>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"25px\" fxFlex>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Domaine 09</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_1.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Activité 15</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_2.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Boutique 18</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_3.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Localité 85</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_4.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\"> Ref Produit 14</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_5.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Prix 12</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_6.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                                <div fxLayout=\"column\" fxLayoutGap=\"1px\">\n                                                    <div>\n                                                        <span class=\"ap-articles\" fxLayoutAlign=\"center center\">Disponibilité 15</span>\n                                                    </div>\n                                                    <div>\n                                                        <img src=\"assets/images/AppelOffre/FineTech_PS_Elmt_AppelOffre_Tag_Clr_7.png\" alt=\"\" width=\"80px\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </mat-card-content>\n                                        <mat-card-footer>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"5px\" fxFlex=\"100\">\n                                                <div fxFlex=\"50\" >\n                                                    <button style=\"float:left; background-color:#87856C; width: 100%\" class=\"enchere-btn\" mat-raised-button routerLink=\".\">\n                                                        <span class=\"bottom-text-enchere\">Details de l'offre</span>\n                                                    </button>\n                                                </div>\n                                                <div fxFlex=\"50\">\n                                                    <button style=\"float:right ; background-color:#333; width: 100%\" class=\"enchere-btn-success\" fxLayoutAlign=\"center\" mat-raised-button routerLink=\".\">\n                                                        <span class=\"bottom-text-enchere\">Repondre à l'offre </span>\n                                                        <mat-icon style=\"color:white\">done</mat-icon>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </mat-card-footer>\n                                    </mat-card>\n                                    <br>\n                           <!--    </mat-expansion-panel>\n                          </mat-accordion>-->\n                        </div>\n                    </div>\n                    <br>\n                    </div>\n                    \n                    <div class=swip>\n                    <div fxLayout=\"row\">\n                        <h2>Top Recherches</h2>\n                    </div>\n                    <div class=\"contain-swip\">\n                     <app-products-carousel [products]=\"topRatedProducts\"></app-products-carousel>\n                    </div>\n                </div>\n                    <!-- / CONTENT -->\n                </div>\n                \n\n        </div>\n            <!-- / CONTENT CARD -->\n        <!-- / CENTER -->\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\">\n                <chbot-sidebar></chbot-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/front/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/front/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-ag {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #ed7d31 !important;\n  padding-right: 5%; }\n\n.panel-domaine-el {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #70ad47 !important;\n  padding-right: 5%; }\n\n.panel-domaine-pc {\n  width: 15em !important;\n  margin: 3%;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.swip {\n  width: 76%;\n  margin-left: 12%;\n  margin-top: -8%; }\n\n.contain-swip {\n  margin-top: -3%;\n  padding-bottom: 20px; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden; }\n\n.all-products.p-left {\n    padding-left: 16px; }\n\n.products-wrapper {\n  margin: 8px -8px; }\n\n.products-wrapper .col {\n    padding: 8px; }\n\n.categories-wrapper {\n  position: relative;\n  max-height: 300px; }\n\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n\n.filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n\n.filter-brands button img {\n    width: 66px;\n    height: 44px; }\n\n.example-card {\n  max-width: 220px; }\n\n.example-header-image {\n  background-image: url(\"https://DI-2018PaaS.github.io/ftg.ps.project.ms.gateway-deploy/assets/images/Home/twitter-icon.png\");\n  background-size: cover; }\n\n.ap-articles {\n  font-size: 10px;\n  text-transform: lowercase; }\n\n.imgProdOrSer {\n  background-image: url(\"https://DI-2018PaaS.github.io/ftg.ps.project.ms.gateway-deploy/assets/images/Produit/FineTech_PS_Elmt_Produit_Photo_Bg.png\") !important;\n  background-repeat: no-repeat;\n  /* width: 20% !important; */\n  background-size: 110%; }\n\n.descriptif-prod {\n  font-size: 10px;\n  text-justify: auto;\n  margin-top: 0;\n  text-align: justify; }\n\n.bottom-text-enchere {\n  color: white; }\n\n.chrono-content {\n  border: 2px solid #6c4600;\n  padding: 9px;\n  border-radius: 25px; }\n\n.title-enchere {\n  color: #6c4600; }\n\n.quantite {\n  font-size: 16px;\n  color: green; }\n\n.prod {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.search-form {\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n  width: 44em; }\n\n.search-form .categories {\n    height: 40px;\n    width: 180px;\n    border-radius: 0; }\n\n.search-form input[type=text] {\n    border: 0;\n    outline: none;\n    padding: 0 34px 0 12px;\n    border-left: 1px solid #ccc; }\n\n.search-form .search-btn {\n    margin-left: -20px;\n    background: #260d0b !important; }\n\nimg {\n  max-width: 51%;\n  height: auto;\n  vertical-align: top;\n  border: none; }\n\n.product-item {\n  background-color: #FCF8E3 !important; }\n\n.contain {\n  margin-top: -3%; }\n\n.title1 {\n  margin-top: -3%; }\n\n.title2 {\n  margin-top: -3%; }\n\n.details {\n  color: white !important; }\n\n.repondre {\n  color: white !important; }\n\n.appeloffre {\n  margin-top: -3%; }\n"

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
/* harmony import */ var app_service_produit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/produit.service */ "./src/app/service/produit.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
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
    function HomeComponent(produitService, db, appService, _fuseNavigationService, _fuseSidebarService) {
        var _this = this;
        this.produitService = produitService;
        this.db = db;
        this.appService = appService;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseSidebarService = _fuseSidebarService;
        this.sidenavOpen = true;
        this.brands = [];
        /**
           * Constructor
           *
           *
           * @param {FuseSidebarService} _fuseSidebarService
           *
           */
        this.dbPath = 'produits-db';
        this.produitRef = null;
        this.produitList = [];
        this.produit = {};
        this.viewCol = 25;
        this.slides = [
            { title: '', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
        this.navigation = app_front_navigation_frontNavigation__WEBPACK_IMPORTED_MODULE_3__["frontNavigation"];
        // Register the navigation to the service
        this._fuseNavigationService.register('home', this.navigation);
        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('home');
        this.db.list(this.dbPath, function (ref) { return ref
            .orderByChild('isValid')
            .equalTo(true)
            .limitToFirst(3); })
            .valueChanges()
            .subscribe(function (res) {
            _this.produitList = res;
            console.log("produits: ", _this.produitList);
        });
        //this.produit = this.ListProduit as Produit
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
        __metadata("design:paramtypes", [app_service_produit_service__WEBPACK_IMPORTED_MODULE_5__["ProduitService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _front_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
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
/* harmony import */ var _fuse_components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/search-bar/search-bar.module */ "./src/@fuse/components/search-bar/search-bar.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
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
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                _fuse_components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_8__["FuseSearchBarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
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
        id: 'accueil',
        title: 'Accueil',
        type: 'item',
        icon: 'home',
        url: '/'
    },
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