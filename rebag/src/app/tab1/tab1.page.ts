import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
//pins als Markers bezeichnet, weil es ansonsten zu problemen gekommen ist
import { MarkersService } from '../services/pins.service';
const { Geolocation } = Plugins;
import { styledMap } from '../mapStyle';
import { TestBed } from '@angular/core/testing';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: any;
  latitude:number = 52.26794242552926;
  longitude:number = 7.79301833329877;

  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  //pins als markers bezeichnet, weil es ansonsten zu problemen gekommen ist
  markers: any = [];

  constructor(private markersService:MarkersService) {
    //marker aus service laden
    this.markersService.getMarkersSubject().subscribe(() => {
    this.loadMarkers();
    })
 }

  ionViewDidEnter(){
    const coordinates = Geolocation.getCurrentPosition().then((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
    
    this.showMap();
  }


  showMap(){
    const styledMapType = new google.maps.StyledMapType( [
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
    {name: "Styled Map"}
  );

    navigator.geolocation.getCurrentPosition((pos) => {
      const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.setCenter(latLng);
      this.map.setZoom(18);
    });

    const options = {
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
      },
    }
    
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    
    this.addMarkersToMap(this.markers);
    this.map.mapTypes.set("styled_map", styledMapType);
    this.map.setMapTypeId("styled_map");
    this.loadMarkers();
  }

  loadMarkers()
  {
    for (let i = 0; i < this.markers.length; i++)
    {
      this.markers[i].setMap(null);
    }

    this.markers.length = 0;


    for (let i = 0; i < this.markersService.getMarkers().length; i++)
    {
      const latLng = new google.maps.LatLng(this.markersService.getMarkers()[i].coordinates[0], this.markersService.getMarkers()[i].coordinates[1]);
        
      this.markers.push(new google.maps.Marker({
        position: latLng,
        title: this.markersService.getMarkers()[i].name,
        map: this.map
      }));
    }
  }

  addMarkersToMap(markers) {
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
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = 'div id="content">' +
                            'h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                            '<p>Latitude: ' + marker.latitude + '</p>' +
                            '>p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows){
      window.close();
    }
  }

  
}
