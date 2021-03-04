import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../services/pins.service';


@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  markers: any = [];

  constructor(private markersService: MarkersService) {
    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();
    });
  }

  ngOnInit() {
   
  }

}
