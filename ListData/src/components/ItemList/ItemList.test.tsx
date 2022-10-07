import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import ItemList from './ItemList'

describe( 'Test to ItemList', () => {
  it( 'should show two elements one text and one image when it was used', () => {
    const { getByRole, getByText } = render(
      <ItemList
        text="Harry Potter"
        image=""
      />,
    )

    expect( getByRole( 'img' )).toBeInTheDocument()
    expect( getByText( 'Harry Potter' )).toBeInTheDocument()
  })

  it( 'should be a row with style responsive when the screen is smaller', () => {
    const { getByLabelText } = render(
      <ItemList
        text="Harry Potter"
        image=""
      />,
    )

    expect( getByLabelText( 'item-list' )).toHaveStyle({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      rowGap: '1rem',
    })
  })
})
