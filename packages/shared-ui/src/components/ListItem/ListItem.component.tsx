import React from 'react'
import * as S from './ListItem.styles'

export interface ListItemProps {
  testId?: string
}

export const ListItem = ({ testId = 'listItem-id' }: ListItemProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Content>
        <S.LogoImage />
      </S.Content>
    </S.Container>
  )
}
