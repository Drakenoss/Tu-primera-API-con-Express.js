
# Tu-primera-API-con-Express.js
1. Inicializar el proyecto
Crea una carpeta para tu proyecto, entra en ella y ejecuta:

npm init -y
Instala Express:

npm install express
2. Configuración básica de Express
Crea un archivo index.js.

Configura un servidor básico con Express que escuche en el puerto 3000.

Debe mostrar un mensaje en consola cuando el servidor esté funcionando.

3. Crear rutas
Crea las siguientes rutas en tu aplicación:

GET / → Devuelve un mensaje de bienvenida en formato JSON.

GET /items → Devuelve la lista de elementos almacenados en memoria.

GET /items/:id → Devuelve un elemento específico según el parámetro id.

POST /items → Permite agregar un nuevo elemento enviando datos en el body.

4. Crear controladores
Crea una carpeta controllers/.

Dentro, crea un archivo itemsController.js.

Allí maneja la lógica de cada ruta utilizando un arreglo en memoria, por ejemplo:

let items = [ { id: 1, name: "Item 1" }, { id: 2, name: "Item 2" } ];
Cada función del controlador debe:

Manejar la petición recibida.

Devolver una respuesta adecuada en JSON.

5. Recibir datos por body y params
Usa req.params para acceder al id en la ruta /items/:id.

Usa req.body para recibir datos cuando crees un nuevo elemento con POST /items.

Recuerda habilitar el middleware express.json() en tu configuración para leer el body.

6. Resultado esperado
Cuando ejecutes tu servidor y pruebes las rutas:

GET / debe mostrar un JSON con un mensaje de bienvenida.

GET /items debe mostrar un arreglo de objetos.

GET /items/1 debe mostrar el objeto con id = 1.

POST /items debe permitir enviar un nuevo item y agregarlo a la lista en memoria.
