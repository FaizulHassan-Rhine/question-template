import './App.css';
import AnswerToQuestion from './Component/AnswerToQuestion/AnswerToQuestion';
import UserForm from './Component/UserForm/UserForm';
import SubjectForm from './Component/SubjectForm/SubjectForm';
import SetSubject from './Component/Dashboard/SetSubject/SetSubject';
import QuestionSubmit from './Component/Dashboard/QuestionSubmit/QuestionSubmit';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Login from './Component/Dashboard/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import AllQuestionList from './Component/Dashboard/AllQuestionList/AllQuestionList';
import ExamineeList from './Component/Dashboard/ExaminneList/ExamineeList';
import ExamineeExamDetails from './Component/Dashboard/ExamineeExamDetails/ExamineeExamDetails';
import LoadingPage from './Component/LoadingPage/LoadingPage';
import ThankYou from './Component/ThankYou/ThankYou';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddNewSubject from './Component/Dashboard/AddNewSubject/AddNewSubject';
import PrivateRouteDash from './Component/Dashboard/PrivateRouteDash/PrivateRouteDash';
import ExamError from './Component/ExamError/ExamError';
import NotifyPage from './Component/NotifyPage/NotifyPage';


export const RegFormContextManager = createContext();
export const UserContextManager = createContext();
export const apiUrlContextManager = createContext();

function App() {
  const [getRegFormInfo, setRegFormInfo] = useState({
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    district: '',
    university: '',
    graduation: '',
    subjectId: '',
    questionSetId: ''
  })

  const [getUserInfo, setUserInfo] = useState(0)
  const [getAdminUserInfo, setAdminUserInfo] = useState(0)
  const [getToken, setToken] = useState("p_k_hKqzczG8QEAdqdy0h5OMOO0ngQ4nawou");
  const [getApiBasicUrl, setApiBasicUrl] = useState("http://192.168.1.7:9001/api");

  return (
    <div className="App min-h-screen bg-yellow-300 unselectable">
      {/* <AnswerToQuestion /> */}
      {/* <UserForm></UserForm> */}
      {/* <SubjectForm></SubjectForm> */}
      {/* <Login></Login> */}
      {/* <SetSubject></SetSubject> */}
      {/* <QuestionSubmit></QuestionSubmit> */}
      <RegFormContextManager.Provider value={[getRegFormInfo, setRegFormInfo]}>

        <UserContextManager.Provider value={[getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo]}>
          <apiUrlContextManager.Provider value={[getApiBasicUrl, setApiBasicUrl]}>
            <Routes>
              <Route path="/" element={<UserForm />} />
              <Route path="/subject" element={<SubjectForm />} />
              <Route path="/login" element={<Login />} />
              {/* Private route */}
              <Route path="/exam/" element={<PrivateRoute />}>
                <Route path="answertoquestion" element={<AnswerToQuestion />} />
                <Route path="thankyou" element={<ThankYou />} />
              </Route>

              {/*Dashboard private route */}
              <Route path="/dashboard/" element={<PrivateRouteDash />}>
                <Route path="setsubject" element={<SetSubject />} />
                <Route path="createquestion" element={<QuestionSubmit />} />
                <Route path="all-question-list" element={<AllQuestionList />} />
                <Route path="examinee-list" element={<ExamineeList />} />
                <Route path="examinee-exam-details/:userId" element={<ExamineeExamDetails />} />
                <Route path="add-new-subject" element={<AddNewSubject />} />

              </Route>

              <Route path="/loading" element={<LoadingPage />} />
              <Route path="/exam-error" element={<ExamError />} />
              <Route path="/notify-page" element={<NotifyPage />} />
            </Routes>
          </apiUrlContextManager.Provider>

        </UserContextManager.Provider>
      </RegFormContextManager.Provider>
    </div>
  );
}

export default App;
