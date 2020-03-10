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

//user routes

//authentication...login & register
router.get('/vacancy', vacancies.getVacancy); //test success
router.get('/vacancies', vacancies.getVacancies); //test success

router.get('/business', busers.getBusiness);

router.post('/apply', applications.addApplication); //test success

router.get('/profile', users.getProfile);
router.post('/edit-profile', users.setProfile);
router.get('/applications', users.getUserApplications);

//business user routes

//authentication...blogin & bregister
router.get('/bvacancy', vacancies.getVacancy); //test success
router.get('/bvacancies', vacancies.getBVacancies); //test success
router.post('/b-add-vacancy', vacancies.addVacancy); //test success
router.post('/b-vacancy-edit', vacancies.setVacancy); //test success
// router.post('/b-vacancy-delete', vacancies.deleteVacancy);

router.get('/b-applicant', applications.getApplicant); //test success
router.post('/b-applicant-delete', applications.deleteApplication); //test success

router.use(error.client);
router.use(error.server);

module.exports = router;