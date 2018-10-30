'use strict';
const { hashSync, genSaltSync, compareSync } = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4')
const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    onDelete: 'CASCADE',
    hooks: {
      beforeCreate(user) {
        const salt = genSaltSync(10);
        user.password = hashSync(user.password, salt);
        user.id = uuid();
      },
    }
  });
  User.associate = function({ Match, Tournament }) {
    this.belongsToMany(Tournament, { foreignKey: 'userId', through: 'User_Tournament', as: 'tournaments', onDelete: 'CASCADE' });
  };

  /**
   * Generates a token based on the user id
   */
  User.prototype.generateAuthToken = function() {
    return jwt.sign({ id: this.id, email: this.email }, process.env.JWT_SECRET);
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

  /**
   * Decodes an user and fetches by the id within the payload
   * @param {String} token - Token to decode 
   */
  User.findByToken = function(token) {
    let decoded;
  
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    } catch (error) {
      throw 'User not authorized';

    }
    
    return this.findById(decoded.id)
      .then(user => user.toJSON())
      .then(user => _.pick(user, ['id', 'name', 'email']))
      .catch(err => console.log(err));
    
  };

  return User;
};