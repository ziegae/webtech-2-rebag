import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifactionsToPin: any = [];
  notifactionsToPinSubject: Subject<any> = new Subject<any>();



  constructor(
    private http: HttpClient) {
    if (localStorage.getItem('notifactionsToPin')) {
      this.notifactionsToPin = JSON.parse(localStorage.getItem('notifactionsToPin'));
      this.notifactionsToPinSubject.next();
    }
    else {
      this.http.get('assets/notifications.json').subscribe((data: any) => {
        this.notifactionsToPin = data;
        this.notifactionsToPinSubject.next();
      }, (error) => {
      })
    }
    console.log(JSON.stringify(this.notifactionsToPin));
  }

  getNotifactionsToPinSubject() {
    return this.notifactionsToPinSubject.asObservable();
  }
  getNotifactionsToPin() {
    return this.notifactionsToPin;
  }
}
