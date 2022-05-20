import { ILink } from 'hooks/types'
import { useCallback, useMemo } from 'react'
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native'
import LinkItem from '../../components/linkItem'
import { BottomShadow, TopShadow } from '../../components/svgs'
import { ITEM_HEIGHT } from '../../config/constants'
import { useClipboard } from '../../hooks/useClipboard'
import { styles } from './styles'

interface IProps {
    links: ILink[]
    onDelete: (link: ILink) => void
}

export const LinkHistory = ({ links = [], onDelete }: IProps) => {
    const { write, value } = useClipboard()

    const onCopy = useCallback(
        async (link: ILink) => {
            try {
                await write(link.full_short_link)
            } catch (error) {
                // handle error...notification?
            }
        },
        [write]
    )

    const renderItem = useCallback(
        ({ item }: ListRenderItemInfo<ILink>) => {
            return (
                <LinkItem
                    key={item.code}
                    link={item}
                    isCopied={value === item.full_short_link}
                    onCopy={onCopy}
                    onDelete={onDelete}
                />
            )
        },
        [value, onCopy, onDelete]
    )

    const getItemLayout = useCallback(
        (_: any, index: number) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        }),
        []
    )

    const keyExtractor = useCallback((item: ILink) => {
        return item.code
    }, [])

    const header = useMemo(
        () => <Text style={styles.title}>Your Link History</Text>,
        []
    )

    return (
        <View testID="links" style={styles.container}>
            <TopShadow style={styles.topShadow} />
            <FlatList
                ListHeaderComponent={header}
                initialNumToRender={4}
                maxToRenderPerBatch={6}
                windowSize={4}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.list}
                data={links}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
            <BottomShadow style={styles.bottomShadow} />
        </View>
    )
}
