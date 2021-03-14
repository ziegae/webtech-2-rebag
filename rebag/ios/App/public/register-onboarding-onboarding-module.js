(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-onboarding-onboarding-module"],{

/***/ "08Qz":
/*!**********************************************************!*\
  !*** ./src/app/register/onboarding/onboarding.module.ts ***!
  \**********************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "9G1u");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "5TKm");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })
], OnboardingPageModule);



/***/ }),

/***/ "5TKm":
/*!********************************************************!*\
  !*** ./src/app/register/onboarding/onboarding.page.ts ***!
  \********************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./onboarding.page.html */ "ejTZ");
/* harmony import */ var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss */ "qYyu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OnboardingPage = class OnboardingPage {
    constructor() { }
    ngOnInit() {
    }
};
OnboardingPage.ctorParameters = () => [];
OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OnboardingPage);



/***/ }),

/***/ "9G1u":
/*!******************************************************************!*\
  !*** ./src/app/register/onboarding/onboarding-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "5TKm");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "ejTZ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/onboarding/onboarding.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>onboarding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <!--Slides-->\n  <ion-slides pager>\n\n    <!--Slide 1-->\n    <ion-slide style=\"background: url('/assets/img/Rebag-Happy.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slide-con\">\n      </div>\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Rebag</h3>\n        <p class=\"light\"> Einkaufstasche vergessen?\n          Schnapp dir `ne ReBag!</p>\n      </div>\n      <div class=\"align-bottom\">\n        <p class=\"label light\" [routerLink]=\"['']\">Intro überspringen</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 2-->\n    <ion-slide\n      style=\"background: url('/assets/img/onboarding/Rebag-Planet.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slide-con\">\n      </div>\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Dein Beitrag</h3>\n        <p class=\"light\"> Hole das Maximum aus den Mehrwegtaschen heraus und mache unseren Planeten etwas grüner!</p>\n      </div>\n      <div class=\"align-bottom\">\n        <p class=\"label light\" [routerLink]=\"['']\">Intro überspringen</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 3-->\n    <ion-slide\n      style=\"background: url('/assets/img/onboarding/Rebag-Concept.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slide-con\">\n      </div>\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Ausleihen</h3>\n        <p class=\"light\"> Leihe Taschen aus oder stelle deine zur Verfügung. Du kannst auch deine eigenen ReBag\n          Standorte aufbauen, um deinen Mitmenschen etwas Gutes zu tun.</p>\n      </div>\n      <div class=\"align-bottom\">\n        <p class=\"label light\" [routerLink]=\"['']\">Intro überspringen</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 4-->\n    <ion-slide\n      style=\"background: url('/assets/img/onboarding/Rebag-Concept-2-2.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slide-con\">\n      </div>\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Instandhaltung</h3>\n        <p class=\"light\"> Scanne die QR-Codes, um den Status des Standortes aktuell zu halten.</p>\n      </div>\n      <div class=\"align-bottom\">\n        <p class=\"label light\" [routerLink]=\"['']\">Intro überspringen</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 5-->\n    <ion-slide\n      style=\"background: url('/assets/img/onboarding/Rebag-Washing.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slide-con\">\n      </div>\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Hygiene</h3>\n        <p class=\"light\">Wasche dreckige Taschen und sorge dafür, das an den Standorten alles rund läuft. HYGIENE wird\n          bei uns groß geschrieben.</p><br>\n      </div>\n\n      <!--Buttons-->\n      <div class=\"align-bottom buttons\">\n        <ion-button expand=\"block\" class=\"ion-margin\" [routerLink]=\"['/register']\">Jetzt loslegen</ion-button>\n        <ion-button expand=\"block\" class=\"ion-margin\" fill=\"outline\" [routerLink]=\"['']\">Zurück zur Startseite\n        </ion-button>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "qYyu":
/*!**********************************************************!*\
  !*** ./src/app/register/onboarding/onboarding.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n  background-color: #3e3e3e;\n}\n\n.slide-con {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.slider-text {\n  position: absolute;\n  top: 10%;\n}\n\nh3 {\n  font-weight: 900;\n  padding: 0 30px 10px 30px;\n  text-align: center !important;\n}\n\np {\n  margin-top: -5px;\n  font-weight: 600;\n  padding: 0 10px 0 10px;\n}\n\nion-toolbar {\n  display: none;\n}\n\n.align-bottom {\n  position: absolute;\n  bottom: 5%;\n}\n\n.buttons {\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 10px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDQSxjQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNIOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA2MiwgNjIpO1xuICB9XG4gXG4gIC5zbGlkZS1jb257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gfVxuXG4gIC5zbGlkZXItdGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAwIDMwcHggMTBweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgcHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFsaWduLWJvdHRvbXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1JTtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNTdCNjYwO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=register-onboarding-onboarding-module.js.map