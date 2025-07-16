require('dotenv').config();


function checkkey(req, res, next) {
  const clientapikey = req.header('x-api-key');
  const serverapikey = process.env.API_KEY;

  if (!clientapikey) {
    return res.status(401).json({ message: "API Key is missing" });
  }

  if (clientapikey !== serverapikey) {
    return res.status(403).json({ message: " API Key is Invalid" });
  }

  next();
}

module.exports = checkkey;