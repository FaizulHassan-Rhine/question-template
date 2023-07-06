import React from 'react';
import Loading from '../Loading/Loading';

const LoadingPage = () => {

    return (
        <div className='min-h-screen container mx-auto flex flex-col justify-center'>
            <div className='font-bold'>
                <Loading />
            </div>
        </div>
    );
};

export default LoadingPage;