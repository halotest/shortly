import { validateURL } from './validateURL'

describe('ValidateURL', () => {
    it('should return error if value is empty', () => {
        expect(validateURL('')).toMatchObject({ error: 1 })
    })
    it('should return error if value is invalid', () => {
        expect(validateURL('123')).toMatchObject({ error: 0 })
        expect(validateURL('abc')).toMatchObject({ error: 0 })
        expect(validateURL('htt://google.com')).toMatchObject({ error: 0 })
        expect(validateURL('google.c')).toMatchObject({ error: 0 })
    })
    it('should return success if value is valid', () => {
        expect(validateURL('https://google.com')).toMatchObject({
            success: true,
        })
        expect(validateURL('google.com')).toMatchObject({ success: true })
        expect(validateURL('www.google.com')).toMatchObject({ success: true })
    })
})
