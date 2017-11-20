'use strict';

var fs        = require('fs');
var path      = require('path');
var sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
var basename  = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new sequelize(config.database, config.username, config.password, { dialect: config.dialect, host: config.host, port: config.port }, );
}

fs
  .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    console.log(model);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
