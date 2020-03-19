import axios from "axios";

const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
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

function addApplication(userid, vacancyid, message) {
    return axios.post(`${corswazzafak}add-application`, { userid, vacancyid, message })
        .then(res => res)
        .catch(error => error);
}

function deleteApplication(applicationid) {
    return axios.post(`https://wazzafak.herokuapp.com/delete-application`, { applicationid })
        .then(res => res)
        .catch(error => error);
}

function getVacancyApplications(vacancyid) {
    return window
        .fetch(`${corswazzafak}vacancy-applications?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export default {
    getVacancyApplications,
    getApplicant,
    addApplication,
    deleteApplication
};