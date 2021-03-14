import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  policyChecked: boolean;

  //Checkbox anklicken
  toggleCheckbox() {
    this.policyChecked = !this.policyChecked;
  }

}
