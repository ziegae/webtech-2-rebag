(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pin-pin-module"],{

/***/ "BPIG":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pin/pin.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--Klassen je nach Status anzeigen-->\n<ion-content>\n  <ion-item *ngFor=\"let marker of markers\" [routerLink]=\"['/pin', marker.pinId]\">\n    <div *ngIf=\"marker.bagsAvailable && marker.bagsClean\" class=\"allgood\"></div>\n    <div *ngIf=\"!marker.bagsAvailable && !marker.bagsClean\" class=\"bagsUnavailable\"></div>\n    <div *ngIf=\"!marker.bagsAvailable && marker.bagsClean\" class=\"bagsUnavailable\"></div>\n    <div *ngIf=\"marker.bagsAvailable && !marker.bagsClean\" class=\"bagsUnclean\"></div>\n    {{marker.name}}\n  </ion-item>\n</ion-content>");

/***/ }),

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

/***/ "Fzu4":
/*!*********************************!*\
  !*** ./src/app/pin/pin.page.ts ***!
  \*********************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pin.page.html */ "BPIG");
/* harmony import */ var _pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin.page.scss */ "SpuY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pins.service */ "BZuN");





let PinPage = class PinPage {
    constructor(markersService) {
        this.markersService = markersService;
        this.markers = [];
        this.markersService.getMarkersSubject().subscribe(() => {
            this.markers = this.markersService.getMarkers();
        });
    }
    ngOnInit() {
    }
    statusBag() {
    }
};
PinPage.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"] }
];
PinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pin',
        template: _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PinPage);



/***/ }),

/***/ "SpuY":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".allgood {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--ion-color-primary);\n}\n\n.bagsUnavailable {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--ion-color-warning);\n}\n\n.bagsUnclean {\n  display: block;\n  margin-right: 12px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoicGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxnb29ke1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYmFnc1VuYXZhaWxhYmxle1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5cbi5iYWdzVW5jbGVhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "cCD0":
/*!***********************************!*\
  !*** ./src/app/pin/pin.module.ts ***!
  \***********************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pin-routing.module */ "lgGr");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "Fzu4");







let PinPageModule = class PinPageModule {
};
PinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["PinPageRoutingModule"]
        ],
        declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
    })
], PinPageModule);



/***/ }),

/***/ "lgGr":
/*!*******************************************!*\
  !*** ./src/app/pin/pin-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageRoutingModule", function() { return PinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin.page */ "Fzu4");




const routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_3__["PinPage"]
    },
    {
        path: ':pinId',
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() | overview-overview-module */[__webpack_require__.e("common"), __webpack_require__.e("overview-overview-module")]).then(__webpack_require__.bind(null, /*! ./overview/overview.module */ "bBUN")).then(m => m.OverviewPageModule),
            },
            {
                path: 'reset-clean',
                loadChildren: () => Promise.all(/*! import() | reset-clean-reset-clean-module */[__webpack_require__.e("common"), __webpack_require__.e("reset-clean-reset-clean-module")]).then(__webpack_require__.bind(null, /*! ./reset-clean/reset-clean.module */ "73AU")).then(m => m.ResetCleanPageModule)
            }
        ]
    },
    { path: '', redirectTo: '/tabs/tabs3', pathMatch: 'full' },
];
let PinPageRoutingModule = class PinPageRoutingModule {
};
PinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PinPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pin-pin-module.js.map