import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleAnswered } from "../reducers/answeredSlice";
import { getUsers } from "../reducers/userSlice";
import Loading from "./Loading";
import { getQuestions } from "../reducers/questionsSlice";

const Home = () => {
  const { currentUser, isLoadingUsers } = useSelector((store) => store.currentUser);
  const { questions} = useSelector((store) => store.questions);
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
    <div className="home">
      <div className="home-container">
      <h1>
        Employee Polls
      </h1>
        <div className="user-container">
            <div>
            <img src={currentUser.avatarURL} alt="userPhoto" />
            </div>
          Welcome,{" "}
          <span>
            {currentUser.name}
          </span>
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
      <div className="dashboard">
        <ul>
          {[...questions]
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((ques) => {
              return isAnswered
                ? (ques.optionOne.votes.includes(currentUser.id) ||
                    ques.optionTwo.votes.includes(currentUser.id)) && (
                    <div className="questions"
                    key={ques.id}>
                      <p className="question-rather">
                        Would you rather
                      </p>
                      <li>
                        <p className="question-option">
                          {ques.optionOne.text}
                        </p>
                        <span className="or">or </span>
                        <p className="question-option">
                          {ques.optionTwo.text}
                        </p>
                        <Link
                          className="check-answer"
                          to={"questions/" + ques.id}
                        >
                          View Your Answer
                        </Link>
                      </li>
                    </div>
                  )
                : !ques.optionOne.votes.includes(currentUser.id) &&
                    !ques.optionTwo.votes.includes(currentUser.id) && (
                      <div
                        key={ques.id}
                        className="questions"
                      >
                        <p className="question-rather">
                          Would you rather
                        </p>
                        <li>
                          <p className="question-option">
                            {ques.optionOne.text}
                          </p>
                          <span className="or">or </span>
                          <p className="question-option">
                            {ques.optionTwo.text}
                          </p>
                          <Link
                            className="check-answer"
                            to={"questions/" + ques.id}
                          >
                            Answer
                          </Link>
                        </li>
                      </div>
                    );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Home;
