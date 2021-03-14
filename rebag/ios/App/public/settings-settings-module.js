(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    },
    {
        path: 'push-notifications',
        loadChildren: () => __webpack_require__.e(/*! import() | push-notifications-push-notifications-module */ "push-notifications-push-notifications-module").then(__webpack_require__.bind(null, /*! ./push-notifications/push-notifications.module */ "nX0W")).then(m => m.PushNotificationsPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "RQ04")).then(m => m.PrivacyPageModule)
    },
    {
        path: 'change-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | change-profile-change-profile-module */ "change-profile-change-profile-module").then(__webpack_require__.bind(null, /*! ./change-profile/change-profile.module */ "s0Wk")).then(m => m.ChangeProfilePageModule)
    },
    {
        path: 'change-location',
        loadChildren: () => __webpack_require__.e(/*! import() | change-location-change-location-module */ "change-location-change-location-module").then(__webpack_require__.bind(null, /*! ./change-location/change-location.module */ "SHj0")).then(m => m.ChangeLocationPageModule)
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");








let SettingsPage = class SettingsPage {
    //Firebase Name und Email
    constructor(alertCtrl, authService, database) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.database = database;
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged(user => {
            console.log("AUTH_USER", user);
            if (user) {
                const result = this.database.doc(`/profile/${this.authService.getUID()}`);
                var userprofile = result.valueChanges();
                userprofile.subscribe(profile => {
                    console.log("PROFILE::", profile);
                    this.profileName = profile['name'];
                    this.profileEmail = profile['email'];
                });
            }
        });
    }
    ngOnInit() {
    }
    //Logout
    logoutAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.alertCtrl.create({
                header: "Ausloggen",
                //subHeader: "Bist du dir sicher, dass du dich ausloggen möchtest?",
                message: "Bist du dir sicher, dass du dich ausloggen möchtest?",
                buttons: [{
                        text: "Abbrechen"
                    },
                    {
                        text: "Ausloggen", handler: (res) => {
                            this.authService.signOut();
                        }
                    }]
            }).then(res => res.present());
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



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

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Einstellungen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!--Headline-->\n  <ion-text>\n    <h4>Name</h4>\n  </ion-text>\n\n  <!--Text-->\n  <ion-text>\n    <p>{{profileName}}</p>\n  </ion-text>\n\n  <br>\n\n  <!--Headline-->\n  <ion-text>\n    <h4>E-Mail</h4>\n  </ion-text>\n\n  <!--Text-->\n  <ion-text>\n    <p>{{profileEmail}}</p>\n  </ion-text>\n\n  <br>\n\n  <!--Headline-->\n  <ion-text>\n    <h4>Einstellungen</h4>\n  </ion-text>\n\n  <!--Verweise auf die Subpages-->\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\">\n    <ion-text>\n      <p>Profildaten ändern</p>\n    </ion-text>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"['change-location']\">\n    <ion-text>\n      <p>Standortzugriff</p>\n    </ion-text>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"['push-notifications']\">\n    <ion-text>\n      <p>Pushbenachrichtigungen</p>\n    </ion-text>\n  </ion-item>\n\n  <br>\n\n  <!--Headline-->\n  <ion-text>\n    <h4>Weitere Einstellungen</h4>\n  </ion-text>\n\n\n  <!--Weitere Verweise auf die Subpages-->\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"['privacy']\">\n    <ion-text>\n      <p>Über die App</p>\n    </ion-text>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\">\n    <ion-text>\n      <p>Mehr Informationen im Web</p>\n    </ion-text>\n  </ion-item>\n\n  <ion-item class=\"ion-no-padding\" [routerLink]=\"[]\" (click)=\"logoutAlert()\">\n    <ion-text>\n      <p style=\"color: red\">Ausloggen</p>\n    </ion-text>\n  </ion-item>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map