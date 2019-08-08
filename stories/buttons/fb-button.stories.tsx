import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../src/widgets/buttons/fb-button";
import FBScript from "../../src/utils/fb-script";

storiesOf("FB Button", module).add("with text", () => {
  return <Button text="Login With Facebook" />;
});

storiesOf("FB Button", module).add("with login", () => {
  return (
    <>
      <FBScript appId="1010700779321003" />
      <Button text="Login With Facebook" />
    </>
  );
});
