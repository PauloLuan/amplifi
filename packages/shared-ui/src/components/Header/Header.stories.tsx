import { storiesOf } from '@storybook/react'
import { Header } from './Header.component'

const args = {
  testId: 'component-header-id'
}

storiesOf('Components/Header', module).add('default: ', () => (
  <Header {...args} />
))
