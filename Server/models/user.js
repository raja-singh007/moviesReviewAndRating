const mongoose = require('mongoose')
const {Schema} = mongoose;

/**
 * User Schema
 */

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim:true,
        },
        email:{
            type: String,
            required: true,
            trim:true,
            unique: true,
        },
        movieRated:[{type:mongoose.Schema.Types.ObjectId,ref:'movie'}]
    },
    {timestamps:true},

)

module.exports=mongoose.model('userSchema',userSchema);