const busers = require('../db/queries/busers.js');

const cb = (error, result) => {
    if (error) throw error;

    return result;
};

module.exports.getBusiness = (req, res) => {
    //Returns business data INPUT vacancy id
    busers.getBusiness(req.body.vacancyid, cb);
};