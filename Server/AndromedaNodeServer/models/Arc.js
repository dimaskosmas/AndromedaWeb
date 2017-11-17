'use strict';
module.exports = (sequelize, DataTypes) => {
    var Arc = sequelize.define('Arc', {
        Id: { DataTypes: INTEGER, allowNull: false },
        Name: { DataTypes: STRING, allowNull: false },
        Address: { DataTypes: STRING, allowNull: false },
        Licence: { DataTypes: STRING, allowNull: false, primaryKey: true }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
    return Arc;
};