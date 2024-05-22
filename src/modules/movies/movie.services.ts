import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";


const createMovie = async (payLoad : TMovie) => {
    const result =await  Movie.create(payLoad);
    return result;
}

//getAllMovies
const getAllMovies = async() => {
    const result =await  Movie.find();
    return result;
}

//get Movie By Id
const getMovieById = async(id : String) => {
    const result =await  Movie.findById(id);
    return result;
}



export const movieServices = {
    createMovie,
    getAllMovies,
    getMovieById
}