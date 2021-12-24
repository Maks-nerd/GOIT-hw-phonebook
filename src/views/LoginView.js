import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h1>Авторизация</h1>
        <form onSubmit={this.onSubmit}>
          <label className="d-block mb-3">
            <h5>Введите почту:</h5>
            <input
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </label>
          <label className="d-block mb-3">
            <h5>Введите пароль:</h5>
            <input
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </label>
          <input type="submit" value="Войти" />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login
}


export default connect(null, mapDispatchToProps)(LoginView);
