import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import './services/i18n/i18n.ts'
import allReducer from './stateManagement/reducers/index.ts'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux';

export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(allReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
