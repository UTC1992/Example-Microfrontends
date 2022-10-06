import React from 'react'

import { FooterStyle } from './styles'

interface IFooterProps {
  title: string
}

const Footer: React.FC<IFooterProps> = ({ title }) => (
  <FooterStyle>{title}</FooterStyle>
)

export default Footer
