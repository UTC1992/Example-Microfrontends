import React, { ReactNode } from 'react'

import { ListStyle } from './styles'

interface IListProps {
  children: ReactNode
}

const List: React.FC<IListProps> = ({ children }) => (
  <ListStyle aria-label="list-items">
    {children}
  </ListStyle>
)

export default List
