import { PrismaClient, Prisma } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

const pokemonData: Prisma.PokemonCreateInput[] = [
    {
      id: 1,
      name: 'Pikachu',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
      id: 2,
      name: 'Charizard',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
      id: 3,
      name: 'Bulbasaur',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: 4,
      name: 'Squirtle',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
      id: 5,
      name: 'Ivysaur',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    },
    {
      id: 6,
      name: 'Venusaur',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    },
    {
      id: 7,
      name: 'Charmander',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },
    {
      id: 8,
      name: 'Charmeleon',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
    },
    {
      id: 9,
      name: 'Wartortle',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
    },
    {
      id: 10,
      name: 'Blastoise',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    },
    {
      id: 11,
      name: 'Caterpie',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
    },
    {
      id: 12,
      name: 'Metapod',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png'
    },
    {
      id: 13,
      name: 'Butterfree',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png'
    },
    {
      id: 14,
      name: 'Weedle',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png'
    },
    {
      id: 15,
      name: 'Kakuna',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png'
    },
    {
      id: 16,
      name: 'Beedrill',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png'
    },
    {
      id: 17,
      name: 'Pidgey',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
    },
    {
      id: 18,
      name: 'Pidgeotto',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png'
    },
    {
      id: 19,
      name: 'Pidgeot',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png'
    },
    {
      id: 20,
      name: 'Rattata',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
    },
    {
      id: 21,
      name: 'Raticate',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png'
    },
    {
      id: 22,
      name: 'Spearow',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png'
    },
    {
      id: 23,
      name: 'Fearow',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png'
    },
    {
      id: 24,
      name: 'Ekans',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    },
    {
      id: 25,
      name: 'Arbok',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png'
    },
    {
      id: 26,
      name: 'Raichu',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
    },
    {
      id: 27,
      name: 'Sandshrew',
      types: [ 'ground' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png'
    },
    {
      id: 28,
      name: 'Sandslash',
      types: [ 'ground' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png'
    },
    {
      id: 29,
      name: 'Nidorina',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png'
    },
    {
      id: 30,
      name: 'Nidoqueen',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png'
    },
    {
      id: 31,
      name: 'Nidorino',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png'
    },
    {
      id: 32,
      name: 'Nidoking',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png'
    },
    {
      id: 33,
      name: 'Clefairy',
      types: [ 'fairy' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
    },
    {
      id: 34,
      name: 'Clefable',
      types: [ 'fairy' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png'
    },
    {
      id: 35,
      name: 'Vulpix',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
    },
    {
      id: 36,
      name: 'Ninetales',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'
    },
    {
      id: 37,
      name: 'Jigglypuff',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
    },
    {
      id: 38,
      name: 'Wigglytuff',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png'
    },
    {
      id: 39,
      name: 'Zubat',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png'
    },
    {
      id: 40,
      name: 'Golbat',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png'
    },
    {
      id: 41,
      name: 'Oddish',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png'
    },
    {
      id: 42,
      name: 'Gloom',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png'
    },
    {
      id: 43,
      name: 'Vileplume',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png'
    },
    {
      id: 44,
      name: 'Paras',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png'
    },
    {
      id: 45,
      name: 'Parasect',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png'
    },
    {
      id: 46,
      name: 'Venonat',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png'
    },
    {
      id: 47,
      name: 'Venomoth',
      types: [ 'bug' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png'
    },
    {
      id: 48,
      name: 'Diglett',
      types: [ 'ground' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png'
    },
    {
      id: 49,
      name: 'Dugtrio',
      types: [ 'ground' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png'
    },
    {
      id: 50,
      name: 'Meowth',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
    },
    {
      id: 51,
      name: 'Persian',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png'
    },
    {
      id: 52,
      name: 'Psyduck',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
    },
    {
      id: 53,
      name: 'Golduck',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png'
    },
    {
      id: 54,
      name: 'Mankey',
      types: [ 'fighting' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png'
    },
    {
      id: 55,
      name: 'Primeape',
      types: [ 'fighting' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png'
    },
    {
      id: 56,
      name: 'Growlithe',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png'
    },
    {
      id: 57,
      name: 'Arcanine',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
    },
    {
      id: 58,
      name: 'Poliwag',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png'
    },
    {
      id: 59,
      name: 'Poliwhirl',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png'
    },
    {
      id: 60,
      name: 'Poliwrath',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
    },
    {
      id: 61,
      name: 'Abra',
      types: [ 'psychic' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png'
    },
    {
      id: 62,
      name: 'Kadabra',
      types: [ 'psychic' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png'
    },
    {
      id: 63,
      name: 'Alakazam',
      types: [ 'psychic' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
    },
    {
      id: 64,
      name: 'Machop',
      types: [ 'fighting' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
    },
    {
      id: 65,
      name: 'Machoke',
      types: [ 'fighting' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png'
    },
    {
      id: 66,
      name: 'Machamp',
      types: [ 'fighting' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png'
    },
    {
      id: 67,
      name: 'Bellsprout',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png'
    },
    {
      id: 68,
      name: 'Weepinbell',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png'
    },
    {
      id: 69,
      name: 'Victreebel',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png'
    },
    {
      id: 70,
      name: 'Tentacool',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png'
    },
    {
      id: 71,
      name: 'Tentacruel',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png'
    },
    {
      id: 72,
      name: 'Geodude',
      types: [ 'rock' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png'
    },
    {
      id: 73,
      name: 'Graveler',
      types: [ 'rock' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png'
    },
    {
      id: 74,
      name: 'Golem',
      types: [ 'rock' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
    },
    {
      id: 75,
      name: 'Ponyta',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png'
    },
    {
      id: 76,
      name: 'Rapidash',
      types: [ 'fire' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png'
    },
    {
      id: 77,
      name: 'Slowpoke',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png'
    },
    {
      id: 78,
      name: 'Slowbro',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png'
    },
    {
      id: 79,
      name: 'Magnemite',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png'
    },
    {
      id: 80,
      name: 'Magneton',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png'
    },
    {
      id: 81,
      name: 'Doduo',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png'
    },
    {
      id: 82,
      name: 'Dodrio',
      types: [ 'normal' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png'
    },
    {
      id: 83,
      name: 'Seel',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png'
    },
    {
      id: 84,
      name: 'Dewgong',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png'
    },
    {
      id: 85,
      name: 'Grimer',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png'
    },
    {
      id: 86,
      name: 'Muk',
      types: [ 'poison' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png'
    },
    {
      id: 87,
      name: 'Shellder',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png'
    },
    {
      id: 88,
      name: 'Cloyster',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png'
    },
    {
      id: 89,
      name: 'Gastly',
      types: [ 'ghost' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png'
    },
    {
      id: 90,
      name: 'Haunter',
      types: [ 'ghost' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png'
    },
    {
      id: 91,
      name: 'Gengar',
      types: [ 'ghost' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
    },
    {
      id: 92,
      name: 'Onix',
      types: [ 'rock' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
    },
    {
      id: 93,
      name: 'Drowzee',
      types: [ 'psychic' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png'
    },
    {
      id: 94,
      name: 'Hypno',
      types: [ 'psychic' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png'
    },
    {
      id: 95,
      name: 'Krabby',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png'
    },
    {
      id: 96,
      name: 'Kingler',
      types: [ 'water' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png'
    },
    {
      id: 97,
      name: 'Voltorb',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
    },
    {
      id: 98,
      name: 'Electrode',
      types: [ 'electric' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png'
    },
    {
      id: 99,
      name: 'Exeggcute',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png'
    },
    {
      id: 100,
      name: 'Exeggutor',
      types: [ 'grass' ],
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png'
    },
    {
        id: 101,
        name: 'Cubone',
        types: [ 'ground' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png'
      },
      {
        id: 102,
        name: 'Marowak',
        types: [ 'ground' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png'
      },
      {
        id: 103,
        name: 'Hitmonlee',
        types: [ 'fighting' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png'
      },
      {
        id: 104,
        name: 'Hitmonchan',
        types: [ 'fighting' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png'
      },
      {
        id: 105,
        name: 'Lickitung',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png'
      },
      {
        id: 106,
        name: 'Koffing',
        types: [ 'poison' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png'
      },
      {
        id: 107,
        name: 'Weezing',
        types: [ 'poison' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png'
      },
      {
        id: 108,
        name: 'Rhyhorn',
        types: [ 'ground' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png'
      },
      {
        id: 109,
        name: 'Rhydon',
        types: [ 'ground' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png'
      },
      {
        id: 110,
        name: 'Chansey',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png'
      },
      {
        id: 111,
        name: 'Tangela',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png'
      },
      {
        id: 112,
        name: 'Kangaskhan',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png'
      },
      {
        id: 113,
        name: 'Horsea',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png'
      },
      {
        id: 114,
        name: 'Seadra',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png'
      },
      {
        id: 115,
        name: 'Goldeen',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png'
      },
      {
        id: 116,
        name: 'Seaking',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png'
      },
      {
        id: 117,
        name: 'Staryu',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png'
      },
      {
        id: 118,
        name: 'Starmie',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
      },
      {
        id: 119,
        name: 'Scyther',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png'
      },
      {
        id: 120,
        name: 'Jynx',
        types: [ 'ice' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png'
      },
      {
        id: 121,
        name: 'Electabuzz',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png'
      },
      {
        id: 122,
        name: 'Magmar',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png'
      },
      {
        id: 123,
        name: 'Pinsir',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png'
      },
      {
        id: 124,
        name: 'Tauros',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png'
      },
      {
        id: 125,
        name: 'Magikarp',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png'
      },
      {
        id: 126,
        name: 'Gyarados',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
      },
      {
        id: 127,
        name: 'Lapras',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
      },
      {
        id: 128,
        name: 'Ditto',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
      },
      {
        id: 129,
        name: 'Eevee',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
      },
      {
        id: 130,
        name: 'Vaporeon',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'
      },
      {
        id: 131,
        name: 'Jolteon',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png'
      },
      {
        id: 132,
        name: 'Flareon',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'
      },
      {
        id: 133,
        name: 'Porygon',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png'
      },
      {
        id: 134,
        name: 'Omanyte',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png'
      },
      {
        id: 135,
        name: 'Omastar',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png'
      },
      {
        id: 136,
        name: 'Kabuto',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png'
      },
      {
        id: 137,
        name: 'Kabutops',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png'
      },
      {
        id: 138,
        name: 'Aerodactyl',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png'
      },
      {
        id: 139,
        name: 'Snorlax',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
      },
      {
        id: 140,
        name: 'Articuno',
        types: [ 'ice' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
      },
      {
        id: 141,
        name: 'Zapdos',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png'
      },
      {
        id: 142,
        name: 'Moltres',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png'
      },
      {
        id: 143,
        name: 'Dratini',
        types: [ 'dragon' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png'
      },
      {
        id: 144,
        name: 'Dragonair',
        types: [ 'dragon' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png'
      },
      {
        id: 145,
        name: 'Dragonite',
        types: [ 'dragon' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
      },
      {
        id: 146,
        name: 'Mewtwo',
        types: [ 'psychic' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
      },
      {
        id: 147,
        name: 'Mew',
        types: [ 'psychic' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
      },
      {
        id: 148,
        name: 'Chikorita',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png'
      },
      {
        id: 149,
        name: 'Bayleef',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png'
      },
      {
        id: 150,
        name: 'Meganium',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png'
      },
      {
        id: 151,
        name: 'Cyndaquil',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png'
      },
      {
        id: 152,
        name: 'Quilava',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png'
      },
      {
        id: 153,
        name: 'Typhlosion',
        types: [ 'fire' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png'
      },
      {
        id: 154,
        name: 'Totodile',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png'
      },
      {
        id: 155,
        name: 'Croconaw',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png'
      },
      {
        id: 156,
        name: 'Feraligatr',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png'
      },
      {
        id: 157,
        name: 'Sentret',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png'
      },
      {
        id: 158,
        name: 'Furret',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png'
      },
      {
        id: 159,
        name: 'Hoothoot',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png'
      },
      {
        id: 160,
        name: 'Noctowl',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png'
      },
      {
        id: 161,
        name: 'Ledyba',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png'
      },
      {
        id: 162,
        name: 'Ledian',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png'
      },
      {
        id: 163,
        name: 'Spinarak',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png'
      },
      {
        id: 164,
        name: 'Ariados',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png'
      },
      {
        id: 165,
        name: 'Crobat',
        types: [ 'poison' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png'
      },
      {
        id: 166,
        name: 'Chinchou',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png'
      },
      {
        id: 167,
        name: 'Lanturn',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png'
      },
      {
        id: 168,
        name: 'Pichu',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
      },
      {
        id: 169,
        name: 'Cleffa',
        types: [ 'fairy' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png'
      },
      {
        id: 170,
        name: 'Igglybuff',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png'
      },
      {
        id: 171,
        name: 'Togepi',
        types: [ 'fairy' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png'
      },
      {
        id: 172,
        name: 'Togetic',
        types: [ 'fairy' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png'
      },
      {
        id: 173,
        name: 'Natu',
        types: [ 'psychic' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png'
      },
      {
        id: 174,
        name: 'Xatu',
        types: [ 'psychic' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png'
      },
      {
        id: 175,
        name: 'Mareep',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png'
      },
      {
        id: 176,
        name: 'Flaaffy',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png'
      },
      {
        id: 177,
        name: 'Ampharos',
        types: [ 'electric' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png'
      },
      {
        id: 178,
        name: 'Bellossom',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png'
      },
      {
        id: 179,
        name: 'Marill',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png'
      },
      {
        id: 180,
        name: 'Azumarill',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png'
      },
      {
        id: 181,
        name: 'Sudowoodo',
        types: [ 'rock' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png'
      },
      {
        id: 182,
        name: 'Politoed',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png'
      },
      {
        id: 183,
        name: 'Hoppip',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png'
      },
      {
        id: 184,
        name: 'Skiploom',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png'
      },
      {
        id: 185,
        name: 'Jumpluff',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png'
      },
      {
        id: 186,
        name: 'Aipom',
        types: [ 'normal' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png'
      },
      {
        id: 187,
        name: 'Sunkern',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png'
      },
      {
        id: 188,
        name: 'Sunflora',
        types: [ 'grass' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png'
      },
      {
        id: 189,
        name: 'Yanma',
        types: [ 'bug' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png'
      },
      {
        id: 190,
        name: 'Wooper',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png'
      },
      {
        id: 191,
        name: 'Quagsire',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png'
      },
      {
        id: 192,
        name: 'Espeon',
        types: [ 'psychic' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png'
      },
      {
        id: 193,
        name: 'Umbreon',
        types: [ 'dark' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png'
      },
      {
        id: 194,
        name: 'Murkrow',
        types: [ 'dark' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png'
      },
      {
        id: 195,
        name: 'Slowking',
        types: [ 'water' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png'
      },
      {
        id: 196,
        name: 'Misdreavus',
        types: [ 'ghost' ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png'
      }
];

export async function main() {
  for (const poke of pokemonData) {
    await prisma.pokemon.create({ data: poke })
  }
}

main()