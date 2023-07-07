import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContextManager, apiUrlContextManager } from "../../../App";
// import login from ''


const Login = () => {

  const [getEmail, setEmail] = useState()
  const [getPass, setPass] = useState()

  const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);
  const [getApiBasicUrl] = useContext(apiUrlContextManager);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const loginInfo = {
      "email" : getEmail, 
      "password" : getPass
    }
    fetch(`${getApiBasicUrl}/admin-sign-in`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + getToken
      },
      body: JSON.stringify(loginInfo),
    }
    ).then(res => res.json())
      .then(data => {
        console.log(data)
        setAdminUserInfo(data.id)
        data.id > 0 && navigate('/dashboard/all-question-list')
      })
      
  }

  return (
    <div>
      <div>
        <section>
          <div class="px-6 h-full text-gray-800 pt-28">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-6/12 md:w-9/12  mb-12 md:mb-0">
                <img src={require('../../../images/login.jpg')} class="w-full rounded-lg" alt="Sample image" />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                  <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-3xl mb-5 font-bold mr-4">Sign in</p>

                  </div>


                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>

                  <div class="mb-6">
                    <input
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={(e)=> setPass(e.target.value)}
                    />
                  </div>

                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    {/* <a href="#!" class="text-gray-800 hover:text-red-600">
                      Forgot password?
                    </a> */}
                  </div>

                  <div class="text-center lg:text-left">
                    <Link
                      type="button"
                      class="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500  transition duration-300 ease-in-out"
                      onClick={handelSubmit}

                    >
                      Login
                    </Link>
                    {/* <p class="text-sm font-semibold mt-2 pt-1  mb-0">
                      Don't have an account?
                      <button to="/signup">
                        <a
                          href="#!"
                          class="text-red-600 hover:text-green-500 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          Sign up
                        </a>
                      </button>
                    </p> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
