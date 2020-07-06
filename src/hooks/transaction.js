import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

const TransactionContext = createContext();


function TransactionProvider({ children }){

  const handleCheckout = useCallback(async( data) => {
    try {
      await api.post('/checkout', data);
    } catch(err){
      throw new Error(err)
    }

  },[])



  return (
    <TransactionContext.Provider value={{ handleCheckout }}>
      {children}
    </TransactionContext.Provider>
  )
}

function useTransaction() {
  const context = useContext(TransactionContext);

  if(!context){
    throw new Error('useTransaction must be used within a TransactionProvider');
  }

  return context;
}

export { TransactionProvider, useTransaction};