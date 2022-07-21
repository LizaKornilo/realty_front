import { CLOSE_LOGIN_REGISTER_MODAL, OPEN_LOGIN_REGISTER_MODAL, USER_RESET } from './actions'

export const userResetActionCreator = () => {
  return {
    type: USER_RESET
  }
}

export const openLoginRegisterModalActionCreator = () => {
  return {
    type: OPEN_LOGIN_REGISTER_MODAL
  }
}

export const closeLoginRegisterModalActionCreator = () => {
  return {
    type: CLOSE_LOGIN_REGISTER_MODAL
  }
}
