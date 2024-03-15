import {MOVIES_API} from './const'

class MovieApi {
    constructor(props) {
        this.url = props.url
        this.headers = props.headers
        this.checkServerStatus = this.checkServerStatus.bind(this)
    }
    getAllMovies() {
        return fetch(this.url, {
            method: 'GET',
            headers: this.headers,
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

export const movieApi = new MovieApi({
    url: `${MOVIES_API}/beatfilm-movies`,
    headers: {
       Accept: 'application/json',
    }
})
