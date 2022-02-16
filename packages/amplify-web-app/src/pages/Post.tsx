import { useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { CommentsSection } from './Comments'
import { Article, PostType } from '@pauloluan/shared'

export function PostPage() {
  const params = useParams()
  const postId = params['*'] as string
  const queryClient = useQueryClient()

  const getCachedPost = (postId: number) => {
    let currentPost
    const previousPosts = queryClient.getQueryData<PostType[]>('posts')
    if (previousPosts) {
      currentPost = previousPosts.find((post) => post.id === postId)
    }

    return currentPost
  }

  const post = getCachedPost(Number(postId))

  return (
    <>
      <Article post={post} />
      <CommentsSection postId={postId} />
    </>
  )
}
