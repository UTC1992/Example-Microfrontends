import styled from 'styled-components'

import { IContainerStyle } from './types'

export const Container = styled.div<IContainerStyle>`
  display: flex;
  flex-direction: ${({ sizeElements }) => ( sizeElements > 1 ? 'row' : 'column' )};
  align-items: center;
  justify-content: ${({ sizeElements }) => ( sizeElements > 1 ? 'space-evenly' : 'center' )};
  padding: 1rem;
  flex-wrap: wrap;
  row-gap: 1rem;
`
