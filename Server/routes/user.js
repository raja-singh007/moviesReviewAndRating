const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')

router
    .route('/')
    .post(userCtrl.userData);


module.exports= router;