import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  isAuntheticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuntheticated && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  isAuntheticated: authSelectors.getAuntheticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
