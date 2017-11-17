'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {

        ArcId: { DataTypes: INTEGER, primaryKey: true },
        UserType: { DataTypes: Enumerator('customer', 'partner', 'technician', 'operator', 'admin'), allowNull: false },
        Username: { DataTypes: string, allowNull: false },
        Password: { DataTypes: Password, allowNull: false },
        LastLogin: { DataTypes: Date, allowNull: false },
        MasterArcId: { DataTypes: INTEGER, allowNull: true }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
    return User;
};