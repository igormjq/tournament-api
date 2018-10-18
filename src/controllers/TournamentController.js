import { Tournament } from '../models/'

class TournamentController {

  async getAll(req, res) {
    
    try {
      let tournaments = await Tournament.findAll();
      
      res.send({ tournaments });
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  async getById(req, res) {
    let { id } = req.params;

    try {
      let tournament = await Tournament.findById(id);
      
      if(!tournament) {
        throw "Tournament not found"
      }

      res.send({ tournament });

    } catch (error) {
      res.status(404).send({ error });
    }
  }
}

export default TournamentController;