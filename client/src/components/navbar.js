import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication';

const Navbar = (props) => {
  console.log(props)
  return (
    <nav>
      <Link to="/course">Course</Link>
      {
        isAuthenticated()
        ? <Link to="/logout">Logout</Link>
        : <Link to={{ pathname: "/login", state: { from: props.location } }}>Login</Link>
      }
    </nav>
  );
};

export default withRouter(Navbar);