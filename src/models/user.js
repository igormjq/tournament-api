'use strict';
const { hashSync, genSaltSync } = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    onDelete: 'CASCADE',
    hooks: {
      beforeCreate(user) {
        const salt = genSaltSync(10);
        user.password = hashSync(user.password, salt);
      },
    }
  });
  User.associate = function({ Match, Tournament }) {
    // this.hasMany(Match, { as: 'matches' });
    this.belongsToMany(Tournament, { foreignKey: 'userId', through: 'User_Tournament', as: 'tournaments', onDelete: 'CASCADE' });
  };
  return User;
};