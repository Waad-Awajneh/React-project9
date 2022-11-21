import React, { useEffect } from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "./refreshToken";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
const clientId =
  "142633501079-n4tr94p0clf2k44ickf9qdrsbahvru2r.apps.googleusercontent.com";

function LoginG() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const navigate = useNavigate();
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setCookie("currentUser", res.profileObj, { path: "/" });

    refreshTokenSetup(res);
    navigate("/");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    // alert(
    //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    // );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginG;
