import HTTP from './Http'

export default {
  signup (credentials) {
    return HTTP().post('/user/signup', credentials)
  },
  signin (credentials) {
    return HTTP().post('/user/signin', credentials)
  }
}
