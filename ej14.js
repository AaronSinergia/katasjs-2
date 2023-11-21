// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code',
];

function repeatCounter(array) {
  let objectOfArray = {};

  for (const word of array) {
    if (objectOfArray[word]) {
      objectOfArray[word]++;
    } else {
      objectOfArray[word] = 1;
    }
  }
  return objectOfArray;
}

const occurrences = repeatCounter(counterWords);

for (const words in occurrences) {
  console.log(`La palabra ${words} se repite ${occurrences[words]} veces`);
}
