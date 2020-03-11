const vacancies = require('../db/queries/vacancies.js');

module.exports.getVacancy = (req, res) => {
    //Returns vacancy data INPUT id
    vacancies.getVacancy(req.query.vacancyid, (error, result) => {
        if (error) throw error;

        res.json(result);
    });
};

module.exports.getVacancies = (req, res) => {
    //Returns all vacancies (limited info)
    vacancies.getVacancies((error, result) => {
        if (error) throw error;

        res.json(result);
    });
};

module.exports.getBVacancies = (req, res) => {
    //Returns all vacancies created by a business user INPUT buser id
    vacancies.getBVacancies(req.query.businessid, (error, result) => {
        if (error) throw error;

        res.json(result);
    });
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
        (error, result) => {
            if (error) throw error;

            res.json(result);
        }
    );
};

module.exports.setVacancy = (req, res) => {
    //Edits vacancy data INPUT all new data
    //business_id, title, wage, work_days, work_hours, descr
    vacancies.setVacancy(
        req.body.id,
        req.body.business_id,
        req.body.title,
        req.body.wage,
        req.body.work_days,
        req.body.work_hours,
        req.body.descr,
        (error, result) => {
            if (error) throw error;

            res.json(result);
        }
    );
};

module.exports.deleteVacancy = (req, res) => {
    //Deletes vacancy from database INPUT vacancy id
    //vacencyid
    vacancies.deleteVacancy(req.body.vacancyid, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
};