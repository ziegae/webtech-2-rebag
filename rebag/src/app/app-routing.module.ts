import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard'

const routes: Routes = [
  
  {
    path: '',
    // loadChildren: () => import('./start-page/start-page.module').then(m => m.StartPagePageModule)
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'start-page',
    loadChildren: () => import('./start-page/start-page.module').then(m => m.StartPagePageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'test-tab',
    loadChildren: () => import('./test-tab/test-tab.module').then( m => m.TestTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
