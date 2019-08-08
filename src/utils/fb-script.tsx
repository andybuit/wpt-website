import * as React from "react";
import loadScript from "./load-script";

const defaultProps = {
  xfbml: false,
  cookie: false,
  version: "3.1",
  language: "en_US"
};

type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
  appId: string;
} & Partial<DefaultProps>;

class FBScript extends React.Component<Props> {
  static defaultProps = defaultProps;

  componentDidMount() {
    if (document.getElementById("facebook-jssdk")) {
      return;
    }
    this.setFbAsyncInit();
    const jsSrc = `https://connect.facebook.net/${this.props.language}/sdk.js`;
    loadScript(document, "script", "facebook-jssdk", jsSrc, () => {});
    let fbRoot = document.getElementById("fb-root");
    if (!fbRoot) {
      fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }
  }

  componentWillUnmount() {
    const el = document.getElementById("google-login");
    el && el.parentNode && el.parentNode.removeChild(el);
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version } = this.props;
    console.log(appId);
    (window as any).fbAsyncInit = () => {
      (window as any).FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie
      });
    };
  }

  render() {
    return null;
  }
}

export default FBScript;
