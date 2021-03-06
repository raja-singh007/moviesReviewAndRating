const express = require('express')
const healthCtrl = require('../controllers/health');
const movieRoutes = require('./movie')
const userRoutes = require('./user')
const router = express.Router();

/**Service Health Check API */
router.get('/health-check', healthCtrl.checkConnection);

router.use('/movie',movieRoutes);
router.use('/user',userRoutes)


exports= module.exports= router;