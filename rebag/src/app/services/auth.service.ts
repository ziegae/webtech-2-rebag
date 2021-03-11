import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public router: Router, public toaster: ToastController, public loadingCtrl: LoadingController) {
   }

  loginFireauth(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  userRegistration(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  sendVerificationMail() {
    firebase.auth().currentUser.sendEmailVerification()
    .then(function() {
      // Verification email sent.
    })
    .catch(function(error) {
      // Error occurred. Inspect error.code.
    });
  }

  loginVerificationCheck(){
    if (firebase.auth().currentUser.emailVerified == false) {
      this.router.navigate(['register/verify']);
    }else{
      this.router.navigate(['tabs']);
    }
  }

  /*async verificationCheck(){
    if (firebase.auth().currentUser.emailVerified == true) {
      this.router.navigate(['start-page']);
    }else{
      await this.toast('Bitte verifiziere deine E-Mail!', 'danger');
    }
  }

  async toast(message, status){
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }*/
}
