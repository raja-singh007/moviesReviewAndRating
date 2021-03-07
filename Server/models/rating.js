const mongoose = require('mongoose')
const {Schema} = mongoose;

/**
 * rating Schema
 */

const ratingSchema = new Schema(
    {
        movie:{type: mongoose.Schema.Types.ObjectId, ref: 'movieSchema'},
        ratedBy:{type: mongoose.Schema.Types.ObjectId, ref: 'userSchema'},
        rating:{
            type:Number,
            enum:[1,2,3,4,5],
            default:5,
            required:true
        },
        review:{
            type:String,
            trim:true,
            required:true,
        },
    }
)

module.exports=mongoose.model('ratingSchema',ratingSchema);