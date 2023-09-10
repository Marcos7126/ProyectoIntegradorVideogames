const { Videogame, Genre }= require ("../db");
const axios= require ("axios");
const {Op}= require ("sequelize");
const {API_KEY, API_URL}=process.env

const getAllGames= async()=> {
    try {
        const allVideogamesDB= await Videogame.findAll();

        const primeraPagApi= await axios.get(`${API_URL}/games?key=${API_KEY}&page=1`);
        const segundaPagApi= await axios.get(`${API_URL}/games?key=${API_KEY}&page=2`);
        const terceraPagApi= await axios.get(`${API_URL}/games?key=${API_KEY}&page=3`);
        const cuartaPagApi= await axios.get(`${API_URL}/games?key=${API_KEY}&page=4`);
        const quintaPagApi= await axios.get(`${API_URL}/games?&key=${API_KEY}&page=5`);

        const allVideogamesAPI= [
        ...primeraPagApi.data.results,
        ...segundaPagApi.data.results,
        ...terceraPagApi.data.results,
        ...cuartaPagApi.data.results,
        ...quintaPagApi.data.results, 
        ];
        return[...allVideogamesDB, ...allVideogamesAPI]
    } catch (error) {
        return (error)
    }
};

const getGamesById= async(id, source) =>{
    try {
        if(source==="DB"){
            let gameDB= await Videogame.findOne({
            where:{id},
            include: Genre
            });
            return gameDB
        };
    
        let gameApi= await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`);
        const gameId={
        id: gameApi.data.id,
        name: gameApi.data.name,
        description: gameApi.data.description,
        platforms: gameApi.data.platforms.map((platform)=>platform.platform.name),
        image: gameApi.data.background_image,
        year_start: gameApi.data.released,
        rating: gameApi.data.rating,
        genres: gameApi.data.genres.map((genre)=>genre.name)
        };

        return gameId
    
    } catch (error) {
        return(error)
    };
};
    


const getGamesByName= async (name)=>{
    try {
        const gamesFilteredDB= await Videogame.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                },
            },
            
        });
        
        const response= await axios.get(`${API_URL}/games?search=${name}&key=${API_KEY}`);
        const gamesFilteredApi= response.data.results;

        const primerosXV= [
            ...gamesFilteredDB,
            ...gamesFilteredApi,
        ].slice(0,15);

        return (primerosXV)
        
    } catch (error) {
        return (error)
    }
};

const postGame= async (name, description, platforms, image, year_start, rating, genres)=>{
    // try {
        const newGame= await Videogame.create({
                name, 
                description, 
                platforms, 
                image, 
                year_start, 
                rating,
        })
        // await newGame.setgenre(genres);
        return newGame
        
    // } catch (error) {
    //     return {error:"missingDataError"}
        
    // }
};


module.exports= {
    getAllGames,
    getGamesById,
    getGamesByName,
    postGame,
}