import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Article } from '../../../src/components/Article'
// import theme from '../../styles/Theme'
import { posts } from '../Posts/Posts.data'

describe('<Article />', () => {
  it('should render the Article component', () => {
    renderWithTheme(<Article post={posts[0]} />)
    expect(screen.getByTestId('article-id')).toBeInTheDocument()
  })
})
