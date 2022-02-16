import { storiesOf } from '@storybook/react'
import { Posts } from '../../../src/components/Posts/Posts.component'
import { posts } from './Posts.data'
import { MemoryRouter } from 'react-router-dom'

const args = {
  testId: 'component-posts-id'
}

storiesOf('Components/Posts', module).add('default: ', () => (
  <MemoryRouter>
    <Posts posts={posts} {...args} />
  </MemoryRouter>
))
