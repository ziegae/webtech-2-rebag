import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

import { NotificationsService } from '../../services/notifications.service'
 
@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPage implements OnInit {

  all:boolean;
  pushNotifications: any = [];

  constructor(
  public modalController:ModalController,
  public notificationService:NotificationsService
  ) { 
    this.notificationService.getNotifactionsToPinSubject().subscribe(() => {
      this.pushNotifications = this.notificationService.getNotifactionsToPin();
    })
  }

  ngOnInit() {
  }

  setToggleState(){
    this.all != this.all;
    console.log("toggle getätigt, status ist" + this.all);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
