import React from 'react'
import './App.scss'
import AppRouter from './pages/AppRouter'
import { Link } from 'react-router-dom'
import {
  ADMIN_ROUTE,
  DWELLING_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  OWNER_ROUTE,
  REGISTRATION_ROUTE,
  USER_ROUTE
} from './pages/consts'

function App () {
  return (
    <div>
      <Link to={HOME_ROUTE}>HOME</Link>
      <br/>
      <Link to={DWELLING_ROUTE}>DWELLING</Link>
      <br/>
      <Link to={REGISTRATION_ROUTE}>REGISTRATION</Link>
      <br/>
      <Link to={LOGIN_ROUTE}>LOGIN</Link>
      <br/>      <br/>
      <Link to={USER_ROUTE}>USER</Link>
      <br/> <br/>
      <Link to={OWNER_ROUTE}>OWNER</Link>
      <br/> <br/>
      <Link to={ADMIN_ROUTE}>ADMIN</Link>
      <AppRouter/>
    </div>
  )
}

export default App
