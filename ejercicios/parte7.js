result = db.movimientos.aggregate([
    {
      $match: {
        libro_id: "1",
        tipo: "P"
      }
    },
    {
      $lookup: {
        from: "precios_alquiler",
        localField: "libro_id",
        foreignField: "libro_id",
        as: "precios"
      }
    },
    {
      $project: {
        _id: 0,
        libro_id: 1,
        tipo: 1,
        segundo_precio: { $arrayElemAt: ["$precios.precio", 1] }
      }
    }
  ]);
  
  printjson(result.toArray());
  