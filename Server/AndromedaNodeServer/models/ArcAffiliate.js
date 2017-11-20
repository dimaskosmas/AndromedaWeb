'use strict';
module.exports = (sequelize, DataTypes) => {
    var ArcAffiliate = sequelize.define('Affiliate', {

        arcId:      {type: sequelize.INTEGER()                    },
        childArc:   {type: sequelize.INTEGER()                    },
        id:         {type: sequelize.INTEGER(), primaryKey: true  }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here

                }
            }
        });
    return ArcAffiliate;
};