import { screen } from '@testing-library/react'
import { renderWithTheme } from '@pauloluan/shared'

import { CommentModal } from '.'
// import theme from '../Theme'

describe('<CommentModal />', () => {
  it('should render the CommentModal component and find it by Test Id', () => {
    renderWithTheme(
      <CommentModal
        postId="123"
        commentModalIsOpen={true}
        handleCloseModal={() => null}
        testId="CommentModal"
      />
    )
    expect(screen.getByTestId(/CommentModal/i)).toBeDefined()
  })
})
