(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

/***/ "4MBP":
/*!**************************************************!*\
  !*** ./src/app/settings/privacy/privacy.page.ts ***!
  \**************************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacy.page.html */ "Gae6");
/* harmony import */ var _privacy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy.page.scss */ "kkrW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PrivacyPage = class PrivacyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPage.ctorParameters = () => [];
PrivacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy',
        template: _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrivacyPage);



/***/ }),

/***/ "Gae6":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/privacy/privacy.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Über die App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<!--Headlines und Text-->\n<ion-content>\n  <h4>Was ist ReBag?</h4>\n  <p> Hast du auch schon mal eine Tasche beim Einkaufen vergessen? <br><br>Nicht nur dir geht das so! Das führt dazu,\n    dass verdammt viele Einwegtüten verwendet werden, obwohl eigentlich jeder überflüssige Taschen zuhause herumfliegen\n    hat.\n    Wir wollen ein System aufbauen, in dem Taschen an Sammelpunkten zusammengetragen werden, sodass man sich genau dann\n    eine nehmen kann, wenn man sie wirklich braucht.\n    Nutze die Taschen wann immer du willst, wann immer du sie brauchst!</p>\n\n  <br><br>\n\n  <h4>Wie funktioniert es?</h4>\n  <p>Schnapp dir deine überflüssigen Taschen, schau noch einmal kurz, ob sie sauber und funktionstüchtig sind und häng\n    sie an die nächste Sammelstation.\n    Wenn du beim nächsten Einkauf eine Tasche brauchst, kannst du dir einfach eine wegnehmen.</p>\n\n  <br>\n\n  <h4>Instandhalten</h4>\n  <p>Die eigene Tasche mehrmals ohne Waschen benutzen ist kein Problem, ich weiß ja was ich damit gemacht habe. Fremde\n    Taschen, weiß nicht...\n    Bitte achte also darauf, nur saubere Taschen an den Baum zu hängen.<br><br>\n    Manchmal kann es aber dennoch vorkommen, dass jemand ein anderes Empfinden für Hygiene hat und einen benutzten\n    Beutel an die Station hängt.</p>\n</ion-content>");

/***/ }),

/***/ "RQ04":
/*!****************************************************!*\
  !*** ./src/app/settings/privacy/privacy.module.ts ***!
  \****************************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-routing.module */ "fpI+");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy.page */ "4MBP");







let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPageRoutingModule"]
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
    })
], PrivacyPageModule);



/***/ }),

/***/ "fpI+":
/*!************************************************************!*\
  !*** ./src/app/settings/privacy/privacy-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function() { return PrivacyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.page */ "4MBP");




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ "kkrW":
/*!****************************************************!*\
  !*** ./src/app/settings/privacy/privacy.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module.js.map