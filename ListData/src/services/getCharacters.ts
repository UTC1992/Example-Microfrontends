import axios from 'axios'

import { ShowType } from 'src/components/ListCharacters/types'

import { ItemDto } from './ItemDto'

import { URL_RICK, URL_HARRY } from '../constants/shows'

export interface IResponse<T> {
  error: null | string
  result: T[] | null
}

export const getCharacters = async (
  showName: ShowType,
): Promise<IResponse<ItemDto>> => {
  try {
    const url = showName === 'Rick' ? URL_RICK : URL_HARRY
    const { data } = await axios.get( url )

    if ( data ) {
      const listCharacters = showName === 'Rick' ? data.results : data
      const result = getDataWithImage( listCharacters )

      return { error: null, result }
    }

    return { error: null, result: [] }
  } catch ( error ) {
    return { error: 'Something was wrong, Ops', result: null }
  }
}

const getDataWithImage = (
  data: ItemDto[],
): ItemDto[] => data.filter(( item: ItemDto ) => !!item.image )
