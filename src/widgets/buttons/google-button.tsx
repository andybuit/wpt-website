import * as React from 'react'
import './button.css'
import './google-button.css'

type Props = {
 text: string
}

export default (props: Props) => <button className="loginBtn loginBtn_google">
   {props.text}
</button>;