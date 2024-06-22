import React from 'react';
import { useNavigate } from 'react-router-dom';



const englishLevel = ['New', 'Beginner', 'Intermediate', 'Advance'];
const EngLevel: React.FC = () => {
    const handleButtonClick = (englishLevel: string) => {
        console.log('Selected:', englishLevel);
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-light_100 flex items-center justify-center px-10">
            <img src="/student.png" alt="Robot" className="w-1/6 h-auto mr-80" />
            <div className="w-1/3 bg-menu-blue p-10 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Select your English level</h1>
                <div className="flex flex-col space-y-4">
                    {englishLevel.map(type => (
                        <button 
                            key={type}
                            className="w-full p-4 text-xl text-white bg-options-blue"
                            onClick={() => handleButtonClick(type.toLowerCase())}>
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EngLevel;
