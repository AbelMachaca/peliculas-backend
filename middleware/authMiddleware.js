const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: '7d' });
}

function validateToken(req, res, next) {
  const accessToken = req.headers['authorization'] || req.query.accesstoken;

  if (!accessToken) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Access denied, token expired or incorrect' });
    } else {
      req.user = user;
      next();
    }
  });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  validateToken,
};
