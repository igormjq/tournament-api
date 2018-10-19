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

generateMatches();
