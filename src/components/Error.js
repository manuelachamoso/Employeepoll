import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
    <div className="intro">
      <div className="i-left">
        <div className="i-text">
          <h1>404</h1>
          <h2>Are you lost?</h2>
          <p>Sorry, the page you are looking for could not be found.</p>
          <button className="back">
          <Link to="/">Go back to home </Link></button>  
        </div>
      </div>
      </div>
    </>
  );
};

export default Error;
