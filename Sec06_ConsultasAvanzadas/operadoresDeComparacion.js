// operadores de comparacion
// $eq, $ne, $gt, $gte, $lt, $lte

// Buscar usuarios con edad igual a 30
db.usuarios.find({
  edad: { $eq: 30 }
});


// Buscar productos cuyo estado no sea "inactivo"
db.productos.find({
  estado: { $ne: "inactivo" }
});


// Buscar productos con precio mayor a 500
db.productos.find({
  precio: { $gt: 500 }
});


// Buscar usuarios mayores o iguales a 18 años
db.usuarios.find({
  edad: { $gte: 18 }
});


// Buscar productos con stock menor a 5 unidades
db.productos.find({
  stock: { $lt: 5 }
});


// Buscar empleados con hasta 10 años de antigüedad
db.empleados.find({
  antiguedad: { $lte: 10 }
});
