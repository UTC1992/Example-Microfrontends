import React, { ReactNode } from 'react'

import { ContainerStyle } from './style'
import { IButton, ShowType } from './types'

import { EN, ES } from '../../constants/textElements'
import useActiveButton from '../../hooks/useActiveButton'
import useGetCharacters from '../../hooks/useGetCharacters'

import BoxButtons from '../BoxButtons/BoxButtons'
import Button from '../Button/Button'
import ItemList from '../ItemList/ItemList'
import List from '../List/List'

interface IListCharactersProps {
  lang?: string
}

const ListCharacters:React.FC<IListCharactersProps> = ({ lang }) => {
  const textData = lang === 'ES' ? ES : EN
  const { itemsList, handleGetData, loading } = useGetCharacters()
  const { setList, activeButton, btnList } = useActiveButton([
    {
      type: 'Rick',
      active: false,
    },
    {
      type: 'Harry',
      active: false,
    },
  ])

  const handleSelectOption = ( btnItem: IButton, index: number ): void => {
    setList( activeButton( index ))
    handleGetData( btnItem.type )
  }

  const renderItems = (): ReactNode => (
    itemsList?.map(( item ) => (
      <ItemList
        key={`${item.image}-1`}
        text={item.name}
        image={item.image}
      />
    ))
  )

  const getTextBtn = ( type: ShowType ): string => ( type === 'Rick' ? textData.btnRick : textData.btnHarry )

  const renderButtons = (): ReactNode => (
    btnList.map(( button, index ) => (
      <Button
        key={button.type}
        handleOnClick={() => handleSelectOption( button, index )}
        active={button.active}
      >
        {getTextBtn( button.type )}
      </Button>
    ))
  )

  return (
    <ContainerStyle>
      <BoxButtons>
        {renderButtons()}
      </BoxButtons>
      <span className="card-info">{textData.textHelp}</span>
      <List>
        {itemsList ? renderItems() : <h2 className="card-info">{textData.textInfoData}</h2>}
        {loading && ( <h2 className="card-info">Loading...</h2> )}
      </List>
    </ContainerStyle>
  )
}

export default ListCharacters
