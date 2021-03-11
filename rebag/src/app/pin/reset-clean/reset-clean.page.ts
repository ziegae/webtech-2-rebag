import { Component, OnInit, Input } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ModalController} from '@ionic/angular';




@Component({
  selector: 'app-reset-clean',
  templateUrl: './reset-clean.page.html',
  styleUrls: ['./reset-clean.page.scss'],
})
export class ResetCleanPage implements OnInit {
markers:any = [];
// pinId:any;

  constructor(
    private markersService: MarkersService,
    public modalController: ModalController
   ) {
    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();
    });
  }

  ngOnInit() {
   }

  resetClean(){
  this.markersService.resetClean(this.markersService.getOverviewPinId(  
  ));
  this.modalController.dismiss();

 }

  dismiss() {
    this.modalController.dismiss();
  }

}
