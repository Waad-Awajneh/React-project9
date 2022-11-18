import React, { useState } from "react";

import { FaFacebookSquare } from "react-icons/fa";
import InputFiled from "./inputFiled";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import Checkbox from "./checkBox";
// import FooterComponent from "./Footer";
// import Navbar from "./Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};

function SignUp() {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["AllUsers"]);

  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      console.log("tets");
      if (checkEmail(email)) {
        let newUser = { name: name, email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
        navigate("/");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Email is already used",
          denyButtonColor: "#8E05C2",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Password or Email pattern ",
        denyButtonColor: "#8E05C2",
      });
    }
  };

  function checkEmail(E) {
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }

  return (
    <>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage: "url(./images/sidebar-banner-new.jpg)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="container mx-auto px-4 h-full ">
          <div className="flex content-center items-center justify-end h-full ">
            <div className="w-full lg:w-4/12 px-4">
              <div className=" max-[380px]:h-80  max-[320px]:h-64  relative flex flex-col min-w-0 break-words w-full mb-6 border-0 my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-5">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <BsGoogle className="w-5 mr-1" />
                      Google
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <FaFacebookSquare className="w-5 mr-1" />
                      FaceBook
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or Be Classical</small>
                  </div>
                  <form>
                    <InputFiled
                      placeholder={"First Name "}
                      type={"text"}
                      icon={"MdFace"}
                      id={"name"}
                    />
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
                    <InputFiled
                      placeholder={"Confirm Password "}
                      type={"password"}
                      icon={"RiLockPasswordFill"}
                      id={"ConfirmPassword"}
                    />

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={handelSubmit}
                      >
                        SignUp
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2 text-right">
                      <Link
                        to={"/login"}
                        onClick={(e) => e.preventDefault()}
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

export default SignUp;
