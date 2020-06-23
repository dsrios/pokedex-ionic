import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ProfileComponent } from './profile/profile.component';
import { PokedexService } from './share/services/pokedex.service';
import { CardComponent } from './share/card/card.component';
import { ViewDetailsPageModule } from './share/view-details/view-details.module';



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ViewDetailsPageModule
  ],
  declarations: [
    FolderPage,
    PokedexComponent,
    ProfileComponent,
    CardComponent
  ],
  providers: [
    PokedexService
  ]
})
export class FolderPageModule {}
