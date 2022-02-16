import { Story, Meta } from '@storybook/react'
import { Article, ArticleProps } from '../../../src/components/Article'
import { posts } from '../Posts/Posts.data'

export default {
  title: 'Components/Article',
  component: Article
} as Meta

export const Default: Story<ArticleProps> = (args) => (
  <Article post={posts[0]} {...args} />
)
