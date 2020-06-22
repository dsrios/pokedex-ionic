import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  },
  // { path:  'sign-up',
  //   loadChildren:  './auth/sign-up/sign-up.module'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
