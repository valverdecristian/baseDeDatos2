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
db.createCollection("productos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Nombre", "Cantidad", "Precio"],
      properties: {
        Nombre: {
          bsonType: "string",
          description: "Es una cadena de caracteres"
        },
        Cantidad: {
          bsonType: "int",
          minimum: 0,
          description: "Debe ser un entero"
        },
        Precio: {
          bsonType: "double",
          description: "Es un número real"
        }
      }
    }
  }
})

// relaciones entre nuestros distintos documentos