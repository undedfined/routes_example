export const login = (credentials) => {

}

export const signup = (credentials) => {
    return fetch('http://localhost:8080/signup', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}