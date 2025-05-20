// crear una coleccion de empleados con los siguientes campos: nombre, apellido, correo, edad, donde nombre y correo sean campos requeridos
db.createCollection("empleados")
db.empleados.insertMany([
    { _id:1 ,nombre: "Juan", apellido: "Pérez", correo: "juanperez@gmail.com", edad: 30 },
    { _id:2 ,nombre: "Ana", apellido: "Gómez", correo: "anagomez@gmail.com", edad: 25 },
    { _id:3 ,nombre: "Luis", apellido: "Martínez", correo: "luismartinez@gmail.com", edad: 35 },
    { _id:4 ,nombre: "María", apellido: "López", correo: "marialopez@gmail.com", edad: 28 },
    { _id:5 ,nombre: "Pedro", apellido: "Sánchez", correo: "pedrosanchez@gmail.com", edad: 40 }
])

// Validacion de la coleccion productos
// db.createCollection("productos", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["Nombre", "Cantidad", "Precio"],
//       properties: {
//         Nombre: {
//           bsonType: "string",
//           description: "Es una cadena de caracteres"
//         },
//         Cantidad: {
//           bsonType: "int",
//           minimum: 0,
//           description: "Debe ser un entero"
//         },
//         Precio: {
//           bsonType: "double",
//           description: "Es un número real"
//         }
//       }
//     }
//   }
// })

// crear 5 productos con los campos requeridos
db.productos.insertMany([
    {Nombre: "Laptop", Cantidad: 10, Precio: 800.50 },
    {Nombre: "Mouse", Cantidad: 50, Precio: 20.00 },
    {Nombre: "Teclado", Cantidad: 30, Precio: 35.00 },
    {Nombre: "Monitor", Cantidad: 15, Precio: 200.00 },
    {Nombre: "Impresora", Cantidad: 5, Precio: 150.00 }
])

// REDEFINIDO
// 1. Eliminar la colección si ya existe
db.productos.drop();

// 2. Crear la colección con validador
// db.createCollection("productos", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["Nombre", "Cantidad", "Precio"],
//       properties: {
//         Nombre: {
//           bsonType: "string",
//           description: "Debe ser una cadena de texto"
//         },
//         Cantidad: {
//           bsonType: "int",
//           minimum: 0,
//           description: "Debe ser un número entero mayor o igual a 0"
//         },
//         Precio: {
//           bsonType: "double",
//           minimum: 0,
//           description: "Debe ser un número decimal positivo"
//         }
//       }
//     }
//   }
// });

// 3. Insertar productos válidos
db.productos.insertMany([
  { Nombre: "Laptop", Cantidad: NumberInt(10), Precio: 800.50 },
  { Nombre: "Mouse", Cantidad: NumberInt(50), Precio: 20.00 },
  { Nombre: "Teclado", Cantidad: NumberInt(30), Precio: 35.00 },
  { Nombre: "Monitor", Cantidad: NumberInt(15), Precio: 200.00 },
  { Nombre: "Impresora", Cantidad: NumberInt(5), Precio: 150.00 }
]);