"using strict";

var userRepo = require('../data/userRepository');
var crypt = require('crypt');


function getUser(req, res) {
    var email = req.query.email;
    
    userRepo.findByEmail(email)
        .then(function(users) {
            if (users.length) {
                return res.send(user);
            }
            return res.send({
                message: "Could not find user."
            });
        })
        .catch(function(error) {
            return res.send({
                message: "Error retrieving user."
            });
        });
}

module.exports = { get: getUser };