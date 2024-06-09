let tacos = ['al pastor', 'carne asada', 'pollo', 'lengua', 'cabeza'];

console.log(tacos);

tacos.push('beef');
console.log(tacos);

tacos.splice(2, 1);
console.log(tacos);

const tacosList = tacos.join(', ')
console.log(tacosList);