import styled from 'styled-components';
import { darken } from 'polished';

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    margin-top: 1.5rem;
  }
`;

interface RadioBoxProps {
  activeColor: string;
}

export const RadioBox = styled.div<RadioBoxProps>`
  flex: 1;

  &:focus-within > label {
    border-color: ${darken(0.3, '#d7d7d7')};
  }

  & + div {
    margin-left: 0.5rem;
  }

  label {
    border: 1.5px solid var(--border);
    box-sizing: border-box;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.375rem 0;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')}
    }

    img {
      margin-right: 1rem;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ label {
      background-color: ${(props) => props.activeColor ?? '#ccc'};
      border-color: ${(props) => props.activeColor ?? '#ccc'};
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;
