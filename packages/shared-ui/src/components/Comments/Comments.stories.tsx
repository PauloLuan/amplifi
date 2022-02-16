import { Story, Meta } from '@storybook/react'
import { Comments, CommentsProps } from '.'

export default {
  title: 'Components/Comments',
  component: Comments
} as Meta

export const Default: Story<CommentsProps> = (args) => <Comments {...args} />
