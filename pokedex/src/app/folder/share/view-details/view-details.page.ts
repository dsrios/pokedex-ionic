import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {

  pokemonDetails: any;
  imageUrl = [];
  typesNames = [];
  movesList = '';


  constructor(public viewCtrl: ModalController, navParams: NavParams) {
    this.pokemonDetails = navParams.get('details');
    this.getImageUrl();
    this.getTypes();
    this.getMoves();
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getImageUrl(){
    const sprites = this.pokemonDetails.sprites;

    Object.entries(sprites).forEach(
      ([key, value]) => {
        if ( value ){
          this.imageUrl.push(value);
        }
      }
    );
  }

  getTypes() {
    this.pokemonDetails.types.forEach( element => {
      this.typesNames.push(element.type.name);
    });
  }

  getMoves() {
    const movesList = this.pokemonDetails.moves;
    movesList.forEach( element => {
      this.movesList = this.movesList !== '' ? `${this.movesList}, ${element.move.name}` : element.move.name;
    });
  }

}
