import App, { AppContext, Container } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from '../../i18n'

interface Props {}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
