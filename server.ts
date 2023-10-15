import { authMiddleware } from './security/auth.middleware';
import { AcronymsController } from './controller/acronyms.controller';
const mongoose = require('mongoose');
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const URI = `mongodb+srv://my-database:${dbPassword}@cluster0.zldubzz.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(URI);


const express = require('express');
const app = express();

 
const acronymsController = new AcronymsController();

// GET /acronym
app.get('/acronyms', authMiddleware, acronymsController.getAcronyms);

// POST /acronym
app.post('/acronym', acronymsController.createAcronym);

// PATCH /acronym/:acronymID
app.patch('/acronym/:acronymID', acronymsController.updateAcronym);

// DELETE /acronym/:acronymID
app.delete('/acronym/:acronymID', acronymsController.deleteAcronym);

// ...


const PORT: number = 3000;
app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT ${PORT}`));