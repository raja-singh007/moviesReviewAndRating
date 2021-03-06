const responseObjectClass = require('../helpers/responseObjectClass');

const newResponseObject = new responseObjectClass();

async function checkConnection(req, res) {
  const returnObj = newResponseObject.create({
    code: 200,
    success: true,
    message: "API's health is in working state :)",
  });
  res.send(returnObj);
}

module.exports= {
  checkConnection,
};
