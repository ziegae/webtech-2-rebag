import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  profile: any;
  profileName: any;
  profileEmail: any;

  constructor(private alertCtrl: AlertController, public authService: AuthService, private database : AngularFirestore) {
    firebase.auth().onAuthStateChanged(user => {
      console.log("AUTH_USER", user);

      if (user) {
        const result = this.database.doc(`/profile/${this.authService.getUID()}`);
        var userprofile = result.valueChanges();
        userprofile.subscribe(profile => {
          console.log("PROFILE::", profile);
           this.profileName = profile['name'];
           this.profileEmail = profile['email'];
        })
      }
    })
   }

  ngOnInit() {

    
  }

  async logoutAlert(){
    await this.alertCtrl.create({
      header: "Ausloggen",
      //subHeader: "Bist du dir sicher, dass du dich ausloggen möchtest?",
      message:"Bist du dir sicher, dass du dich ausloggen möchtest?",
      buttons: [{
        text: "Abbrechen"
      }, 
      { 
        text: "Ausloggen", handler: (res) => {
          this.authService.signOut();
        }
      }]
    }).then(res => res.present());
  }

}
