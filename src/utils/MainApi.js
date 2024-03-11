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
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('currentUser', JSON.stringify({ name: data.name, email: data.email }));
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

    checkServerStatus(res) {
        if (res.ok) {
            return res.json()
        };
        return Promise.reject('произошла ошибка');
    }
}

export const mainApi = new MainApi({
    url: 'https://api.easydeny.nomoredomainswork.ru',
    //url: 'http://localhost:3500',
    headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
    }
})
