import React from 'react';
import axios from 'axios';

const Logout = (props) => {
  const csrf = localStorage.getItem('csrf');
  const logout = axios.create({
    withCredentials: true,
    headers: {
      'X-CSRF-TOKEN': csrf
    }
  });
  logout.delete('/auth/logout')
    .then(resp => {
      localStorage.removeItem('csrf');
      localStorage.removeItem('isAuthenticated');
      props.history.push('/');
    })
    .catch(error => console.log(error));
    return null;
};

export default Logout;