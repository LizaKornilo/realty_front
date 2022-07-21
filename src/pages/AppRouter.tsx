import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Roles } from '../services/openapi'
import NotFoundPage from './not-found/not-found.page'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { ADMIN_ROUTE, DWELLING_ROUTE, DWELLINGS_ROUTE, NOT_FOUND_ROUTE, OWNER_ROUTE, USER_ROUTE } from './consts'
import NavBar from '../components/navbar/NavBar'
import DwellingsPage from './dwellings/dwellings.page'
import DwellingPage from './dwelling/dwelling.page'
import UserPage from './user/user.page'
import OwnerPage from './owner/owner.page'
import AdminPage from './admin/admin.page'

const AppRouter = () => {
  const role = useSelector((state: RootState) => state.userReducer.userTokenPayload?.role.value)

  return (
      <Switch>
          <div>
              <NavBar />
              <Route exact path={DWELLINGS_ROUTE} component={DwellingsPage} />
              <Route exact path={DWELLING_ROUTE + '/:id'} component={DwellingPage} />
              {
                  role === Roles.USER &&
                  <Route exact path={USER_ROUTE} component={UserPage} />
              }
              {
                  role === Roles.OWNER &&
                  <Route exact path={OWNER_ROUTE} component={OwnerPage} />
              }
              {
                  role === Roles.ADMIN &&
                  <Route exact path={ADMIN_ROUTE} component={AdminPage} />
              }
              <Route path={NOT_FOUND_ROUTE} component={NotFoundPage} />
              <Redirect to={NOT_FOUND_ROUTE} />
              <Route exact path="/">
                  <Redirect to={DWELLINGS_ROUTE}/>
              </Route>
          </div>
      </Switch>
  )
}

export default AppRouter
