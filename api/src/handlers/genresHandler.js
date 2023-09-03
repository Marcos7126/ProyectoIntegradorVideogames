const getGenres=(req, res)=>{
    res.status(200).send("aqui estan los generos existentes")
};

module.exports={
    getGenres,
}