import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Script from '../../src/utils/fb-script'

storiesOf('FB Script', module).add('with appId', () => {
 return <Script appId="1111111111111111111" />
})
