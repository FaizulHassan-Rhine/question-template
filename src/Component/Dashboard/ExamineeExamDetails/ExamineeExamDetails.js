import React, { useContext, useEffect, useState } from 'react';
import Dashboard from '../Dashboard';
import PiChart from '../Chart/PiChart';
import { useParams } from 'react-router';
import { UserContextManager, apiUrlContextManager } from '../../../App';




const ExamineeExamDetails = () => {

    const [getExamDetail, setExamDetail] = useState([])

    const [getApiBasicUrl] = useContext(apiUrlContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);

    let { userId } = useParams();

    const examineeResults = () => {
        fetch(`${getApiBasicUrl}/examinee-detail-result?user_info_id=${userId}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setExamDetail(data)
            })
    }

    const [questionList, setQuestionList] = useState([{

        question: 'What is Your Favourite Color?',
        result1: 'RED',
        result2: 'GREEN',
        result3: 'YELLOW',
        result4: 'BLUE',
        selectedResult: '',
        right: true,
    },
    {

        question: 'What is Your Favourite Food?',
        result1: 'APPLE',
        result2: 'BANANA',
        result3: 'MANGO',
        result4: 'CHERRY',
        selectedResult: '',
        right: false,

    },

    {

        question: 'What is Your Favourite Sports?',
        result1: 'CRICKET',
        result2: 'FOOTBALL',
        result3: 'HOCKY',
        result4: 'BASEBALL',
        selectedResult: '',
        right: true
    },
    {

        question: 'What is Your Favourite Sports?',
        result1: 'CRICKET',
        result2: 'FOOTBALL',
        result3: 'HOCKY',
        result4: 'BASEBALL',
        selectedResult: '',
        right: true
    },
    {

        question: 'What is Your Favourite Sports?',
        result1: 'CRICKET',
        result2: 'FOOTBALL',
        result3: 'HOCKY',
        result4: 'BASEBALL',
        selectedResult: '',
        right: true
    },
    {

        question: 'What is Your Favourite Sports?',
        result1: 'CRICKET',
        result2: 'FOOTBALL',
        result3: 'HOCKY',
        result4: 'BASEBALL',
        selectedResult: '',
        right: true
    },
    {

        question: 'What is Your Favourite Sports?',
        result1: 'CRICKET',
        result2: 'FOOTBALL',
        result3: 'HOCKY',
        result4: 'BASEBALL',
        selectedResult: '',
        right: true
    },

    ]);




    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        setQuestionList((prevQuestionList) => {
            const updatedQuestionList = [...prevQuestionList];
            updatedQuestionList[index] = {
                ...updatedQuestionList[index],
                [name]: value
            };
            return updatedQuestionList;
        });
    };


    useEffect(() => {
        examineeResults();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(questionList);
    };
    const isQuestionDisabled = questionList.subject === '';

    return (
        <Dashboard>
            {console.log(userId)}
            <div className="container mx-auto pt-10 pb-10">
                <h2 className='mb-6 text-3xl font-extrabold'>
                    Examinee Detail Information
                </h2>
                <div>
                    <div className='mb-12 text-xl flex justify-center gap-5 font-extrabold'>
                        <p className='bg-white p-2 rounded-lg'>{typeof getExamDetail[0] !== 'undefined' && getExamDetail[0].name}</p>
                        {/* <p className='bg-white p-2 rounded-lg'>Marks: <span className='text-green-600'>35</span>/<span className='text-red-600'>50</span></p> */}
                    </div>
                    <div>
                        {/* <PiChart /> */}
                    </div>
                </div>

                <div className='grid md:grid-cols-3 xl:grid-cols-4 justify-items-center  gap-5 mr-2'>
                    {getExamDetail.map((qList, index) => (
                        <div className='bg-white w-[250px] h-[230px] px-4 pt-4 pb-2 shadow-md rounded-lg'>
                            <div className='mb-2'>
                                <div className='flex justify-between'>
                                    <div>
                                        <label className='block text-gray-700 text-left text-[10px] font-bold mb-2' htmlFor='question'>
                                            Question No : {index + 1}
                                        </label>
                                    </div>
                                </div>
                                <input
                                    className='shadow appearance-none border rounded text-[10px] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='question'
                                    name='question'
                                    value={qList.question_name}
                                    onChange={(event) => handleInputChange(event, index)}
                                    placeholder='Set Your Question'
                                    disabled
                                    required
                                    type='text'
                                ></input>
                            </div>
                            <div className='2'>
                                <label className='block text-gray-700 text-left text-[10px] font-bold mb-2'>Answers</label>
                                {qList.answerList.map((ansList, index_2) =>
                                    <>
                                        {
                                            // console.log(qList.given_answer_list.some(((givenAnser) => givenAnser.is_active == ansList.is_active)))

                                            // console.log(qList.given_answer_list.some(id=> id==ansList.id) ? true: false)

                                            // ${
                                            //     qList.given_answer_list.some((id) => id === ansList.id) ? 'bg-green-200' : ''
                                            //   }
                                            // console.log("ansList id : "  + ansList.id  + " qList : " + qList.given_answer_list[index].id)
                                        }
                                        <div className='flex justify-start'>
                                            <label className='inline-flex items-center mb-2 gap-3'>
                                                {/* <input
                                                            type='checkbox'
                                                            className='form-checkbox h-3 w-3 text-indigo-600'
                                                            name='selectedResult'
                                                            value='result1'
                                                            checked={questionList.selectedResult === 'result1'}
                                                            onChange={(event) => handleInputChange(event, index)}
                                                            disabled
                                                        /> */}
                                                <input
                                                    type='text'
                                                    className={`shadow appearance-none border  text-[10px]  rounded-l w-[160px] py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                                            ${ansList.isRight ? qList.given_answer.some(gId => gId === ansList.id) ? 'bg-green-500' : 'bg-yellow-500' 
                                                            : 
                                                            qList.given_answer.some(gId => gId === ansList.id) ? 'bg-red-500' : ''}
                                                            `}
                                                    name='result1'
                                                    value={ansList.question_ans}
                                                    // onChange={(event) => handleInputChange(event, index)}
                                                    // placeholder='Answer A'
                                                    disabled
                                                />
                                            </label>
                                        </div>
                                    </>
                                )
                                }

                            </div>


                        </div>
                    ))}

                </div>
            </div>
        </Dashboard>
    );
};

export default ExamineeExamDetails;







