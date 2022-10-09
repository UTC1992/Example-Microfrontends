import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Header from './Header'

describe( 'Test to Header', () => {
  it( 'should show title when render component', () => {
    const { getByText } = render(
      <Header title="Header Page" />,
    )

    expect( getByText( 'Header Page' )).toBeInTheDocument()
  })
})
