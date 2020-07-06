import React, { useState, useCallback, useEffect } from 'react';
import creditCardType from 'credit-card-type';
import { 
  FiSearch,
  FiDollarSign,
  FiUser, 
  FiCreditCard, 
  FiCalendar, 
  FiLock 
} from 'react-icons/fi';

import { toast } from 'react-toastify';

import api from '../../services/api';
import translatorUF from '../../utils/translatorUFState';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';

import { useTransaction  } from '../../hooks/transaction'

import { 
  Container,
  UserInformations,
  AddressContainer,
  Cep, 
  CardContainer, 
  CardInformations, 
  CardInformationsSecundary 
} from './styles'


function Home(){

  const { handleCheckout } = useTransaction()

  const [userName, setUserName] = useState('');
  const [price, setPrice] = useState('');

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [additional, setAdditional] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [stateInitials, setStateInitials] = useState('')

  const [fieldLoaded, setFieldLoaded] = useState(false);

  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonthValidity, setCardMonthValidity] = useState('')
  const [cardYearValidity, setCardYearValidity] = useState('')
  const [cvc, setCvc] = useState('')
  const [cardBrand, setCardBrand ] = useState('');
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    async function loadingCep() {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json`);
      
      setStreet(response.data.logradouro);
      setNeighborhood(response.data.bairro);
      setCity(response.data.localidade);
      setState(translatorUF(response.data.uf));
      setStateInitials(response.data.uf);

      setFieldLoaded(true);
    }

    if(cep.length >= 8){
      loadingCep();
    }
  },[cep]);

  const handleSubmit = useCallback(async () => {
    const data = {
      address: {
        street,
        number,
        neighborhood,
        zip_code: cep,
        city,
        state: stateInitials,
        additional
      },
      user:{
        name: userName
      },
      cardOwnerData: {
        name: cardHolder,
        email:"compradorteste@teste.com",
        birthdate:"1991-01-02"
      },
      creditCardData: {
        cc_number: cardNumber,
        cc_holder: cardHolder,
        cc_validity: `${cardMonthValidity}/${cardYearValidity}`,
        cc_cvc: cvc,
        cc_brand: cardBrand,
        price: Number(price),
      }
    }

    try {
      await handleCheckout(data);
      toast.success('Transação realizada com sucesso !')
    } catch(err){
      toast.error('Opa, ocorreu algum erro. Tente novamente !')
    }

  }, [additional, cardBrand, cardHolder, cardMonthValidity, cardNumber, cardYearValidity, cep, city, cvc, handleCheckout, neighborhood, number, price, stateInitials, street, userName])


  const handleCardFlip = useCallback(() => {
    setFlipped(!flipped);
  },[flipped])

  const handleCardBrand = useCallback(() => {
    if(cardNumber.length >= 4){
      const brand = creditCardType(cardNumber);
      setCardBrand(brand[0].niceType.toLowerCase())
    }
  }, [cardNumber]);

  const handleCardNumber = useCallback((cardNumber) => {
    
    setCardNumber(cardNumber);
    handleCardBrand();
  },[setCardNumber, handleCardBrand])

  return (
   <Container>

      <Header />
      
      <UserInformations>
        <div>
          <FiUser size={18} color='#8A2BE2'/>
          <input 
            onChange={e => setUserName(e.target.value)}
            placeholder='Seu nome'
            type='text'
          />
        </div>

        <div>
          <FiDollarSign size={18} color='green'/>
          <input 
            onChange={e => setPrice(e.target.value)}
            value={price}
            placeholder='Valor total'
            type='text'
          />
        </div>
      </UserInformations>
      
      <AddressContainer>
          <Cep>
            <input 
              onChange={e => setCep(e.target.value)}
              placeholder='CEP'
              type='text'
            />
            <FiSearch size={18}/>
          </Cep>

          <div>
            <input 
              onChange={e => setStreet(e.target.value)}
              value={street}
              disabled={fieldLoaded}
              placeholder='Rua'
              style={{flex: 1}}
              type='text'
            />

            <input 
              onChange={e => setNumber(e.target.value)}
              value={number}
              placeholder='Número'
              type='text'
            />
          </div>

           <div>
            <input 
              onChange={e => setNeighborhood(e.target.value)}
              value={neighborhood}
              disabled={fieldLoaded}
              o
              placeholder='Bairro'
              size='small'
              type='text'
            />

            <input 
              onChange={e => setAdditional(e.target.value)}
              value={additional}
              placeholder='Complemento'
              type='text'
            />
           </div>

           <div>
            <input 
              onChange={e => setCity(e.target.value)}
              value={city}
              disabled={fieldLoaded}
              placeholder='Cidade'
              type='text'
            />

            <input 
              onChange={e => setState(e.target.value)}
              value={state}
              disabled={fieldLoaded}
              placeholder='Estado'
              small
              type='text'
            />
           </div>
      </AddressContainer>

      <CardContainer>
        <CreditCard 
           cardHolder={cardHolder}
           cardNumber={cardNumber}
           cvc={cvc}
           brand={cardBrand}
           month={cardMonthValidity}
           year={cardYearValidity}
           flipped={flipped}
        />
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
                onChange={e => handleCardNumber(e.target.value)}
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
                  placeholder='CVC'
                  type='text'
                  onFocus={handleCardFlip}
                  onBlur={handleCardFlip}
                />
              </div>
            </CardInformationsSecundary>

        </CardInformations>
      </CardContainer>

      <button 
        type='button'
        onClick={handleSubmit}
      >
        Confirmar
      </button>
   </Container>
  )
}

export default Home;