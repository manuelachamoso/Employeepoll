import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer, getQuestions } from "../reducers/questionsSlice";
import { getUsers } from "../reducers/userSlice";
import Loading from "./Loading";
import Error from './Error'

const Question = () => {
  const { id } = useParams();
  const { currentUser, users, isLoadingUsers } = useSelector(
    (store) => store.currentUser
  );
  const { questions, isLoadingAns, isLoadingQuestions } = useSelector(
    (store) => store.questions
  );
  const dispatch = useDispatch();

  const quesIndex = questions.findIndex((ques) => ques.id === id);

  if (quesIndex === -1) {
    return <Error />;
  }

  const quesDate = new Date(questions[quesIndex]["timestamp"]);
  const quesDateFormat =
    quesDate.getMonth() +
    1 +
    "/" +
    quesDate.getDate() +
    "/" +
    quesDate.getFullYear();

  if (typeof users[currentUser.id] === "undefined") {
    return <Error />;
  }

  const quesAns = users[currentUser.id].answers.hasOwnProperty(id);

  const handleChoiceOne = () => {
    const data = {
      authedUser: currentUser.id,
      qid: id,
      answer: "optionOne",
    };

    dispatch(saveQuestionAnswer(data)).then(() => {
      dispatch(getQuestions()).then(() => {
        dispatch(getUsers());
      });
    });
  };

  const handleChoiceTwo = () => {
    const data = {
      authedUser: currentUser.id,
      qid: id,
      answer: "optionTwo",
    };

    dispatch(saveQuestionAnswer(data)).then(() => {
      dispatch(getQuestions()).then(() => {
        dispatch(getUsers());
      });
    });
  };

  if (isLoadingAns || isLoadingQuestions || isLoadingUsers) {
    return <Loading />;
  }

  if (quesAns) {
    return (
      <div className="choose-answer">
         <div className="answer-container">
        <img
          src={users[questions[quesIndex]["author"]]["avatarURL"]}
          alt="profile"
        ></img>
        <p className="creator">
          Poll created by {questions[quesIndex]["author"]} on {quesDateFormat}
        </p>
              <p className="results">
                Results:
              </p>
              <ul>
                <li>
                <span className="votes">Number of votes: {questions[quesIndex]["optionOne"]["votes"].length}</span>. (
                  {Math.round(
                    (questions[quesIndex]["optionOne"]["votes"].length /
                      (questions[quesIndex]["optionOne"]["votes"].length +
                        questions[quesIndex]["optionTwo"]["votes"].length)) *
                      100
                  )}
                  %) would rather {questions[quesIndex]["optionOne"]["text"]}
                </li>
                <li>
                   <span className="votes">Number of votes: {questions[quesIndex]["optionTwo"]["votes"].length}</span>. (
                  {Math.round(
                    (questions[quesIndex]["optionTwo"]["votes"].length /
                      (questions[quesIndex]["optionOne"]["votes"].length +
                        questions[quesIndex]["optionTwo"]["votes"].length)) *
                      100
                  )}
                  %) would rather {questions[quesIndex]["optionTwo"]["text"]}
                </li>
                <li className="your-choice">
                    <p>
                  <span>You </span>voted for {" "}
                  {questions[quesIndex]["optionOne"]["votes"].includes(
                    currentUser.id
                  )
                    ? questions[quesIndex]["optionOne"]["text"]
                    : questions[quesIndex]["optionTwo"]["text"]}
                    </p>
                </li>
              </ul>
            </div>
            <p className="thanks">Thank you for voting!</p>
          </div>
    );
  }
  return (
    <div className="choose-answer">
        <div className="answer-container">
      <img
        src={users[questions[quesIndex]["author"]]["avatarURL"]}
        alt="profile"
      ></img>
      <p className="creator">
        Poll created by {questions[quesIndex]["author"]} on {quesDateFormat}
      </p>
      <p className="current-user">{currentUser.name}, would you rather...</p>
      <hr />
      <p className="answer-question">
        {questions[quesIndex]["optionOne"]["text"]}
      </p>
      <div className="answer-button">
        <button 
          onClick={handleChoiceOne}
        >
          Choose
        </button>
      </div>
      <hr />

      <p  className="answer-question">
        {questions[quesIndex]["optionTwo"]["text"]}
      </p>
      <div className="answer-button">
        <button className="choice-button"
          onClick={handleChoiceTwo}
        >
          Choose
        </button>
      </div>
    </div>
    </div>
  );
};
export default Question;
