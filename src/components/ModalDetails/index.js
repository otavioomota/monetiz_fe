import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

import formatPrice from '../../utils/format';
import translatorUF from '../../utils/translatorUFState';
import translatorStatusCielo from '../../utils/translatorStatusCielo'

import {
  Container,
  Content,
  CloseButton,
  TransactionDetails
}from './styles'

function ModalDetails({
  transaction,
  open,
  handleClose
}){

  if(open){
    const {Street,Number, Complement, ZipCode, City, State} = transaction.Customer.Address;
 
    return (
      <Container>
      <Content>
        <CloseButton onClick={handleClose}>X</CloseButton>

        <TransactionDetails>
          <h4>Detalhes da transação</h4>
          
          <div>
            <span>Dados do Cliente</span>
            <p>Nome: {`${transaction.Customer.Name}`}</p>
          </div>

          <div>
            <span>Endereço</span>
            <p>{`${Street}, ${Number}, ${Complement}, ${ZipCode}, ${City}, ${translatorUF(State)}`}</p>
          </div>

          <div>
            <span>Pagamento</span>
            <p>Preço: {formatPrice(transaction.Payment.Amount)}</p>
            <p>Data da compra: {format(parseISO(transaction.Payment.ReceivedDate), "dd/MM/yyyy 'às' HH:mm")}</p>
            <p>Status: {translatorStatusCielo(transaction.Payment.Status)}</p>
          </div>

          <div>
            <span>Cartão utilizado</span>
            <p>Número do cartão: 1323132131312</p>
            <p>Bandeira: Visa</p>
          </div>
          

        </TransactionDetails>
      </Content>
    </Container>
    )
  }
  else {
    return (<div />)
  }
}

export default ModalDetails;

