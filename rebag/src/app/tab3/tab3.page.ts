import { Component } from '@angular/core';
import { MarkersService } from '../services/pins.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  profile: any;
  profileName: any;

  markers: any = [];

  constructor(private markersService: MarkersService, public authService: AuthService, private database : AngularFirestore) {
    //marker aus service laden
    this.markers = this.markersService.getMarkers();
    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();

    });
    console.log("marker werden geladen");

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

}
