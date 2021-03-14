(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        // path: 'register',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"],
        children: [
        // {
        //   path: 'test',
        //   loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
        // },
        //  {
        //  path: '',
        // redirectTo: '/register/test',
        //pathMatch: 'full'
        // }
        ]
    },
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "XunR")).then(m => m.AccountPageModule)
    },
    {
        path: 'verify',
        loadChildren: () => __webpack_require__.e(/*! import() | verify-verify-module */ "verify-verify-module").then(__webpack_require__.bind(null, /*! ./verify/verify.module */ "UdI2")).then(m => m.VerifyPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-policy-privacy-policy-module */ "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./privacy-policy/privacy-policy.module */ "Uuj2")).then(m => m.PrivacyPolicyPageModule)
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!--Datenschutz-->\n  <div class=\"headline\">\n    <h2>Datenschutz</h2>\n    <p>Bevor wir loslegen können, mache dich bitte mit unseren Datenschutzbestimmungen vertraut.</p>\n  </div>\n\n  <!--Datenschutz akzeptieren-->\n  <div class=\"ion-padding policy-check\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <p>Ich akzeptiere die <a routerLink=\"/register/privacy-policy\">Datenschutzbestimmungen und Cookies</a></p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-checkbox (click)=\"toggleCheckbox()\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!--Weiter Button-->\n  <div class=\"next-btn\">\n    <ion-button routerLink=\"./account\" [disabled]=\"!policyChecked\">\n      Weiter\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
    //Checkbox anklicken
    toggleCheckbox() {
        this.policyChecked = !this.policyChecked;
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: #f2f2f2 !important;\n  --opacity: 0 !important;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\n.headline {\n  text-align: center;\n  color: #333333;\n  padding-top: 50px;\n  overflow: hidden;\n  margin: 0 20px 0 20px;\n}\n\n.headline p {\n  color: rgba(51, 51, 51, 0.6);\n  margin-top: -3px;\n}\n\n.inputs {\n  margin: 100px 20px 0 10px;\n}\n\n.next-btn ion-button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 70px 0 70px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  --background-activated: #57B660;\n}\n\nion-back-button {\n  --color: #57B660 !important;\n  color: #57B660 !important;\n}\n\n.policy-check a {\n  text-decoration: none;\n  color: #57B660;\n}\n\n.policy-check p {\n  margin-top: -5px;\n}\n\n.policy-check {\n  margin: 100px 10px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xuICAgIC0tb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbn1cblxuLmhlYWRsaW5lIHAge1xuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzMzMzMzMywgJGFscGhhOiAwLjYpO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5pbnB1dHMge1xuICAgIG1hcmdpbjogMTAwcHggMjBweCAwIDEwcHg7XG59XG5cbi5uZXh0LWJ0biBpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzU3QjY2MDtcbiAgICBwYWRkaW5nOiAwIDcwcHggMCA3MHB4O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIC0tY29sb3ItaG92ZXI6ICNmMmYyZjI7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjM0M5NjQ0O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1N0I2NjA7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogIzU3QjY2MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTdCNjYwICFpbXBvcnRhbnQ7XG59XG5cbi5wb2xpY3ktY2hlY2sgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1N0I2NjA7XG59XG5cbi5wb2xpY3ktY2hlY2sgcHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucG9saWN5LWNoZWNre1xuICAgIG1hcmdpbjogMTAwcHggMTBweCAwIDEwcHg7XG59Il19 */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map