import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 400;
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      color: var(--text-body);
      border: none;
      border-radius: 0.25rem;
    }

    td.title {
      color: var(--text-tile);
    }

    td.income {
      color: var(--green);
    }

    td.outcome {
      color: var(--red);
    }
  }
`;
