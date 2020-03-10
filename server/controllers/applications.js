const applications = require('../db/queries/applications.js');

const cb = (error, result) => {
    if (error) throw error;

    return result;
};

module.exports.addApplication = (req, res) => {
    //Add application to database (applications TABLE) INPUT USER_ID, VACANCY_ID, MESSAGE
    //userid, vacancyid, message
    applications.addApplication(req.body.userid, req.body.vacancyid, req.body.message, cb);
};

module.exports.getApplicant = (req, res) => {
    //Get and return the applicant (limited info) INPUT APPLICATION ID
    //applicationid
    applications.getApplicant(req.body.applicationid, cb);
};

module.exports.deleteApplication = (req, res) => {
    //Delete application, INPUT APPLICATION ID
    //applicationid
    applications.deleteApplication(req.body.applicationid);
};