// Seleccionar base de datos
use("biblioteca3")

// Limpiar si existen
db.usuarios.drop();
db.libros.drop();
db.movimientos.drop();
db.precios_alquiler.drop();

// Crear usuarios
db.usuarios.insertMany([
  { usuario_id: "U1", nombre: "Juan Pérez" },
  { usuario_id: "U2", nombre: "Ana Gómez" },
  { usuario_id: "U3", nombre: "Luis Torres" },
  { usuario_id: "U4", nombre: "María López" },
  { usuario_id: "U5", nombre: "Carlos Ruiz" }
]);

// Crear libros (20 libros con entre 1 y 4 ejemplares y 1-2 géneros)
const generos = ["Fantasía", "Drama", "Ciencia Ficción", "Terror", "Romance", "Aventura", "Histórico"];

// falta el campo: anio_publicacion.
for (let i = 1; i <= 20; i++) {
  db.libros.insertOne({
    libro_id: `L${i}`,
    titulo: `Libro ${i}`,
    autor: `Autor ${i}`,
    generos: [generos[i % generos.length], generos[(i+1) % generos.length]],
    ejemplares: Math.floor(Math.random() * 4) + 1 // de 1 a 4 ejemplares
  });
}

// Insertar precios de alquiler para algunos libros (2 por año)
db.precios_alquiler.insertMany([
  { libro_id: "L1", fecha: ISODate("2025-01-01T00:00:00Z"), precio: 1000 },
  { libro_id: "L1", fecha: ISODate("2025-07-01T00:00:00Z"), precio: 1200 },
  { libro_id: "L2", fecha: ISODate("2025-01-01T00:00:00Z"), precio: 1100 },
  { libro_id: "L2", fecha: ISODate("2025-07-01T00:00:00Z"), precio: 1300 }
]);

// Insertar algunos movimientos (préstamos y devoluciones)
db.movimientos.insertMany([
  { usuario_id: "U1", libro_id: "L1", fecha: ISODate("2025-01-15T00:00:00Z"), tipo: "P" },
  { usuario_id: "U1", libro_id: "L1", fecha: ISODate("2025-01-25T00:00:00Z"), tipo: "D" },
  { usuario_id: "U2", libro_id: "L2", fecha: ISODate("2025-02-01T00:00:00Z"), tipo: "P" }
]);

print("Script ejecutado correctamente ✅");
