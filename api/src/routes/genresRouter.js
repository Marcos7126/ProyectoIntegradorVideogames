 const {Router}= require("express");
 const { getGenres } = require("../handlers/genresHandler");
 
const genreRouter= Router();

genreRouter.get("/",getGenres)


module.exports= genreRouter;