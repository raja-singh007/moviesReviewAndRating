const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation')
const router = express.Router();
const userCtrl = require('../controllers/user')
