import React from 'react'
import RegistrationForm from '../../components/auth-components/registration-form'
import LoginForm from '../../components/auth-components/login-form'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../consts'

const AuthPage = () => {
  const pathname = useLocation().pathname

  return (
      <div>
          AuthPage
          {
              pathname === REGISTRATION_ROUTE && <RegistrationForm/>
          }
          {
              pathname === LOGIN_ROUTE && <LoginForm/>
          }
      </div>
  )
}

export default AuthPage
