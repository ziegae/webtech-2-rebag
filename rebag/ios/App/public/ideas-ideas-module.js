(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ideas-ideas-module"],{

/***/ "2UiP":
/*!****************************************************!*\
  !*** ./src/app/tab2/ideas/ideas-routing.module.ts ***!
  \****************************************************/
/*! exports provided: IdeasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasPageRoutingModule", function() { return IdeasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ideas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ideas.page */ "l9Fy");




const routes = [
    {
        path: '',
        component: _ideas_page__WEBPACK_IMPORTED_MODULE_3__["IdeasPage"]
    }
];
let IdeasPageRoutingModule = class IdeasPageRoutingModule {
};
IdeasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeasPageRoutingModule);



/***/ }),

/***/ "7Wg8":
/*!********************************************!*\
  !*** ./src/app/tab2/ideas/ideas.module.ts ***!
  \********************************************/
/*! exports provided: IdeasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasPageModule", function() { return IdeasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ideas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ideas-routing.module */ "2UiP");
/* harmony import */ var _ideas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ideas.page */ "l9Fy");







let IdeasPageModule = class IdeasPageModule {
};
IdeasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ideas_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeasPageRoutingModule"]
        ],
        declarations: [_ideas_page__WEBPACK_IMPORTED_MODULE_6__["IdeasPage"]]
    })
], IdeasPageModule);



/***/ }),

/***/ "7oiu":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/ideas/ideas.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Standort-Ideen</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!--Slider mit Ideen-->\n  <ion-slides pager>\n\n    <!--Slide 1-->\n    <ion-slide\n      style=\"background: url('/assets/img/ideas/Rebag-Concept-1-3.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Bei den Einkaufswägen</h3>\n        <p class=\"light\"> Acht darauf, dass die Befestigung sich jederzeit lösen lässt, sodass es nicht als\n          Sachbeschädigung ausglegt werden kann.</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 2-->\n    <ion-slide\n      style=\"background: url('/assets/img/ideas/Rebag-Busstop.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Bushaltestelle</h3>\n        <p class=\"light\"> Auch hier sind die Taschen gut überdacht und werden durch Regen nicht beschädigt.</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 3-->\n    <ion-slide\n      style=\"background: url('/assets/img/ideas/Rebag-Vordach-2.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Vordächer</h3>\n        <p class=\"light\"> Vielleicht ist sogar direkt vor deinem Haus eine passende Stelle. Achte aber darauf, die\n          Taschen gut erreichbar sind.</p>\n      </div>\n    </ion-slide>\n\n    <!--Slide 4-->\n    <ion-slide\n      style=\"background: url('/assets/img/ideas/Rebag-Dog-2.jpg') no-repeat center center / cover !important;\">\n      <div class=\"slider-text\">\n        <h3 class=\"light\">Werde Kreativ</h3>\n        <p class=\"light\">Nur trocken und gut sichtbar sollte es sein.</p>\n      </div>\n      <div class=\"align-bottom buttons\">\n        <ion-button expand=\"block\" [routerLink]=\"['/tabs/tab2']\">Standort hinzufügen</ion-button>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "ASjn":
/*!********************************************!*\
  !*** ./src/app/tab2/ideas/ideas.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n  background-color: #3e3e3e;\n}\n\n.slide-con {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.slider-text {\n  position: absolute;\n  top: 10%;\n}\n\nion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent !important;\n  --opacity: 0 !important;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\nion-icon {\n  font-size: 20px !important;\n  margin-right: 10px !important;\n}\n\nion-title {\n  display: none;\n}\n\nion-back-button {\n  color: #57b660;\n}\n\nh3 {\n  font-weight: 900;\n  padding: 0 30px 10px 30px;\n  text-align: center !important;\n}\n\np {\n  margin-top: -5px;\n  font-weight: 600;\n  padding: 0 30px 0 30px;\n}\n\n.align-bottom {\n  position: absolute;\n  bottom: 5%;\n}\n\n.buttons {\n  bottom: 30px;\n  --ion-color-primary: #57b660;\n  padding: 0 30px 0 30px;\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lkZWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLCtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBRUYiLCJmaWxlIjoiaWRlYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA2MiwgNjIpO1xufVxuLnNsaWRlLWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVyLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzU3YjY2MDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAwIDMwcHggMTBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XG59XG5cbi5hbGlnbi1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG59XG5cbi5idXR0b25zIHtcbiAgYm90dG9tOiAzMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNTdiNjYwO1xuICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "l9Fy":
/*!******************************************!*\
  !*** ./src/app/tab2/ideas/ideas.page.ts ***!
  \******************************************/
/*! exports provided: IdeasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasPage", function() { return IdeasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ideas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ideas.page.html */ "7oiu");
/* harmony import */ var _ideas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideas.page.scss */ "ASjn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let IdeasPage = class IdeasPage {
    constructor() { }
    ngOnInit() {
    }
};
IdeasPage.ctorParameters = () => [];
IdeasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ideas',
        template: _raw_loader_ideas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ideas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IdeasPage);



/***/ })

}]);
//# sourceMappingURL=ideas-ideas-module.js.map