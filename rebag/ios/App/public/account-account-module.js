(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "XunR":
/*!****************************************************!*\
  !*** ./src/app/register/account/account.module.ts ***!
  \****************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "f/3i");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "g39U");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "f/3i":
/*!************************************************************!*\
  !*** ./src/app/register/account/account-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "g39U");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "g39U":
/*!**************************************************!*\
  !*** ./src/app/register/account/account.page.ts ***!
  \**************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "sSvE");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "yttZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");









let AccountPage = class AccountPage {
    constructor(router, navCtrl, formbuilder, authService, loadingCtrl, alertCtrl, afAuth, toaster) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toaster = toaster;
        //Messages
        this.validationMessages = {
            name: [
                { type: "required", message: "Bitte gebe deinen Vornamen ein." }
            ],
            email: [
                { type: "required", message: "Bitte gebe deine E-Mail ein." },
                { type: "pattern", message: "Diese E-Mail ist falsch. Bitte nochmal versuchen." }
            ],
            password: [
                { type: "required", message: "Bitte gebe dein Passwort ein." },
                { type: "minlength", message: "Das Passwort muss mindestens 8 Zeichen lang sein." }
            ],
            confirmPassword: [
                { type: "required", message: "Bitte bestätige dein Passwort." }
            ]
        };
        this.loading = this.loadingCtrl;
    }
    //Lade Validationseigenschaften
    ngOnInit() {
        this.validationFormUser = this.formbuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    //Password
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmPassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    //User registrieren
    registerUser(value) {
        this.showalert();
        try {
            this.authService.userRegistration(value).then(response => {
                console.log(response);
                if (response.user) {
                    response.user.updateProfile({
                        displayName: value.name,
                        email: value.email
                    });
                    this.loading.dismiss();
                    this.router.navigate(['login']);
                    this.authService.sendVerificationMail();
                    this.toast('Registrierung erfolgreich! Bitte verifiziere deine E-Mail, um dich einzuloggen.', 'success');
                }
            }, error => {
                this.loading.dismiss();
                this.errorLoading(error.message);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    //error
    errorLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.alertCtrl.create({
                header: "Error Registering",
                message: message,
                buttons: [{
                        text: 'ok',
                        handler: () => {
                            this.navCtrl.navigateBack(['register']);
                        }
                    }]
            });
            yield loading.present();
        });
    }
    //Zeige Mitteilung
    showalert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var load = yield this.loadingCtrl.create({
                message: "Bitte warten...",
            });
            load.present();
        });
    }
    //Status
    toast(message, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toaster.create({
                message: message,
                position: 'top',
                color: status,
                duration: 6000
            });
            toast.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



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

/***/ "sSvE":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/account/account.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!--Titel und Beschreibung-->\n  <div class=\"headline\">\n    <h2>Account anlegen</h2>\n    <p>Bitte nenne uns deinen Vornamen und deine E-Mail. Lege bitte anschließend dein Passwort fest und bestätige es.\n    </p>\n  </div>\n\n  <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"registerUser(validationFormUser.value)\">\n  <div class=\"inputs\">\n    \n    <!-- Inputfeld für den Namen und zugehörige Fehlermeldung-->\n    <ion-item>\n      <ion-input type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Vorname\" required></ion-input>\n    </ion-item>\n    <div>\n      <ng-container *ngFor=\"let validation of validationMessages.name\">\n        <div class=\"error-message\" *ngIf=\"validationFormUser.get('name').hasError(validation.type) && (validationFormUser.get('name').dirty || validationFormUser.get('name').touched)\">\n          {{validation.message}}\n        </div>\n      </ng-container>\n    </div>\n\n      <!-- Inputfeld für die E-Mail-Adresse und zugehörige Fehlermeldung-->\n      <ion-item>\n        <ion-input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"E-Mail-Adresse\" required></ion-input>\n      </ion-item>\n      <div>\n\n        <!--Fehlermeldung-->\n        <ng-container *ngFor=\"let validation of validationMessages.email\">\n          <div class=\"error-message\"\n            *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- Inputfeld für das Passwort und Passwort bestätigen sowie zugehörige Fehlermeldung -->\n      <ion-item>\n        <ion-input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Passwort\" required>\n        </ion-input>\n      </ion-item>\n      <div>\n\n        <!--Fehlermeldung-->\n        <ng-container *ngFor=\"let validation of validationMessages.password\">\n          <div class=\"error-message\"\n            *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-input type=\"password\" name=\"confirmPassword\" formControlName=\"confirmPassword\"\n          placeholder=\"Passwort bestätigen\" required></ion-input>\n      </ion-item>\n\n      <!--Fehlermeldung-->\n      <div class=\"error-message\">\n        <ng-container *ngFor=\"let validation of validationMessages.confirmPassword\">\n          <div class=\"error-message\"\n            *ngIf=\"validationFormUser.get('confirmPassword').hasError(validation.type) && (validationFormUser.get('confirmPassword').dirty || validationFormUser.get('confirmPassword').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n        <div class=\"error-message\"\n          *ngIf=\"!validationFormUser.get('confirmPassword').errors && validationFormUser.hasError('passwordNotMatch') && (validationFormUser.get('confirmPassword').dirty || validationFormUser.get('confirmPassword').touched)\">\n          Passwörter stimmen nicht überein.\n        </div>\n      </div>\n    </div>\n\n    <!-- Button zur nächsten Seite -->\n    <div class=\"next-btn\">\n      <ion-button type=\"submit\" [disabled]=\"!validationFormUser.valid\">\n        Weiter\n      </ion-button>\n    </div>\n  </form>\n</ion-content>");

/***/ }),

/***/ "yttZ":
/*!****************************************************!*\
  !*** ./src/app/register/account/account.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: #f2f2f2 !important;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\n.headline {\n  text-align: center;\n  color: #333333;\n  padding-top: 50px;\n  overflow: hidden;\n  margin: 0 20px 0 20px;\n}\n\n.headline p {\n  color: rgba(51, 51, 51, 0.6);\n  margin-top: -3px;\n}\n\n.inputs {\n  margin: 50px 20px 0 10px;\n}\n\n.next-btn ion-button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  --ion-color-primary: #57B660;\n  padding: 0 70px 0 70px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  --background-activated: #57B660;\n}\n\nion-back-button {\n  --color: #57B660 !important;\n  color: #57B660 !important;\n}\n\n.error-message {\n  color: red;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICAtLW9wYWNpdHk6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkbGluZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xufVxuXG4uaGVhZGxpbmUgcCB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMzMzMzMzLCAkYWxwaGE6IDAuNik7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmlucHV0cyB7XG4gICAgbWFyZ2luOiA1MHB4IDIwcHggMCAxMHB4O1xufVxuXG4ubmV4dC1idG4gaW9uLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM1N0I2NjA7XG4gICAgcGFkZGluZzogMCA3MHB4IDAgNzBweDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAtLWNvbG9yLWhvdmVyOiAjZjJmMmYyO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzNDOTY0NDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTdCNjYwO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICM1N0I2NjAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU3QjY2MCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map