'use strict';

module.exports = (sequelize, DataTypes) => {
    var Arc = sequelize.define('Arc', {
        Id:         {type: sequelize.INTEGER(), allowNull:false                  },
        Name:       {type: sequelize.STRING(), allowNull: false                  },
        Address:    {type: sequelize.STRING(), allowNull: false                  },
        Licence:    {type: sequelize.STRING(), allowNull: false, primaryKey: true}   
    },{                      
            classMethods: {
                associate: function (model) {
                    // associations can be defined here
                    
                }
            }
        });
    return Arc;
};