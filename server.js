"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_middleware_1 = require("./security/auth.middleware");
var acronyms_controller_1 = require("./controller/acronyms.controller");
var mongoose = require('mongoose');
require('dotenv').config();
var dbPassword = process.env.DB_PASSWORD;
var URI = "mongodb+srv://my-database:".concat(dbPassword, "@cluster0.zldubzz.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect(URI);
var express = require('express');
var app = express();
var acronymsController = new acronyms_controller_1.AcronymsController();
// GET /acronym
app.get('/acronyms', auth_middleware_1.authMiddleware, acronymsController.getAcronyms);
// POST /acronym
app.post('/acronym', acronymsController.createAcronym);
// PATCH /acronym/:acronymID
app.patch('/acronym/:acronymID', acronymsController.updateAcronym);
// DELETE /acronym/:acronymID
app.delete('/acronym/:acronymID', acronymsController.deleteAcronym);
// ...
var PORT = 3000;
app.listen(PORT, function () { return console.log("APP IS RUNNING ON PORT ".concat(PORT)); });
