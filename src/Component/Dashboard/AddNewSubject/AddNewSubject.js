import React, { useState } from 'react';
import Dashboard from '../Dashboard';




const AddNewSubject = () => {
    const [subTitle, setsubTitle] = useState('');
    const [subTitles, setsubTitles] = useState([]);
    const subjects = ['Subject 1', 'Subject 2', 'Subject 3', ...subTitles];

    const [topicTitle, setTopicTitle] = useState('');
    const [topicTitles, setTopicTitles] = useState([]);
    const topics = ['topic 1', 'topic 2', 'topic 3', ...topicTitles];



    const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
    const [selectedTopic, setSelectedTopic] = useState(topics[0]);

    const handlesubTitleChange = (event) => {
        setsubTitle(event.target.value);
    };
    const handleTopicTitleChange = (event) => {
        setTopicTitle(event.target.value);
    };


    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };
    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const newSubjects = [...subTitles, subTitle];
        setsubTitles(newSubjects);
        setsubTitle('');
        setSelectedSubject(newSubjects[0]);
    };

    const handleTopicSubmit = (event) => {
        event.preventDefault();
        const newTopics = [...topicTitles, topicTitle];
        setTopicTitles(newTopics);
        setTopicTitle('');
        setSelectedTopic(newTopics[0]);
    };

    return (
        <Dashboard>
            <div className='container mx-auto pt-8'>
                <h2 className='mb-8 text-3xl font-extrabold'>Create New Subject</h2>
                {/* Create new Subject start-------------------------------------- */}
                <div className="max-w-md mx-auto p-4  bg-cyan-50 shadow-lg rounded-md" onSubmit={handleSubmit}>
                    <label className="block text-left text-base font-semibold pb-2" htmlFor="newSubject">
                        Add New Subject
                    </label>
                    <div className="flex mb-4">

                        <input
                            className="w-full py-1 px-3 rounded border focus:outline-none shadow-lg border-gray-300"
                            type="text"
                            id="newSubject"
                            value={subTitle}
                            onChange={handlesubTitleChange}
                            required
                        />
                        <button
                            className="ml-2 rounded-lg px-4 bg-cyan-500 font-semibold shadow-lg hover:bg-green-500 text-white "
                            type="button"
                            onClick={handleSubmit}
                        >
                            Add
                        </button>

                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-base font-semibold pb-2" htmlFor="subject">
                            Subjects
                        </label>
                        <select
                            className="w-full py-1 px-3 rounded border focus:outline-none shadow-lg border-gray-200"
                            id="subject"
                            value={selectedSubject}
                            onChange={handleSubjectChange}
                        >
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                {/* Create new Subject end------------------------------------------ */}


                {/* Create new Topic Start------------------------------------- */}
                <div className="max-w-md mx-auto p-4 mt-8  bg-cyan-50 shadow-lg rounded-md" onSubmit={handleTopicSubmit}>
                    <label className="block text-left text-base font-semibold pb-2" htmlFor="newTopic">
                        Add New Topic
                    </label>
                    <div className="flex mb-4">

                        <input
                            className="w-full py-1 px-3 rounded border shadow-lg focus:outline-none border-gray-300"
                            type="text"
                            id="newTopic"
                            value={topicTitle}
                            onChange={handleTopicTitleChange}
                            required
                        />
                        <button
                            className="ml-2 rounded-lg px-4 shadow-lg bg-cyan-500 font-semibold hover:bg-green-500 text-white "
                            type="button"
                            onClick={handleTopicSubmit}
                        >
                            Add
                        </button>

                    </div>
                    <div className="mb-4 ">
                        <label className="block text-left text-base font-semibold pb-2" htmlFor="topic">
                            Topics
                        </label>
                        <ul
                            className=" py-1 px-3 rounded w-[235px] border bg-white text-left  border-gray-200"
                            id="topic"
                            value={selectedTopic}
                            onChange={handleTopicChange}
                        >
                            {topics.map((topic) => (
                                <li className='bg-green-100 w-52 shadow-lg mb-2 mt-2 px-2' key={topic} value={topic}>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* create new Topic end--------------------------------------------- */}
                {/* <div className="flex items-center justify-center">
                    <button
                        className="bg-green-500 hover:bg-orange-500 mt-4 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div> */}
            </div>
        </Dashboard>
    );
};

export default AddNewSubject;
