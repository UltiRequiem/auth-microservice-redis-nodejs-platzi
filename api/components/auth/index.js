import jwt from 'jsonwebtoken';
import config from '../../../config.js';

const { secret } = config.jwt;

export function sign(data) {
  return jwt.sign(data, secret);
}

export function verify(token) {
  return jwt.verify(token, secret);
}

export function getToken(auth) {
  if (!auth) throw new Error('No viene token', 401);
  if (!auth.includes('Bearer ')) throw new Error('Formato invalido', 401);
  return auth.replace('Bearer ', '');
}

export function decodeHeader(request) {
  request.user = verify(getToken(request.headers.authorization || ''));
  return request.user;
}

export const check = {
  own(request, owner) {
    const decoded = decodeHeader(request);
    if (decoded.id !== owner) throw new Error('No puedes hacer esto', 401);
  },

  // eslint-disable-next-line no-unused-vars
  logged(_request, _owner) {},
};
