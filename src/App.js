import logo from './logo.svg';
import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';
import SubjectForm from './Component/SubjectForm/SubjectForm';

function App() {
  return (
    <div className="App min-h-screen bg-yellow-300 ">
      {/* <AnswerToQuestion /> */}
      <UserForm></UserForm>
      {/* <SubjectForm></SubjectForm> */}
    </div>
  );
}

export default App;
