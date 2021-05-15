import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --background: #f0f2f5;
    --blue-light: #6933ff;
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e52E4d;
    --shape: #fff;
    --text-body: #969cb3;
    --text-title: #363f5f;
    --border: #d7d7d7;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.75%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  input,
  textarea,
  button {
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid var(--border);
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .error-message {
    color: var(--red);
  }
`;