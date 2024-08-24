function elementosComunes(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento));
}

// Ejemplo de uso 1:
const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];
const resultado1 = elementosComunes(array1, array2);
console.log(resultado1); // ['rojo']

// Ejemplo de uso 2:
const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];
const resultado2 = elementosComunes(array3, array4);
console.log(resultado2); // [3, true]
