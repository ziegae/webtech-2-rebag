(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "TAsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/verify/verify.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!--Headline und Beschreibung-->\n  <div class=\"headline\">\n    <h2>Verifizierung</h2>\n    <p>Fast geschafft! Wir haben dir einen Link zur Bestätigung deiner E-Mail gesendet. Bitte überprüfe dein\n      E-Mail-Postfach inkl. Spam-Ordner.</p>\n    <p>Sollest du keine Mail erhalten haben, dann klicke bitte auf den folgenden Button:</p>\n  </div>\n\n  <!--Nochmal Senden Button-->\n  <div class=\"resend-btn\">\n    <ion-button (click)=\"resendVerificationMail()\" [disabled]=\"!timer\">\n      Nochmal senden\n    </ion-button>\n  </div>\n  <div *ngIf=\"!timer\" class=\"notification\">\n    <h3>Bestätigungslink versendet.</h3>\n    <p>Warte bitte {{ timeLeft }} Sekunden, um erneut eine Bestätigungsmail rausschicken zu können.</p>\n  </div>\n\n  <!--Weiter Button-->\n  <div class=\"next-btn\">\n    <ion-button routerLink=\"/login\">\n      Weiter\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "UdI2":
/*!**************************************************!*\
  !*** ./src/app/register/verify/verify.module.ts ***!
  \**************************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-routing.module */ "Vx/B");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "hkw9");







let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })
], VerifyPageModule);



/***/ }),

/***/ "Vx/B":
/*!**********************************************************!*\
  !*** ./src/app/register/verify/verify-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: VerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function() { return VerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.page */ "hkw9");




const routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }
];
let VerifyPageRoutingModule = class VerifyPageRoutingModule {
};
VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyPageRoutingModule);



/***/ }),

/***/ "dLEw":
/*!**************************************************!*\
  !*** ./src/app/register/verify/verify.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: #f2f2f2 !important;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\n.headline {\n  text-align: center;\n  color: #333333;\n  padding-top: 50px;\n  overflow: hidden;\n  margin: 0 20px 0 20px;\n}\n\n.headline p {\n  color: rgba(51, 51, 51, 0.6);\n  margin-top: -3px;\n}\n\n.inputs {\n  margin: 100px 20px 0 10px;\n}\n\n.next-btn ion-button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 70px 0 70px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  --background-activated: #57B660;\n}\n\n.resend-btn ion-button {\n  position: fixed;\n  left: 0;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 70px 0 70px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  --background-activated: #57B660;\n  margin-top: 80px;\n}\n\n.notification {\n  margin: 130px 20px 0 20px;\n  text-align: center;\n}\n\n.notification h3 {\n  color: #57B660;\n}\n\n.notification p {\n  color: rgba(51, 51, 51, 0.6);\n  margin-top: -5px;\n}\n\nion-back-button {\n  --color: #57B660 !important;\n  color: #57B660 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoidmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICAtLW9wYWNpdHk6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkbGluZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xufVxuXG4uaGVhZGxpbmUgcCB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMzMzMzMzLCAkYWxwaGE6IDAuNik7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmlucHV0cyB7XG4gICAgbWFyZ2luOiAxMDBweCAyMHB4IDAgMTBweDtcbn1cblxuLm5leHQtYnRuIGlvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICByaWdodDogMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNTdCNjYwO1xuICAgIHBhZGRpbmc6IDAgNzBweCAwIDcwcHg7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgLS1jb2xvci1ob3ZlcjogI2YyZjJmMjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzQzk2NDQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU3QjY2MDtcbn1cblxuLnJlc2VuZC1idG4gaW9uLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzU3QjY2MDtcbiAgICBwYWRkaW5nOiAwIDcwcHggMCA3MHB4O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIC0tY29sb3ItaG92ZXI6ICNmMmYyZjI7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjM0M5NjQ0O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1N0I2NjA7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgbWFyZ2luOiAxMzBweCAyMHB4IDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb24gaDMge1xuICAgIGNvbG9yOiAjNTdCNjYwO1xufVxuXG4ubm90aWZpY2F0aW9uIHAge1xuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzMzMzMzMywgJGFscGhhOiAwLjYpOyBcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICM1N0I2NjAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU3QjY2MCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "hkw9":
/*!************************************************!*\
  !*** ./src/app/register/verify/verify.page.ts ***!
  \************************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify.page.html */ "TAsx");
/* harmony import */ var _verify_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.page.scss */ "dLEw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");






let VerifyPage = class VerifyPage {
    constructor(auth, authService) {
        this.auth = auth;
        this.authService = authService;
        this.timer = true;
        this.timeLeft = 30;
    }
    ngOnInit() {
    }
    //resend varification mail
    resendVerificationMail() {
        this.authService.sendVerificationMail();
        setTimeout(() => { this.timer = !this.timer; }, 30000);
        this.timer = false;
        var timer = setInterval(() => {
            if (this.timeLeft != 0) {
                this.timeLeft -= 1;
            }
            else {
                clearInterval(timer);
            }
        }, 1000);
    }
};
VerifyPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyPage);



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



/***/ })

}]);
//# sourceMappingURL=verify-verify-module.js.map