const Sequelize = require('sequelize');
const db = require('gluon/db');

module.exports = db.define('User', {
  account: {
    type: Sequelize.STRING(32),
    allowNull: false,
    unique: true,
    validate: {
      isAlpha: true
    }
  },

  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
    validate: {
      is: /^[a-f0-9]{32}$/
    }
  }
}, {
  freezeTableName: true,
  paranoid: true
});