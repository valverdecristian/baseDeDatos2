# MongoDB (Udemy) 💡📢

---

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

---

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

---

### 📍 Proyección ($project)

Permite elegir que campos mostrar u ocultar en los resultados de una consulta.
* 1: mostrar
* 0: ocultar
* por defecto, MongoDB siempre muestra el campo _id

* Ejemplo: Mostrar solo nombre y edad:
```javascript
db.usuarios.find({}, { nombre: 1, edad: 1, _id: 0 })
```

---

### [📍 Operadores](operadores.md)

---

### 📚 Agregación en MongoDB
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

---

### 📍 Backups

* Crear backup en una carpeta especifica

``` bash
mongodump --db nombre_db --out .
```

* Para restaurar
``` bash
mongorestore --db nombre_restaurado nombre_nueva_db
```

---

### 📍 Schema (Esquema) en MongoDB

Un **schema** es un conjunto de reglas que define la estructura de los documentos en una base de datos.

En MongoDB, el esquema **es flexible por naturaleza**, es decir, **no se requiere una estructura fija** para cada documento, a diferencia de bases de datos relacionales.

### 🧱 Tipos de esquema:

#### 🧩 Esquema Fijo (Rigid Schema)
- Todos los documentos siguen la misma estructura.
- Mayor integridad de datos.
- Consultas más rápidas y consistentes.
- Menor flexibilidad (cambios de estructura requieren migración de datos).
- Más común en bases de datos relacionales.

#### 🌀 Esquema Flexible (Flexible Schema)
- Los documentos **pueden tener distinta forma** dentro de la misma colección.
- Ideal para aplicaciones que evolucionan rápido.
- Fácil de adaptar a nuevas necesidades.
- Requiere validaciones manuales para mantener integridad.
- MongoDB utiliza este enfoque por defecto.

---

### ✅ Validación de esquema en MongoDB

Aunque MongoDB permite esquemas flexibles, también podés:
- **Definir validaciones** usando `validator` al crear colecciones.
- **Aplicar reglas de estructura**, tipos de datos y requerimientos mínimos por campo.

📋 Ejemplo de validación:
```js
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "edad"],
      properties: {
        nombre: { bsonType: "string" },
        edad: { bsonType: "int", minimum: 0 }
      }
    }
  }
})
```

### 📍 Tipos de Datos en MongoDB

MongoDB utiliza un formato llamado **BSON** (Binary JSON), que extiende JSON agregando tipos adicionales como fechas, enteros y binarios.

Conocer los tipos de datos es importante para:
- Validar esquemas.
- Hacer consultas más precisas.
- Optimizar el almacenamiento.

---

#### 📦 Tipos de datos más comunes:

| Tipo BSON      | Descripción                                 | Ejemplo                                |
|----------------|---------------------------------------------|----------------------------------------|
| `String`       | Cadenas de texto                            | `"nombre": "Juan"`                     |
| `NumberInt`    | Números enteros de 32 bits                  | `"edad": NumberInt(30)`                |
| `NumberLong`   | Números enteros de 64 bits                  | `"saldo": NumberLong(9000000000)`      |
| `Double`       | Números decimales                           | `"precio": 19.99`                      |
| `Boolean`      | Verdadero o falso                           | `"activo": true`                       |
| `Date`         | Fecha y hora                                | `"fecha": ISODate("2024-05-01T00:00:00Z")` |
| `Array`        | Lista ordenada de elementos                 | `"etiquetas": ["node", "mongo", "api"]` |
| `Object`       | Documento embebido                          | `"direccion": { "calle": "X", "cp": 1234 }` |
| `ObjectId`     | Identificador único generado automáticamente| `"_id": ObjectId("24caracteresHexadecimales")`               |
| `Null`         | Valor nulo                                  | `"telefono": null`                     |
| `Binary`       | Datos binarios                              | (usado en archivos, imágenes, etc.)    |

---

### 🧪 ¿Cómo consultar el tipo de un campo?

Usá el operador `$type`:

```js
db.usuarios.find({ edad: { $type: "int" } })
```

---

### 📍 Relaciones en MongoDB

MongoDB no utiliza claves foráneas como en bases de datos relacionales, pero **sí permite representar relaciones entre documentos**, ya sea mediante **referencias** o **documentos embebidos**.

---

### 🔗 Tipos de relaciones
MongoDB permite modelar tres tipos fundamentales de relaciones.

#### 🔸 1. Uno a Uno (1:1)
- Un documento está relacionado con exactamente uno de otra colección.
- Puede representarse **embebiendo**/**incrustado** el documento relacionado. Tambien por referencia, es decir teniendo los dos documentos separados y en uno de los documentos tener un campo que relacione al otro.
- 🧪 Ejemplo: un libro tiene un único autor:

```json
{
  titulo: "Rayuela",
  autor: {
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina"
  }
}
```

#### 🔸 2. Uno a Muchos (1:N) 
- Un documento se relaciona con varios documentos de otra coleccion.
- Puede representarse embebiendo un array de documentos o mediante referencias con ObjectId.
- 🧪 Ejemplo embebido: comentarios dentro de un libro:

```json
{
  titulo: "1984",
  comentarios: [
    { texto: "Excelente", calificacion: 5 },
    { texto: "Muy bueno", calificacion: 4 }
  ]
}
```


#### 🔸 3. Muchos a Muchos (N:M) 
- Varios documentos en una colección están relacionados con varios en otra.
- Se suele representar con referencias cruzadas o una colección intermedia.
- 🧪 Ejemplo: libros y géneros (un libro puede tener varios géneros y un género varios libros):

```json
{
  titulo: "El Hobbit",
  generos: ["Fantasía", "Aventura"]
}
```

### ⚖️ Ventajas y desventajas de las relaciones en MongoDB
✅ Ventajas
- Mejora la organización y legibilidad de los datos.
- Permite consultas eficientes cuando los datos relacionados se consultan juntos.
- Facilita el mantenimiento de la integridad si se usa embebido.
- Simplifica integración con sistemas heredados.
- Puede ayudar con requisitos de privacidad al separar datos sensibles.

❌ Desventajas
- Si no se diseña bien, puede aumentar la complejidad del modelo.
- Documentos grandes embebidos pueden afectar el rendimiento.
- En relaciones con muchos datos, los documentos embebidos se vuelven difíciles de mantener.
- Requiere planificación cuidadosa para decidir cuándo embeber o referenciar.
- MongoDB tiene limites en el tamaño de los documentos BSON, lo que puede limitar la cantidad de datos incrustados.

## SECCION 6 del curso (36)