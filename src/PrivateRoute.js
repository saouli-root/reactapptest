import React ,{ useContext } from 'react'
import { AuthContext } from './auth/AuthProvider'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({children,...rest}) {
    const {user}= useContext(AuthContext)
       return(
        <Route
          {...rest}
          render={
            ({ location }) => (
             user
                ? (
                  children
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: location }
                    }}
                  />
              ))
           }
        />
    )
}
