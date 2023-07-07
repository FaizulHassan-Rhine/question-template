import React, { useContext, useEffect, useState } from 'react';
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";
import Dashboard from '../Dashboard';
import { UserContextManager, apiUrlContextManager } from '../../../App';



const AllQuestionList = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [getSubjectList, setSubjectList] = useState([])
    const [getSubjectId, setSubjectId] = useState(0);
    const [getTopic, setTopic] = useState([])
    const [getTopicChoos, setTopicChoos] = useState(0);
    const [getApiBasicUrl] = useContext(apiUrlContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(UserContextManager);
    const [getAllQuestionList, setAllQuestionList] = useState([]);

    // const [questionList, setQuestionList] = useState([{

    //     question: 'What is Your Favourite Color?',
    //     result1: 'RED',
    //     result2: 'GREEN',
    //     result3: 'YELLOW',
    //     result4: 'BLUE',
    //     selectedResult: ''
    // },
    // {

    //     question: 'What is Your Favourite Food?',
    //     result1: 'APPLE',
    //     result2: 'BANANA',
    //     result3: 'MANGO',
    //     result4: 'CHERRY',
    //     selectedResult: ''
    // },

    // {

    //     question: 'What is Your Favourite Sports?',
    //     result1: 'CRICKET',
    //     result2: 'FOOTBALL',
    //     result3: 'HOCKY',
    //     result4: 'BASEBALL',
    //     selectedResult: ''
    // },

    // ]);

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
    const questionLoadFunc = (subId, setId) => {

        fetch(`${getApiBasicUrl}/examinee-questions?question_subject_id=${subId}&question_set_id=${setId}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllQuestionList(data)
            })
    }

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        // setQuestionList((prevQuestionList) => {
        //     const updatedQuestionList = [...prevQuestionList];
        //     updatedQuestionList[index] = {
        //         ...updatedQuestionList[index],
        //         [name]: value
        //     };
        //     return updatedQuestionList;
        // });
    };

    const handleEdit = (index) => {
        setIsEditable(true);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        // setQuestionList((prevQuestionList) => {
        //     const updatedQuestionList = [...prevQuestionList];
        //     updatedQuestionList.splice(index, 1);
        //     return updatedQuestionList;
        // });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(questionList);
        questionLoadFunc(getSubjectId, getTopicChoos)

    };
    const isQuestionDisabled = getSubjectList.length === 0;

    useEffect(() => {
        subjectLoad()
    }, [])

    return (
        <Dashboard>
            <div className="container mx-auto pt-10 pb-10">
                <h2 className='mb-8 text-3xl font-extrabold'>
                    All Question List
                </h2>
                <form className="w-[400px] mx-auto   mb-4" onSubmit={handleSubmit}>
                    <div className=' px-8 pt-6 bg-cyan-50 pb-4 mb-10 shadow-xl rounded'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <select
                                className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                name="subject"
                                onChange={subjectOnchange}
                                required
                            >
                                <option value="">Select subject</option>
                                {getSubjectList.length > 0 && getSubjectList.map((data, index) =>
                                    <option key={index} value={data.id}>{data.subject_name}</option>
                                )}
                                {/* <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="billing">Billing Inquiry</option> */}
                            </select>
                        </div>
                        {getTopic.length > 0 &&
                            <div className="mb-4">
                                <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="questionSet">
                                    Question Set
                                </label>
                                <select
                                    className={`shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isQuestionDisabled ? 'bg-gray-300' : ''}`}
                                    id="questionSet"
                                    name="questionSet"
                                    // value={questionList.questionSet}
                                    onChange={(e) => setTopicChoos(e.target.value)}
                                    required
                                    disabled={isQuestionDisabled}
                                >
                                    <option value="">Select Question</option>
                                    {getTopic.map(data =>
                                        <option value={data.id}>{data.set_name}</option>
                                    )}
                                    {/* <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="billing">Billing Inquiry</option> */}
                                </select>

                            </div>
                        }
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-green-500 hover:bg-orange-500 mt-4 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>




                </form>

                <div className='grid grid-cols-2 justify-items-center mx-12 gap-8'>
                    {getAllQuestionList.map((qList, index) => (
                        <div className='bg-white w-[420px] h-[290px] px-4 pt-4 pb-2 shadow-md rounded-lg'>
                            <div className='mb-2'>
                                <div className='flex justify-between'>
                                    <div>
                                        <label className='block text-gray-700 text-left text-sm font-bold mb-2' htmlFor='question'>
                                            Question No : {index + 1}
                                        </label>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='cursor-pointer text-green-500' onClick={() => handleEdit(index)}>
                                            <FaPenToSquare />
                                        </div>
                                        <div className='cursor-pointer text-red-600' onClick={() => handleDelete(index)}>
                                            <FaTrashCan />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className='shadow appearance-none border rounded text-sm w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='question'
                                    name='question'
                                    value={qList.question_name}
                                    onChange={(event) => handleInputChange(event, index)}
                                    placeholder='Set Your Question'
                                    disabled={!isEditable || index !== editIndex}
                                    required
                                    type='text'
                                ></input>
                            </div>
                            <div className='2'>
                                <label className='block text-gray-700 text-left text-sm font-bold mb-2'>Answers</label>
                                {
                                    qList.ansList.map(data =>
                                        <div className='flex justify-start'>
                                            <label className='inline-flex items-center mb-2 gap-3'>
                                                <input
                                                    type='checkbox'
                                                    className='form-checkbox h-4 w-4 text-indigo-600'
                                                    name='selectedResult'
                                                    value={data.id}
                                                    onChange={(event) => handleInputChange(event, index)}
                                                    disabled={!isEditable || index !== editIndex}


                                                />
                                                <input
                                                    type='text'
                                                    className='shadow appearance-none border text-sm rounded-l w-80 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                    name='result1'
                                                    value={data.question_ans}
                                                    onChange={(event) => handleInputChange(event, index)}
                                                    placeholder='Answer A'
                                                    disabled={!isEditable || index !== editIndex}
                                                />
                                            </label>
                                        </div>
                                    )
                                }

                            </div>

                            <div className="flex items-center justify-center">
                                {!isEditable || index !== editIndex ? (
                                    null
                                ) : <button
                                    className="bg-green-500 text-sm hover:bg-orange-500 mt-2 text-white font-bold py-1 px-4 rounded-lg"
                                    type="submit"
                                >
                                    Update
                                </button>}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Dashboard>
    );
};

export default AllQuestionList;
