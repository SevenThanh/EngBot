import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/identity'); 
    };

    return (
        <div className="w-full py-1/10 px-1/10 bg-gradient-to-r from-light_100
                        to-background flex flex-row gap-24 justify-center">
            <img src="main.png" alt="ENGBOT MASCOT" className="object-scale-down" />
            <div className="max-w-1/2">
                <p className="text-4xl mb-6 leading-tight">
                    Not confident in your English? Engbot got you covered with
                    <strong> engaging real-life lessons </strong> tailored
                    <strong> just for you </strong>
                </p>
                {}
                <button 
                    className="text-3xl px-8 py-4 rounded-lg bg-light_100 shadow"
                    onClick={handleGetStartedClick} 
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}
