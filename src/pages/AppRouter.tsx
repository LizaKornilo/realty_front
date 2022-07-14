import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { adminRoutes, ownerRoutes, publicRoutes, userRoutes } from './routes'
import { Roles } from '../services/openapi'

const AppRouter = () => {
  const role = Roles.USER || Roles.OWNER || Roles.ADMIN

  return (
      <Switch>
          {
              publicRoutes.map(({ path, component }) =>
              <Route key={path} path={path} component={component} exact/>
              )
          }
          {
              role === Roles.USER &&
              userRoutes.map(({ path, component }) =>
                  <Route key={path} path={path} component={component} exact/>
              )
          }
           {
              role === Roles.OWNER &&
              ownerRoutes.map(({ path, component }) =>
                  <Route key={path} path={path} component={component} exact/>
              )
           }
           {
              role === Roles.ADMIN &&
              adminRoutes.map(({ path, component }) =>
                  <Route key={path} path={path} component={component} exact/>
              )
           }
      </Switch>
  )
}

export default AppRouter
