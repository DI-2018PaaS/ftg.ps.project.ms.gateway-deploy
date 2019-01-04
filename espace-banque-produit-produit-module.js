(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-produit-produit-module"],{

/***/ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <div fxLayoutAlign=\"center center\">\n      <span style=\"color:#3c9e1c\"><h1>PAIEMENT</h1></span> \n    </div>\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n        <div fxFlex=\"70\">\n          <div fxLayout=\"column\">\n              <div>\n                <fieldset>\n                    {{fournisseur.prenom}} {{fournisseur.nom}} - <span style=\"font-size: 19px;\">{{agreement.juridique}}</span><br>\n                    Tel/Fax : {{fournisseur.telephone}} <br>\n                    NINEA : {{agreement.ninea}}\n                </fieldset>\n              </div>\n              <div fxLayoutAlign=\"center center\" style=\"margin-top:3%\">\n                <fieldset style=\"width:100%\">\n                    <p> <span>OBJET : </span>{{bonLivraison.objet}}</p>\n                </fieldset> \n              </div>\n              <div fxLayoutAlign=\"center center\">\n                  <h2>Liste des produits</h2>\n              </div>\n              <div>\n                  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                      <!-- Checkbox Column -->\n                      <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                        (change)=\"$event ? selection.toggle(row) : null\"\n                                        [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container>\n                    \n                      <!-- Name Column -->\n                      <ng-container matColumnDef=\"code\">\n                        <th mat-header-cell *matHeaderCellDef> Code </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n                      </ng-container>\n                    \n                      <!-- Weight Column -->\n                      <ng-container matColumnDef=\"designation\">\n                        <th mat-header-cell *matHeaderCellDef> Designation </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\n                      </ng-container>\n                    \n                      <!-- Symbol Column -->\n                      <ng-container matColumnDef=\"descriptionProduit\">\n                        <th mat-header-cell *matHeaderCellDef> Description </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.descriptionProduit}} </td>\n                      </ng-container>\n          \n                      <!-- Symbol Column -->\n                      <ng-container matColumnDef=\"prixUnitaire\">\n                          <th mat-header-cell *matHeaderCellDef> Prix </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.prixUnitaire}} </td>\n                        </ng-container>\n    \n                        <!-- Symbol Column -->\n                      <ng-container matColumnDef=\"quantite\">\n                          <th mat-header-cell *matHeaderCellDef> Quantité </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.zoneGeographiqueId}} </td>\n                        </ng-container>\n                    \n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                          (click)=\"selection.toggle(row)\">\n                      </tr>\n                  </table>\n              </div>\n              <div fxLayoutAlign=\"end right\" style=\"font-size:20px\"><span>Prix total : </span><span style=\"color:red\">{{totalArticle}} XOF</span></div>\n          </div>\n          \n    \n        </div>\n        <div fxFlex=\"30\">\n            <div fxLayout=\"column\" fxLayouAlign=\"center center\">\n                <div fxLayoutAlign=\"center center\">\n                    <h2>Detais paiement</h2>\n                </div>\n                <mat-card>\n                    <div style=\"width:100%\">\n                        Mode livraison : {{bonLivraison.modeLivraison}}\n                    </div> \n                </mat-card>\n                &nbsp;\n                <mat-card>\n                    <div style=\"width:100%\">\n                        Livreur : {{livreur.prenom}} {{livreur.nom}}  - {{livreur.telephone}}\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n    <div fxLayout=\"row\">\n        <div fxFlex=\"68\">\n            <fieldset>\n              <legend>Informations agent</legend>\n              <div fxLayout=\"column\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                      <div>\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput  disabled value={{utilisateur.lastName}}>\n                          </mat-form-field>\n                      </div>\n                      <div>\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput  disabled value='{{utilisateur.firstName}}'>\n                          </mat-form-field>\n                      </div>     \n                  </div>\n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                      <div>\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput  disabled value={{utilisateur.mail}}>\n                          </mat-form-field>\n                      </div>\n                      <div>\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput  disabled value='{{utilisateur.phoneNumber}}'>\n                          </mat-form-field>\n                      </div> \n      \n                  </div>\n              </div>\n            </fieldset>\n        </div>\n    </div>\n    <div fxLayout=\"row\">\n        <div fxFlex=\"68\">\n            <fieldset>\n              <legend>Mode paiement</legend>\n              <div fxLayout=\"column\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                      <div>\n                          <section class=\"example-section\">\n                              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Paiement à la livraison</mat-checkbox>\n                            </section>\n                      </div>    \n                  </div>\n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                      <div>\n                          <section class=\"example-section\">\n                              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"wari\">Wari</mat-checkbox>\n                              <mat-form-field class=\"example-margin\" *ngIf=\"wari\">\n                                <input matInput   value=''>\n                              </mat-form-field>\n                            </section>\n                      </div>    \n                  </div> \n                  <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                      <div>\n                          <section class=\"example-section\">\n                              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"om\">Orange Money</mat-checkbox>\n                              <mat-form-field class=\"example-margin\" *ngIf=\"om\">\n                                <input matInput   value=''>\n                              </mat-form-field>\n                            </section>\n                      </div>    \n                  </div> \n              </div>\n            </fieldset>\n        </div>\n    </div>\n    \n</div>\n\n\n  \n  \n  "

/***/ }),

/***/ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.price {\n  color: red;\n  font-size: 11px; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n\n.mat-slider-horizontal {\n  width: 300px; }\n\n.mat-slider-vertical {\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PaiementBlivraisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaiementBlivraisonComponent", function() { return PaiementBlivraisonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/blivraison.service */ "./src/app/service/blivraison.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PaiementBlivraisonComponent = /** @class */ (function () {
    function PaiementBlivraisonComponent(blivraisonServ, db, session, router, activatedRoute) {
        var _this = this;
        this.blivraisonServ = blivraisonServ;
        this.db = db;
        this.session = session;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['code', 'designation', 'descriptionProduit', 'prixUnitaire', 'quantite'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.bonLivraison = {};
        this.fournisseur = {};
        this.produitDemande = [];
        this.produitList = [];
        this.totalArticle = 0;
        this.produitPath = 'list-produits-db';
        this.selectedProduitPath = 'produits-db';
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.wari = false;
        this.om = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.router = router;
        var key = this.activatedRoute.snapshot.paramMap.get('id');
        this.utilisateur = session.get("utilisateur");
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('key')
            .equalTo(key); })
            .valueChanges()
            .subscribe(function (res) {
            _this.bonLivraison = res[0];
            _this.db.list('utilisateur-db', function (tr) { return tr
                .orderByChild("fkey")
                .equalTo(_this.bonLivraison.acteurUserId); })
                .valueChanges()
                .subscribe(function (tf) {
                console.log(tf);
            });
            _this.db.list('agreement-db', function (tr) { return tr
                .orderByChild("userID")
                .equalTo(_this.bonLivraison.acteurUserId); })
                .valueChanges()
                .subscribe(function (tf) {
                _this.agreement = tf[0];
            });
            _this.db.list("fournisseur-db", function (db) { return db
                .orderByChild('key')
                .equalTo(_this.bonLivraison.livreur); })
                .valueChanges()
                .subscribe(function (res) {
                _this.livreur = res[0];
            });
            _this.db.list("fournisseur-db", function (ref) { return ref
                .orderByChild('key')
                .equalTo(_this.bonLivraison.fournisseurId); })
                .valueChanges()
                .subscribe(function (res) {
                _this.fournisseur = res[0];
                _this.db.list('utilisateur-db', function (tr) { return tr
                    .orderByChild("fkey")
                    .equalTo(_this.fournisseur.key); })
                    .valueChanges()
                    .subscribe(function (tf) {
                    _this.db.list("agreement-db", function (db) { return db
                        .orderByChild('userID')
                        .equalTo(tf[0]['key']); })
                        .valueChanges()
                        .subscribe(function (res) {
                        _this.agreement = res[0];
                    });
                });
                _this.db.list(_this.produitPath, function (ref) { return ref
                    .orderByChild('keyDemande')
                    .equalTo(_this.bonLivraison.demandeId); })
                    .valueChanges()
                    .subscribe(function (result) {
                    _this.produitDemande = result;
                    _this.produitDemande.forEach(function (t) {
                        _this.db.list(_this.selectedProduitPath, function (refSP) { return refSP
                            .orderByChild('key')
                            .equalTo(t.keyProd); })
                            .valueChanges()
                            .subscribe(function (prod) {
                            var data = _this.dataSource.data;
                            prod[0]['zoneGeographiqueId'] = t.quantite;
                            _this.totalArticle = _this.totalArticle + prod[0]['zoneGeographiqueId'] * prod[0]['prixUnitaire'];
                            data.push(prod[0]);
                            _this.dataSource.data = data;
                        });
                    });
                });
            });
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    PaiementBlivraisonComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    PaiementBlivraisonComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    PaiementBlivraisonComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PaiementBlivraisonComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    PaiementBlivraisonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paiement-blivraison',
            template: __webpack_require__(/*! ./paiement-blivraison.component.html */ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.html"),
            styles: [__webpack_require__(/*! ./paiement-blivraison.component.scss */ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_2__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angular_web_storage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PaiementBlivraisonComponent);
    return PaiementBlivraisonComponent;
}());



/***/ }),

/***/ "./src/app/espace/banque/produit/produit.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/espace/banque/produit/produit.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, ProduitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitModule", function() { return ProduitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _suivi_produit_suivi_produit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suivi-produit/suivi-produit.component */ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visu-blivraison/visu-blivraison.component */ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.ts");
/* harmony import */ var _paiement_blivraison_paiement_blivraison_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paiement-blivraison/paiement-blivraison.component */ "./src/app/espace/banque/produit/paiement-blivraison/paiement-blivraison.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _suivi_produit_suivi_produit_component__WEBPACK_IMPORTED_MODULE_2__["SuiviProduitComponent"], pathMatch: 'full' },
    { path: 'visu-blivraison/:id', component: _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_6__["VisuBlivraisonComponent"], pathMatch: 'full' },
    { path: 'paiement-blivraison/:id', component: _paiement_blivraison_paiement_blivraison_component__WEBPACK_IMPORTED_MODULE_7__["PaiementBlivraisonComponent"], pathMatch: 'full' }
];
var ProduitModule = /** @class */ (function () {
    function ProduitModule() {
    }
    ProduitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_suivi_produit_suivi_produit_component__WEBPACK_IMPORTED_MODULE_2__["SuiviProduitComponent"], _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_6__["VisuBlivraisonComponent"], _paiement_blivraison_paiement_blivraison_component__WEBPACK_IMPORTED_MODULE_7__["PaiementBlivraisonComponent"]]
        })
    ], ProduitModule);
    return ProduitModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n    <div>\n      <h2 class=\"title\">LIVRAISON</h2>\n    </div>\n  </div>\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"objet\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Objet </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.objet}} </td>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"nomAcheteur\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom acheteur </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.acheteurNom}} {{row.acheteurPrenom}}</td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date creation </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.dateCreation}} </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"Details\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <div>\n              <button mat-icon-button mat-raised-button [routerLink]=\"['/produit-banq','visu-blivraison',row.key]\">\n                <mat-icon style=\"color:red\">visibility</mat-icon>\n            </button>\n          </div>\n        </td>\n      </ng-container>\n\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"paiement\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Paiement </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isValid === true\">\n                <button mat-icon-button mat-raised-button [routerLink]=\"['/produit-banq','paiement-blivraison',row.key]\">\n                  <mat-icon style=\"color:goldenrod\">attach_money</mat-icon>\n                </button>\n            </div> \n            <div *ngIf=\"row.isValid === false\">\n                <button mat-icon-button mat-raised-button [routerLink]=\"['.']\">\n                  <mat-icon style=\"color:goldenrod\">money_off</mat-icon>\n                </button>\n            </div> \n          </td>\n        </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"valider\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Statut </th>\n        <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isValid === true\">\n                <button mat-icon-button mat-raised-button>\n                  <mat-icon>done_all</mat-icon>\n                </button>\n            </div>`\n            <div *ngIf=\"row.isValid === false\">\n              <span style=\"color:red\">en attente de validation</span>                 \n            </div>\n          <!-- <button mat-icon-button (click)=\"validate(row.key)\">\n            <mat-icon>done_all</mat-icon>\n          </button> -->\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #134ae4ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.ts ***!
  \********************************************************************************/
/*! exports provided: SuiviProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviProduitComponent", function() { return SuiviProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
/* harmony import */ var app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/blivraison.service */ "./src/app/service/blivraison.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuiviProduitComponent = /** @class */ (function () {
    function SuiviProduitComponent(parCrud, blivraisonServ, db) {
        var _this = this;
        this.parCrud = parCrud;
        this.blivraisonServ = blivraisonServ;
        this.db = db;
        this.displayedColumns = ['objet', 'nomAcheteur', 'date', 'Details', 'paiement', 'valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.ELEMENT_DATA = [];
        this.crudComp = this.parCrud;
        this.blivraisonService = blivraisonServ;
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('isValid')
            .equalTo(true); })
            .valueChanges()
            .subscribe(function (res) {
            _this.dataSource.data = res;
        });
    }
    SuiviProduitComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SuiviProduitComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SuiviProduitComponent.prototype.validate = function (key) {
        this.blivraisonServ.updateBlivraison(key, { isValid: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SuiviProduitComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SuiviProduitComponent.prototype, "sort", void 0);
    SuiviProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suivi-produit',
            template: __webpack_require__(/*! ./suivi-produit.component.html */ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.html"),
            styles: [__webpack_require__(/*! ./suivi-produit.component.scss */ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"],
            app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_3__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], SuiviProduitComponent);
    return SuiviProduitComponent;
}());



/***/ }),

/***/ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <div fxFlex=\"70\">\n      <div fxLayout=\"column\">\n          <div>\n            <fieldset>\n                {{fournisseur.prenom}} {{fournisseur.nom}} - <span style=\"font-size: 19px;\">{{agreement.juridique}}</span><br>\n                Tel/Fax : {{fournisseur.telephone}} <br>\n                NINEA : {{agreement.ninea}}\n            </fieldset>\n          </div>\n          <div fxLayoutAlign=\"center center\" style=\"margin-top:3%\">\n            <fieldset style=\"width:100%\">\n                <p> <span>OBJET : </span>{{bonLivraison.objet}}</p>\n            </fieldset> \n          </div>\n          <div fxLayoutAlign=\"center center\">\n              <h2>Liste des produits</h2>\n          </div>\n          <div>\n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                  <!-- Checkbox Column -->\n                  <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                      </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\">\n                      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                    (change)=\"$event ? selection.toggle(row) : null\"\n                                    [checked]=\"selection.isSelected(row)\">\n                      </mat-checkbox>\n                    </td>\n                  </ng-container>\n                \n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"code\">\n                    <th mat-header-cell *matHeaderCellDef> Code </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n                  </ng-container>\n                \n                  <!-- Weight Column -->\n                  <ng-container matColumnDef=\"designation\">\n                    <th mat-header-cell *matHeaderCellDef> Designation </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\n                  </ng-container>\n                \n                  <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"descriptionProduit\">\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.descriptionProduit}} </td>\n                  </ng-container>\n      \n                  <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"prixUnitaire\">\n                      <th mat-header-cell *matHeaderCellDef> Prix </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.prixUnitaire}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"quantite\">\n                      <th mat-header-cell *matHeaderCellDef> Quantité </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.zoneGeographiqueId}} </td>\n                    </ng-container>\n                \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                      (click)=\"selection.toggle(row)\">\n                  </tr>\n              </table>\n          </div>\n          <div fxLayoutAlign=\"end right\" style=\"font-size:20px\"><span>Prix total : </span><span style=\"color:red\">{{totalArticle}} XOF</span></div>\n      </div>\n      \n\n    </div>\n    <div fxFlex=\"30\">\n        <div fxLayout=\"column\" fxLayouAlign=\"center center\">\n            <div fxLayoutAlign=\"center center\">\n                <h2>Detais paiement</h2>\n            </div>\n            <mat-card>\n                <div style=\"width:100%\">\n                    Mode livraison : {{bonLivraison.modeLivraison}}\n                </div> \n            </mat-card>\n            &nbsp;\n            <mat-card>\n                <div style=\"width:100%\">\n                    Livreur : {{livreur.prenom}} {{livreur.nom}}  - {{livreur.telephone}}\n                </div>\n            </mat-card>\n        </div>\n    </div>\n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.price {\n  color: red;\n  font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.ts ***!
  \************************************************************************************/
/*! exports provided: VisuBlivraisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisuBlivraisonComponent", function() { return VisuBlivraisonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/blivraison.service */ "./src/app/service/blivraison.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisuBlivraisonComponent = /** @class */ (function () {
    function VisuBlivraisonComponent(blivraisonServ, db, session, router, activatedRoute) {
        var _this = this;
        this.blivraisonServ = blivraisonServ;
        this.db = db;
        this.session = session;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['code', 'designation', 'descriptionProduit', 'prixUnitaire', 'quantite'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.bonLivraison = {};
        this.fournisseur = {};
        this.produitDemande = [];
        this.produitList = [];
        this.totalArticle = 0;
        this.produitPath = 'list-produits-db';
        this.selectedProduitPath = 'produits-db';
        this.router = router;
        var key = this.activatedRoute.snapshot.paramMap.get('id');
        this.utilisateur = session.get("utilisateur");
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('key')
            .equalTo(key); })
            .valueChanges()
            .subscribe(function (res) {
            _this.bonLivraison = res[0];
            _this.db.list('utilisateur-db', function (tr) { return tr
                .orderByChild("fkey")
                .equalTo(_this.bonLivraison.acteurUserId); })
                .valueChanges()
                .subscribe(function (tf) {
                console.log(tf);
            });
            _this.db.list('agreement-db', function (tr) { return tr
                .orderByChild("userID")
                .equalTo(_this.bonLivraison.acteurUserId); })
                .valueChanges()
                .subscribe(function (tf) {
                _this.agreement = tf[0];
            });
            _this.db.list("fournisseur-db", function (db) { return db
                .orderByChild('key')
                .equalTo(_this.bonLivraison.livreur); })
                .valueChanges()
                .subscribe(function (res) {
                _this.livreur = res[0];
            });
            _this.db.list("fournisseur-db", function (ref) { return ref
                .orderByChild('key')
                .equalTo(_this.bonLivraison.fournisseurId); })
                .valueChanges()
                .subscribe(function (res) {
                _this.fournisseur = res[0];
                _this.db.list('utilisateur-db', function (tr) { return tr
                    .orderByChild("fkey")
                    .equalTo(_this.fournisseur.key); })
                    .valueChanges()
                    .subscribe(function (tf) {
                    _this.db.list("agreement-db", function (db) { return db
                        .orderByChild('userID')
                        .equalTo(tf[0]['key']); })
                        .valueChanges()
                        .subscribe(function (res) {
                        _this.agreement = res[0];
                    });
                });
                _this.db.list(_this.produitPath, function (ref) { return ref
                    .orderByChild('keyDemande')
                    .equalTo(_this.bonLivraison.demandeId); })
                    .valueChanges()
                    .subscribe(function (result) {
                    _this.produitDemande = result;
                    _this.produitDemande.forEach(function (t) {
                        _this.db.list(_this.selectedProduitPath, function (refSP) { return refSP
                            .orderByChild('key')
                            .equalTo(t.keyProd); })
                            .valueChanges()
                            .subscribe(function (prod) {
                            var data = _this.dataSource.data;
                            prod[0]['zoneGeographiqueId'] = t.quantite;
                            _this.totalArticle = _this.totalArticle + prod[0]['zoneGeographiqueId'] * prod[0]['prixUnitaire'];
                            data.push(prod[0]);
                            _this.dataSource.data = data;
                        });
                    });
                });
            });
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    VisuBlivraisonComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    VisuBlivraisonComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    VisuBlivraisonComponent.prototype.ngOnInit = function () {
    };
    VisuBlivraisonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visu-blivraison',
            template: __webpack_require__(/*! ./visu-blivraison.component.html */ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.html"),
            styles: [__webpack_require__(/*! ./visu-blivraison.component.scss */ "./src/app/espace/banque/produit/visu-blivraison/visu-blivraison.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_2__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angular_web_storage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VisuBlivraisonComponent);
    return VisuBlivraisonComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-banque-produit-produit-module.js.map