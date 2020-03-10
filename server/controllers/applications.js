const applications = require('../db/queries/applications.js');

module.exports.addApplication = (req, res) => {
    //Add application to database (applications TABLE) INPUT USER_ID, VACANCY_ID, MESSAGE
    //userid, vacancyid, message
    applications.addApplication(req.body.userid, req.body.vacancyid, req.body.message, (error, result) => {
        if (error) throw error;

        res.send(result);
    });
};

module.exports.getApplicant = (req, res) => {
    //Get and return the applicant (limited info) INPUT APPLICATION ID
    //applicationid
    applications.getApplicant(req.query.applicationid, (error, result) => {
        if (error) throw error;

        res.send(result);
    });
};

module.exports.deleteApplication = (req, res) => {
    //Delete application, INPUT APPLICATION ID
    //applicationid
    applications.deleteApplication(req.body.applicationid, (error, result) => {
        if (error) throw error;

        res.send(result);
    });
};