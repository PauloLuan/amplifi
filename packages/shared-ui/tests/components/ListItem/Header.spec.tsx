import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { Header } from '../../../src/components/Header/Header.component'
// import theme from '../../styles/Theme'

describe('<Header />', () => {
  it('should render the Header component', () => {
    renderWithTheme(<Header />)
    expect(screen.getByTestId('header-id')).toBeInTheDocument()
  })
})
