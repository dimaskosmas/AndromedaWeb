'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {


        return queryInterface.bulkInsert('User', [{
            ArcId: 0,
            Usertype: 'customer',
            Username: 'Terra',
            Password: '12345678',
            LastLogin: '2016-08-09 04:05:02',
            MasterArcId: 0
        },
        {
            ArcId: 1,
            Usertype: 'partner',
            Username: 'EuroGuard',
            Password: '12345678',
            LastLogin: '2016-08-09 04:05:02',
            MasterArcId: 0
        },
        {
            ArcId: 2,
            Usertype: 'technician',
            Username: 'Ifixit',
            Password: '12345678',
            LastLogin: '2016-08-09 04:05:02',
            MasterArcId: 0
        },
        {
            ArcId: 3,
            Usertype: 'operator',
            Username: 'IoperateTerra',
            Password: '12345678',
            LastLogin: '2016-08-09 04:05:02',
            MasterArcId: 0
        },
        {
            ArcId: 4,
            Usertype: 'admin',
            Username: 'AdminstratorIncubatorTerra',
            Password: '12345678',
            LastLogin: '2016-08-09 04:05:02',
            MasterArcId: 0
        }], {}); 

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      const Users = [0, 1, 2, 3, 4];
      Users.forEach(function (user) {
          queryInterface.bulkDelete('User', { ArcId: user });
      });
  }
};
