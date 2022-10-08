import React from 'react'

import { ListStyles } from './styles'

interface IListLanguagesProps {
  languages: string[]
  handleOnClick?: () => void
}

const ListLanguages: React.FC<IListLanguagesProps> = (
  { languages, handleOnClick },
) => (
  <ListStyles className="list list--position">
    {languages.map(( lang ) => (
      <li key={`${lang}-1`} className="list__item">
        <button
          type="button"
          className="list__item-button"
          onClick={handleOnClick}
        >
          {lang}

        </button>
      </li>
    ))}
  </ListStyles>
)

export default ListLanguages
