'use strict';
var models = require('../models');

var userRepository = {
    findByUserName: function(username) {
        return models.User.findAll({
            where: {
                UserName: username
            }
        })
    }
}
module.exports = userRepository;
