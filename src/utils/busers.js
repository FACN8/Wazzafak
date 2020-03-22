import axios from "axios";

const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
    headers: {
        'Content-Type': 'application/json',
        'origin': 'x-requested-with'
    }
};

export const getBusiness = (businessid) => {
    return window
        .fetch(`${corswazzafak}business?businessid=${businessid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const getApplicants = (vacancyid) => {
    return window
        .fetch(`${corswazzafak}applicants?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const addBusiness = (bname, phone, email, password, address, city, country, open_days, open_hours, descr) => {
    return axios.post(`https://wazzafak.herokuapp.com/add-business`, { bname, phone, email, password, address, city, country, open_days, open_hours, descr })
        .then(res => res)
        .catch(error => error);
}

export const setBusiness = (id, bname, phone, email, password, address, city, country, open_days, open_hours, descr) => {
    return axios.post(`https://wazzafak.herokuapp.com/edit-business`, { id, bname, phone, email, password, address, city, country, open_days, open_hours, descr })
        .then(res => res)
        .catch(error => error);
}

export const deleteBusiness = (id, password) => {
    return axios.post(`https://wazzafak.herokuapp.com/delete-business`, { id, password })
        .then(res => res)
        .catch(error => error);
}