import { getTokenPayload, ITokenPayload } from '../../api/token.service'
import { USER_RESET } from '../actions'

interface IState {
  userTokenPayload: ITokenPayload | null,
}

const initialState: IState = {
  userTokenPayload: getTokenPayload()
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case USER_RESET:
      return { ...state, userTokenPayload: getTokenPayload() }
    default: return state
  }
}
