import { ResetCleanPage } from './../reset-clean/reset-clean.page';
import { ResetAvailabilityPage } from './../reset-availability/reset-availability.page';
import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../../services/pins.service';
import { ActivatedRoute } from '@angular/router'
import { ModalController } from '@ionic/angular';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})


export class OverviewPage implements OnInit {
 
  markers: any = [];
  loadedPin: any;


  bagsAvailable:boolean;
  bagsClean:boolean;

  imgSrcBagsClean: any;
  txtBagsClean: any;

  imgSrcBagsAvailable: any;
  txtBagsAvailable: any;  

 
  constructor(
    private markersService: MarkersService,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private domSanitizer: DomSanitizer ) {
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
    // this.domSanitizer.bypassSecurityTrustResourceUrl(this.loadedPin.imageBase64);
    this.reloadStatus();
  }

  ionViewDidEnter() {
    this.reloadStatus();
  }


   

  //Verfügbarkeits Stauts zurücksetzen
  async resetAvailabilityModal() {
    if (!this.bagsAvailable) {
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
    if (!this.bagsClean) {
      const modal = await this.modalController.create({ component: ResetCleanPage });
      modal.onDidDismiss().then(() => {
        this.reloadStatus();
      });
      return await modal.present();
    }
    return;
  }



  //Set Pin ID
  setOverviewPinId() {
    this.markersService.setOverviewPinId(this.loadedPin);
  }


  //Aktuellen Status laden
  reloadStatus() {
    if(this.loadedPin.availabilityReport < 3 ){
      this.bagsAvailable = true; 
      this.imgSrcBagsAvailable = "bagsAvailable_status-true.svg";
      this.txtBagsAvailable = "Es sind Taschen vorhanden!";
    }
    else{
      this.bagsAvailable = false; 
      this.imgSrcBagsAvailable = "bagsAvailable_status-false.svg";
      this.txtBagsAvailable = "Es fehlen Taschen!";

    }
    if(this.loadedPin.cleaningReport < 3 ){
      this.bagsClean = true; 
      this.imgSrcBagsClean = "bagsClean_status-true.svg";
      this.txtBagsClean = "Taschen sind sauber!";
    }
    else{
      this.bagsClean = false; 
      this.imgSrcBagsClean = "bagsClean_status-false.svg";
      this.txtBagsClean = "Taschen zu waschen!";
    }
  }


}
