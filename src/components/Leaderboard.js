import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { users, currentUser } = useSelector((store) => store.currentUser);
  const { questions } = useSelector((store) => store.questions);

  const getNumberQuestion = (userid) => {
    const authorQuestion = questions.filter((ques) => {
      return ques.author === userid;
    });
    return authorQuestion.length;
  };

  const sortScores = () => {
    const userKeys = Object.keys(users);
    let initUsers = [];
    userKeys.map((userKey) => {
      return initUsers.push(users[userKey]);
    });
    const allUsers = initUsers.map((user) => ({
      ...user,
      numberQuestion: getNumberQuestion(user.id),
      numberAnswer: Object.keys(user.answers).length,
      totalNumber: getNumberQuestion(user.id) + Object.keys(user.answers).length,
    }));

    return allUsers;
  };

  return (
    <>
    <div className="leader-title">
      <h1>
        Leaderboard
      </h1>
      </div>
    <div className="leaderboard">
      {[...sortScores()]
        .sort((one, two) => two.totalNumber - one.totalNumber)
        .map((user) => {
          return (
            <div
              key={user.id}
            >
              <div className="user-leader">
                <ul>
                  <li>
                    <img
                      className="profile"
                      src={user.avatarURL}
                      alt="userProfile"
                    ></img>
                  </li>
                  <li className="user-info">
                    {currentUser.id === user.id ?  <span> {user.name} (You)</span> : <span> {user.name}</span>}
                  </li>

                  <li className="info">
                    {user.numberQuestion} Question(s)
                  </li>
                  <li className="info">
                    {user.numberAnswer} Answers(s)
                  </li>

                  <li className="total">
                    {user.totalNumber} Total point(s)
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
    </>
  );
};
export default Leaderboard;
