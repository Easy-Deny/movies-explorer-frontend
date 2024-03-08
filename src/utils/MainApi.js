class MainApi {
    constructor(props) {
        this.url = props.url
        this.headers = props.headers
        this.checkServerStatus = this.checkServerStatus.bind(this)
    }

    checkServerStatus(res) {
        if (res.ok) {
            return res.json()
        };
        return Promise.reject('произошла ошибка');
    }
}

export const mainApi = new MainApi({
    url: 'http://localhost:3500',
    //url: 'https://api.easy-deny.pr15.nomoredomainsmonster.ru',
    // url: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
        //'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1NzNjYWI5ZTk5MmI1MTQ2ZTZjMjciLCJpYXQiOjE3MDYzOTE4MTAsImV4cCI6MTcwNjk5NjYxMH0.RqsYoAqtq7CTiuB3PyqyeoWu07xSIoLY_t4oif-IL2M'
    }
})
