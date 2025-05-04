# MongoDB (Udemy) ✅📍👉💡📢

## 📌 ¿Que significa NoSQL?

* El termino "NoSQL" significa "Not Only SQL".
* Representa un enfoque alternativo a las bases de datos tradicionales relacionales.

### 📍 Tipos de bases de datos NoSQL

* Documentales: ideales para datos semi-estructurados. (`mongoDB`).
* Columnares: exelentes para analisis de datos.
* Clave-valor: eficientes para operaciones de lectura/escritura rápidas.
* Graficas: diseñadas para datos relacionales y complejos.


### 📍 Ventajas de las bases de datos NoSQL

* Escalabilidad horizontal: permite manejar grandes volumenes de datos y trafico.
* Flexibilidad de esquema: no requieren un esquema fijo.
* Rendimiento: son ideales para aplicaciones de alto rendimiento.


### 📍 Casos de uso de las bases de datos NoSQL

* Aplicaciones web de alto trafico: escalabilidad esencial.
* Analisis de big data: flexibilidad en el manejo de datos no estructurados.
* Aplicaciones moviles: rendimiento y escalabilidad.

### 📍 ¿Que es MongoDB?
Es un sistema de gestión de bases de datos NoSQL de codigo abierto que almacena datos en formato BSON (Binary JSON) y utiliza un modelo de documentos.

### 📍 Controladores (drivers) en MongoDB
Son componentes de software que permiten a las aplicaciones interactuar con una base de datos MongoDB. <br>
Son esenciales para simplificar la comunicacion entre la aplicacion y la base de datos MongoDB. <br>
MongoDB ofrece controladores para una variedad de lenguajes populares. Ejemplo: Node.js, python, Java, C#, PHP. <br>
✅ En conclusión, los controladores facilitan la conexión, las operaciones CRUD y la gestión de datos en MongoDB. <br>


### 📍 Comandos

* `use`
    - Sirve para USAR base de datos existentes como para CREAR una nueva (aunque esta base de datos se va a crear de verdad cuando creemos colecciones dentro de nuestra base de datos).
    - ejemplo: use nueva_db
    - 📢 el mensaje `switched to nueva_db` significa que hemos accedido a esa db.
    - Las colecciones son los elementos (que estan dentro de nuestra db) que vamos a usar para organizar los datos dentro de nuestra db.

* `db.starts()`
    - Se usa en una base de datos existente y sirve para ver las caracteristicas principales que contiene la DB.

* `show dbs`
    - Este comando muestra las bases de datos que actualmente existen.


### 📍 Archivos JSON en MongoDB

* JSON (JavaScript Object Notation) se utiliza para representar datos estructurados.
* JSON utiliza una sintaxis basada en objetos, donde los datos se organizan en pares `clave-valor` y se agrupan en objetos y matrices. <br>

```json
{
    "nombre": "Cristian Valverde",
    "edad": 30,
    "ciudad": "Avellaneda",
    "hobbies": ["viajes", "videojuegos", "musica"]
}
```

<br>

**💡 Relacion con MongoDB** <br>

* MongoDB utiliza JSON para representar datos en forma de documentos.
* Los documentos de MongoDB son similares a los objetos JSON y consisten en pares clave-valor.
* Cada documento en una coleccion de MongoDB se almacena como objeto JSON/BSON.
* La flexibilidad de JSON hace que sea facil para MongoDB manejar datos semi-estructurados y cambiar el esquema segun sea necesario.

<br>

**💡 Estructuras BSON en MongoDB** <br>
BSON signfica "Binary JSON", es una extensión de JSON que agrega tipos de datos binarios y una representación binaria eficiente. <br>
BSON se almacena en forma binaria, lo que lo hace más eficiente en terminos de almacenamiento. <br>

✅ En resumen, MongoDB utiliza tanto JSON como BSON para representar y almacenar datos. JSON es legible por humanos y ampliamente compatible, mientras que BSON proporciona eficiencia en almacenamiento y procesamiento, ademas de administrar tipos de datos adicionales. Esta combinacion hace que MongoDB sea flexible y eficiente para administrar datos en una variedad de aplicaciones. <br>

### 📍 Operaciones CRUD

* `show collections`
    - 🔍 Sirve para listar las colecciones disponibles.

* `db.createCollection("mi_coleccion")`
    - Para crear una nueva coleccion. No es estrictamente necesario usarlo, con insertOne logro lo mismo.
    - deberia salir `{ok: 1}`.

* `db.mi_coleccion.insertOne({clave: valor, clave: valor})`
    - ➕ Para insertar un elemento a la coleccion.
    - la clave se escribe sin comillas.
    - 🔁 Puedo crear varios objetos con mismas clave:valor, pero estos tendran un `_id` diferente.

* `db.usuarios.insertMany([{clave:valor, ...},{otroObj...}])`
    - Inserta un array de objetos.

* `db.mi_coleccion.find()`
    - Para listar todos los documentos que tenemos en nuestra coleccion.

* `db.mi_coleccion.find({campo:valor})`
    - Devuelve solo los documentos donde el campo tenga el valor indicado.
    ```js
    // devuelve todos los documentos donde nombre sea "Cristian"
    db.usuarios.find({ nombre: "Cristian" })
    ```

* `db.mi_coleccion.findOne({campo:"valor"})`
    - Devuelve un solo elemento.

* Uso con operadores logicos: $gt, $lt, $in, $or
    ```js
    // Buscar usuarios mayores a 25 años
    db.usuarios.find({ edad: { $gt: 25 } })

    // Buscar usuarios que vivan en Avellaneda o Lanús
    db.usuarios.find({ ciudad: { $in: ["Avellaneda", "Lanús"] } })
    ```

* `db.mi_coleccion.updateOne({filtro},{$set:{campo:nuevo_valor}})`
    - Actualiza el primer elemento que contenga el valor indicado en el filtro.
    ```js
    db.usuarios.updateOne(
        {nombre:"Cristian"},
        {set: {edad: 38}}
    )
    ```

* `db.mi_coleccion.updateMany({filtro},{$set:{campo:nuevo_valor}})`

* `db.mi_coleccion.deleteOne({filtro})`
    - Elimina la primera coincidencia que encuentra en la coleccion.
    - Para eliminar todas las coincidencias uso el metodo `deleteMany({campo:valor})`

<br>

📢 RESUMEN:
```js
Create: insertOne({clave: valor})
Read: find()
Update: updateOne({filtro}, { $set: { campo: nuevo_valor} })
Delete: deleteOne({filtro})
```

### 🧠 Tips:
* No hace falta crear la colección antes con createCollection() si vas a insertar algo directamente, MongoDB la crea automáticamente al primer insertOne().


## SECCION 3 del curso (14)

### Agregación (BBDD2 UTN)

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

| Operador | Significado                      | Ejemplo                                                 |
| -------- | -------------------------------- | ------------------------------------------------------- |
| `$and`   | Todas las condiciones se cumplen | `{ $and: [{ edad: { $gt: 18 } }, { ciudad: "CABA" }] }` |
| `$or`    | Al menos una se cumple           | `{ $or: [{ stock: 0 }, { estado: "agotado" }] }`        |
| `$not`   | Niega una condición              | `{ precio: { $not: { $gte: 100 } } }`                   |
| `$nor`   | Ninguna se cumple                | `{ $nor: [{ admin: true }, { activo: false }] }`        |

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

| Operador  | Significado                 | Ejemplo                           |
| --------- | --------------------------- | --------------------------------- |
| `$exists` | Verifica si un campo existe | `{ telefono: { $exists: true } }` |
| `$type`   | Verifica el tipo de dato    | `{ edad: { $type: "int" } }`      |

| Operador     | Función                                                    | Ejemplo                                           |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------- |
| `$all`       | Todos los elementos deben coincidir                        | `{ tags: { $all: ["js", "mongo"] } }`             |
| `$size`      | Coincide con la cantidad de elementos                      | `{ autores: { $size: 2 } }`                       |
| `$elemMatch` | Coincide con al menos un elemento que cumpla una condición | `{ notas: { $elemMatch: { nota: { $gt: 7 } } } }` |
