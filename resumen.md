## Base de Datos NoSQL
* Es aquella que no usa el esquema tabulador de filas y columnas.

### 📍 Tipos de bases de datos NoSQL

* Documentales: ideales para datos semi-estructurados. (`mongoDB`).
* Columnares: exelentes para analisis de datos.
* Clave-valor: eficientes para operaciones de lectura/escritura rápidas.
* Grafos: diseñadas para datos relacionales y complejos.
* Series temporales: optimizadas para almacenar datos por fecha y hora (ej.: sensores IoT).
* Basadas en objetos: guardan objetos completos con relaciones entre sí.
* Índice externo: manejan datos que están almacenados fuera de la base.


## 📚 Agregación en MongoDB
La agregación permite realizar consultas más poderosas que find(), como filtros encadenados, agrupamientos, ordenamientos y proyecciones personalizadas.

### 📍 Tuberia de Agregacion (aggregation pipeline)

Utilizamos el metodo `aggregate` de la coleccion sobre la cual deseamos realizar las operaciones.

* `db.mi_coleccion.aggregate([{etapa},{etapa}]);`
    - Cada **etapa** representa una operacion a realizar
    - Cada etapa esta compuesta por un `operador de etapa` que representa una funcion.

### 📍 Etapas:
```js
Entrada → $match → $group → $sort → $project → Salida
```

- $match: filtra los docs con los que necesitamos trabajar.
- $count: obtener el numero de docs filtrados y el valor entre comillas es el nombre del campo que aparecera en el resultado final (alias) **ver ejemplo** 
- $group: realiza el trabajo de agregacion
    1) Le tengo que indicar que es lo que quiero agrupar (valor) y eso lo voy a poner en un campo que se llama _id:
- $sort: ordena los docs de forma asc o desc
- $project: permite mostrar solo ciertos campos, renombrarlos (alias) o calcular nuevos (0 y 1)
    - $concat: operador de string para formatear el resultado

```js
db.estudiantes.aggregate([
  { $match: { edad: { $lt: 20 } } },
  { $count: "Estudiantes menores a 20 años" }
])

// resultado
[
  { "Estudiantes menores a 20 años": 7 }
]

// sintaxis: project
{ $project: { campo_nuevo: "$campo_original", ... } }

```

### El Replica Set
* Conjunto de servidores, uno primario y varios secundarios.
* Si el servidor primario se cae o se baja para Backup, se activa el proceso Save Loader para seguir trabajando.
* protocolo Heartbeat: detecta si los Servidores estan activos.
* protocolo Oplog replication: mantiene una replica exacta de los datos.
* Limitaciones: RAM, CPU, Disk IO, Network (red)
* Escalar Verticalmente: se agregan los hardwares necesarios (limite: costos $$$)
* Escalar Horizontalmente (sharding): se agrega otro Replica Set.
* Componente Query Routing: comunicacion del driver con el puerto del proceso. Mongos se encarga de lanzar las querys a uno u otro Shard.
* Config Server: contiene los metadatos.
