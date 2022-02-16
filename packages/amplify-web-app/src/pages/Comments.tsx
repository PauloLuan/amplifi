import { api } from '../services/axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Comments, CommentType } from '@pauloluan/shared'
import { useComments } from '../providers'
import { useEffect } from 'react'

export function CommentsSection({ postId }: { postId: string }) {
  const { comments, fetchComments } = useComments()

  useEffect(() => {
    fetchComments(postId)
  }, [])

  return (
    <>
      <Comments comments={comments} />
    </>
  )
}
