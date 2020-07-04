import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;


`
export const TransactionsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;
    color: #8A2BE2;
    transition: color 0.2s;

    svg {
      margin-right: 10px;
      color: #8A2BE2;
    }

    &:hover {
      color: ${shade(0.2, '#8A2BE2')}
    }

    &:visited {
      color: #8A2BE2;
    }
  }
`

export const TransactionsContainer = styled.table`
  width:100%;
  max-width: 800px;
  margin-top: 100px;

  tr {
    margin: 0 auto;
    td {
      padding: 10px;
    }
    & + tr {
      cursor: pointer;
    }
  }

`