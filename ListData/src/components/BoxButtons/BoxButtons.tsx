import React, { ReactNode } from 'react'

import { Container } from './styles'

interface IBoxButtonsProps {
  children: ReactNode
}

const BoxButtons:React.FC<IBoxButtonsProps> = ({ children }) => {
  const sizeElements = Array.isArray( children ) ? children.length : 0

  return (
    <Container sizeElements={sizeElements} aria-label="container-button">
      {children}
    </Container>
  )
}

export default BoxButtons
