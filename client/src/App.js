import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Course from './pages/course';
import NotFound from './pages/notFound';
import { isAuthenticated } from './utils/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Login } />
      <Route path="/logout" component={ Logout } />
      <PrivateRoute exact path="/course" component={ Course } />
      <Route path="/*" component={ NotFound } />
    </Switch>
  </div>
);

export default App;
