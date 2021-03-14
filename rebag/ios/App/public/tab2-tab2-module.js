(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".camera-button {\n  width: 50px;\n  height: 50px;\n  --border-radius: 100% !important;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.buttons ion-button {\n  bottom: 50px;\n  --ion-color-primary: #57B660;\n  padding: 0 10px 0 10px;\n  color: #f2f2f2;\n  --color-hover: #f2f2f2;\n  --background-hover: #3C9644;\n  height: 40px;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEtYnV0dG9ue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5idXR0b25zIGlvbi1idXR0b24ge1xuICAgIGJvdHRvbTogNTBweDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNTdCNjYwO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgLS1jb2xvci1ob3ZlcjogI2YyZjJmMjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzQzk2NDQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pins.service */ "BZuN");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");









const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let Tab2Page = class Tab2Page {
    //Lade Firebase, MarkerService
    constructor(markersService, authService, database) {
        this.markersService = markersService;
        this.authService = authService;
        this.database = database;
        // Platzhalter für den Neuen Marker
        this.pinId = '';
        this.name = '';
        this.latitude = 0;
        this.longitude = 0;
        this.availabilityReport = 0;
        this.cleaningReport = 0;
        this.imageBase64 = null;
        // weitere
        this.toggle = true;
        this.isShown = false;
        this.imageTook = false;
        firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth().onAuthStateChanged(user => {
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
    ngOnInit() { }
    //Koordinaten des aktuellen Standorts laden
    ionViewDidEnter() {
        this.latitude = 0.0;
        this.longitude = 0.0;
        const coordinates = Geolocation.getCurrentPosition().then((pos) => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        });
    }
    //Foto für den Standort aufnehmen
    takePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 20,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].Base64
            });
            this.imageBase64 = image.base64String;
            this.imageTook = true;
            console.log("bild aufgenommen");
        });
    }
    //Standort speichern
    save() {
        const marker = {
            'pinId': JSON.stringify(this.markersService.getMarkerslength() + 1),
            'name': this.name,
            'coordinates': [this.latitude, this.longitude],
            'availabilityReport': this.availabilityReport,
            'cleaningReport': this.cleaningReport,
            'imageBase64': this.imageBase64
        };
        //console.log(JSON.stringify(marker));
        this.markersService.add(marker);
        this.pinId = '';
        this.name = '';
        this.latitude = 0;
        this.longitude = 0;
        this.availabilityReport = 0;
        this.cleaningReport = 0;
        this.imageBase64 = '';
        this.toggle = true;
        this.isShown = false;
    }
    //Ansicht der Koordinaten togglen
    toggleGeo() {
        this.isShown = !this.isShown;
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    },
    {
        path: 'ideas',
        loadChildren: () => __webpack_require__.e(/*! import() | ideas-ideas-module */ "ideas-ideas-module").then(__webpack_require__.bind(null, /*! ./ideas/ideas.module */ "7Wg8")).then(m => m.IdeasPageModule)
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-bg\">\n  <ion-toolbar>\n    <ion-title>Hey {{profileName}}!</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/settings']\">\n        <ion-icon slot=\"icon-only\" name=\"cog\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <!--Toggle für Standort-->\n  <ion-item class=\"no-border\">\n    <h4 class=\"no-margin\">Aktuellen Standort verwenden</h4>\n    <ion-toggle slot=\"end\" [(ngModel)]=\"toggle\" (click)=\"toggleGeo()\"></ion-toggle>\n  </ion-item>\n\n  <!--Name-->\n  <ion-list class=\"align-mid\">\n    <h4>Name des Standortes</h4>\n    <ion-item>\n      <ion-input [(ngModel)]=\"name\" placeholder=\"Name..\"></ion-input>\n    </ion-item>\n\n    <!--Koordinaten nur anzeigen wenn Toggle-->\n    <br *ngIf=\"isShown\">\n\n    <h4 *ngIf=\"isShown\">Bearbeite deine Koordinaten</h4>\n    <ion-item *ngIf=\"isShown\">\n      <ion-input [(ngModel)]=\"latitude\" placeholder=\"Latitude..\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"isShown\">\n      <ion-input [(ngModel)]=\"longitude\" placeholder=\"Longitude..\"></ion-input>\n    </ion-item>\n\n    <br><br>\n\n    <!--Foto aufnehmen-->\n    <ion-item class=\"no-border\">\n      <ion-button class=\"camera-button\" (click)=\"takePhoto()\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <!--Speichern Button-->\n    <ion-item class=\"no-border buttons\">\n      <ion-button expand=\"block\" (click)=\"save()\" [routerLink]=\"['../tab1']\">Standort Hinzufügen</ion-button>\n    </ion-item>\n\n    <!--Ideen Button-->\n    <ion-item class=\"no-border buttons\">\n      <ion-button style=\"color: #57b660;\" expand=\"block\" fill=\"outline\" [routerLink]=\"['./ideas']\">Ideen ansehen\n      </ion-button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map