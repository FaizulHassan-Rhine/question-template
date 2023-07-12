import React, { } from 'react';


const NotifyPage = () => {





    return (
        <div className='container min-h-screen mx-auto flex flex-col justify-center'>
            <div class="  bg-[#5c4449] p-10 rounded-md shadow-lg w-[644px] mx-auto">

                <div className='text-white'>
                    <p className='text-5xl text-yellow-400 font-bold text-center p-4'>!!!!!! Attention !!!!!!!</p>
                    <p className='text-2xl font-bold text-left p-4'>For each question, you will have a time limit of 35 seconds. Please note that once you proceed to the next question, you will not be able to revisit the previous question.</p>
                </div>

            </div>
            <div className="flex justify-center mt-7">
                <button type="submit" className="bg-green-500 hover:bg-orange-500  text-2xl text-white font-bold py-2 px-8 mt-5 transition duration-300 rounded-xl">
                    Start
                </button>
            </div>
        </div>
    );
};

export default NotifyPage;