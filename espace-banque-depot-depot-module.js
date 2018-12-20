(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-depot-depot-module"],{

/***/ "./src/app/espace/banque/depot/depot.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/espace/banque/depot/depot.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, DepotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotModule", function() { return DepotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _suivi_depot_suivi_depot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suivi-depot/suivi-depot.component */ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _depot_depot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depot/depot.component */ "./src/app/espace/banque/depot/depot/depot.component.ts");
/* harmony import */ var _suivi_depot_details_suivi_depot_details_suivi_depot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suivi-depot/details-suivi-depot/details-suivi-depot.component */ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _depot_depot_component__WEBPACK_IMPORTED_MODULE_6__["DepotComponent"], pathMatch: 'full' },
    { path: 'suivi-depot', component: _suivi_depot_suivi_depot_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDepotComponent"], pathMatch: 'full' },
    { path: 'details-suivi-depot/:id', component: _suivi_depot_details_suivi_depot_details_suivi_depot_component__WEBPACK_IMPORTED_MODULE_7__["DetailsSuiviDepotComponent"], pathMatch: 'full' },
];
var DepotModule = /** @class */ (function () {
    function DepotModule() {
    }
    DepotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_suivi_depot_suivi_depot_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDepotComponent"], _depot_depot_component__WEBPACK_IMPORTED_MODULE_6__["DepotComponent"], _suivi_depot_details_suivi_depot_details_suivi_depot_component__WEBPACK_IMPORTED_MODULE_7__["DetailsSuiviDepotComponent"]
            ]
        })
    ], DepotModule);
    return DepotModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/depot/depot/depot.component.html":
/*!****************************************************************!*\
  !*** ./src/app/espace/banque/depot/depot/depot.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n      <div>\n        <h2 class=\"title\">LISTE DEPOT</h2>\n      </div>\n    </div>\n    <div class=\"py-8\">\n      <button mat-raised-button color=\"accent\" (click)=\"crudComp.openCreateLigneDepot()\">Ajouter une ligne de depot</button>\n    </div>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n        <!-- ID Column -->\n        <ng-container matColumnDef=\"Plafond\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Plafond </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Plafond}} </td>\n        </ng-container>\n    \n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"Date_Creation\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date_Creation </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Date_Creation}} </td>\n        </ng-container>\n    \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Attribue\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Attribue </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Attribue}} </td>\n        </ng-container>\n    \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Details\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Details}}\n            <button mat-raised-button>\n              <mat-icon class=\"orange600\">details</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n    \n        <!-- Color Column -->\n        <ng-container matColumnDef=\"Modifier\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Modifier}}\n            <button mat-raised-button (click)=\"crudComp.openUpdateLigneCredit()\">\n              <mat-icon class=\"orange600\">edit</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n    \n        <!-- Color Column -->\n        <ng-container matColumnDef=\"Supprimer\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Supprimer </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.Supprimer}}\n            <button mat-raised-button>\n              <mat-icon class=\"red600\">delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n    \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>"

/***/ }),

/***/ "./src/app/espace/banque/depot/depot/depot.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/espace/banque/depot/depot/depot.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/depot/depot/depot.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/espace/banque/depot/depot/depot.component.ts ***!
  \**************************************************************/
/*! exports provided: DepotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotComponent", function() { return DepotComponent; });
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



var DepotComponent = /** @class */ (function () {
    function DepotComponent(parCrud) {
        this.parCrud = parCrud;
        this.displayedColumns = ['Plafond', 'Date_Creation', 'Attribue', 'Details', 'Modifier', 'Supprimer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.crudComp = this.parCrud;
    }
    DepotComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DepotComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DepotComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DepotComponent.prototype, "sort", void 0);
    DepotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-depot',
            template: __webpack_require__(/*! ./depot.component.html */ "./src/app/espace/banque/depot/depot/depot.component.html"),
            styles: [__webpack_require__(/*! ./depot.component.scss */ "./src/app/espace/banque/depot/depot/depot.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"]])
    ], DepotComponent);
    return DepotComponent;
}());

var ELEMENT_DATA = [
    { Plafond: '500 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
    { Plafond: '1 000 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
    { Plafond: '800 000', Date_Creation: '18/04/18', Attribue: 'NDT', Details: '', Modifier: '', Supprimer: '' },
];


/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <div fxLayout=\"row\" class=\"toolbar\">\n    <h1>LIGNE DE DEPOT A</h1>\n  </div>\n  <div fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <div fxFlex=\"100\">\n        <div class=\"form-container\">\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Denomination\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Date creation\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <mat-form-field>\n              <mat-select value=\"option1\">\n                <mat-option>None</mat-option>\n                <mat-option value=\"option1\">Credit A</mat-option>\n                <mat-option value=\"option2\">Credit B</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n            <mat-form-field>\n              <textarea matInput placeholder=\"Description\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div fxFlex=\"100\">\n        <div class=\"form-container\">\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Montant plafond\">\n            </mat-form-field>\n          </div>\n          \n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Responsable\">\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetailsSuiviDepotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSuiviDepotComponent", function() { return DetailsSuiviDepotComponent; });
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

var DetailsSuiviDepotComponent = /** @class */ (function () {
    function DetailsSuiviDepotComponent() {
    }
    DetailsSuiviDepotComponent.prototype.ngOnInit = function () {
    };
    DetailsSuiviDepotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-suivi-depot',
            template: __webpack_require__(/*! ./details-suivi-depot.component.html */ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.html"),
            styles: [__webpack_require__(/*! ./details-suivi-depot.component.scss */ "./src/app/espace/banque/depot/suivi-depot/details-suivi-depot/details-suivi-depot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsSuiviDepotComponent);
    return DetailsSuiviDepotComponent;
}());



/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n  <div>\n    <h2 class=\"title\">LISTE DEPOT</h2>\n  </div>\n</div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"Denomination\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Denomination </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Denomination}} </td>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"Montant_Plafond\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Montant_Plafond </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Montant_Plafond}} </td>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"Accorde_a\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Accorde_a </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Accorde_a}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Details\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Details}}\n        <button mat-raised-button [routerLink]=\"['/depot','details-suivi-depot',1]\">\n          <mat-icon class=\"orange600\">details</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuiviDepotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviDepotComponent", function() { return SuiviDepotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuiviDepotComponent = /** @class */ (function () {
    function SuiviDepotComponent() {
        this.displayedColumns = ['Denomination', 'Montant_Plafond', 'Accorde_a', 'Details'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SuiviDepotComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SuiviDepotComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SuiviDepotComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SuiviDepotComponent.prototype, "sort", void 0);
    SuiviDepotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suivi-depot',
            template: __webpack_require__(/*! ./suivi-depot.component.html */ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html"),
            styles: [__webpack_require__(/*! ./suivi-depot.component.scss */ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss")]
        })
    ], SuiviDepotComponent);
    return SuiviDepotComponent;
}());

var ELEMENT_DATA = [
    { Denomination: 'Ligne de credit A', Montant_Plafond: '50 000', Accorde_a: 'Animateur A', Details: '' },
    { Denomination: 'Ligne de credit B', Montant_Plafond: '50 000', Accorde_a: 'Animateur B', Details: '' },
    { Denomination: 'Ligne de credit C', Montant_Plafond: '50 000', Accorde_a: 'Animateur C', Details: '' },
];


/***/ })

}]);
//# sourceMappingURL=espace-banque-depot-depot-module.js.map