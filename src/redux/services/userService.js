import {http} from "../../modules/http";

export const userService = {
    getUsers,
    updateUser,
    deleteUser,
    editUser,
    createUser,
};

function getUsers(params) {
    let q = new URLSearchParams(params);
    return http.get('/user?' + q.toString()).then(res => {
        return res
    })
}

function deleteUser(params) {
    return http.delete('/user/' + params.id).then(res => {
        return res
    })
}
function editUser(params) {
    return http.get('/user/' + params.id).then(res => {
        return res
    })
}

function updateUser(data) {
    return http.put('/user/' + data.id, data).then(res => {
        return res
    })
}

function createUser(data) {
    return http.post('/user', data).then(res => {
        return res
    })
}

