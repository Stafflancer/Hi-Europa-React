import {http} from "../../modules/http";

export const quotationService = {
    getQuotations,
    getQuotation,
};

function getQuotations(params) {
    let q = new URLSearchParams(params);
    return http.get('/quotation?' + q.toString()).then(res => {
        return res
    })
}

function getQuotation(id) {
    return http.get('/quotation/' + id).then(res => {
        return res
    })
}

