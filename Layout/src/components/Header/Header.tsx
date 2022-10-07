import React from 'react'

import { HeaderStyle } from './styles'

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
  <HeaderStyle className="header">
    <h2 className="header__title">{title}</h2>
  </HeaderStyle>
)

export default Header
