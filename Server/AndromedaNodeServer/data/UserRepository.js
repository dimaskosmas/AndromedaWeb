'use strict';
var models = require('../models');

var UserRepository = {
    findByUserName: function(username) {
        return models.User.findAll({
            where: {
                UserName: username
            }
        })
    }
}

module.exports = UserRepository;
