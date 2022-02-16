import { storiesOf } from '@storybook/react'
import { Home } from './Home.component'

const args = {
  testId: 'component-home-id'
}

storiesOf('Components/Home', module).add('default: ', () => <Home {...args} />)
