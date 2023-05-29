import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { POKEMON_LIST } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getListPokemon(): Pokemon[] {
    return POKEMON_LIST;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMON_LIST.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[] {
    return ['Poison','Fire','Water','Electric','Normal','Fairy','Psychic'];
  }

  // searchPokemon(nom: string): Observable<Pokemon[]> {
  //   return POKEMON_LIST. }
}
