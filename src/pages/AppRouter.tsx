import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { publicRoutes, userRoutes, ownerRoutes, adminRoutes } from './routes'
import { Roles } from '../services/openapi'
import NotFoundPage from './not-found/not-found.page'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { HOME_ROUTE } from './consts'

const AppRouter = () => {
  const role = useSelector((state: RootState) => state.userReducer.userTokenPayload?.role.value)

  return (
      <Switch>
          <Route exact path="/">
              <Redirect to={HOME_ROUTE}/>
          </Route>
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
          <Route path="*" component={NotFoundPage} />
      </Switch>
  )
}

export default AppRouter
