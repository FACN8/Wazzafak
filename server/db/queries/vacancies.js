const dbConnection = require('../dbconnection.js');

module.exports.getVacancy = (vacancyid, cb) => {
    const query = `SELECT * FROM vacancies WHERE id=$1;`;

    dbConnection.query(
        query, [vacancyid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.addVacancy = (business_id, title, wage, work_days, work_hours, descr, cb) => {
    const query = `INSERT INTO vacancies (business_id, title, wage, work_days, work_hours, descr) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;

    dbConnection.query(
        query, [business_id, title, wage, work_days, work_hours, descr],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.setVacancy = (id, business_id, title, wage, work_days, work_hours, descr, cb) => {
    const query = `UPDATE vacancies SET business_id = $1, title = $2, wage = $3, work_days = $4, work_hours = $5, descr = $6 WHERE id=$7 RETURNING id;`;

    dbConnection.query(
        query, [business_id, title, wage, work_days, work_hours, descr, id],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.deleteVacancy = (vacancyid, cb) => {
    const helperquery = `DELETE FROM applications WHERE vacancy_id=$1;`;
    dbConnection.query(
        helperquery, [vacancyid],
        (err, res) => {
            if (err) return cb(err);
            const query = `DELETE FROM vacancies WHERE id=$1;`;
            dbConnection.query(
                query, [vacancyid],
                (err, resa) => {
                    if (err) return cb(err);
                    cb(null, res.rowCount + resa.rowCount);
                }
            );
        }
    );
}

module.exports.getVacancies = (cb) => {
    const query = `SELECT * FROM vacancies;`;

    dbConnection.query(
        query,
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}

module.exports.getBVacancies = (businessid, cb) => {
    const query = `SELECT * FROM vacancies WHERE business_id=$1;`;

    dbConnection.query(
        query, [businessid],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res.rows);
        }
    );
}