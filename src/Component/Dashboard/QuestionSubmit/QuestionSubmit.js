import React, { useState } from 'react';


const QuestionSubmit = () => {
    const [questionData, setQuestionData] = useState({

        question: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuestionData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(questionData);
    };

    return (
        <div className="container mx-auto pt-20">
            <h2 className='mb-10 text-3xl font-extrabold'>
                Choose Your Subject
            </h2>
            <form className="max-w-lg mx-auto w-[500px] h-[350px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="question">
                        Set Question
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="question"
                        name="question"
                        value={questionData.question}
                        onChange={handleInputChange}
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
                                type="radio"
                                className="form-radio h-4 w-4 text-indigo-600"
                                name="selectedResult"
                                value="result1"
                                checked={questionData.selectedResult === "result1"}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="result1"
                                value={questionData.result1}
                                onChange={handleInputChange}
                                placeholder='Answer A'
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
                                checked={questionData.selectedResult === "result2"}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="result2"
                                value={questionData.result2}
                                onChange={handleInputChange}
                                placeholder='Answer B'
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
                                checked={questionData.selectedResult === "result3"}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="result3"
                                value={questionData.result3}
                                onChange={handleInputChange}
                                placeholder='Answer C'
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
                                checked={questionData.selectedResult === "result4"}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="result4"
                                value={questionData.result4}
                                onChange={handleInputChange}
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
                </div>
            </form>
        </div>
    );
};

export default QuestionSubmit;
