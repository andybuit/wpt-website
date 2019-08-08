import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../../src/widgets/buttons/google-button'

storiesOf('Google Button', module).add('with text', () => {
 return <Button text="Login With Google" />
})
