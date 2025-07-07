import { NavLink } from "react-router-dom";
import logo from "../../public/vite.svg";

export default function Navbar() {
  return (
    <div className="flex item-center justify-between h-15 bg-black">
      <img className=" h-7  ml-10 mt-5" src={logo} alt="logo" />
      <ul className="flex flex-row-reverse space-x-8 text-lg font-medium text-white mt-5">
        <li className="active:text-blue-200">
          <NavLink to="/timer">Timer</NavLink>
        </li>
        <li>
          <NavLink to="/todo">ToDo</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>

        <li className="mr-8">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
}
