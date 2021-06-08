import {http} from "../../modules/http";

export const resiliationService = {
    getResiliations,
    getResiliation,
};

function getResiliations(params) {
    let q = new URLSearchParams(params);
    return http.get('/resiliation?' + q.toString()).then(res => {
        return res
    })
}

function getResiliation(id) {
    let q = new URLSearchParams(id);
    return http.get('/resiliation/' + id).then(res => {
        return res
    })
}

