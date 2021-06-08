import {http} from "../../modules/http";

export const adminService = {
    get,
    update,
    create,
    getUsers,
    getUser,
    deleteUser,
};

function getUsers() {
    return http.get('/admin').then(res => {
        return res
    })
}

function getUser(id) {
    return http.get('/admin/' + id).then(res => {
        return res
    })
}

function get() {
    return http.get('/me').then(res => {
        return res
    })
}

function create(data) {
    return http.post('/admin', data).then(res => {
        return res
    })
}

function update(data) {
    return http.put('/admin/' + data.id, data.data).then(res => {
        return res
    })
}

function deleteUser(id) {
    return http.delete('/admin/' + id).then(res => {
        return res
    })
}
