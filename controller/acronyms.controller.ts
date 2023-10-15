import  Acronym  from '../models/acronym.model';

export class AcronymsController {
  async createAcronym(req, res) {
    const { acronym, definition } = req.body;

    const newAcronym = new Acronym({
      acronym,
      definition,
    });

    await newAcronym.save();

    res.send({ message: 'Acronym created successfully' });
  }

  async getAcronyms(req, res) {
    const { limit, offset } = req.query;
  
    const acronyms = await Acronym.find()
      .limit(limit)
      .skip(offset);
  
    res.send(acronyms);
  }
  

  async updateAcronym(req, res) {
    const { acronymID } = req.params;
    const { definition } = req.body;

    const acronym = await Acronym.findById(acronymID);

    if (!acronym) {
      res.status(404).send({ message: 'Acronym not found' });
      return;
    }

    acronym.definition = definition;

    await acronym.save();

    res.send({ message: 'Acronym updated successfully' });
  }

  async deleteAcronym(req, res) {
    const { acronymID } = req.params;

    const acronym = await Acronym.findById(acronymID);

    if (!acronym) {
      res.status(404).send({ message: 'Acronym not found' });
      return;
    }

    await acronym.remove();

    res.send({ message: 'Acronym deleted successfully' });
  }
}
