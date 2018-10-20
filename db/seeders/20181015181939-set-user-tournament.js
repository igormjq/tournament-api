'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('User_Tournament', [
     {
      userId: 1,
      tournamentId: 1
     },
     {
       userId: 2,
       tournamentId: 1
     },
     {
      userId: 3,
      tournamentId: 1
     },
     {
      userId: 4,
      tournamentId: 1 
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_Tournament', null, {});
  }
};
