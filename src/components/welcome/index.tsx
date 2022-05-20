import { View, Text } from 'react-native'
import { Illustration, Logo } from '../../components/svgs'
import { styles } from './styles'

export const Welcome = () => {
    return (
        <View testID="welcome" style={styles.container}>
            <Logo />
            <Illustration />
            <View>
                <Text style={styles.text_bold}>Let's get started!</Text>
                <Text style={styles.text}>
                    Paste your first link into {'\n'} the field to shorten it
                </Text>
            </View>
        </View>
    )
}
