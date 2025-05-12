### 📍 Comandos

* `use`
    - Sirve para USAR base de datos existentes como para CREAR una nueva (aunque esta base de datos se va a crear de verdad cuando creemos colecciones dentro de nuestra base de datos).
    - ejemplo: `use nueva_db` ; en javaScript `use(nueva_db)`
    - 📢 el mensaje `switched to nueva_db` significa que hemos accedido a esa db.
    - Las colecciones son los elementos (que estan dentro de nuestra db) que vamos a usar para organizar los datos dentro de nuestra db.

* `db.starts()`
    - Se usa en una base de datos existente y sirve para ver las caracteristicas principales que contiene la DB.

* `show dbs`
    - Este comando muestra las bases de datos que actualmente existen.

* `cls`
    - borra el contenido de la consola de MongoDB

* campo obligatorio `_id`
    - Si no definimos dicho campo, se carga un valor unico de forma automatica.
    - Si intentamos agregar un documento con un `_id` repetido, no sera cargado a la base.

### 📍 Operaciones CRUD

* `show collections`
    - 🔍 Sirve para listar las colecciones disponibles.

* `db.createCollection("mi_coleccion")`
    - Para crear una nueva coleccion. No es estrictamente necesario usarlo, con insertOne logro lo mismo.
    - deberia salir `{ok: 1}`.


* `db.mi_coleccion.insertOne({clave: valor, clave: valor})`
    - ➕ Para insertar un elemento.
    - la clave se escribe sin comillas.
    - 🔁 Puedo crear varios objetos con mismas clave:valor, pero estos tendran un `_id` diferente.

* `db.usuarios.insertMany([{clave:valor, ...},{otroDocumento...}])`
    - Inserta una lista de documentos.
    - si hay algun error en algun lugar no se inserta ningun documento.


* `db.mi_coleccion.find()`
    - Para listar todos los documentos que tenemos en nuestra coleccion.

* `db.mi_coleccion.find(FILTRO)`
    - Devuelve solo los documentos donde el campo tenga el valor exactamente indicado.
    ```js
    // devuelve todos los documentos donde nombre sea "Cristian"
    db.usuarios.find({ nombre: "Cristian" })
    ```

* Uso con operadores logicos: $gt, $lt, $in, $or
    ```js
    // Buscar usuarios mayores a 25 años
    db.usuarios.find({ edad: { $gt: 25 } })
    // Buscar usuarios mayores o igual a 25 y menor o igual que 35
    db.usuarios.find({ edad: { $gte:25, $lte:35 }})

    // Buscar usuarios que vivan en Avellaneda o Lanús
    db.usuarios.find({ ciudad: { $in: ["Avellaneda", "Lanús"] } })
    ```

* db.mi_coleccion.find(filtro, proyecciones)
    - La proyeccion me sirve para poder indicar que atributos de cada elemento deseo obtener.
    - 0 para no mostrar el campo y 1 para mostrarlo

```js
db.usuarios.find({}).forEach(function(usuario){
    print(usuario.nombre)
})
```
    - db.usuarios.find({}).limit(cantidad)
    - db.usuarios.find({}).skip(cantDocNoObtenido).limit(proxElementosQueMuestra)
    - db.usuarios.find({}).sort({edad:-1/1}) // asc/desc
    - db.usuarios.find({},{_id:0, nombre:1, correo:1})
    - proyeccion anidada: ({}, {_id:0, "libro.titulo":1 })


* `db.mi_coleccion.findOne({campo:"valor"})`
    - Devuelve un solo elemento.


* `db.mi_coleccion.updateOne({filtro},{$set:{campo:nuevo_valor}})`
    - Actualiza el primer elemento que contenga el valor indicado en el filtro.
    - Para actualizar un elemento especifico de un array `{filtro},{$set:{campo.0:nuevo_valor_indice_cero}}`
    ```js
    db.usuarios.updateOne(
        {nombre:"Cristian"},
        {set: {edad: 38}}
    )
    ```


* `db.mi_coleccion.updateMany({filtro},{$set:{campo:nuevo_valor}})`
    - Si el documento no existe, lo inserto con `upsert:true` (que va como 3er parametro)


* `db.mi_coleccion.replaceOne(filtro, documento)`
    - Reemplaza totalmente un documento. En la parte de documento debo colocar todos los campos que necesitara mi nuevo docuemnto.


* `db.mi_coleccion.update(filtro, actualizacion, opciones)`
    - La parte de filtro y actualizacion es lo mismo que el updateOne
    - en la parte de opciones puedo agregar `{multi: true}` que actualizara varios registros.
    - Aparecera un warning porque esta obsoleto y para eso se usa updateMany


* `db.mi_coleccion.deleteOne({filtro})`
    - Elimina la primera coincidencia que encuentra en la coleccion.
    - Para eliminar todos los documentos `deleteMany({})` (se pasa un objeto vacio)
    - La ejecucion del metodo deleteOne y deleteMany informa la cantidad de docs eliminados.


* `db.mi_coleccion.drop()`
    - Eliminar los documentos de una coleccion y la coleccion propiamente dicha.


* `db.dropDatabase()`
    - Elimina una base de datos de forma completa

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