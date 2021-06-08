import {http} from "../../modules/http";

export const imaUserService = {
    getUsers,
    getUser,
};

function getUsers(params) {
    let q = new URLSearchParams(params);
    return http.get('/ima-user?' + q.toString()).then(res => {
        return res
    })
}

function getUser(params) {
    return http.get('/ima-user/' + params.id).then(res => {
        return res
    })
}

