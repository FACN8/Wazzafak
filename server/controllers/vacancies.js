module.exports.getVacancy = (req, res) => {
    //Returns vacancy data INPUT id
};

module.exports.getVacancies = (req, res) => {
    //Returns all vacancies (limited info)
};

module.exports.getBusiness = (req, res) => {
    //Returns business data INPUT vacancy id
};

module.exports.getBVacancy = (req, res) => {
    //Returns vacancy information for a business user interface
};

module.exports.getBVacancies = (req, res) => {
    //Returns all vacancies created by a business user INPUT buser id
};

module.exports.addVacancy = (req, res) => {
    //Inserts new vacancy to database INPUT all vanacy info
};

module.exports.setVacancy = (req, res) => {
    //Edits vacancy data INPUT all new data
};

module.exports.deleteVacancy = (req, res) => {
    //Deletes vacancy from database INPUT vacancy id
};
