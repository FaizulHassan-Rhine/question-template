import React, { useContext, useEffect, useState } from 'react';
import { FaSortUp, FaSortDown, FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { UserContextManager, apiUrlContextManager } from '../../../App';


const ExamineeList = () => {
    const [examinees, setExaminees] = useState([
        { name: 'Examinee 1', email: 'examinee1@example.com', totalNumber: 30, resultStatus: 'Pass' },
        { name: 'Examinee 2', email: 'examinee2@example.com', totalNumber: 21, resultStatus: 'Fail' },
        { name: 'Examinee 3', email: 'examinee3@example.com', totalNumber: 12, resultStatus: 'Pass' },
        { name: 'Examinee 4', email: 'examinee4@example.com', totalNumber: 19, resultStatus: 'Pass' },
        { name: 'Examinee 5', email: 'examinee5@example.com', totalNumber: 21, resultStatus: 'Fail' },
        { name: 'Examinee 6', email: 'examinee6@example.com', totalNumber: 46, resultStatus: 'Pass' },
        { name: 'Examinee 7', email: 'examinee7@example.com', totalNumber: 36, resultStatus: 'Pass' },
        { name: 'Examinee 8', email: 'examinee8@example.com', totalNumber: 18, resultStatus: 'Fail' },
    ]);

    const [sortDirection, setSortDirection] = useState('asc');
    const [filterStatus, setFilterStatus] = useState("all");
    const [showFilterButtons, setShowFilterButtons] = useState(false);
    const [getExamneeData, setExamneeData] = useState([]);

    const [getApiBasicUrl] = useContext(apiUrlContextManager);
    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo, setAdminUserInfo] = useContext(UserContextManager);


    const sortNumbers = () => {
        const sortedExaminees = [...getExamneeData];

        if (sortDirection === 'asc') {
            sortedExaminees.sort((a, b) => a.totalNumber - b.totalNumber);
            setSortDirection('desc');
        } else {
            sortedExaminees.sort((a, b) => b.totalNumber - a.totalNumber);
            setSortDirection('asc');
        }

        setExaminees(sortedExaminees);
    };

    const filterExaminees = (status) => {
        setFilterStatus(status);
    };

    const examineeListFunc = () => {
        fetch(`${getApiBasicUrl}/examinee-result?user_info_id=${getAdminUserInfo}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setExamneeData(data)
            })
    }

    useEffect(() => {
        examineeListFunc()
    }, [])

    const filteredExaminees =
        filterStatus === "all"
            ? getExamneeData
            : getExamneeData.filter((examinee) => examinee.result_status === filterStatus);


    return (
        <Dashboard>
            <div className="container mx-auto pt-12">
                <h2 className="mb-10 text-3xl uppercase font-extrabold">All Examinee List</h2>
                <div className="mx-auto rounded-lg">
                    <table className="mx-auto w-[900px] bg-white border rounded-lg">
                        <thead>
                            <tr className='h-16'>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Name
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Mobile No
                                </th>
                                <th
                                    className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={sortNumbers}
                                >
                                    Total Number
                                    {sortDirection === 'asc' ? (
                                        <FaSortUp className="h-6 w-6 mt-3 inline ml-1 text-gray-500" />
                                    ) : (
                                        <FaSortDown className="h-6 w-6 mb-3 inline ml-1 text-gray-500" />
                                    )}
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b relative">
                                    Result Status
                                    <span
                                        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                                        data-tip="Filter Results"
                                        data-for="filterTooltip"
                                        onClick={() => setShowFilterButtons(!showFilterButtons)}
                                    >
                                        <FaFilter className="h-4 w-4 mr-2 inline text-gray-500" />
                                    </span>

                                    {showFilterButtons && (
                                        <div className="flex mt-1 ml-3 gap-1  ">
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "all"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("all")}
                                            >
                                                All
                                            </button>
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "Pass"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("PASS")}
                                            >
                                                Pass
                                            </button>
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "Fail"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("FAIL")}
                                            >
                                                Fail
                                            </button>
                                        </div>
                                    )}
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {filteredExaminees.map((examinee, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.name}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.mobile_no}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.result}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.result_status}
                                        {/* Pending */}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <Link to={`/dashboard/examinee-exam-details/${examinee.id}`} className='px-2 py-1 rounded-lg text-white font-semibold bg-cyan-400'>
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </Dashboard>
    );
};

export default ExamineeList;
