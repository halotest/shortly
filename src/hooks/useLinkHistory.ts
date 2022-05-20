import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect, useState } from 'react'
import { CACHE_LINKS_KEY } from '../config/constants'
import { ILink, ILinkHistory } from './types'

export const useLinkHistory = (): ILinkHistory => {
    const [links, setLinks] = useState<ILink[] | null>(null)

    const getLinks = useCallback(async () => {
        try {
            const cachedLinks = await AsyncStorage.getItem(CACHE_LINKS_KEY)
            const data =
                cachedLinks !== null ? (JSON.parse(cachedLinks) as ILink[]) : []
            setLinks(data)
        } catch (e) {
            setLinks([])
        }
    }, [])

    useEffect(() => {
        if (links === null) {
            getLinks()
        }
    }, [getLinks, links])

    useEffect(() => {
        AsyncStorage.setItem(CACHE_LINKS_KEY, JSON.stringify(links))
    }, [links])

    const addLink = (link: ILink) => {
        const newLinks = [...links!, link]
        setLinks(newLinks)
    }

    const removeLink = ({ code }: ILink) => {
        setLinks([...links!].filter((link) => link.code !== code))
    }

    return {
        loading: links === null,
        links,
        hasLinks: Array.isArray(links) && links.length > 0,
        addLink,
        removeLink,
    }
}
