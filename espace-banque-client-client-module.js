(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-client-client-module"],{

/***/ "./src/app/espace/banque/client/client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/espace/banque/client/client.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/client.component */ "./src/app/espace/banque/client/client/client.component.ts");
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
    { path: '', component: _client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"], pathMatch: 'full' },
];
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/client/client/client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/espace/banque/client/client/client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n  <div>\n    <h2 class=\"title\">LISTE CLIENT</h2>\n  </div>\n</div>\n<div class=\"py-8\">\n  <button mat-raised-button color=\"accent\" (click)=\"crudComp.openCreateAcheteur()\">Ajouter un client</button>\n</div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"Matricule\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Matricule </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Matricule}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"Client\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Client </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Client}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Type}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Modifier\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Modifier}}\n        <button mat-raised-button>\n          <mat-icon class=\"orange600\" (click)=\"crudComp.openUpdateAcheteur()\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Supprimer\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Supprimer </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Supprimer}}\n        <button mat-raised-button>\n          <mat-icon class=\"red600\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/client/client/client.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/espace/banque/client/client/client.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/client/client/client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/espace/banque/client/client/client.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
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



var ClientComponent = /** @class */ (function () {
    function ClientComponent(parCrud) {
        this.parCrud = parCrud;
        this.displayedColumns = ['Matricule', 'Client', 'Type', 'Modifier', 'Supprimer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.crudComp = this.parCrud;
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ClientComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ClientComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ClientComponent.prototype, "sort", void 0);
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/espace/banque/client/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/espace/banque/client/client/client.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"]])
    ], ClientComponent);
    return ClientComponent;
}());

var ELEMENT_DATA = [
    { Matricule: '12340UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12350UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
    { Matricule: '12370UIXS', Client: 'NLS', Type: 'Fournisseur', Modifier: '', Supprimer: '' },
];


/***/ })

}]);
//# sourceMappingURL=espace-banque-client-client-module.js.map