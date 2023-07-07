import React, { useContext, useState } from 'react';
import { RegFormContextManager } from '../../App';
import { useNavigate } from 'react-router-dom';


const UserForm = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     gender: '',
    //     phoneNumber: '',
    //     district: '',
    //     university: '',
    //     graduation: '',

    // });

    const [getRegFormInfo, setRegFormInfo] = useContext(RegFormContextManager);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegFormInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getRegFormInfo);
        navigate('/subject')
    };


    return (
        <>
            <div className="container mx-auto pt-8 pb-10">
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
                                name="country"
                                // value={formData.phoneNumber}
                                // onChange={handleInputChange}
                                placeholder="+880"
                                disabled
                            />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phoneNumber"
                                type="text"
                                name="phoneNumber"
                                value={getRegFormInfo.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
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
