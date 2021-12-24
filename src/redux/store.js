import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './contacts';
import { authReducer } from './auth';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

const contactsPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const devTools = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(contactsPersistConfig, authReducer),
  },
  middleware,
  devTools,
});

const persistor = persistStore(store);

const mainstore = { store, persistor };

export default mainstore;
