import { render, waitFor } from '@testing-library/react-native'
import App from '../App'

describe('<App />', () => {
    it('renders app', async () => {
        const { container } = render(<App />)
        await waitFor(() => {
            expect(container).toBeTruthy()
        })
    })

    it('should render splash on initial render', async () => {
        const { getByTestId } = render(<App />)
        await waitFor(() => {
            expect(getByTestId('splash')).toBeTruthy()
        })
    })
})
