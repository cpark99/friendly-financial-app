import config from '../config'
import TokenService from './token-service';

const ProfileApiService = {
  getProfiles() {
    return fetch(`${config.API_ENDPOINT}/profiles`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getProfile(profileId) {
    return fetch(`${config.API_ENDPOINT}/profiles/${profileId}`, {
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
  // getProfileReviews(profileId) {
  //   return fetch(`${config.API_ENDPOINT}/profiles/${profileId}/reviews`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  postProfile(email, name, phone, life_insurance_value, get_email, get_call, get_newsletter) {
    return fetch(`${config.API_ENDPOINT}/profiles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        email: email,
        name,
        phone,
        life_insurance_value,
        get_email,
        get_call,
        get_newsletter
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ProfileApiService
