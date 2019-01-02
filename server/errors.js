module.exports = {

  INVALID_EMAIL: {
    status: 400,
    message: 'The email is not in a valid format',
    errorType: 'INVALID_EMAIL'
  },

  EMAIL_ALREADY_EXISTS: {
    status: 400,
    message: 'The specified email already belongs to another user',
    errorType: 'EMAIL_ALREADY_EXISTS'
  },

  USER_NOT_FOUND: {
    status: 404,
    message: 'Could not find a user with the specified ID',
    errorType: 'USER_NOT_FOUND'
  },

  INVALID_LOGIN_OR_PASSWORD: {
    status: 401,
    message: 'The login and/or password are incorrect',
    errorType: 'INVALID_LOGIN_OR_PASSWORD'
  },

  JOB_DOES_NOT_EXIST: {
    status: 404,
    message: 'The job you requested does not exist',
    errorType: 'JOB_DOES_NOT_EXIST'
  }
}
