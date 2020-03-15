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

function getProfile(userid) {
    return window
        .fetch(`${corswazzafak}profile?userid=${userid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getMyApplications(userid) {
    return window
        .fetch(`${corswazzafak}my-applications?userid=${userid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-profile', users.addProfile); //test success
// router.post('/edit-profile', users.setProfile); //test success
// router.post('/delete-profile', users.deleteProfile); //test success

module.exports = { getProfile, getMyApplications };