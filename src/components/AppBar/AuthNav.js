import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthNav = () => {
  return ( <ul className="list-inline">
  <li className="list-inline-item">
    <NavLink
      to={routes.register}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Регистрация
    </NavLink>
  </li>
  <li className="list-inline-item">
    <NavLink
      to={routes.login}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Логин
    </NavLink>
  </li>
</ul> );
}
 
export default AuthNav;