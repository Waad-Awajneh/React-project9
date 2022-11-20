import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputFiled from "./inputFiled";
import { BsGoogle } from "react-icons/bs";
import { useCookies } from "react-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "black",
      });
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.allUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };

  return (
    <>
      <section className=" w-full h-full my-10">
        <div
          className=" top-0 w-full h-3/4 bg-gray-900 "
          style={{
            backgroundImage:
              "url(https://th.bing.com/th/id/R.f768c15607084a0b1e1a7802259d889d?rik=PW1FJqYdFpgi0w&riu=http%3a%2f%2fimg.photobucket.com%2falbums%2fv328%2fClayskater%2fGreetings%2fBanners%2fnews-banner3.jpg&ehk=TrZpgVN4FsukXfmwEcTN1E%2bvltVb0%2bWXUoGFHRCQQo8%3d&risl=&pid=ImgRaw&r=0)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full ">
          <div className="flex content-center items-center justify-evenly h-full ">
            <div className="w-full lg:w-4/12 px-4">
              <div className=" max-[380px]:h-80  max-[320px]:h-64  relative flex flex-col min-w-0 break-words w-full mb-6 border-0 my-5 bg-white dark:bg-[#18191c] shadow-2xl hover:shadow duration-200 rounded-xl">
                <div className="rounded-t mb-0 px-6 py-6">
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small> Be Classical</small>
                  </div>
                  <form>
                    <InputFiled
                      placeholder={"Email "}
                      type={"email"}
                      icon={"AiTwotoneMail"}
                      id={"email"}
                    />
                    <InputFiled
                      placeholder={"Password "}
                      type={"password"}
                      icon={"RiLockPasswordFill"}
                      id={"password"}
                    />

                    {/*   <Checkbox data="Remember me" />*/}
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={handelSubmit}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2 text-right">
                      <Link
                        to="/signup"
                        className="text-gray-800 hover:shadow-lg"
                      >
                        <small>Create new account</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
