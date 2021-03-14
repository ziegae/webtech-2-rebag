(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"],{

/***/ "0VjU":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pin/overview/overview.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <!--Pin Name laden-->\n    <ion-title>{{loadedPin.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <!--Image laden-->\n  <div class=\"img-container\">\n    <img class=\"ion-no-padding img-overview\" src=\"{{'data:image/jpg;base64,' + loadedPin.imageBase64}}\" />\n  </div>\n\n  <!--Pin Name-->\n  <ion-text>\n    <h1>{{loadedPin.name}}</h1>\n  </ion-text>\n\n  <!--Pin Standort-->\n  <ion-text>\n    <p>{{loadedPin.coordinates}}</p>\n  </ion-text>\n\n  <!--Headline-->\n  <ion-text>\n    <h4>Status</h4>\n  </ion-text>\n\n  <!--Status Verfügbarkeit-->\n  <ion-item class=\"ion-no-padding\" (click)=\"resetAvailabilityModal(); setOverviewPin()\">\n\n    <!--Pin Status Image-->\n    <img class=\"img-list\" src=\"../assets/img/pinstatus/{{imgSrcBagsAvailable}}\">\n\n    <!--Pfeil nach rechts-->\n    <ion-icon *ngIf=\"!bagsAvailable\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n\n    <!--Pin Status laden-->\n    <ion-text>\n      {{txtBagsAvailable}}\n    </ion-text>\n\n  </ion-item>\n\n\n  <!--Status Sauberkeit-->\n  <ion-item class=\"ion-no-padding\" (click)=\"resetCleanModal(); setOverviewPin()\">\n\n    <!--Pin Status Image-->\n    <img class=\"img-list\" src=\"../assets/img/pinstatus/{{imgSrcBagsClean}}\">\n\n    <!--Pfeil nach rechts-->\n    <ion-icon *ngIf=\"!bagsClean\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n\n    <!--Pin Status laden-->\n    <ion-text>\n      {{txtBagsClean}}\n    </ion-text>\n\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "4B5b":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pin/reset-availability/reset-availability.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Es fehlen Taschen?</ion-title>\n    <ion-icon slot=\"end\" (click)=\"dismiss()\" name=\"close\" class=\"ion-margin\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<!--Status ändern-->\n<ion-content>\n  <p>Klicke unten, um anzuzeigen, dass wieder Taschen vorhanden sind! </p>\n  <img class=\"center\" src=\"../assets/img/pinstatus/bagsAvailable@2x.png\">\n\n  <div class=\"btn-center\">\n    <ion-button expand=\"block\" (click)=\"resetAvailability()\">Taschen jetzt vorhanden</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "A5AG":
/*!*******************************************************************!*\
  !*** ./src/app/pin/reset-availability/reset-availability.page.ts ***!
  \*******************************************************************/
/*! exports provided: ResetAvailabilityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAvailabilityPage", function() { return ResetAvailabilityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_availability_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-availability.page.html */ "4B5b");
/* harmony import */ var _reset_availability_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-availability.page.scss */ "xQTN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pins.service */ "BZuN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ResetAvailabilityPage = class ResetAvailabilityPage {
    constructor(markersService, modalController) {
        this.markersService = markersService;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    //Verfügbarkeit zurücksetzen
    resetAvailability() {
        this.markersService.resetAvailability();
        this.modalController.dismiss();
    }
    //Modal ausblenden
    dismiss() {
        this.modalController.dismiss();
    }
};
ResetAvailabilityPage.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ResetAvailabilityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-availability',
        template: _raw_loader_reset_availability_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_availability_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetAvailabilityPage);



/***/ }),

/***/ "bBUN":
/*!*************************************************!*\
  !*** ./src/app/pin/overview/overview.module.ts ***!
  \*************************************************/
/*! exports provided: OverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview-routing.module */ "xEt8");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "sg/Y");







//import { ModalController } from '@ionic/angular';
let OverviewPageModule = class OverviewPageModule {
};
OverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OverviewPageRoutingModule"]
        ],
        declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
    })
], OverviewPageModule);



/***/ }),

/***/ "sg/Y":
/*!***********************************************!*\
  !*** ./src/app/pin/overview/overview.page.ts ***!
  \***********************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_overview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./overview.page.html */ "0VjU");
/* harmony import */ var _overview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.page.scss */ "yFtv");
/* harmony import */ var _reset_clean_reset_clean_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../reset-clean/reset-clean.page */ "xaUu");
/* harmony import */ var _reset_availability_reset_availability_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../reset-availability/reset-availability.page */ "A5AG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pins.service */ "BZuN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










let OverviewPage = class OverviewPage {
    constructor(markersService, activatedRoute, modalController, domSanitizer) {
        this.markersService = markersService;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.domSanitizer = domSanitizer;
        //Array für Marker für die Standorte aus dem pins.service, und einzelner geladener pin auf angezeigter Seite
        this.markers = [];
        //Marker aus dem pins.service laden
        this.markersService.getMarkersSubject().subscribe(() => {
            this.markers = this.markersService.getMarkers();
        });
    }
    //Marker und Status abfrage
    ngOnInit() {
        //erhält die aktivierte Route, sodass Marker mit der PinId der aktivierten Route in loadedPin geladen werden kann.
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('pinId')) {
                //redirect
                return;
            }
            const pinId = paramMap.get('pinId');
            this.loadedPin = this.markersService.getPinId(pinId);
        });
        this.reloadStatus();
    }
    //Verfügbarkeits Stauts zurücksetzen
    resetAvailabilityModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.bagsAvailable) {
                let modal = yield this.modalController.create({ component: _reset_availability_reset_availability_page__WEBPACK_IMPORTED_MODULE_4__["ResetAvailabilityPage"] });
                modal.onDidDismiss().then(() => {
                    this.reloadStatus();
                });
                return yield modal.present();
            }
            return;
        });
    }
    //Sauberkeits Status zurücksetzen
    resetCleanModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.bagsClean) {
                const modal = yield this.modalController.create({ component: _reset_clean_reset_clean_page__WEBPACK_IMPORTED_MODULE_3__["ResetCleanPage"] });
                modal.onDidDismiss().then(() => {
                    this.reloadStatus();
                });
                return yield modal.present();
            }
            return;
        });
    }
    //gibt das Objekt, das loadedPin zugewiesen ist an den service weiter, um den Wert in dem array markers entsprechend ändern zu können.
    setOverviewPin() {
        this.markersService.setOverviewPin(this.loadedPin);
    }
    //Aktuellen Status laden
    /**
     * Aktuellen Status
     * Wenn der availabilityReport bzw cleaningReport des geladenen Markers größer drei ist,
     * wird das Icon in Warnfarbe angezeigt und Text dazu passend geändert.
     */
    reloadStatus() {
        if (this.loadedPin.availabilityReport < 3) {
            this.bagsAvailable = true;
            this.imgSrcBagsAvailable = "bagsAvailable_status-true.svg";
            this.txtBagsAvailable = "Es sind Taschen vorhanden!";
        }
        else {
            this.bagsAvailable = false;
            this.imgSrcBagsAvailable = "bagsAvailable_status-false.svg";
            this.txtBagsAvailable = "Es fehlen Taschen!";
        }
        if (this.loadedPin.cleaningReport < 3) {
            this.bagsClean = true;
            this.imgSrcBagsClean = "bagsClean_status-true.svg";
            this.txtBagsClean = "Taschen sind sauber!";
        }
        else {
            this.bagsClean = false;
            this.imgSrcBagsClean = "bagsClean_status-false.svg";
            this.txtBagsClean = "Taschen zu waschen!";
        }
    }
};
OverviewPage.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_6__["MarkersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
OverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-overview',
        template: _raw_loader_overview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_overview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OverviewPage);



/***/ }),

/***/ "xEt8":
/*!*********************************************************!*\
  !*** ./src/app/pin/overview/overview-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OverviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageRoutingModule", function() { return OverviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.page */ "sg/Y");




const routes = [
    {
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"]
    }
];
let OverviewPageRoutingModule = class OverviewPageRoutingModule {
};
OverviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OverviewPageRoutingModule);



/***/ }),

/***/ "xQTN":
/*!*********************************************************************!*\
  !*** ./src/app/pin/reset-availability/reset-availability.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-center {\n  width: 80% !important;\n  margin-top: 20px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2V0LWF2YWlsYWJpbGl0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6InJlc2V0LWF2YWlsYWJpbGl0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNlbnRlciB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "yFtv":
/*!*************************************************!*\
  !*** ./src/app/pin/overview/overview.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-container {\n  display: block;\n  width: 100%;\n  height: 35%;\n  overflow: hidden;\n}\n\n.img-overview {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL292ZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0g7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im92ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDogMzUlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbi5pbWctb3ZlcnZpZXd7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDphdXRvO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=overview-overview-module.js.map