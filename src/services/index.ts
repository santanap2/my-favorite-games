import { api } from './api'

import {
  registerUser,
  updateUser,
  getUserByEmail,
  requestLogin,
} from './user.requests'

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
  getGamesFiltered,
  addItemToCart,
  emptyCart,
  getUserCart,
  removeItemFromCart,
}
