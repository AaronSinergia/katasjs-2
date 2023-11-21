// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 },
];

let younger18 = [];
let over18 = [];

for (const user of users) {
  if (user.years <= 17) {
    younger18.push(user.name);
  } else {
    over18.push(user.name);
  }
}

console.log('Lista de usuarios menores de edad: ' + younger18);
console.log('Lista de usuarios MAYORES de edad: ' + over18);
