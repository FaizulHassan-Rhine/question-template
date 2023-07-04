import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetSubject = () => {
    const [subjectData, setSubjectData] = useState({
        subject: '',
        question: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubjectData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subjectData);
        navigate('/createquestion')

    };

    const isQuestionDisabled = subjectData.subject === '';

    return (
        <div className="container mx-auto pt-32">
            <h2 className='mb-10 text-3xl font-extrabold'>
                Set Subject & Question
            </h2>
            <form className="max-w-lg mx-auto w-[500px] h-[270px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                        name="subject"
                        value={subjectData.subject}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Inquiry</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="question">
                        Question Set
                    </label>
                    <select
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isQuestionDisabled ? 'bg-gray-300' : ''}`}
                        id="question"
                        name="question"
                        value={subjectData.question}
                        onChange={handleInputChange}
                        required
                        disabled={isQuestionDisabled}
                    >
                        <option value="">Select Question</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Inquiry</option>
                    </select>

                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-green-500 hover:bg-orange-500 mt-4 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SetSubject;
