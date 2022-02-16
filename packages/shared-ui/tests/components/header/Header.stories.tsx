import { storiesOf } from '@storybook/react'
import { Header } from '../../../src/components/Header/Header.component'

const args = {
  testId: 'component-header-id'
}

storiesOf('Components/Header', module).add('default: ', () => (
  <Header {...args} />
))
