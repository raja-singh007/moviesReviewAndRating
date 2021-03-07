const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const userCollection = require('../models/user')
const newResponseObject = new responseObjectClass();

const userData = catchAsync(async(req,res,next)=>{
    let{
        body:{
            name,
            email,
        }
    }= req;

    let userObj={
        name,email,
    };
    let dataSave = await new userCollection(userObj).save();
    console.log(userObj)
    if(!dataSave) return next(new AppError('Data was not saved!!',409));

   const returnObj = newResponseObject.create({
    success: true,
    code: 200,
    message: 'Saved Succesfully',
    data: dataSave,
  });
  return res.send(returnObj);
});

module.exports={userData}