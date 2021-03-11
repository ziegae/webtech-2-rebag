import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MarkersService } from '../services/pins.service';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pinId: string = '';
  name: string = '';
  bagsAvailable: boolean = true;
  bagsClean: boolean = true;
  latitude: number = 0;
  longitude: number = 0;
  availabilityReport: number = 0;
  cleaningReport: number = 0;
  imageBase64: any = null;
  toggle: boolean = true;
  isShown = false;
  imageTook= false;

  constructor(private markersService: MarkersService, public modalController: ModalController) {

  }

  ngOnInit() { }

  //Koordinaten des aktuellen Standorts laden
  ionViewDidEnter() {
    this.latitude = 0.0;
    this.longitude = 0.0;

    const coordinates = Geolocation.getCurrentPosition().then((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  //Foto für den Standort aufnehmen
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    this.imageBase64 = image.base64String;
    this.imageTook=true;
    console.log("bild aufgenommen")
  }

  //Standort speichern
  save() {
    const marker = {
      'pinId': this.pinId,
      'name': this.name,
      'basAvailable': this.bagsAvailable,
      'bagsClean': this.bagsClean,
      'coordinates': [this.latitude, this.longitude],
      'availabilityReport': this.availabilityReport,
      'cleaningReport': this.cleaningReport,
      'imageBase64': this.imageBase64
    };
    this.markersService.add(marker);
    this.pinId = '';
    this.name = '';
    this.bagsAvailable = true;
    this.bagsClean = true;
    this.latitude = 0;
    this.longitude = 0;
    this.availabilityReport = 0;
    this.cleaningReport = 0
    this.imageBase64 = '';

    this.toggle = true;
    this.isShown = false;
  }

  //Ansicht der Koordinaten togglen
  toggleGeo() {
    this.isShown = !this.isShown;
  }
}
