import styled from 'styled-components'

import { IContainerStyle } from './types'

export const Container = styled.div<IContainerStyle>`
  display: flex;
  flex-direction: ${({ sizeElements }) => ( sizeElements > 1 ? 'row' : 'column' )};
  align-items: center;
  justify-content: ${({ sizeElements }) => ( sizeElements > 1 ? 'space-evenly' : 'center' )};
  padding: 1rem;
  width: 100%;
  flex-wrap: wrap;

  .button {
    all: unset;
    cursor: pointer;
  }

  .button--size {
    min-width: 4rem;
    padding: 0.5rem 1rem;
  }

  .button--primary {
    border: 1px solid #0a62a5;
    color: #0a62a5;
    border-radius: 0.6rem;
    text-align: center;
  }
  
  .button--primary:hover {
    background-color: #0a62a5;
    color: #ffffff;
  }
`
