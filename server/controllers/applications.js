const applications = require('../db/queries/applications.js');

module.exports.addApplication = (req, res) => {
    //Add application to database (applications TABLE) INPUT USER_ID, VACANCY_ID, MESSAGE
    //userid, vacancyid, message
    console.log(req.body)
    console.log(req.query)
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

module.exports.getVacancyApplications = (req, res) => {
    //Get and return all applications of this user INPUT user id
    //userid
    applications.getVacancyApplications(req.query.vacancyid, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};