import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './share/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'pokedex',
        component: PokedexComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: 'view-details',
    loadChildren: () => import('./share/view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
