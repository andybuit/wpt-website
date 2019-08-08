import React from "react";
import { NextPage } from "next";
import FBScript from "../utils/fb-script";
import FBButton from "../widgets/buttons/fb-button";
import { withTranslation } from '../../i18n'

const Home: NextPage = () => {
  return (
    <>
      <FBScript appId="1010700779321003" />
      <FBButton text="Login With Facebook" />
      
    </>
  );
};

Home.getInitialProps = async () => {
  return {};
};

export default withTranslation(['common'])(Home);
