const { Router } = require('express');
const router = Router();

const error = require('./error.js');
const users = require('./users.js');
const busers = require('./busers.js');
const vacancies = require('./vacancies.js');
const applications = require('./applications.js');

router.get('/ping', (req, res) => {
    res.send('Pong');
});

//authentication...login & register
//user manipulation requests
router.get('/profile', users.getProfile); //test success
router.post('/add-profile', users.addProfile); //test success
router.post('/edit-profile', users.setProfile); //test success
router.post('/delete-profile', users.deleteProfile); //test success
router.get('/my-applications', users.getUserApplications); //test success

//authentication...blogin & bregister
//business user manipulation requests
router.get('/business', busers.getBusiness); //test success
router.post('/add-business', busers.addBusiness); //test success
router.post('/edit-business', busers.setBusiness); //test success
router.post('/delete-business', busers.deleteBusiness); //test success

//vacancies manipulations
router.get('/vacancy', vacancies.getVacancy); //test success
router.get('/vacancies', vacancies.getVacancies); //test success
router.get('/bvacancies', vacancies.getBVacancies); //test success
router.post('/add-vacancy', vacancies.addVacancy); //test success
router.post('/edit-vacancy', vacancies.setVacancy); //test success
router.post('/delete-vacancy', vacancies.deleteVacancy); //not yet tested
router.get('/vacancy-applications', applications.getVacancyApplications); //not yet tested

//applications manipulations
router.get('/applicant', applications.getApplicant); //test success
router.post('/add-application', applications.addApplication); //test success
router.post('/delete-application', applications.deleteApplication); //test success
//edit-application

router.use(error.client);
router.use(error.server);

module.exports = router;