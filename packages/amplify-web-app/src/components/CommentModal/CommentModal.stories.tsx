import { Story, Meta } from '@storybook/react/types-6-0'
import { CommentModal, CommentModalProps, useCommentModal } from '.'

export default {
  title: 'components/CommentModal',
  component: CommentModal,
  args: {
    color: 'black',
    size: 'large'
  }
} as Meta

export const Default: Story<CommentModalProps> = (args) => {
  const { handleOpenModal, handleCloseModal, commentModalIsOpen } =
    useCommentModal()
  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <CommentModal
        {...args}
        postId={'123'}
        handleCloseModal={handleCloseModal}
        commentModalIsOpen={commentModalIsOpen}
      />
    </>
  )
}
