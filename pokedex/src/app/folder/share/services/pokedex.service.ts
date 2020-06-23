import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  URL = 'https://pokeapi.co/api/v2/pokemon';
  // "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  // https://pokeapi.co/api/v2/pokemon/venusaur
  // evolution-chain/:id

  constructor(
    public loadingCtrl: LoadingController,
    private http: HttpClient
  ) {}

  getAllPokemon( limit: string ) {
    const urlLimit = `${this.URL}?offset=0&limit=${limit}`;
    return this.http.get(urlLimit);
  }

  getNextPage(nextUrl: string) {
    return this.http.get(nextUrl);
  }

  getPreviousPage(getPreviousPage: string) {
    return this.http.get(getPreviousPage);
  }

  getPokemonDetail(urlDetails: string) {
    return this.http.get(urlDetails);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      spinner: 'bubbles',
      message: 'Loading please wait ...',
      id: 'loading',
      // duration: 5000,
    });

    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
  }

  async deleteLoading() {
    setTimeout(() => {
      this.loadingCtrl.getTop().then( res => {
      if ( res !== undefined ) {
          (res).parentNode.removeChild(res);
        }
      });
    }, 2000);
  }

}
