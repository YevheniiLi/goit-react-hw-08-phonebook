import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';
import { theme } from './components/styles/theme';
import { store } from './redux/store';
import { persistor } from './redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook/'>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
