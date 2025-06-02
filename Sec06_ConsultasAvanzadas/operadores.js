// insetar 5 elementos en la coleccion productos con los campos: nombre, precio y existencia
db.productos.insertMany([
  { nombre: "Laptop", precio: 1200, existencia: 10 },
  { nombre: "Smartphone", precio: 800, existencia: 20 },
  { nombre: "Tablet", precio: 300, existencia: 15 },
  { nombre: "Monitor", precio: 400, existencia: 5 },
  { nombre: "Teclado", precio: 50, existencia: 50 }
]);


// buscar precio que sea igual a 900
db.productos.find({
  precio: { $eq: 900 }
});


// obtener docuementos que tengan existencia mayor a 10 y precio menor a 500 usando el operador $and
db.productos.find({
  $and: [
    { existencia: { $gt: 10 } },
    { precio: { $lt: 500 } }
  ]
});


// evaluar si el campo consumible existe
db.productos.find({
  consumible: { $exists: true }
});

// evaluar que el campo precio sea de tipo entero
db.productos.find({
  precio: { $type: "int" }
});


// buscar productos que tengan el campo "nombre" y que su tipo sea cadena de texto
db.productos.find({
  nombre: { $exists: true, $type: "string" }
});

// buscar precios que sean mayores a 500 y ordnar los resultados de forma descendente
db.productos.find({
  precio: { $gt: 500 }
}).sort({ precio: -1 });