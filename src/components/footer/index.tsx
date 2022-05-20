import { ILink } from 'hooks/types'
import { Keyboard } from 'react-native'
import Animated from 'react-native-reanimated'
import { api } from '../../api'
import { TResponse } from '../../api/types'
import { Form } from '../../components/form'
import { FooterShape } from '../../components/svgs'
import { useKeyboardAware } from '../../hooks'
import { isSuccessFulResponse } from '../../utils/isResponseSucces'
import { styles } from './styles'

// TODO Test footer animation when https://github.com/software-mansion/react-native-reanimated/pull/3217 merges

interface IProps {
    addLink: (link: ILink) => void
}

export const Footer = ({ addLink }: IProps) => {
    const { style } = useKeyboardAware()

    const shortenURL = async (value: string): Promise<boolean> => {
        const data = await api<TResponse>(value)
        const success = isSuccessFulResponse(data)
        if (success) {
            const { original_link, full_short_link, code } = data.result
            addLink({
                original_link,
                full_short_link,
                code,
                createdAt: new Date(),
            })
            Keyboard.dismiss()
        }

        return success
    }

    return (
        <Animated.View testID={'footer'} style={[styles.footer, style]}>
            <FooterShape style={styles.shape} />
            <Form shorten={shortenURL} />
        </Animated.View>
    )
}
