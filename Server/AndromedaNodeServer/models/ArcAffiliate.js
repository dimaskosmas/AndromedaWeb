'use strict';
module.exports = (sequelize, DataTypes) => {
    var ArcAffiliate = sequelize.define('Affiliate', {

        arcId:      {type: DataTypes.INTEGER()                    },
        childArc:   {type: DataTypes.INTEGER()                    },
        id:         {type: DataTypes.INTEGER(), primaryKey: true  }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here

                }
            }
        });
    return ArcAffiliate;
};