import React from 'react'
import Home from './Components/Home';
import { Provider } from 'react-redux';
import Store from './Components/Redux/Store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(Store)

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home></Home>
      </PersistGate>
    </Provider> 
  )
}

export default App
