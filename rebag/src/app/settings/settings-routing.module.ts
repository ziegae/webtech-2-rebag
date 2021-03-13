import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'push-notifications',
    loadChildren: () => import('./push-notifications/push-notifications.module').then(m => m.PushNotificationsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'change-profile',
    loadChildren: () => import('./change-profile/change-profile.module').then(m => m.ChangeProfilePageModule)
  },
  {
    path: 'change-location',
    loadChildren: () => import('./change-location/change-location.module').then(m => m.ChangeLocationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule { }
