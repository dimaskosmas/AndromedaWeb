'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      queryInterface.createTable('Arc', {
          Id: { type: Sequelize.INTEGER(), allowNull: false },
          Name: { type: Sequelize.STRING(), allowNull: false },
          Address: { type: Sequelize.STRING(), allowNull: false },
          Licence: { type: Sequelize.STRING(), allowNull: false, primaryKey: true }
      });

      queryInterface.createTable('Affiliate', {

          arcId: { type: Sequelize.INTEGER() },
          childArc: { type: Sequelize.INTEGER() },
          id: { type: Sequelize.INTEGER(), primaryKey: true }
      });
      

      queryInterface.createTable('User', {

          ArcId: { type: Sequelize.INTEGER(), primaryKey: true },
          UserType: { type: Sequelize.ENUM('customer', 'partner', 'technician', 'operator', 'admin'), allowNull: false },
          Username: { type: Sequelize.STRING(), allowNull: false },
          Password: { type: Sequelize.STRING(), allowNull: false },
          LastLogin: { type: Sequelize.DATE(), allowNull: false },
          MasterArcId: { type: Sequelize.INTEGER(), allowNull: false }
      });
       
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      queryInterface.droptable('Arc');
      queryInterface.droptable('Affiliate');
      queryInterface.droptable('User');

  }
};
