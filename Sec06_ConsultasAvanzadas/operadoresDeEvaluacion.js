// operadores de evaluacion
// $regex, $expr, $jsonSchema

// $regex: Buscar todos los jugadores cuyo nombre contiene la letra "a" (sin distinguir mayúsculas)
db.jugadores.find({
  nombre: { $regex: /a/i }
});

// $expr: Buscar jugadores que tengan más goles que asistencias
db.jugadores.find({
  $expr: { $gt: ["$goles", "$asistencias"] }
});

// $jsonShema: Buscar documentos que tengan un campo "nombre" de tipo string y obligatorio
db.jugadores.find({
  $jsonSchema: {
    bsonType: "object",
    required: ["nombre"],
    properties: {
      nombre: { bsonType: "string" }
    }
  }
});