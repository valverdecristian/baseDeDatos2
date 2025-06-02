// operadores de arreglo
// $all, $elemMatch, $size

// Buscar documentos donde el array "tags" contenga "js" y "mongo"
db.articulos.find({
  tags: { $all: ["js", "mongo"] }
});


// Buscar productos que tengan al menos una valoración con puntuación mayor a 4 y comentario "excelente"
db.productos.find({
  valoraciones: {
    $elemMatch: {
      puntuacion: { $gt: 4 },
      comentario: "excelente"
    }
  }
});


// Buscar usuarios que tengan exactamente 3 hobbies
db.usuarios.find({
  hobbies: { $size: 3 }
});

