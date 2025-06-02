// operadores de elementos
// $exists, $type

// Buscar documentos que tengan el campo "telefono"
db.usuarios.find({
  telefono: { $exists: true }
});


// Buscar productos donde "precio" sea de tipo número decimal
db.productos.find({
  precio: { $type: "double" }
});
