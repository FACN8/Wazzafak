const path = require('path');

module.exports.client = (req, res) => {
    res.status(404);
    res.send('Client error ocurred');
};

module.exports.server = (err, req, res, next) => {
    console.log(err.message);
    res.status(500);
    res.send('Server error ocurred');
};