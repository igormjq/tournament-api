'use strict';
const { hashSync, genSaltSync } = require('bcrypt-nodejs');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      id: uuid(),
      name: 'Igor',
      email: 'igormjq@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      id: uuid(),
      name: 'Miguel',
      email: 'miguel@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      id: uuid(),
      name: 'Dionatan',
      email: 'dionatan@gmail.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      id: uuid(),
      name: 'Crisciano',
      email: 'crisciano@hotmal.com',
      password: hashSync('1234', genSaltSync(10))
    },
    {
      id: uuid(),
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
