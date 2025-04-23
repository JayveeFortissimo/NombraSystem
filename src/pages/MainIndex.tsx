import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainIndex = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainIndex;
