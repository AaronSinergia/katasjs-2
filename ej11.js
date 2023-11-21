// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  let totalAverage = 0;

  for (const valor of array) {
    if (typeof valor === 'number') {
      totalAverage += valor;
    } else if (typeof isNaN(valor)) {
      totalAverage += valor.length;
    }
  }

  return totalAverage;
}

console.log(averageWord(mixedElements));
