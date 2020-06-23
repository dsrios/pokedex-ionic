import { Component, OnInit } from '@angular/core';
import { IPokemonView, IPokemonViewResult } from './../Interfaces/Ipokemon';
import { PokedexService } from '../share/services/pokedex.service';
import { ModalController } from '@ionic/angular';
import { ViewDetailsPage } from './../share/view-details/view-details.page';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {

  totalPokemon = 0;
  nextPageUrl: string;
  previousPageUrl: string;
  firstResult;
  isComplete = false;
  resultCompleted: any = [];


  constructor( private pokeService: PokedexService, public modalController: ModalController ) {
    this.getAll();
  }

  ngOnInit() {}

  getAll() {
    this.pokeService.presentLoading();
    this.pokeService.getAllPokemon('50').subscribe( (result: IPokemonViewResult) => {
      this.totalPokemon = result.count;
      this.nextPageUrl = result.next;
      this.previousPageUrl = result.previous;
      this.firstResult = result.results;
    },
    e => console.log('Error in Get All'),
    () => {
      this.assignedDetails();
    }
    );
  }

  getNext( nextUrl ) {
    this.pokeService.presentLoading();
    this.resultCompleted = [];
    this.totalPokemon = null;
    this.nextPageUrl = null;
    this.previousPageUrl = null;
    this.firstResult = null;
    this.isComplete = false;

    this.pokeService.getNextPage(nextUrl).subscribe( (result: IPokemonViewResult) => {
      this.totalPokemon = result.count;
      this.nextPageUrl = result.next;
      this.previousPageUrl = result.previous;
      this.firstResult = result.results;
    },
    e => console.log('Error in getNext'),
    () => {
      this.assignedDetails();
    }
    );
    // this.pokeService.presentLoadingDefault();
  }

  getPrevious( previousUrl ) {
    this.pokeService.presentLoading();
    this.resultCompleted = [];
    this.totalPokemon = null;
    this.nextPageUrl = null;
    this.previousPageUrl = null;
    this.firstResult = null;
    this.isComplete = false;

    this.pokeService.getPreviousPage(previousUrl).subscribe( (result: IPokemonViewResult) => {
      
      this.totalPokemon = result.count;
      this.nextPageUrl = result.next;
      this.previousPageUrl = result.previous;
      this.firstResult = result.results;
    },
    e => console.log('Error in getPrevious'),
    () => {
      this.assignedDetails();
    }
    );
    // this.pokeService.presentLoadingDefault();
  }

  async goToDetail( data ) {
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      componentProps: { details: data}
    });

    return await modal.present();
  }

  assignedDetails() {
    const arrayPromise = [];
    this.firstResult.forEach( (element, index) => {
      arrayPromise.push(this.pokeService.getPokemonDetail(element.url).toPromise());
      this.resultCompleted.push(element);

      // last foreach array is fully
      if (this.firstResult.length - 1 ===  index ) {

        Promise.all(arrayPromise).then( valuesPromiseArray => {

          valuesPromiseArray.forEach( async (valuePromise, indexPromise) => {
            this.resultCompleted[indexPromise].details = await valuePromise;

            // last promise step
            if ( valuesPromiseArray.length - 1 === indexPromise ) {
              this.isComplete = true;
              this.pokeService.deleteLoading();
            }

          });
        });
      }
    });
  }
}
