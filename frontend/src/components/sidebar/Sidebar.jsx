import React from 'react';
import sidebar_style from "./Sidebar.module.css";
import { Link } from 'react-router-dom'; 

function Admin_Sidebar({ className }) {
    const role = localStorage.getItem('role');

    return (
        <div className={`${sidebar_style.sidebar} ${className}`}>
            <div><br /></div>
            <Link to="/Home">Home</Link>
            <Link to="/Report_a_Crime">Report Crime</Link> 
            <Link to="/Pending_Cases">Pending cases</Link>
            {role === "admin" && <Link to="/Closed_Cases">Closed Cases</Link>}
            {role === "admin" && <Link to="/Ongoing_Investigations">Ongoing Investigations</Link>}
            <Link to="/Settings">Settings</Link>
            <Link to="/Contact_Us">Contact us</Link>
        </div>
    );
}

export default Admin_Sidebar;