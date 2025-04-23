import { useNavigate } from "react-router";

const Homepage: React.FC = () => {
  const redirect = useNavigate();

  return (
    <div className="min-h-[90vh] p-5 flex justify-center items-center flex-col gap-10">
      <div className="xs:max-w-[40rem] md:max-w-[50rem]">
        <h1 className=" xs:text-3xl md:text-6xl text-center text-gray-600 font-bold">
          Hello, This is the Nombra System of <span className="text-blue-600">Chows of Santa Maria Bulacan</span>
        </h1>
        <p className="text-center text-2xl">Build a nombra system for my band name chows of santa maria bulacan to manage the member who line up for asiste</p>
      </div>
      <button
        onClick={() => redirect("/about")}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
      >
        See More
      </button>
    </div>
  );
};

export default Homepage;
