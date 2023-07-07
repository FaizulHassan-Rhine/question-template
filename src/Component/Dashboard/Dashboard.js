import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };
    const toggleMenu2 = () => {
        setOpen2(!open2);
    };
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login')

        console.log("Logged out");
    };

    // const [seconds, setSeconds] = useState(60);

    // useEffect(() => {
    //     const countdown = setInterval(() => {
    //         setSeconds(prevSeconds => prevSeconds - 1);
    //     }, 1000);

    //     if (seconds === 0) {
    //         clearInterval(countdown);
    //     }

    //     return () => {
    //         clearInterval(countdown);
    //     };
    // }, [seconds]);



    return (
        <div className='flex gap-4'>
            <div className="md:flex flex-col md:flex-row md:min-h-screen">
                <div


                    className="flex flex-col w-full md:w-[240px] text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
                    x-data="{ open: false }"
                >
                    <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                        <Link
                            href="#"
                            className="text-2xl  font-bold uppercase"
                        >
                            Dashboard
                        </Link>

                        <button
                            className="rounded-lg md:hidden  focus:outline-none focus:shadow-outline"
                            onClick={toggleMenu}
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-6 h-6"
                            >
                                <path
                                    x-show="!open"
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    x-show="open"
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${open ? 'block' : 'hidden'
                            }`}
                    >
                        {/* <Link
                            className="block px-4 py-2 mt-2 text-left text-sm font-semibold text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"

                        >
                            Admin Profile
                        </Link> */}

                        <div onClick={() => setOpen(!open)} className="relative z-[999]">
                            <button
                                // onClick={toggleMenu}
                                className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-center bg-transparent rounded-lg  hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            >
                                <span>Examinee Question</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform  ${open ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`${open ? 'block' : 'hidden'
                                    } absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg`}
                            >
                                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 ">
                                    <Link to="/dashboard/all-question-list"
                                        className="block px-4 py-2 mt-2 text-sm font-semibold  text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"

                                    >
                                        All Question List
                                    </Link>

                                    <Link
                                        to="/dashboard/add-new-subject"
                                        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    >
                                        Create New Subject
                                    </Link>

                                    <Link
                                        to="/dashboard/createquestion"
                                        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    >
                                        Create New Question
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div onClick={() => setOpen2(!open2)} className="relative">
                            <button
                                // onClick={toggleMenu2}
                                className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-center bg-transparent rounded-lg hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            >
                                <span>Examinee Result</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform  ${open2 ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`${open2 ? 'block' : 'hidden'
                                    } absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg`}
                            >
                                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                    <Link
                                        to="/dashboard/examinee-list"
                                        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"

                                    >
                                        All Examinee List
                                    </Link>
                                    {/* <Link
                                        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg  focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    >
                                        Examinee Result
                                    </Link> */}

                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-left ml-3 ">
                            <button
                                onClick={handleLogout}
                                className="text-sm text-white bg-yellow-400 px-4 py-1 rounded-md font-semibold"
                            >
                                Sign Out
                            </button>
                        </div>

                        {/* <div>
                        {seconds === 0 ? (
                            <p>Time Over!!!</p>
                        ) : (
                            <p>{seconds} seconds remaining</p>
                        )}
                    </div> */}


                    </nav>
                </div >
            </div >

            {children}
        </div>
    );
};

export default Dashboard;
