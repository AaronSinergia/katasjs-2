// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];

const nameOfGreenMonster = avengers[0];

console.log(nameOfGreenMonster);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengerss = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];

console.log((avengerss[0] = 'IRON MAN'));

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengersss = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];

const numberOAvengeritos = avengersss.length;

console.log(numberOAvengeritos);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];

rickAndMortyCharacters.push('Morty', 'Summer');
const theLastOfUs = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];
console.log(theLastOfUs);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacterss = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];

const byeBye = rickAndMortyCharacterss.pop();
console.log(byeBye);

const firstElement = rickAndMortyCharacterss[0];
console.log(firstElement);

const lastElement = rickAndMortyCharacterss[rickAndMortyCharacterss.length - 1];

console.log(lastElement);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharactersss = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];

let byeByeSecondCharacter = rickAndMortyCharactersss.splice(1, 1);
console.log(rickAndMortyCharactersss);
