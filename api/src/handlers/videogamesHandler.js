const getVideogames= (req, res)=>{
    res.status(200).send("aca estan todos los videojuegos");
};

const getDetailVideogame= (req, res)=>{
    res.status(200).send("aca esta el detail de un videojuego")
};

const getNombreVideogame= (req, res)=>{
    res.status(200).send("aca esta el videojuego por nombre")
}

const CreateVideogame= (req, res)=>{
    res.status(200).send("videojuego creado")
};

module.exports= {
    getVideogames,
    getDetailVideogame,
    CreateVideogame,
    getNombreVideogame,
}