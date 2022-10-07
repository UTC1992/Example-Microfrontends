import { useState } from 'react'

import { ShowType } from '../components/ListCharacters/types'

import { getCharacters } from '../services/getCharacters'
import { ItemDto } from '../services/ItemDto'

interface IUserCharactersHook {
  itemsList: ItemDto[]
  handleGetData: ( showType: ShowType ) => void
}

export const useGetCharacters = (): IUserCharactersHook => {
  const [itemsList, setItemsList] = useState<ItemDto[]>([])

  const handleGetData = async ( showType: ShowType ): Promise<void> => {
    setItemsList([])
    const characters = await getCharacters( showType )

    setItemsList( characters.result ?? [])
  }

  return { itemsList, handleGetData }
}
