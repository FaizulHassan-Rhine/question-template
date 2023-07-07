

import React, { useContext, useEffect, useState } from "react";
import q from './img/q.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { RegFormContextManager, UserContextManager } from "../../App";

const AnswerToQuestion = () => {

    const [selectedOption, setSelectedOption] = useState();
    const [getQuestionList, setQuestionList] = useState([]);
    const [getQIndex, setQIndex] = useState(-1);
    const [getLimitTime, setLimitTime] = useState(0);
    const [counter, setCounter] = useState(0);
    const [getSwitchLoad, setSwitchLoad] = useState(false);

    const location = useLocation();
    const navigate = useNavigate(); 

    const [getRegFormInfo, setRegFormInfo] = useContext(RegFormContextManager);
    const [getUserInfo] = useContext(UserContextManager);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
    };

    const resetData = () => {
        setSelectedOption();
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the selected option


        const answerData = {
            "qeustion_list_id": getQuestionList[getQIndex].id,
            "question_ans_list_id": selectedOption,
            "user_info_id": getUserInfo,
            "question_set_id": getRegFormInfo.questionSetId
        }

        if(selectedOption > 0){

       
        fetch('http://192.168.1.7:9001/api/check-answer', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answerData),
        }
        ).then(res => res.json())
            .then(data => {
                console.log(data)
                setQIndex(getQIndex => getQIndex = getQIndex + 1);
                setCounter(getLimitTime)

                console.log("getQuestionList : " +getQuestionList.length+ " getQIndex : " + getQIndex  )
                getQuestionList.length-1 == getQIndex && navigate('/exam/thankyou'); 
                resetData(); 
                // questionLoadFunc(data.question_subject_id, data.question_set_id, data.exam_time);
            })
        }else{
            alert("please selecte one of the question")
        }

        console.log(selectedOption);
    };

    const alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K"]
    const questionList = ["RED", "YELLOW", "BLUE", "GREEN"];

    // const colorList = ['orange', 'green', 'indigo', 'purple', 'fuchsia', 'rose']

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const timeOuter = () => {
        const answerData = {
            "qeustion_list_id": getQuestionList[getQIndex].id,
            "question_ans_list_id": 0,
            "user_info_id": getUserInfo,
            "question_set_id": getRegFormInfo.questionSetId,
            "timeout": true
        }

        fetch('http://192.168.1.7:9001/api/check-answer', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answerData),
        }
        ).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    useEffect(() => {
        setLimitTime(location.state.time);
        setCounter(location.state.time)
        setQuestionList(location.state.questions)
        setQIndex(0)
        console.log("testing")
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((counter) => {
                if (counter === 0) {
                    clearInterval(interval);
                    setQIndex(getQIndex => getQIndex = getQIndex + 1);
                    timeOuter(); 
                    getQuestionList.length-1 == getQIndex && navigate('/exam/thankyou'); 
                    return getLimitTime; // Restart the countdown from 30
                }
                return counter - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [counter === 0, counter === getLimitTime]);



    return (
        <div className="container mx-auto flex flex-col  w-[700px] pt-28">
            {/* <h1 className="text-6xl text-center font-bold mb-12">Question & Answer</h1> */}
            {console.log(" getUserInfo : " + getUserInfo)}
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <div className="bg-white rounded-lg relative py-5 px-3 shadow-md">
                        <img className="w-20 absolute top-[-55px] left-1/2 bg-white py-[15px] px-[20px] rounded-t-3xl" style={{ transform: 'translateX(-50%)' }} src={q} />
                        <label className="block text-xl font-semibold text-center">{typeof getQuestionList[getQIndex] !== 'undefined' && getQuestionList[getQIndex].question_name}</label>
                    </div>
                    <div className="pt-16 w-[60%] mx-auto flex flex-col gap-5">

                        {
                            typeof getQuestionList[getQIndex] !== 'undefined' && getQuestionList[getQIndex].ansList.map((data, index) => (
                                <div key={index}
                                    className={`items-center text-xl gap-3 grid grid-cols-12 bg-[#f8f8f8] border-2 transition duration-300 border-white rounded-l cursor-pointer ${selectedOption == data.id ? 'bg-green-500 text-white' : ''
                                        }`}
                                >
                                    <span className={`col-span-2 bg-indigo-500 text-white  py-2  px-0 rounded-l`}>
                                        {alphabetList[index]}
                                    </span>
                                    <input
                                        type="checkbox"
                                        id={`option${index + 1}`}
                                        value={data.id}
                                        checked={selectedOption == data.id}
                                        onChange={handleOptionChange}
                                        className=" h-6 w-6 cursor-pointer hidden"
                                        required
                                    />
                                    <label className="col-span-10 cursor-pointer text-left  py-2 " htmlFor={`option${index + 1}`}>
                                        {data.question_ans}
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
            <div className="absolute right-5 top-4 rounded-full border-[10px] border-white flex justify-center items-center text-6xl font-bold w-[150px] h-[150px] shadow-lg">
                <span>{counter}</span>
            </div>
        </div>
    );
};




export default AnswerToQuestion