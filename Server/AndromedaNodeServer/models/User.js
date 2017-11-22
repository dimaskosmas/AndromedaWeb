'use strict';
var bcrypt = require('../node_modules/bcrypt');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {

        ArcId: { type: DataTypes.INTEGER, primaryKey: true},
        UserType: { type: DataTypes.ENUM('customer', 'partner', 'technician', 'operator', 'admin'), allowNull: false } ,
        Username: { type: DataTypes.STRING, allowNull: false },
        Password: { type: DataTypes.STRING, allowNull: false }, 
        LastLogin: { type: DataTypes.DATE, allowNull: false}, 
        MasterArcId: { type: DataTypes.INTEGER, allowNull: false }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                    User.belongsTo(Arc);
                }
            }
        });
    return User;

};