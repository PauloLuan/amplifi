import React from 'react'
import * as S from './Comments.styles'
import { CommentType } from '../../interfaces'

export type CommentsProps = {
  testId?: string
  comments: CommentType[]
}

export const Comments = ({
  testId = 'comments-id',
  comments,
  ...props
}: CommentsProps) => {
  return (
    <S.Container data-testid={testId} {...props}>
      <S.Title>Comments</S.Title>
      {comments &&
        comments.map((comment) => (
          <S.Wrapper key={comment.id}>
            <strong>{comment.email}</strong>
            <p>{comment.body}</p>
          </S.Wrapper>
        ))}
    </S.Container>
  )
}
