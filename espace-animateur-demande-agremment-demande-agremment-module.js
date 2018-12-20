(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-demande-agremment-demande-agremment-module"],{

/***/ "./src/app/espace/animateur/demande-agremment/demande-agremment.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/espace/animateur/demande-agremment/demande-agremment.module.ts ***!
  \********************************************************************************/
/*! exports provided: routes, DemandeAgremmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeAgremmentModule", function() { return DemandeAgremmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demande_agremment_demande_agremment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demande-agremment/demande-agremment.component */ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _demande_agremment_demande_agremment_component__WEBPACK_IMPORTED_MODULE_2__["DemandeAgremmentComponent"],
        pathMatch: 'full'
    }
];
var DemandeAgremmentModule = /** @class */ (function () {
    function DemandeAgremmentModule() {
    }
    DemandeAgremmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            declarations: [_demande_agremment_demande_agremment_component__WEBPACK_IMPORTED_MODULE_2__["DemandeAgremmentComponent"]]
        })
    ], DemandeAgremmentModule);
    return DemandeAgremmentModule;
}());



/***/ }),

/***/ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n    <div><h2 class=\"title\">Liste des demandes d'agrément</h2></div>\n  </div>\n  <a (click)=\"ajoutDemandeAgrement()\" mat-raised-button color=\"accent\" style=\"margin-top:1%\">Ajouter une demande</a>\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer\">\n    </mat-form-field>\n    \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n        <!-- ID Column -->\n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n        </ng-container>\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"destinataireID\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Destinataire </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.destinataireID}} </td>\n          </ng-container>\n\n          <!-- ID Column -->\n        <ng-container matColumnDef=\"dateCreated\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date de creation </th>\n            <td mat-cell *matCellDef=\"let row\"> {{ row.dateCreated | date : format : shortDate}} </td>\n          </ng-container>\n    \n        <!-- Color Column -->\n        <ng-container matColumnDef=\"Supprimer\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header > Supprimer </th>\n          <td mat-cell *matCellDef=\"let row\" > {{row.Supprimer}}\n            <button mat-raised-button>\n              <mat-icon class=\"red600\">delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n    \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>"

/***/ }),

/***/ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DemandeAgremmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeAgremmentComponent", function() { return DemandeAgremmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
/* harmony import */ var app_service_agreement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/agreement.service */ "./src/app/service/agreement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemandeAgremmentComponent = /** @class */ (function () {
    function DemandeAgremmentComponent(agreementService, parCrud) {
        var _this = this;
        this.agreementService = agreementService;
        this.parCrud = parCrud;
        this.displayedColumns = ['description', 'destinataireID', 'dateCreated', 'Supprimer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.agreementList = [];
        this.agreement = {};
        this.ELEMENT_DATA = this.agreementList;
        console.log(this.agreementService.getAgreementList());
        this.crudComp = this.parCrud;
        this.agreementService.getAgreementList().valueChanges().subscribe(function (res) {
            _this.agreementList.push(res);
            _this.dataSource.data = res;
        });
    }
    DemandeAgremmentComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DemandeAgremmentComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DemandeAgremmentComponent.prototype.ajoutDemandeAgrement = function () {
        this.crudComp.openCreateDemandeAgreement();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DemandeAgremmentComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DemandeAgremmentComponent.prototype, "sort", void 0);
    DemandeAgremmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demande-agremment',
            template: __webpack_require__(/*! ./demande-agremment.component.html */ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.html"),
            styles: [__webpack_require__(/*! ./demande-agremment.component.scss */ "./src/app/espace/animateur/demande-agremment/demande-agremment/demande-agremment.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_agreement_service__WEBPACK_IMPORTED_MODULE_3__["AgreementService"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"]])
    ], DemandeAgremmentComponent);
    return DemandeAgremmentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-animateur-demande-agremment-demande-agremment-module.js.map