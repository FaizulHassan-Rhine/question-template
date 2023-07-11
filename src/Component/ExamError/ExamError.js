import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { UserContextManager, apiUrlContextManager } from '../../App';
import { useLocation } from 'react-router-dom';

const ExamError = () => {


    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);

    const location = useLocation();

    useEffect(() => {

        setTimeout(() => window.location.reload(), 15000)
    }, [])


    return (
        <div className='container min-h-screen mx-auto flex flex-col justify-center'>
            <div class="flex gap-[75px]  items-center justify-center bg-[#5c4449] py-[102px] rounded-md shadow-lg w-[644px] mx-auto">
                <span className="error-loader"></span>
                <div className='text-white'>

                    <p className='text-3xl font-bold'>System Noncompliance</p>
                    <p className='text-2xl font-bold pt-3'>Please Contact HR</p>

                </div>
            </div>
        </div>
    );
};

export default ExamError;