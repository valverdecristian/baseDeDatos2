// como empezar
use biblioteca2
show collections
db.movimientos.insertOne()

// estructura de la coleccion movimientos
usuario_id
libro_id
tipo: "I" | "E" // ingreso o egreso
fecha:ISODate("2025-04-01T00:00:00Z")

// estructura de libros
_id:int
titulo:string
autor:string
anio_publicacion:int
genero:string[]
movimientos:Object[] // array de objetos con los movimientos de cada libro. Se agrego este campo con un $lookup. Tener cuidado con usar el mismo nombre de campo en la coleccion movimientos. Se puede usar un $lookup para obtener los movimientos de cada libro y agregarlos al array de movimientos.


// como calcular el stock actual? Tengo que tener el total de libros.

// insertar varios documentos a la vez
db.colleccion.insertMany([
  {_id: 1, nombre: "libro1", autor: "autor1", stock: 10 },
  {_id: 2, nombre: "libro2", autor: "autor2", stock: 5 },
])