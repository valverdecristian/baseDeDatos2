// let result = db.libros.aggregate([
//     {$unwind:"$generos"},
//     {$group:{
//         "_id":"$generos",
//         total:{$sum:1}}}
//     ]);

// mostrar los primeros 3 libros con mas prestamos en el ultimo mes

let result = db.movimientos.aggregate([
    {$match:{
        "tipo":"P",
        $expr:{
            $and:[
                {$gt:[
                  "$fecha",
                  {$dateSubtract:{
                    startDate:new Date(),
                    unit:"month",
                    amount:1}}  
                ] 
                },
                {
                $lte:[
                    "$fecha",
                    new Date()  
                    ]
                }
            ]
}
    }
    }    ,
    {$group:{
        "_id":"$libro_id",
        total:{$sum:1}
    }},    
    {$sort:{total:-1}},
    {$limit:3}
]);

printjson(result.toArray());