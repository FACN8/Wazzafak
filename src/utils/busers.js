function getBusiness(businessid) {
    return window
        .fetch(`https://wazzafak.herokuapp.com/business?businessid=${businessid}`)
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