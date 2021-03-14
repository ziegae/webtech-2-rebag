import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;

  constructor(private afAuth: AngularFireAuth, private toaster: ToastController, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async resetPassword() {
    if (this.email) {
      const loading = await this.loadingCtrl.create({
        message: 'Bitte warten...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();
      this.afAuth.sendPasswordResetEmail(this.email)
        .then(() => {
          loading.dismiss();
          this.toast('Passwort zurückgesetzt! Überprüfe deine Mails.', 'success')
          this.router.navigate(['/login'])
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
    } else {
      this.toast('Bitte gebe deine E-Mail ein.', 'danger')
    }
  }

  async toast(message, status) {
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

}
