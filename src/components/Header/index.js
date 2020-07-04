import React from 'react';
import { GrTransaction } from 'react-icons/gr'
import { Link } from 'react-router-dom';

import monetiz from '../../assets/monetiz.jpg';

import { Container, Logo, Tools } from './styles'

function Header(){
  return (
    <Container>
      <Logo>
        <img src={monetiz} alt='Monetiz'/>
        <h2>Monetiz</h2>
      </Logo>
      <Tools>
        <Link to='/transactions'>
          <GrTransaction size={18}/>
          <span >Transferências</span>
        </Link>
      </Tools>
  </Container>
  )
}


export default Header;