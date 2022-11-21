import React from "react";
import { GoogleLogout } from "react-google-login";
import { useCookies } from "react-cookie";

const clientId =
  "142633501079-n4tr94p0clf2k44ickf9qdrsbahvru2r.apps.googleusercontent.com";

function Logout() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const onSuccess = () => {
    console.log("Logout made successfully");
    removeCookie("currentUser");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        icon={false}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
