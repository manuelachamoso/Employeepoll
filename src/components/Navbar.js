import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="container-navbar">
      <nav className="navbar">
        <button className="nav-button">
        <Link to="/">
          Home
        </Link>
        </button>
        <button className="nav-button">
        <Link
          to="/addpoll"
        >
          Add Poll
        </Link>
        </button>
        <button className="nav-button">
        <Link
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
