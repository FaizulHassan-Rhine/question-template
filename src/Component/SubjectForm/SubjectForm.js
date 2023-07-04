import React, { useState } from 'react';


const SubjectForm = () => {
    const [subjectData, setSubjectData] = useState({

        subject: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubjectData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subjectData);
    };

    return (
        <div className="container mx-auto pt-32">
            <h2 className='mb-10 text-3xl font-extrabold'>
                Choose Your Subject
            </h2>
            <form className="max-w-lg mx-auto w-[500px] h-[250px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

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
                <div className="flex items-center justify-center">
                    <button
                        className="bg-green-500 hover:bg-orange-500 mt-16 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubjectForm;
