const express = require('express');
const ratingCtrl = require('../controllers/rating')
const router = express.Router();

router
    .route('/')
    .get(ratingCtrl.listRating)
    .post(ratingCtrl.postRating)

router
    .route('/rating-calculation')
    .get(ratingCtrl.calculateRating)

module.exports= router;