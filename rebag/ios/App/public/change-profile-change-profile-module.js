(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-change-profile-module"],{

/***/ "Ch2t":
/*!**************************************************************************!*\
  !*** ./src/app/settings/change-profile/change-profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChangeProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePageRoutingModule", function() { return ChangeProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-profile.page */ "n4dz");




const routes = [
    {
        path: '',
        component: _change_profile_page__WEBPACK_IMPORTED_MODULE_3__["ChangeProfilePage"]
    }
];
let ChangeProfilePageRoutingModule = class ChangeProfilePageRoutingModule {
};
ChangeProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeProfilePageRoutingModule);



/***/ }),

/***/ "n4dz":
/*!****************************************************************!*\
  !*** ./src/app/settings/change-profile/change-profile.page.ts ***!
  \****************************************************************/
/*! exports provided: ChangeProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePage", function() { return ChangeProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-profile.page.html */ "v2LF");
/* harmony import */ var _change_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-profile.page.scss */ "tMQE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChangeProfilePage = class ChangeProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ChangeProfilePage.ctorParameters = () => [];
ChangeProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-profile',
        template: _raw_loader_change_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangeProfilePage);



/***/ }),

/***/ "s0Wk":
/*!******************************************************************!*\
  !*** ./src/app/settings/change-profile/change-profile.module.ts ***!
  \******************************************************************/
/*! exports provided: ChangeProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePageModule", function() { return ChangeProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-profile-routing.module */ "Ch2t");
/* harmony import */ var _change_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-profile.page */ "n4dz");







let ChangeProfilePageModule = class ChangeProfilePageModule {
};
ChangeProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeProfilePageRoutingModule"]
        ],
        declarations: [_change_profile_page__WEBPACK_IMPORTED_MODULE_6__["ChangeProfilePage"]]
    })
], ChangeProfilePageModule);



/***/ }),

/***/ "tMQE":
/*!******************************************************************!*\
  !*** ./src/app/settings/change-profile/change-profile.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "v2LF":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change-profile/change-profile.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>change-profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=change-profile-change-profile-module.js.map