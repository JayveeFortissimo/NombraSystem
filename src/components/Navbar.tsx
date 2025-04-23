import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const quantityTag: number[] = [0, 1, 2];

  const humburgerColorstyle = {
    backgroundColor: "black",
    height: "0.3rem",
    width: "2.5rem",
  };
  
  return (
    <nav className="min-h-[5rem] pl-10 pr-10 flex justify-between items-center sticky top-0">
      <p className="text-2xl">Manemashima</p>

      <div className="flex gap-4 items-center sm:hidden md:flex xs:hidden">
        <NavLink to="/" className={({isActive}) => isActive? "border-b border-amber-300": undefined} end>Home</NavLink>
        <NavLink  to="about"  className={({ isActive }) => isActive ? "border-b border-amber-300" : undefined}>About</NavLink>
        <p><CgProfile size={25} /></p>
      </div>

      <div className="flex flex-col gap-1 cursor-pointer md:hidden">
        {quantityTag.map((index: number) => {
          return <div key={index} style={humburgerColorstyle}></div>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
