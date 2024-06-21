import React from 'react';



const userTypes = ['Student', 'Teacher', 'Parent', 'Professional', 'Other'];
const UserIdentity: React.FC = () => {
    const handleButtonClick = (userType: string) => {
        console.log('Selected:', userType);
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-light_100 flex items-center justify-center px-10">
            <img src="/student.png" alt="Robot" className="w-1/6 h-auto mr-80" />
            <div className="w-1/3 bg-menu-blue p-10 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Which best describes you?</h1>
                <div className="flex flex-col space-y-4">
                    {userTypes.map(type => (
                        <button 
                            key={type}
                            className="w-full p-4 text-xl text-white bg-options-blue rounded hover:bg-blue-800"
                            onClick={() => handleButtonClick(type.toLowerCase())}>
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserIdentity;
