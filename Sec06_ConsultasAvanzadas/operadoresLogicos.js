// operadores logicos
// $and, $or, $not, $nor

// Buscar productos con precio mayor a 100 y stock mayor a 10
db.productos.find({
  $and: [
    { precio: { $gt: 100 } },
    { stock: { $gt: 10 } }
  ]
});


// Buscar usuarios que vivan en "CABA" o tengan más de 30 años
db.usuarios.find({
  $or: [
    { ciudad: "CABA" },
    { edad: { $gt: 30 } }
  ]
});


// Buscar productos que NO tengan precio mayor o igual a 100
db.productos.find({
  precio: { $not: { $gte: 100 } }
});


// Buscar usuarios que NO sean administradores ni estén activos
db.usuarios.find({
  $nor: [
    { admin: true },
    { activo: true }
  ]
});