# MongoDB (Udemy) ✅📍👉💡📢

## 📌 ¿Que significa NoSQL?

* El termino "NoSQL" significa "Not Only SQL".
* Representa un enfoque alternativo a las bases de datos tradicionales relacionales.

### 📍 Tipos de bases de datos NoSQL

* Documentales: ideales para datos semi-estructurados. (`mongoDB`).
* Columnares: exelentes para analisis de datos.
* Clave-valor: eficientes para operaciones de lectura/escritura rápidas.
* Grafos: diseñadas para datos relacionales y complejos.
* Series temporales: optimizadas para almacenar datos por fecha y hora (ej.: sensores IoT).
* Basadas en objetos: guardan objetos completos con relaciones entre sí.
* Índice externo: manejan datos que están almacenados fuera de la base.


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


### 📍 Conexión a MongoDB desde PowerShell (mongosh)

* Abrir PowerShell
* Ejecutar el comando

```bash
mongosh
```
* Conectarse a una base especifica
```bash
use nombre_de_la_base
```


### [📍 Comandos y Operaciones](comandosyoperaciones.md)

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


### 📍 Proyección ($project)

Permite elegir que campos mostrar u ocultar en los resultados de una consulta.
* 1: mostrar
* 0: ocultar
* por defecto, MongoDB siempre muestra el campo _id

* Ejemplo: Mostrar solo nombre y edad:
```javascript
db.usuarios.find({}, { nombre: 1, edad: 1, _id: 0 })
```

### [📍 Operadores](operadores.md)


## 📚 Agregación en MongoDB
La agregación permite realizar consultas más poderosas que find(), como filtros encadenados, agrupamientos, ordenamientos y proyecciones personalizadas.

- `db.libros.agregate([{$match:{campo:valor}}])`

- `db.libros.agregate([{$match:{campo:valor}}, {$sort:{orden1-1}}])`


### 📍 Tuberia de Agregacion (aggregation pipeline)

Utilizamos el metodo `aggregate` de la coleccion sobre la cual deseamos realizar las operaciones.
   
* `db.mi_coleccion.aggregate([{etapa},{etapa}]);`
    - Cada etapa representa una operacion a realizar
    - Cada etapa esta compuesta por un `operador de etapa` que representa una funcion.

### 📍 Etapas:

```js
Entrada → $match → $group → $sort → $project → Salida
```

- $match: filtra los docs con los que necesitamos trabajar.
- $group: realiza el trabajo de agregacion
    1) Le tengo que indicar que es lo que quiero agrupar (valor) y eso lo voy a poner en un campo que se llama _id:
- $sort: ordena los docs de forma asc o desc
- $project: permite mostrar solo ciertos campos, renombrarlos o calcular nuevos

### 🧪 Ejemplos prácticos

1. Filtrar y ordenar
```js
db.libros.aggregate([
  { $match: { tipo: "Fantasía" } },
  { $sort: { year: -1 } }
])
```

2. Filtrar, agrupar, contar y ordenar
```js
db.libros.aggregate([
  { $match: { year: { $gte: 2000 } } },
  { $group: { _id: "$type", cantidad: { $sum: 1 } } },
  { $sort: { cantidad: -1 } }
])
```

3. Usando $project: ocultar campo y renombrar o "desanidar" campos internos
```js
db.libros.aggregate([
  { $project: { _id: 0, titulo: "$libro.titulo", autor: "$libro.autor" } }
])
```

### 📍 Funcion MapReduce

MongoDB también tiene una función llamada `MapReduce`, usada para procesamientos más complejos.
Pero hoy en día, se recomienda usar `aggregate()`, ya que es más eficiente y legible.


## Backups

* Crear backup en una carpeta especifica

``` bash
mongodump --db nombre_db --out .
```

``` bash
mongorestore --db nombre_restaurado nombre_db
```

## SECCION 4 del curso (21)