import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/constants/theme';
import 'styles/index.scss';
// import { Loading } from 'components/Loading';
import { /*persistor,*/ store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
     <BrowserRouter basename="/test-car-rental">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
