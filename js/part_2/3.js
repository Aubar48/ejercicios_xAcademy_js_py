let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
};

function agregarProducto(nombre, precio, unidades) {
    // Agregar el nuevo producto al array de productos
    carrito.productos.push({ nombre, precio, unidades });
    
    // Actualizar el total del carrito
    carrito.total += precio * unidades;
}

// Ejemplo de uso:
agregarProducto('pan', 1.5, 2);
console.log(carrito.total); // 13
console.log(carrito.productos);
// [
//     { nombre: 'leche', precio: 2, unidades: 5 },
//     { nombre: 'pan', precio: 1.5, unidades: 2 }
// ]
