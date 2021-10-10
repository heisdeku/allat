import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ user, component: Component, path, ...rest }) => {  
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? (
          <Component exact {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/cyanide', state: { referer: props.location } }}
          />
        )
      }
    />
  )
}
