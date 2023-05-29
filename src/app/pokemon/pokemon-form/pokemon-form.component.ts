import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  //Injecter un pokemon
  @Input() pokemon: Pokemon;

  types : string[];

  constructor(private pokemonService: PokemonService, private router: Router ) {}

  ngOnInit() {
    // Affiche la liste des types de pokeman 
    this.types = this.pokemonService.getPokemonTypeList();

  }

  // Permet de cocher par defaut le type de pokemon
  hasType(type: string): boolean {
      return this.pokemon.types.includes(type);
  }


  //Permet de cocher, decocher un type de pokemon
  selectType($event : Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }

  }

  isTypesValid(type: string): boolean {
    
    if(this.pokemon.types.length == 1  && this.hasType(type) ) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }


  onSubmit() {
    console.log('Submit form');
    this.router.navigate(['/details-pokemons', this.pokemon.id])
  }

}
