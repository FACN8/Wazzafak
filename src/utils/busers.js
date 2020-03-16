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

function getBusiness(businessid) {
    return window
        .fetch(`${corswazzafak}business?businessid=${businessid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

// router.post('/add-business', busers.addBusiness); //test success
// router.post('/edit-business', busers.setBusiness); //test success
// router.post('/delete-business', busers.deleteBusiness); //test success

module.exports = { getBusiness };