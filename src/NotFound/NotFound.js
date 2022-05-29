import React from 'react';
import img from '../images/notFound/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-full max-h-screen' src={img} alt='' />
        </div>
    );
};

export default NotFound;