import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarRow.css';

function SidebarRow({ selected, Icon, title }) {
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
