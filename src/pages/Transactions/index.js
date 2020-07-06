import React, { useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns';
import { FiArrowLeft } from 'react-icons/fi'

import Header from '../../components/Header';
import ModalDetails from '../../components/ModalDetails';

import formatPrice from '../../utils/format';
import translatorStatus from '../../utils/translatorStatusCielo';
import api from '../../services/api';



import { Container, TransactionsTitle, TransactionsContainer } from './styles'

function Transactions(){

  const [transactions, setTransactions ] = useState([]);
  const [transactionSelected, setTransactionSelected] = useState({}); 
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadingData(){
      const response = await api.get('/transactions');

      const auxTransactions = response.data.map( transaction => {
        return ({
          ...transaction,
          dateFormatted: format(parseISO(transaction.Payment.ReceivedDate), "dd/MM/yyyy 'às' HH:mm")
        })
      })
      setTransactions(auxTransactions);
    }

    loadingData();
  }, [])

  const handleModal = useCallback((transaction) => {
    setTransactionSelected(transaction);
    setModalOpen(true)
  },[])

  const handleCloseModal = useCallback(() => {
    setModalOpen(false)
  },[])

  return (
   <Container>
      <Header />
      <ModalDetails 
        transaction={transactionSelected}
        open={modalOpen}
        handleClose={handleCloseModal}
        />
      <TransactionsTitle>
        <h2>Histórico de transações</h2>
        <Link to='/'>
          < FiArrowLeft size={18} color='black'/>
          <span>Voltar</span>
        </Link>
      </TransactionsTitle>
      <TransactionsContainer>
        <tr>
          <td>Cliente</td>
          <td>Preço</td>
          <td>Status</td>
          <td>Data</td>
        </tr>

        {transactions.map( (transaction, index) => (
          <tr 
            key={index}
            onClick={() => handleModal(transaction)}  
          >
            <td>{transaction.Customer.Name}</td>
            <td>{formatPrice(transaction.Payment.Amount)}</td>
            <td>{translatorStatus(transaction.Payment.Status)}</td>
            <td>{transaction.dateFormatted}</td>
          </tr>
        ))}

      </TransactionsContainer>
   </Container>
  )
}

export default Transactions;