import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';

export interface UserPro {
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public auth: AngularFireAuth, public router: Router, public loadingCtrl: LoadingController) {
   }

  private user: UserPro;

  //Login 
  loginFireauth(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  //Registration
  userRegistration(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  //Sende Verification Email
  sendVerificationMail() {
    firebase.auth().currentUser.sendEmailVerification()
      .then(function () {
        // Verification email sent.
      })
      .catch(function (error) {
        // Error occurred. Inspect error.code.
      });
  }

  //Check Verification
  loginVerificationCheck() {
    if (firebase.auth().currentUser.emailVerified == false) {
      this.router.navigate(['register/verify']);
    } else {
      this.router.navigate(['tabs/tab1']);
    }
  }

  //ausloggen
  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }

  //User
  setUser(user: UserPro) {
    return this.user = user;
  }

  //User Id
  getUID(): string {
    return this.user.uid;
  }
}
