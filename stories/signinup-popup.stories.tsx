import * as React from 'react'
import { storiesOf } from '@storybook/react'
import SignInUp from '../src/containers/signinup-popup'
import "typeface-roboto";

storiesOf('SignInUp', module).add('with text', () => {
 return <SignInUp />
})
