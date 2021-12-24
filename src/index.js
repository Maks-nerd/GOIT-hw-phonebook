// Модули
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import mainstore from './redux/store';

// Компоненты
import App from './App';
import Container from './components/Container/Container';

// Стили
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainstore.store}>
      <PersistGate loading={null} persistor={mainstore.persistor}>
      <Container>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Container>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
