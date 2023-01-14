import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import Addpoll from "./components/Addpoll";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Error from "./components/Error";
import Question from "./components/Question";
import { getQuestions } from "./reducers/questionsSlice";
import { getUsers } from "./reducers/userSlice";
import { useEffect } from "react";

function App() {
  const { currentUser } = useSelector((store) => store.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, [dispatch]);

  if (currentUser === "") {
    return <Login />;
  }

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" on exact element={<Home />}></Route>
        <Route path="/addpoll" exact element={<Addpoll />}></Route>
        <Route path="/leaderboard" exact element={<Leaderboard />}></Route>
        <Route path="/login" exact element={<Login />}></Route>

        <Route path="/questions/:id" element={<Question />}></Route>
      </Routes>
    </main>
  );
}
export default App;
