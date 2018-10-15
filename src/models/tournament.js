'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('Tournament', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    matchNumber: DataTypes.INTEGER
  }, {
    onDelete: 'CASCADE'
  });
  Tournament.associate = function({ User, Match }) {
    // winnerId -> chave estrangeira
    // as -> alias do método get e set (setWinner, getWinner)
    this.belongsTo(User, { foreignKey: 'winnerId', as: 'winner' });
    this.belongsToMany(User, { foreignKey: 'tournamentId', through: 'User_Tournament', as: 'players' });
    this.hasMany(Match, { foreignKey: 'tournamentId', as: 'matches' });
  };
  return Tournament;
};