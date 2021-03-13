import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  //Validation Message
  validationUserMessage = {
    email: [
      { type: "required", message: "Bitte gebe deine E-Mail ein." },
      { type: "pattern", message: "Diese E-Mail ist falsch. Bitte nochmal versuchen." }
    ],
    password: [
      { type: "required", message: "Bitte gebe dein Passwort ein." },
      { type: "minlength", message: "Das Passwort muss mindestens 8 Zeichen lang sein." }
    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router, private firestore: AngularFirestore, private navCtrl: NavController) { }

  //NgOnInIt
  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }


  /*LoginUser(value){
    console.log("Succesessfully logged in");
    try{
      this.authservice.loginFireauth(value).then( resp =>{
        console.log(resp);
        this.authservice.loginVerificationCheck();
      })
    }catch(err){
      console.log(err);
    }
  }*/


  //Login Firebase
  LoginUser(value) {
    console.log("Am logged in");
    try {
      this.authservice.loginFireauth(value).then(resp => {
        console.log(resp);
        //  this.router.navigate(['tabs'])

        if (resp.user) {
          this.authservice.setUser({
            username: resp.user.displayName,
            uid: resp.user.uid
          })

          const userProfile = this.firestore.collection('profile').doc(resp.user.uid);

          userProfile.get().subscribe(result => {

            if (result.exists) {
              this.navCtrl.navigateForward(['tabs/tab1']);
            } else {
              this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
                name: resp.user.displayName,
                email: resp.user.email
              });
              this.authservice.loginVerificationCheck();
            }
          })
        }
      })
    } catch (err) {
      console.log(err);
    }
  }
}
