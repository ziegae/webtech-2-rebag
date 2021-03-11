import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationUserMessage ={
    email:[
      {type:"required", message:"Bitte gebe deine E-Mail ein."},
      {type:"pattern", message:"Diese E-Mail ist falsch. Bitte nochmal versuchen."}
    ],
    password:[
      {type:"required", message:"Bitte gebe dein Passwort ein."},
      {type:"minlength", message:"Das Passwort muss mindestens 8 Zeichen lang sein."}
    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  LoginUser(value){
    console.log("Succesessfully logged in");
    try{
      this.authservice.loginFireauth(value).then( resp =>{
        console.log(resp);
        this.authservice.loginVerificationCheck();
      })
    }catch(err){
      console.log(err);
    }
  }
}
