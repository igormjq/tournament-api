'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    tournamentId: DataTypes.INTEGER,
    winnerId: DataTypes.INTEGER,
    playerOneId: DataTypes.INTEGER,
    playerTwoId: DataTypes.INTEGER
  }, {});
  Match.associate = function({ User, Tournament }) {
    this.belongsTo(User, { foreignKey: 'playerOneId', as: 'firstPlayer' });
    this.belongsTo(User, { foreignKey: 'playerTwoId', as: 'secondPlayer' });
    this.belongsTo(User, { foreignKey: 'winnerId', as: 'winner' });
    this.belongsTo(Tournament, { foreignKey: 'tournamentId', as: 'tournament' });
  };
  return Match;
};