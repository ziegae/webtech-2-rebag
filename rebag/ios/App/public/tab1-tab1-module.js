(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!--Username anzeigen-->\n    <ion-title>Hey {{profileName}}!</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/settings']\">\n        <ion-icon slot=\"icon-only\" name=\"cog\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--Map anzeigen-->\n  <div style=\"height: 100%;\" #map id=\"map\"></div>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_pins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pins.service */ "BZuN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "Jgta");






//pins als Markers bezeichnet, weil es ansonsten zu problemen gekommen ist

const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];





let Tab1Page = class Tab1Page {
    //Marker laden
    constructor(markersService, router, authService, database, auth) {
        this.markersService = markersService;
        this.router = router;
        this.authService = authService;
        this.database = database;
        this.auth = auth;
        this.latitude = 0;
        this.longitude = 0;
        this.infoWindows = [];
        this.markers = [];
        this.markersService.getMarkersSubject().subscribe(() => {
            this.loadMarkers();
        });
        firebase_app__WEBPACK_IMPORTED_MODULE_10__["default"].auth().onAuthStateChanged(user => {
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
    //Aktuelle Position finden und Map laden
    ionViewWillEnter() {
        const coordinates = Geolocation.getCurrentPosition().then((pos) => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        });
        this.showMap();
    }
    ionViewDidEnter() { }
    //Generate Map
    showMap() {
        //Map Style laden
        const styledMapType = new google.maps.StyledMapType([
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#aaaaaa"
                    },
                    {
                        "weight": 1
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#333333"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ebebeb"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c0c0c0"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d6d6d6"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#929292"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#929292"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ], { name: "Styled Map" });
        //Map Position und Eigenschaften festlegen
        navigator.geolocation.getCurrentPosition((pos) => {
            const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            this.map.setCenter(latLng);
            this.map.setZoom(18);
        });
        //Map Style festlegen
        const options = {
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
            },
        };
        //Map erstellen
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        //Map Sytle und Marker aufrufen
        this.map.mapTypes.set("styled_map", styledMapType);
        this.map.setMapTypeId("styled_map");
        this.loadMarkers();
    }
    //Load Markers from JSON
    loadMarkers() {
        //Array durchlaufen
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers.length = 0;
        //JSON durchlaufen
        for (let i = 0; i < this.markersService.getMarkers().length; i++) {
            const latLng = new google.maps.LatLng(this.markersService.getMarkers()[i].coordinates[0], this.markersService.getMarkers()[i].coordinates[1]);
            //Marker Details aus JSON laden
            let mapMarker = new google.maps.Marker({
                position: latLng,
                title: this.markersService.getMarkers()[i].name,
                map: this.map,
                name: this.markersService.getMarkers()[i].name,
                bagsAvailable: this.markersService.getMarkers()[i].bagsAvailable,
                bagsClean: this.markersService.getMarkers()[i].bagsClean,
                availabilityReport: this.markersService.getMarkers()[i].availabilityReport,
                cleaningReport: this.markersService.getMarkers()[i].cleaningReport,
                pinId: this.markersService.getMarkers()[i].pinId
            });
            //Marker auf Map darstellen
            this.addInfoWindow(mapMarker);
            //Verworfener Marker
            /*this.markers.push(new google.maps.Marker({
              position: latLng,
              title: this.markersService.getMarkers()[i].name,
              map: this.map
            }));*/
        }
    }
    //Add Markers To Map - VERWORFEN
    /*addMarkersToMap(markers) {
      for(let marker of markers){
        let position = new google.maps.LatLng(marker.latitude, marker.longitude);
        let mapMarker = new google.maps.Marker({
          position: position,
          name: marker.name,
          bagsAvailable: marker.bagsAvailable,
          bagsClean: marker.bagsClean,
          availabilityReport: marker.availabilityReport,
          cleaningReport: marker.cleaningReport
        });
  
        mapMarker.setMap(this.map);
        this.addInfoWindow(mapMarker);
      }
    }*/
    //Open Window on Click
    addInfoWindow(marker) {
        // Info Window Aussehen
        /* let infoWindowContent = '<div id="content">' +
                                 '<h1>' + marker.name + '</h1>' +
                                 '<p> Bags Available: ' + marker.bagsAvailable + '</p>' +
                                 '<p> Bags Clean: ' + marker.bagsClean + '</p>' +
                                 '<ion-button (click)="goToPin()"> Mehr Informationen </ion-button>' +
                                 '</div>';
     
        //Info Window erstellen
         let infoWindow = new google.maps.InfoWindow({
           content: infoWindowContent
         });*/
        marker.addListener('click', () => {
            // call Info Window
            // this.closeAllInfoWindows();
            // infoWindow.open(this.map, marker);
            this.router.navigate(['/pin', marker.pinId]);
        });
        //this.infoWindows.push(infoWindow);            
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_pins_service__WEBPACK_IMPORTED_MODULE_5__["MarkersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
];
Tab1Page.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n\n.action-buttons {\n  display: block;\n  width: calc(100% - 16px);\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  text-align: right;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgei1pbmRleDogOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map