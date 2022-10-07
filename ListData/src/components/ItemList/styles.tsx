import styled from 'styled-components'

export const ItemListStyle = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 1rem;

  .item-list__title {
    flex: 1;
    font-size: 1.5rem;
    text-align: left;
  }

  .item-list__image {
    flex: 1;
    min-width: 4rem;
    min-height: 4rem;
    max-width: 4rem;
    max-height: 4rem;
    object-fit: cover;
  }

  .item-list__image--rounded {
    border-radius: 100%;
  }
`
