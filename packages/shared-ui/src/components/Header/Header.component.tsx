import React from 'react'
import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({ testId = 'header-id' }: HeaderProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Content>
        <S.LogoImage />
      </S.Content>
    </S.Container>
  )
}
