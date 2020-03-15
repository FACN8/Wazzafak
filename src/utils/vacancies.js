const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
    headers: {
        'Content-Type': 'application/json',
        'origin': 'x-requested-with'
    }
};
const postheaders = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'origin': 'x-requested-with'
    }
};


function getVacancy(vacancyid) {
    return window
        .fetch(corswazzafak + `vacancy?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getVacancies() {
    return window
        .fetch(corswazzafak + `vacancies`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            console.log(res);
            return res;
        })
        .then(res => res.json());
}

function getBvacancies(businessid) {
    return window
        .fetch(corswazzafak + `bvacancies?businessid=${businessid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getVacancyApplications(vacancyid) {
    return window
        .fetch(corswazzafak + `vacancy-applications?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-vacancy', vacancies.addVacancy); //test success

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *client
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
//   }

//   postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });
// router.post('/edit-vacancy', vacancies.setVacancy); //test success
// router.post('/delete-vacancy', vacancies.deleteVacancy); //tested success

module.exports = { getVacancy, getVacancies, getBvacancies, getVacancyApplications };