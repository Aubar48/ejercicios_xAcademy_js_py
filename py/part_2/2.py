def elementos_comunes(arr1, arr2):
    return [elemento for elemento in arr1 if elemento in arr2]

# Ejemplo de uso 1:
array1 = ['rojo', 'azul', 'amarillo']
array2 = ['blanco', 'negro', 'rojo']
resultado1 = elementos_comunes(array1, array2)
print(resultado1)  # ['rojo']

# Ejemplo de uso 2:
array3 = [4, 3, True, 'manzana']
array4 = ['pera', 3, False, True, 3, True]
resultado2 = elementos_comunes(array3, array4)
print(resultado2)  # [3, True]
