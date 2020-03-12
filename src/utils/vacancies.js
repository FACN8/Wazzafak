function getVacancy(vacancyid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/vacancy?vacancyid=${vacancyid}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getVacancies() {
    return window
        .fetch(`https://wazzafak.herokuapp.com/vacancies`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getBvacancies(businessid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/bvacancies?businessid=${businessid}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getVacancyApplications(vacancyid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/vacancy-applications?vacancyid=${vacancyid}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-vacancy', vacancies.addVacancy); //test success
// router.post('/edit-vacancy', vacancies.setVacancy); //test success
// router.post('/delete-vacancy', vacancies.deleteVacancy); //tested success

module.exports = { getVacancy, getVacancies, getBvacancies, getVacancyApplications };