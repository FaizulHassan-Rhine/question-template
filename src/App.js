import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';
import SubjectForm from './Component/SubjectForm/SubjectForm';
import Login from './Component/Login/Login';
import SetSubject from './Component/Dashboard/SetSubject/SetSubject';
import QuestionSubmit from './Component/Dashboard/QuestionSubmit/QuestionSubmit';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
export const RegFormContextManager = createContext();

function App() {
  const [getRegFormInfo, setRegFormInfo] = useState({
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    district: '',
    university: '',
    graduation: '',
    subjectId: ''
  })

  return (
    <div className="App min-h-screen bg-yellow-300 ">
      {/* <AnswerToQuestion /> */}
      {/* <UserForm></UserForm> */}
      {/* <SubjectForm></SubjectForm> */}
      {/* <Login></Login> */}
      {/* <SetSubject></SetSubject> */}
      <QuestionSubmit></QuestionSubmit>
      <RegFormContextManager.Provider value={[getRegFormInfo, setRegFormInfo]}>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/subject" element={<SubjectForm />} />
          <Route path="/answertoquestion" element={<AnswerToQuestion />} />
        </Routes>
      </RegFormContextManager.Provider>
    </div>
  );
}

export default App;
