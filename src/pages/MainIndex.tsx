import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const MainIndex = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainIndex;
