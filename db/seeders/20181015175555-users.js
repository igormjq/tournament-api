'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      name: 'Igor',
      email: 'igormjq@gmail.com',
      password: '1234'
    },
    {
      name: 'Miguel',
      email: 'miguel@gmail.com',
      password: '1234'
    },
    {
      name: 'Dionatan',
      email: 'dionatan@gmail.com',
      password: '1234'
    },
    {
      name: 'Crisciano',
      email: 'crisciano@hotmal.com',
      password: '1234'
    },
   ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
