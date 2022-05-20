import { View } from 'react-native'
import { Footer } from './components/footer'
import { Splash } from './components/splash'
import { Welcome } from './components/welcome'
import { useLinkHistory, usePrepareApp } from './hooks'
import { LinkHistory } from './screens/history'
import { styles } from './styles'

function App() {
    const isReady = usePrepareApp()
    const { loading, links, hasLinks, addLink, removeLink } = useLinkHistory()

    if (!isReady || loading) {
        return <Splash />
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {hasLinks ? (
                    <LinkHistory onDelete={removeLink} links={links!} />
                ) : (
                    <Welcome />
                )}
            </View>
            <Footer addLink={addLink} />
        </View>
    )
}

export default App
