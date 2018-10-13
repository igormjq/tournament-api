'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Tournament', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      tournamentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tournaments',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('User_Tournament');
  }
};
