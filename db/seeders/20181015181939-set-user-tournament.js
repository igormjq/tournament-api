'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('SELECT id FROM Users', { type: Sequelize.QueryTypes.SELECT })
      .then(users => users.map(({ id:userId }) => {
        return { userId, tournamentId: 1}
      }))
      .then(users => queryInterface.bulkInsert('User_Tournament', users))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_Tournament', null, {});
  }
};
