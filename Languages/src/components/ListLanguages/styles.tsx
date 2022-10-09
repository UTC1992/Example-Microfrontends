import styled from 'styled-components'

export const ListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 0.5rem;
  border: 1px solid #1366AF;
  border-radius: 0.5rem;
  padding: 0.5rem;
  max-width: 5rem;

  .list__item {
    all: unset;
    width: 100%;
  }

  .list__item-button {
    all: unset;
    cursor: pointer;
    width: 100%;
    padding: 0.3rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list__item-button:hover {
    background-color: #1366AF;
    color: #ffffff;
  }

  .list__item-button--active {
    background-color: #1366AF;
    color: #ffffff;
  }

  .list__item-button--rounded {
    border-radius: 0.5rem;
    border: 1px solid #1366AF;
  }
`
