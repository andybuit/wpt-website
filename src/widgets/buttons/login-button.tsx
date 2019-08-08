import * as React from 'react'
import './button.css'
import './login-button.css'

type Props = {
 text: string,
 onClick?: ()=>void
}

export default (props: Props) => <button onClick={props.onClick} className="loginBtn loginBtn_login">
   {props.text}
</button>;