const { Router } = require('express');
const mainRouter = Router();
// const { getAllGames, getGamesById, getGamesByName, postGame, }= require ("../controllers/videogamesController.js");
// const { getGenres }=require ("../controllers/genresControllers.js")
const videogamesRouter= require ("./videogamesRouter.js");
const genresRouter= require ("./genresRouter.js")


mainRouter.use("/videogames", videogamesRouter),
mainRouter.use("/genres", genresRouter);


module.exports = mainRouter;
 