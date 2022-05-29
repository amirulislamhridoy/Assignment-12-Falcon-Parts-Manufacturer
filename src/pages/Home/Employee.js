import React from 'react';
import w1 from '../../images/worker/worker1.jpg'
import w2 from '../../images/worker/worder2.jpg'
import w3 from '../../images/worker/worker3.jpg'
import w4 from '../../images/worker/worker4.jpg'
import w5 from '../../images/worker/worder5.jpg'
import w6 from '../../images/worker/worder6.jpg'
import w7 from '../../images/worker/worder7.jpg'
import w8 from '../../images/worker/images8.jpg'


const Employee = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h2 className=' mt-5 mb-5 text-4xl font-bold text-center text-red-800'>Our Employee</h2>
            <div className='flex flex-wrap justify-center'>
                <img src={w1} alt='' />
                <img src={w2} alt='' />
                <img src={w3} alt='' />
                <img src={w4} alt='' />
                <img src={w5} alt='' />
                <img src={w6} alt='' />
                <img src={w7} alt='' />
                <img src={w8} alt='' />
            </div>
        </div>
    );
};

export default Employee;