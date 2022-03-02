import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th { 
      color: var(--dark-blue);
      font-weight: 600;
      font-size: 1.15rem;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #FFF;
      color: var(--dark-blue);
      border-radius: 0.25rem;
      
      &:first-child {
        color: var(--dark-blue);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;