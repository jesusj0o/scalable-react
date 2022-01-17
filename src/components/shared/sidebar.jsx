import React from 'react';
import './sidebar.css'
const Sidebar = () => {
    return ( 
        <div className='sidebar-menu'>
            <div className='brand-container'>
                <p>My project</p>
            </div>
           <div className='items-container'>
                <ul>
                    <li>
                        <a href={"#"}>Home</a>
                    </li>
                    <li>
                        <a href={"#"}>Stuffs</a>
                    </li>
                    <li>
                        <a href={"#"}>More stuffs</a>
                    </li>
                </ul>
           </div>
        </div>
    );
}
 
export default Sidebar;