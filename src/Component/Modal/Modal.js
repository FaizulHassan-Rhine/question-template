import React, { useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-black opacity-75"></div>
                        </div>
                        <div className="relative z-50 w-[500px] h-[250px] inline-block p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded">
                            {children}
                            <button
                                className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
                                onClick={onClose}
                            >
                                <FaRegCircleXmark className='h-6 w-6'></FaRegCircleXmark>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
