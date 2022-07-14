import React from 'react'
import { Link } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../../pages/consts'

const LoginForm = () => {
  return (
      <div>
          LoginForm
          <Link to={REGISTRATION_ROUTE}>go to registration page</Link>
      </div>
  )
}

export default LoginForm
