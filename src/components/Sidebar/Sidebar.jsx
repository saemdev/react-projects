import React from 'react';
import SidebarTitle from '../SidebarTitle/SidebarTitle';

const Sidebar = ({courseTitle,credits}) => {
    return (
        <div className='w-1/4 text-center border-2 rounded-xl'>
            <h1 className='text-xl font-semibold mb-2'>Course Name : {courseTitle.length}</h1>
            
           
            {
                courseTitle.map(title=><SidebarTitle SidebarTitle={title}></SidebarTitle>)
            } 
        </div>
    );
};

export default Sidebar;