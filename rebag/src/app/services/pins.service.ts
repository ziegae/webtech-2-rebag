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

  resetClean(loadedPin: any) {
    const found = this.markers.findIndex(pin => pin.pinId = loadedPin.pinId);
    
    loadedPin.bagsClean = "true";
    this.markers[found]= loadedPin;
    console.log(JSON.stringify("service gibt aus" + JSON.stringify(this.markers[found])));
  }

  resetAvailability(loadedPin: any){
    const found = this.markers.findIndex(pin => pin.pinId = loadedPin.pinId);
       loadedPin.bagsAvailable = "true";
       this.markers[found]=loadedPin;
       console.log(JSON.stringify("service gibt aus" + JSON.stringify(this.markers[found])));
  }
 
  /*
    delete(pin)
    {
      this.pins.splice(this.pins.indexOf(pin), 1);
      this.pinsSubject.next();
      localStorage.setItem('pins', JSON.stringify(this.pins));
    }
  */
  /*reset()
   {
     return new Promise((resolve, reject) => {
       localStorage.clear();
       this.http.get('assets/pin-data.json').subscribe((data) => {
         this.pins = data;
         resolve();
       });
       // wenn es nicht klappen sollte reject();
     })
     
     //location.reload();
   }*/
}
