const API_URL = "http://178.128.190.169:8080"

export function signup(credentials) {
    return fetch(API_URL + '/signup', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const login = (credentials) => {
    return fetch(API_URL + '/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const getCurrentUser = () => {
    const token = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
        if (token)
            resolve({ uwu: 'uwu' })
        else
            reject(null)
    })  
    // return fetch(API_URL + '/logged/user/current', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': token
    //     }
    // })
    //     .then(response => response.json())
}

