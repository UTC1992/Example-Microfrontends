import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe( 'Test to Button', () => {
  it( 'should show the text when it is used', () => {
    const { getByText } = render(
      <Button>
        Press the button
      </Button>,
    )

    expect( getByText( 'Press the button' )).toHaveTextContent( 'Press the button' )
  })

  it( 'should call the function when the button was pressed', async () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <Button handleOnClick={handleClick}>
        Press the button
      </Button>,
    )

    await userEvent.click( getByRole( 'button', { name: 'Press the button' }))
    expect( handleClick ).toHaveBeenCalledTimes( 1 )
  })
})
