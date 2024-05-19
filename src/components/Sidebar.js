import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scenarios">Scenarios</Link></li>
                <li><Link to="/vehicles">Vehicles</Link></li>
                <li><Link to="/add-scenario">Add Scenario</Link></li>
                <li><Link to="/add-vehicle">Add Vehicle</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;