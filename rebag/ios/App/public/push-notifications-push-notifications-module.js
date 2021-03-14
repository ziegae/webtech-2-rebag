(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-notifications-push-notifications-module"],{

/***/ "8bdZ":
/*!**********************************************************************************!*\
  !*** ./src/app/settings/push-notifications/push-notifications-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PushNotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsPageRoutingModule", function() { return PushNotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _push_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./push-notifications.page */ "i2J4");




const routes = [
    {
        path: '',
        component: _push_notifications_page__WEBPACK_IMPORTED_MODULE_3__["PushNotificationsPage"]
    }
];
let PushNotificationsPageRoutingModule = class PushNotificationsPageRoutingModule {
};
PushNotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PushNotificationsPageRoutingModule);



/***/ }),

/***/ "g6xP":
/*!**************************************************************************!*\
  !*** ./src/app/settings/push-notifications/push-notifications.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXNoLW5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "i2J4":
/*!************************************************************************!*\
  !*** ./src/app/settings/push-notifications/push-notifications.page.ts ***!
  \************************************************************************/
/*! exports provided: PushNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsPage", function() { return PushNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_push_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./push-notifications.page.html */ "pA33");
/* harmony import */ var _push_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./push-notifications.page.scss */ "g6xP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PushNotificationsPage = class PushNotificationsPage {
    constructor() { }
    ngOnInit() {
    }
};
PushNotificationsPage.ctorParameters = () => [];
PushNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-push-notifications',
        template: _raw_loader_push_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_push_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PushNotificationsPage);



/***/ }),

/***/ "nX0W":
/*!**************************************************************************!*\
  !*** ./src/app/settings/push-notifications/push-notifications.module.ts ***!
  \**************************************************************************/
/*! exports provided: PushNotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsPageModule", function() { return PushNotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _push_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./push-notifications-routing.module */ "8bdZ");
/* harmony import */ var _push_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push-notifications.page */ "i2J4");







let PushNotificationsPageModule = class PushNotificationsPageModule {
};
PushNotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _push_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["PushNotificationsPageRoutingModule"]
        ],
        declarations: [_push_notifications_page__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsPage"]]
    })
], PushNotificationsPageModule);



/***/ }),

/***/ "pA33":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/push-notifications/push-notifications.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Benachrichtigungen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!--Suchfeld-->\n  <h4>Standort suchen</h4>\n  <div class=\"input-notification\">\n    <ion-input placeholder=\"Name des Standorts\"></ion-input>\n  </div>\n\n  <br><br>\n\n  <!--Vorgeschlagene Standorte-->\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\">\n    <ion-avatar class=\"ion-margin\">\n    <img src=\"../assets/img/ideas/Rebag-Concept.jpg\">\n  </ion-avatar>\n      <p>Name des Standortes</p>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\">\n    <ion-avatar class=\"ion-margin\">\n      <img src=\"../assets/img/ideas/Rebag-Concept.jpg\">\n    </ion-avatar>\n      <p>Name des Standortes</p>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\">\n    <ion-avatar class=\"ion-margin\">\n      <img src=\"../assets/img/ideas/Rebag-Concept.jpg\">\n    </ion-avatar>\n      <p>Name des Standortes</p>\n  </ion-item>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=push-notifications-push-notifications-module.js.map