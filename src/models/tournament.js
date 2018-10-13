'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('Tournament', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    matchNumber: DataTypes.INTEGER
  }, {});
  Tournament.associate = function({ User }) {
    // insert association key in target model
    // winnerId -> chave estrangeira
    // as -> alias do método get e set (setWinner, getWinner)
    this.belongsTo(User, { foreignKey: 'winnerId', as: 'winner' });
    this.belongsToMany(User, { through: 'User_Tournament' });
  };
  return Tournament;
};