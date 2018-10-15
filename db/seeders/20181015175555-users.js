'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
