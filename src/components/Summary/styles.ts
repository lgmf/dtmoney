import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: -10rem;

  div {
    flex-basis: 33%;
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    + div {
      margin-left: 32px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
  }

  div.highlight-background {
    background-color: var(--green);
    color: var(--shape);
  }
`;