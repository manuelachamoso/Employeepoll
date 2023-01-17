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

  const questionIndex = questions.findIndex((ques) => ques.id === id);

  if (questionIndex === -1) {
    return <Error />;
  }

  const timestamp = new Date(questions[questionIndex]["timestamp"]);
  const timestampDateFormat = timestamp.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"});

  if (typeof users[currentUser.id] === "undefined") {
    return <Error />;
  }

  const questionAnswer = users[currentUser.id].answers.hasOwnProperty(id);

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

  if (questionAnswer) {
    return (
      <div className="choose-answer"  data-testid="results">
         <div className="answer-container">
        <img
          src={users[questions[questionIndex]["author"]]["avatarURL"]}
          alt="profile"
        ></img>
        <p className="creator">
          Poll created by {questions[questionIndex]["author"]} on {timestampDateFormat}
        </p>
              <p className="results">
                Results:
              </p>
              <ul>
                <li>
                <span className="votes">Number of votes: {questions[questionIndex]["optionOne"]["votes"].length}</span>. (
                  {Math.round(
                    (questions[questionIndex]["optionOne"]["votes"].length /
                      (questions[questionIndex]["optionOne"]["votes"].length +
                        questions[questionIndex]["optionTwo"]["votes"].length)) *
                      100
                  )}
                  %) would rather {questions[questionIndex]["optionOne"]["text"]}
                </li>
                <li>
                   <span className="votes">Number of votes: {questions[questionIndex]["optionTwo"]["votes"].length}</span>. (
                  {Math.round(
                    (questions[questionIndex]["optionTwo"]["votes"].length /
                      (questions[questionIndex]["optionOne"]["votes"].length +
                        questions[questionIndex]["optionTwo"]["votes"].length)) *
                      100
                  )}
                  %) would rather {questions[questionIndex]["optionTwo"]["text"]}
                </li>
                <li className="your-choice">
                    <p>
                  <span>You </span>voted for {" "}
                  {questions[questionIndex]["optionOne"]["votes"].includes(
                    currentUser.id
                  )
                    ? questions[questionIndex]["optionOne"]["text"]
                    : questions[questionIndex]["optionTwo"]["text"]}
                    </p>
                </li>
              </ul>
            </div>
            <p className="thanks">Thanks for voting!</p>
          </div>
    );
  }
  return (
    <div className="choose-answer">
        <div className="answer-container">
      <img
        src={users[questions[questionIndex]["author"]]["avatarURL"]}
        alt="profile"
      ></img>
      <p className="creator">
        Poll created by {questions[questionIndex]["author"]} on {timestampDateFormat}
      </p>
      <p className="current-user">{currentUser.name}, would you rather...</p>
      <hr />
      <p className="answer-question">
        {questions[questionIndex]["optionOne"]["text"]}
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
        {questions[questionIndex]["optionTwo"]["text"]}
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
