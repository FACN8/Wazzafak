import axios from "axios";

const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
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

function getApplicants(vacancyid) {
    return window
        .fetch(`${corswazzafak}applicants?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

function addBusiness(bname, phone, email, password, address, city, country, open_days, open_hours, descr) {
    return axios.post(`https://wazzafak.herokuapp.com/add-business`, { bname, phone, email, password, address, city, country, open_days, open_hours, descr })
        .then(res => res)
        .catch(error => error);
}

function setBusiness(id, bname, phone, email, password, address, city, country, open_days, open_hours, descr) {
    return axios.post(`https://wazzafak.herokuapp.com/edit-business`, { id, bname, phone, email, password, address, city, country, open_days, open_hours, descr })
        .then(res => res)
        .catch(error => error);
}

function deleteBusiness(id, password) {
    return axios.post(`https://wazzafak.herokuapp.com/delete-business`, { id, password })
        .then(res => res)
        .catch(error => error);
}

module.exports = { getBusiness, getApplicants, addBusiness, setBusiness, deleteBusiness };