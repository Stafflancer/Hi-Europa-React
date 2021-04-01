import {http} from "../../modules/http";

export const contractService = {
    getContracts,
};

function getContracts(params) {
    let q = new URLSearchParams(params);
    return http.get('/contract?' + q.toString()).then(res => {
        return res
    })
}

