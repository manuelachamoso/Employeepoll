import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveQuestion } from "../reducers/questionsSlice";
import Loading from "./Loading";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isLoadingUsers } = useSelector((store) => store.currentUser);
  const { isLoadingQues, isLoadingQuestions } = useSelector(
    (store) => store.questions
  );

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");


  const handleOptionOne = (event) => {
    setOptionOne(event.target.value);
  };

  const handleOptionTwo = (event) => {
    setOptionTwo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: currentUser.id,
    };

    dispatch(saveQuestion(question)).then((res) => {
      navigate("/");
    });
  };

  if (isLoadingQues || isLoadingQuestions || isLoadingUsers) {
    return <Loading />;
  }

  return (
    <div className="add-poll">
      <div className="container">
        <img src={currentUser.avatarURL} alt="userPhoto" className="avatar" />
      <h1>
        {currentUser.name}, create your own poll
      </h1>
      <form onSubmit={handleSubmit}>
        <h1>
          Would you rather:
        </h1>
        <span>Option One:</span>
        <input
          type="text"
          name="optionOneText"
          id="optionOneText"
          required
          onChange={handleOptionOne}
        />
        <span>Option Two:</span>
        <input
          type="text"
          name="optionTwoText"
          id="optionTwoText"
          required
          onChange={handleOptionTwo}
        />
        <input
          type="submit"
          value="Submit"
          className="button"
        ></input>
      </form>
    </div>
    </div>
  );
};
export default Add;
