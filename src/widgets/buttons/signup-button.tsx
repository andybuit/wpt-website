import * as React from 'react'
import './button.css'
import './signup-button.css'

type Props = {
 text: string,
 onClick?: ()=>void
}

export default (props: Props) => <button onClick={props.onClick} className="loginBtn loginBtn_signup">
   {props.text}
</button>;