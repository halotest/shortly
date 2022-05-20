import { IApiResponse } from 'api/types'

export interface ILink {
    original_link: IApiResponse['original_link']
    full_short_link: IApiResponse['full_short_link']
    code: IApiResponse['code']
    createdAt: Date
}

export type TLinkId = ILink['code']

export interface ILinkHistory {
    loading: boolean
    links: ILink[] | null
    hasLinks: boolean
    addLink: (link: ILink) => void
    removeLink: (link: ILink) => void
}
