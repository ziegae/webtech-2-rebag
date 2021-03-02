import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    // path: 'register',
    component: RegisterPage,
    children: [
      // {
      //   path: 'test',
      //   loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
      // },
      //  {
      //  path: '',
      // redirectTo: '/register/test',
      //pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'input-name',
    loadChildren: () => import('./input-name/input-name.module').then(m => m.InputNamePageModule)
  },
  {
    path: 'input-phonenumber',
    loadChildren: () => import('./input-phonenumber/input-phonenumber.module').then(m => m.InputPhonenumberPageModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./validation/validation.module').then(m => m.ValidationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RegisterPageRoutingModule { }
