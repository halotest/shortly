import { fireEvent, render } from '@testing-library/react-native'
import { Button } from '.'

describe('Button', () => {
    it('renders Poppins-Bold font', async () => {
        const { getByText } = render(
            <Button onPress={() => {}} text="Shorten it!" />
        )
        const innerText = getByText(/shorten/i)
        expect(innerText.props.style).toMatchObject({
            fontFamily: 'Poppins-Bold',
        })
    })

    it('renders correct text in active state', async () => {
        const { getByText } = render(
            <Button
                onPress={() => {}}
                isActive
                text="Shorten it!"
                activeText="Active"
            />
        )
        const innerText = getByText('Active')
        expect(innerText).toBeTruthy()
    })

    it('calls onPress function prop', async () => {
        const onPressSpy = jest.fn()

        const { getByTestId } = render(
            <Button onPress={onPressSpy} text="Shorten it!" />
        )
        const btn = getByTestId('btn')
        fireEvent(btn, 'click')
        expect(onPressSpy).toHaveBeenCalled()
    })
})
