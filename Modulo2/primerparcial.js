// Dada la siguientes estructura de colecciones:

// Limpiar si existen
db.jugadores.drop();
db.partidos.drop();

// Insertar jugador
db.jugadores.insertOne({
  nombre: "Lionel Messi",
  posicion: "Delantero",
  equipo: "Paris Saint-Germain",
  nacionalidad: "Argentina",
  edad: 34,
  goles: 672,
  asistencias: 268
});

// Insertar 4 jugadores
db.jugadores.insertMany([
  {
    nombre: "Cristiano Ronaldo",
    posicion: "Delantero",
    equipo: "Manchester United",
    nacionalidad: "Portugal",
    edad: 36,
    goles: 674,
    asistencias: 229
  },
  {
    nombre: "Kylian Mbappé",
    posicion: "Delantero",
    equipo: "Paris Saint-Germain",
    nacionalidad: "Francia",
    edad: 24,
    goles: 180,
    asistencias: 95
  },
  {
    nombre: "Luka Modrić",
    posicion: "Centrocampista",
    equipo: "Real Madrid",
    nacionalidad: "Croacia",
    edad: 37,
    goles: 42,
    asistencias: 85
  },
  {
    nombre: "Virgil van Dijk",
    posicion: "Defensor",
    equipo: "Liverpool",
    nacionalidad: "Países Bajos",
    edad: 31,
    goles: 20,
    asistencias: 10
  }
]);

// insertar un jugador que teng un equipo que empiece con "p"
db.jugadores.insertOne({
  nombre: "Paulo Dybala",
  posicion: "Delantero",
  equipo: "polonia",
  nacionalidad: "Argentina",
  edad: 28,
  goles: 100,
  asistencias: 50
});


// Insertar partido
db.partidos.insertOne({
  _id: "1",
  local: "Paris Saint-Germain",
  visitante: "Manchester United",
  fecha: ISODate("2025-05-20"),
  resultado: {
    local: 2,
    visitante: 1
  },
  campeonato: "Champions League",
  pais: "Francia",
  eventos: [
    {
      jugador: "Lionel Messi",
      minuto: 45,
      tipo: "gol",
      asistencia: "Jordi"
    },
    {
      jugador: "Cristiano Ronaldo",
      minuto: 60,
      tipo: "gol",
      asistencia: null
    }
  ]
});

// Insertar un partido jugado en "Argentina"
db.partidos.insertOne({
  _id: "2",
  local: "Boca Juniors",
  visitante: "River Plate",
  fecha: ISODate("2025-06-15"),
  resultado: {
    local: 1,
    visitante: 1
  },
  campeonato: "Liga Argentina",
  pais: "Argentina",
  eventos: [
    {
      jugador: "Lionel Messi",
      minuto: 30,
      tipo: "gol",
      asistencia: null
    },
    {
      jugador: "Cristiano Ronaldo",
      minuto: 75,
      tipo: "gol",
      asistencia: null
    }
  ]
});


// responder las preguntas detalladas a continuación:

// 1) encontrar el promedio de la diferencia de goles por partido en la "champions league" (C)
db.partidos.aggregate([
  {
    $project: {
      diferencia_goles: { $subtract: ["$resultado.local", "$resultado.visitante"] },
      campeonato: 1
    }
  },
  { $match: { campeonato: "Champions League" } },
  {
    $group: {
      _id: null,
      promedio: { $avg: "$diferencia_goles" }
    }
  }
])

// 2) encontrar el equipo con menos goles marcados como visitante en todos los partidos
// REVISAR: HAY DOS EQUIPOS CON 1 GOL Y SOLO MUESTRA UNO
db.partidos.aggregate([
  { $group: { _id: "$visitante", total_goles: { $sum: "$resultado.visitante" } } },
  { $sort: { total_goles: 1 } },
  { $limit: 1 }
])

// 3) eliminar el jugador "Lionel Messi" de la colección de jugadores
db.jugadores.deleteOne({ nombre: "Lionel Messi" })

// 4) encontrar los jugadores que no tienen exactamente 34 años
db.jugadores.find({ edad: { $ne: 34 } })

// 5) encontrar la cantidad total de goles marcados en todos los partidos jugados en "francia"
// REVISAR: tengo Francia y no francia
db.partidos.aggregate([
  {
    $project: {
      total_goles: {
        $add: ["$resultado.local", "$resultado.visitante"]
      },
      pais: 1
    }
  },
  { $match: { pais: "francia" } },
  {
    $group: {
      _id: null,
      total_goles_francia: { $sum: "$total_goles" }
    }
  }
])

// 6) contar cuántos partidos se han jugado en cada país
db.partidos.aggregate([
  {
    $group: {
      _id: "$pais",
      total_partidos: { $sum: 1 }
    }
  }
])

// 7) encontrar la cantidad de partidos donde hubo al menos una asistencia
// REVISAR: NINGUNA

// A
db.partidos.aggregate([{ $match: { "eventos.tipo": "asistencia" } }, { $count: "partidos_con_asistencia" }])
// B
db.partidos.aggregate([
  { $unwind: "$eventos" },
  { $match: { "eventos.tipo": "asistencia" } },
  { $group: { _id: "$_id" } },
  { $count: "partidos_con_asistencia" }
])
// C
db.partidos.aggregate([{ $project: { has_asistencia: { $anyelementtrue: { $map: { input: "$eventos", as: "evento", in: { $eq: ["$$evento.tipo", "asistencia"] } } } } } }, { $match: { has_asistencia: true } }, { $count: "partidos_con_asistencia" }])
// D todas son correctas.

// 8) encontrar la fecha del último partido jugado en cualquier campeonato
//  A y B son correctas (B solo muestra la fecha)
db.partidos.aggregate([{ $group: { _id: null, ultima_fecha: { $max: "$fecha" } } }])

// 9) Si quisieras insertar un nuevo jugador {"nombre": "Kylian Mbappé", "equipo": "Paris Saint-Germain"} en la colección "jugadores", ¿qué instrucción usarías
// ningua era correcta, ya que en el insertOne coloco un array.


// Eliminar el campo "resultado" de todos los partidos en la "Champions League"
db.partidos.updateMany({"campeonato": "Champions League"}, {"$unset": {"resultado": 1}})

// 12) encontrar los jugadores cuyo equipo empieza con la letra "p"
db.jugadores.find({ equipo: { $regex: /^p/i } })

// 13) eliminar todos los partidos jugados en "francia"
db.partidos.deleteMany({ pais: "Francia" })

// 14) encontrar los jugadores con más de 600 goles
db.jugadores.find({ goles: { $gt: 600 } })

// encontrar los jugadores que no son de nacionalidad "argentina" // DUDA
db.jugadores.find({ nacionalidad: { $ne: "argentina" } })

// encontrar el jugador con la menor edad


// 1 valido
// 5 valido
// 7 MAL
// 8 valido