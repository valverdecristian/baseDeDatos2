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

| Operador    | Función                        | Ejemplo                                       |
| ----------- | ------------------------------ | --------------------------------------------- |
| `$set`      | Establece un nuevo valor       | `{ $set: { nombre: "Juan" } }`                |
| `$unset`    | Elimina un campo               | `{ $unset: { direccion: "" } }`               |
| `$inc`      | Incrementa numéricamente       | `{ $inc: { visitas: 1 } }`                    |
| `$mul`      | Multiplica el valor            | `{ $mul: { precio: 1.1 } }`                   |
| `$rename`   | Cambia el nombre de un campo   | `{ $rename: { nombreViejo: "nombreNuevo" } }` |
| `$push`     | Agrega un elemento a un array  | `{ $push: { generos: "terror" } }`            |
| `$pull`     | Quita un elemento de un array  | `{ $pull: { generos: "drama" } }`             |
| `$addToSet` | Agrega a un array si no existe | `{ $addToSet: { generos: "aventura" } }`      |

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
