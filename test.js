const { User, Tournament, Match } = require('./src/models');

/*
  Gera partidas de determinado campeonato
*/
const generateMatches = async () => {

  try {
    let tournament = await Tournament.findById(1);
    let users = await tournament.getPlayers();

    for(let i=0; i < users.length; i++) {
      let current = users[i];
      
      for(let j=i+1; j < users.length; j++) {
        let next = users[j];
        if(next) {
          tournament.createMatch({
            playerOneId: current.id,
            playerTwoId: next.id
          })
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

};

/*
  Pega todos os jogos de determinado campeonato
*/
const getMatches = async () => {

  try {
    let tournament = await Tournament.findById(1, {
      attributes: ['name'],
      include: [
        { 
          model: Match, as: 'matches',
          include: [
            { model: User, as: 'firstPlayer' },
            { model: User, as: 'secondPlayer' }
          ]
        }
      ]
  });
    console.log(JSON.stringify(tournament, null, 2));
  } catch (error) {
    console.log(error)
  }

};

// generateMatches();
// getMatches();