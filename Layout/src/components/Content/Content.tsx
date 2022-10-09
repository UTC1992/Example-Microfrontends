import React, { ReactNode } from 'react'

import { ContentStyle } from './styles'

interface IContentProps {
  children: ReactNode
}

const Content: React.FC<IContentProps> = ({ children }) => (
  <ContentStyle>
    {children}
  </ContentStyle>
)

export default Content
