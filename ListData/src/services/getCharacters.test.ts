import axios from 'axios'

import * as services from './getCharacters'

const result = {
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

describe( 'Test to getCharactersRick', () => {
  it( 'should return data with name and image', async () => {
    mockedAxios.get.mockResolvedValue( result )

    const response = await services.getCharacters( 'Rick' )

    expect( response ).toEqual({
      error: null,
      result: [
        {
          name: 'Joe Doe',
          image: 'image.jpg',
        },
        {
          name: 'Jane Doe',
          image: 'image.jpg',
        },
      ],
    })
  })

  it( 'should return message when happened error', async () => {
    mockedAxios.get.mockRejectedValue({ error: 'Something was wrong, Ops', result: null })

    const response = await services.getCharacters( 'Rick' )

    expect( response ).toEqual({
      error: 'Something was wrong, Ops',
      result: null,
    })
  })
})
