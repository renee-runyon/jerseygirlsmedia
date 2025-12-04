import React, { useState, useEffect } from 'react';
import './underConstruction.css';

const UnderConstruction = () => {
    const [produceItems, setProduceItems] = useState([
        { emoji: '🍅', position: 0, speed: 0.45, id: 1 },
        { emoji: '🌽', position: -20, speed: 0.4, id: 2 },
        { emoji: '🍑', position: -40, speed: 0.35, id: 3 },
        { emoji: '🫐', position: -60, speed: 0.25, id: 4 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProduceItems(prev => prev.map(item => ({
                ...item,
                position: item.position >= 120 ? -20 : item.position + item.speed
            })));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="construction-container">
            <div className="content">
                <div className="header-section">
                    <h1 className="main-title">
                        <span className="title">Jersey Girls Media</span>

                    </h1>
                    <div className="produce-parade">
                        {produceItems.map(item => (
                            <div
                                key={item.id}
                                className="produce-item"
                                style={{ left: `${item.position}%` }}
                            >
                                {item.emoji}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="construction-box">
                    <div className="construction-header">
                        <span className="cone">🚧</span>
                        <h2>Under Construction</h2>
                        <span className="cone">🚧</span>
                    </div>

                    <p className="tagline">
                        We're building something fresh from the Garden State!
                    </p>

                    <div className="footer-note">
                        <p>Check Back Soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;