import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from 'components/redux/store';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
