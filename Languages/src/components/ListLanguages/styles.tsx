import styled from 'styled-components'

export const ListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 0.5rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  padding: 0.5rem;
  max-width: 5rem;

  .list__item {
    all: unset;
    border: 1px solid #000000;
    border-radius: 0.5rem;
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

  .list__item:hover {
    background-color: #000000;
    color: #ffffff;
  }
`
