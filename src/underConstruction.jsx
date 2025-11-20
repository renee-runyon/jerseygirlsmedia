"use client";

import { useState, useEffect } from "react";

// Move catMessages OUTSIDE the component
const catMessages = [
    "I'm working on it...",
    "Please stand by. I'm chasing a bug.",
    "I would be done, but I saw a laser pointer.",
    "Taking a break. Union rules.",
];

export default function UnderConstruction() {
    const [message, setMessage] = useState(catMessages[0]);
    const [meow, setMeow] = useState(false);

    // Rotate message every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * catMessages.length);
            setMessage(catMessages[random]);
        }, 3000);

        return () => clearInterval(interval);
    }, []); // <-- no warnings now

    // Meow effect on button press
    const handleMeow = () => {
        setMeow(true);
        setTimeout(() => setMeow(false), 800);
    };

    return (
        <div className="cat-container">
            <h1 className="title">Site Under Construction</h1>

            <div className="cat-wrapper">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NHQ1djdwZDI2azQ0MG1hanJoaHl5dGltaHJ6MWl5ZHM0NnM5cnJ2OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LHb4L8BytFRGx15quf/giphy.gif"
                    alt="Cat typing furiously"
                    className="cat-gif"
                />
            </div>

            <p className="cat-text">{message}</p>

            <button className="meow-button" onClick={handleMeow}>
                Pet the Developer
            </button>

            {meow && <p className="meow">GET OFF ME!</p>}

            {/* PRODUCTIVITY METER */}
            <div className="productivity-wrapper">
                <p className="prod-label">Productivity: 1%</p>

                <div className="prod-bar">
                    <div className="prod-fill"></div>
                </div>

                <p className="prod-caption">Estimated completion: lol</p>
            </div>
        </div>
    );
}
