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

### [📍 Comandos](comandos.md)

### 📍 Conexión a MongoDB desde PowerShell (mongosh)

* Abrir PowerShell
* Ejecutar el comando
```bash
mongosh
```
* Conectarse a una base especifica
```bash
use database
```

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


## SECCION 3 del curso (14)

### Agregación (BBDD2 UTN)

### [📍 Operadores](operadores.md)

### 📍 Proyeccion (Project)

Permite elegir que campos mostrar u ocultar en los resultados de una consulta.
* 1: mostrar
* 0: ocultar
* por defecto, MongoDB siempre muestra el campo _id

* Ejemplo: Mostrar solo nombre y edad:
```javascript
db.usuarios.find({}, { nombre: 1, edad: 1, _id: 0 })
```