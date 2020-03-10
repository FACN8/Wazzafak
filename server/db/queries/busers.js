const dbConnection = require('../dbconnection');

/* function returns an array with all the events in
   the database.
   @param cb a callback function
   returns: an array of objects representing events */
module.exports.getBusiness = (businessid, cb) => {
    const query = 'SELECT bname,phone,email,address,city,country,open_days,open_hours,descr' +
        'FROM busers WHERE id=$1;';
    dbConnection.query(query, [businessid], (err, result) => {
        if (err) return cb(err);
        cb(null, result.rows);
    });
}

module.exports.addBusiness = (bname, phone, email, password, address, city, country, open_days, open_hours, descr, cb) => {
    const query = 'INSERT INTO busers (bname, phone, email, password, address, city, country,' +
        'open_days, open_hours, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);';
    dbConnection.query(
        query, [bname, phone, email, password, address, city, country, open_days, open_hours, descr],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.setBusiness = (businessid, bname, phone, email, password, address, city, country, open_days, open_hours, descr, cb) => {
    const query = 'UPDATE busers SET bname=$1, phone=$2, email=$3, password=$4, address=$5, city=$6,' +
        'country=$7, open_days=$8 open_hours=$9 descr=$10 WHERE id=$11;';
    dbConnection.query(
        query, [bname, phone, email, password, address, city, country, open_days, open_hours, descr, businessid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}

module.exports.deleteBusiness = (businessid, cb) => {
    const query = 'DELETE FROM busers WHERE id=$1;';
    dbConnection.query(
        query, [businessid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
}