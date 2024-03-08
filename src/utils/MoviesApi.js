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
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
       Accept: 'application/json',
      // 'content-type': 'text/html',
    }
})
