(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let LoginPage = class LoginPage {
    constructor(formbuilder, authservice, router, firestore, navCtrl) {
        this.formbuilder = formbuilder;
        this.authservice = authservice;
        this.router = router;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        //Validation Message
        this.validationUserMessage = {
            email: [
                { type: "required", message: "Bitte gebe deine E-Mail ein." },
                { type: "pattern", message: "Diese E-Mail ist falsch. Bitte nochmal versuchen." }
            ],
            password: [
                { type: "required", message: "Bitte gebe dein Passwort ein." },
                { type: "minlength", message: "Das Passwort muss mindestens 8 Zeichen lang sein." }
            ]
        };
    }
    //NgOnInIt
    ngOnInit() {
        this.validationFormUser = this.formbuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)
            ]))
        });
    }
    //Login Firebase
    loginUser(value) {
        console.log("Am logged in");
        try {
            this.authservice.loginFireauth(value).then(resp => {
                console.log(resp);
                if (resp.user) {
                    this.authservice.setUser({
                        username: resp.user.displayName,
                        uid: resp.user.uid
                    });
                    const userProfile = this.firestore.collection('profile').doc(resp.user.uid);
                    userProfile.get().subscribe(result => {
                        if (result.exists) {
                            this.navCtrl.navigateForward(['tabs/tab1']);
                        }
                        else {
                            this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
                                name: resp.user.displayName,
                                email: resp.user.email
                            });
                            this.authservice.loginVerificationCheck();
                        }
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons class=\"green\" slot=\"start\">\n      <ion-back-button class=\"green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"loginUser(validationFormUser.value)\">\n    <div class=\"inputs\">\n\n      <!--Login-->\n      <h1>Login</h1>\n      <ion-item>\n        <ion-icon name=\"mail\"></ion-icon>\n        <ion-input type=\"text\" name=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" required></ion-input>\n      </ion-item>\n\n      <!--Validationmessage-->\n      <div>\n        <ng-container *ngFor=\"let validation of validationUserMessage.email\">\n          <div class=\"error-message\"\n            *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n\n      <!--Password-->\n      <ion-item>\n        <ion-icon name=\"lock-closed\"></ion-icon>\n        <ion-input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Passwort\" required>\n        </ion-input>\n      </ion-item>\n\n      <!--Validationmessage-->\n      <div>\n        <ng-container *ngFor=\"let validation of validationUserMessage.password\">\n          <div class=\"error-message\"\n            *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <!--Forgot Password-->\n    <div class=\"forgot\">\n      <ion-button fill=\"clear\" routerLink=\"./forgot-password\">Passwort vergessen?</ion-button>\n    </div>\n\n    <!--Login Button-->\n    <div class=\"login-button\">\n      <ion-button expand=\"block\" class=\"login-btn\" type=\"submit\" [disabled]=\"!validationFormUser.valid\">\n        Login\n      </ion-button>\n    </div>\n  </form>\n\n  <!--Registrieren-->\n  <div class=\"no-acc-btn\">\n    <p>Du hast noch keinen Account? <a href=\"/register\">Hier registrieren!</a></p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "Dqyp")).then(m => m.ForgotPasswordPageModule)
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



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

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent !important;\n  --opacity: 0 !important;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\n.forgot {\n  text-align: right;\n  --ion-color-primary: #57B660;\n}\n\n.forgot ion-button {\n  --color-hover: #3C9644;\n}\n\n.inputs {\n  margin-top: 200px;\n}\n\n.inputs h1 {\n  text-align: center;\n}\n\n.login-button ion-button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 10px 0 10px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n}\n\n.no-acc-btn {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n  display: inline;\n  font-size: 14px;\n  text-align: center;\n}\n\n.no-acc-btn a {\n  color: #57B660;\n  text-decoration: none;\n}\n\nion-back-button {\n  --color: #57B660 !important;\n  color: #57B660 !important;\n}\n\n.error-message {\n  color: red;\n  font-size: 10px;\n  margin-left: 20px;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4Q0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1vcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3Jnb3Qge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM1N0I2NjA7XG59XG5cbi5mb3Jnb3QgaW9uLWJ1dHRvbiB7XG4gICAgLS1jb2xvci1ob3ZlcjogIzNDOTY0NDtcbn1cblxuLmlucHV0cyB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5pbnB1dHMgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWJ1dHRvbiBpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzU3QjY2MDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIC0tY29sb3ItaG92ZXI6ICNmMmYyZjI7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjM0M5NjQ0O1xufVxuXG4ubm8tYWNjLWJ0bntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1hY2MtYnRuIGF7XG4gICAgY29sb3I6ICM1N0I2NjA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICM1N0I2NjAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU3QjY2MCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map