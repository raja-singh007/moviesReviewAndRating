const mongoose = require('mongoose');
const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const ratingCollection = require('../models/rating')
const newResponseObject = new responseObjectClass();


