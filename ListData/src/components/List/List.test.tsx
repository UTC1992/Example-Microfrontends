import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import List from './List'

import ItemList from '../ItemList/ItemList'

describe( 'Test to List', () => {
  it( 'should show the items that it were sent like children', async () => {
    const { findAllByRole } = render(
      <List>
        <ItemList text="Item 1" image="" />
        <ItemList text="Item 2" image="" />
      </List>,
    )

    expect( await findAllByRole( 'listitem' )).toHaveLength( 2 )
  })

  it( 'should be a row with style responsive when the screen is smaller', () => {
    const { getByLabelText } = render(
      <List>
        <ItemList text="Item 1" image="" />
        <ItemList text="Item 2" image="" />
      </List>,
    )

    expect( getByLabelText( 'list-items' )).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    })
  })
})
