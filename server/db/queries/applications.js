const dbConnection = require('../dbconnection.js');

module.exports.addApplication = (userid, vacancyid, message, cb) => {
    const query = `INSERT INTO applications (user_id, vacancy_id, message) VALUES ($1, $2, $3);`;
    dbConnection.query(
        query, [userid, vacancyid, message],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.deleteApplication = (applicationid, cb) => {
    const query = `DELETE FROM applications WHERE id=$1;`;
    dbConnection.query(
        query, [applicationid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.getApplicant = (applicationid, cb) => {
    const query = `SELECT * FROM users WHERE id=(SELECT user_id FROM applications WHERE id=$1);`;

    dbConnection.query(
        query, [applicationid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}
