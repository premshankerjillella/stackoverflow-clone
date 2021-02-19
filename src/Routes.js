import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import Header from './components/header/header';
import Login from './components/login/login';
import Questions from './components/questions/questions';
import { useContext } from 'react';
import UserContext from './UserContext'
import UserProfile from './components/userProfile/userProfile';
function NewRoutes() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact={true} path="/login">
            <Login />
          </Route>
          <PrivateRoute exact={true} path="/">
            <Questions />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/questions">
            <Questions />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/users/:id/:username">
            <UserProfile />
          </PrivateRoute>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}
function PrivateRoute({ children, ...rest }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default NewRoutes;