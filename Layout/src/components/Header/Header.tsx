import React from 'react'

import { HeaderStyle } from './styles'

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
  <HeaderStyle>{title}</HeaderStyle>
)

export default Header
