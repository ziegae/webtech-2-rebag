import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  markers: any = [];
  loadedPin: any;

  constructor(private markersService: MarkersService, private activatedRoute: ActivatedRoute) {
    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();
    });

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pinId')) {
        //redirect
        return;
      }
      const pinId = paramMap.get('pinId');
      // this.loadedTestPin = this.markersService.getTestPinId(pinId);
      this.loadedPin = this.markersService.getPinId(pinId);

    });
  }

}
