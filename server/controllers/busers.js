const busers = require('../db/queries/busers.js');

module.exports.getBusiness = (req, res) => {
    //Get and return business user info (limited; profile purposes) INPUT id
    //businessid
    busers.getBusiness(req.query.businessid, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

module.exports.addBusiness = (req, res) => {
    const { bname, phone, email, password, address, city, country, open_days, open_hours, descr } = req.body;
    busers.addBusiness(bname, phone, email, password, address, city, country, open_days, open_hours, descr,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
};

module.exports.setBusiness = (req, res) => { //EDITS USER DETAILS
    const { id, bname, phone, email, password, address, city, country, open_days, open_hours, descr } = req.body;
    //Edit user info (limited)
    //first_name, last_name, phone, email, year_of_birth, country, bio
    busers.setBusiness(id, bname, phone, email, password, address, city, country, open_days, open_hours, descr,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
};

module.exports.deleteBusiness = (req, res) => { //EDITS USER DETAILS
    const { id, password } = req.body;
    //Edit user info (limited)
    //first_name, last_name, phone, email, year_of_birth, country, bio
    busers.deleteBusiness(id, password,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
};