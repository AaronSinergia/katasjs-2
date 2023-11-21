// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  let count = 0;
  for (const num of array) {
    count += num;
  }

  return count / array.length;
}

console.log(average(numbers));
