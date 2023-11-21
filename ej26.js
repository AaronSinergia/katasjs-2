// Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 },
];

const goodProducts = [];
const badProducts = [];

for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product.name);
  } else {
    badProducts.push(product.name);
  }
}

console.log(
  `Las ventas no han ido nada mal para esta serie de productos: ${goodProducts}`
);

console.log(
  `Vamos a despedirte porque no han ido nada bien las ventas de: ${badProducts}`
);
