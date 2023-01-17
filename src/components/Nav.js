import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
   const nonactive = "text-gray-500";

  const active = "text-black font-bold";

  const location = useLocation();

  return (
    <div className="container-navbar">
      <nav className="navbar">
        <button className="nav-button">
        <Link to="/" className={location.pathname === "/" ? active : nonactive}>
          Home
        </Link>
        </button>
        <button className="nav-button" >
        <Link className={location.pathname === "/add" ? active : nonactive}
          to="/addpoll"
        >
          Add Poll
        </Link>
        </button>
        <button className="nav-button">
        <Link className={location.pathname === "/leaderboard" ? active : nonactive}
          to="/leaderboard"
        >
          Leaderboard
        </Link>
        </button>
        <button className="logout" onClick={() => {dispatch(setUser(""))}}>
        Logout
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
