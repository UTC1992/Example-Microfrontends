import styled from 'styled-components'

import { IButtonStyle } from './types'

export const ButtonStyle = styled.button<IButtonStyle>`
  all: unset;
  cursor: pointer;
  border: 1px solid #0a62a5;
  background-color: ${({ active }) => ( active > 0 ? '#0a62a5' : '#ffffff' )};
  color:${({ active }) => ( active > 0 ? '#ffffff' : '#0a62a5' )};
  border-radius: 0.6rem;
  text-align: center;
  min-width: 4rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #0a62a5;
    color: #ffffff;
  }

`
