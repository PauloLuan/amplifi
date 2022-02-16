import { storiesOf } from '@storybook/react'
import { ListItem } from '../../../src/components/ListItem/ListItem.component'

const args = {
  testId: 'component-listItem-id'
}

storiesOf('Components/ListItem', module).add('default: ', () => (
  <ListItem {...args} />
))
