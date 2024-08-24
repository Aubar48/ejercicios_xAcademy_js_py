let carrito = {
    precioTotal: 0,
    productos: [],
};

const productosDelSuper = [
    { nombre: "Queso", precio: 10, categoria: 'lacteos' },
    { nombre: "Gaseosa", precio: 5, categoria: 'bebidas' },
    { nombre: "Cerveza", precio: 20, categoria: 'bebidas' },
    { nombre: "Arroz", precio: 7, categoria: 'alimentos' },
    { nombre: "Fideos", precio: 5, categoria: 'alimentos' },
    { nombre: "Lavandina", precio: 9, categoria: 'limpieza' },
    { nombre: "Shampoo", precio: 3, categoria: 'higiene' },
    { nombre: "Jabon", precio: 4, categoria: 'higiene' },
];

function agregarProducto(nombre, unidades) {
    const productoSuper = productosDelSuper.find(producto => producto.nombre === nombre);
    
    if (!productoSuper) {
        console.log("Error: El producto no existe en el supermercado.");
        return;
    }
    
    const productoCarrito = carrito.productos.find(producto => producto.nombre === nombre);
    
    if (productoCarrito) {
        productoCarrito.unidades += unidades;
    } else {
        carrito.productos.push({
            nombre: productoSuper.nombre,
            precio: productoSuper.precio,
            unidades: unidades,
            categoria: productoSuper.categoria
        });
    }
    
    carrito.precioTotal += productoSuper.precio * unidades;
}

// Ejemplo de uso:
agregarProducto('Agua', 2);  // Error: El producto no existe en el supermercado.
agregarProducto('Cerveza', 2);
console.log(carrito);

agregarProducto('Cerveza', 1);
console.log(carrito);

function eliminarProducto(nombre) {
    const index = carrito.productos.findIndex(producto => producto.nombre === nombre);
    
    if (index === -1) {
        throw new Error("Error: El producto no existe en el carrito.");
    }
    
    const producto = carrito.productos[index];
    carrito.precioTotal -= producto.precio * producto.unidades;
    carrito.productos.splice(index, 1);
}

// Ejemplo de uso:
try {
    eliminarProducto('Agua');  // Error: El producto no existe en el carrito.
} catch (error) {
    console.log(error.message);
}

eliminarProducto('Cerveza');
console.log(carrito);

function obtenerCategorias() {
    const categorias = carrito.productos.map(producto => producto.categoria);
    return [...new Set(categorias)];
}

// Ejemplo de uso:
const categoriasUnicas = obtenerCategorias();
console.log(categoriasUnicas); // ['bebidas']
