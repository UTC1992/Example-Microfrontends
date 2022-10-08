import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import BoxButtons from './BoxButtons'

import Button from '../Button/Button'

describe( 'Text BoxButtons', () => {
  it( 'should show the buttons were sent when it was used', async () => {
    const { findAllByRole } = render(
      <BoxButtons>
        <Button>
          First button
        </Button>
        <Button>
          Second button
        </Button>
      </BoxButtons>,
    )

    expect( await findAllByRole( 'button' )).toHaveLength( 2 )
  })

  it( 'should elements like row when there are two buttons', () => {
    const { getByLabelText } = render(
      <BoxButtons>
        <Button>
          First button
        </Button>
        <Button>
          Second button
        </Button>
      </BoxButtons>,
    )

    expect( getByLabelText( 'container-button' )).toHaveStyle({
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
    })
  })

  it( 'should elements like column when there is one button', () => {
    const { getByLabelText } = render(
      <BoxButtons>
        <Button>
          First button
        </Button>
      </BoxButtons>,
    )

    expect( getByLabelText( 'container-button' )).toHaveStyle({
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    })
  })

  it( 'should have a padding of 1rem and width of 100% and it should be responsive', () => {
    const { getByLabelText } = render(
      <BoxButtons>
        <Button>
          First button
        </Button>
      </BoxButtons>,
    )

    expect( getByLabelText( 'container-button' )).toHaveStyle({ padding: '1rem', flexWrap: 'wrap' })
  })
})
