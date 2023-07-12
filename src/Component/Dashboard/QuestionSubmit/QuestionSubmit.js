import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import Dashboard from '../Dashboard';
import { UserContextManager, apiUrlContextManager } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuestionSubmit = () => {
    const [questionData, setQuestionData] = useState({
        subject: '',
        questionSet: '',
        question: '',
    });
    const [selectedOption, setSelectedOption] = useState([]);
    const [getSubjectList, setSubjectList] = useState([])
    const [getSubjectId, setSubjectId] = useState(0);
    const [getTopic, setTopic] = useState([])
    const [getTopicChoos, setTopicChoos] = useState(0);
    const [getQuestion, setQuestion] = useState("");
    const [getAnswerOne, setAnswerOne] = useState("");
    const [getAnswerTwo, setAnswerTwo] = useState("");
    const [getAnswerThree, setAnswerThree] = useState("");
    const [getAnswerFour, setAnswerFour] = useState("");

    const [getApiBasicUrl] = useContext(apiUrlContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);

    const showToastMessage = () => {
        toast.success('New Question Added', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

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

    const subjectOnchange = (e) => {
        e.preventDefault();

        const subId = e.target.value;

        setSubjectId(subId)
        if (subId) {
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
                })
        } else {
            setTopic([])
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuestionData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOptionChange = (event) => {

        const checkValue = event.target.value;

        if (event.target.checked) {
            setSelectedOption([...selectedOption, checkValue]);
        } else {

            // console.log(selectedOption.includes(checkValue))

            const valueList = selectedOption;
            const arr = valueList.filter((item) => {
                return item !== checkValue
            })

            setSelectedOption(arr)

        }
        // console.log(" checked : " + event.target.checked);
    };

    const resetData = () => {
        setQuestion("")
        setAnswerOne("")
        setAnswerTwo("")
        setAnswerThree("")
        setAnswerFour("")
        handleCheckboxChange()
        setSelectedOption([]) // reset it for check
    }

    const handleCheckboxChange = () => {
        const checkboxes = document.querySelectorAll('input[name="selectedResult"]');

        console.log("length : " + checkboxes.length)

        for (let index = 0; index < checkboxes.length; index++) {
            const element = checkboxes[index];
            element.checked = false;

        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(questionData);

        const questionsData = {
            "user_info_id": getAdminUserInfo,
            "question_set_id": getTopicChoos,
            "question_subject_id": getSubjectId,
            "question_name": getQuestion,
            "question_ans": `${getAnswerOne}|||${getAnswerTwo}|||${getAnswerThree}|||${getAnswerFour}`,
            "right_ans": selectedOption.join("|||")
        }

        console.log(questionsData)
        if (selectedOption.length > 0) {
            fetch(`${getApiBasicUrl}/save-question`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'bearer ' + getToken
                },
                body: JSON.stringify(questionsData),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    resetData()
                    showToastMessage()
                })
        } else {
            alert("please check the right answer")
        }


    };
    const isQuestionDisabled = questionData.subject === '';

    useEffect(() => {
        subjectLoad()
    }, [])
    return (
        <Dashboard>
            <div className="container mx-auto pt-10 pb-10">
                <h2 className='mb-8 text-3xl uppercase font-extrabold'>
                    Create A New Question
                </h2>
                <form className="form  mb-4" onSubmit={handleSubmit}>
                    <div className='bg-white px-8 pt-6 pb-8 mb-10 shadow-md rounded'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
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
                            </select>
                        </div>
                        {getTopic.length > 0 &&
                            <div className="mb-4">
                                <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="questionSet">
                                    Question Set
                                </label>
                                <select
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline }`}
                                    id="questionSet"
                                    name="questionSet"
                                    onChange={(e) => setTopicChoos(e.target.value)}
                                    required
                                // disabled={isQuestionDisabled}
                                >
                                    <option value="">Select Question</option>
                                    {getTopic.map(data =>
                                        <option value={data.id}>{data.set_name}</option>
                                    )}
                                </select>

                            </div>
                        }
                    </div>

                    <div className='bg-white px-8 pt-6 pb-8 shadow-md rounded'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="question">
                                Set Question
                            </label>
                            <textarea
                                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="question"
                                name="question"
                                value={getQuestion}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder='Set Your Question'
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-left text-sm font-bold mb-2">
                                Set Answers
                            </label>
                            <div className='flex justify-start'>
                                <label className="inline-flex items-center mb-2 gap-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value={getAnswerOne}
                                        onChange={handleOptionChange}
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result1"
                                        value={getAnswerOne}
                                        onChange={(e) => setAnswerOne(e.target.value)}
                                        placeholder='Answer A'
                                    />
                                </label>
                            </div>
                            <div className='flex justify-start '>
                                <label className="inline-flex items-center gap-3 mb-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value={getAnswerTwo}
                                        onChange={handleOptionChange}
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result2"
                                        value={getAnswerTwo}
                                        onChange={(e) => setAnswerTwo(e.target.value)}
                                        placeholder='Answer B'
                                    />
                                </label>
                            </div>
                            <div className='flex justify-start '>
                                <label className="inline-flex items-center mb-2 gap-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value={getAnswerThree}
                                        onChange={handleOptionChange}
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result3"
                                        value={getAnswerThree}
                                        onChange={(e) => setAnswerThree(e.target.value)}
                                        placeholder='Answer C'
                                    />
                                </label>
                            </div>
                            <div className='flex justify-start '>
                                <label className="inline-flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value={getAnswerFour}
                                        onChange={handleOptionChange}
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result4"
                                        value={getAnswerFour}
                                        onChange={(e) => setAnswerFour(e.target.value)}
                                        placeholder='Answer D'
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="bg-green-500 hover:bg-orange-500 mt-8 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                                type="submit"

                            >
                                Submit
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default QuestionSubmit;
