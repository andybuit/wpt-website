import * as React from "react";
import "./button.css";
import "./fb-button.css";

type Props = {
  text: string;
};

const FBButton = (props: Props) => {
  const checkLoginState = (response: { authResponse: any }) => {
   console.log(response);
    const FB = (window as any).FB;
    if (response.authResponse) {
      console.log("Welcome!  Fetching your information.... ");
      FB.api("/me?scope=email", {fields: 'name, email, last_name'}, (response: { name: string }) => {
        console.log(response);
      });
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  };
  const login = () => {
    const FB = (window as any).FB;
    FB.getLoginStatus((response: any) => {
      if (response.status === "connected") {
        // The user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire.
        // var uid = response.authResponse.userID;
        // var accessToken = response.authResponse.accessToken;
        checkLoginState(response);
      } else {
        FB.login(checkLoginState, {scope: 'public_profile,email'});
      }
    });
  };

  return (
    <button onClick={login} className="loginBtn loginBtn_facebook">
      {props.text}
    </button>
  );
};

export default FBButton;
