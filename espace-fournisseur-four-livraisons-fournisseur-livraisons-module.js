(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-fournisseur-four-livraisons-fournisseur-livraisons-module"],{

/***/ "./src/app/espace/fournisseur/four-livraisons/fournisseur-livraisons.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/fournisseur-livraisons.module.ts ***!
  \*************************************************************************************/
/*! exports provided: routes, LivraisonsFournisseurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivraisonsFournisseurModule", function() { return LivraisonsFournisseurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _livraison_list_fourn_livraison_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./livraison-list/fourn-livraison-list.component */ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.ts");
/* harmony import */ var _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visu-blivraison/visu-blivraison.component */ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _livraison_list_fourn_livraison_list_component__WEBPACK_IMPORTED_MODULE_7__["FoLivraisonListComponent"], pathMatch: 'full' },
    { path: 'visu-blivraison/:id', component: _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_8__["VisuBlivraisonComponent"], pathMatch: 'full' }
];
var LivraisonsFournisseurModule = /** @class */ (function () {
    function LivraisonsFournisseurModule() {
    }
    LivraisonsFournisseurModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            ],
            declarations: [_livraison_list_fourn_livraison_list_component__WEBPACK_IMPORTED_MODULE_7__["FoLivraisonListComponent"], _visu_blivraison_visu_blivraison_component__WEBPACK_IMPORTED_MODULE_8__["VisuBlivraisonComponent"]]
        })
    ], LivraisonsFournisseurModule);
    return LivraisonsFournisseurModule;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n    <div>\n      <h2 class=\"title\">LIVRAISON</h2>\n    </div>\n  </div>\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"objet\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Objet </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.objet}} </td>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"nomAcheteur\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom acheteur </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.acheteurNom}} {{row.acheteurPrenom}}</td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date creation </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.dateCreation}} </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"Details\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Details}} \n            <button mat-icon-button [routerLink]=\"['/anim-suivi','visu-blivraison',row.key]\">\n                <mat-icon style=\"color:red !important\"> visibility</mat-icon>\n            </button>\n        </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"valider\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> valider </th>\n        <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isApprovedByAnim === false\">\n                <button mat-icon-button (click)=\"validate(row.key)\">\n                  <mat-icon>done_all</mat-icon>\n                </button>\n            </div>\n            <div *ngIf=\"row.isApprovedByAnim == true\">\n                <button mat-icon-button>\n                  <mat-icon style=\"color:greenyellow !important\">done_all</mat-icon>\n                </button>\n            </div>\n          <!-- <button mat-icon-button (click)=\"validate(row.key)\">\n            <mat-icon>done_all</mat-icon>\n          </button> -->\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #134ae4ba; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FoLivraisonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoLivraisonListComponent", function() { return FoLivraisonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/blivraison.service */ "./src/app/service/blivraison.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoLivraisonListComponent = /** @class */ (function () {
    function FoLivraisonListComponent(parCrud, blivraisonServ, db, session) {
        var _this = this;
        this.parCrud = parCrud;
        this.blivraisonServ = blivraisonServ;
        this.db = db;
        this.session = session;
        this.displayedColumns = ['objet', 'nomAcheteur', 'date', 'Details', 'valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.utilisateur = {};
        this.ELEMENT_DATA = [];
        this.crudComp = this.parCrud;
        this.blivraisonService = blivraisonServ;
        this.utilisateur = this.session.get('utilisateur');
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('fournisseurId')
            .equalTo(_this.utilisateur.fkey); })
            .valueChanges()
            .subscribe(function (res) {
            res.forEach(function (response) {
                if (response['isApprovedByAnim'] == true) {
                    var data = _this.dataSource.data;
                    data = res;
                    _this.dataSource.data = data;
                }
            });
        });
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('livreur')
            .equalTo(_this.utilisateur.fkey); })
            .valueChanges()
            .subscribe(function (rest) {
            rest.forEach(function (response) {
                if (response['isApprovedByAnim'] == true) {
                    var datas = _this.dataSource.data;
                    datas.push(rest);
                    _this.dataSource.data = datas[0];
                }
            });
        });
    }
    FoLivraisonListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    FoLivraisonListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    FoLivraisonListComponent.prototype.validate = function (key) {
        this.blivraisonServ.updateBlivraison(key, { isApprovedByFourniss: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], FoLivraisonListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], FoLivraisonListComponent.prototype, "sort", void 0);
    FoLivraisonListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folivraison-list',
            template: __webpack_require__(/*! ./fourn-livraison-list.component.html */ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.html"),
            styles: [__webpack_require__(/*! ./fourn-livraison-list.component.scss */ "./src/app/espace/fournisseur/four-livraisons/livraison-list/fourn-livraison-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_1__["CrudPopupComponent"],
            app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_4__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], FoLivraisonListComponent);
    return FoLivraisonListComponent;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <div fxFlex=\"70\">\n      <div fxLayout=\"column\">\n          <div>\n            <fieldset>\n                {{fournisseur.prenom}} {{fournisseur.nom}} - <span style=\"font-size: 19px;\">{{agreement.juridique}}</span><br>\n                Tel/Fax : {{fournisseur.telephone}} <br>\n                NINEA : {{agreement.ninea}}\n            </fieldset>\n          </div>\n          <div fxLayoutAlign=\"center center\" style=\"margin-top:3%\">\n            <fieldset style=\"width:100%\">\n                <p> <span>OBJET : </span>{{bonLivraison.objet}}</p>\n            </fieldset> \n          </div>\n          <div fxLayoutAlign=\"center center\">\n              <h2>Liste des produits</h2>\n          </div>\n          <div>\n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                  <!-- Checkbox Column -->\n                  <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                      </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\">\n                      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                    (change)=\"$event ? selection.toggle(row) : null\"\n                                    [checked]=\"selection.isSelected(row)\">\n                      </mat-checkbox>\n                    </td>\n                  </ng-container>\n                \n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"code\">\n                    <th mat-header-cell *matHeaderCellDef> Code </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n                  </ng-container>\n                \n                  <!-- Weight Column -->\n                  <ng-container matColumnDef=\"designation\">\n                    <th mat-header-cell *matHeaderCellDef> Designation </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\n                  </ng-container>\n                \n                  <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"descriptionProduit\">\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.descriptionProduit}} </td>\n                  </ng-container>\n      \n                  <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"prixUnitaire\">\n                      <th mat-header-cell *matHeaderCellDef> Prix </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.prixUnitaire}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"quantite\">\n                      <th mat-header-cell *matHeaderCellDef> Quantité </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.zoneGeographiqueId}} </td>\n                    </ng-container>\n                \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                      (click)=\"selection.toggle(row)\">\n                  </tr>\n              </table>\n          </div>\n          <div fxLayoutAlign=\"end right\" style=\"font-size:20px\"><span>Prix total : </span><span style=\"color:red\">{{totalArticle}} XOF</span></div>\n      </div>\n      \n\n    </div>\n    <div fxFlex=\"30\">\n        <div fxLayout=\"column\" fxLayouAlign=\"center center\">\n            <div fxLayoutAlign=\"center center\">\n                <h2>Detais paiement</h2>\n            </div>\n            <mat-card>\n                <div style=\"width:100%\">\n                    Mode livraison : {{bonLivraison.modeLivraison}}\n                </div> \n            </mat-card>\n            &nbsp;\n            <mat-card>\n                <div style=\"width:100%\">\n                    Livreur : {{livreur.prenom}} {{livreur.nom}}  - {{livreur.telephone}}\n                </div>\n            </mat-card>\n        </div>\n    </div>\n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.price {\n  color: red;\n  font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.ts ***!
  \*************************************************************************************************/
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
        this.db.list('agreement-db', function (tr) { return tr
            .orderByChild("userID")
            .equalTo(_this.utilisateur.key); })
            .valueChanges()
            .subscribe(function (tf) {
            _this.agreement = tf[0];
        });
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('key')
            .equalTo(key); })
            .valueChanges()
            .subscribe(function (res) {
            _this.bonLivraison = res[0];
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
            template: __webpack_require__(/*! ./visu-blivraison.component.html */ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.html"),
            styles: [__webpack_require__(/*! ./visu-blivraison.component.scss */ "./src/app/espace/fournisseur/four-livraisons/visu-blivraison/visu-blivraison.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_2__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angular_web_storage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VisuBlivraisonComponent);
    return VisuBlivraisonComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-fournisseur-four-livraisons-fournisseur-livraisons-module.js.map