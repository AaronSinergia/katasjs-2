// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta',
];

let productsIncludeCamisetaWord = [];

for (const valor of products) {
  if (valor.toUpperCase().includes('CAMISETA')) {
    productsIncludeCamisetaWord.push(valor);
  }
}

console.log(productsIncludeCamisetaWord);
