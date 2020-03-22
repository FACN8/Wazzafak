import axios from "axios";

const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
    headers: {
        'Content-Type': 'application/json',
        'origin': 'x-requested-with'
    }
};

export const getVacancy = (vacancyid) => {
    return window
        .fetch(`${corswazzafak}vacancy?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const getVacancies = () => {
    return window
        .fetch(`${corswazzafak}vacancies`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            console.log(res);
            return res;
        })
        .then(res => res.json());
}

export const getBVacancies = (businessid) => {
    return window
        .fetch(`${corswazzafak}bvacancies?businessid=${businessid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const getVacancyApplications = (vacancyid) => {
    return window
        .fetch(`${corswazzafak}vacancy-applications?vacancyid=${vacancyid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const addVacancy = (business_id, title, wage, work_days, work_hours, descr) => {
    return axios.post(`https://wazzafak.herokuapp.com/add-vacancy`, { business_id, title, wage, work_days, work_hours, descr })
        .then(res => res)
        .catch(error => error);
}

export const setVacancy = (id, business_id, title, wage, work_days, work_hours, descr) => {
    return axios.post(`https://wazzafak.herokuapp.com/edit-vacancy`, { id, business_id, title, wage, work_days, work_hours, descr })
        .then(res => res)
        .catch(error => error);
}

export const deleteVacancy = (vacancyid) => {
    return axios.post(`https://wazzafak.herokuapp.com/delete-vacancy`, { vacancyid })
        .then(res => res)
        .catch(error => error);
}
