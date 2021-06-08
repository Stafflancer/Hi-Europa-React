import {http} from "../../modules/http";

export const residentService = {
    getResidents,
    getResident,
};

function getResidents(params) {
    let q = new URLSearchParams(params);
    return http.get('/resident?' + q.toString()).then(res => {
        return res
    })
}

function getResident(id) {
    return http.get('/resident/' + id).then(res => {
        return res
    })
}

