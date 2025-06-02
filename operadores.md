### 📍 Operadores de comparacion

| Operador | Significado                 | Ejemplo                                         |
| -------- | --------------------------- | ----------------------------------------------- |
| `$eq`    | Igual a                     | `{ edad: { $eq: 18 } }`                         |
| `$ne`    | Distinto de                 | `{ estado: { $ne: "activo" } }`                 |
| `$gt`    | Mayor que                   | `{ precio: { $gt: 100 } }`                      |
| `$gte`   | Mayor o igual que           | `{ edad: { $gte: 18 } }`                        |
| `$lt`    | Menor que                   | `{ edad: { $lt: 60 } }`                         |
| `$lte`   | Menor o igual que           | `{ stock: { $lte: 10 } }`                       |
| `$in`    | Valor dentro de un array    | `{ genero: { $in: ["ficción", "historia"] } }`  |
| `$nin`   | Valor NO dentro de un array | `{ estado: { $nin: ["borrado", "inactivo"] } }` |

### 📍 Operadores logicos

| Operador | Significado                      | Ejemplo                                                 |
| -------- | -------------------------------- | ------------------------------------------------------- |
| `$and`   | Todas las condiciones se cumplen | `{ $and: [{ edad: { $gt: 18 } }, { ciudad: "CABA" }] }` |
| `$or`    | Al menos una se cumple           | `{ $or: [{ stock: 0 }, { estado: "agotado" }] }`        |
| `$not`   | Niega una condición              | `{ precio: { $not: { $gte: 100 } } }`                   |
| `$nor`   | Ninguna se cumple                | `{ $nor: [{ admin: true }, { activo: false }] }`        |

### 📍 Operadores de actualizacion

| Operador      | Función                        | Ejemplo                                       |
| ------------- | ------------------------------ | --------------------------------------------- |
| `$set`        | Establece un nuevo valor       | `{ $set: { nombre: "Juan" } }`                |
| `$unset`      | Elimina un campo               | `{ $unset: { direccion: "" } }`               |
| `$inc`        | Incrementa numéricamente       | `{ $inc: { visitas: 1 } }`                    |
| `$mul`        | Multiplica el valor            | `{ $mul: { precio: 1.1 } }`                   |
| `$rename`     | Cambia el nombre de un campo   | `{ $rename: { nombreViejo: "nombreNuevo" } }` |
| `$push`       | Agrega un elemento a un array  | `{ $push: { generos: "terror" } }`            |
| `$pull`       | Quita un elemento de un array  | `{ $pull: { generos: "drama" } }`             |
| `$addToSet`   | Agrega a un array si no existe | `{ $addToSet: { generos: "aventura" } }`      |
| `$currentDate`| Establece fecha y hora actual  | `{ $currentDate: { fechaModif: "true" } }`    |

### 📍 Operadores de elementos

| Operador  | Significado                 | Ejemplo                           |
| --------- | --------------------------- | --------------------------------- |
| `$exists` | Verifica si un campo existe | `{ telefono: { $exists: true } }` |
| `$type`   | Verifica el tipo de dato    | `{ edad: { $type: "int" } }`      |

### 📍 Operadores de arrays

| Operador     | Función                                                    | Ejemplo                                           |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------- |
| `$all`       | Todos los elementos deben coincidir                        | `{ tags: { $all: ["js", "mongo"] } }`             |
| `$size`      | Coincide con la cantidad de elementos                      | `{ autores: { $size: 2 } }`                       |
| `$elemMatch` | Coincide con al menos un elemento que cumpla una condición | `{ notas: { $elemMatch: { nota: { $gt: 7 } } } }` |
| `$push`              | Agrega un elemento al final del array                             | `{ $push: { items: "nuevo" } }`                                    |
| `$addToSet`          | Agrega un elemento **solo si no existe** en el array              | `{ $addToSet: { tags: "mongo" } }`                                 |
| `$pull`              | Elimina todos los elementos que coincidan con una condición       | `{ $pull: { scores: { $lt: 5 } } }`                                |
| `$pop`               | Elimina el **primer (`-1`) o último (`1`)** elemento del array    | `{ $pop: { items: 1 } }`                                           |
| `$pullAll`           | Elimina **todos los valores específicos** del array               | `{ $pullAll: { tags: ["js", "mongo"] } }`                          |
| `$[]`                | Placeholder que representa **todos los elementos** del array      | `{ "items.$[]": { $set: { status: "activo" } } }`                  |
| `$[<identificador>]` | Placeholder para elementos que cumplen un filtro (`arrayFilters`) | `{ "items.$[item]": { $set: { estado: "ok" } } }` + `arrayFilters` |


### 📍 Operadores de Agregación (`aggregate`)

Los operadores de esta sección **solo se usan dentro de `aggregate()`**, formando parte de la tubería (`pipeline`).

| Operador        | Función                                                      | Ejemplo básico |
|-----------------|--------------------------------------------------------------|----------------|
| `$match`        | Filtra documentos (como `find`, pero dentro de `aggregate`)  | `{ $match: { tipo: "Drama" } }` |
| `$project`      | Muestra, oculta o transforma campos                          | `{ $project: { titulo: 1, _id: 0 } }` |
| `$group`        | Agrupa documentos y permite sumar, contar, etc.              | `{ $group: { _id: "$tipo", total: { $sum: 1 } } }` |
| `$sort`         | Ordena documentos                                             | `{ $sort: { year: -1 } }` |
| `$sortByCount`  | Agrupa por un campo y ordena por cantidad de ocurrencias     | `{ $sortByCount: "$tipo" }` |
| `$count`        | Devuelve la cantidad total de documentos resultantes         | `{ $count: "total" }` |
| `$limit`        | Limita la cantidad de documentos que devuelve                | `{ $limit: 5 }` |
| `$skip`         | Salta los primeros N documentos                              | `{ $skip: 10 }` |
| `$lookup`       | Une documentos de otra colección (similar a un JOIN)         | `{ $lookup: { from: "autores", localField: "autor_id", foreignField: "_id", as: "autor_info" } }` |
| `$unwind`       | Descompone arrays en varios documentos individuales          | `{ $unwind: "$generos" }` |
| `$addFields`    | Agrega nuevos campos al documento                            | `{ $addFields: { año_str: { $toString: "$year" } } }` |
| `$replaceRoot`  | Reemplaza el documento completo por un subdocumento          | `{ $replaceRoot: { newRoot: "$detalles" } }` |
| `$facet`        | Ejecuta múltiples pipelines paralelas                        | Usado para estadísticas múltiples |


### 📍 Operadores de evaluación

| Operador      | Función                                                                | Ejemplo                                                                                     |
| ------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `$regex`      | Coincide con una expresión regular (búsqueda por patrones)             | `{ nombre: { $regex: /^A/i } } // Nombres que empiezan con "A"`                             |
| `$expr`       | Permite usar expresiones de agregación en una consulta normal (`find`) | `{ $expr: { $gt: ["$edad", 30] } } // edad > 30`                                            |
| `$jsonSchema` | Valida la estructura de los documentos según un esquema JSON           | `{ $jsonSchema: { required: ["nombre"], properties: { nombre: { bsonType: "string" } } } }` |
