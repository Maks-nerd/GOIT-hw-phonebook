import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({
  component: Component,
  isAuntheticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuntheticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuntheticated: authSelectors.getAuntheticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
