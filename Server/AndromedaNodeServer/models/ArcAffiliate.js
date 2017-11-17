'use strict';
module.exports = (sequelize, DataTypes) => {
    var ArcAffiliate = sequelize.define('Affiliate', {

        arcId: { DataTypes: INTEGER, allowNull: false },
        childArc: { DataTypes: INTEGER, allowNull: false },
        id: { DataTypes: INTEGER, primaryKey: true }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here

                }
            }
        });
    return ArcAffiliate;
};