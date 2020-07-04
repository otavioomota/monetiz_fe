import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
    z-index: 1; 
    width: 100%;
    height: 100%; 
    position: fixed; 
    top: 0;
    left: 0;
    overflow: auto;
    padding-top: 80px; 
`

export const Content = styled.div`
    background-color: white;
    width: 80%;
    max-width: 640px; 
    max-height: 100%; 
    margin: auto; 
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px; 
`

export const CloseButton = styled.span`
    color: red;
    float: right; 
    font-size: 25px;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`

export const TransactionDetails = styled.div`
    display: flex;
    flex-direction: column;
    
    h4 {
        align-self: center;
        font-size: 20px;
    }

    div{
        display: flex;
        flex-direction: column;

        span {
            font-size: 16px;
            font-weight: 500;
            border-bottom: 1px solid black;
            padding-bottom: 3px;
        }

        p {
            margin: 8px 5px;
        }

    & + div {
        margin-top: 20px;
    }
    }
`