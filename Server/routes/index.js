const express = require('express')
const healthCtrl = require('../controllers/health');
// const componentsRoutes = require('./components')

const router = express.Router();

/**Service Health Check API */
router.get('/health-check', healthCtrl.checkConnection);

// router.use('/component',componentsRoutes);


exports= module.exports= router;