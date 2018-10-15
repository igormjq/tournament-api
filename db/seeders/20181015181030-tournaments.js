'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tournaments', [
     {
       name: 'Pelotas Grand Prix',
       startDate: new Date(),
     },
     {
      name: 'Torneio Gaúcho de Tênis de Mesa',
      startDate: new Date(),
    },
    {
      name: 'SESC Verão 2018',
      startDate: new Date(),
    },
    {
      name: 'Torneio Internacional de Porto Alegre',
      startDate: new Date(),
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tournaments', null, {});
  }
};
