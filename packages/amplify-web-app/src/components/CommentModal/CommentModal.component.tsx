import React, { SyntheticEvent, useState } from 'react'
import Modal from 'react-modal'
import { CommentType } from '@pauloluan/shared/src/interfaces'
// import { useComments } from '../../providers'
import * as S from './CommentModal.styles'

export interface CommentModalProps {
  testId?: string
  postId: string
  commentModalIsOpen: boolean
  handleCloseModal: () => void
}

type CommentFormType = Pick<CommentType, 'postId' | 'name' | 'email' | 'body'>

const NOT_TEST = process.env.NODE_ENV !== 'test'
NOT_TEST && Modal.setAppElement('#root')

export const CommentModal = ({
  testId = 'CommentModal',
  postId,
  commentModalIsOpen,
  handleCloseModal
}: CommentModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  // const { addComment } = useComments()

  const _clearState = () => {
    setName('')
    setEmail('')
    setBody('')
  }

  const _handleFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    const data: CommentFormType = {
      postId,
      name,
      email,
      body
    }

    // addComment(data)
    console.log(data)
    _clearState()
    handleCloseModal()
  }

  return (
    <>
      <S.CustomCommentModalStyles />
      <Modal
        isOpen={commentModalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Register comment modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <S.CloseButton onClick={handleCloseModal} />

        <S.Form data-testid={testId} onSubmit={_handleFormSubmit}>
          <h2>New Comment</h2>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={body}
            onChange={(event) => setBody(event.target.value)}
            type="text"
            placeholder="Comment"
          />

          <button type="submit">Register your comment</button>
        </S.Form>
      </Modal>
    </>
  )
}
