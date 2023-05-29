import { Pokemon } from "./pokemon.model";

export const POKEMON_LIST : Pokemon[] = [

    {
        id: 1,
        hp: 45,
        cp: 49,
        name: "Bulbasaur",
        picture: "../assets/img/april_pokemon.jpg",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 2,
        hp: 39,
        cp: 52,
        name: "Charmander",
        picture: "../assets/img/collab_pokemon_catalog_charizard-min.png",
        types: ["Fire"],
        created: new Date()
    },
    {
        id: 3,
        hp: 44,
        cp: 48,
        name: "Squirtle",
        picture: "../assets/img/og-default-image.jpeg",
        types: ["Water"],
        created: new Date()
    },
    {
        id: 4,
        hp: 35,
        cp: 55,
        name: "Pikachu",
        picture: "../assets/img/Squirtle.webp",
        types: ["Electric"],
        created: new Date()
    },
    {
        id: 5,
        hp: 115,
        cp: 45,
        name: "Jigglypuff",
        picture: "../assets/img/images (1).jpg",
        types: ["Normal/Fairy"],
        created: new Date()
    },
    {
        id: 6,
        hp: 106,
        cp: 110,
        name: "Mewtwo",
        picture: "../assets/img/images (3).png",
        types: ["Psychic"],
        created: new Date()
    },

]