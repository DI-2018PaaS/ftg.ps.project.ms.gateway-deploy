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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { DepotComponent } from './depot/depot.component';
var routes = [
    //{ path: '', component: DepotComponent, pathMatch: 'full' },
    { path: 'suivi-depot', component: _suivi_depot_suivi_depot_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDepotComponent"], pathMatch: 'full' },
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
            declarations: [_suivi_depot_suivi_depot_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDepotComponent"]
                //  , DepotComponent
            ]
        })
    ], DepotModule);
    return DepotModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  suivi-depot works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    SuiviDepotComponent.prototype.ngOnInit = function () {
    };
    SuiviDepotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suivi-depot',
            template: __webpack_require__(/*! ./suivi-depot.component.html */ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.html"),
            styles: [__webpack_require__(/*! ./suivi-depot.component.scss */ "./src/app/espace/banque/depot/suivi-depot/suivi-depot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuiviDepotComponent);
    return SuiviDepotComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-banque-depot-depot-module.js.map