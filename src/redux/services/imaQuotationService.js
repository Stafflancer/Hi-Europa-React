import {http} from "../../modules/http";

export const imaQuotationService = {
    getQuotations,
    getQuotation,
};

function getQuotations(params) {
    let q = new URLSearchParams(params);
    return http.get('/ima-quotation?' + q.toString()).then(res => {
        return res
    })
}

function getQuotation(id) {
    return http.get('/ima-quotation/' + id).then(res => {
        return res
    })
}

