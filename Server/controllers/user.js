const mongoose = require('mongoose');
const responseObjectClass = require('../helpers/responseObjectClass');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const userCollection = require('../models/user')
const newResponseObject = new responseObjectClass();
