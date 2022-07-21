import { CLOSE_LOGIN_REGISTER_MODAL, OPEN_LOGIN_REGISTER_MODAL } from '../actions'

interface IState {
    loginRegisterModalIsOpen: boolean
}

const initialState: IState = {
  loginRegisterModalIsOpen: false
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_LOGIN_REGISTER_MODAL:
      return { ...state, loginRegisterModalIsOpen: true }
    case CLOSE_LOGIN_REGISTER_MODAL:
      return { ...state, loginRegisterModalIsOpen: false }
    default: return state
  }
}
