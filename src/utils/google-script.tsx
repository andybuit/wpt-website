import * as React from 'react';
import loadScript from './load-script'

const defaultProps = {
  scope: 'profile email',
  accessType: 'online',
  cookiePolicy: 'single_host_origin',
  fetchBasicProfile: true,
  uxMode: 'popup',
  jsSrc: 'https://apis.google.com/js/api.js'
}

type DefaultProps = Readonly<typeof defaultProps>;

type  Props = {
  clientId: string,
  redirectUri?: string,
  loginHint?: string,
  hostedDomain?: string,
  discoveryDocs?: [],
  responseType?: string,
} & Partial<DefaultProps>

class GoogleScript extends React.Component<Props> {
  
  static defaultProps = defaultProps

  componentDidMount() {
    const {
      clientId,
      cookiePolicy,
      loginHint,
      hostedDomain,
      fetchBasicProfile,
      redirectUri,
      discoveryDocs,
      uxMode,
      scope,
      accessType,
      responseType,
      jsSrc
    } = this.props

    loadScript(document, 'script', 'google-jssdk', jsSrc, () => {
      const params = {
        client_id: clientId,
        cookie_policy: cookiePolicy,
        login_hint: loginHint,
        hosted_domain: hostedDomain,
        fetch_basic_profile: fetchBasicProfile,
        discoveryDocs,
        ux_mode: uxMode,
        redirect_uri: redirectUri,
        scope,
        access_type: accessType
      }

      if (responseType === 'code') {
        params.access_type = 'offline'
      }

      // window.gapi.load('auth2', () => {
      //   if (!window.gapi.auth2.getAuthInstance()) {
      //     window.gapi.auth2.init(params).then(
      //       (res: any) => {
      //         this.onLoadSuccess(res);
      //       },
      //       (err: any) => {
      //         return onLoadFailure(err);
      //       }
      //     )
      //   }
      // })
    })
  }

  componentWillUnmount() {
    const el = document.getElementById('google-login')
    el && el.parentNode && el.parentNode.removeChild(el);
  }

  render() {
    return <span></span>;
  }
}

export default GoogleScript;