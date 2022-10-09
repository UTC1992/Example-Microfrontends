import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ListLanguages from './ListLanguages'

const languages: any = ['EN', 'ES']

describe( 'Test to ListLanguages', () => {
  it( 'should render two items with ES and EN', async () => {
    const { findAllByRole } = render(
      <ListLanguages languages={languages} />,
    )

    expect( await findAllByRole( 'listitem' )).toHaveLength( 2 )
  })

  it( 'should be a list of elements', async () => {
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

  it( 'should show the button with ES in color black when it was not sent any option', async () => {
    const { getByText } = render(
      <ListLanguages languages={languages} />,
    )

    expect( getByText( 'ES' )).toHaveStyle({
      backgroundColor: '#000000',
    })
  })

  it( 'should show the button with EN in color black when it was press the option', async () => {
    const { getByText } = render(
      <ListLanguages languages={languages} />,
    )

    await userEvent.click( getByText( 'EN' ))
    expect( getByText( 'EN' )).toHaveStyle({
      backgroundColor: '#000000',
    })
  })

  it( 'should receive a function to set a value that was selected', async () => {
    const handleSetValue = jest.fn(( value: any ) => value )
    const { getByText } = render(
      <ListLanguages languages={languages} getValueSelected={handleSetValue} />,
    )

    await userEvent.click( getByText( 'EN' ))
    expect( handleSetValue ).toHaveBeenCalledWith( 'EN' )

    await userEvent.click( getByText( 'ES' ))
    expect( handleSetValue ).toHaveBeenCalledWith( 'ES' )
  })
})
