import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Comments } from '../../../src/components/Comments'
// import theme from '../../styles/Theme'

describe('<Comments />', () => {
  it('should render the Comments component', () => {
    renderWithTheme(<Comments comments={[]} />)
    expect(screen.getByTestId('comments-id')).toBeInTheDocument()
  })
})
