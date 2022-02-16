import { api } from '../services/axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Comments, CommentType } from '@pauloluan/shared'
import { useComments } from '../providers'
import { useEffect } from 'react'
import { CommentModal, useCommentModal } from '../components/CommentModal'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const Button = styled.button`
  background: #33cc95;
  border: 2px solid green;
  border-radius: 3px;
  width: 500px;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1.2rem 0;
  padding: 1rem 1.5rem;
`

export function CommentsSection({ postId }: { postId: string }) {
  const { handleOpenModal, handleCloseModal, commentModalIsOpen } =
    useCommentModal()
  const { comments, fetchComments } = useComments()

  useEffect(() => {
    fetchComments(postId)
  }, [])

  return (
    <Container>
      <Button onClick={handleOpenModal}>Add Comment</Button>
      <CommentModal
        postId={postId}
        handleCloseModal={handleCloseModal}
        commentModalIsOpen={commentModalIsOpen}
      />
      <Comments comments={comments} />
    </Container>
  )
}
