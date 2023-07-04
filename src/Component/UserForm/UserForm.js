import React, { useState } from 'react';


const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        district: '',
        university: '',
        graduation: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mx-auto pt-4 pb-10">
            <h2 className='mb-10 text-3xl font-extrabold'>
                Registration Form
            </h2>
            <form className="max-w-lg mx-auto w-[500px] h-[650px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="university">
                        University
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="university"
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        placeholder="Enter your university name"
                        required
                    />
                </div>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="graduation">
                        Graduation
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="graduation"
                        type="text"
                        name="graduation"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Graduation from"
                        required
                    />
                </div>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="district">
                        District
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="district"
                        type="text"
                        name="district"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your district name"
                        required
                    />
                </div>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <div className="flex">
                        <label className="inline-flex items-center border shadow appearance-none mr-4 py-1 px-2 rounded-md">
                            <input
                                type="radio"
                                className="form-radio text-gray-700 cursor-pointer"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleInputChange}
                                required
                            />
                            <span className="ml-2 cursor-pointer">Male</span>
                        </label>
                        <label className="inline-flex items-center border shadow appearance-none rounded-md px-2 py-1">
                            <input
                                type="radio"
                                className="form-radio text-gray-700 cursor-pointer"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleInputChange}
                                required
                            />
                            <span className="ml-2 cursor-pointer">Female</span>
                        </label>
                    </div>
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
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-green-500 hover:bg-orange-500 mt-2 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
