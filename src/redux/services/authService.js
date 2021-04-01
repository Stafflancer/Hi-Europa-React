import { http } from '../../modules/http'

export const authService = {
    login,
    logout,
};

function login(data) {
    return http.post('/login', data).then(res => {
        return res
    })
}

function logout() {
    return http.get('/logout').then(res => {
        return res
    })
}
