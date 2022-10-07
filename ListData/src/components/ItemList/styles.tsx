import styled from 'styled-components'

export const ItemListStyle = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 1rem;

  .item-list__title {
    flex: 1;
    font-size: 2rem;
    text-align: left;
  }

  .item-list__image {
    flex: 1;
    min-width: 2rem;
    min-height: 2rem;
    max-width: 6rem;
    max-height: 6rem;
    object-fit: cover;
  }
`
