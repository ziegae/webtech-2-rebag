import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-location',
  templateUrl: './change-location.page.html',
  styleUrls: ['./change-location.page.scss'],
})
export class ChangeLocationPage implements OnInit {

  toggleLocation: boolean = true;
  toggleLocation2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
