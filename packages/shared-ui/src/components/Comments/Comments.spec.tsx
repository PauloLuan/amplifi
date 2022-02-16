import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils'

import { Comments } from '.'
// import theme from '../../styles/Theme'

describe('<Comments />', () => {
  it('should render the Comments component', () => {
    renderWithTheme(<Comments />)
    expect(screen.getByTestId('comments-id')).toBeInTheDocument()
  })
})
