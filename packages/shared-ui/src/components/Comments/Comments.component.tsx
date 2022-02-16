import React from 'react'
import * as S from './Comments.styles'

export interface CommentsProps {
  testId?: string
}

export const Comments = ({
  testId = 'comments-id',
  ...props
}: CommentsProps) => {
  return (
    <>
      <S.Container data-testid={testId} {...props}>
        Almost before we knew it, we had left the ground.{' '}
      </S.Container>
    </>
  )
}
