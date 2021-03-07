const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie')
const ratingRoute = require('./rating')

router
    .route('/')
    .get(movieCtrl.getMovie)
    .post(movieCtrl.addMovie)

router.use('/rating',ratingRoute)

module.exports= router;