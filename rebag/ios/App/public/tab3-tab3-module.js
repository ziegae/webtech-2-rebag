(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "BZuN":
/*!******************************************!*\
  !*** ./src/app/services/pins.service.ts ***!
  \******************************************/
/*! exports provided: MarkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkersService", function() { return MarkersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let MarkersService = class MarkersService {
    //Daten aus Json oder local storage
    constructor(http) {
        this.http = http;
        this.markers = [];
        this.markersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (localStorage.getItem('markers')) {
            this.markers = JSON.parse(localStorage.getItem('markers'));
            this.markersSubject.next();
        }
        else {
            this.http.get('assets/pin-data.json').subscribe((data) => {
                this.markers = data;
                this.markersSubject.next();
            }, (error) => {
            });
        }
    }
    getMarkersSubject() {
        return this.markersSubject.asObservable();
    }
    getMarkers() {
        return this.markers;
    }
    //marker hinzufügen
    add(marker) {
        this.markers.push(marker);
        this.markersSubject.next();
        localStorage.setItem('markers', JSON.stringify(this.markers));
    }
    //pinID übergeben
    getPinId(pinId) {
        return Object.assign({}, this.markers.find(pin => {
            return pin.pinId === pinId;
        }));
    }
    //pinId setzen
    setOverviewPin(loadedPin) {
        this.overviewPinId = loadedPin;
    }
    //Verfügbarkeit zurücksetzen
    resetAvailability() {
        this.overviewPinId.availabilityReport = 0;
        this.markers[this.overviewPinId.pinId - 1] = this.overviewPinId;
        localStorage.setItem('markers', JSON.stringify(this.markers));
    }
    //Sauberkeit zurücksetzen
    resetClean() {
        this.overviewPinId.cleaningReport = 0;
        this.markers[this.overviewPinId.pinId - 1] = this.overviewPinId;
        localStorage.setItem('markers', JSON.stringify(this.markers));
    }
    //Array länge
    getMarkerslength() {
        return this.markers.length;
    }
};
MarkersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MarkersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarkersService);



/***/ }),

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pins.service */ "BZuN");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");








let Tab3Page = class Tab3Page {
    constructor(markersService, authService, database) {
        this.markersService = markersService;
        this.authService = authService;
        this.database = database;
        this.markers = [];
        //marker aus service laden
        this.markers = this.markersService.getMarkers();
        this.markersService.getMarkersSubject().subscribe(() => {
            this.markers = this.markersService.getMarkers();
        });
        console.log("marker werden geladen");
        //Firebase User
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged(user => {
            console.log("AUTH_USER", user);
            if (user) {
                const result = this.database.doc(`/profile/${this.authService.getUID()}`);
                var userprofile = result.valueChanges();
                userprofile.subscribe(profile => {
                    console.log("PROFILE::", profile);
                    this.profileName = profile['name'];
                });
            }
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!--Zeigt Username an-->\n    <ion-title>Hey {{profileName}}!</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/settings']\">\n        <ion-icon slot=\"icon-only\" name=\"cog\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <!--Auf Pin verweisen und Marker anzeigen-->\n  <ion-item class=\"ion-no-padding\" *ngFor=\"let marker of markers\" [routerLink]=\"['/pin', marker.pinId]\">\n\n    <ion-avatar class=\"ion-margin\">\n      <img src=\"{{'data:image/jpg;base64,'+ marker.imageBase64}}\">\n    </ion-avatar>\n    {{marker.name}}\n\n    <div slot=\"end\">\n      <!-- Status des Pins anzeigen -->\n      <div style=\"display: inline-block;\">\n        <div *ngIf=\"marker.availabilityReport < 3 && marker.cleaningReport < 3\" class=\"allgood\"></div>\n        <div *ngIf=\"marker.availabilityReport >= 3\" class=\"bagsUnavailable\"></div>\n        <div *ngIf=\"marker.availabilityReport < 3 && marker.cleaningReport >= 3\" class=\"bagsUnclean\"></div>\n      </div>\n      <!-- Item als Clickbar anzeigen -->\n      <!--<ion-icon name=\"chevron-forward-outline\"></ion-icon>-->\n    </div>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



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

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-bar {\n  background-color: #57b660;\n  --ion-background-color: #57b660;\n  padding-bottom: 10px;\n  padding-top: 15px !important;\n  color: #f2f2f2;\n}\n\n.top-icon {\n  color: #f2f2f2;\n}\n\n.sc-ion-toolbar-ios {\n  border: none;\n}\n\n.allgood {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--ion-color-primary);\n}\n\n.bagsUnavailable {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--ion-color-warning);\n}\n\n.bagsUnclean {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3YjY2MDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTdiNjYwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG59XG5cbi50b3AtaWNvbiB7XG4gICAgY29sb3I6ICNmMmYyZjI7XG59XG5cbi5zYy1pb24tdG9vbGJhci1pb3Mge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFsbGdvb2Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJhZ3NVbmF2YWlsYWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4uYmFnc1VuY2xlYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map