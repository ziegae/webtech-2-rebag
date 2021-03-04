import { Component } from '@angular/core';
import { MarkersService } from '../services/pins.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  markers: any = [];

  constructor(private markersService: MarkersService) {
    //marker aus service laden

    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();
    })
  }

}
