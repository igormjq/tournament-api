'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function({ Match, Tournament }) {
    this.hasMany(Match, { as: 'matches' });
    this.belongsToMany(Tournament, { through: 'User_Tournament' });
  };
  return User;
};