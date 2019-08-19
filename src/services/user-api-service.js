import config from '../config'
import TokenService from './token-service';

const UserApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default UserApiService
