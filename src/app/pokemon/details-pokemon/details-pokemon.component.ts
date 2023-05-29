import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getListPokemon();

    const pokemonId: String|null = this.route.snapshot.paramMap.get('id');
    
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    } else {

    }
  }

  ReourSurList() {
    this.router.navigate(['/liste-pokemons']);
  }

}
