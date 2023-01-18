import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser} from "../reducers/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.currentUser);


  return (
    <div className="container-navbar">
      <nav className="navbar">
        <div className= 'nav-bar'>
        <button className="nav-button">
        <Link to="/">
          Home
        </Link>
        </button>
        <button className="nav-button" >
        <Link 
          to="/add"
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
        </div>
        <div className="nav-bar-two">
        {currentUser ? (
        <p>Welcome, {currentUser.name}  <button className="logout" onClick={() => {dispatch(setUser(""))}}>
        Logout
        </button> </p>
        ) : (
          <p></p>
        )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
