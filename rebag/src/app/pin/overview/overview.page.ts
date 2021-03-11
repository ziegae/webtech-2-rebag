import { ResetCleanPage } from './../reset-clean/reset-clean.page';
import { ResetAvailabilityPage } from './../reset-availability/reset-availability.page';
import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ActivatedRoute } from '@angular/router'
import { ModalController } from '@ionic/angular';
import { PushNotificationPage } from './../push-notification/push-notification.page';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})


export class OverviewPage implements OnInit {
 
  markers: any = [];
  loadedPin: any;
  bagsClean: string;
 
  imgSrcBagsClean: any;
  txtBagsClean: any;

  imgSrcBagsAvailable: any;
  txtBagsAvailable: any;

  
  /**
   * Marker laden
   * @param markersService lädt die gespeicherten Pins
   * @param activatedRoute gibt die aktivierte Route zurück
   * @param modalController wird benötigt um ResetCleanPage und ResetCleanAvailability aufzurufen
   */
  
  constructor(
    private markersService: MarkersService,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController) {
    this.markersService.getMarkersSubject().subscribe(() => {
      this.markers = this.markersService.getMarkers();
    });
  }


  //Marker und Status abfrage
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pinId')) {
        //redirect
        return;
      }
      const  pinId = paramMap.get('pinId');
      this.loadedPin = this.markersService.getPinId(pinId);
    });
    this.reloadStatus();
  }

  ionViewDidEnter() {
    this.reloadStatus();
  }


   

  //Verfügbarkeits Stauts zurücksetzen
  async resetAvailabilityModal() {
    if (!this.loadedPin.bagsAvailable) {
      let modal = await this.modalController.create({ component: ResetAvailabilityPage });
      modal.onDidDismiss().then(() => {
        this.reloadStatus();
      });
      return await modal.present();
    }
    return;
  }


  //Sauberkeits Status zurücksetzen
  async resetCleanModal() {
    if (!this.loadedPin.bagsClean) {
      const modal = await this.modalController.create({ component: ResetCleanPage });
      modal.onDidDismiss().then(() => {
        this.reloadStatus();
      });
      return await modal.present();
    }
    return;
  }


  //Create Push-Notification Page
  async pushNotModal(){
    const modal = await this.modalController.create({ component: PushNotificationPage });
        return await modal.present();
  }


  //Set Pin ID
  setOverviewPinId() {
    this.markersService.setOverviewPinId(this.loadedPin);
  }


  //Aktuellen Status laden
  reloadStatus() {
    if (this.loadedPin.bagsAvailable) {
      this.imgSrcBagsAvailable = "bagsAvailable_status-true.svg";
      this.txtBagsAvailable = "Es sind Taschen vorhanden!";

    } else {
      this.imgSrcBagsAvailable = "bagsAvailable_status-false.svg";
      this.txtBagsAvailable = "Es fehlen Taschen!";
    }
    if (this.loadedPin.bagsClean) {
      this.imgSrcBagsClean = "bagsClean_status-true.svg";
      this.txtBagsClean = "Taschen sind sauber!";
    } else {
      this.imgSrcBagsClean = "bagsClean_status-false.svg";
      this.txtBagsClean = "Taschen zu waschen!";
    }
  }


}
