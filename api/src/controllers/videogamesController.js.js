const { videogame }= require ("../db");

const getAllGames= async()=> await videogame.findAll();

const getGamesById= async(id) =>{
    const gameFiltered= await videogame.findOne({where:{id}});

    if(gameFiltered) return gameFiltered;
    return {error:"notFoundError"};
};

const getGamesByName= async (name)=>{
    const gameFiltered= await videogame.findOne({where:{name}});

    if(gameFiltered) return gameFiltered;
    return {error:"notFoundError"};
};

const postGame= async (nombre, descripcion, plataformas, imagen, fechaDeLanzamiento, rating)=>{
    const newGame= await videogame.findOrCreate({where:{nombre, descripcion, plataformas, imagen, fechaDeLanzamiento, rating}})
    return newGame;
};


module.exports= {
    getAllGames,
    getGamesById,
    getGamesByName,
    postGame,
}