import { ILink } from 'hooks/types'

export const mockData: ILink[] = [...Array(300).keys()].map((id) => ({
    code: `code-${id}`,
    createdAt: new Date(),
    full_short_link: 'https://someurl.com' + id,
    original_link: 'someurl.com' + id,
}))
