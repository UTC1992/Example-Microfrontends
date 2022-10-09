import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Footer from './Footer'

describe( 'Test to footer', () => {
  it( 'should show a title when render Footer', () => {
    const { getByText } = render(
      <Footer title="Power by Developers" />,
    )

    expect( getByText( 'Power by Developers' )).toBeInTheDocument()
  })
})
