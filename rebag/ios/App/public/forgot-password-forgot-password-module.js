(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "7wJC":
/*!*****************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\n.headline {\n  text-align: center;\n  color: #333333;\n  padding-top: 50px;\n  overflow: hidden;\n  margin: 0 20px 0 20px;\n}\n\n.headline p {\n  color: rgba(51, 51, 51, 0.6);\n  margin-top: -3px;\n}\n\n.inputs {\n  margin: 100px 20px 0 10px;\n}\n\n.next-btn ion-button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 10px 0 10px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  --background-activated: #57B660;\n}\n\nion-back-button {\n  --color: #57B660 !important;\n  color: #57B660 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1vcGFjaXR5OiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbn1cblxuLmhlYWRsaW5lIHAge1xuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzMzMzMzMywgJGFscGhhOiAwLjYpO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5pbnB1dHMge1xuICAgIG1hcmdpbjogMTAwcHggMjBweCAwIDEwcHg7XG59XG5cbi5uZXh0LWJ0biBpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzU3QjY2MDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIC0tY29sb3ItaG92ZXI6ICNmMmYyZjI7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjM0M5NjQ0O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1N0I2NjA7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogIzU3QjY2MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTdCNjYwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "85xe":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--Beschreibung-->\n  <div class=\"headline\">\n    <h2>Passwort vergessen?</h2>\n    <p>Kein Problem! Gebe einfach deine E-Mail ein und wir senden dir einen Link zu, mit dem du ganz einfach ein neues\n      Passwort festlegen kannst.</p>\n  </div>\n\n  <!--Email Input-->\n  <div class=\"inputs\">\n    <ion-item>\n      <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"E-Mail\" required></ion-input>\n    </ion-item>\n  </div>\n\n  <!--Button-->\n  <div class=\"next-btn\">\n    <ion-button (click)=\"resetPassword()\">\n      Passwort Zurücksetzen\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "Dqyp":
/*!*****************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "htP/");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "VUw4");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "VUw4":
/*!***************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "85xe");
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss */ "7wJC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(afAuth, toaster, router, loadingCtrl) {
        this.afAuth = afAuth;
        this.toaster = toaster;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    //Reset Password
    resetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.email) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Bitte warten...',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.afAuth.sendPasswordResetEmail(this.email)
                    .then(() => {
                    loading.dismiss();
                    this.toast('Passwort zurückgesetzt! Überprüfe deine Mails.', 'success');
                    this.router.navigate(['/login']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                });
            }
            else {
                this.toast('Bitte gebe deine E-Mail ein.', 'danger');
            }
        });
    }
    //Status & Message
    toast(message, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toaster.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "htP/":
/*!*************************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "VUw4");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map