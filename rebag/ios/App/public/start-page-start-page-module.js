(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-page-start-page-module"],{

/***/ "35EM":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content>\n  <!--Headline und Beschreibung-->\n  <div class=\"start-text\">\n    <h1>Willkommen bei ReBag!</h1>\n    <p>Mit ReBag vergisst du nie wieder eine Mehrwegtasche zum Einkaufen. Egal ob mit oder ohne App.</p>\n  </div>\n\n  <!--Login Button-->\n  <div class=\"buttons\">\n    <ion-button expand=\"block\" class=\"login-btn\" routerLink=\"/login\">\n      Login\n    </ion-button>\n\n    <!--Registrierung Button-->\n    <ion-button fill=\"outline\" expand=\"block\" class=\"signup-btn\" routerLink=\"/onboarding\">\n      Registrieren\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Qshb":
/*!*************************************************!*\
  !*** ./src/app/start-page/start-page.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --background: url(\"/assets/img/Rebag-Happy.jpg\") no-repeat center center / cover;\n}\n\n.start-text {\n  text-align: center !important;\n  color: #f2f2f2;\n  padding-top: 200px;\n  overflow: hidden;\n  text-shadow: 0px 2px 4px #000;\n}\n\n.start-text h1 {\n  font-weight: 900;\n  padding: 0 30px 10px 30px;\n  text-align: center !important;\n}\n\n.start-text p {\n  margin-top: -5px;\n  font-weight: 600;\n  padding: 0 30px 0 30px;\n}\n\n.buttons {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 10px 0 10px;\n}\n\n.buttons ion-button {\n  --color-hover: #f2f2f2 !important;\n  --background-hover: #3C9644 !important;\n  --background-activated: #3C9644 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0YXJ0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0ZBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7QUFDSiIsImZpbGUiOiJzdGFydC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1vcGFjaXR5OiAwO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvUmViYWctSGFwcHkuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLnN0YXJ0LXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCAjMDAwO1xufVxuXG4uc3RhcnQtdGV4dCBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAwIDMwcHggMTBweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3RhcnQtdGV4dCBwIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNTdCNjYwO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG59XG5cbi5idXR0b25zIGlvbi1idXR0b24ge1xuICAgIC0tY29sb3ItaG92ZXI6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzQzk2NDQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjM0M5NjQ0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "W2A0":
/*!***********************************************!*\
  !*** ./src/app/start-page/start-page.page.ts ***!
  \***********************************************/
/*! exports provided: StartPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPagePage", function() { return StartPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start-page.page.html */ "35EM");
/* harmony import */ var _start_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-page.page.scss */ "Qshb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let StartPagePage = class StartPagePage {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
};
StartPagePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
StartPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start-page',
        template: _raw_loader_start_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartPagePage);



/***/ }),

/***/ "dRYD":
/*!*********************************************************!*\
  !*** ./src/app/start-page/start-page-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StartPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPagePageRoutingModule", function() { return StartPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _start_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-page.page */ "W2A0");




const routes = [
    {
        path: '',
        component: _start_page_page__WEBPACK_IMPORTED_MODULE_3__["StartPagePage"]
    }
];
let StartPagePageRoutingModule = class StartPagePageRoutingModule {
};
StartPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPagePageRoutingModule);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let AuthService = class AuthService {
    constructor(auth, router, loadingCtrl) {
        this.auth = auth;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
    }
    //Login 
    loginFireauth(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    //Registration
    userRegistration(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    //Sende Verification Email
    sendVerificationMail() {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().currentUser.sendEmailVerification()
            .then(function () {
            // Verification email sent.
        })
            .catch(function (error) {
            // Error occurred. Inspect error.code.
        });
    }
    //Check Verification
    loginVerificationCheck() {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().currentUser.emailVerified == false) {
            this.router.navigate(['register/verify']);
        }
        else {
            this.router.navigate(['tabs/tab1']);
        }
    }
    //ausloggen
    signOut() {
        this.auth.signOut().then(() => {
            this.router.navigate(['']);
        });
    }
    //User
    setUser(user) {
        return this.user = user;
    }
    //User Id
    getUID() {
        return this.user.uid;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "tEYm":
/*!*************************************************!*\
  !*** ./src/app/start-page/start-page.module.ts ***!
  \*************************************************/
/*! exports provided: StartPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPagePageModule", function() { return StartPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _start_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-page-routing.module */ "dRYD");
/* harmony import */ var _start_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-page.page */ "W2A0");







let StartPagePageModule = class StartPagePageModule {
};
StartPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPagePageRoutingModule"]
        ],
        declarations: [_start_page_page__WEBPACK_IMPORTED_MODULE_6__["StartPagePage"]]
    })
], StartPagePageModule);



/***/ })

}]);
//# sourceMappingURL=start-page-start-page-module.js.map