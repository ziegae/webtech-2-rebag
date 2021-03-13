import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../services/pins.service';
import { Plugins, CameraResultType } from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
const { Camera } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  profile: any;
  profileName: any;

  // Platzhalter für den Neuen Marker
  pinId: string = '';
  name: string = '';
  latitude: number = 0;
  longitude: number = 0;
  availabilityReport: number = 0;
  cleaningReport: number = 0;
  imageBase64: any = null;

  // weitere
  toggle: boolean = true;
  isShown = false;
  imageTook= false;

  constructor(private markersService: MarkersService, public authService: AuthService, private database : AngularFirestore) {
    firebase.auth().onAuthStateChanged(user => {
      console.log("AUTH_USER", user);

      if (user) {
        const result = this.database.doc(`/profile/${this.authService.getUID()}`);
        var userprofile = result.valueChanges();
        userprofile.subscribe(profile => {
          console.log("PROFILE::", profile);
           this.profileName = profile['name'];
        })
      }
    })
  }

  ngOnInit() { }

  //Koordinaten des aktuellen Standorts laden
  ionViewDidEnter() {
    this.latitude = 0.0;
    this.longitude = 0.0;

    const coordinates = Geolocation.getCurrentPosition().then((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  //Foto für den Standort aufnehmen
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    this.imageBase64 = image.base64String;
    this.imageTook=true;
  }

  //Standort speichern
  save() {
    const marker = {
      'pinId': JSON.stringify(this.markersService.getMarkerslength() + 1),
      'name': this.name,
      'coordinates': [this.latitude, this.longitude],
      'availabilityReport': this.availabilityReport,
      'cleaningReport': this.cleaningReport,
      'imageBase64': this.imageBase64
    };
    //console.log(JSON.stringify(marker));

    this.markersService.add(marker);
    this.pinId = '';
    this.name = '';
    this.latitude = 0;
    this.longitude = 0;
    this.availabilityReport = 0;
    this.cleaningReport = 0;
    this.imageBase64 = '';

    this.toggle = true;
    this.isShown = false;    
  }

  //Ansicht der Koordinaten togglen
  toggleGeo() {
    this.isShown = !this.isShown;
  }
}
