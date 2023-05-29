import { Component, OnInit } from '@angular/core';
import { POKEMON_LIST } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMON_LIST;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectpokemon(pokemonId: string) {
    //récuper un pokemon a partir de son id non de l'index
    const pokemon: Pokemon| undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(` Vous avez sélectionnez le pockemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(` vous avez demander un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
    
  }

}
