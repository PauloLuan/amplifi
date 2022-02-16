import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Posts } from '../../../src/components/Posts/Posts.component'
// import theme from '../../styles/Theme'

describe('<Posts />', () => {
  it('should render the Posts component', () => {
    renderWithTheme(<Posts />)
    expect(screen.getByTestId('post-id')).toBeInTheDocument()
  })
})
