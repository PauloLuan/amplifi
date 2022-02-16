import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Posts } from '../../../src/components/Posts/Posts.component'
import { posts } from './Posts.data'
// import theme from '../../styles/Theme'

describe('<Posts />', () => {
  it('should render the Posts component', () => {
    renderWithTheme(<Posts posts={posts} />)
    expect(screen.getByTestId('post-id')).toBeInTheDocument()
  })
})
