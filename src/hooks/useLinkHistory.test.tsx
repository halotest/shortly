import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import { useLinkHistory } from '.'
import { ILinkHistory } from './types'

const testLink = {
    code: 'test',
    createdAt: new Date(),
    full_short_link: 'https://abc.de',
    original_link: 'abc.de',
}

export async function initialRendersTest(): Promise<
    RenderResult<ILinkHistory>
> {
    const { result, waitForNextUpdate } = renderHook(useLinkHistory)
    expect(result.current.links).toBe(null)
    await waitForNextUpdate()
    expect(Array.isArray(result.current.links)).toBe(true)
    return result
}

export async function addLinkTest(): Promise<RenderResult<ILinkHistory>> {
    const result = await initialRendersTest()
    act(() => {
        result.current.addLink(testLink)
    })
    expect(result.current.links?.length).toBe(1)
    return result
}

describe('useLinkHistory', () => {
    it('renders with null state but ends with an array', async () => {
        await initialRendersTest()
    })

    it('adds a link to state', async () => {
        await addLinkTest()
    })

    it('removes link from state', async () => {
        const result = await initialRendersTest()
        act(() => {
            result.current.removeLink(testLink)
        })
        expect(result.current.links?.length).toBe(0)
    })
})
