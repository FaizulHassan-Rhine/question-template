import React, { useContext, useState } from 'react';
import { RegFormContextManager } from '../../App';
import { useNavigate } from 'react-router-dom';


const UserForm = () => {
    const [getRegFormInfo, setRegFormInfo] = useContext(RegFormContextManager);
    const navigate = useNavigate();
    const [valuee, setValue] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegFormInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/\D/g, '');
        const limitedValue = sanitizedValue.slice(0, 11);
        setValue(limitedValue);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getRegFormInfo);
        navigate('/subject')
    };

    const handleBlur = () => {
        if (valuee.length !== 11) {
            alert('Input must have 11 digits.');
        }
    };

    return (
        <>
            <div className="container mx-auto pt-10 pb-10">
                <h2 className='mb-10 text-3xl font-extrabold'>
                    Registration Form
                </h2>
                <form className="max-w-lg mx-auto w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={getRegFormInfo.name}
                            onChange={handleInputChange}
                            autoComplete="off"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={getRegFormInfo.email}
                            onChange={handleInputChange}
                            autoComplete="off"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <div className="flex">
                            <input
                                className="shadow appearance-none border rounded w-28 py-2 px-3 bg-blue-100 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                id="country"
                                type="text"
                                value="+88"
                                name="country"
                                disabled
                            />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phoneNumber"
                                type="text"
                                name="phoneNumber"
                                value={valuee}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Enter your phone number"
                                required
                                onBlur={handleBlur}

                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-cyan-400 hover:bg-green-500 mt-6 mb-2 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserForm;
