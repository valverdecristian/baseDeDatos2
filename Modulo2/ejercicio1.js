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

db.biblioteca.insertMany([
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