const { Genre }= require ("../db");
const axios=require ("axios")

const getAllGenres= async ()=>{
    const AllGenres= await Genre.findAll();
    return AllGenres
}

module.exports= {
    getAllGenres
}