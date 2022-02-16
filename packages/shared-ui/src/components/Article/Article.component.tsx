import React from 'react'
import * as S from './Article.styles'
import { PostType } from '../../interfaces'

export type ArticleProps = {
  testId?: string
  post: PostType
}

export const Article = ({
  testId = 'article-id',
  post,
  ...props
}: ArticleProps) => {
  return (
    <S.Container data-testid={testId} {...props}>
      <S.Title>{post.title}</S.Title>
      <S.Content>{post.body}</S.Content>
    </S.Container>
  )
}
