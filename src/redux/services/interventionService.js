import {http} from "../../modules/http";

export const interventionService = {
    getInterventions,
    getIntervention,
};

function getInterventions(params) {
    let q = new URLSearchParams(params);
    return http.get('/intervention?' + q.toString()).then(res => {
        return res
    })
}

function getIntervention(id) {
    return http.get('/intervention/' + id).then(res => {
        return res
    })
}

