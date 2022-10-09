import '@testing-library/jest-dom'
import { renderHook, waitFor, render } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import axios from 'axios'

import ListCharacters from './ListCharacters'

import useGetCharacters from '../../hooks/useGetCharacters'

const responseAxios = {
  data: {
    results: [
      {
        name: 'Joe Doe 1',
        image: 'image1.jpg',
      },
      {
        name: 'Jane Doe 2',
        image: 'image2.jpg',
      },
    ],
  },
}

jest.mock( 'axios' )
const mockedAxios = axios as jest.Mocked<typeof axios>

describe( 'Test to ListCharacters', () => {
  it( 'should show items when the user pressed any button', async () => {
    mockedAxios.get.mockResolvedValue( responseAxios )

    const { getByRole, findAllByRole } = render(
      <ListCharacters />,
    )

    const { result } = renderHook(() => useGetCharacters())

    await waitFor(() => result.current.handleGetData( 'Rick' ))
    await userEvent.click( getByRole( 'button', { name: 'Rick and Morty' }))

    await waitFor(() => {
      expect( result.current.itemsList ).toEqual([
        {
          name: 'Joe Doe 1',
          image: 'image1.jpg',
        },
        {
          name: 'Jane Doe 2',
          image: 'image2.jpg',
        },
      ])
    })
    expect( await findAllByRole( 'listitem' )).toHaveLength( 2 )
  })
})
