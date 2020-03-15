function getProfile(userid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/profile?userid=${userid}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function getMyApplications(userid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/my-applications?userid=${userid}`)
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