import {http} from "../../modules/http";

export const quotationService = {
    getQuotations,
};

function getQuotations(params) {
    let q = new URLSearchParams(params);
    return http.get('/quotation?' + q.toString()).then(res => {
        return res
    })
}

