(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-administrateur-alertes-alertes-module"],{

/***/ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\n    <div fxFlex=\"50\">\n      <span class=\"title\">Plafond Ligne de Crédits</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom prenom (Animateur) <mat-icon class=\"orange600\">money</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"orange600\">money</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">money</mat-icon></div>\n      </div>\n    </div>\n    <div fxFlex=\"50\">\n      <span class=\"title\">Fin de Stock</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom produit (Magasin) <mat-icon class=\"orange600\">schedule</mat-icon></div>\n        <div>Nom produit (Magasin)<mat-icon class=\"orange600\">schedule</mat-icon></div>\n        <div>Nom produit (Magasin)<mat-icon class=\"red600\">schedule</mat-icon></div>\n      </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\n    <div fxFlex=\"50\">\n      <span class=\"title\">Plafond Ligne de Dépots</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">new_releases</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">new_releases</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">new_releases</mat-icon></div>\n      </div>\n    </div>\n    <div fxFlex=\"50\">\n      <span class=\"title\">Echec Paiements</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom produit (Magasin) <mat-icon class=\"red600\">announcement</mat-icon></div>\n        <div>Nom produit (Magasin) <mat-icon class=\"red600\">announcement</mat-icon></div>\n        <div>Nom produit (Magasin) <mat-icon class=\"red600\">announcement</mat-icon></div>\n      </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\n    <div fxFlex=\"50\">\n      <span class=\"title\">Retard Remboursement Pret</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">watch_later</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"red600\">watch_later</mat-icon></div>\n        <div>Nom prenom (Animateur) <mat-icon class=\"orange600\">watch_later</mat-icon></div>\n      </div>\n    </div>\n    <div fxFlex=\"50\">\n      <span class=\"title\">Retard Livraison</span>\n  \n      <div fxLayout=\"column\" class=\"mt-4\" fxLayoutGap=\"10px\" class=\"elmt-content\">\n        <div>Nom produit (Magasin) <mat-icon class=\"orange600\">restore</mat-icon></div>\n        <div>Nom produit (Magasin) <mat-icon class=\"orange600\">restore</mat-icon></div>\n        <div>Nom produit (Magasin) <mat-icon class=\"red600\">restore</mat-icon></div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 100%;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.elmt-content {\n  padding: 5px;\n  background-color: rgba(131, 131, 182, 0.288); }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n"

/***/ }),

/***/ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AlertesAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertesAdminComponent", function() { return AlertesAdminComponent; });
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

var AlertesAdminComponent = /** @class */ (function () {
    function AlertesAdminComponent() {
    }
    AlertesAdminComponent.prototype.ngOnInit = function () {
    };
    AlertesAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alertes-admin',
            template: __webpack_require__(/*! ./alertes-admin.component.html */ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.html"),
            styles: [__webpack_require__(/*! ./alertes-admin.component.scss */ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertesAdminComponent);
    return AlertesAdminComponent;
}());



/***/ }),

/***/ "./src/app/espace/administrateur/alertes/alertes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/espace/administrateur/alertes/alertes.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, AlertesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertesModule", function() { return AlertesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alertes_admin_alertes_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertes-admin/alertes-admin.component */ "./src/app/espace/administrateur/alertes/alertes-admin/alertes-admin.component.ts");
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
    { path: '', component: _alertes_admin_alertes_admin_component__WEBPACK_IMPORTED_MODULE_2__["AlertesAdminComponent"], pathMatch: 'full' }
];
var AlertesModule = /** @class */ (function () {
    function AlertesModule() {
    }
    AlertesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            ],
            declarations: [_alertes_admin_alertes_admin_component__WEBPACK_IMPORTED_MODULE_2__["AlertesAdminComponent"]]
        })
    ], AlertesModule);
    return AlertesModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-administrateur-alertes-alertes-module.js.map