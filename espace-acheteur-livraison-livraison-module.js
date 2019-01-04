(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-acheteur-livraison-livraison-module"],{

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\n    <div>\n      <h2 class=\"title\">LIVRAISON</h2>\n    </div>\n  </div>\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"objet\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Objet </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.objet}} </td>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"nomAcheteur\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom acheteur </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.acheteurNom}} {{row.acheteurPrenom}}</td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date creation </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.dateCreation}} </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"Details\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Details}} \n            <button mat-icon-button [routerLink]=\"['/anim-suivi','visu-livraison',row.key]\">\n                <mat-icon>visibility</mat-icon>\n              </button>\n        </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"valider\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> valider </th>\n          <td mat-cell *matCellDef=\"let row\">\n              <div *ngIf=\"row.isValid === true\">\n                  <a [routerLink]=\"['.']\">\n                      <mat-icon style=\"color:green\">\n                          done_outline\n                      </mat-icon>\n                    </a>\n              </div> \n              <div *ngIf=\"row.isValid === false\">\n                  <a [routerLink]=\"['.']\" (click)=\"validate(row)\">\n                      <mat-icon style=\"color:red\">\n                          done_outline\n                      </mat-icon>\n                    </a>\n              </div>   \n          </td>\n        </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #134ae4ba; }\n"

/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LivraisonAcheteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivraisonAcheteurComponent", function() { return LivraisonAcheteurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
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






var LivraisonAcheteurComponent = /** @class */ (function () {
    function LivraisonAcheteurComponent(parCrud, blivraisonServ, db, session) {
        var _this = this;
        this.parCrud = parCrud;
        this.blivraisonServ = blivraisonServ;
        this.db = db;
        this.session = session;
        this.displayedColumns = ['objet', 'nomAcheteur', 'date', 'Details', 'valider'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.ELEMENT_DATA = [];
        this.crudComp = this.parCrud;
        this.blivraisonService = blivraisonServ;
        this.utilisateur = this.session.get('utilisateur');
        this.db.list("blivraison-db", function (ref) { return ref
            .orderByChild('acteurUserId')
            .equalTo(_this.utilisateur.key); })
            .valueChanges()
            .subscribe(function (res) {
            _this.dataSource.data = res;
        });
    }
    LivraisonAcheteurComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    LivraisonAcheteurComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LivraisonAcheteurComponent.prototype.validate = function (row) {
        this.blivraisonServ.updateBlivraison(row.key, { isValid: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], LivraisonAcheteurComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], LivraisonAcheteurComponent.prototype, "sort", void 0);
    LivraisonAcheteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-livraison-acheteur',
            template: __webpack_require__(/*! ./livraison-acheteur.component.html */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html"),
            styles: [__webpack_require__(/*! ./livraison-acheteur.component.scss */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"],
            app_service_blivraison_service__WEBPACK_IMPORTED_MODULE_4__["BlivraisonService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], LivraisonAcheteurComponent);
    return LivraisonAcheteurComponent;
}());



/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, LivraisonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivraisonModule", function() { return LivraisonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./livraison-acheteur/livraison-acheteur.component */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["LivraisonAcheteurComponent"], pathMatch: 'full' }
];
var LivraisonModule = /** @class */ (function () {
    function LivraisonModule() {
    }
    LivraisonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            declarations: [_livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["LivraisonAcheteurComponent"]]
        })
    ], LivraisonModule);
    return LivraisonModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-acheteur-livraison-livraison-module.js.map