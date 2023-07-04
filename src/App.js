import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';
import SubjectForm from './Component/SubjectForm/SubjectForm';
import SetSubject from './Component/Dashboard/SetSubject/SetSubject';
import QuestionSubmit from './Component/Dashboard/QuestionSubmit/QuestionSubmit';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Login from './Component/Dashboard/Login/Login';
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
      {/* <QuestionSubmit></QuestionSubmit> */}
      <RegFormContextManager.Provider value={[getRegFormInfo, setRegFormInfo]}>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/subject" element={<SubjectForm />} />
          <Route path="/answertoquestion" element={<AnswerToQuestion />} />
          <Route path="/login" element={<Login/>} />          
          <Route path="/setsubject" element={<SetSubject/>} />          
          <Route path="/createquestion" element={<QuestionSubmit/>} />          
        </Routes>
      </RegFormContextManager.Provider>
    </div>
  );
}

export default App;
