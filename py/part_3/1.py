carrito = {
    'precioTotal': 0,
    'productos': [],
}

productos_del_super = [
    {'nombre': "Queso", 'precio': 10, 'categoria': 'lacteos'},
    {'nombre': "Gaseosa", 'precio': 5, 'categoria': 'bebidas'},
    {'nombre': "Cerveza", 'precio': 20, 'categoria': 'bebidas'},
    {'nombre': "Arroz", 'precio': 7, 'categoria': 'alimentos'},
    {'nombre': "Fideos", 'precio': 5, 'categoria': 'alimentos'},
    {'nombre': "Lavandina", 'precio': 9, 'categoria': 'limpieza'},
    {'nombre': "Shampoo", 'precio': 3, 'categoria': 'higiene'},
    {'nombre': "Jabon", 'precio': 4, 'categoria': 'higiene'},
]


def agregar_producto(nombre, unidades):
    producto_super = next(
        (producto for producto in productos_del_super if producto['nombre'] == nombre), None)

    if not producto_super:
        print("Error: El producto no existe en el supermercado.")
        return

    producto_carrito = next(
        (producto for producto in carrito['productos'] if producto['nombre'] == nombre), None)

    if producto_carrito:
        producto_carrito['unidades'] += unidades
    else:
        carrito['productos'].append({
            'nombre': producto_super['nombre'],
            'precio': producto_super['precio'],
            'unidades': unidades,
            'categoria': producto_super['categoria']
        })

    carrito['precioTotal'] += producto_super['precio'] * unidades


# Ejemplo de uso:
agregar_producto('Cerveza', 2)
print(carrito)

agregar_producto('Cerveza', 1)
print(carrito)


def obtener_categorias():
    categorias = [producto['categoria'] for producto in carrito['productos']]
    return list(set(categorias))


# Ejemplo de uso:
categorias_unicas = obtener_categorias()
print(categorias_unicas)


def obtener_categorias():
    categorias = [producto['categoria'] for producto in carrito['productos']]
    return list(set(categorias))


# Ejemplo de uso:
categorias_unicas = obtener_categorias()
print(categorias_unicas)
