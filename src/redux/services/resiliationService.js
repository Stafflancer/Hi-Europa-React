import {http} from "../../modules/http";

export const resiliationService = {
    getResiliations,
};

function getResiliations(params) {
    let q = new URLSearchParams(params);
    return http.get('/resiliation?' + q.toString()).then(res => {
        return res
    })
}

