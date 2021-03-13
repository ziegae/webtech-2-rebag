import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

export  interface UserPro{
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public auth: AngularFireAuth, public router: Router, public toaster: ToastController, public loadingCtrl: LoadingController) {
   }

   private user : UserPro;

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
      this.router.navigate(['tabs/tab1']);
    }
  }

  signOut(){
    this.auth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }

  setUser(user: UserPro){
    return this.user = user;
  }

  getUID(): string{
    return this.user.uid;
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
