// Модули
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Компоненты
import AppBar from './components/AppBar';
import routes from './routes';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

// Стили
import './App.css';

// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import PhonebookView from './components/Phonebook';

// Шаблоны динамической загрузки
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const PhonebookView = lazy(() =>
  import('./components/Phonebook' /* webpackChunkName: "phonebook-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback="Загружаем...">
          <Switch>
            <PublicRoute path={routes.home} exact component={HomeView} />
            <PrivateRoute
              path={routes.contacts}
              component={PhonebookView}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.register}
              component={RegisterView}
              redirectTo={routes.contacts}
              restricted
            />
            <PublicRoute
              path={routes.login}
              component={LoginView}
              redirectTo={routes.contacts}
              restricted
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
