import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  background-color: #fff;
  width: 100%;
  max-width: 1120px;
  padding: 0 10px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  img {
    height: 56px;
    width: 56px;
  }
`
export const Tools = styled.div`

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: none;
    color: #0b6623;
    transition: color 0.2s;

    svg {
      margin-right: 8px;
      transition: transform 0.2s;

      &:hover{
        transform: rotate(180deg);
      }
    }

    &:hover {
      color: ${lighten(0.1, '#0b6623')}
    }
  }
`