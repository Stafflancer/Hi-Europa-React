import {http} from "../../modules/http";

export const contractService = {
    getContract,
    getContracts,
};

function getContracts(params) {
    let q = new URLSearchParams(params);
    return http.get('/contract?' + q.toString()).then(res => {
        return res
    })
}


function getContract(id) {
    let q = new URLSearchParams(id);
    return http.get('/contract/' + id).then(res => {
        return res
    })
}

