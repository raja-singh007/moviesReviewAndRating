const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation')
const router = express.Router();
const ratingCtrl = require('../controllers/rating')
const ratingRoute = require('./rating')

router
    .route('/')
    .get()
    .post()

router.use('/movie-rating',ratingRoute)

module.exports= router;