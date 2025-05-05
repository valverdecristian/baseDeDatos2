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