(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-validations-validations-module"],{

/***/ "./src/app/espace/animateur/validations/boutique/boutique.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/boutique/boutique.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n  <div>\n    <h2 class=\"title\">LISTE BOUTIQUES A VALIDER</h2>\n  </div>\n</div>\n<div class=\"py-8\"><button mat-raised-button color=\"accent\" >Ajouter une Boutique</button></div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> nom </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.nom}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"ref\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ref </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.ref}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> description </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n    </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"no\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> no </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.no}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"rue\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> rue </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.rue}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"codep\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> codep </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.codep}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"ville\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ville </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.ville}} </td>\n      </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Valider\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Valider </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Valider}}\n        <button mat-raised-button >\n          <mat-icon class=\"orange600\">check_circle_outline</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Supprimer\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header > Supprimer </th>\n      <td mat-cell *matCellDef=\"let row\" > {{row.Supprimer}}\n        <button mat-raised-button>\n          <mat-icon class=\"red600\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/validations/boutique/boutique.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/boutique/boutique.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/validations/boutique/boutique.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/boutique/boutique.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BoutiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoutiqueComponent", function() { return BoutiqueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_boutique_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/boutique.service */ "./src/app/service/boutique.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoutiqueComponent = /** @class */ (function () {
    function BoutiqueComponent(boutiqueService, db) {
        var _this = this;
        this.boutiqueService = boutiqueService;
        this.db = db;
        this.displayedColumns = ['nom', 'ref', 'description', 'no', 'rue', 'codep', 'ville', 'Valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dbPath = 'boutique-db';
        this.boutiqueList = [];
        this.boutiqueRef = null;
        this.boutique = {};
        this.ELEMENT_DATA = this.boutiqueList;
        this.boutiqueService.getBoutiqueList().valueChanges().subscribe(function (res) {
            _this.boutiqueList.push(res);
            _this.dataSource.data = res;
            console.log(_this.dataSource.data);
        });
    }
    BoutiqueComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BoutiqueComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BoutiqueComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], BoutiqueComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoutiqueComponent.prototype, "rowProperty", void 0);
    BoutiqueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boutique',
            template: __webpack_require__(/*! ./boutique.component.html */ "./src/app/espace/animateur/validations/boutique/boutique.component.html"),
            styles: [__webpack_require__(/*! ./boutique.component.scss */ "./src/app/espace/animateur/validations/boutique/boutique.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_boutique_service__WEBPACK_IMPORTED_MODULE_1__["BoutiqueService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], BoutiqueComponent);
    return BoutiqueComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/liste-validation/liste-validation.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"30px\" class=\"px-24\">\n\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\n    <a [routerLink]=\"['boutique-list']\" fxFlex=\"50\" class=\"panel\">\n      <div>\n          <span class=\"title\">Boutique</span>\n      </div>\n    </a>\n    <a [routerLink]=\"['produit-list']\" fxFlex=\"50\" class=\"panel\">\n      <div>\n        <span class=\"title\">Produit </span>\n      </div>\n    </a>\n    <a [routerLink]=\"['magasin-list']\" fxFlex=\"50\" class=\"panel\">\n      <div>\n        <span class=\"title\">Magasin </span>\n      </div>\n    </a>\n  \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/liste-validation/liste-validation.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 100%;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.elmt-content {\n  padding: 5px;\n  background-color: rgba(131, 131, 182, 0.288); }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.panel {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n  padding: 3%;\n  text-decoration: none;\n  background-color: #9A3838;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/liste-validation/liste-validation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListeValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeValidationComponent", function() { return ListeValidationComponent; });
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

var ListeValidationComponent = /** @class */ (function () {
    function ListeValidationComponent() {
    }
    ListeValidationComponent.prototype.ngOnInit = function () {
    };
    ListeValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liste-validation',
            template: __webpack_require__(/*! ./liste-validation.component.html */ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.html"),
            styles: [__webpack_require__(/*! ./liste-validation.component.scss */ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListeValidationComponent);
    return ListeValidationComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/validations/magasin/magasin.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/magasin/magasin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n  <div>\n    <h2 class=\"title\">LISTE MAGASINS A VALIDER</h2>\n  </div>\n</div>\n<div class=\"py-8\"><button mat-raised-button color=\"accent\" >Ajouter un Magasin</button></div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> nom </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.nom}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"ref\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ref </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.ref}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"adresse\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> adresse </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.adresse}} </td>\n    </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> description </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> email </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n      </ng-container>\n   \n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Valider\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Valider </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Valider}}\n        <button mat-raised-button >\n          <mat-icon class=\"orange600\">check_circle_outline</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/validations/magasin/magasin.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/magasin/magasin.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/validations/magasin/magasin.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/magasin/magasin.component.ts ***!
  \***************************************************************************/
/*! exports provided: MagasinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagasinComponent", function() { return MagasinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_magasin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/magasin.service */ "./src/app/service/magasin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MagasinComponent = /** @class */ (function () {
    function MagasinComponent(magasinService, db) {
        var _this = this;
        this.magasinService = magasinService;
        this.db = db;
        this.displayedColumns = ['nom', 'ref', 'adresse', 'description', 'email', 'Valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dbPath = 'magasin-db';
        this.magasinList = [];
        this.produitRef = null;
        this.magasin = {};
        this.ELEMENT_DATA = this.magasinList;
        this.magasinService.getMagasinList().valueChanges().subscribe(function (res) {
            _this.magasinList.push(res);
            _this.dataSource.data = res;
            console.log(_this.dataSource.data);
        });
    }
    MagasinComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    MagasinComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MagasinComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MagasinComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MagasinComponent.prototype, "rowProperty", void 0);
    MagasinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-magasin',
            template: __webpack_require__(/*! ./magasin.component.html */ "./src/app/espace/animateur/validations/magasin/magasin.component.html"),
            styles: [__webpack_require__(/*! ./magasin.component.scss */ "./src/app/espace/animateur/validations/magasin/magasin.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_magasin_service__WEBPACK_IMPORTED_MODULE_1__["MagasinService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], MagasinComponent);
    return MagasinComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/validations/produit/produit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/produit/produit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n  <div>\n    <h2 class=\"title\">LISTE PRODUITS A VALIDER</h2>\n  </div>\n</div>\n<div class=\"py-8\"><button mat-raised-button color=\"accent\" >Ajouter un Produit</button></div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> code </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.code}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"designation\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> designation </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.designation}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> description </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n    </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"prixUnitaire\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> prixUnitaire </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.prixUnitaire}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"descriptionProduit\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> descriptionProduit </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.descriptionProduit}} </td>\n      </ng-container>\n       <!-- Color Column -->\n       <ng-container matColumnDef=\"zoneGeographiqueId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> zoneGeographiqueId </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.zoneGeographiqueId}} </td>\n      </ng-container>\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Valider\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Valider </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Valider}}\n        <button mat-raised-button >\n          <mat-icon class=\"orange600\">check_circle_outline</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/validations/produit/produit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/produit/produit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/validations/produit/produit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/espace/animateur/validations/produit/produit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitComponent", function() { return ProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_produit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/produit.service */ "./src/app/service/produit.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProduitComponent = /** @class */ (function () {
    function ProduitComponent(produitService, db) {
        var _this = this;
        this.produitService = produitService;
        this.db = db;
        this.displayedColumns = ['code', 'designation', 'description', 'prixUnitaire', 'descriptionProduit', 'zoneGeographiqueId', 'Valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dbPath = 'produit-db';
        this.produitList = [];
        this.produitRef = null;
        this.produit = {};
        this.ELEMENT_DATA = this.produitList;
        this.produitService.getProduitList().valueChanges().subscribe(function (res) {
            _this.produitList.push(res);
            _this.dataSource.data = res;
            console.log(_this.dataSource.data);
        });
    }
    ProduitComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProduitComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProduitComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProduitComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProduitComponent.prototype, "rowProperty", void 0);
    ProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit',
            template: __webpack_require__(/*! ./produit.component.html */ "./src/app/espace/animateur/validations/produit/produit.component.html"),
            styles: [__webpack_require__(/*! ./produit.component.scss */ "./src/app/espace/animateur/validations/produit/produit.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_produit_service__WEBPACK_IMPORTED_MODULE_1__["ProduitService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ProduitComponent);
    return ProduitComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/validations/validations.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/espace/animateur/validations/validations.module.ts ***!
  \********************************************************************/
/*! exports provided: routes, ValidationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsModule", function() { return ValidationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _boutique_boutique_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boutique/boutique.component */ "./src/app/espace/animateur/validations/boutique/boutique.component.ts");
/* harmony import */ var _liste_validation_liste_validation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liste-validation/liste-validation.component */ "./src/app/espace/animateur/validations/liste-validation/liste-validation.component.ts");
/* harmony import */ var _magasin_magasin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magasin/magasin.component */ "./src/app/espace/animateur/validations/magasin/magasin.component.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/espace/animateur/validations/produit/produit.component.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _liste_validation_liste_validation_component__WEBPACK_IMPORTED_MODULE_4__["ListeValidationComponent"], pathMatch: 'full' },
    { path: 'boutique-list', component: _boutique_boutique_component__WEBPACK_IMPORTED_MODULE_3__["BoutiqueComponent"], pathMatch: 'full' },
    { path: 'produit-list', component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__["ProduitComponent"], pathMatch: 'full' },
    { path: 'magasin-list', component: _magasin_magasin_component__WEBPACK_IMPORTED_MODULE_5__["MagasinComponent"], pathMatch: 'full' },
];
var ValidationsModule = /** @class */ (function () {
    function ValidationsModule() {
    }
    ValidationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            declarations: [_boutique_boutique_component__WEBPACK_IMPORTED_MODULE_3__["BoutiqueComponent"], _liste_validation_liste_validation_component__WEBPACK_IMPORTED_MODULE_4__["ListeValidationComponent"], _magasin_magasin_component__WEBPACK_IMPORTED_MODULE_5__["MagasinComponent"], _produit_produit_component__WEBPACK_IMPORTED_MODULE_6__["ProduitComponent"]]
        })
    ], ValidationsModule);
    return ValidationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-animateur-validations-validations-module.js.map