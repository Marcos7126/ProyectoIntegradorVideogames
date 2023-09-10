const { postGame, getGamesById, getGamesByName, getAllGames } = require("../controllers/videogamesController.js");

const getVideogames= async (req, res)=>{
    const {name}=req.query;
    try {
        if(name){
            const games= await getGamesByName(name);
            res.status(200).json(games);
        }else{
        const allGames= await getAllGames();
        res.status(200).json(allGames)
        }
    } catch (error) {
     res.status(500).json({error: "internal server error"})   
    }
};

const getDetailVideogame= async(req, res)=>{
        const {id}= req.params;

        const source= isNaN(id) ? "DB" : "Api";

    try {
        const response= await getGamesById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};


const CreateVideogame= async (req, res)=>{
        const {name, description, platforms, image, year_start, rating, genres}=req.body;
    try {
        const response= await postGame(name, description, platforms, image, year_start, rating, genres);
        res.status(200).json(response)
    } catch (error) { 
        res.status(400).json({error:error.message});
    } 
};

module.exports= {
    getVideogames,
    getDetailVideogame,
    CreateVideogame,
}