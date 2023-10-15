"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jwt = require('jsonwebtoken');
function authMiddleware(req, res, next) {
    var token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    try {
        var decodedToken = jwt.verify(token, 'secret');
        req.user = decodedToken;
        next();
    }
    catch (err) {
        return res.status(401).send('Unauthorized');
    }
}
exports.authMiddleware = authMiddleware;
