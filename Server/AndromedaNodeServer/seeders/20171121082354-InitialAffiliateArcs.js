'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Affiliate', [{
            arcId: 0,        //{ type: sequelize.INTEGER() },
            childArc: 0,      // { type: sequelize.INTEGER() },
            id: 0           //{ type: sequelize.INTEGER(), primaryKey: true }
        }, {
            arcId: 0,
            childArc: 1,
            id: 1
        }, {
            arcId: 1,
            childArc: 0,
            id: 2
        },
        {
            arcId: 1,
            childArc: 1,
            id: 3
        }, {
            arcId: 2,
            childArc: 4,
            id: 4
        }], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      const AffiliateArcId = [0, 1, 2, 3, 4];
      AffiliateArcId.forEach(function (affiliate) {
          queryInterface.bulkDelete('Affiliate', { Id: affiliate });
      });
  }
};
