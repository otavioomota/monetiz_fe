import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
`

export const Header = styled.header`
  /* background-color: #312E38; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  img {
    height: 56px;
    width: 56px;
  }
`


export const CardContainer = styled.div``
export const CardInformations = styled.form`

  max-width: 400px;

  span {
    font-size: 18px;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-top: 20px;
    border-bottom: 1px solid black;
    
    input {
      border: 0;
      flex: 1;
      margin-left: 4px;
    }

    svg {
      color:#8A2BE2;
    }

    & + div {
      margin-top: 14px;
    }
  }
`

export const CardInformationsSecundary = styled.div`
  display: flex;
  border: 0 !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 !important; 
  div {
    margin-top: 0 !important;
    input {
      border: 0;
      flex: 1;
      margin-left: 4px;
      width: 50px;
    }
  }
`