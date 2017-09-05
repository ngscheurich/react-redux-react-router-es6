import expect from 'expect'
import { authorsFormattedForSelect } from './selectors'

describe('Author selectors', () => {
  describe('authorsFormattedForSelect', () => {
    it('should return author data formatted for use in a <select>', () => {
      let authors = [{ id: 'test', firstName: 'Test', lastName: 'Author' }]
      let expected = [{ value: 'test', text: 'Test Author' }]
      expect(authorsFormattedForSelect(authors)).toEqual(expected)
    })
  })
})
