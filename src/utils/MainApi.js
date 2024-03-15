import { MAIN_API } from "./const"

class MainApi {
    constructor(props) {
        this.url = props.url
        this.headers = props.headers
        this.checkServerStatus = this.checkServerStatus.bind(this)
    }
    checkToken(token) {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
                //'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => this.checkServerStatus(res))
            .then(data => {
                //console.log(data);
                return data
            })
    }

    registration(name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ name: name, email: email, password: password })
        })
            .then((res) => { return this.checkServerStatus(res) })
    }

    login(email, password) {
        //console.log({email, password})
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email, password: password
            })
        })
            .then((res => this.checkServerStatus(res)))
            .then((data) => {
                //console.log(data);
                if (data.token) {
                    
                    return data;
                }
            })
    };

    editProfile({name , email}) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ name, email})
        })
            .then((res) => { return this.checkServerStatus(res) })
    }

    getAllLikes() {
        return fetch(`${this.url}/movies`, {
            method: 'GET',
            headers: this.headers,
        })
            .then((res) => { return this.checkServerStatus(res) })
    }

    addLike(card) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(card)
        })
            .then((res) => { return this.checkServerStatus(res) })
    }
    deleteLike(id) {
        return fetch(`${this.url}/movies/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then((res) => { return this.checkServerStatus(res) })
    }

    checkServerStatus(res) {
        if (res.ok) {
            return res.json()
        };
        return Promise.reject('произошла ошибка');
    }
}

export const mainApi = new MainApi({
    url: MAIN_API,
    //url: 'http://localhost:3500',
    headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
    }
})
