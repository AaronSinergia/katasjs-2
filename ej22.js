// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true },
];

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

let itsSameMotherFuckingFruit = [];

for (const food of foodSchedule) {
  if (!food.isVegan) {
    const isNotSelected = fruits.filter(
      (fruit) => !itsSameMotherFuckingFruit.includes(fruit)
    );

    if (isNotSelected.length > 0) {
      const selectedFruit = isNotSelected[0];
      itsSameMotherFuckingFruit.push(selectedFruit);
      food.isVegan = selectedFruit;
    }
  }
}

console.log(itsSameMotherFuckingFruit);
console.log(foodSchedule);
