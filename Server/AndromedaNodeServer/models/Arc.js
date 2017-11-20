'use strict';
//var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {
    var Arc = sequelize.define('Arc', {
        Id:         {type: DataTypes.INTEGER(), allowNull:false                  },
        Name:       {type: DataTypes.STRING(), allowNull: false                  },
        Address:    {type: DataTypes.STRING(), allowNull: false                  },
        Licence:    {type: DataTypes.STRING(), allowNull: false, primaryKey: true}   
    },{                      
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
    return Arc;
};