import React from 'react';
import './TopBar.css'; // Import CSS for styling
import SGULogo from '../assets/SGU-Logo.png'; // Adjust the path to your logo file

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <img src={SGULogo} alt="SGU Logo" className="logo" />
                <span className="system-name">HỆ THỐNG QUẢN LÝ NCKH</span>
            </div>
            <div className="top-bar-right">
                <i className="icon notification-icon">🔔</i>
                <i className="icon cart-icon">🛒</i>
                <i className="icon user-icon">👤</i>
            </div>
        </div>
    );
};

export default TopBar;