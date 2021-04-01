import {http} from "../../modules/http";

export const adminService = {
    get,
    update,
};

function get() {
    return http.get('/me').then(res => {
        return res
    })
}

function update(data) {
    return http.post('/update', data).then(res => {
        return res
    })
}
