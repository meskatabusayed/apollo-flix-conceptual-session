import { Request, Response } from "express"
import { movieServices } from "./movie.services"


const createMovie =  async(req : Request , res : Response) => {
    const movieData = req.body;
    const result = await movieServices.createMovie(movieData);
    res.json({
        success : true,
        message : "Movie created successfully",
        data : result
    })
}

const getAllMovies = async(req : Request , res : Response) => {
    try{
        const result = await movieServices.getAllMovies();

        res.status(200).json({
            success : true,
            messgae : "Movies are faced successfully!",
            data : result
        })


    }catch(error : any){
        res.status(500).json({
            success : false,
            message : "Could not faced movies",
            error : error
        })
    }
}

//getMovie By Id
const getMovieById = async(req : Request , res : Response) => {
    try{
        const {movieId} = req.params;
        const result = await movieServices.getMovieById(movieId);

        res.status(200).json({
            success : true,
            messgae : "Movie  faced successfully!",
            data : result
        })


    }catch(error : any){
        res.status(500).json({
            success : false,
            message : "Could not faced movies",
            error : error
        })
    }
}




export const movieControllers = {
    createMovie,
    getAllMovies,
    getMovieById,
}