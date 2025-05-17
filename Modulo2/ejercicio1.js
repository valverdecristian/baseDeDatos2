// Ejercicio 1
// Diseñar un modelo de datos que permita gestionar los movimientos de una biblioteca:
// ABM de usuarios
// ABM de libros
// Prestamos y devoluciones de libros
// Nota: los libros pueden tener mas de un genero y pueden existir varios ejemplares por cada uno.
// Insertar 5 usuarios y 20 libros (con 1 a 4 ejemplares por libro).

// colecciones:
// usuarios: { _id, nombre, apellido }
// libros: { _id, titulo, autor, anio_publicacion, genero, ejemplares }
// alternativas para la parte de prestamos y devoluciones:
// movimientos OP1: { _id, usuario_id, libro_id, fecha_devolucion, fecha_prestamo}
// movimientos PO2: { _id, usuario_id, libro_id, tipo: I|E, fecha}

db.libros.insertMany([
  {
    libro: { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    year: 1967,
    type: "Realismo mágico"
  },
  {
    libro: { titulo: "1984", autor: "George Orwell" },
    year: 1949,
    type: "Distopía"
  },
  {
    libro: { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
    year: 1943,
    type: "Fábula"
  },
  {
    libro: { titulo: "Fahrenheit 451", autor: "Ray Bradbury" },
    year: 1953,
    type: "Ciencia ficción"
  },
  {
    libro: { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    year: 1605,
    type: "Aventura"
  },
  {
    libro: { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    year: 1813,
    type: "Romance"
  },
  {
    libro: { titulo: "Matar a un ruiseñor", autor: "Harper Lee" },
    year: 1960,
    type: "Drama"
  },
  {
    libro: { titulo: "La Odisea", autor: "Homero" },
    year: -800,
    type: "Épico"
  },
  {
    libro: { titulo: "El Hobbit", autor: "J.R.R. Tolkien" },
    year: 1937,
    type: "Fantasía"
  },
  {
    libro: { titulo: "It", autor: "Stephen King" },
    year: 1986,
    type: "Terror"
  },
  {
    libro: { titulo: "Frankenstein", autor: "Mary Shelley" },
    year: 1818,
    type: "Terror"
  },
  {
    libro: { titulo: "Drácula", autor: "Bram Stoker" },
    year: 1897,
    type: "Gótico"
  },
  {
    libro: { titulo: "El resplandor", autor: "Stephen King" },
    year: 1977,
    type: "Terror psicológico"
  },
  {
    libro: { titulo: "Rayuela", autor: "Julio Cortázar" },
    year: 1963,
    type: "Ficción experimental"
  },
  {
    libro: { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" },
    year: 2001,
    type: "Misterio"
  },
  {
    libro: { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
    year: 1997,
    type: "Fantasía"
  },
  {
    libro: { titulo: "Los juegos del hambre", autor: "Suzanne Collins" },
    year: 2008,
    type: "Ciencia ficción"
  },
  {
    libro: { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" },
    year: 1981,
    type: "Ficción"
  },
  {
    libro: { titulo: "El alquimista", autor: "Paulo Coelho" },
    year: 1988,
    type: "Filosofía"
  },
  {
    libro: { titulo: "La ladrona de libros", autor: "Markus Zusak" },
    year: 2005,
    type: "Histórico"
  }
])


// insertar 5 usuarios con el campo _id
db.usuarios.insertMany([
  { _id: 1, nombre: "Juan", apellido: "Pérez" },
  { _id: 2, nombre: "Ana", apellido: "Gómez" },
  { _id: 3, nombre: "Luis", apellido: "Martínez" },
  { _id: 4, nombre: "María", apellido: "López" },
  { _id: 5, nombre: "Pedro", apellido: "Sánchez" }
])

// crear la coleccion movimientos para prestamos y devoluciones que tenga los campos: _id, usuario_id, libro_id, tipo (I|E), fecha
db.movimientos.insertMany([
  { _id: 1, usuario_id: 1, libro_id: 1, tipo: "E", fecha: new Date("2023-01-01") },
  { _id: 2, usuario_id: 2, libro_id: 2, tipo: "E", fecha: new Date("2023-02-01") },
  { _id: 3, usuario_id: 3, libro_id: 3, tipo: "E", fecha: new Date("2023-03-01") },
  { _id: 4, usuario_id: 4, libro_id: 4, tipo: "E", fecha: new Date("2023-04-01") },
  { _id: 5, usuario_id: 5, libro_id: 5, tipo: "E", fecha: new Date("2023-05-01") }
])


// regex

db.libros.find({ "libro.titulo": { $regex: /Cien años de soledad/i } })

// buscar el caracter "u" entre los campos: titulo, autor y genero
db.libros.find({
  $or: [
    { "libro.titulo": { $regex: /u/i } },
    { "libro.autor": { $regex: /u/i } }
  ]
})

// Crear un indice de texto para los campos titulo, autor y comentarios
db.libros.createIndex({ "libro.titulo": "text", "libro.autor": "text", "libro.comentarios": "text" })

// buscar los lobros que empiecen con "Los"
db.libros.find({ "libro.titulo": { $regex: /^Los/ } })

// buscar los libros cuyo nombre de autor contenga "Gabriel" con $text
db.libros.find({ $text: { $search: "Gabriel" } })

// 10: Insertar entre 3 y 10 comentarios por libro, de manera aleatoria
// Lista de posibles frases aleatorias
const frases = [
  "Excelente libro",
  "Me atrapó desde el principio",
  "Recomendado",
  "Lo leí en un día",
  "Muy profundo",
  "Ideal para estudiantes",
  "No me gustó tanto",
  "Clásico imprescindible",
  "Perfecto para regalar",
  "Un poco aburrido al inicio"
];

// Recorro todos los libros
db.libros.find().forEach(libro => {
  const comentarios = [];
  const cantidad = Math.floor(Math.random() * 8) + 3; // Entre 3 y 10

  for (let i = 0; i < cantidad; i++) {
    const comentario = frases[Math.floor(Math.random() * frases.length)];
    comentarios.push(comentario);
  }

  // Actualizo el documento agregando el campo "comentarios"
  db.libros.updateOne(
    { _id: libro._id },
    { $set: { comentarios: comentarios } }
  );
});

print("✅ Comentarios agregados exitosamente a cada libro.");

// listar el promedio de calificaciones por libro
db.libros.aggregate([
  {
    $unwind: "$comentarios"
  },
  {
    $group: {
      _id: "$libro.titulo",
      promedio_calificacion: { $avg: "$comentarios.calificacion" }
    }
  }
])


// listar el promedio de calificaciones
db.libros.aggregate([
  {
    $unwind: "$comentarios"
  },
  {
    $group: {
      _id: "$libro.titulo",
      promedio_calificacion: { $avg: "$comentarios.calificacion" }
    }
  }
])


// listar la cantidad de comentarios por libro
db.libros.aggregate([
  {
    $unwind: "$comentarios"
  },
  {
    $group: {
      _id: "$libro.titulo",
      cantidad_comentarios: { $sum: 1 }
    }
  }
])

// otra forma de resolver de resolver el punto de listar la cantidad de comentarios por libro
db.libros.aggregate([{$match:{comentarios:{$exists:true}}},{$project:{titulo:"$libro.titulo",cantidad_comentarios:{$size:"$comentarios"}}}])

// en caso de que algun libro no tenga comentarios, que me devuelva 0
// NO FUNCIONA
db.libros.aggregate([
  {
    $lookup: {
      from: "comentarios",
      localField: "_id",
      foreignField: "libro_id",
      as: "comentarios"
    }
  },
  {
    $project: {
      titulo: "$libro.titulo",
      cantidad_comentarios: { $size: { $ifNull: ["$comentarios", []] } }
    }
  }
])


// agregar un libro que no tenga comentarios
db.libros.insertOne({
  libro: { titulo: "El arte de la guerra", autor: "Sun Tzu" },
  year: 500,
  type: "Estrategia",
  comentarios: []
})


// actualizar el campo comentarios donde tenga un objeto con "texto" y "calificacion", calificacion entre 1 y 5 de forma aleatoria
db.libros.find().forEach(libro => {
  const comentarios = [];
  const cantidad = Math.floor(Math.random() * 8) + 3; // Entre 3 y 10

  for (let i = 0; i < cantidad; i++) {
    const comentario = {
      texto: frases[Math.floor(Math.random() * frases.length)],
      calificacion: Math.floor(Math.random() * 5) + 1 // Entre 1 y 5
    };
    comentarios.push(comentario);
  }

  // Actualizo el documento agregando el campo "comentarios"
  db.libros.updateOne(
    { _id: libro._id },
    { $set: { comentarios: comentarios } }
  );
});

// con la nueva actualizacion del campo comentarios, listar el promedio de calificaciones por libro
db.libros.aggregate([
  {
    $unwind: "$comentarios"
  },
  {
    $group: {
      _id: "$libro.titulo",
      promedio_calificacion: { $avg: "$comentarios.calificacion" }
    }
  }
])