import { storiesOf } from '@storybook/react'
import { Posts } from '../../../src/components/Posts/Posts.component'
import { posts } from './Posts.data'

const args = {
  testId: 'component-posts-id'
}

storiesOf('Components/Posts', module).add('default: ', () => (
  <Posts posts={posts} {...args} />
))
