const mongoose = require('mongoose');
const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const ratingCollection = require('../models/rating')
const newResponseObject = new responseObjectClass();

const postRating = catchAsync(async(req,res,next)=>{
    let{
        body:{
            movieId,
            userId,
            rating,
            review,
        }
    }= req;

  if (!mongoose.Types.ObjectId.isValid(movieId)) return next(new AppError('Invalid movieId', 409));
  
  if (!mongoose.Types.ObjectId.isValid(userId)) return next(new AppError('Invalid userId', 409));
    
    let ratingObj={
        movie:movieId,ratedBy:userId,rating,review
    }    
    let dataSave = await new ratingCollection(ratingObj).save();
    if(!dataSave) return next(new AppError('Data was not saved!!',409));

    const returnObj = newResponseObject.create({
    success: true,
    code: 200,
    message: 'Saved Succesfully',
    data: dataSave,
  });
  return res.send(returnObj);
});

const listRating = catchAsync(async(req,res,next)=>{
    let {
        query:{movieId,page=0,limit=20}
    }= req;
    page = parseInt(page);
    limit = parseInt(limit);
    let [ratingData, totalReview ]= await Promise.all([
       ratingCollection
        .find({movie:movieId})
        .sort({rating:-1})
        .populate('movie','title language')
        .populate('ratedBy','name email')
        .skip(page * limit)
        .limit(limit),
        ratingCollection.countDocuments(),
    ]) 
   if(ratingData.length === 0) return next(new AppError('No review found',404));
    
   const returnObj = newResponseObject.create({
    success: true,
    code: 200,
    message: 'Reviews found',
    data: ratingData,
    count:totalReview,
  });
    return res.send(returnObj);
});

const calculateRating = catchAsync(async(req,res,next)=>{
    let rating = await ratingCollection.find().select('rating')
    console.log(rating)
})

module.exports={
    postRating,
    listRating,
    calculateRating
}