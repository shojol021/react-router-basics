import React from 'react';
import './activelink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;