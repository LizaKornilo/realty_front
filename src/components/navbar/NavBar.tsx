import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  OWNER_ROUTE,
  REGISTRATION_ROUTE,
  USER_ROUTE
} from '../../pages/consts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { Roles } from '../../services/openapi'
import { removeToken } from '../../api/token.service'
import { USER_RESET } from '../../store/actions'

const NavBar = () => {
  const userTokenPayload = useSelector((state: RootState) => state.userReducer.userTokenPayload)
  const role = useSelector((state: RootState) => state.userReducer.userTokenPayload?.role.value)

  const history = useHistory()
  const dispatch = useDispatch()

  const logOut = () => {
    removeToken()
    dispatch({ type: USER_RESET })
    history.push('/')
  }

  return (
      <div>
          <Link to={HOME_ROUTE}>HOME</Link>

          {
              role === Roles.USER && (
                  <Link to={USER_ROUTE}>USER</Link>
              )
          }
          {
              role === Roles.OWNER && (
                  <Link to={OWNER_ROUTE}>OWNER</Link>
              )
          }
          {
              role === Roles.ADMIN && (
                  <Link to={ADMIN_ROUTE}>ADMIN</Link>
              )
          }

          {
              !userTokenPayload
                ? <>
                    <Link to={REGISTRATION_ROUTE}>SIGN IN</Link>
                    <Link to={LOGIN_ROUTE}>LOG IN</Link>
                  </>
                : <button onClick={() => logOut()}>LOG OUT</button>
          }

      </div>
  )
}

export default React.memo(NavBar)
