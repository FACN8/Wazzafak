import axios from "axios";

const corswazzafak = "https://cors-anywhere.herokuapp.com/https://wazzafak.herokuapp.com/";
const getheaders = {
    headers: {
        'Content-Type': 'application/json',
        'origin': 'x-requested-with'
    }
};

export const getProfile = (userid) => {
    return window
        .fetch(`${corswazzafak}profile?userid=${userid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const getMyApplications = (userid) => {
    return window
        .fetch(`${corswazzafak}my-applications?userid=${userid}`, getheaders)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

export const addProfile = (first_name, last_name, phone, email, password, year_of_birth, country, bio) => {
    return axios.post(`https://wazzafak.herokuapp.com/add-profile`, { first_name, last_name, phone, email, password, year_of_birth, country, bio })
        .then(res => res)
        .catch(error => error);
}

export const setProfile = (id, first_name, last_name, phone, email, password, year_of_birth, country, bio) => {
    return axios.post(`https://wazzafak.herokuapp.com/edit-profile`, { id, first_name, last_name, phone, email, password, year_of_birth, country, bio })
        .then(res => res)
        .catch(error => error);
}

export const deleteProfile = (id, password) => {
    return axios.post(`https://wazzafak.herokuapp.com/delete-profile`, { id, password })
        .then(res => res)
        .catch(error => error);
}
