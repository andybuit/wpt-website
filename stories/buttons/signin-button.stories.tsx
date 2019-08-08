import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../../src/widgets/buttons/signup-button'

storiesOf('Sign Up Button', module).add('with text', () => {
 return <Button text="Sign up with Email" />
})
