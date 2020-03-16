const applications = require('../db/queries/applications.js');

module.exports.addApplication = (req, res) => {
    //Add application to database (applications TABLE) INPUT USER_ID, VACANCY_ID, MESSAGE
    //userid, vacancyid, message
    console.log(req.body)
    console.log(req.query)
    applications.addApplication(req.body.userid, req.body.vacancyid, req.body.message, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
};

module.exports.getApplicant = (req, res) => {
    //Get and return the applicant (limited info) INPUT APPLICATION ID
    //applicationid
    applications.getApplicant(req.query.applicationid, (error, result) => {
        if (error) throw error;

        res.json(result);
    });
};

module.exports.deleteApplication = (req, res) => {
    //Delete application, INPUT APPLICATION ID
    //applicationid
    applications.deleteApplication(req.body.applicationid, (error, result) => {
        if (error) throw error;

        res.json(result);
    });
};

module.exports.getVacancyApplications = (req, res) => {
    //Get and return all applications of this user INPUT user id
    //userid
    applications.getVacancyApplications(req.query.vacancyid, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

module.exports.getVacancyApplicants = (req, res) => {
    applications.getVacancyApplications(req.query.vacancyid, (err, result) => {
        if (err) throw err;

        let response = [];

        result.map(application => {

            applications.getApplicant(application.user_id, (error, result1) => {
                if (error) throw error;

                result1.message = application.message;

                response.push(result1);
            });

        });

        res.json(response);
    });
}




