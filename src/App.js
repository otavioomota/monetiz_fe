import React from 'react';
import {  BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { TransactionProvider } from './hooks/transaction'

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <ToastContainer />
     <TransactionProvider>
        <Routes />
     </TransactionProvider>

    </BrowserRouter>
  );
}

export default App;
