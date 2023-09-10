const {Router}= require("express");
const { getVideogames, getDetailVideogame, CreateVideogame }= require ("../handlers/videogamesHandler.js")

const videogamesRouter= Router();

videogamesRouter.get("/", getVideogames);

videogamesRouter.get("/:id", getDetailVideogame);

videogamesRouter.post("/", CreateVideogame);

module.exports= videogamesRouter;

