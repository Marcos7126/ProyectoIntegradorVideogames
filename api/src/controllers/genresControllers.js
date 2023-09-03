const { genre }= require ("../db");

const getGenres= async ()=>{
    const getAllGenres= await genre.findAll();
}

module.exports= {
    getGenres
}