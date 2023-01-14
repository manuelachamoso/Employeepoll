import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/userSlice";
import Home from "./Home";


const Login = () => {
  const dispatch = useDispatch();

  const { currentUser, users} = useSelector(
    (store) => store.currentUser
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username in users && users[username]["password"] === password) {
      setLoginError(false);
   
      dispatch(setUser(users[username]));

      
    } else {
      setLoginError(true);
    }
  };

  if (currentUser !== "") {
    return <Home />;
  }

  return (
    <div className="login-container">
    <div className="login">
      <div className="profile"><img src="https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png" alt="" />
      </div>
      <h1 className="header">
        Employee Polls
      </h1>
      <h1 className="login-title">Login</h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        Username:
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={handleUsername}
          className="username"
        />
        Password:
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handlePassword}
          className="password"
        />
        <input
          type="submit"
          value="Submit"
          className="button-submit"
        ></input>
        {loginError ? (
          <p className="login-error">
            Error! Incorrect username or password.
          </p>
        ) : (
          <div></div>
        )}
      </form>
    </div>
    </div>
  );
};
export default Login;