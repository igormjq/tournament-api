'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    tournamentId: DataTypes.INTEGER,
    winnerId: DataTypes.INTEGER,
    playerOne: DataTypes.INTEGER,
    playerTwo: DataTypes.INTEGER
  }, {});
  Match.associate = function({ User, Tournament }) {
    
    this.belongsTo(User, { foreignKey: 'playerOneId', as: 'playerOne' });
    this.belongsTo(User, { foreignKey: 'playerTwoId', as: 'playerTwo' });
    this.belongsTo(User, { foreignKey: 'winnerId', as: 'winner' });
    this.belongsTo(Tournament, { foreignKey: 'tournamentId', as: 'tournament' });

  };
  return Match;
};