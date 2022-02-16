import React from 'react'
import * as S from './Posts.styles'
import { PostType } from '../../interfaces'

export type PostsProps = {
  testId?: string
  posts: PostType[]
}

export const Posts = ({ testId = 'posts-id', posts, ...props }: PostsProps) => {
  return (
    <S.Container>
      <S.Title>Posts</S.Title>
      <S.CardContainer data-testid={testId} {...props}>
        {posts &&
          posts.map((post) => (
            <S.Card key={post.id}>
              <img src={`https://picsum.photos/300/200`} alt={post.title} />

              <S.CardContent>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </S.CardContent>
            </S.Card>
          ))}
      </S.CardContainer>
    </S.Container>
  )
}
