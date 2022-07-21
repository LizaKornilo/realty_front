import { combineReducers } from 'redux'
import userReducer from './reducers/user.reducer'
import modalsReducer from './reducers/modals.reducer'

export const rootReducer = combineReducers({
  userReducer,
  modalsReducer
})

export type RootState = ReturnType<typeof rootReducer>
