import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'

import { CommentModal } from '.'
// import theme from '../Theme'

describe('<CommentModal />', () => {
  it('should render the CommentModal component and find it by Test Id', () => {
    renderWithTheme(
      <CommentModal commentModalIsOpen={true} testId="CommentModal" />
    )
    expect(screen.getByTestId(/CommentModal/i)).toBeDefined()
  })
})
