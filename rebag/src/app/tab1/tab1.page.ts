import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { MarkersService } from '../services/pins.service';
const { Geolocation } = Plugins;
import { styledMap } from '../mapStyle';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: any;
  latitude:number = 0;
  longitude:number = 0;
  styledMapType: any;

  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;

infoWindows: any = [];
markers: any = [];

  constructor() {
    
 }

  ionViewDidEnter(){
    this.latitude = 0.0;
    this.longitude = 0.0;

    const coordinates = Geolocation.getCurrentPosition().then((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
    
    this.showMap();
  }


  showMap(){
    navigator.geolocation.getCurrentPosition((pos) => {
      const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.setCenter(latLng);
      this.map.setZoom(16);
    });

    const options = {
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  addMarkersToMap(markers) {
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        name: marker.name,
        coordinates: marker.coordinates,
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
