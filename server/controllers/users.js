const users = require('../db/queries/users.js');

const cb = (error, result) => {
    if (error) throw error;

    return result;
};

module.exports.getProfile = (req, res) => {
    //Get and return user info (limited; profile purposes) INPUT id
    //userid
    users.getProfile(req.body.userid, cb);
};

module.exports.setProfile = (req, res) => { //EDITS USER DETAILS
    //Edit user info (limited)
    //first_name, last_name, phone, email, year_of_birth, country, bio
    users.setProfile(
        req.body.first_name,
        req.body.last_name,
        req.body.phone,
        req.body.email,
        req.body.year_of_birth,
        req.body.country,
        req.body.bio,
        cb);
};

module.exports.getUserApplications = (req, res) => {
    //Get and return all applications of this user INPUT user id
    //userid
    users.getApplications(req.body.userid, cb);
};