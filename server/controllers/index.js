const { Router } = require('express');
const router = Router();

const error = require('./error.js');
const users = require('./users.js');
const busers = require('./busers.js');
const vacancies = require('./vacancies.js');
const applications = require('./applications.js');

//user routes

//authentication...login & register
router.get('/vacancy', vacancies.getVacancy);
router.get('/vacancies', vacancies.getVacancies);

router.get('/business', vacancies.getBusiness);

router.post('/apply', applications.addApplication);

router.get('/profile', users.getProfile);
router.post('/edit-profile', users.setProfile);
router.get('/applications', users.getApplications);

//business user routes

//authentication...blogin & bregister
router.get('/bvacancy', vacancies.getBVacancy);
router.get('/bvacancies', vacancies.getBVacancies);
router.post('/b-add-vacancy', vacancies.addVacancy);
router.post('/b-vacancy-edit', vacancies.setVacancy);
router.post('/b-vacancy-delete', vacancies.deleteVacancy);

router.get('/b-applicant', applications.getApplicant);
router.post('/b-applicant-delete', applications.deleteApplication);

router.use(error.client);
router.use(error.server);

module.exports = router;