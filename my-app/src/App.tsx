import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CMainRouter from './components/CMainRouter';


function App() {
  return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {/* <CBootstrap> */}
                    {/* <CThemeProvider> */}
                        <CMainRouter />
                    {/* </CThemeProvider> */}
                {/* </CBootstrap> */}
            </PersistGate>
        </Provider>
  );
}

export default App;
