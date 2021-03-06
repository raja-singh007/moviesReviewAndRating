const path= require('path');;

const env = process.env.NODE_ENV || 'dev';

const config = require(`./${env}`);
const defaults = {
  root: path.join(__dirname, '/..'),
};

module.exports =Object.assign(defaults, config);
