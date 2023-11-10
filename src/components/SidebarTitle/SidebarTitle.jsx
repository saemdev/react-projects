import React from 'react';

const SidebarTitle = ({SidebarTitle}) => {
    let {course_title}=SidebarTitle;

    return (
        <div>
            <h1 className='text-gray-600'>{course_title}</h1>
        </div>
    );
};

export default SidebarTitle;