import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegFormContextManager, UserContextManager, apiUrlContextManager } from '../../App';
import LoadingPage from '../LoadingPage/LoadingPage';


const SubjectForm = () => {
    const [getSubjectList, setSubjectList] = useState([])
    const [getTopic, setTopic] = useState([])
    const [getLoading, setLoading] = useState(false);
    const [getRegFormInfo, setRegFormInfo] = useContext(RegFormContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(UserContextManager);
    const [getApiBasicUrl] = useContext(apiUrlContextManager); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(getRegFormInfo)

        // name: '',
        // email: '',
        // gender: '',
        // phoneNumber: '',
        // district: '',
        // university: '',
        // graduation: '',
        // subjectId: '',
        // questionSetId: ''

        const examineeFormData = {
            "name": getRegFormInfo.name,

            "phone_no":getRegFormInfo.phoneNumber,
            "graduation_name":getRegFormInfo.graduation,
            "univercity_name":getRegFormInfo.university,
            "district_name":getRegFormInfo.district,
            "question_subject_id":getRegFormInfo.subjectId,
            "question_set_id":getRegFormInfo.questionSetId,
            "user_type_id":0,
            "is_active":true,
            "is_deleted":false,
            "password":"",
            "email":getRegFormInfo.email,
            "gender":getRegFormInfo.gender
            }

        console.log(examineeFormData); 

        fetch(`${getApiBasicUrl}/examinee-register`,{
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              'Authorization': 'bearer ' + getToken
            },
            body: JSON.stringify(examineeFormData),
        }
        ).then(res => res.json())
            .then(data => {
                console.log(data)
                setUserInfo(data.user_info_id)
                questionLoadFunc(data.question_subject_id, data.question_set_id, data.exam_time);
            })
    };

    const subjectOnchange = (e) => {
        e.preventDefault();

        const subId = e.target.value;

        if(subId){
            fetch(`${getApiBasicUrl}/question-sets?quesiton_subject_id=${subId}`, {
                headers: {
                    'Authorization': 'bearer ' + getToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTopic(data)
                setRegFormInfo({...getRegFormInfo, 
                    subjectId: subId,
                    questionSetId:data[0].id 
                })
            })
        } else {
            setTopic([])
        }

    }

    const subjectLoad = () => {
        fetch(`${getApiBasicUrl}/subjects`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => setSubjectList(data))
    }

    const questionLoadFunc = (subId, setId, time) => {

        // http://192.168.1.7:9001/api/examinee-questions?question_subject_id=1&question_set_id=1


        fetch(`${getApiBasicUrl}/examinee-questions?question_subject_id=${subId}&question_set_id=${setId}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setLoading(true); 
            setTimeout(()=>{
                navigate('/exam/answertoquestion',{state:{time:time, questions: data}})
            }, 3000)
        })
    }
    useEffect(() => {
        subjectLoad();
    }, [])
    if (getLoading) {
        return <LoadingPage />
    } else {
        return (
            <div className="container mx-auto pt-32">
                <h2 className='mb-10 text-3xl font-extrabold'>
                    Choose Your Subject
                </h2>
                <form className="max-w-lg mx-auto w-[500px] h-[220px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        {/* {getSubjectList.length == 0 && <i className='icon-spinner w-2 h-2 animate-spin mx-auto'></i>} */}

                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            name="subject"
                            onChange={subjectOnchange}
                            required
                        >
                            <option value="">Select subject</option>
                            {getSubjectList.length > 0 && getSubjectList.map((data, index) =>
                                <option key={index} value={data.id}>{data.subject_name}</option>
                            )}
                            {/* <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Inquiry</option> */}
                        </select>
                    </div>
                    {getTopic.length > 0 &&
                        <div className="mb-4 hidden">
                            <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="subject">
                                Topic
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required disabled value={getTopic[0].set_name} />
                        </div>
                    }
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-cyan-500 hover:bg-green-500 mt-12 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default SubjectForm;
