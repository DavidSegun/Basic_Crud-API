const jwt = require('jsonwebtoken');

export function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = jwt.verify(token, 'secret');
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).send('Unauthorized');
  }
}
