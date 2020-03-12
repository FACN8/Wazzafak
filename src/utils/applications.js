function getApplicant(applicationid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/applicant?applicationid=${applicationid}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-application', applications.addApplication); //test success
// router.post('/delete-application', applications.deleteApplication); //test success

module.exports = { getApplicant };