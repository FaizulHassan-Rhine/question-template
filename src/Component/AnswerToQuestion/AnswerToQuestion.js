

import React, { useState } from "react";
import q from './img/q.svg';

const AnswerToQuestion = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the selected option
        console.log(selectedOption);
    };

    const alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K"]

    const questionList = ["RED", "YELLOW", "BLUE", "GREEN"];

    const colorList = ['orange', 'green', 'indigo', 'purple', 'fuchsia', 'rose']

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
        <div className="container mx-auto flex flex-col  w-[700px] pt-28">
            {/* <h1 className="text-6xl text-center font-bold mb-12">Question & Answer</h1> */}

            <form className="" onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <div class="bg-white rounded-lg relative py-5 px-3 shadow-md">
                        <img className="w-20 absolute top-[-55px] left-1/2 bg-white py-[15px] px-[20px] rounded-t-3xl" style={{ transform: 'translateX(-50%)' }} src={q} />
                        <label className="block text-xl font-semibold text-center">What is your favorite color?</label>
                    </div>
                    <div className="pt-16 w-[60%] mx-auto flex flex-col gap-5">

                        {
                            questionList.map((data, index) => (
                                <div
                                    className={`items-center text-xl gap-3 grid grid-cols-12 bg-[#f8f8f8] border-2 transition duration-300 border-white rounded-l cursor-pointer ${selectedOption === `option${index + 1}` ? 'bg-green-500 text-white' : ''
                                        }`}
                                >
                                    <span className={`col-span-2 bg-indigo-500 text-white  py-2  px-0 rounded-l`}>
                                        {alphabetList[index]}
                                    </span>
                                    <input
                                        type="radio"
                                        id={`option${index + 1}`}
                                        value={`option${index + 1}`}
                                        checked={selectedOption === `option${index + 1}`}
                                        onChange={handleOptionChange}
                                        className=" h-6 w-6 cursor-pointer hidden"
                                    />
                                    <label className="col-span-10 cursor-pointer text-left  py-2 " htmlFor={`option${index + 1}`}>
                                        {data}
                                    </label>
                                </div>
                            ))
                        }


                    </div>

                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-green-500 hover:bg-orange-500  text-2xl text-white font-bold py-2 px-8 mt-5 transition duration-300 rounded">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};




export default AnswerToQuestion