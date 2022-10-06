import React from 'react'

import { ContentStyle } from './styles'

interface IContentProps {
  children: JSX.Element | JSX.Element[] | undefined | null
}

const Content: React.FC<IContentProps> = ({ children }) => (
  <ContentStyle>
    {children}
  </ContentStyle>
)

export default Content
