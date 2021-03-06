const mongoose = require('mongoose');
const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const movieCollection = require('../models/movie')
const newResponseObject = new responseObjectClass();
