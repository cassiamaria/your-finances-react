import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: var(--dark-blue);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #fff;

    font-size: 1rem;

    &::placeholder {
      color: #c7c7c7;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 70%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--yellow);
    color: (--dark-blue);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.15rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const buttonColors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  
  background: ${(props) => props.isActive
    ? transparentize(0.9, buttonColors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 22px;
    height: 22px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;