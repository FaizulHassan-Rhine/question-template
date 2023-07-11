import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { UserContextManager, apiUrlContextManager } from '../../App';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const [getExamDetail, seExamDetail] = useState([])
    const [getApiBasicUrl] = useContext(apiUrlContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);

    const location = useLocation();

    const examineeResults = () => {
        fetch(`${getApiBasicUrl}/examinee-justin-result?user_info_id=${location.state.userId}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                seExamDetail(data)
            })
    }

    useEffect(() => {
        examineeResults()
        setTimeout(() => window.location.reload(), 50000)
    }, [])


    return (
        <div className='container min-h-screen mx-auto flex flex-col justify-center'>
            <div class="flex gap-[75px]  items-center justify-center bg-[#5c4449] py-[102px] rounded-md shadow-lg w-[644px] mx-auto">
                <span className="loader"></span>
                <div className='text-white'>

                    <p className='text-6xl font-bold'>Thank You</p>
                    <p className='text-2xl font-bold pt-3'>for Completing the Exam</p>
                    <p className='text-3xl font-bold text-white rounded-3xl bg-cyan-500 mt-5 p-2'>Correct Answer : {getExamDetail.total_right_ans}/{location.state.totalQ} </p>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;