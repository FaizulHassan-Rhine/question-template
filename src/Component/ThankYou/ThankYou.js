import React, { useEffect } from 'react';
import './style.css';

const ThankYou = () => {

    useEffect(()=>{
       setTimeout(()=> window.location.reload(),5000)
    },[])
    
    return (
        <div className='container min-h-screen mx-auto flex flex-col justify-center'>
            <div class="flex gap-[75px] items-center justify-center bg-[#5c4449] py-[102px] rounded-md shadow-lg w-[644px] mx-auto">
                <span className="loader"></span>
                <div className='text-white'>
                    <p className='text-6xl font-bold'>Thank You</p>
                    <p className='text-2xl font-bold pt-3'>for Completing the Exam</p>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;