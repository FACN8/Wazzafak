const users = require('../db/queries/users.js');

module.exports.getProfile = (req, res) => {
    //Get and return user info (limited; profile purposes) INPUT id
    //userid
    users.getProfile(req.query.userid, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

module.exports.addProfile = (req, res) => {
    const { first_name, last_name, phone, email, password, year_of_birth, country, bio } = req.body;
    //Get and return user info (limited; profile purposes) INPUT id
    users.addProfile(first_name, last_name, phone, email, password, year_of_birth, country, bio,
        (err, result) => {
            if (err) throw err;
            res.send(result.rows[0]);
        });
};

module.exports.setProfile = (req, res) => { //EDITS USER DETAILS
    const { id, first_name, last_name, phone, email, password, year_of_birth, country, bio } = req.body;
    //Edit user info (limited)
    //first_name, last_name, phone, email, year_of_birth, country, bio
    users.setProfile(id, first_name, last_name, phone, email, password, year_of_birth, country, bio,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
};

module.exports.deleteProfile = (req, res) => { //EDITS USER DETAILS
    const { id, password } = req.body;
    //Edit user info (limited)
    //first_name, last_name, phone, email, year_of_birth, country, bio
    users.deleteProfile(id, password,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
};

module.exports.getUserApplications = (req, res) => {
    //Get and return all applications of this user INPUT user id
    //userid
    users.getUserApplications(req.body.userid, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};