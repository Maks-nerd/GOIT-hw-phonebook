import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const AppBar = ({ isAuntheticated }) => {
  return (
    <>
      <header className="d-flex justify-content-between mb-5">
        <Navigation />
        {isAuntheticated ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuntheticated: authSelectors.getAuntheticated(state)
})



export default connect(mapStateToProps, null)(AppBar);
