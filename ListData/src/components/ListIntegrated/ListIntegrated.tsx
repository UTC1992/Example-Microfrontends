import React from 'react'

import { BTN_RICK, BTN_HARRY } from '../../constants/texts'
import { useGetCharacters } from '../../hooks/useGetCharacters'

import BoxButtons from '../BoxButtons/BoxButtons'
import Button from '../Button/Button'
import ItemList from '../ItemList/ItemList'
import List from '../List/List'

const ListIntegrated:React.FC = () => {
  const { itemsList, handleGetData } = useGetCharacters()

  const renderItems = (): JSX.Element[] => (
    itemsList.map(( item ) => (
      <ItemList
        key={`${item.image}-1`}
        text={item.name}
        image={item.image}
      />
    ))
  )

  return (
    <div>
      <BoxButtons>
        <Button handleOnClick={() => handleGetData( 'Rick' )}>
          {BTN_RICK}
        </Button>
        <Button handleOnClick={() => handleGetData( 'Harry' )}>
          {BTN_HARRY}
        </Button>
      </BoxButtons>
      <List>
        {itemsList ? renderItems() : []}
      </List>
    </div>
  )
}

export default ListIntegrated
