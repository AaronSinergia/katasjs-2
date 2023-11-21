// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
];

let littleMovie = [];
let mediumMovie = [];
let largueMovie = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    littleMovie.push(movie.name);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    mediumMovie.push(movie.name);
  } else {
    largueMovie.push(movie.name);
  }
}

console.log(`Las películas que duran menos de todas són: ${littleMovie}`);
console.log(
  `Las películas que duran entre 100 y 200 minutos són: ${mediumMovie}`
);
console.log(`Las películas que duran más de 200 són: ${largueMovie}`);
