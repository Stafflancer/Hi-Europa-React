import {http} from "../../modules/http";

export const prospectService = {
    getProspects,
    getProspect,
};

function getProspects(params) {
    let q = new URLSearchParams(params);
    return http.get('/prospect?' + q.toString()).then(res => {
        return res
    })
}

function getProspect(id) {
    return http.get('/prospect/' + id).then(res => {
        return res
    })
}

