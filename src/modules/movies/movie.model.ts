import { Schema, model } from "mongoose";
import { TMovie, TReview } from "./movie.interface";


const tReviewSchema = new Schema<TReview>({
    email : {
        type : String,
        require : true

    },
    rating : {
        type : Number,
        require : true
    },
    comment : {
        type : String,
        require : true
    }


})

const tMovieSchema = new Schema<TMovie>({
    title : {type : String , require : true},
    description : {type : String , require : true},
    releaseDate : {type : Date , require : true},
    genre : {type : String , require : true},
    isDeleted : {type : Boolean , require : true},
    viewCount : {type : Number , require : true},
    reviews : {
        type : [tReviewSchema]
    }

})


export const Movie = model<TMovie>("Movie" , tMovieSchema);



