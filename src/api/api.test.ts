import { api } from '.'
import { FetchMock } from 'jest-fetch-mock'
const fetchMock = fetch as FetchMock

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('API', () => {
    it('returns result if its array', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]))
        const onResponse = jest.fn()
        const onError = jest.fn()
        return api('https://google.com')
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                expect(onResponse).toHaveBeenCalled()
                expect(onError).not.toHaveBeenCalled()

                expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 })
            })
    })

    it('returns result if its object', () => {
        fetchMock.mockResponseOnce(JSON.stringify({ id: 1 }))
        const onResponse = jest.fn()
        const onError = jest.fn()
        return api('https://google.com')
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                expect(onResponse).toHaveBeenCalled()
                expect(onError).not.toHaveBeenCalled()

                expect(onResponse.mock.calls[0][0]).toEqual({ id: 1 })
            })
    })
})
