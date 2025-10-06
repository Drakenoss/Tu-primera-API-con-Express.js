let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

// Obtener todos los items
const getItems = (req, res) => {
  res.json(items);
};

// Obtener un item por id
const getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item no encontrado" });
  }
};

// Agregar un nuevo item
const addItem = (req, res) => {
  const newItem = req.body;
  if (!newItem.name) {
    return res.status(400).json({ message: "El nombre del item es requerido" });
  }
  newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
  items.push(newItem);
  res.status(201).json(newItem);
};

module.exports = {
  getItems,
  getItemById,
  addItem
};
