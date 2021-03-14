(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-location-change-location-module"],{

/***/ "1KJB":
/*!******************************************************************!*\
  !*** ./src/app/settings/change-location/change-location.page.ts ***!
  \******************************************************************/
/*! exports provided: ChangeLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLocationPage", function() { return ChangeLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-location.page.html */ "jV30");
/* harmony import */ var _change_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-location.page.scss */ "osUW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChangeLocationPage = class ChangeLocationPage {
    constructor() {
        this.toggleLocation = true;
        this.toggleLocation2 = false;
    }
    ngOnInit() {
    }
};
ChangeLocationPage.ctorParameters = () => [];
ChangeLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-location',
        template: _raw_loader_change_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangeLocationPage);



/***/ }),

/***/ "SHj0":
/*!********************************************************************!*\
  !*** ./src/app/settings/change-location/change-location.module.ts ***!
  \********************************************************************/
/*! exports provided: ChangeLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLocationPageModule", function() { return ChangeLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-location-routing.module */ "UFg0");
/* harmony import */ var _change_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-location.page */ "1KJB");







let ChangeLocationPageModule = class ChangeLocationPageModule {
};
ChangeLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeLocationPageRoutingModule"]
        ],
        declarations: [_change_location_page__WEBPACK_IMPORTED_MODULE_6__["ChangeLocationPage"]]
    })
], ChangeLocationPageModule);



/***/ }),

/***/ "UFg0":
/*!****************************************************************************!*\
  !*** ./src/app/settings/change-location/change-location-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ChangeLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLocationPageRoutingModule", function() { return ChangeLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-location.page */ "1KJB");




const routes = [
    {
        path: '',
        component: _change_location_page__WEBPACK_IMPORTED_MODULE_3__["ChangeLocationPage"]
    }
];
let ChangeLocationPageRoutingModule = class ChangeLocationPageRoutingModule {
};
ChangeLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeLocationPageRoutingModule);



/***/ }),

/***/ "jV30":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change-location/change-location.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Standortzugriff</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!--Headline und Text-->\n  <h4>Warum dein Standort erforderlich ist</h4>\n  <p>Um die App im Sinne der Entwickler zu nutzen, muss auf deinen Standort zugegriffen werden können. Ohne diesen\n    Zugriff sind manche Funktionen, die ausschlag- gebend für die App sind, nicht möglich.<br>\n    <br>Du selbst kannst allerdings festlegen, wann die App auf deinen Standort zugreifen darf.\n  </p>\n\n  <br><br>\n\n  <!--Toggle für Standort EInstellungen-->\n  <ion-item>\n    <h4 class=\"no-margin\">Standortzugriff immer erlauben</h4>\n    <ion-toggle slot=\"end\" [(ngModel)]=\"toggleLocation\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <h4 class=\"no-margin\">Nur bei der Nutzung erlauben</h4>\n    <ion-toggle slot=\"end\" [(ngModel)]=\"toggleLocation2\"></ion-toggle>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "osUW":
/*!********************************************************************!*\
  !*** ./src/app/settings/change-location/change-location.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtbG9jYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=change-location-change-location-module.js.map