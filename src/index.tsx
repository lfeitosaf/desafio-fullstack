import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import RoutePages from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './contexts/UserContext';
import { ContactProvider } from './contexts/ContactContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <ContactProvider>
            <RoutePages />
          </ContactProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
