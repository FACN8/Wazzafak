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

function getApplicant(applicationid) {
    return window
        .fetch(`${corswazzafak}applicant?applicationid=${applicationid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-application', applications.addApplication); //test success
// router.post('/delete-application', applications.deleteApplication); //test success

module.exports = { getApplicant };