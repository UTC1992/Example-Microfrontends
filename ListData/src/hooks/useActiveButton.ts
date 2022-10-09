import { useCallback, useState } from 'react'

import { IButton } from 'src/components/ListCharacters/types'

interface IActiveButtonHook {
  btnList: IButton[]
  activeButton: ( index: number ) => IButton[]
  setList: ( list: IButton[]) => void
}

const useActiveButton = ( listButton: IButton[]): IActiveButtonHook => {
  const [btnList, setBtnList] = useState<IButton[]>( listButton )

  const activeButton = ( index: number ): IButton[] => {
    const buttons: IButton[] = []

    btnList.forEach(( button ) => {
      buttons.push({
        ...button,
        active: false,
      })
    })
    buttons[index].active = !btnList[index].active

    return buttons
  }

  const handleSetBtnList = useCallback(( list: IButton[]): void =>
    setBtnList( list ),
  [])

  return {
    btnList,
    activeButton,
    setList: handleSetBtnList,
  }
}

export default useActiveButton
