'use strict';
const { hashSync, genSaltSync } = require('bcrypt-nodejs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      name: 'Igor',
      email: 'igormjq@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      name: 'Miguel',
      email: 'miguel@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      name: 'Dionatan',
      email: 'dionatan@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      name: 'Crisciano',
      email: 'crisciano@hotmal.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      name: 'Novo Rapaz',
      email: 'rapazote@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
