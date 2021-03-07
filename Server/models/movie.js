const mongoose = require('mongoose')
const {Schema} = mongoose;

/**
 * Movie Schema
 */

const movieSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            trim:true,
        },
        category:{
            type:String,
            enum:['General','Horror','Scifi','Action','Adventure','Kids','18+'],
            default:'General'
        },
        language:{
            type: String,
            required: true,
            trim:true
        },
        releaseYear:{
            type: String,
            required: true,
            trim:true,
        },
        length:{
            type: String,
            required: true,
            trim:true,
        },
        createdOn: { type: Date, default: Date.now },
        lastModified: { type: Date, default: Date.now },

    },
    {timestamps:{createdAt: 'createdOn', updatedAt: 'lastModified'}},
)

module.exports = mongoose.model('movieSchema', movieSchema);
