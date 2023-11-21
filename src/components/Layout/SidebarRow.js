import React from 'react';
import './SidebarRow.css';
import Cookies from 'js-cookie';

function SidebarRow({ selected, Icon, title }) {

    const onClick = () => {
        if(title === "Logout"){
            Cookies.remove("token")
            Cookies.remove("username")
        }
    }

     return (
        <div className={`sideBarRow ${selected && 'selected'}`} onClick={onClick}>
            <Icon className='sideBarRow_icon' />
            <h2 className="sideBarRow_title">
                {title}
            </h2>
        </div>
    );
}

export default SidebarRow;
