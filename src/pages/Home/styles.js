import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 320px ) {
    padding: 0 5px;
  }
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

export const UserInformations = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      padding: 8px;
      margin-top: 20px;
      border: 1px solid black;
      border-radius: 2px;
      
    input {
      border: 0;
      flex: 1;
      margin-left: 4px;
    }

    & + div {
      margin-left: 20px;
    }

  }
`

export const AddressContainer = styled.form`
  width: 100%;
  max-width: 760px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;

  div {
   display: flex; 
   box-sizing: border-box;
   flex: 1;
   justify-content: space-between;
   align-items: center;
  
   /* padding: 4px; */
    input {
      padding: 6px;
      width: 150px;
      border: 1px solid #8A2BE2;
      color: #8A2BE2;
      border-radius: 2px;
      
      &:disabled {
        background: #eee ;
      }

      @media (min-width: 465px){
        flex: 1;
      }

      & + input {
         margin-left: 8px;

         @media (min-width: 465px){
           margin-left: 20px;
         }
      }
    } 

    & + div {
      margin-top: 12px;
    } 
  }

`

export const Cep = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid black;
  padding: 4px;
  color: #8A2BE2;
  border-radius: 2px;

  input {
    border: 0 !important;
    width: 90px !important;
    flex: 1;
  }
`


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 50px;


  @media (min-width: 850px){
    flex-direction: row;
    justify-content: center;
  }
  
`
export const CardInformations = styled.form`
  margin-top: 50px;
  width: 100%;
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
    border: 1px solid black;
    border-radius: 2px;
    
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

  @media (min-width: 850px){
    margin-left: 50px;
    margin-top: 0px;
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