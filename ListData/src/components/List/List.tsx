import React from 'react'

import { ListStyle } from './styles'

interface IListProps {
  children: JSX.Element[]
}

const List: React.FC<IListProps> = ({ children }) => (
  <ListStyle aria-label="list-items">
    {children}
  </ListStyle>
)

export default List
