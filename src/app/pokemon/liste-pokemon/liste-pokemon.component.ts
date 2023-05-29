import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { POKEMON_LIST } from '../mock-pokemon-list';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styleUrls: ['./liste-pokemon.component.css']
})
export class ListePokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemonSelected: Pokemon|undefined;
  
  constructor(private router: Router, private pokemonService: PokemonService) { }
  
  ngOnInit() {
    //console.table(this.pokemonList);
    this.pokemonList = this.pokemonService.getListPokemon();
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

  DetailsPokemon(pokemon: Pokemon) {
    this.router.navigate(['/details-pokemons', pokemon.id]);
  }

  

}
