const dbConnection = require('../dbconnection');

/* an sql query that returns an array with an element of a business
   user profile from business users list.
   @param businessid the id of the business user
   @param cb a callback function
   returns: an array with one object representing a business user profile */
module.exports.getBusiness = (businessid, cb) => {
    const query = `SELECT id,bname,phone,email,address,city,country,open_days,open_hours,descr 
    FROM busers WHERE id=$1;`;
    dbConnection.query(query, [businessid], (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
}

module.exports.addBusiness = (bname, phone, email, password, address, city, country, open_days, open_hours, descr, cb) => {
    const query = `INSERT INTO busers (bname, phone, email, password, address, city, country, open_days,
        open_hours, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;`;
    dbConnection.query(
        query, [bname, phone, email, password, address, city, country, open_days, open_hours, descr],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.setBusiness = (businessid, bname, phone, email, password, address, city, country, open_days, open_hours, descr, cb) => {
    const query = `UPDATE busers SET bname=$1, phone=$2, email=$3, password=$4, address=$5, city=$6,
        country=$7, open_days=$8, open_hours=$9, descr=$10 WHERE id=$11 RETURNING id;`;
    dbConnection.query(
        query, [bname, phone, email, password, address, city, country, open_days, open_hours, descr, businessid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.deleteBusiness = (businessid, password, cb) => {
    const query = `DELETE FROM busers WHERE id=$1 AND password=$2;`;
    dbConnection.query(
        query, [businessid, password],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rowCount);
        }
    );
}