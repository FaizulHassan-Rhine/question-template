import React, { useState } from 'react';




const ExamineeExamDetails = () => {



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



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(questionList);
    };
    const isQuestionDisabled = questionList.subject === '';

    return (
        <div className="container mx-auto pt-10 pb-10">
            <h2 className='mb-6 text-3xl font-extrabold'>
                Examinee Detail Information
            </h2>
            <div className='mb-12 text-xl flex justify-center gap-5 font-extrabold'>
                <p className='bg-white p-2 rounded-lg'>Faizul Hassan</p>
                <p className='bg-white p-2 rounded-lg'>Marks: <span className='text-green-600'>35</span>/<span className='text-red-600'>50</span></p>
            </div>


            <div className='grid grid-cols-3  gap-5'>
                {questionList.map((questionList, index) => (
                    <div className='bg-white w-[405px] h-[290px] px-4 pt-4 pb-2 shadow-md rounded-lg'>
                        <div className='mb-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <label className='block text-gray-700 text-left text-sm font-bold mb-2' htmlFor='question'>
                                        Question No : {index + 1}
                                    </label>
                                </div>

                            </div>
                            <input
                                className='shadow appearance-none border rounded text-sm w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='question'
                                name='question'
                                value={questionList.question}
                                onChange={(event) => handleInputChange(event, index)}
                                placeholder='Set Your Question'
                                disabled
                                required
                                type='text'
                            ></input>
                        </div>
                        <div className='2'>
                            <label className='block text-gray-700 text-left text-sm font-bold mb-2'>Answers</label>
                            <div className='flex justify-start'>
                                <label className='inline-flex items-center mb-2 gap-3'>
                                    <input
                                        type='radio'
                                        className='form-radio h-4 w-4 text-indigo-600'
                                        name='selectedResult'
                                        value='result1'
                                        checked={questionList.selectedResult === 'result1'}
                                        onChange={(event) => handleInputChange(event, index)}
                                        disabled


                                    />
                                    <input
                                        type='text'
                                        className={`shadow appearance-none border ${questionList.right === true ? "bg-green-500" : "bg-red-600"} text-sm rounded-l w-80 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                        name='result1'
                                        value={questionList.result1}
                                        onChange={(event) => handleInputChange(event, index)}
                                        placeholder='Answer A'
                                        disabled
                                    />
                                </label>
                            </div>

                            <div className='flex justify-start '>
                                <label className="inline-flex items-center gap-3 mb-2">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value="result2"
                                        checked={questionList.selectedResult === "result2"}
                                        onChange={(event) => handleInputChange(event, index)}
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border text-sm rounded-l w-80 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result2"
                                        value={questionList.result2}
                                        onChange={(event) => handleInputChange(event, index)}
                                        placeholder='Answer B'
                                        disabled
                                    />
                                </label>
                            </div>
                            <div className='flex justify-start '>
                                <label className="inline-flex items-center mb-2 gap-3">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value="result3"
                                        checked={questionList.selectedResult === "result3"}
                                        onChange={(event) => handleInputChange(event, index)}
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border text-sm rounded-l w-80 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result3"
                                        value={questionList.result3}
                                        onChange={(event) => handleInputChange(event, index)}
                                        placeholder='Answer C'
                                        disabled
                                    />
                                </label>
                            </div>
                            <div className='flex justify-start '>
                                <label className="inline-flex items-center gap-3">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4 text-indigo-600"
                                        name="selectedResult"
                                        value="result4"
                                        checked={questionList.selectedResult === "result4"}
                                        onChange={(event) => handleInputChange(event, index)}
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        className="shadow appearance-none border text-sm rounded-l w-80 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="result4"
                                        value={questionList.result4}
                                        onChange={(event) => handleInputChange(event, index)}
                                        placeholder='Answer D'
                                        disabled
                                    />
                                </label>
                            </div>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    );
};

export default ExamineeExamDetails;







