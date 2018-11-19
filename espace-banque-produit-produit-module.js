(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-produit-produit-module"],{

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _suivi_produit_suivi_produit_component__WEBPACK_IMPORTED_MODULE_2__["SuiviProduitComponent"], pathMatch: 'full' },
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
            declarations: [_suivi_produit_suivi_produit_component__WEBPACK_IMPORTED_MODULE_2__["SuiviProduitComponent"]]
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

module.exports = "<p>\r\n  suivi-produit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    function SuiviProduitComponent() {
    }
    SuiviProduitComponent.prototype.ngOnInit = function () {
    };
    SuiviProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suivi-produit',
            template: __webpack_require__(/*! ./suivi-produit.component.html */ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.html"),
            styles: [__webpack_require__(/*! ./suivi-produit.component.scss */ "./src/app/espace/banque/produit/suivi-produit/suivi-produit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuiviProduitComponent);
    return SuiviProduitComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-banque-produit-produit-module.js.map