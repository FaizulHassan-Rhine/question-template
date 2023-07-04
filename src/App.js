import logo from './logo.svg';
import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';

function App() {
  return (
    <div className="App min-h-screen bg-yellow-300">
      {/* <AnswerToQuestion /> */}
      <UserForm></UserForm>
    </div>
  );
}

export default App;
