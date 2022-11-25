import React, { useEffect } from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "./refreshToken";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const clientId =
  "142633501079-n4tr94p0clf2k44ickf9qdrsbahvru2r.apps.googleusercontent.com";
const MySwal = withReactContent(Swal);
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
    MySwal.fire({
      title: "you have a breaking news in your favorite category !",
      // text: "Saudi Arabia declares public holiday to mark World Cup win over Argentina",
      confirmButtonColor: "black",
      html: "<Link to={'http://localhost:3000/SinglePage/44'}><p>Saudi Arabia declares public holiday to mark World Cup win over Argentina<p><Link>",
      imageUrl:
        "https://i.guim.co.uk/img/media/15bc8f63c2b4876f75c04e230d963aef3bc8d393/0_0_6000_3600/master/6000.jpg?width=620&quality=85&dpr=1&s=none",
    });
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
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginG;
