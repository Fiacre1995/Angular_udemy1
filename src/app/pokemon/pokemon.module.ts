import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePokemonComponent } from './liste-pokemon/liste-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { PokemonPipeColorPipe } from './pokemon-pipe-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  {path: 'liste-pokemons', component: ListePokemonComponent, canActivate: [AuthGuard]},
  {path: 'details-pokemons/:id', component: DetailsPokemonComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    ListePokemonComponent,
    DetailsPokemonComponent,
    PokemonPipeColorPipe,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
