import { api } from './api'

import {
  registerUser,
  updateUser,
  getUserByEmail,
  requestLogin,
} from './user.requests'

import {
  decodeToken,
  removeTokenFromHeaders,
  setTokenToHeaders,
} from './jwt.requests'

import { getGamesFiltered } from './games.requests'

import {
  addItemToCart,
  emptyCart,
  getUserCart,
  removeItemFromCart,
} from './cart.requests'

export {
  api,
  registerUser,
  updateUser,
  getUserByEmail,
  requestLogin,
  decodeToken,
  removeTokenFromHeaders,
  setTokenToHeaders,
  getGamesFiltered,
  addItemToCart,
  emptyCart,
  getUserCart,
  removeItemFromCart,
}
