import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Content from './Content'

describe( 'Test to Content', () => {
  it( 'should show children when render content', () => {
    const { getByText, getByRole } = render(
      <Content>
        <h1>Hi</h1>
        <button type="button">Press</button>
      </Content>,
    )

    expect( getByText( 'Hi' )).toBeInTheDocument()
    expect( getByRole( 'button', { name: 'Press' })).toBeInTheDocument()
  })
})
