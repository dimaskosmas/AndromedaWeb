'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {

        ArcId: { type: sequelize.INTEGER(), primaryKey: true},
        UserType: { type: sequelize.ENUM('customer', 'partner', 'technician', 'operator', 'admin'), allowNull: false } ,
        Username: { type: sequelize.STRING(), allowNull: false },
        Password: { type: sequelize.STRING(), allowNull: false }, 
        LastLogin: { type: sequelize.DATE(), allowNull: false}, 
        MasterArcId: { type: sequelize.INTEGER(), allowNull: false }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
    return User;
};