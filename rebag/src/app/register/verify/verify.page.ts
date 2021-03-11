import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  timer = true;
  timeLeft: number = 30;

  constructor(public auth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit() {
  }

  resendVerificationMail(){
    this.authService.sendVerificationMail();
    setTimeout(() => { this.timer = !this.timer }, 30000);
    this.timer = false;
    var timer = setInterval(() => {
      if(this.timeLeft != 0) {
        this.timeLeft -=  1;
      } else {
        clearInterval(timer);
      }
     }, 1000);
    
  }




}
