import { Component } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Plugins} from '@capacitor/core';
//pins als Markers bezeichnet, weil es ansonsten zu problemen gekommen ist
import { MarkersService } from '../services/pins.service';
const { Geolocation } = Plugins;
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  map: any;
  latitude: number = 0;
  longitude: number = 0;


  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [];


  //Marker laden
  constructor(private markersService: MarkersService, private router: Router) {
    this.markersService.getMarkersSubject().subscribe(() => {
      this.loadMarkers();
    });
  }


  //Console log
  ngOnInit() {
    console.log("map screen initialisiert");
  }


  //Aktuelle Position finden und Map laden
  ionViewWillEnter() {
    const coordinates = Geolocation.getCurrentPosition().then((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });

    this.showMap();
    console.log("map wird geladen");
  }


  ionViewDidEnter() {}


  //Generate Map
  showMap() {

    //Map Style laden
    const styledMapType = new google.maps.StyledMapType([
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "stylers": [
          {
            "weight": 1.5
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "weight": 2
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffeb3b"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#606060"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
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
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#333333"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }
    ],
      { name: "Styled Map" }
    );

    //Map Position und EIgenschaften festlegen
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
    }

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
      this.router.navigate(['/pin', marker.pinId])
    });

    //this.infoWindows.push(infoWindow);            
  }

  // Close all Info windows - VERWORFEN
  /*closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }*/


  //GoToPin - VERWORFEN
  /*goToPin(){
    console.log("biezqbubnfui");
    this.router.navigate(['/login'])
  }*/
}
