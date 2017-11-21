'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Arc', [{
            Id: 0,
            Name: 'Terra',
            Address: 'etninkhs antistaeos 79',
            Licence: '0000-2222-3333-4444'
        },
        {
            Id: 0,
            Name: 'Plan',
            Address: 'etninkhs antistaeos 89',
            Licence: '0000-2222-3333-5555'
        },
        {
            Id: 0,
            Name: 'Andomeda',
            Address: 'etninkhs antistaeos 79',
            Licence: '0000-2222-3333-6666'
        },
        {
            Id: 0,
            Name: 'kerver',
            Address: 'etninkhs antistaeos 79',
            Licence: '0000-2222-3333-7777'
        },
        {
            Id: 0,
            Name: 'Aoua',
            Address: 'etninkhs antistaeos 79',
            Licence: '0000-2222-3333-8888'
        },
        {
            Id: 0,
            Name: 'Avava',
            Address: 'etninkhs antistaeos 79',
            Licence: '0000-2222-3333-9999'
        }], {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        const licences = ['0000-2222-3333-4444',
            '0000-2222-3333-5555',
            '0000-2222-3333-6666',
            '0000-2222-3333-7777',
            '0000-2222-3333-8888',
            '0000-2222-3333-9999'];
        licences.forEach(function (licence) {
            queryInterface.bulkDelete('Arc', {
                Licence: licence
            });
        });
        return queryInterface.bulkDelete('Arc',{Licence:  '0000-2222-3333-4444'});
    }
};
