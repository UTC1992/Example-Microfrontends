import React from 'react'

import { ItemListStyle } from './styles'

interface IItemListProps {
  text: string
  image: string
}

const ItemList:React.FC<IItemListProps> = ({ text, image }) => (
  <ItemListStyle aria-label="item-list" className="item-list">
    <span className="item-list__title">{text}</span>
    <img className="item-list__image item-list__image--rounded" src={image} alt="" />
  </ItemListStyle>
)

export default ItemList
