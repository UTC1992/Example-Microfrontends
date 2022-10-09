import React, { ReactNode } from 'react'

import { ContainerStyle } from './styles'

import { EN, ES } from '../../constants/textElements'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface ILayoutProps {
  children: ReactNode
  lang?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, lang }) => {
  const textData = lang === 'ES' ? ES : EN

  return (
    <ContainerStyle>
      <Header title={textData.header} />
      <Content>
        {children}
      </Content>
      <Footer title={textData.footer} />
    </ContainerStyle>
  )
}

export default Layout
