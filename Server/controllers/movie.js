const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const movieCollection = require('../models/movie')
const newResponseObject = new responseObjectClass();

const addMovie = catchAsync(async(req,res,next)=>{
    let{
        body:{
            title,
            language,
            category,
            length,
            releaseYear,
        }
    } = req;

    let movieObj = { title, language, category, length, releaseYear};
    let dataSave = await new movieCollection(movieObj).save();
    if(!dataSave) return next(new AppError('Data was not saved!!',409));

    const returnObj = newResponseObject.create({
    success: true,
    code: 200,
    message: 'Saved Succesfully',
    data: dataSave,
  });
  return res.send(returnObj);
});

const getMovie = catchAsync(async(req,res,next)=>{
    let{
        query:{
            movieId,
        }
    }=req;

    const movieData = await movieCollection.findById({_id:movieId}).lean();
    if(! movieData) return next(new AppError('data not found for this Component',404));
    console.log(movieData);

    const returnObj = newResponseObject.create({
    success: true,
    code: 200,
    message: 'Movie Found',
    data: movieData,
  });
  return res.send(returnObj);
});

module.exports={
    addMovie,
    getMovie,
}