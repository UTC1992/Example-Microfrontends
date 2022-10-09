import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Layout from './Layout'

describe( 'Test to Layout', () => {
  it( 'should show the children when it was sent', () => {
    const { getByText } = render(
      <Layout>
        <h1>Hi Layout</h1>
      </Layout>,
    )

    expect( getByText( 'Hi Layout' )).toBeInTheDocument()
  })
})
