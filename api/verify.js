import { default as google } from 'google-auth-library'
import { default as R } from 'ramda'
import { default as crocks } from 'crocks'

const { Identity } = crocks
const { pathOr, split, nth } = R

export default (CLIENT_ID) => (req, res, next) => {
  const client = new google.OAuth2Client(CLIENT_ID)
  return client.verifyIdToken({
    idToken: extractToken(req),
    audience: CLIENT_ID
  })
    .then(ticket => {
      req.user = ticket.getPayload()
      next()
    })
    .catch(err => next(err))
}
    



function extractToken(req) {
  return Identity(req)
    .map(pathOr('Bearer INVALID', ['headers', 'authorization']))
    .map(split(' '))
    .map(nth(-1))
    .valueOf()
}
