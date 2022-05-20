import { Pressable, Text, View } from 'react-native'
import { handleTapFeedback } from '../../utils'
import { Button } from '../../components/button'
import { ILink } from 'hooks/types'
import { Del } from '../../components/svgs'
import { styles } from './styles'
import { memo } from 'react'

interface IProps {
    link: ILink
    isCopied: boolean
    onCopy: (link: ILink) => void
    onDelete: (link: ILink) => void
}

const LinkItem = ({ link, isCopied, onCopy, onDelete }: IProps) => {
    const handleDelete = () => {
        handleTapFeedback()
        onDelete(link)
    }

    const handleCopy = () => {
        handleTapFeedback()
        onCopy(link)
    }

    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <Text numberOfLines={1} style={styles.original_link}>
                    {link.original_link}
                </Text>
                <Pressable onPress={handleDelete}>
                    <Del style={styles.del} />
                </Pressable>
            </View>

            <View style={styles.main}>
                <Text numberOfLines={1} style={styles.short_link}>
                    {link.full_short_link}
                </Text>

                <Button
                    text="copy"
                    activeText="copied!"
                    isActive={isCopied}
                    onPress={handleCopy}
                />
            </View>
        </View>
    )
}

export default memo(LinkItem)
