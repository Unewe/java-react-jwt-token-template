import { API_BASE_URL, ACCESS_TOKEN } from '../constant'

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        )
}

export class SecurityService {
    static login(loginRequest) {
        return request({
            url: API_BASE_URL + "/api/auth/sign-in",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        })
    }

    static signup(signupRequest) {
        return request({
            url: API_BASE_URL + "/api/auth/sign-up",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        })
    }

    static checkUsernameAvailability(username) {
        return request({
            url: API_BASE_URL + "/api/user/checkUsernameAvailability?username=" + username,
            method: 'GET'
        })
    }

    static checkEmailAvailability(email) {
        return request({
            url: API_BASE_URL + "/api/user/checkEmailAvailability?email=" + email,
            method: 'GET'
        })
    }


    static getCurrentUser() {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }

        return request({
            url: API_BASE_URL + "/api/user/current",
            method: 'GET'
        })
    }

    static getUserProfile(username) {
        return request({
            url: API_BASE_URL + "/api/users/" + username,
            method: 'GET'
        })
    }
}
