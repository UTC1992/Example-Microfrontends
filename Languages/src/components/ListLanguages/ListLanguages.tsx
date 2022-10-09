import React, { useState } from 'react'

import { ListStyles } from './styles'

export type LanguagesType = 'ES' | 'EN'

interface IListLanguagesProps {
  languages: LanguagesType[]
  getValueSelected?: ( value: LanguagesType ) => void
}

const ListLanguages: React.FC<IListLanguagesProps> = (
  { languages, getValueSelected },
) => {
  const [languageSelected, setLanguageSelected] = useState<LanguagesType>( 'ES' )

  const handleSelectLanguage = ( value: LanguagesType ): void => {
    setLanguageSelected( value )
    if ( getValueSelected ) {
      getValueSelected( value )
    }
  }

  return (
    <ListStyles className="list list--position">
      {languages.map(( lang ) => (
        <li
          key={`${lang}-1`}
          className="list__item"
        >
          <div
            className={`
            list__item-button 
            list__item-button--rounded 
            ${languageSelected === lang ? 'list__item-button--active' : ''}`}
            onClick={() => handleSelectLanguage( lang )}
          >
            {lang}
          </div>
        </li>
      ))}
    </ListStyles>
  )
}

export default ListLanguages
