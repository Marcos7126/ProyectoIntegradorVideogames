const {Router}= require("express");
const { getVideogames, getDetailVideogame, getNombreVideogame, CreateVideogame }= require ("../handlers/videogamesHandler.js")

const videogamesRouter= Router();

videogamesRouter.get("/", getVideogames);

videogamesRouter.get("/:id", getDetailVideogame);

videogamesRouter.get("/:nombre", getNombreVideogame);

videogamesRouter.post("/", CreateVideogame);

module.exports= videogamesRouter;