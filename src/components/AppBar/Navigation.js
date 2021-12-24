import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuntheticated }) => {
  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <NavLink
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Главная
        </NavLink>
      </li>
      {isAuntheticated && (
        <li className="list-inline-item">
          <NavLink
            to={routes.contacts}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Контакты
          </NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  isAuntheticated: authSelectors.getAuntheticated(state),
});

export default connect(mapStateToProps)(Navigation);
