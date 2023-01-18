import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAnswered } from "../reducers/answeredSlice";
import { getUsers } from "../reducers/userSlice";
import Loading from "./Loading";
import { getQuestions } from "../reducers/questionsSlice";
import Dashboard from "./Dashboard";

const Home = () => {
  const { currentUser, isLoadingUsers } = useSelector((store) => store.currentUser);
  const { isAnswered } = useSelector((store) => store.currentAnswered);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, [dispatch]);

  if (isLoadingUsers) {
    return <Loading />;
  }

  return (
    <div className="home" >
      <div className="home-container" data-testid='home'>
      <h1>
        Employee Polls
      </h1>
        <div className="user-container">
            <div>
            <img src={currentUser.avatarURL} alt="userPhoto" />
            </div>
          Welcome, {currentUser.name}
        </div>
        <div className="answer-button">
          <button
            onClick={() => dispatch(toggleAnswered())}
            
          >
            {isAnswered ? (
              <span>See Unanswered Polls</span>
            ) : (
              <span>See Answered Polls</span>
            )}
          </button>
        </div>
      </div>
     <Dashboard/>
    </div>
  );
};
export default Home;
