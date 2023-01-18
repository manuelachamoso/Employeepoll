import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Dashboard = () => {
    const { questions } = useSelector((store) => store.questions);
    const { currentUser } = useSelector((store) => store.currentUser);
    const { isAnswered } = useSelector((store) => store.currentAnswered);

    const hasVoted = (question)  => {
        if (question.optionOne.votes.includes(currentUser.id) || question.optionTwo.votes.includes(currentUser.id)) {
            return true;
        } else  {
            return false;
        }
    } 
    
    return (
        <div className="dashboard">
        <ul>
        {[...questions]
            .sort((one, two) => two.timestamp - one.timestamp)
            .map((question) => {
            return isAnswered
                ? hasVoted(question) && (
                    
                    <div className="questions"
                    key={question.id}>
                    <p className="question-rather">
                        Would you rather
                    </p>
                    <p className="date-question">{new Date(question.timestamp).toDateString()}</p>
                    <li>
                        <p className="question-option">
                        {question.optionOne.text}
                        </p>
                        <span className="or">or </span>
                        <p className="question-option">
                        {question.optionTwo.text}
                        </p>
                        <Link
                        className="check-answer"
                        to={"questions/" + question.id}
                        >
                        View Your Answer
                        </Link>
                    </li>
                    </div>
                )
                : !hasVoted(question) && (
                    <div
                        key={question.id}
                        className="questions"
                    >
                        <p className="question-rather">
                        Would you rather
                        </p>
                        <p className="date-question">{new Date(question.timestamp).toDateString()}</p>
                        <li>
                        <p className="question-option">
                            {question.optionOne.text}
                        </p>
                        <span className="or">or </span>
                        <p className="question-option">
                            {question.optionTwo.text}

                        </p>
                        <Link
                            className="check-answer"
                            to={"questions/" + question.id}
                        >
                            Answer
                        </Link>
                        </li>
                    </div>
                    );
            })}
        </ul>
    </div>
    )
}

export default Dashboard