
const  Acronym = require('../models/acronym.model');
//const connect  = require('../mongooseConfig');
const mongoose = require('mongoose');


require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const URI = `mongodb+srv://my-database:${dbPassword}@cluster0.zldubzz.mongodb.net/?retryWrites=true&w=majority`

  





  const populateDb = async () => {
  const acronyms = await Acronym.find();

  if (acronyms.length === 0) {
    const data = await require('./flatFile.json');

    for (const acronym of data) {
      const newAcronym = new Acronym(acronym);
      await newAcronym.save();
    }
  }
};

mongoose.connect(URI)
  .then(() => populateDb())
  .then(() => mongoose.disconnect())
  .catch(err => console.error(err));

