import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  markers: any = [];
  markersSubject: Subject<any> = new Subject<any>();

  overviewPinId:any;


  constructor(private http: HttpClient) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
      this.markersSubject.next();
    }
    else {
      this.http.get('assets/pin-data.json').subscribe((data: any) => {
        this.markers = data;
        this.markersSubject.next();
      }, (error) => {
      })
    }
  }

  getMarkersSubject() {
    return this.markersSubject.asObservable();
  }

  getMarkers() {
    return this.markers;
  }

  add(marker) {
    this.markers.push(marker);
    this.markersSubject.next();
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }



  getPinId(pinId: string) {
    return {
      ...this.markers.find(pin => {
        return pin.pinId === pinId;
      })
    };
  }

  setOverviewPinId(loadedPin: any){
    this.overviewPinId = loadedPin;
  }

  getOverviewPinId(){
    return this.overviewPinId;
  }

  resetAvailability(loadedPin: any){
      loadedPin.bagsAvailable = "true";
       this.markers[loadedPin.pinId-1]=loadedPin;
       console.log("service gibt aus" + JSON.stringify(this.markers));

  }

  resetClean(loadedPin: any) { 
    loadedPin.bagsClean = "true";
   this.markers[loadedPin.pinId-1]= loadedPin
    console.log("service gibt aus" + JSON.stringify(this.markers));
  }

 
 

}