import React from 'react';
import exam from '../../images/ins.jpg'
import { Link } from 'react-router-dom';
const OpenPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
              <div className="container mx-auto pt-10 pb-10">
                <div className='flex justify-center items-center gap-20'>
                    <div className='mt-10 '>
                        <img className='h-[470px] w-[500px] rounded' src={exam} />
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <h2 className=' uppercase text-3xl font-extrabold'>
                            Instructions
                        </h2>
                      
                     <div className="max-w-lg mx-auto w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4">
                     <ol className='text-sm text-left flex flex-col gap-3 '>
                        <li><b>1.</b> Please provide your personal information on the following page, including your Name, Email, and Mobile Number, just like in your resume.</li>
                        <li><b>2.</b> You will encounter a set of precisely 50 questions covering various topics. Each question allows a time limit of 45 seconds for your response.</li>
                        <li><b>3.</b> Every question will present two accurate answers for you to choose from.</li>
                        <li><b>4.</b> Although you have the option to skip any question, please note that revisiting skipped questions will not be possible.</li>
                        <li><b>5.</b> Upon completing the exam, your score will be displayed on the screen.</li>
                        <li><b>6.</b> Subsequently, you will be notified by HR for a brief interview in the next phase. Further details regarding the interview will be communicated to you. That concludes the instructions for today.</li>
                      </ol>
                      <div>
                       
                        <button className="bg-cyan-400 hover:bg-green-500 mt-6 mb-2 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                            <Link to="/form">Proceed</Link>
                        </button>
                      </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenPage;