import image from "../assets/RR.png";

interface prosLogin {
  seePassword: boolean;
  setConditional: (pro: any) => void;
}

const Register: React.FC<prosLogin> = ({ seePassword, setConditional }) => {
  return (
    <div className="h-auto w-[50rem] p-2 rounded shadow-2xl flex gap-5 xs:flex-wrap sm:flex-nowrap">
      <div className="w-[100%] flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl">Sign Up</h1>
        <form className="flex flex-col gap-2 w-[100%]">
          <div className="w-[100%]">
            <p className=" mb-2">User Name</p>
            <input
              type="text"
              className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
            />
          </div>

          <div className="w-[100%]">
            <p className=" mb-2">Email</p>
            <input
              type="text"
              className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
            />
          </div>

          <div className="w-[100%]">
            <p className=" mb-2">Address</p>
            <input
              type="text"
              className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
            />
          </div>

          <div className="w-[100%]">
            <p className="mb-2">Password</p>
            <input
              type={seePassword ? "text" : "password"}
              className="border h-[2rem] pl-2 pr-2 w-[100%] rounded text-[0.8rem]"
            />
          </div>

          <div className="w-[100%]">
            <p className=" mb-2">Confirm Password</p>
            <input
              type="text"
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
              Sigin Up
            </button>
          </div>

          <div className="w-[100%] text-center text-[0.9rem] ">
            <p
              onClick={() =>
                setConditional((pro: any) => ({
                  ...pro,
                  dontHaveAccount: false,
                }))
              }
              className="cursor-pointer hover:underline hover:text-blue-400"
            >
              Have Account Already?
            </p>
          </div>
        </form>
      </div>

      <img src={image} alt="" className="h-[40rem] rounded xs:hidden sm:flex" />
    </div>
  );
};

export default Register;
