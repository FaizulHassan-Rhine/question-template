import logo from './logo.svg';
import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';
import SubjectForm from './Component/SubjectForm/SubjectForm';
import Login from './Component/Login/Login';
import SetSubject from './Component/Dashboard/SetSubject/SetSubject';
import QuestionSubmit from './Component/Dashboard/QuestionSubmit/QuestionSubmit';

function App() {
  return (
    <div className="App min-h-screen bg-yellow-300 ">
      {/* <AnswerToQuestion /> */}
      {/* <UserForm></UserForm> */}
      {/* <SubjectForm></SubjectForm> */}
      {/* <Login></Login> */}
      {/* <SetSubject></SetSubject> */}
      <QuestionSubmit></QuestionSubmit>
    </div>
  );
}

export default App;
