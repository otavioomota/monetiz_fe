import React, { useState } from 'react';
import { 
  FiUser, 
  FiCreditCard, 
  FiCalendar, 
  FiLock 
} from 'react-icons/fi'

import monetiz from '../../assets/monetiz.jpg';

import { 
  Container, 
  Header, 
  CardContainer, 
  CardInformations, 
  CardInformationsSecundary 
} from './styles'

function Home(){

  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonthValidity, setCardMonthValidity] = useState('')
  const [cardYearValidity, setCardYearValidity] = useState('')
  const [cvc, setCvc] = useState('')

  return (
   <Container>
      <Header>
        <img src={monetiz} alt='Monetiz'/>
        <h2>Monetiz</h2>
      </Header>

      <CardContainer>
        <CardInformations>
            <span>Informações do cartão de crédito</span>

            <div>
              <FiUser size={18}/>
              <input 
                onChange={e => setCardHolder(e.target.value)}  
                placeholder='Nome no cartão'
                type='text'
              />
            </div>

            <div>
              <FiCreditCard size={18}/>
              <input 
                onChange={e => setCardNumber(e.target.value)}
                placeholder='Número do cartão'
                type='text'
              />
            </div>

            <CardInformationsSecundary>
              <div>
                <FiCalendar size={18}/>
                <input 
                  onChange={e => setCardMonthValidity(e.target.value)}
                  placeholder='Mês'
                  type='text'
                />
              </div>

              <div>
                <FiCalendar size={18}/>
                <input 
                  onChange={e => setCardYearValidity(e.target.value)}
                  placeholder='Ano'
                  type='text'
                />
              </div>

              <div>
                <FiLock size={18}/>
                <input
                  onChange={e => setCvc(e.target.value)} 
                  placeholder='Cvc'
                  type='text'
                />
              </div>
            </CardInformationsSecundary>

        </CardInformations>
      </CardContainer>
   </Container>
  )
}

export default Home;