import { Component, OnInit, Input } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-reset-clean',
  templateUrl: './reset-clean.page.html',
  styleUrls: ['./reset-clean.page.scss'],
})
export class ResetCleanPage implements OnInit {
  markers: any = [];
/**
 * 
 * @param markersService lädt die Marker
 * @param modalController ist zum Öffnen der Seite als Modal notwendig
 */
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
/**
 * resetClean() gibt an den markersService den aktuellen Pin weiter, dieser setzt den Status für diesen Pin zurück
 */
  resetClean() {
    this.markersService.resetClean();
    this.modalController.dismiss();

  }
  
/**
 * dismiss() schließt das modal
 */
  dismiss() {
    this.modalController.dismiss();
  }

}
