import image from "../assets/JJ.jpg";
import { useNavigate } from "react-router";

const About = () => {

const direct = useNavigate();

  return (
    <div className="min-h-[90vh] p-5 flex justify-center items-center gap-10 flex-wrap">
      <img src={image} alt="" className="rounded-4xl"/>

      <div className="max-w-[30rem] xs:text-center lg:text-left">
        <h1 className="text-3xl">Hello Im Jayvee Maniquiz</h1>
        <div>
        <p>
          I want to become a software/cloud Engineer and the same time i want to be a professional musician. Currently im 4th year
          college at bulacan state University
        </p>
        <button 
        onClick={() => direct('/login')}
        className="w-[10rem] h-[2rem] shadow-2xl cursor-pointer mt-3 bg-blue-600 text-white font-medium rounded transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
        </div>
    
      </div>
    </div>
  );
};

export default About;
