const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON en el body
app.use(express.json());

// Importar controlador
const { getItems, getItemById, addItem } = require('./controllers/itemsController');

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi primera API con Express.js' });
});

// Rutas para items
app.get('/items', getItems);
app.get('/items/:id', getItemById);
app.post('/items', addItem);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
