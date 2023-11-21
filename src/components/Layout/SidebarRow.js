import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SidebarRow.css';

function SidebarRow({ selected, Icon, title }) {
    useEffect(() => {
        if(title === "Logout"){
            localStorage.removeItem("token")
            localStorage.removeItem("username")
        }
    })
    return (
        <Link to={`/${title.toLowerCase()}`}>
            <div className={`sideBarRow ${selected && 'selected'}`}>
                <Icon className='sideBarRow_icon' />
                <h2 className="sideBarRow_title">
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default SidebarRow;
