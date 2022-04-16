import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useFirebase();
  if (isLoading) {
    return <h1>Loading.........</h1>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;