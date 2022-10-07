import '@testing-library/jest-dom'
import { renderHook, waitFor, render } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import axios from 'axios'

import ListIntegrated from './ListIntegrated'

import { useGetCharacters } from '../../hooks/useGetCharacters'

const responseAxios = {
  data: {
    results: [
      {
        name: 'Joe Doe',
        image: 'image.jpg',
      },
      {
        name: 'Jane Doe',
        image: 'image.jpg',
      },
    ],
  },
}

jest.mock( 'axios' )
const mockedAxios = axios as jest.Mocked<typeof axios>

describe( 'Test to ListIntegrated', () => {
  it( 'should show items when the user pressed any button', async () => {
    mockedAxios.get.mockResolvedValue( responseAxios )

    const { getByRole, findAllByRole } = render(
      <ListIntegrated />,
    )

    const { result } = renderHook(() => useGetCharacters())

    await waitFor(() => result.current.handleGetData( 'Rick' ))
    await userEvent.click( getByRole( 'button', { name: 'Rick and Morty' }))

    await waitFor(() => {
      expect( result.current.itemsList ).toEqual([
        {
          name: 'Joe Doe',
          image: 'image.jpg',
        },
        {
          name: 'Jane Doe',
          image: 'image.jpg',
        },
      ])
    })
    expect( await findAllByRole( 'listitem' )).toHaveLength( 2 )
  })
})
