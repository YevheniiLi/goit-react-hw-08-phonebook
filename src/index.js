import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
