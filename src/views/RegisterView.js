import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1>Регистрация</h1>
        <form onSubmit={this.onSubmit} autoComplete="off">
          <label className="d-block mb-3">
            <h5>Введите имя:</h5>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </label>
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
          <input type="submit" value="Зарегистрироваться" />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
}


export default connect(null, mapDispatchToProps)(RegisterView);
