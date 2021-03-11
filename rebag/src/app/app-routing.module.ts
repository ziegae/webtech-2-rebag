import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard'

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./start-page/start-page.module').then(m => m.StartPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },

  {
    path: 'new-pin',
    loadChildren: () => import('./new-pin/new-pin.module').then(m => m.NewPinPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () =>import('./register/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'pin',
    loadChildren: () =>import('./pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: '',
    redirectTo: '/start-page',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
