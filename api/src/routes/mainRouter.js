const { Router } = require('express');
const mainRouter = Router();
const videogamesRouter= require ("./videogamesRouter.js");
const genresRouter= require ("./genresRouter.js")


mainRouter.use("/videogames", videogamesRouter),
mainRouter.use("/genres", genresRouter);


module.exports = mainRouter;
 