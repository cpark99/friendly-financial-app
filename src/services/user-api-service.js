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
  updateLifeInsuranceGoal(user_id, user) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}`, {
      method:'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  }
}

export default UserApiService
