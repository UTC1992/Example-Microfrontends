import React, { ReactNode } from 'react'

import { ButtonStyle } from './styles'

interface IButtonProps {
  children: ReactNode
  handleOnClick?: () => void
  active?: boolean
}

const Button:
React.FC<IButtonProps> = ({ children, handleOnClick, active }) => (
  <ButtonStyle
    active={active ? 1 : 0}
    type="button"
    onClick={handleOnClick}
  >
    {children}
  </ButtonStyle>
)

export default Button
