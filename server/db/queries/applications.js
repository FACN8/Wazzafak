const dbConnection = require('../dbconnection');

module.exports.addApplication = (userid, vacancyid, message, cb) => {
    const query = 'INSERT INTO applications (userid, vacancyid, message) VALUES ($1, $2, $3);';
    dbConnection.query(
        query, [userid, vacancyid, message],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.deleteApplication = (applicationid, cb) => {
    const query = 'DELETE FROM applications WHERE id=$1;';
    dbConnection.query(
        query, [applicationid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.getApplicant = (applicationid) => {

}

module.exports.getApplications = (userid) => {}