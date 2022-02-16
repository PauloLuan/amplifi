import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Posts } from '../../../src/components/Posts/Posts.component'
import { posts } from './Posts.data'
import { MemoryRouter } from 'react-router-dom'

// import theme from '../../styles/Theme'

describe('<Posts />', () => {
  it('should render the Posts component', () => {
    renderWithTheme(
      <MemoryRouter>
        <Posts posts={posts} />
      </MemoryRouter>
    )
    expect(screen.getByTestId('posts-id')).toBeInTheDocument()
  })
})
