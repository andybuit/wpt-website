import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Script from '../../src/utils/google-script'

storiesOf('Google Script', module).add('with text', () => {
 return <div><Script clientId="1111111111111111111" />
 <Script clientId="222222222222222222222" />
 </div>
})
