import image from "../assets/RR.png";
import Register from "../components/Register";
import { useState } from "react";

const Login: React.FC = () => {
  const [conditional, setConditional] = useState({
    seePassword: false,
    dontHaveAccount: false,
  });

  return (
    <div className="min-h-[100vh] p-5 flex justify-center items-center">
      {!conditional.dontHaveAccount && (
        <div className="h-auto w-[50rem] p-2 rounded shadow-2xl flex gap-5 xs:flex-wrap sm:flex-nowrap">
          <img
            src={image}
            alt=""
            className="h-[30rem] rounded xs:hidden sm:flex"
          />

          <div className="w-[100%] flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl">Sign In</h1>
            <form className="flex flex-col gap-6 w-[100%]">
              <div className="w-[100%]">
                <p className=" mb-2">User Name</p>
                <input
                  type="text"
                  className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
                />
              </div>
              <div className="w-[100%]">
                <p className="mb-2">Password</p>
                <input
                  type={conditional.seePassword ? "text" : "password"}
                  className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[0.9rem]">Show password?</span>
                <input
                  type="checkbox"
                  onClick={() =>
                    setConditional((pro: any) => ({
                      ...pro,
                      seePassword: !pro.seePassword,
                    }))
                  }
                />
              </div>
              <div className="flex justify-center items-center w-[100%]">
                <button className="border w-[100%] rounded shadow-2xl px-6 py-3 bg-blue-600 text-white font-medium  transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
                  Sigin In
                </button>
              </div>

              <div className="w-[100%] text-center text-[0.9rem] ">
                <p 
                onClick={() => setConditional(pro => ({...pro,dontHaveAccount:true}))}
                className="cursor-pointer hover:underline hover:text-blue-400">
                  Don't have Account yet?
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {conditional.dontHaveAccount && (
        <Register
          seePassword={conditional.seePassword}
          setConditional={setConditional}
        />
      )}
    </div>
  );
};

export default Login;
