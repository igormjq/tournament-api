'use strict';
const { hashSync, genSaltSync, compareSync } = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

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

  User.prototype.generateAuthToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET);
  };

  /**
   * Find by email and check the password
   * @param {String} email - Email
   * @param {String} password - Password
   */
  User.findByCredentials = function({ email, password }) {
    return this.findOne({ where: { email }})
      .then(user => compareSync(password, user.password) ?  user : Promise.reject())
      .catch(err => err);
  };

  return User;
};