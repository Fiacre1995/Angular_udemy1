import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPipeColor'
})
export class PokemonPipeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    // Déclare une variable 'color' pour stocker la classe de couleur.

    switch (type) {
        // Vérifie la valeur du paramètre 'type'.
        case 'Poison':
            color = 'blue lighten-3';
            break;
        case 'Fire':
            color = 'red lighten-3';
            break;
        case 'Water':
            color = 'blue lighten-3';
            break;
        case 'Electric':
            color = 'yellow lighten-3';
            break;
        case 'Normal/Fairy':
            color = 'blue lighten-3';
            break;
        case 'Pschic':
            color = 'grey';
            break;
    }

    return 'chip';
    // Renvoie la chaîne de caractères 'chip' concaténée avec la classe de couleur.
}

}
