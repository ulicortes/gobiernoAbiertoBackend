### Base de datos
# Categorias
    -id
    -nombre
    -fecha
# Archivos
    -id
    -categoria
    -ubicacion
    -creacion

*Sujeto a cambios*


### Flujo
1. Se crea el pdf y se le pone un nombre caracteristico, Ese nombre va a la bbdd. 

2. 2. 1. El sistema se encarga de guardar todo:
    2. 1. 1. Admin carga el pdf en el portal.
    2. 1. 2. El sistema guarda el pdf en un sitio fisico y retorna el path.
    2. 1. 3. Al paso 3.

  2. 2. Admin guarda en pdf en una carpeta dentro del servidor y obtiene el path con funciones de windows:
    2. 2. 1. Admin pone el pdf en una carpeta asignada para los pdfs.
    2. 2. 2. Se copia el path.
    2. 2. 3. Adentro del portal en el formulario de creacion pone el path como parametro.
    2. 2. 4. Al paso 3.

3. Se crea un registro en la bbdd values(categoria, path_anterior, date.now())

4. Se retorna un mensaje informativo.
