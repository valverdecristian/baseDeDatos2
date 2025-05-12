result = db.movimientos.aggregate([
    {$match:{
        libro_id:"1",
        tipo:"P"}
    },
    {$lookup:{
        from:"precios_alquiler",
        localField:"libro_id",
        foreignField:"libro_id",
        as:"precios"}}
    ]);