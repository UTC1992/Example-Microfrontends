import { useState } from 'react'

import { ShowType } from '../components/ListCharacters/types'

import { getCharacters } from '../services/getCharacters'
import { ItemDto } from '../services/ItemDto'

interface IUserCharactersHook {
  itemsList?: ItemDto[]
  handleGetData: ( showType: ShowType ) => void
  loading: boolean
}

const useGetCharacters = (): IUserCharactersHook => {
  const [itemsList, setItemsList] = useState<ItemDto[]>()
  const [loading, setLoading] = useState<boolean>( false )

  const handleGetData = async ( showType: ShowType ): Promise<void> => {
    setItemsList([])
    setLoading( true )
    const characters = await getCharacters( showType )

    setItemsList( characters.result ?? [])
    setLoading( false )
  }

  return { itemsList, handleGetData, loading }
}

export default useGetCharacters
