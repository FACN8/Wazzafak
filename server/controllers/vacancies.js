const vacancies = require('../db/queries/vacancies.js');

const cb = (error, result) => {
    if (error) throw error;

    return result;
};

module.exports.getVacancy = (req, res) => {
    //Returns vacancy data INPUT id
    vacancies.getVacancy(req.body.vacancyid, cb);
};

module.exports.getVacancies = (req, res) => {
    //Returns all vacancies (limited info)
    vacancies.getVacancies(cb);
};

module.exports.getBVacancy = (req, res) => {
    //Returns vacancy information for a business user interface
    vacancies.getBVacancy(req.body.vacancyid, cb);
};

module.exports.getBVacancies = (req, res) => {
    //Returns all vacancies created by a business user INPUT buser id
    vacancies.getBVacancies(cb);
};

module.exports.addVacancy = (req, res) => {
    //Inserts new vacancy to database INPUT all vanacy info
    //business_id, title, wage, work_days, work_hours, descr
    vacancies.addVacancy(
        req.body.business_id,
        req.body.title,
        req.body.wage,
        req.body.work_days,
        req.body.work_hours,
        req.body.descr,
        cb
    );
};

module.exports.setVacancy = (req, res) => {
    //Edits vacancy data INPUT all new data
    //business_id, title, wage, work_days, work_hours, descr
    vacancies.setVacancy(
        req.body.business_id,
        req.body.title,
        req.body.wage,
        req.body.work_days,
        req.body.work_hours,
        req.body.descr,
        cb
    );
};

module.exports.deleteVacancy = (req, res) => {
    //Deletes vacancy from database INPUT vacancy id
    //vacencyid
    vacancies.deleteVacancy(req.body.vacancyid, cb);
};
