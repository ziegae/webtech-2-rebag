import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
  map: google.maps.Map;

  @ViewChild('mapElement') mapElement:ElementRef;

  constructor() { }

  ngOnInit() {

  }

   ngAfterViewInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: 52, lng: 8},
      zoom: 8
    });

    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((pos) => {
        const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(14);
      });
    }
   }

}
