/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


const database = 'biblioteca2';
const collection = 'libros';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
db.libros.drop();
db.libros.insertMany([
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    generos: ["Realismo mágico", "Ficción"],
    ejemplares: 3
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    generos: ["Distopía", "Política", "Ciencia ficción"],
    ejemplares: 2
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    generos: ["Fábula", "Infantil"],
    ejemplares: 4
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    generos: ["Ficción", "Experimental"],
    ejemplares: 2
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    generos: ["Aventura", "Clásico", "Satírico"],
    ejemplares: 1
  }
])

db.libros.find({ejemplares: 3});

// db.dropDatabase()
