var Sequelize = require('sequelize');
var models = require('../models');

module.exports = (sequelize, DataTypes) => {
var Arc = sequelize.define('Arc', {
        Id:         {type: DataTypes.INTEGER,allowNull:false                   },
        Name:       {type: DataTypes.STRING, allowNull: false                  },
        Address:    {type: DataTypes.STRING, allowNull: false                  },
        Licence:    {type: DataTypes.STRING, allowNull: false, primaryKey: true}
    });
    return Arc;
};