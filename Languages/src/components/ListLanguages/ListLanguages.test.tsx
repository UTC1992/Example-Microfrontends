import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ListLanguages from './ListLanguages'

describe( 'Test to ListLanguages', () => {
  it( 'should render two items with ES and EN', async () => {
    const languages = ['EN', 'ES']
    const { findAllByRole } = render(
      <ListLanguages languages={languages} />,
    )

    expect( await findAllByRole( 'listitem' )).toHaveLength( 2 )
  })

  it( 'should call function was sent when press button in someone', async () => {
    const languages = ['EN', 'ES']
    const handleClick = jest.fn()
    const { getByText } = render(
      <ListLanguages languages={languages} handleOnClick={handleClick} />,
    )

    await userEvent.click( getByText( 'ES' ))
    expect( handleClick ).toHaveBeenCalledTimes( 1 )
  })

  it( 'should be a list of elements', async () => {
    const languages = ['EN', 'ES']
    const { getByRole } = render(
      <ListLanguages languages={languages} />,
    )

    expect( getByRole( 'list' )).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    })
  })
})
