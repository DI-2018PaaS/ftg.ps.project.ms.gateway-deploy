(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-commande-commande-module"],{

/***/ "./src/app/espace/banque/commande/commande.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/espace/banque/commande/commande.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, CommandeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeModule", function() { return CommandeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commande_commande_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commande/commande.component */ "./src/app/espace/banque/commande/commande/commande.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _commande_commande_component__WEBPACK_IMPORTED_MODULE_2__["CommandeComponent"], pathMatch: 'full' },
];
var CommandeModule = /** @class */ (function () {
    function CommandeModule() {
    }
    CommandeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_commande_commande_component__WEBPACK_IMPORTED_MODULE_2__["CommandeComponent"]]
        })
    ], CommandeModule);
    return CommandeModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/commande/commande/commande.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/espace/banque/commande/commande/commande.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"40px\">\n  <div class=\"example-container\" fxFlex=\"50\">\n    <mat-form-field>\n      <input matInput placeholder=\"Date de livraison\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-select placeholder=\"Mode de paiement\">\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"example-container\" fxFlex=\"50\">\n\n    <mat-form-field>\n      <mat-select placeholder=\"Reduction\">\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Description\"></textarea>\n    </mat-form-field>\n  </div>\n</div>\n\n<div>\n  <fieldset>\n    <legend>Details produits</legend>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Produit\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Produit </th>\n        <td mat-cell *matCellDef=\"let row\"> <img src=\"{{row.Produit}}\" alt=\"\">  </td>\n      </ng-container>\n    \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"Description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Description}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"Quantite\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantite </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Quantite}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"Prix\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Prix </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Prix}} </td>\n      </ng-container>\n    \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"Supprimer\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Supprimer </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Supprimer}}\n          <button mat-raised-button>\n            <mat-icon class=\"red600\">delete</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div fxLayoutAlign=\"center center\" class=\"py-8\">\n      <button mat-raised-button color=\"accent\" (click)=\"crudComp.openRechercherProduit()\">\n        Ajouter\n      </button>\n    </div>\n    \n  </fieldset>\n</div>\n\n"

/***/ }),

/***/ "./src/app/espace/banque/commande/commande/commande.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/espace/banque/commande/commande/commande.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/commande/commande/commande.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/espace/banque/commande/commande/commande.component.ts ***!
  \***********************************************************************/
/*! exports provided: CommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeComponent", function() { return CommandeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommandeComponent = /** @class */ (function () {
    function CommandeComponent(parCrud) {
        this.parCrud = parCrud;
        this.displayedColumns = ['Produit', 'Description', 'Quantite', 'Prix', 'Supprimer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.crudComp = this.parCrud;
    }
    CommandeComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CommandeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CommandeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CommandeComponent.prototype, "sort", void 0);
    CommandeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commande',
            template: __webpack_require__(/*! ./commande.component.html */ "./src/app/espace/banque/commande/commande/commande.component.html"),
            styles: [__webpack_require__(/*! ./commande.component.scss */ "./src/app/espace/banque/commande/commande/commande.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"]])
    ], CommandeComponent);
    return CommandeComponent;
}());

var ELEMENT_DATA = [
    { Produit: 'assets/images/products/headset/3-small.png', Description: 'lorem ipsum dolor si amet', Quantite: '4', Prix: '20 000', Supprimer: '' },
    { Produit: 'assets/images/products/phone/2-small.png', Description: 'lorem ipsum dolor si amet', Quantite: '8', Prix: '20 000', Supprimer: '' },
];


/***/ })

}]);
//# sourceMappingURL=espace-banque-commande-commande-module.js.map