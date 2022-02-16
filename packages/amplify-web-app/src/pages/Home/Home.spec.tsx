import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@pauloluan/shared'

import { Home } from '.'
// import theme from '../Theme'

describe('<Home />', () => {
  it('should render the Home component and find it by Test Id', () => {
    renderWithTheme(<Home testId="component-home-id" />)
    expect(screen.getByTestId(/Home/i)).toBeDefined()
  })
})
