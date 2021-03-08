import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-reset-availability',
  templateUrl: './reset-availability.page.html',
  styleUrls: ['./reset-availability.page.scss'],
})
export class ResetAvailabilityPage implements OnInit {

  constructor(
    private markersService: MarkersService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  resetAvailability() {
    this.markersService.resetAvailability(this.markersService.getOverviewPinId(
    ));
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }


}
