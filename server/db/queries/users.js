const dbConnection = require('../dbconnection');

/* an sql query that returns an array with an element of a user 
   profile from users list.
   @param userid the id of the user
   @param cb a callback function
   returns: an array with one object representing a user profile */
module.exports.getProfile = (userid, cb) => {
    const query = `SELECT first_name,last_name,phone,email,year_of_birth,country,bio
     FROM users WHERE id=$1;`;
    dbConnection.query(query, [userid], (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
}

module.exports.addProfile = (first_name, last_name, phone, email, password, year_of_birth, country, bio, cb) => {
    const query = `INSERT INTO users (first_name, last_name, phone, email, password, 
        year_of_birth, country, bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;`;
    dbConnection.query(
        query, [first_name, last_name, phone, email, password, year_of_birth, country, bio],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.setProfile = (userid, first_name, last_name, phone, email, password, year_of_birth, country, bio, cb) => {
    const query = `UPDATE users SET first_name=$1, last_name=$2, phone=$3, email=$4, password=$5,
        year_of_birth=$6, country=$7, bio=$8 WHERE id=$9 RETURNING id;`;
    dbConnection.query(
        query, [first_name, last_name, phone, email, password, year_of_birth, country, bio, userid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.deleteProfile = (userid, password, cb) => {
    const query = `DELETE FROM users WHERE id=$1 AND password=$2;`;
    dbConnection.query(
        query, [userid, password],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.getUserApplications = (userid, cb) => {
    const query = 'SELECT * FROM applications WHERE user_id=$1;';
    dbConnection.query(
        query, [userid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}