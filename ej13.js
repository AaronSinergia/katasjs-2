// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
];

function finderName(array, valorName) {
  let sameName = [];
  let selectedName = valorName;

  for (const valor of array) {
    if (!sameName.includes(valor)) {
      sameName.push(valor);
    }
  }

  if (sameName.includes(selectedName)) {
    const positionNameInArrayIs = sameName.indexOf(selectedName);
    console.log(
      `Este array incluye el nombre: ${selectedName}, en la posición del Array: ${positionNameInArrayIs}`
    );
    return true;
  } else {
    console.log('Este array NO incluye tal nombre');
    return false;
  }
}

console.log(finderName(nameFinder, 'Jessica'));
