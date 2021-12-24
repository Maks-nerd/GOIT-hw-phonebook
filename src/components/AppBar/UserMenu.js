import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ email, name, onLogout }) => {
  return (
    <div className="d-flex align-items-center">
      <span>Welcome {name}!</span>
      <span className="mx-5">{email}</span>
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
